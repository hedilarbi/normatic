// app/api/scans/start/route.ts
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";
function normalizeUrl(raw) {
  try {
    const u = new URL(raw);
    u.hash = "";
    return u.toString().replace(/\/+$/, "");
  } catch {
    // si l’utilisateur entre "example.com", tenter d’ajouter https://
    try {
      const u2 = new URL(`https://${raw}`);
      u2.hash = "";
      return u2.toString().replace(/\/+$/, "");
    } catch {
      return null;
    }
  }
}

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

  const url = normalizeUrl(website);
  if (!url)
    return NextResponse.json(
      { ok: false, error: "URL invalide." },
      { status: 400 }
    );

  // ajouter une tâche dans Firestore
  const db = admin.firestore();
  const scan = await db.collection("scans").add({
    websiteUrl: url,
    legal,
    email,
    status: "pending",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    free_scran: true,
    rgpdScan: {
      url: legal.privacy || null,
    },
    mlScan: {
      url: legal.mentions || null,
    },
    cgvScan: {
      url: legal.cgv || null,
    },
  });

  // notify external webhook (n8n)
  try {
    const webhookUrl =
      "https://n8n.zdigital.fr/webhook/scan-cookies-legals-rgpd-cgv";
    const webhookKey = "WGnwRnS2t1o0vI1iKWmr0fTp";

    const payload = {
      uuid: scan.id,
      notify_url: "https://zdigital.fr/",
      scanType: "lite",
      urls: {},
    };

    if (legal.mentions) payload.urls.legals = legal.mentions;
    if (legal.privacy) payload.urls.privacy = legal.privacy;
    if (legal.cgv) payload.urls.cgv = legal.cgv;

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        Authorization: webhookKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text().catch(() => null);
    console.log("Webhook response:", res.status, text);

    await db.collection("scans").doc(scan.id).update({
      webhookSent: res.ok,
      webhookStatus: res.status,
      webhookResponse: text,
      webhookRequestedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (err) {
    await db
      .collection("scans")
      .doc(scan.id)
      .update({
        webhookSent: false,
        webhookError: String(err),
        webhookRequestedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
  }

  return NextResponse.json({
    ok: true,
    message:
      "Scan lancé. Les résultats seront envoyés par email. Poursuis ton inscription pour accéder au tableau de bord.",
    scanId: scan.id,
  });
}
