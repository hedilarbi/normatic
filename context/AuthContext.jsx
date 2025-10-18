"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { getUserDocument } from "@/services/users.services";

// import { UserData } from '@/types/user';

export const AuthContext = createContext({
  user: null,
  // userData: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user = await getUserDocument(firebaseUser.email);
        setUser(user);

        // try {
        //   const userDoc = await getUserDocument(firebaseUser.uid);
        //   if (userDoc) {
        //     setUserData({
        //       uid: firebaseUser.uid,
        //       ...userDoc,
        //       email: firebaseUser.email || '',
        //     });
        //   }
        // } catch (error) {
        //   console.error('Error fetching user data:', error);
        // }
      } else {
        setUser(null);
        //setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
