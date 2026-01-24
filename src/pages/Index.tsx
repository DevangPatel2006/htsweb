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
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/SectionSeparator";
import ProtocolsSection from "@/components/ProtocolsSection";

const Index = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

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
    <main
      className="min-h-screen overflow-x-hidden relative"
      style={{
        background: `
          linear-gradient(
            180deg,
            #13001e 0%,
            #0b0c15 60%,
            #05040a 100%
          )
        `
      }}
    >
      {/* --- CUSTOM ANIMATION FOR BUTTON RING --- */}
      <style>{`
        @keyframes btn-ring-pulse {
          0% {
            transform: scale(1);
            opacity: 1;
            border-width: 1px;
            box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.7);
          }
          70% {
             transform: scale(1.6);
             opacity: 0;
             border-width: 0px;
             box-shadow: 0 0 20px 10px rgba(234, 179, 8, 0);
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
        .animate-music-pulse {
          animation: btn-ring-pulse 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
      `}</style>

      {/* 1. Star Field (Back Layer) */}
      <StarField />
      
      {/* 2. Background Image (Middle Layer) - Desktop */}
      <div 
        className="hidden md:block absolute inset-0 z-0 pointer-events-none opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/bottom1.png")',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* 2. Background Image (Middle Layer) - Mobile */}
      <div 
        className="md:hidden fixed inset-0 z-0 pointer-events-none opacity-30 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: 'url("/mobmidd.png")',
        }}
      />

      {/* 3. Content (Top Layer) */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        <AboutSection />
        
        <ProtocolsSection />
        
        <TracksSection />
        
        <PrizesSection />
        
        <TimelineSection />
        
        <TeamSection />
        
        <TestimonialsSection />
        
        <SponsorsSection />
        
        <FAQSection />
        <Footer />
      </div>

      {/* Music Button Container - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        
        {/* The Yellow Pulse Ring (Behind Button) */}
        <div 
          className="absolute inset-0 rounded-full border border-yellow-400 animate-music-pulse pointer-events-none"
        />

        {/* The Button Itself */}
        <button
          onClick={toggleMusic}
          className="relative w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow-gold hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-black ${isPlaying ? "animate-spin" : ""}`}
            style={isPlaying ? { animationDuration: "3s" } : {}}
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <circle cx="8" cy="10" r="2" />
            <path d="M8 12h8" />
            <circle cx="16" cy="10" r="2" />
            <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
          </svg>
        </button>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      >
        <source src="/Sequence 01.aac" type="audio/mpeg" />
      </audio>

    </main>
  );
};

export default Index;