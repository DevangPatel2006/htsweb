import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import SVG assets
import trackSvg from "@/assets/trackno.svg";
import initiateButton from "@/assets/inti.svg";
import learnMoreButton from "@/assets/learnmore.svg";

// Protocol data (dynamic background + dynamic links)
const protocols = [
  {
    id: 1,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-1-initiate",
    learnMoreLink: "https://discord.gg/protocol-1-learn",
  },
  {
    id: 2,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-2-initiate",
    learnMoreLink: "https://discord.gg/protocol-2-learn",
  },
  {
    id: 3,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-3-initiate",
    learnMoreLink: "https://discord.gg/protocol-3-learn",
  },
  {
    id: 4,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-4-initiate",
    learnMoreLink: "https://discord.gg/protocol-4-learn",
  },
  {
    id: 5,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-5-initiate",
    learnMoreLink: "https://discord.gg/protocol-5-learn",
  },
  {
    id: 6,
    trackSvg: trackSvg,
    initiateLink: "https://unstop.com/hackathons/protocol-6-initiate",
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
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">SELECT YOUR PROTOCOL</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground italic">
            Awaiting User Input: Initialize your operational module.
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
              className="relative"
            >
              {/* Track Background */}
              <div className="relative w-full">
                <img
                  src={protocol.trackSvg}
                  alt={`Protocol ${protocol.id}`}
                  className="w-full h-auto block"
                  loading="lazy"
                  draggable="false"
                />

                {/* Buttons Container (ONLY GAP ADDED) */}
                <div
                  className="
                    absolute
                    bottom-[24.65px]
                    left-[36.15px]
                    right-[36.77px]
                    flex
                    justify-between
                    items-center
                    gap-[12px]
                  "
                >
                  {/* Initiate Hack Button */}
                  <a
                    href={protocol.initiateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block touch-manipulation"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={initiateButton}
                      alt="Initiate Hack"
                      className="h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95"
                      draggable="false"
                    />
                  </a>

                  {/* Learn More Button */}
                  <a
                    href={protocol.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block touch-manipulation"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <img
                      src={learnMoreButton}
                      alt="Learn More"
                      className="h-auto cursor-pointer transition-transform hover:scale-105 active:scale-95"
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
