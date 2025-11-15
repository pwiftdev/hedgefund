import { useState } from "react";
import Loader from "@/components/Loader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <div className="min-h-screen relative">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <RoadmapSection />
      <TokenomicsSection />
      <Footer />
    </div>
  );
};

export default Index;
