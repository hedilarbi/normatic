"use client";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import LogoutButton from "../dashboard/LogoutButton";
const HeaderButtons = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return null; // or a loading spinner
  }
  if (user && !loading) {
    return (
      <div className="flex items-center space-x-4">
        <LogoutButton />
      </div>
    );
  }
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/connexion"
        className="text-gray-700 hover:text-primary-blue font-medium font-inter"
      >
        Connexion
      </Link>
      <Link
        href="/scan-express"
        className="bg-primary-blue text-white px-6 py-2 rounded-lg font-medium font-inter hover:bg-blue-600 transition-colors"
      >
        Scan gratuit
      </Link>
    </div>
  );
};

export default HeaderButtons;
