"use client";

import { getUserDocument } from "@/services/users.services";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  loading: true,
  refresh: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/me", { credentials: "include" });
      const data = await res.json();

      if (!data.user) {
        setUser(null);
        return;
      }
      const userDoc = await getUserDocument(data.user.email);

      setUser(userDoc);
      if (
        userDoc.isProfileSetup === undefined ||
        userDoc.isProfileSetup === false
      ) {
        router.replace("/onboarding");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refresh: load }}>
      {children}
    </AuthContext.Provider>
  );
}
