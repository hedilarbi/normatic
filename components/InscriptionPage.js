// app/signup/page.jsx
"use client";

import React, { useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  GithubAuthProvider,
} from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { auth } from "@/lib/firebase";
import { createUserDocument, getUserDocument } from "@/services/users.services";
import { updateScanWithUserId } from "@/services/scans.services";
import { useAuth } from "@/context/AuthContext";

const InscriptionPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scanId = searchParams.get("scanId"); // <-- read scanId from URL

  const { refresh } = useAuth();

  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormValid = useMemo(() => {
    if (!email || !password || !confirmPassword) return false;
    if (password.length < 8) return false;
    if (password !== confirmPassword) return false;
    return true;
  }, [email, password, confirmPassword]);

  const startSession = async (idToken) => {
    try {
      await fetch("/api/session/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ idToken }),
      });
    } catch (e) {
      console.error("Error starting session:", e);
      // not fatal for client routing
    }
  };

  // Attach scan to user (safe no-op if scanId is null)
  const maybeAttachScanToUser = async (uid) => {
    if (!scanId || !uid) return;
    try {
      await updateScanWithUserId(scanId, uid);
    } catch (e) {
      // don't block the flow if scan update fails
      console.warn("Failed to update scan with userId:", e);
    }
  };

  // Create if missing, then attach scan, refresh context, and route
  const upsertUserAttachScanAndRoute = async ({
    userEmail,
    authUid,
    provider,
  }) => {
    // 1) Lookup user by email
    const existing = await getUserDocument(userEmail); // return plain object or docSnap
    let isProfileSetup = false;
    let finalUid = authUid;

    if (!existing || existing?.exists?.() === false) {
      // 2) Create with isProfileSetup=false
      const payload = {
        uid: authUid, // keep uid inside the doc even if your doc id is the email
        email: userEmail,
        provider,
        isProfileSetup: false,
        createdAt: new Date().toISOString(),
      };

      // Fallback to (data) signature if that's how yours is defined
      await createUserDocument(payload);

      // Attach scan to newly created user
      await maybeAttachScanToUser(authUid);
      await refresh();
      router.replace("/onboarding");
      return;
    }

    // 3) If user exists, figure out uid + isProfileSetup
    const data = existing.data?.() ?? existing.data ?? existing; // support both shapes
    isProfileSetup = !!data?.isProfileSetup;
    finalUid = data?.uid || authUid;

    // Attach scan to existing user
    await maybeAttachScanToUser(finalUid);

    // 4) Refresh context then route
    await refresh();
    router.replace(isProfileSetup ? "/dashboard" : "/onboarding");
  };

  const oauthSignIn = async (which) => {
    setAuthError(null);
    setAuthLoading(true);
    try {
      const provider =
        which === "google"
          ? new GoogleAuthProvider()
          : new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const u = result.user;
      const idToken = await u.getIdToken(true);

      await startSession(idToken);

      await upsertUserAttachScanAndRoute({
        userEmail: u.email,
        authUid: u.uid,
        provider: which,
      });
    } catch (err) {
      console.error(err);
      setAuthError("Échec de la connexion. Réessaie.");
    } finally {
      setAuthLoading(false);
    }
  };

  const emailSignUp = async () => {
    setAuthError(null);

    if (password !== confirmPassword) {
      setAuthError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 8) {
      setAuthError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    setAuthLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const user = cred.user;

      const idToken = await user.getIdToken(true);
      await startSession(idToken);

      try {
        await sendEmailVerification(user);
      } catch (e) {
        console.error("Error sending email verification:", e);
      }

      await upsertUserAttachScanAndRoute({
        userEmail: user.email,
        authUid: user.uid,
        provider: "password",
      });
    } catch (err) {
      console.error(err);
      const code = err?.code ?? "";
      if (code === "auth/email-already-in-use") {
        setAuthError("Un compte existe déjà avec cet e-mail.");
      } else if (code === "auth/invalid-email") {
        setAuthError("Adresse e-mail invalide.");
      } else if (code === "auth/weak-password") {
        setAuthError("Mot de passe trop faible (min. 8 caractères).");
      } else {
        setAuthError("Échec de l'inscription. Réessaie.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  const label = (t) => (
    <span className="text-sm font-inter text-gray-700">{t}</span>
  );

  return (
    <div className="min-h-[100dvh] grid place-items-center bg-white pt-28 pb-16">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 w-full max-w-xl">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold font-inter text-primary-dark text-center">
            Crée ton compte
          </h1>

          <div className="grid sm:grid-cols-2 gap-3 text-black">
            <button
              onClick={() => oauthSignIn("google")}
              disabled={authLoading}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border hover:bg-gray-50 disabled:opacity-60"
            >
              <FaGoogle />
              Continuer avec Google
            </button>
            <button
              onClick={() => oauthSignIn("github")}
              disabled={authLoading}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border hover:bg-gray-50 disabled:opacity-60"
            >
              <FaGithub />
              Continuer avec GitHub
            </button>
          </div>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              {label("Email")}
              <input
                type="email"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                autoComplete="email"
              />
            </div>

            <div>
              {label("Mot de passe")}
              <input
                type="password"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
              <p className="text-[11px] text-gray-500 mt-1">
                8 caractères minimum.
              </p>
            </div>

            <div>
              {label("Confirmer le mot de passe")}
              <input
                type="password"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={emailSignUp}
                disabled={authLoading || !isFormValid}
                className="bg-primary-blue text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-60"
              >
                {authLoading ? "..." : "Créer un compte"}
              </button>
            </div>
          </div>

          {authError && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
              {authError}
            </div>
          )}

          <p className="text-xs text-gray-500">
            En continuant, tu acceptes nos{" "}
            <Link href="/mentions-legales" className="underline">
              mentions légales
            </Link>{" "}
            et notre{" "}
            <Link href="/politique-de-confidentialite" className="underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default InscriptionPage;
