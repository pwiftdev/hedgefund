import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BuybackBurnSection from "@/components/BuybackBurnSection";
import HEDGERSection from "@/components/HEDGERSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";
import TwitterStickyButton from "@/components/TwitterStickyButton";
import CursorEffect from "@/components/CursorEffect";

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
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="buyback">
        <BuybackBurnSection />
      </div>
      <div id="hedger">
        <HEDGERSection />
      </div>
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <div id="tokenomics">
        <TokenomicsSection />
      </div>
      <Footer />
      <TwitterStickyButton />
      <CursorEffect />
    </div>
  );
};

export default Index;
