import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

// Placeholder sponsor data - in production, replace with actual sponsor logos
const sponsors = {
  title: [
    { name: "TechCorp", placeholder: true },
  ],
  gold: [
    { name: "InnovateTech", placeholder: true },
    { name: "FutureLabs", placeholder: true },
  ],
  silver: [
    { name: "CodeBase", placeholder: true },
    { name: "DevTools", placeholder: true },
    { name: "CloudSync", placeholder: true },
  ],
  bronze: [
    { name: "StartupHub", placeholder: true },
    { name: "TechMentor", placeholder: true },
    { name: "DataFlow", placeholder: true },
    { name: "AppForge", placeholder: true },
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
  title: {
    label: "TITLE SPONSOR",
    gridCols: "grid-cols-1",
    logoSize: "w-48 h-24",
    borderColor: "border-primary",
  },
  gold: {
    label: "GOLD SPONSORS",
    gridCols: "grid-cols-2",
    logoSize: "w-40 h-20",
    borderColor: "border-yellow-500",
  },
  silver: {
    label: "SILVER SPONSORS",
    gridCols: "grid-cols-3",
    logoSize: "w-32 h-16",
    borderColor: "border-gray-400",
  },
  bronze: {
    label: "BRONZE SPONSORS",
    gridCols: "grid-cols-4",
    logoSize: "w-24 h-12",
    borderColor: "border-amber-700",
  },
  community: {
    label: "COMMUNITY PARTNERS",
    gridCols: "grid-cols-5",
    logoSize: "w-20 h-10",
    borderColor: "border-accent",
  },
};

export default function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sponsors"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="sr-only">Hack The Spring Official Sponsors and Partners - </span>
            <span className="text-gradient-gold">NOVA CORPS ALLIANCE</span>
          </h2>
            <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            THE OFFICIAL BACKERS OF <br className="block sm:hidden" />THIS MISSION
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {(Object.keys(sponsors) as Array<keyof typeof sponsors>).map(
            (tier, tierIndex) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              >
                <h3 className="font-primary text-xl md:text-2xl font-semibold text-center mb-8 text-foreground">
                  {tierConfig[tier].label}
                </h3>

                <div
                  className={`grid ${tierConfig[tier].gridCols} gap-4 md:gap-6 max-w-4xl mx-auto justify-items-center`}
                >
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
                      className={`glass-card rounded-xl p-4 flex items-center justify-center hover:border-primary/50 transition-all duration-300 ${tierConfig[tier].logoSize}`}
                    >
                      {sponsor.placeholder ? (
                        <div className="text-center">
                          <div className={`${tierConfig[tier].borderColor} border-2 border-dashed rounded-lg w-full h-full flex items-center justify-center p-2`}>
                            <span className="font-body text-xs text-muted-foreground">
                              {sponsor.name}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={(sponsor as { name: string; logo?: string }).logo}
                          alt={sponsor.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Become a Sponsor CTA */}
      
      </div>
    </section>
  );
}