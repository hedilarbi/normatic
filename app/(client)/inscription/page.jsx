// app/inscription/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Github, Mail, ShieldCheck, ArrowRight } from "lucide-react";

import Link from "next/link";

export default function InscriptionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  return (
    <div className="min-h-[100dvh] grid place-items-center bg-white">
      <div className="w-full max-w-[460px] bg-white border border-light-gray rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-primary-dark mb-2">
          Créer un compte
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Accédez à votre espace et complétez votre inscription.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-light-gray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-light-gray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={signUpEmail}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-95 transition"
          >
            <Mail className="w-4 h-4" />
            {loading ? "Envoi..." : "S’inscrire (email)"}
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-light-gray flex-1" />
            <span className="text-xs text-gray-400">ou</span>
            <div className="h-px bg-light-gray flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => oauth("google")}
              className="w-full rounded-lg border border-light-gray px-4 py-2 text-sm font-medium hover:bg-gray-50 text-black"
            >
              Continuer avec Google
            </button>
            <button
              onClick={() => oauth("github")}
              className="w-full rounded-lg border border-light-gray px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              <span className="inline-flex items-center gap-2 text-black">
                <Github className="w-4 h-4" /> GitHub
              </span>
            </button>
          </div>

          {msg && <p className="text-sm text-success">{msg}</p>}
          {err && <p className="text-sm text-red-500">{err}</p>}

          <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            En vous inscrivant, vous acceptez nos conditions d’utilisation.
          </p>
        </div>

        <div className="mt-6 text-sm">
          <span className="text-gray-500">Déjà un compte ? </span>
          <Link className="text-primary hover:underline" href="/connexion">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
