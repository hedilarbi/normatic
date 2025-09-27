import Cta from "@/components/Cta";
import DashboardPreview from "@/components/DashboardPreview";
import Faq from "@/components/Faq";
import Features from "@/components/Features";

import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Regulations from "@/components/Regulations";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";

export default async function ProtectedPage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Features />
      <Regulations />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
