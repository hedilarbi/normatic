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

async function sendScanResultsEmail({ to, website, results }) {
  const transporter = buildTransporter();

  let html = `
    <h1>Résultats du scan</h1>
    <p>Bonjour,</p>
    <p>Votre scan pour le site <strong>${website || "Projet"}</strong> .</p>
   
   
  `;

  if (results.rgpd.result === "success") {
    html += `<h2>Conformité RGPD</h2>`;
    if (results.rgpd.conform) {
      html += `<p>Le site est conforme au RGPD.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme au RGPD.</p>`;
      results.rgpd.errors.forEach((error) => {
        html += `<li>${error}</li>`;
      });
    }
  }
  if (results.legals.result === "success") {
    html += `<h2>Conformité Mentions légales</h2>`;
    if (results.legals.conform) {
      html += `<p>Le site est conforme aux Mentions légales.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux Mentions légales.</p>`;
      results.legals.errors.forEach((error) => {
        html += `<li>${error}</li>`;
      });
    }
  }
  if (results.cgv.result === "success") {
    html += `<h2>Conformité CGV</h2>`;
    if (results.cgv.conform) {
      html += `<p>Le site est conforme aux CGV.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux CGV.</p>`;
      results.cgv.errors.forEach((error) => {
        html += `<li>${error}</li>`;
      });
    }
  }
  if (results.cookies.result === "success") {
    html += `<h2>Conformité Cookies</h2>`;
    if (results.cookies.conform) {
      html += `<p>Le site est conforme aux règles sur les Cookies.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux règles sur les Cookies.</p>`;
      results.cookies.errors.forEach((error) => {
        html += `<li>${error}</li>`;
      });
    }
  }

  html += ` <p>Veuillez vous connecter à votre tableau de bord pour consulter les résultats détaillés.</p>`;

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to, // prefer the scan's email; fallback handled by caller
    subject: `Résultats du scan – ${website || "Projet"}`,
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
          url: results.rgpd?.url || null,
        },
        legals: {
          result: results.legals?.result || "error",
          conform: results.legals?.conform || null,
          errors: results.legals?.errors || [],
          tokens: results.legals?.tokens || 0,
          url: results.legals?.url || null,
        },
        cookies: {
          result: results.cookies?.result || null,
          conform: results.cookies?.conform || null,
          errors: results.cookies?.errors || [],
          tokens: results.cookies?.tokens || 0,
          url: results.cookies?.url || null,
        },
        cgv: {
          result: results.cgv?.result || null,
          conform: results.cgv?.conform || null,
          errors: results.cgv?.errors || [],
          tokens: results.cgv?.tokens || 0,
          url: results.cgv?.url || null,
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
    await sendScanResultsEmail({
      to: recipient,
      website: scanData.website || results.website,

      results,
    });
    console.log("[scan-email] triggered email to:", recipient);
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
