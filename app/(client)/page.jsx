import Cta from "@/components/client/Cta";
import DashboardPreview from "@/components/client/DashboardPreview";
import Faq from "@/components/client/Faq";
import Features from "@/components/client/Features";

import HeroSection from "@/components/client/HeroSection";
import HowItWorks from "@/components/client/HowItWorks";
import Pricing from "@/components/client/Pricing";
import Problem from "@/components/client/Problem";
import Regulations from "@/components/client/Regulations";
import Testimonials from "@/components/client/Testimonials";
import TrustedBy from "@/components/client/TrustedBy";

export default async function ProtectedPage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Problem />
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
