// app/api/scans/start/route.ts
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";
import { normalizeUrl } from "../../../../utils/normalizeUrl";
import { launchScanWebhook } from "../../../../services/webhook.services";
import { generateUUID } from "../../../../utils/generateUUID";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { website, email, legal } = body;

  if (!website || !email) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  if (!legal.mentions && !legal.privacy && !legal.cgv) {
    return NextResponse.json(
      { ok: false, error: "Tu dois indiquer au moins un lien légal." },
      { status: 400 }
    );
  }

  let legalUrl = "";
  let rgpdUrl = "";
  let cgvUrl = "";

  if (legal.mentions) {
    legalUrl = normalizeUrl(legal.mentions);
    if (!legalUrl) {
      return NextResponse.json(
        { ok: false, error: "URL des mentions légales invalide." },
        { status: 400 }
      );
    }
  }

  if (legal.privacy) {
    rgpdUrl = normalizeUrl(legal.privacy);
    if (!rgpdUrl) {
      return NextResponse.json(
        {
          ok: false,
          error: "URL de la politique de confidentialité invalide.",
        },
        { status: 400 }
      );
    }
  }

  if (legal.cgv) {
    cgvUrl = normalizeUrl(legal.cgv);
    if (!cgvUrl) {
      return NextResponse.json(
        { ok: false, error: "URL des CGV invalide." },
        { status: 400 }
      );
    }
  }

  const url = normalizeUrl(website);

  if (!url)
    return NextResponse.json(
      { ok: false, error: "URL invalide." },
      { status: 400 }
    );

  const uuid = generateUUID();
  const result = await launchScanWebhook(uuid, cgvUrl, rgpdUrl, legalUrl);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: `Échec du lancement du scan : ${result.error}` },
      { status: 500 }
    );
  }
  // ajouter une tâche dans Firestore
  const db = admin.firestore();
  const scan = await db.collection("scans").add({
    websiteUrl: url,
    email,
    status: "pending",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    type: "free",
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
    message:
      "Scan lancé. Les résultats seront envoyés par email. Poursuis ton inscription pour accéder au tableau de bord.",
    scanId: scan.id,
  });
}
