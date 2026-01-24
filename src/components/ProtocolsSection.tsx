import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import SVG assets
import hackSvg from "@/assets/hack.svg";
import buildSvg from "@/assets/Group 11.svg";
import thinkSvg from "@/assets/thinknew.svg";
import gameSvg from "@/assets/game.svg";
import chessSvg from "@/assets/chess.svg";
import lastSvg from "@/assets/last.svg";

import initiateButton from "@/assets/inti.svg";
import learnMoreButton from "@/assets/learnmore.svg";

// Protocol data (dynamic background + dynamic links)
const protocols = [
  {
    id: 1,
    trackSvg: hackSvg,
    initiateLink: "https://unstop.com/p/hackthespring26-government-engineering-college-gec-gandhinagar-1627826",
    learnMoreLink: "https://discord.gg/protocol-1-learn",
  },
  {
    id: 2,
    trackSvg: buildSvg,
    initiateLink: "https://unstop.com/p/buildx-government-engineering-college-gec-gandhinagar-1628010",
    learnMoreLink: "https://discord.gg/protocol-2-learn",
  },
  {
    id: 3,
    trackSvg: thinkSvg,
    initiateLink: "https://unstop.com/p/thinkx-government-engineering-college-gec-gandhinagar-1628037",
    learnMoreLink: "https://discord.gg/protocol-3-learn",
  },
  {
    id: 4,
    trackSvg: gameSvg,
    initiateLink: "https://unstop.com/p/battle-of-nowhere-esports-tournament-government-engineering-college-gec-gandhinagar-1628523",
    learnMoreLink: "https://discord.gg/protocol-4-learn",
  },
  {
    id: 5,
    trackSvg: chessSvg,
    initiateLink: "https://unstop.com/p/solvereigns-gambit-government-engineering-college-gec-gandhinagar-1628065",
    learnMoreLink: "https://discord.gg/protocol-5-learn",
  },
  {
    id: 6,
    trackSvg: lastSvg,
    initiateLink: "https://unstop.com/p/cosmic-lens-government-engineering-college-gandhinagar-gujarat-1628652",
    learnMoreLink: "https://discord.gg/protocol-6-learn",
  },
];

export default function ProtocolsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="protocols"
      ref={ref}
      className="relative py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-0 sm:px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4 sm:px-0"
        >
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-6">
            <span className="sr-only">Hack The Spring Registration and Problem Statements - </span>
            <span className="text-gradient-gold">SELECT YOUR PROTOCOL</span>
          </h2>
          <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
  AWAITING USER INPUT: INTILIAZE YOUR OPERATIONAL MODULE.
</p>

        </motion.div>

        {/* Protocols Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] max-w-7xl mx-auto">
          {protocols.map((protocol, index) => (
            <motion.div
              key={protocol.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative ${[1, 2, 3, 6].includes(protocol.id) ? "-mb-[5.1%] sm:mb-0" : ""}`}
              whileHover="hover" // Triggers hover state for children
            >
              {/* Track Background */}
              <div className="relative w-full">
                {/* Main SVG Element with Smooth Pop */}
                <motion.img
                  src={protocol.trackSvg}
                  alt={`Protocol ${protocol.id}`}
                  className="w-full h-auto block"
                  loading="lazy"
                  draggable="false"
                  variants={{
                    hover: { scale: 1.05 } // Smooth pop effect
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                <div
                  className={`
                    absolute
                    ${[4, 5].includes(protocol.id) ? "bottom-[24.65px]" : "bottom-[calc(24.65px+10.07%)]"}
                    left-[36.15px]
                    right-[36.77px]
                    flex
                    justify-between
                    items-center
                    gap-[12px]
                    pointer-events-none
                  `}
                >
                  {/* Initiate Hack Button */}
                  <a
                    href={protocol.initiateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block touch-manipulation pointer-events-auto"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={initiateButton}
                      alt="Initiate Hack"
                      className="h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 max-w-full"
                      draggable="false"
                    />
                  </a>

                  {/* Learn More Button */}
                  <a
                    href={protocol.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block touch-manipulation pointer-events-auto"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={learnMoreButton}
                      alt="Learn More"
                      className="h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95 max-w-full"
                      draggable="false"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}