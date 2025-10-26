// app/api/scans/results/route.js
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node runtime for nodemailer
export const dynamic = "force-dynamic";

function buildTransporter() {
  // Uses generic SMTP. Works with any provider (Mailtrap, SendGrid SMTP, your own, etc.)
  // Required env vars (examples below):
  // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM
  const port = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587/25/2525
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function renderResultsHTML({ website, uuid, results }) {
  const safe = (v) => (v === undefined || v === null ? "" : String(v));

  const sections = [
    { key: "rgpd", label: "RGPD" },
    { key: "legals", label: "Mentions légales" },
    { key: "cookies", label: "Cookies" },
    { key: "cgv", label: "CGV" },
  ];

  const rows = sections
    .map(({ key, label }) => {
      const s = results[key] || {};
      const result = safe(s.result || "error");
      const conform = s.conform ? "✅ Oui" : "❌ Non";
      const tokens = safe(s.tokens ?? "");
      const errors = Array.isArray(s.errors) ? s.errors : [];
      const errList =
        errors.length > 0
          ? `<ul style="margin:6px 0 0 18px">${errors
              .map((e) => `<li>${safe(e)}</li>`)
              .join("")}</ul>`
          : "<em>Aucune erreur listée</em>";

      return `
        <tr>
          <td style="padding:10px;border:1px solid #e5e7eb">${label}</td>
          <td style="padding:10px;border:1px solid #e5e7eb;text-transform:capitalize">${result}</td>
          <td style="padding:10px;border:1px solid #e5e7eb">${conform}</td>
          <td style="padding:10px;border:1px solid #e5e7eb">${tokens}</td>
          <td style="padding:10px;border:1px solid #e5e7eb">${errList}</td>
        </tr>
      `;
    })
    .join("");

  return `
  <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color:#111827">
    <h2 style="margin:0 0 10px">Résultats de Scan</h2>
    <p style="margin:0 0 16px">
      <strong>Site :</strong> ${safe(website || "—")}<br/>
      <strong>UUID :</strong> ${safe(uuid)}
    </p>
    <table style="border-collapse:collapse;border:1px solid #e5e7eb;width:100%;max-width:800px">
      <thead>
        <tr style="background:#f9fafb">
          <th style="padding:10px;border:1px solid #e5e7eb;text-align:left">Section</th>
          <th style="padding:10px;border:1px solid #e5e7eb;text-align:left">Résultat</th>
          <th style="padding:10px;border:1px solid #e5e7eb;text-align:left">Conforme</th>
          <th style="padding:10px;border:1px solid #e5e7eb;text-align:left">Tokens</th>
          <th style="padding:10px;border:1px solid #e5e7eb;text-align:left">Erreurs</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    <p style="margin-top:16px"><strong>Tokens total :</strong> ${safe(
      results.tokens ?? 0
    )}</p>
  </div>`;
}

async function sendScanResultsEmail({ to, website, uuid, results }) {
  const transporter = buildTransporter();

  const html = renderResultsHTML({ website, uuid, results });

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to, // prefer the scan's email; fallback handled by caller
    subject: `Résultats du scan – ${website || "Projet"} (${uuid})`,
    html,
  };
  console.log("[scan-email] sending to:", to);
  const response = await transporter.sendMail(mailOptions);
  console.log("[scan-email] sent:", response.messageId);
}

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  try {
    if (!body.uuid) {
      return NextResponse.json(
        { ok: false, error: "UUID du scan manquant." },
        { status: 400 }
      );
    }
    const results = body;

    const scansQuery = await admin
      .firestore()
      .collection("scans")
      .where("scanUuid", "==", body.uuid)
      .limit(1)
      .get();

    if (scansQuery.empty) {
      return NextResponse.json(
        { ok: false, error: "Scan introuvable." },
        { status: 404 }
      );
    }

    const scanDoc = scansQuery.docs[0];
    const scanRef = scanDoc.ref;

    // Persist results with sensible defaults
    await scanRef.set(
      {
        tokens: results.tokens || 0,
        rgpd: {
          result: results.rgpd?.result || null,
          conform: results.rgpd?.conform || null,
          errors: results.rgpd?.errors || [],
          tokens: results.rgpd?.tokens || 0,
        },
        legals: {
          result: results.legals?.result || "error",
          conform: results.legals?.conform || null,
          errors: results.legals?.errors || [],
        },
        cookies: {
          result: results.cookies?.result || null,
          conform: results.cookies?.conform || null,
          errors: results.cookies?.errors || [],
          tokens: results.cookies?.tokens || 0,
        },
        cgv: {
          result: results.cgv?.result || null,
          conform: results.cgv?.conform || null,
          errors: results.cgv?.errors || [],
          tokens: results.cgv?.tokens || 0,
        },
      },
      { merge: true }
    );

    await scanRef.update({
      status: "completed",
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const scanData = scanDoc.data() || {};
    const recipient =
      scanData.email ||
      results.email ||
      process.env.DEFAULT_RESULTS_TO ||
      process.env.SMTP_FROM; // final fallback to avoid empty 'to'

    // Slight delay to yield back control to the response
    sendScanResultsEmail({
      to: recipient,
      website: scanData.website || results.website,
      uuid: body.uuid,
      results: {
        tokens: results.tokens || 0,
        rgpd: results.rgpd || {},
        legals: results.legals || {},
        cookies: results.cookies || {},
        cgv: results.cgv || {},
      },
    });

    // Prepare the response immediately
    NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[scan-email] error:", error);
    return NextResponse.json(
      { ok: false, error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
  // Fire-and-forget email AFTER preparing the response:
}
