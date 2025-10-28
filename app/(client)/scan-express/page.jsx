// app/scan-express/page.jsx
"use client";
import { useRef, useState } from "react";
import {
  FaPaperPlane,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

export default function ScanExpressPage() {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [types, setTypes] = useState([]); // etat manquant dans ton extrait
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(null);
  const [error, setError] = useState(null);

  const [legalLinks, setLegalLinks] = useState({
    mentions: "",
    privacy: "",
    cgv: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    mentions: undefined,
    privacy: undefined,
    cgv: undefined,
  });

  const scanId = useRef(null);

  const isValidUrl = (value) => {
    const v = (value || "").trim();
    if (!v) return false;
    try {
      const u = new URL(v);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const validateLegal = () => {
    const trimmed = {
      mentions: (legalLinks.mentions || "").trim(),
      privacy: (legalLinks.privacy || "").trim(),
      cgv: (legalLinks.cgv || "").trim(),
    };

    const atLeastOne = !!trimmed.mentions || !!trimmed.privacy || !!trimmed.cgv;

    const newErrors = {};
    if (atLeastOne) {
      if (trimmed.mentions && !isValidUrl(trimmed.mentions))
        newErrors.mentions = "URL invalide";
      if (trimmed.privacy && !isValidUrl(trimmed.privacy))
        newErrors.privacy = "URL invalide";
      if (trimmed.cgv && !isValidUrl(trimmed.cgv))
        newErrors.cgv = "URL invalide";
    }

    setFieldErrors(newErrors);

    return { ok: atLeastOne && Object.keys(newErrors).length === 0, trimmed };
  };

  const startScan = async (e) => {
    e.preventDefault();
    setError(null);
    setDone(null);

    const { ok, trimmed } = validateLegal();
    if (!ok) {
      setError(
        "Veuillez renseigner au moins un des liens (mentions légales, politique de confidentialité ou CGV) avec une URL valide."
      );
      return;
    }

    setSubmitting(true);
    try {
      const legal = {};
      Object.entries(trimmed).forEach(([k, v]) => {
        if (v) legal[k] = v;
      });

      const res = await fetch("/api/scans/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ website, email, types, legal }),
      });

      const json = await res.json();
      if (!json || !json.ok)
        throw new Error(json?.error || "Impossible de démarrer le scan");

      setDone(json.message);
      scanId.current = json.scanId;
      setWebsite("");
      setEmail("");
      // on garde legalLinks pour éviter de retaper si besoin
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center space-x-2 bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-inter">
            <FaShieldAlt />
            <span>Scan Express Conformité</span>
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-bold font-inter text-primary-dark">
            Lance un{" "}
            <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
              audit gratuit
            </span>{" "}
            en 30s
          </h1>
          <p className="mt-3 text-gray-600 font-manrope text-lg">
            RGPD, Cookies, Mentions légales et CGV — reçois un rapport
            synthétique par email.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={startScan} className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-inter text-gray-700 mb-2">
                  URL du site web
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://exemple.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-inter text-gray-700 mb-2">
                  Email de réception
                </label>
                <input
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary-blue"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Liens légaux optionnels */}
            <div>
              <p className="text-sm font-inter text-gray-700 mb-2">
                Liens légaux (optionnels) —{" "}
                <span className="font-semibold">au moins un requis</span>
              </p>
              <div className="grid lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Mentions légales (URL)
                  </label>
                  <input
                    type="url"
                    placeholder="https://exemple.com/mentions-legales"
                    className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 ${
                      fieldErrors.mentions
                        ? "border-red-500 focus:ring-red-300"
                        : "focus:ring-primary-blue"
                    }`}
                    value={legalLinks.mentions}
                    onChange={(e) => {
                      setLegalLinks((s) => ({
                        ...s,
                        mentions: e.target.value,
                      }));
                      if (fieldErrors.mentions)
                        setFieldErrors((s) => ({ ...s, mentions: undefined }));
                    }}
                  />
                  {fieldErrors.mentions && (
                    <p className="mt-1 text-sm text-red-600">
                      {fieldErrors.mentions}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Politique de confidentialité (URL)
                  </label>
                  <input
                    type="url"
                    placeholder="https://exemple.com/confidentialite"
                    className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 ${
                      fieldErrors.privacy
                        ? "border-red-500 focus:ring-red-300"
                        : "focus:ring-primary-blue"
                    }`}
                    value={legalLinks.privacy}
                    onChange={(e) => {
                      setLegalLinks((s) => ({ ...s, privacy: e.target.value }));
                      if (fieldErrors.privacy)
                        setFieldErrors((s) => ({ ...s, privacy: undefined }));
                    }}
                  />
                  {fieldErrors.privacy && (
                    <p className="mt-1 text-sm text-red-600">
                      {fieldErrors.privacy}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    CGV (URL)
                  </label>
                  <input
                    type="url"
                    placeholder="https://exemple.com/cgv"
                    className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 ${
                      fieldErrors.cgv
                        ? "border-red-500 focus:ring-red-300"
                        : "focus:ring-primary-blue"
                    }`}
                    value={legalLinks.cgv}
                    onChange={(e) => {
                      setLegalLinks((s) => ({ ...s, cgv: e.target.value }));
                      if (fieldErrors.cgv)
                        setFieldErrors((s) => ({ ...s, cgv: undefined }));
                    }}
                  />
                  {fieldErrors.cgv && (
                    <p className="mt-1 text-sm text-red-600">
                      {fieldErrors.cgv}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Laisse vides les champs non pertinents. Au minimum, renseigne
                l’un des trois.
              </p>
            </div>

            <div>
              <p className="text-sm font-inter text-gray-700 mb-2">
                Types de conformité à scanner (selon vos urls légaux) :
              </p>
              <div className="flex flex-wrap gap-2">
                {["RGPD", "Mentions légales", "Cookies", "CGV"].map((t) => (
                  <h3
                    key={t}
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      types.includes(t)
                        ? "bg-primary-blue text-white border-primary-blue"
                        : "bg-gray-50 text-gray-700 border-gray-200"
                    } transition`}
                  >
                    {t.replace("_", " ")}
                  </h3>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <button
                disabled={submitting}
                className="flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-xl font-semibold font-inter hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-60"
              >
                <FaPaperPlane />
                {submitting
                  ? "Lancement en cours…"
                  : "Démarrer le scan gratuit"}
              </button>

              <div className="flex items-center gap-3 text-gray-600">
                <FaClock className="text-primary-orange" />
                <span className="text-sm font-inter">
                  Le scan peut durer <strong>~2 minutes</strong>. Le rapport
                  arrive par email.
                </span>
              </div>
            </div>

            {done && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
                <FaCheckCircle className="mt-1" />
                <div>
                  <p className="font-semibold">{done}</p>
                  <p className="mt-1 text-sm">
                    Pendant ce temps, crée ton compte pour retrouver tes
                    résultats dans le tableau de bord.
                  </p>
                  <Link
                    href={"/tableau-de-bord?scanId=" + (scanId.current || "")}
                    className="inline-block mt-3 bg-primary-blue text-white px-5 py-2 rounded-lg font-inter hover:bg-blue-600"
                  >
                    Continuer l’inscription
                  </Link>
                </div>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
