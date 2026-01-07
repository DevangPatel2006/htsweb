import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TracksSection from "@/components/TracksSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;