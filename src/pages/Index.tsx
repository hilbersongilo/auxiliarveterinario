import animalPattern from "@/assets/animal-pattern.png";
import MarqueeBanner from "@/components/MarqueeBanner";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Animal pattern texture */}
      <div
        className="fixed inset-0 z-0 opacity-[0.35] pointer-events-none"
        style={{ backgroundImage: `url(${animalPattern})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }}
      />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
