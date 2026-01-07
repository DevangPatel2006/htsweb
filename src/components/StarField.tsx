import { useMemo } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  left: number;
  top: number;
  size: "small" | "medium" | "large";
  duration: number;
  delay: number;
}

export default function StarField() {
  const stars = useMemo(() => {
    const starArray: Star[] = [];
    
    // Generate 150 stars with varying sizes
    for (let i = 0; i < 150; i++) {
      const random = Math.random();
      let size: "small" | "medium" | "large";
      
      if (random < 0.6) size = "small";
      else if (random < 0.9) size = "medium";
      else size = "large";
      
      starArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 5,
      });
    }
    
    return starArray;
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`star ${star.size}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            ["--duration" as string]: `${star.duration}s`,
            ["--delay" as string]: `${star.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: star.delay * 0.1, duration: 0.5 }}
        />
      ))}
      
      {/* Shooting stars */}
      {[1, 2, 3].map((i) => (
        <div
          key={`shooting-${i}`}
          className="shooting-star"
          style={{
            top: `${10 + i * 25}%`,
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 5}s`,
          }}
        />
      ))}
      
      {/* Nebula glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/10 rounded-full blur-[100px] animate-nebula" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nebula-pink/10 rounded-full blur-[80px] animate-nebula" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-[60px] animate-nebula" style={{ animationDelay: "2s" }} />
    </div>
  );
}