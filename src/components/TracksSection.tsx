import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cdSvg from "@/assets/cd.svg";
import cd2Svg from "@/assets/cd2.svg";

export default function TracksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tracks"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden mt-7"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl lg:text-[48px] font-bold mb-4">
            <span className="text-gradient-gold">MISSION DIRECTIVES</span>
          </h2>
          <p className="font-barlow tracking-[0.15em] text-lg lg:text-[25px] text-muted-foreground italic">
            FOUR FREQUENCIES. ONE OBJECTIVE. TUNE IN TO YOUR MISSION.
          </p>
          <p className="font-open text-cyan-400 text-xs lg:text-sm tracking-widest">
            HACK.X [SOFTWARE HACKATHON]
          </p>
        </motion.div>

        {/* CD Stack SVG with Zero Gravity Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          {/* Desktop SVG */}
          <img 
            src={cdSvg}
            alt="Mission Directives CD Stack" 
            className="hidden lg:block w-full max-w-6xl h-auto cd-float-animation mt-2 mr-20"
          />
          
          {/* Mobile SVG */}
          <img 
            src={cd2Svg}
            alt="Mission Directives CD Stack" 
            className="block lg:hidden w-full max-w-md h-auto cd-float-animation px-4"
          />
        </motion.div>
      </div>
    </section>
  );
}