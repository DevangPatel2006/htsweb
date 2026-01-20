import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import heroBg from "@/assets/hero_section_bg_image.png";
import mobileHeroBg from "@/assets/mobilehero.svg";
import logoText from "@/assets/logo3.png";
import countdownFrame from "@/assets/frame.svg";
import heroButton from "@/assets/button.svg";

/* ----------------------------------
   COUNTDOWN TIMER
----------------------------------- */
function CountdownTimer() {
  const targetDate = useMemo(() => new Date("2026-02-20T08:30:00"), []);
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;

      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        h: String(Math.floor((diff / 3600000) % 24)).padStart(2, "0"),
        m: String(Math.floor((diff / 60000) % 60)).padStart(2, "0"),
        s: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      });
    };

    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [targetDate]);

  return (
    <div
      className="grid items-start"
      style={{
        gridTemplateColumns: "72px 32px 72px 32px 72px 32px 72px",
      }}
    >
      {/* DAYS */}
      <div className="flex flex-col items-center">
        <span className="text-[32px] font-display text-white leading-none">
          {time.d}
        </span>
        <span className="mt-2 text-xs tracking-[0.3em] text-white/70 font-barlow">
          DAYS
        </span>
      </div>

      <span className="text-[38px] text-white text-center leading-none">:</span>

      {/* HOURS */}
      <div className="flex flex-col items-center">
        <span className="text-[32px] font-display text-white leading-none">
          {time.h}
        </span>
        <span className="mt-2 text-xs tracking-[0.3em] text-white/70 font-barlow">
          HOURS
        </span>
      </div>

      <span className="text-[38px] text-white text-center leading-none">:</span>

      {/* MINS */}
      <div className="flex flex-col items-center">
        <span className="text-[32px] font-display text-white leading-none">
          {time.m}
        </span>
        <span className="mt-2 text-xs tracking-[0.3em] text-white/70 font-barlow">
          MINS
        </span>
      </div>

      <span className="text-[38px] text-white text-center leading-none">:</span>

      {/* SECS */}
      <div className="flex flex-col items-center">
        <span className="text-[32px] font-display text-white leading-none">
          {time.s}
        </span>
        <span className="mt-2 text-xs tracking-[0.3em] text-white/70 font-barlow">
          SECS
        </span>
      </div>
    </div>
  );
}

/* ----------------------------------
   HERO SECTION (NO SCROLL, 1 PAGE)
----------------------------------- */
export default function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      // UPDATED LOGIC:
      // 1. Calculate scale based on height (original logic)
      // 2. Calculate scale based on width (assuming ~560px safe content width for mobile)
      // 3. Take the smaller of the two to ensures content fits on both mobile and desktop
      const scaleH = vh / 1080;
      const scaleW = vw / 560;

      setScale(Math.min(scaleH, scaleW, 1));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="hero" className="relative w-screen h-screen overflow-hidden">
      {/* BACKGROUND - Desktop */}
      <img
        src={heroBg}
        alt="Hack The Spring 2026 Space Theme Background"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />
      {/* BACKGROUND - Mobile */}
      <img
        src={mobileHeroBg}
        alt="Hack The Spring Mobile Background"
        className="md:hidden absolute inset-0 w-full h-full object-cover scale-125 origin-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      {/* SCALE WRAPPER */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: "1920px",
          height: "1080px",
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: "center",
        }}
      >
        <div className="flex flex-col items-center pt-[100px]">
          <div className="h-[61px]" />

          <p className="font-primary text-[13px] uppercase tracking-[0.25em] text-white opacity-90 text-center mb-[20px]">
            GOVERNMENT ENGINEERING COLLEGE,
            <br />
            SECTOR 28, GANDHINAGAR'S
          </p>

          {/* --- SEO INJECTION: INVISIBLE H1 --- */}
          {/* This tells Google exactly what the page is about without changing the design */}
          <h1 className="sr-only">
            Hack The Spring 2026 - Government Engineering College Gandhinagar Annual Techfest
          </h1>

          <motion.img
            src={logoText}
            // --- SEO UPDATE: Descriptive Alt Text ---
            alt="Hack The Spring 2026 Official Event Logo"
            className="h-[140px] md:h-[288px] w-auto max-w-[90%] object-contain mb-[20px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          />

          <div className="h-[66px] mb-[30px] flex items-center">
            <p className="font-primary tracking-[0.7em] text-[16px] md:text-[26px] text-white opacity-85">
              SOLVE&nbsp;&nbsp;&nbsp;FOR&nbsp;&nbsp;&nbsp;X
            </p>
          </div>

          <div className="relative w-[520px] h-[145px] mb-[38px]">
            <img src={countdownFrame} alt="Countdown to Hackathon Launch" className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CountdownTimer />
            </div>
          </div>

          <motion.img
            src={heroButton}
            // --- SEO UPDATE: Alt Text for Button ---
            alt="View Mission Parameters and Event Protocols"
            className="h-[53px] mb-[100px] cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById("protocols");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />

          <div className="font-barlow italic tracking-[0.3em] text-white transition-transform duration-300 ease-out hover:scale-105">
            &gt; View Mission Parameters
          </div>

        </div>
      </div>
    </section>
  );
}