import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

import heroBg from "@/assets/hero_section_bg_image.png";
import logoText from "@/assets/logo3.png";
import countdownFrame from "@/assets/frame.svg";
import heroButton from "@/assets/button.svg";

/* ----------------------------------
   COUNTDOWN TIMER
----------------------------------- */
function CountdownTimer() {
  const targetDate = useMemo(() => new Date("2026-03-21T09:00:00"), []);
  const [time, setTime] = useState({
    d: "00",
    h: "00",
    m: "00",
    s: "00",
  });

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

  const fontSize = "text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px]";

  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* TIME */}
      <div className="flex items-center">
        {[time.d, time.h, time.m, time.s].map((val, i) => (
          <div key={i} className="flex items-center">
            <span
              className={`${fontSize} font-display text-white leading-none w-[2ch] text-center`}
            >
              {val}
            </span>

            {i !== 3 && (
              <span
                className={`${fontSize} font-display text-white leading-none mx-3 sm:mx-4 flex items-center`}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>

      {/* LABELS */}
      <div className="flex justify-between w-full max-w-[240px] sm:max-w-[340px] md:max-w-[400px] mt-2">
        {["DAYS", "HOURS", "MINS", "SECS"].map((label) => (
          <span
            key={label}
            className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] text-white/70 font-barlow"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------
   HERO SECTION
----------------------------------- */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cosmic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="flex justify-center mb-4">
          <p
            className="
      font-primary
      font-light
      text-white
      text-[11px]
      sm:text-[12px]
      md:text-[13px]
      uppercase
      tracking-[0.25em]
      leading-[1.4]
      text-center
      opacity-90
      drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]
    "
          >
            GOVERNMENT ENGINEERING COLLEGE,
            <br />
            SECTOR 28, GANDHINAGAR'S
          </p>
        </div>

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <img
            src={logoText}
            alt="Hack The Spring 2026"
            className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
          />
        </motion.h1>

        {/* SOLVE FOR X — MATCHES FIGMA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="w-[445px] h-[66px] flex items-center justify-center">
            <p
              className="
                font-primary
                font-light opacity-85 tracking-[0.7em]

                drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]
                text-white
                text-[18px]
                sm:text-[22px]
                md:text-[26px]
                uppercase
                
                leading-none
                text-center
              "
            >
              SOLVE&nbsp;&nbsp;&nbsp;FOR&nbsp;&nbsp;&nbsp;X
            </p>
          </div>
        </motion.div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative w-[320px] sm:w-[420px] md:w-[520px]">
            <img
              src={countdownFrame}
              alt="Countdown Frame"
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center p-[4px]">
              <CountdownTimer />
            </div>
          </div>
        </motion.div>

        {/* CENTER BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-4"
        >
          <img
            src={heroButton}
            alt="Hero Action Button"
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto cursor-pointer"
          />
        </motion.div>

        {/* LABEL AT BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="font-barlow font-semibold italic text-white text-base tracking-[0.3em] leading-normal whitespace-nowrap">
            &gt; View Mission Parameters
          </div>
        </motion.div>
      </div>
    </section>
  );
}