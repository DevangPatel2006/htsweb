import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  left: number;
  top: number;
  size: "small" | "medium" | "large";
  duration: number;
  delay: number;
  opacity: number;      // Determines how bright the star is
  boxShadow: string;    // Adds a tiny glow only to bright stars
}

export default function StarField() {
  /* ---------------- MOBILE DETECTION ---------------- */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check immediately and on resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------- STAR GENERATION ---------------- */
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];
    const starCount = isMobile ? 100 : 150;

    for (let i = 0; i < starCount; i++) {
      const r = Math.random();
      // 15% chance to be a "Bright" star, 85% chance to be a dim background star
      const isBright = Math.random() < 0.15; 

      // Sizes: Small (most common), Medium, Large (rare)
      const size = r < 0.6 ? "small" : r < 0.9 ? "medium" : "large";

      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        duration: 5 + Math.random() * 8, // Twinkle duration
        delay: Math.random() * 15,
        
        // logic: If bright -> opacity 1. Else -> opacity between 0.1 and 0.5
        opacity: isBright ? 1 : 0.1 + Math.random() * 0.4, 
        
        // logic: Only bright stars get a tiny white glow to make them "pop"
        boxShadow: isBright ? "0 0 4px 1px rgba(255, 255, 255, 0.8)" : "none",
      });
    }
    return arr;
  }, [isMobile]);

  return (
    <div className="star-field">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`star ${star.size} ${isMobile ? 'star-mobile' : ''}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            boxShadow: star.boxShadow, // Applied here
            ["--duration" as any]: `${star.duration}s`,
            ["--delay" as any]: `${star.delay}s`,
          }}
          initial={{ opacity: 0 }}
          // Animate to the specific star's opacity, not just generic '1'
          animate={{ 
            opacity: [0, star.opacity, star.opacity * 0.5, star.opacity] 
          }}
          transition={{ 
            delay: star.delay * 0.1, 
            duration: star.duration,
            repeat: Infinity, // Makes them twinkle forever
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Nebula glows (desktop only) */}
      {!isMobile && (
        <>
          <div className="nebula nebula-purple" />
          <div className="nebula nebula-pink" />
          <div className="nebula nebula-blue" />
        </>
      )}
    </div>
  );
}