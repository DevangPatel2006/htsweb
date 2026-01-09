import { useEffect, useMemo, useState } from "react";
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
  /* ---------------- NORMAL STARS (UNCHANGED) ---------------- */
  const stars = useMemo<Star[]>(() => {
    const arr: Star[] = [];

    for (let i = 0; i < 150; i++) {
      const r = Math.random();
      const size = r < 0.6 ? "small" : r < 0.9 ? "medium" : "large";

      arr.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size,
        duration: 5 + Math.random() * 8,
        delay: Math.random() * 15,
      });
    }
    return arr;
  }, []);

  /* ---------------- SHOOTING STAR CONTROL ---------------- */
  const [activeShooter, setActiveShooter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShooter((p) => (p + 1) % 3);
    }, 5000); // 🔥 EXACT 5 second gap

    return () => clearInterval(interval);
  }, []);

  /* ---------------- SHOOTING STAR DATA ---------------- */
  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => {
      const edge = Math.floor(Math.random() * 4);

      let top = 0;
      let left = 0;
      let angle = 0;

      switch (edge) {
        case 0: // TOP
          top = -10;
          left = Math.random() * 100;
          angle = 45 + Math.random() * 90;
          break;
        case 1: // RIGHT
          top = Math.random() * 100;
          left = 110;
          angle = 135 + Math.random() * 90;
          break;
        case 2: // BOTTOM
          top = 110;
          left = Math.random() * 100;
          angle = 225 + Math.random() * 90;
          break;
        case 3: // LEFT
          top = Math.random() * 100;
          left = -10;
          angle = -45 + Math.random() * 90;
          break;
      }

      return { id: i, top, left, angle };
    });
  }, []);

  return (
    <div className="star-field">
      {/* Normal stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`star ${star.size}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            ["--duration" as any]: `${star.duration}s`,
            ["--delay" as any]: `${star.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: star.delay * 0.1, duration: 0.5 }}
        />
      ))}

      {/* Shooting stars (ONE AT A TIME) */}
      {shootingStars.map((star, index) => (
        <div
          key={star.id}
          className={`shooting-star ${
            index === activeShooter ? "shooting-active" : ""
          }`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            ["--angle" as any]: `${star.angle}deg`,
          }}
        />
      ))}

      {/* Nebula glows (unchanged) */}
      <div className="nebula nebula-purple" />
      <div className="nebula nebula-pink" />
      <div className="nebula nebula-blue" />
    </div>
  );
}
