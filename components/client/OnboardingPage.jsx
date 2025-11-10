"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaBuilding,
  FaUser,
  FaCheck,
  FaArrowRight,
  FaLink,
} from "react-icons/fa";

import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import {
  parsePhoneNumberFromString,
  getCountryCallingCode,
} from "libphonenumber-js";

import countries from "i18n-iso-countries";
import frLocale from "i18n-iso-countries/langs/fr.json";

import { updateUserDocument } from "@/services/users.services";
import { useAuth } from "@/context/AuthContext";

countries.registerLocale(frLocale);

// Remplacer le préfixe +code actuel par celui du pays choisi
function withDialForCountry(currentValue, iso2) {
  const dial = `+${getCountryCallingCode(iso2.toUpperCase())}`;
  if (!currentValue || currentValue === "+" || /^\+\d+$/.test(currentValue)) {
    return `${dial} `;
  }
  return currentValue.replace(/^\+\d+/, dial);
}

export default function OnboardingPage() {
  const searchParams = useSearchParams();
  const stepFromSearch = searchParams.get("step");
  let emailFromSearch = searchParams.get("email");
  emailFromSearch = emailFromSearch ? decodeURIComponent(emailFromSearch) : "";

  const router = useRouter();
  const { loading, user, refresh } = useAuth();

  // 🧭 Steps: 0=Auth, 1=Infos, 2=URLs, 3=Plan, 4=Done
  const [step, setStep] = useState(
    stepFromSearch ? parseInt(stepFromSearch, 10) : 1
  );

  const [urls, setUrls] = useState(user?.urls?.[0] || {}); // { rgpd, cgv, legals, domain? }

  const [accountType, setAccountType] = useState("individual");

  // Options pays en FR (adresse/facturation)
  const countryOptions = useMemo(() => {
    const names = countries.getNames("fr"); // { 'FR': 'France', ... }
    return Object.entries(names)
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name, "fr"));
  }, []);

  const [countryCode, setCountryCode] = useState("TN"); // pour le select Adresse (ISO2 uppercase)
  const [riCountry, setRiCountry] = useState("tn"); // pour PhoneInput (lowercase)
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);

  const [individual, setIndividual] = useState({
    first_name: "",
    last_name: "",
    address: { street: "", line2: "", city: "", region: "", postal: "" },
  });

  const [org, setOrg] = useState({
    name: "",
    siret: "",
    activity: "",
    address: { street: "", line2: "", city: "", region: "", postal: "" },
  });

  // Step 3 – Plan
  const [plan, setPlan] = useState("pro");
  const [error, setError] = useState(null);

  const label = (t) => (
    <span className="text-sm font-inter text-gray-700">{t}</span>
  );

  // Auto-détection du pays depuis le numéro
  const handlePhoneBlur = () => {
    if (!phone) return;
    try {
      const pn = parsePhoneNumberFromString(phone);
      const iso = pn?.country; // ex: 'FR'
      if (iso && countryOptions.find((c) => c.code === iso)) {
        setCountryCode(iso);
        setRiCountry(iso.toLowerCase());
      }
    } catch {}
  };

  // ✅ STEP 1: validation infos
  const saveStep1 = async () => {
    if (!phone || phone.replace(/\D/g, "").length < 6) {
      setPhoneError("Numéro de téléphone invalide.");
      return;
    }
    if (accountType === "individual") {
      if (individual.first_name.trim().length === 0) {
        setError("Prénom requis.");
        return;
      }
      if (individual.last_name.trim().length === 0) {
        setError("Nom requis.");
        return;
      }
      if (!individual.address.street.trim()) {
        setError("Adresse requise.");
        return;
      }
      if (!individual.address.city.trim()) {
        setError("Ville requise.");
        return;
      }
      if (!individual.address.region.trim()) {
        setError("Région requise.");
        return;
      }
      if (!individual.address.postal.trim()) {
        setError("Code postal requis.");
        return;
      }
    } else {
      if (org.name.trim().length === 0) {
        setError("Nom de l'organisation requis.");
        return;
      }
      if (org.siret.trim().length === 0) {
        setError("SIRET requis.");
        return;
      }
      if (org.activity.trim().length === 0) {
        setError("Activité requise.");
        return;
      }
      if (!org.address.street.trim()) {
        setError("Adresse requise.");
        return;
      }
      if (!org.address.city.trim()) {
        setError("Ville requise.");
        return;
      }
      if (!org.address.region.trim()) {
        setError("Région requise.");
        return;
      }
      if (!org.address.postal.trim()) {
        setError("Code postal requis.");
        return;
      }
    }

    setError(null);
    setStep(2); // ➡️ passe à l'étape URLs
  };

  // ✅ STEP 2: validation URLs (obligatoire: au moins une ; même base ; ajoute urls.domain automatiquement)
  const saveStep2Urls = async () => {
    // On ne garde que les trois champs concernés, en les trimant
    const entries = [
      { key: "rgpd", label: "URL RGPD" },
      { key: "cgv", label: "URL CGV" },
      { key: "legals", label: "URL Mentions légales" },
    ];

    const provided = entries
      .map(({ key, label }) => {
        const raw = (urls?.[key] ?? "").trim();
        return { key, label, value: raw };
      })
      .filter(({ value }) => value.length > 0);

    // 1) Au moins une URL
    if (provided.length === 0) {
      setError("Renseigne au moins une URL (RGPD, CGV ou Mentions légales).");
      return;
    }

    // 2) Format: doit commencer par http(s) et être une URL valide
    for (const { label, value } of provided) {
      if (!/^https?:\/\/.+/i.test(value)) {
        setError(`${label} doit commencer par http:// ou https://`);
        return;
      }
      try {
        // eslint-disable-next-line no-new
        new URL(value);
      } catch {
        setError(`${label} est invalide.`);
        return;
      }
    }

    // 3) Même base (origin) pour toutes les URLs renseignées
    let baseOrigin;
    try {
      baseOrigin = new URL(provided[0].value).origin;
    } catch {
      setError("Une des URLs renseignées est invalide.");
      return;
    }
    for (const { value, label } of provided.slice(1)) {
      try {
        const currentOrigin = new URL(value).origin;
        if (currentOrigin !== baseOrigin) {
          setError(
            "Toutes les URLs renseignées doivent partager la même base (ex: https://example.com)."
          );
          return;
        }
      } catch {
        setError(`${label} est invalide.`);
        return;
      }
    }

    // 4) Injecte automatiquement le domaine principal déduit
    setUrls((prev) => ({
      ...prev,
      domain: baseOrigin,
    }));

    setError(null);
    setStep(3); // ➡️ étape plan
  };

  // ✅ STEP 3: sauvegarde finale
  const savePlan = async () => {
    try {
      await updateUserDocument(user.id, {
        phone,
        accountType,
        ...(accountType === "individual" ? { ...individual } : { ...org }),
        urls: [urls],
        plan: plan,
        isProfileSetup: true,
      });
      await refresh();

      setStep(4);

      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } catch (err) {
      setError("Échec de l'inscription. Réessaie.");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step]);

  return (
    <section className="pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[0, 1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full grid place-items-center border
                  ${
                    step >= n
                      ? "bg-primary-blue text-white border-primary-blue"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
              >
                {step > n ? <FaCheck /> : n}
              </div>
              <span className="hidden sm:inline text-sm font-inter text-gray-600">
                {n === 0 && "Connexion"}
                {n === 1 && "Informations"}
                {n === 2 && "URLs"}
                {n === 3 && "Choisir un plan"}
                {n === 4 && "Confirmation"}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          {/* STEP 1: Infos */}
          {step === 1 && (
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAccountType("individual")}
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    accountType === "individual"
                      ? "border-primary-blue bg-primary-blue text-white"
                      : "border-gray-200 text-black"
                  }`}
                >
                  <FaUser />
                  <span className="font-inter">Compte individuel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType("organization")}
                  className={`p-4 rounded-xl border flex items-center gap-3 ${
                    accountType === "organization"
                      ? "border-primary-blue bg-primary-blue text-white"
                      : "border-gray-200 text-black"
                  }`}
                >
                  <FaBuilding />
                  <span className="font-inter">Compte société</span>
                </button>
              </div>

              {/* Pays + Téléphone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {label("Pays")}
                  <select
                    className="w-full mt-2 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-blue"
                    value={countryCode}
                    onChange={(e) => {
                      const iso2 = e.target.value; // "FR"
                      setCountryCode(iso2);
                      setRiCountry(iso2.toLowerCase());
                      setPhone((prev) => withDialForCountry(prev, iso2));
                    }}
                  >
                    {countryOptions.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {label("Téléphone (avec indicatif)")}
                  <div className="mt-2">
                    <PhoneInput
                      country={riCountry}
                      onCountryChange={(newIso2) => {
                        setRiCountry(newIso2);
                        const upper = newIso2.toUpperCase();
                        if (countryOptions.find((c) => c.code === upper)) {
                          setCountryCode(upper);
                        }
                        setPhone((prev) => withDialForCountry(prev, upper));
                      }}
                      defaultCountry={riCountry}
                      value={phone}
                      onChange={(val) => setPhone(val)}
                      onBlur={handlePhoneBlur}
                      className="rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-primary-blue bg-white"
                      inputClassName="!border-0 !shadow-none !px-4 !py-3 !text-black !bg-transparent placeholder:text-gray-400"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!rounded-l-xl !border-0 !px-3 !py-[10px] hover:!bg-gray-50",
                        dropdownClassName:
                          "!rounded-xl !border !border-gray-200 !shadow-lg",
                        searchInputClassName:
                          "!px-3 !py-2 !rounded-lg !border !border-gray-200 focus:!ring-2 focus:!ring-primary-blue",
                        listItemClassName: "!px-3 !py-2 hover:!bg-gray-50",
                      }}
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        autoComplete: "tel",
                      }}
                    />
                  </div>
                  {phoneError && (
                    <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                  )}
                </div>
              </div>

              {/* Champs spécifiques */}
              {accountType === "individual" ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {label("Prénom")}
                    <input
                      className="w-full mt-2 border rounded-xl px-4 py-3"
                      value={individual.first_name}
                      onChange={(e) =>
                        setIndividual((prev) => ({
                          ...prev,
                          first_name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div>
                    {label("Nom")}
                    <input
                      className="w-full mt-2 border rounded-xl px-4 py-3"
                      value={individual.last_name}
                      onChange={(e) =>
                        setIndividual((prev) => ({
                          ...prev,
                          last_name: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {/* Adresse structurée */}
                  <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      {label("Rue")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={individual.address.street}
                        onChange={(e) =>
                          setIndividual((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              street: e.target.value,
                            },
                          }))
                        }
                        placeholder="Rue / Avenue / N°"
                      />
                    </div>
                    <div className="md:col-span-2">
                      {label("Complément (facultatif)")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={individual.address.line2}
                        onChange={(e) =>
                          setIndividual((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        placeholder="Bâtiment, étage, appartement…"
                      />
                    </div>
                    <div>
                      {label("Ville")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={individual.address.city}
                        onChange={(e) =>
                          setIndividual((prev) => ({
                            ...prev,
                            address: { ...prev.address, city: e.target.value },
                          }))
                        }
                      />
                    </div>
                    <div>
                      {label("Gouvernorat / État / Région")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={individual.address.region}
                        onChange={(e) =>
                          setIndividual((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              region: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      {label("Code postal")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={individual.address.postal}
                        onChange={(e) =>
                          setIndividual((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              postal: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    {label("Nom de l’organisme")}
                    <input
                      className="w-full mt-2 border rounded-xl px-4 py-3"
                      value={org.name}
                      onChange={(e) =>
                        setOrg((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    {label("SIRET")}
                    <input
                      className="w-full mt-2 border rounded-xl px-4 py-3"
                      value={org.siret}
                      onChange={(e) =>
                        setOrg((prev) => ({ ...prev, siret: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    {label("Activité")}
                    <select
                      className="w-full mt-2 border rounded-xl px-4 py-3"
                      value={org.activity}
                      onChange={(e) =>
                        setOrg((prev) => ({
                          ...prev,
                          activity: e.target.value,
                        }))
                      }
                    >
                      <option value="">Sélectionner…</option>
                      <option value="santé">Santé</option>
                      <option value="digital">Digital</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="banque">Banque/Assurance</option>
                      <option value="éducation">Éducation</option>
                    </select>
                  </div>

                  {/* Adresse structurée */}
                  <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      {label("Rue")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={org.address.street}
                        onChange={(e) =>
                          setOrg((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              street: e.target.value,
                            },
                          }))
                        }
                        placeholder="Rue / Avenue / N°"
                      />
                    </div>
                    <div className="md:col-span-2">
                      {label("Complément (facultatif)")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={org.address.line2}
                        onChange={(e) =>
                          setOrg((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        placeholder="Bâtiment, étage, lot…"
                      />
                    </div>
                    <div>
                      {label("Ville")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={org.address.city}
                        onChange={(e) =>
                          setOrg((prev) => ({
                            ...prev,
                            address: { ...prev.address, city: e.target.value },
                          }))
                        }
                      />
                    </div>
                    <div>
                      {label("Gouvernorat / État / Région")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={org.address.region}
                        onChange={(e) =>
                          setOrg((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              region: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                    <div>
                      {label("Code postal")}
                      <input
                        className="w-full mt-2 border rounded-xl px-4 py-3"
                        value={org.address.postal}
                        onChange={(e) =>
                          setOrg((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              postal: e.target.value,
                            },
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Ces infos alimentent ton tableau de bord et la facturation.
                </div>
                <button
                  onClick={saveStep1}
                  disabled={loading}
                  className="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-60"
                >
                  Continuer <FaArrowRight />
                </button>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  {error}
                </div>
              )}
            </div>
          )}

          {/* STEP 2: URLs */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <div className="text-xl font-inter font-semibold text-primary-dark flex items-center gap-2">
                  <FaLink /> Renseigne tes URLs légales
                </div>
                <p className="text-gray-600 mt-1">
                  Renseigne au moins une URL (RGPD, CGV ou Mentions légales).
                  Elles doivent partager la même base (ex: https://exemple.com).
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  {label("URL RGPD (Politique de confidentialité)")}
                  <input
                    className="w-full mt-2 border rounded-xl px-4 py-3"
                    placeholder="https://exemple.com/rgpd"
                    value={urls?.rgpd || ""}
                    onChange={(e) =>
                      setUrls((prev) => ({ ...prev, rgpd: e.target.value }))
                    }
                  />
                </div>

                <div className="md:col-span-2">
                  {label("URL CGV")}
                  <input
                    className="w-full mt-2 border rounded-xl px-4 py-3"
                    placeholder="https://exemple.com/cgv"
                    value={urls?.cgv || ""}
                    onChange={(e) =>
                      setUrls((prev) => ({ ...prev, cgv: e.target.value }))
                    }
                  />
                </div>

                <div className="md:col-span-2">
                  {label("URL Mentions légales")}
                  <input
                    className="w-full mt-2 border rounded-xl px-4 py-3"
                    placeholder="https://exemple.com/mentions-legales"
                    value={urls?.legals || ""}
                    onChange={(e) =>
                      setUrls((prev) => ({ ...prev, legals: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-lg border text-primary-blue hover:bg-primary-blue/10 transition"
                >
                  Retour
                </button>
                <button
                  onClick={saveStep2Urls}
                  disabled={loading}
                  className="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-60"
                >
                  Continuer <FaArrowRight />
                </button>
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  {error}
                </div>
              )}
            </div>
          )}

          {/* STEP 3: Plans */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-1 gap-6 justify-center">
                {[
                  {
                    id: "pro",
                    title: "Professionnel",
                    price: "25€/mois",
                    features: [
                      "1 Domaine",
                      "Tableau de bord",
                      "10 scans par mois",
                      "Rapport mensuel automatique + alertes par email",
                    ],
                  },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlan(p.id)}
                    className={`text-left p-6 rounded-2xl border shadow-sm hover:shadow-lg transition
                      ${
                        plan === p.id
                          ? "border-primary-blue ring-2 ring-primary-blue/20"
                          : "border-gray-200"
                      }`}
                  >
                    <div className="text-2xl font-bold font-inter text-primary-dark">
                      {p.title}
                    </div>
                    <div className="mt-1 text-primary-blue font-inter">
                      {p.price}
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-700">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaCheck className="text-primary-green" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-lg border text-primary-blue hover:bg-primary-blue/10 transition"
                >
                  Retour
                </button>
                <button
                  onClick={savePlan}
                  disabled={loading}
                  className="flex items-center gap-2 bg-primary-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-60"
                >
                  Valider le plan <FaArrowRight />
                </button>
              </div>
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                  {error}
                </div>
              )}
            </div>
          )}

          {/* STEP 4: Done */}
          {step === 4 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-primary-green/10 text-primary-green grid place-items-center mx-auto">
                <FaCheck className="text-2xl" />
              </div>
              <h2 className="mt-6 text-3xl font-inter font-bold text-primary-dark">
                C’est parti !
              </h2>
              <p className="mt-2 text-gray-600">
                Tu vas être redirigé vers le tableau de bord…
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
