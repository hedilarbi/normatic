// app/api/scans/results/route.js
import { NextResponse } from "next/server";
import admin from "@/lib/firebaseAdmin";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- helper: deep-sanitize undefined -> null (Firestore-safe) ---
function sanitizeForFirestore(value) {
  if (value === undefined) return null;
  if (value === null) return null;
  if (Array.isArray(value)) return value.map(sanitizeForFirestore);
  if (typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const sv = sanitizeForFirestore(v);
      out[k] = sv;
    }
    return out;
  }
  return value;
}

function buildTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

function normalizeErrors(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter((e) => e != null && e !== "");
  return [];
}

async function sendScanResultsEmail({
  to,
  website,
  results,
  scanUuid,
  scanType,
  baseUrl,
}) {
  const transporter = buildTransporter();

  const rgpdErrors = normalizeErrors(results?.rgpd?.errors);
  const legalsErrors = normalizeErrors(results?.legals?.errors);
  const cgvErrors = normalizeErrors(results?.cgv?.errors);
  const cookiesErrors = normalizeErrors(results?.cookies?.errors);

  const totalErrors =
    rgpdErrors.length +
    legalsErrors.length +
    cgvErrors.length +
    cookiesErrors.length;

  let html = `
    <h1>Résultats du scan</h1>
    <p>Bonjour,</p>
    <p>Votre scan pour le site <strong>${
      website || "Projet"
    }</strong> est terminé.</p>
  `;

  // Résumé global des erreurs
  html += `
    <p>
      <strong>Nombre total d'erreurs détectées :</strong> ${totalErrors}
    </p>
    <ul>
      <li>RGPD : ${rgpdErrors.length} erreur(s)</li>
      <li>Mentions légales : ${legalsErrors.length} erreur(s)</li>
      <li>CGV : ${cgvErrors.length} erreur(s)</li>
      <li>Cookies : ${cookiesErrors.length} erreur(s)</li>
    </ul>
  `;

  // --- Détail RGPD ---
  if (results?.rgpd?.result === "success") {
    html += `<h2>Conformité RGPD</h2>`;
    if (results.rgpd.conform) {
      html += `<p>Le site est conforme au RGPD.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme au RGPD.</p>`;
      html += `<p><strong>Nombre d'erreurs RGPD :</strong> ${rgpdErrors.length}</p>`;
      if (rgpdErrors.length > 0) {
        html += `<ul>`;
        rgpdErrors.forEach((e) => (html += `<li>${e}</li>`));
        html += `</ul>`;
      }
    }
  }

  // --- Détail Mentions légales ---
  if (results?.legals?.result === "success") {
    html += `<h2>Conformité Mentions légales</h2>`;
    if (results.legals.conform) {
      html += `<p>Le site est conforme aux Mentions légales.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux Mentions légales.</p>`;
      html += `<p><strong>Nombre d'erreurs Mentions légales :</strong> ${legalsErrors.length}</p>`;
      if (legalsErrors.length > 0) {
        html += `<ul>`;
        legalsErrors.forEach((e) => (html += `<li>${e}</li>`));
        html += `</ul>`;
      }
    }
  }

  // --- Détail CGV ---
  if (results?.cgv?.result === "success") {
    html += `<h2>Conformité CGV</h2>`;
    if (results.cgv.conform) {
      html += `<p>Le site est conforme aux CGV.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux CGV.</p>`;
      html += `<p><strong>Nombre d'erreurs CGV :</strong> ${cgvErrors.length}</p>`;
      if (cgvErrors.length > 0) {
        html += `<ul>`;
        cgvErrors.forEach((e) => (html += `<li>${e}</li>`));
        html += `</ul>`;
      }
    }
  }

  // --- Détail Cookies ---
  if (results?.cookies?.result === "success") {
    html += `<h2>Conformité Cookies</h2>`;
    if (results.cookies.conform) {
      html += `<p>Le site est conforme aux règles sur les Cookies.</p>`;
    } else {
      html += `<p>Le site n'est pas conforme aux règles sur les Cookies.</p>`;
      html += `<p><strong>Nombre d'erreurs Cookies :</strong> ${cookiesErrors.length}</p>`;
      if (cookiesErrors.length > 0) {
        html += `<ul>`;
        cookiesErrors.forEach((e) => (html += `<li>${e}</li>`));
        html += `</ul>`;
      }
    }
  }

  html += `<p>Veuillez vous connecter à votre tableau de bord pour consulter les résultats détaillés.</p>`;

  // --- CTA pour les scans gratuits ---
  const normalizedType = (scanType || "").toString().toLowerCase();
  if (normalizedType === "free") {
    const safeBase =
      (baseUrl || "").replace(/\/$/, "") || process.env.BASE_URL || "";
    const signupUrl = `${safeBase}/inscription?scanId=${encodeURIComponent(
      scanUuid || ""
    )}`;

    html += `
      <hr />
      <h2>Passez à une analyse complète</h2>
      <p>
        Vous utilisez actuellement la version <strong>gratuite</strong> du scan.
        Pour accéder au rapport complet, à l'historique de vos scans et à d'autres fonctionnalités avancées,
        créez votre compte dès maintenant.
      </p>
      <p>
        <a 
          href="${signupUrl}" 
          style="
            display:inline-block;
            padding:10px 18px;
            background-color:#2563eb;
            color:#ffffff;
            text-decoration:none;
            border-radius:6px;
            font-weight:600;
          "
        >
          Créer mon compte et voir le rapport complet
        </a>
      </p>
    `;
  }

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to,
    subject: `Résultats du scan – ${website || "Projet"}`,
    html,
  };

  await transporter.sendMail(mailOptions);
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

    const results = body || {};

    // Build a Firestore-safe doc (no undefined)
    const writeData = sanitizeForFirestore({
      tokens: results.tokens || 0,
      rgpd: {
        result: results.rgpd?.result ?? null,
        conform: results.rgpd?.conform ?? null,
        errors: results.rgpd?.errors || [],
        tokens: results.rgpd?.tokens || 0,
        url: results.rgpd?.url ?? null,
      },
      legals: {
        result: results.legals?.result ?? null,
        conform: results.legals?.conform ?? null,
        errors: results.legals?.errors || [],
        tokens: results.legals?.tokens || 0,
        url: results.legals?.url ?? null,
      },
      cookies: {
        result: results.cookies?.result ?? null,
        conform: results.cookies?.conform ?? null,
        errors: results.cookies?.errors || [],
        tokens: results.cookies?.tokens || 0,
        url: results.cookies?.url ?? null,
      },
      cgv: {
        result: results.cgv?.result ?? null,
        conform: results.cgv?.conform ?? null,
        errors: results.cgv?.errors || [],
        tokens: results.cgv?.tokens || 0,
        url: results.cgv?.url ?? null,
      },
    });

    await scanRef.set(writeData, { merge: true });

    await scanRef.update({
      status: "completed",
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    const scanData = scanDoc.data() || {};
    const recipient =
      scanData.email ||
      results.email ||
      process.env.DEFAULT_RESULTS_TO ||
      process.env.SMTP_FROM;

    const baseUrl =
      process.env.BASE_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "";

    // on essaie de récupérer le type du scan depuis plusieurs endroits possibles
    const scanType =
      scanData.type ||
      scanData.scanType ||
      scanData.plan ||
      results.type ||
      results.scanType ||
      null;

    await sendScanResultsEmail({
      to: recipient,
      website: scanData.website || results.website,
      results,
      scanUuid: scanData.scanUuid || body.uuid,
      scanType,
      baseUrl,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[scan-email] error:", error);
    return NextResponse.json(
      { ok: false, error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
