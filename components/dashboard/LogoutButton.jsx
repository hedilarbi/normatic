"use client";
import React from "react";

import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const router = useRouter();
  const { refresh } = useAuth();
  const handleLogout = async () => {
    await fetch("/api/session/logout", {
      method: "POST",
      credentials: "include",
    });
    await signOut(auth);

    router.replace("/connexion");
  };
  return (
    <button
      className="bg-primary-blue text-white px-4 py-2 cursor-pointer rounded-lg hover:bg-blue-600 transition-colors"
      onClick={handleLogout}
    >
      Déconnexion
    </button>
  );
};

export default LogoutButton;
