import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Force dark mode after loader completes
  useEffect(() => {
    if (!showLoader) {
      document.documentElement.classList.add('dark');
    }
  }, [showLoader]);

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <div id="tokenomics">
        <TokenomicsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
