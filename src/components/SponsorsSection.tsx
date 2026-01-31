import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import { Button } from "@/components/ui/button"; // Removed unused import
// import { Mail } from "lucide-react"; // Removed unused import

// Placeholder sponsor data
const sponsors = {
  poweredBy: [
    { name: "TechGiant", placeholder: true },
  ],
  associate: [
    { name: "InnovateLabs", placeholder: true },
    { name: "FutureWorks", placeholder: true },
  ],
  technology: [
    { name: "DevTools Inc", placeholder: true },
    { name: "CloudSystems", placeholder: true },
  ],
  learning: [
    { name: "EduTech", placeholder: true },
    { name: "CodeAcademy", placeholder: true },
  ],
  refreshment: [
    { name: "EnergyDrink", placeholder: true },
    { name: "SnackBar", placeholder: true },
    { name: "Hydrate", placeholder: true },
  ],
  community: [
    { name: "Dev Community", placeholder: true },
    { name: "Code Club", placeholder: true },
    { name: "Tech Talks", placeholder: true },
    { name: "Hackathon Network", placeholder: true },
    { name: "Student Devs", placeholder: true },
  ],
};

const tierConfig = {
  poweredBy: {
    label: "POWERED BY",
    gridCols: "grid-cols-1",
    logoSize: "w-48 h-24 sm:w-64 sm:h-32", // Larger for top tier
    borderColor: "border-[#00f0ff]/40", // Cyan tint
    containerClass: "flex justify-center",
  },
  associate: {
    label: "ASSOCIATE SPONSORS",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    logoSize: "w-40 h-20 sm:w-48 sm:h-24",
    borderColor: "border-[#FFD700]/40", // Gold tint
    containerClass: "grid gap-6 justify-center",
  },
  technology: {
    label: "TECHNOLOGY PARTNERS",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    logoSize: "w-36 h-18 sm:w-44 sm:h-22",
    borderColor: "border-[#A020F0]/40", // Purple tint
    containerClass: "grid gap-6 justify-center",
  },
  learning: {
    label: "LEARNING PARTNERS",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    logoSize: "w-32 h-16 sm:w-40 sm:h-20",
    borderColor: "border-[#39FF14]/40", // Green tint
    containerClass: "grid gap-6 justify-center",
  },
  refreshment: {
    label: "REFRESHMENT PARTNERS",
    gridCols: "grid-cols-1 sm:grid-cols-3",
    logoSize: "w-28 h-14 sm:w-36 sm:h-18",
    borderColor: "border-[#FF8C00]/40", // Orange tint
    containerClass: "grid gap-6 justify-center",
  },
  community: {
    label: "COMMUNITY PARTNERS",
    gridCols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
    logoSize: "w-24 h-12 sm:w-28 sm:h-14",
    borderColor: "border-white/20",
    containerClass: "grid gap-4 justify-center",
  },
};

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative py-24 lg:pt-[100px] lg:pb-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 lg:mt-0 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="sr-only">Hack The Spring Official Sponsors and Partners - </span>
            <span className="text-gradient-gold">NOVA CORPS ALLIANCE</span>
          </h2>
            <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            THE OFFICIAL BACKERS OF <br className="block sm:hidden" />THIS MISSION
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
          {Object.keys(sponsors).map((tier, tierIndex) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-barlow text-sm sm:text-base md:text-lg font-bold text-[#C1EAFF]/70 tracking-[0.25em] mb-6 sm:mb-8 text-center uppercase relative inline-block">
                {tierConfig[tier].label}
                {/* Decorative underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C1EAFF]/30 to-transparent"></span>
              </h3>

              <div className={`${tierConfig[tier].containerClass} ${tierConfig[tier].gridCols} w-full`}>
                {sponsors[tier].map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: tierIndex * 0.1 + index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`
                      glass-card rounded-xl p-4 flex items-center justify-center 
                      transition-all duration-300 border border-white/5 bg-white/[0.02]
                      hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]
                      ${tierConfig[tier].logoSize} mx-auto
                    `}
                  >
                    {sponsor.placeholder ? (
                      <div className="text-center w-full h-full">
                        <div className={`w-full h-full flex items-center justify-center border border-dashed rounded-lg ${tierConfig[tier].borderColor}`}>
                          <span className="font-barlow text-[10px] sm:text-xs text-white/40 tracking-wider uppercase text-center">
                            {sponsor.name}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      
      </div>
    </section>
  );
}