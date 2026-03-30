import MarqueeBanner from "@/components/MarqueeBanner";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MarqueeBanner />
      <HeroSection />
      <MarqueeBanner />
      <PricingSection />
      <GallerySection />
      <AboutSection />
      <MethodologySection />
      <CTASection />
      <MarqueeBanner />
      <Footer />
    </div>
  );
};

export default Index;
