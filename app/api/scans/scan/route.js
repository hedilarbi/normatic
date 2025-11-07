// app/api/scans/start/route.ts
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";
import { normalizeUrl } from "../../../../utils/normalizeUrl";
import { launchScanWebhook } from "../../../../services/webhook.services";
import { generateUUID } from "../../../../utils/generateUUID";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { userId, url, type, intensity } = body;

  let legalUrl = "";
  let rgpdUrl = "";
  let cgvUrl = "";

  if (type === "rgpd") {
    rgpdUrl = normalizeUrl(url);
  }
  if (type === "legals") {
    legalUrl = normalizeUrl(url);
  }
  if (type === "cgv") {
    cgvUrl = normalizeUrl(url);
  }

  const uuid = generateUUID();
  const result = await launchScanWebhook(
    uuid,
    cgvUrl,
    rgpdUrl,
    legalUrl,
    intensity
  );
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: `Échec du lancement du scan : ${result.error}` },
      { status: 500 }
    );
  }
  // ajouter une tâche dans Firestore
  const db = admin.firestore();
  const scan = await db.collection("scans").add({
    userId,

    status: "in_progress",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    type,
    scanUuid: uuid,
    rgpd: {
      url: rgpdUrl || null,
    },
    legals: {
      url: legalUrl || null,
    },
    cgv: {
      url: cgvUrl || null,
    },
  });

  // notify external webhook (n8n)

  return NextResponse.json({
    ok: true,
    message: "Scan lancé",
    scanId: scan.id,
  });
}
