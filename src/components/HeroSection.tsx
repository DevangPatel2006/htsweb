import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

import heroBg from "@/assets/hero_section_bg_image.png";
import logoText from "@/assets/logo3.png"; // ✅ added

function CountdownTimer() {
  const targetDate = useMemo(() => new Date("2026-03-21T09:00:00"), []);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-glow-gold">
            <span className="font-display text-2xl sm:text-3xl text-primary font-bold">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-xs sm:text-sm text-muted-foreground font-body uppercase tracking-wider">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cosmic space nebula"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          
        </motion.div>

        {/* 🔥 IMAGE-FILLED TEXT (NO DESIGN CHANGE) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <img
  src={logoText}
  alt="Hack The Spring"
  className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
/>


        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-6"
        >
          
        </motion.h2>

       

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg text-foreground/80 mb-8"
        >
          48 Hours • 600+ Participants • Endless Possibilities
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              Register on Unstop
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
