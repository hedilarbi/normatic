"use client";
import Aside from "@/components/dashboard/Aside";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useAuth } from "@/context/AuthContext";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function ProtectedLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/connexion");
    }
    if (user && !user.isProfileSetup && !loading) {
      router.replace("/onboarding");
    }
  }, [user, loading]);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div>
      <DashboardHeader />
      <div className="flex bg-gray-50 ">
        <Aside />
        <main
          className="flex-1 h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] overflow-y-auto relative"
          id="main-content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
