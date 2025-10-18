import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ProtectedLayout({ children }) {
  return (
    <main className="bg-white">
      <Header />
      <div className="mt-10">{children}</div>
      <Footer />
    </main>
  );
}
