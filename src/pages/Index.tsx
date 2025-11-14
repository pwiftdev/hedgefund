import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import RoadmapSection from "@/components/RoadmapSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
