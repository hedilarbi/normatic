import Aside from "@/components/Aside";
import DashboardHeader from "@/components/DashboardHeader";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardHeader />
      <div className="flex bg-gray-50 min-h-screen">
        <Aside />
        <main className="flex-1" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
