import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkshopSection from "@/components/WorkshopSection";
import VendorSection from "@/components/VendorSection";
import TrustSection from "@/components/TrustSection";
import VoiceShowcase from "@/components/VoiceShowcase";
import HowItWorks from "@/components/HowItWorks";
import MetricsSection from "@/components/MetricsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopSection />
      <VendorSection />
      <TrustSection />
      <VoiceShowcase />
      <HowItWorks />
      <MetricsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
