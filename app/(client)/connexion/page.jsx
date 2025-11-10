// app/connexion/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { createUserDocument, getUserDocument } from "@/services/users.services";

export default function ConnexionPage() {
  const router = useRouter();
  const { refresh } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const startSession = async (idToken) => {
    try {
      await fetch("/api/session/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ idToken }),
      });
    } catch (_) {
      // non-blocking
    }
  };

  const ensureUserDocThenRoute = async ({ userEmail, uid, provider }) => {
    // Try to load user profile by email
    let profile = null;
    if (userEmail) {
      const doc = await getUserDocument(userEmail); // should return plain object or null
      if (doc && doc.email) profile = doc;
    }

    // If missing, create it (isProfileSetup = false) and go onboarding
    if (!profile) {
      const payload = {
        uid,
        email: userEmail,
        provider,
        isProfileSetup: false,
        createdAt: new Date().toISOString(),
      };

      await createUserDocument(payload);

      await refresh();
      router.replace("/onboarding");
      return;
    }

    // Existing user -> route to dashboard
    await refresh();
    router.replace("/dashboard");
  };

  const oauthSignIn = async (provider) => {
    setErr(null);
    setLoading(true);
    try {
      let prov =
        provider === "google"
          ? new GoogleAuthProvider()
          : new GithubAuthProvider();

      const result = await signInWithPopup(auth, prov);
      const u = result.user;
      const idToken = await u.getIdToken(true);

      await startSession(idToken);

      // Email might be null with GitHub if email is private; try providerData as fallback
      const resolvedEmail =
        u.email || (u.providerData && u.providerData[0]?.email) || null;

      await ensureUserDocThenRoute({
        userEmail: resolvedEmail,
        uid: u.uid,
        provider,
      });
    } catch (e) {
      console.error(e);
      setErr("Échec de la connexion. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  const emailSignIn = async () => {
    setErr(null);
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await result.user.getIdToken(true);

      await startSession(idToken);
      await refresh();
      router.replace("/dashboard");
    } catch (e) {
      console.error(e);
      setErr("Échec de la connexion. Vérifie tes identifiants.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] grid place-items-center bg-white">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 w-full max-w-xl">
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
              autoComplete="email"
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
              autoComplete="current-password"
            />
          </div>

          <button
            onClick={emailSignIn}
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-95 transition disabled:opacity-60"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => oauthSignIn("google")}
              disabled={loading}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border hover:bg-gray-50 disabled:opacity-60"
            >
              <FcGoogle />
              Continuer avec Google
            </button>
            <button
              onClick={() => oauthSignIn("github")}
              disabled={loading}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border hover:bg-gray-50 disabled:opacity-60"
            >
              <FaGithub />
              Continuer avec GitHub
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
