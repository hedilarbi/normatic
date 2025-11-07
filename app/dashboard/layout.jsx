import Aside from "@/components/dashboard/Aside";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
export default async function ProtectedLayout({ children }) {
  const user = await getCurrentUser();
  if (!user) redirect("/connexion");
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
