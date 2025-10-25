// app/connexion/page.tsx
"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Github, LogIn } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const oauthSignIn = async (provider) => {
    setErr(null);
    setLoading(true);
    try {
      if (provider === "google") {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      } else if (provider === "github") {
        const provider = new GithubAuthProvider();
        await signInWithPopup(auth, provider);
      }
    } catch (err) {
      setErr("Échec de la connexion. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  const emailSignIn = async () => {
    setErr(null);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      setStep(1);
    } catch (err) {
      setErr("Échec de l'inscription. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] grid place-items-center bg-white">
      <div className="w-full max-w-[460px] bg-white border border-light-gray rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-primary-dark mb-2">
          Connexion
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Accédez à votre espace sécurisé.
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
            onClick={emailSignIn}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-95 transition"
          >
            <LogIn className="w-4 h-4" />
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-light-gray flex-1" />
            <span className="text-xs text-gray-400">ou</span>
            <div className="h-px bg-light-gray flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => oauthSignIn("google")}
              className="w-full text-black rounded-lg border border-light-gray px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Continuer avec Google
            </button>
            <button
              onClick={() => oauthSignIn("github")}
              className="w-full rounded-lg border border-light-gray px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              <span className="inline-flex items-center gap-2 text-black">
                <Github className="w-4 h-4" /> GitHub
              </span>
            </button>
          </div>

          {err && <p className="text-sm text-red-500">{err}</p>}

          <div className="mt-6 text-sm">
            <span className="text-gray-500">Pas de compte ? </span>
            <Link className="text-primary hover:underline" href="/inscription">
              S’inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
