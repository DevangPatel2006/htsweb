import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventHighlightsSection from "@/components/EventHighlightsSection";
import TracksSection from "@/components/TracksSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PastEventsSection from "@/components/PastEventsSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Global Star Field Background */}
      <StarField />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EventHighlightsSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <TeamSection />
        <TestimonialsSection />
        <PastEventsSection />
        <SponsorsSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;