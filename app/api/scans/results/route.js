// this route recievve the scan resultsts from the hook

// app/api/scans/results/route.js
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const { scanId, results } = body;

  if (!scanId || !results) {
    return NextResponse.json(
      { ok: false, error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  const db = admin.firestore();
  const scanRef = db.collection("scans").doc(scanId);
  const scanDoc = await scanRef.get();

  if (!scanDoc.exists) {
    return NextResponse.json(
      { ok: false, error: "Scan non trouvé." },
      { status: 404 }
    );
  }

  await scanRef.update({
    results,
    status: "completed",
    completedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  return NextResponse.json({ ok: true });
}
