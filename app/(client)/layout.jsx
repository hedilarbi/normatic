import Footer from "@/components/client/Footer";
import Header from "@/components/client/Header";

export default function ProtectedLayout({ children }) {
  return (
    <main className="bg-white">
      <Header />
      <div className="mt-10">{children}</div>
      <Footer />
    </main>
  );
}
