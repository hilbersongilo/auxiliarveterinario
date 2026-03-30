import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <MethodologySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
