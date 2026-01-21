import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, FileCheck, Utensils, Package, Users } from "lucide-react";

const tracks = [
  {
    id: "hackx",
    name: "HACK.X",
    title: "NOVA CORPS TREASURY",
    prizes: [
      { position: "1st", reward: "₹15,000", extra: "+ Internship" },
      { position: "2nd", reward: "₹10,000", extra: null },
      { position: "3rd", reward: "₹5,000", extra: null },
    ],
  },
  {
    id: "buildx",
    name: "BUILD.X",
    title: "ROCKET’S SUPPLY CACHE",
    prizes: [
      { position: "1st", reward: "₹15,000", extra: "+ Internship" },
      { position: "2nd", reward: "₹10,000", extra: null },
      { position: "3rd", reward: "₹5,000", extra: null },
    ],
  },
  {
    id: "thinkx",
    name: "THINK.X",
    title: "THE COLLECTOR’S BID",
    prizes: [
      { position: "1st", reward: "₹12,000", extra: "+ Mentorship" },
      { position: "2nd", reward: "₹8,000", extra: null },
      { position: "3rd", reward: "₹4,000", extra: null },
    ],
  },
  {
    id: "BATTLE OF KNOWHERE",
    name: "BATTLE OF KNOWHERE",
    title: "RAVAGER MERCENARY PAY",
    prizes: [
      { position: "1st", reward: "₹8,000", extra: "+ Gaming Gear" },
      { position: "2nd", reward: "₹5,000", extra: null },
      { position: "3rd", reward: "₹3,000", extra: null },
    ],
  },
  {
    id: "SOVEREIGN'S GAMBIT",
    name: "SOVEREIGN'S GAMBIT",
    title: "SOVEREIGN GOLD RESERVES",
    prizes: [
      { position: "1st", reward: "₹5,000", extra: "+ Goodies" },
      { position: "2nd", reward: "₹3,000", extra: null },
      { position: "3rd", reward: "₹2,000", extra: null },
    ],
  },
  {
    id: "COSMIC LENS",
    name: "COSMIC LENS",
    title: " AWESOME MIX ROYALTIES",
    prizes: [
      { position: "1st", reward: "₹5,000", extra: "+ Goodies" },
      { position: "2nd", reward: "₹3,000", extra: null },
      { position: "3rd", reward: "₹2,000", extra: null },
    ],
  },
];

const getStyles = (id) => {
  const styles = {
    hackx: {
      borderColor: "border-[#00f0ff]/60",
      activeText: "text-[#00f0ff]",
      activeBtnBg: "bg-[#00f0ff]/10",
      rightPanelBg: "bg-[rgba(0,240,255,0.05)]",
      hover: "hover:text-[#00f0ff] hover:bg-[#00f0ff]/10",
    },
    buildx: {
      borderColor: "border-[#FF8C00]/60",
      activeText: "text-[#FF8C00]",
      activeBtnBg: "bg-[#FF8C00]/10",
      rightPanelBg: "bg-[rgba(255,140,0,0.05)]",
      hover: "hover:text-[#FF8C00] hover:bg-[#FF8C00]/10",
    },
    thinkx: {
      borderColor: "border-[#FF003C]/60",
      activeText: "text-[#FF003C]",
      activeBtnBg: "bg-[#FF003C]/10",
      rightPanelBg: "bg-[rgba(255,0,60,0.05)]",
      hover: "hover:text-[#FF003C] hover:bg-[#FF003C]/10",
    },
    "BATTLE OF KNOWHERE": {
      borderColor: "border-[#A020F0]/60",
      activeText: "text-[#A020F0]",
      activeBtnBg: "bg-[#A020F0]/10",
      rightPanelBg: "bg-[rgba(160,32,240,0.05)]",
      hover: "hover:text-[#A020F0] hover:bg-[#A020F0]/10",
    },
    "SOVEREIGN'S GAMBIT": {
      borderColor: "border-[#FFD700]/60",
      activeText: "text-[#FFD700]",
      activeBtnBg: "bg-[#FFD700]/10",
      rightPanelBg: "bg-[rgba(255,215,0,0.05)]",
      hover: "hover:text-[#FFD700] hover:bg-[#FFD700]/10",
    },
    "COSMIC LENS": {
      borderColor: "border-[#39FF14]/60",
      activeText: "text-[#39FF14]",
      activeBtnBg: "bg-[#39FF14]/10",
      rightPanelBg: "bg-[rgba(57,255,20,0.05)]",
      hover: "hover:text-[#39FF14] hover:bg-[#39FF14]/10",
    },
  };

  return styles[id] || styles.hackx;
};

const participantBenefits = [
  { text: "Participation Certificate", icon: FileCheck },
  { text: "Free Meals & Snacks", icon: Utensils },
  { text: "Tech Swag", icon: Package },
  { text: "Networking Access", icon: Users },
];

export default function PrizesSection() {
  const [activeTrack, setActiveTrack] = useState("hackx");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentTrack = tracks.find((t) => t.id === activeTrack) || tracks[0];
  const activeStyle = getStyles(activeTrack);

  return (
    <section
      id="prizes"
      ref={ref}
      className="relative py-10 md:py-24 lg:pt-[100px] lg:pb-32 overflow-hidden uppercase"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-12 mt-0 md:mt-1"
        >
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-14 md:mt-4 lg:mt-0">
            <span className="sr-only">Hack The Spring Prizes, Rewards and Cash Pool - </span>
            <span className="text-gradient-gold">GALACTIC BOUNTIES</span>
          </h2>
          <p className="font-barlow text-lg lg:text-[20px] mt-1 md:mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            A reward pool worth <br className="block sm:hidden" />
            stealing batteries for
          </p>
        </motion.div>

        {/* Main Content - Tab Menu + Prize Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* MAIN CONTAINER (OUTER BORDER) */}
          <div
            className={`glass-card rounded-2xl border overflow-hidden transition-colors duration-300 ${activeStyle.borderColor}`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Vertical Tab Menu - Left Side */}
              <div
                className={`md:w-[40%] border-b md:border-b-0 md:border-r bg-card/50 transition-colors duration-300 ${activeStyle.borderColor}`}
              >
                <div className="p-2 md:p-6">
                  <div className="flex md:flex-col gap-1 md:gap-2 overflow-x-auto md:overflow-visible pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {tracks.map((track) => {
                      const style = getStyles(track.id);
                      const isActive = activeTrack === track.id;
                      return (
                        <button
                          key={track.id}
                          onClick={() => setActiveTrack(track.id)}
                          className={`relative flex items-center justify-start gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 rounded-lg font-primary text-xs md:text-base font-semibold transition-all duration-300 whitespace-nowrap md:w-full text-left border ${
                            isActive
                              ? `${style.activeText} ${style.activeBtnBg} ${style.borderColor}`
                              : `text-muted-foreground hover:bg-primary/5 border-transparent ${style.hover}`
                          }`}
                        >
                          {isActive && (
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          )}
                          <span className="truncate">{track.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Prize Card - Right Side */}
              <div
                className={`md:w-[60%] p-4 md:p-8 transition-colors duration-300 ${activeStyle.rightPanelBg}`}
              >
                <motion.div
                  key={currentTrack.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Track Title */}
                  <h3 className="font-display text-lg md:text-1.5xl font-bold mb-4 md:mb-6 text-primary text-left">
                    {currentTrack.title}
                  </h3>

                  {/* Prize List - WITH BULLET POINTS */}
                  <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6 text-left list-disc list-inside">
                    {currentTrack.prizes.map((prize, index) => (
                      <li
                        key={index}
                        className="font-primary text-sm md:text-lg font-semibold text-foreground"
                      >
                        <span>
                          {prize.position} {prize.reward}
                        </span>
                        {prize.extra && (
                          <span className="ml-2 text-accent text-[10px] md:text-xs">
                            {prize.extra}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-16 glass-card rounded-2xl p-4 md:p-8 max-w-5xl mx-auto border border-primary/20"
        >
          <h3 className="font-primary text-lg md:text-xl font-semibold text-center mb-4 md:mb-6 text-foreground">
            EVERY PARTICIPANT RECEIVES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            {participantBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row md:flex-col items-center gap-3 md:gap-2"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <span className="font-barlow text-sm text-muted-foreground text-left md:text-center md:whitespace-nowrap">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}