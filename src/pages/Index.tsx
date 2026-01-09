import React from "react";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
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
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      {/* 1. Star Field (Back Layer) */}
      <StarField />
      
      {/* 2. Background Image (Middle Layer) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/src/assets/bottom.png")',
          backgroundAttachment: 'fixed' 
        }}
      />

      {/* 3. Content (Top Layer) */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <TeamSection />
        <TestimonialsSection />
        <SponsorsSection />
        <FAQSection />
        <Footer />
      </div>

      {/* Music Button - Fixed Bottom Right */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow-gold hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className={isPlaying ? "animate-spin" : ""}
          style={isPlaying ? { animationDuration: '3s' } : {}}
        >
          <path d="M9 18V5l12-2v13"/>
          <circle cx="6" cy="18" r="3"/>
          <circle cx="18" cy="16" r="3"/>
        </svg>
      </button>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </main>
  );
};

export default Index;