import Aside from "@/components/dashboard/Aside";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function ProtectedLayout({ children }) {
  return (
    <div>
      <DashboardHeader />
      <div className="flex bg-gray-50 h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]">
        <Aside />
        <main className="flex-1" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
