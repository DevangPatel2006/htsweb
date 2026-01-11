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
      gridTemplateColumns:
        "72px 32px 72px 32px 72px 32px 72px",
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
      setScale(Math.min(vh / 1080, 1));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
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
            GOVERNMENT ENGINEERING COLLEGE,<br />
            SECTOR 28, GANDHINAGAR'S
          </p>

          <motion.img
            src={logoText}
            className="h-[288px] mb-[20px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          />

          <div className="h-[66px] mb-[30px] flex items-center">
            <p className="font-primary tracking-[0.7em] text-[26px] text-white opacity-85  ">
              SOLVE&nbsp;&nbsp;&nbsp;FOR&nbsp;&nbsp;&nbsp;X
            </p>
          </div>

          <div className="relative w-[520px] h-[145px] mb-[38px]">
            <img src={countdownFrame} className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <CountdownTimer />
            </div>
          </div>

          <img src={heroButton} className="h-[53px] mb-[100px]" />

          <div className="font-barlow italic tracking-[0.3em] text-white">
            &gt; View Mission Parameters
          </div>

        </div>
      </div>
    </section>
  );
}
