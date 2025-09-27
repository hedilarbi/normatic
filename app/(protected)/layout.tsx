import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
