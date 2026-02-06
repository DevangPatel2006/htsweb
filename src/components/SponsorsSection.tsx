import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import local assets
import unstopLogo from "../assets/sponsors/unstop-logo.svg";
import petpoojaLogo from "../assets/sponsors/petpooja.png";
import arenaLogo from "../assets/sponsors/arena.png";
// --- NEW IMPORT ADDED HERE ---
import pv2Logo from "../assets/sponsors/pv 2.png"; 
// -----------------------------
import interLogo from "../assets/sponsors/inter.png";
import xyzLogo from "../assets/sponsors/xyz_website.png";
import aparaLogo from "../assets/sponsors/apara_website.png";
import ssLogo from "../assets/sponsors/ss_website.png";
import clubIdeLogo from "../assets/sponsors/Club_IDE_logo-removebg-preview.png";
import awsLogo from "../assets/sponsors/aws-removebg-preview.png";
import gecgnLogo from "../assets/sponsors/GECGN update Logo.png";

const sponsors = {
  poweredBy: [{ name: "Petpooja", logo: petpoojaLogo }],
  platform: [{ name: "Unstop", logo: unstopLogo }],
  associate: [
    { name: "Arena Animation", logo: arenaLogo },
    // --- NEW SPONSOR ADDED HERE ---
    { name: "Preyish Sir", logo: pv2Logo },
  ],
  technology: [
    { name: "Inter", logo: interLogo },
    { name: "XYZ", logo: xyzLogo },
  ],
  refreshment: [
    { name: "Apara", logo: aparaLogo },
    { name: "SS Website", logo: ssLogo },
  ],
  community: [
    { name: "Club IDE", logo: clubIdeLogo },
    { name: "AWS", logo: awsLogo },
    { name: "GECGN", logo: gecgnLogo },
  ],
};

const unifiedLogoSize = "w-40 h-20 sm:w-48 sm:h-24";

const tierConfig = {
  poweredBy: {
    label: "POWERED BY",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex justify-center gap-2",
  },
  platform: {
    label: "PLATFORM PARTNER",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex justify-center gap-2",
  },
  associate: {
    label: "ASSOCIATE SPONSORS",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex justify-center gap-6",
  },
  technology: {
    label: "TECHNOLOGY PARTNERS",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex flex-wrap justify-center gap-6",
  },
  refreshment: {
    label: "REFRESHMENT PARTNERS",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex flex-wrap justify-center gap-6",
  },
  community: {
    label: "COMMUNITY PARTNERS",
    gridCols: "",
    logoSize: unifiedLogoSize,
    containerClass: "flex flex-wrap justify-center gap-6",
  },
};

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const topTiers = ["poweredBy", "platform"];
  const otherTiers = Object.keys(sponsors).filter((key) => !topTiers.includes(key));

  const renderTier = (tier, tierIndex) => {
    if (!sponsors[tier] || sponsors[tier].length === 0 || !tierConfig[tier]) return null;

    // Check if current tier is Powered By to apply effect
    const isPoweredBy = tier === "poweredBy";

    return (
      <motion.div
        key={tier}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
        // Preserved exact classes from your snippet
        className="flex flex-col items-center w-full md:w-auto"
      >
        <h3 className="font-barlow text-sm sm:text-base md:text-lg font-bold text-[#C1EAFF]/70 tracking-[0.25em] mb-5 sm:mb-6 text-center uppercase relative inline-block">
          {/* Conditional rendering for the Glow Effect */}
          {isPoweredBy ? (
            <motion.span
              className="font-barlow text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
              style={{
                backgroundImage: "linear-gradient(90deg, #FFD700 0%, #FFFFFF 50%, #FFD700 100%)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              animate={{ backgroundPosition: ["0% 50%", "-200% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {tierConfig[tier].label}
            </motion.span>
          ) : (
            tierConfig[tier].label
          )}
          
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C1EAFF]/30 to-transparent"></span>
        </h3>

        <div className={`${tierConfig[tier].containerClass} ${tierConfig[tier].gridCols} w-full items-center`}>
          {sponsors[tier].map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: tierIndex * 0.1 + index * 0.05,
              }}
              whileHover={{ scale: 1.1 }}
              className={`${tierConfig[tier].logoSize} flex items-center justify-center`}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-lg transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="sponsors" ref={ref} className="relative py-16 lg:pt-[80px] lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 lg:mt-0">
            <span className="text-gradient-gold">NOVA CORPS ALLIANCE</span>
          </h2>
          <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] text-[#C1EAFF] italic">
            THE OFFICIAL BACKERS OF <br className="block sm:hidden" /> THIS MISSION
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Preserved exact classes from your snippet (gap-10 md:gap-16) */}
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mb-10 sm:mb-12">
            {topTiers.map((tier, index) => renderTier(tier, index))}
          </div>

          <div className="space-y-10 sm:space-y-14">
            {otherTiers.map((tier, index) =>
              renderTier(tier, index + topTiers.length)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}