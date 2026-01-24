import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ChevronRight, 
  FileCheck, 
  Utensils, 
  Package, 
  Users, 
  Trophy, 
  Medal, 
  Award 
} from "lucide-react";

const tracks = [
  {
    id: "hackx",
    name: "HACK.X",
    title: "NOVA CORPS TREASURY",
    prizes: [
      { position: "1st", reward: "₹9,000", extra: "+ Internship" },
      { position: "2nd", reward: "₹6,000", extra: null },
      { position: "3rd", reward: "₹3,000", extra: null },
    ],
  },
  {
    id: "buildx",
    name: "BUILD.X",
    title: "ROCKET’S SUPPLY CACHE",
    prizes: [
      { position: "1st", reward: "₹6,000", extra: null },
      { position: "2nd", reward: "₹4,000", extra: null },
      { position: "3rd", reward: "₹2,000", extra: null },
    ],
  },
  {
    id: "thinkx",
    name: "THINK.X",
    title: "THE COLLECTOR’S BID",
    prizes: [
      { position: "1st", reward: "₹1000", extra: "+ Mentorship" },
      { position: "2nd", reward: "₹500", extra: "+ Mentorship" },
    ],
  },
  {
    id: "BATTLE OF KNOWHERE",
    name: "BATTLE OF KNOWHERE",
    title: "RAVAGER MERCENARY PAY",
    prizes: [
      { position: "1st", reward: "₹1000", extra: null },
      { position: "2nd", reward: "₹500", extra: null },
    ],
  },
  {
    id: "SOVEREIGN'S GAMBIT",
    name: "SOVEREIGN'S GAMBIT",
    title: "SOVEREIGN GOLD RESERVES",
    prizes: [
      { position: "1st", reward: "₹500", extra: null },
      { position: "2nd", reward: "₹250", extra: null },
    ],
  },
  {
    id: "COSMIC LENS",
    name: "COSMIC LENS",
    title: " AWESOME MIX ROYALTIES",
    prizes: [
      { position: "1st", reward: "₹500", extra: "- Photography" },
      { position: "2nd", reward: "₹500", extra: "- Content Creation" },
    ],
  },
];

const getStyles = (id) => {
  const styles = {
    hackx: { borderColor: "border-[#00f0ff]/60", activeText: "text-[#00f0ff]", activeBtnBg: "bg-[#00f0ff]/10", rightPanelBg: "bg-[rgba(0,240,255,0.05)]", hover: "hover:text-[#00f0ff] hover:bg-[#00f0ff]/10" },
    buildx: { borderColor: "border-[#FF8C00]/60", activeText: "text-[#FF8C00]", activeBtnBg: "bg-[#FF8C00]/10", rightPanelBg: "bg-[rgba(255,140,0,0.05)]", hover: "hover:text-[#FF8C00] hover:bg-[#FF8C00]/10" },
    thinkx: { borderColor: "border-[#FF003C]/60", activeText: "text-[#FF003C]", activeBtnBg: "bg-[#FF003C]/10", rightPanelBg: "bg-[rgba(255,0,60,0.05)]", hover: "hover:text-[#FF003C] hover:bg-[#FF003C]/10" },
    "BATTLE OF KNOWHERE": { borderColor: "border-[#A020F0]/60", activeText: "text-[#A020F0]", activeBtnBg: "bg-[#A020F0]/10", rightPanelBg: "bg-[rgba(160,32,240,0.05)]", hover: "hover:text-[#A020F0] hover:bg-[#A020F0]/10" },
    "SOVEREIGN'S GAMBIT": { borderColor: "border-[#FFD700]/60", activeText: "text-[#FFD700]", activeBtnBg: "bg-[#FFD700]/10", rightPanelBg: "bg-[rgba(255,215,0,0.05)]", hover: "hover:text-[#FFD700] hover:bg-[#FFD700]/10" },
    "COSMIC LENS": { borderColor: "border-[#39FF14]/60", activeText: "text-[#39FF14]", activeBtnBg: "bg-[#39FF14]/10", rightPanelBg: "bg-[rgba(57,255,20,0.05)]", hover: "hover:text-[#39FF14] hover:bg-[#39FF14]/10" },
  };
  return styles[id] || styles.hackx;
};

const participantBenefits = [
  { text: "Participation Certificate", icon: FileCheck },
  { text: "Meals / Snacks", icon: Utensils },
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
    <section id="prizes" ref={ref} className="relative py-10 md:py-24 overflow-hidden uppercase">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8 md:mb-12">
          <h2 className="font-display text-[27px] lg:text-[44px] font-bold mb-2">
            <span className="text-gradient-gold">GALACTIC BOUNTIES</span>
          </h2>
          <p className="font-barlow text-sm lg:text-[18px] tracking-[0.2em] text-[#C1EAFF] italic">
            A reward pool worth <br className="block sm:hidden" /> stealing batteries for
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className={`glass-card rounded-3xl border overflow-hidden transition-colors duration-500 ${activeStyle.borderColor}`}>
            <div className="flex flex-col md:flex-row">
              
              {/* Sidebar Tabs */}
              <div className={`md:w-[30%] border-b md:border-b-0 md:border-r bg-card/40 ${activeStyle.borderColor}`}>
                <div className="p-4 md:p-6">
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                    {tracks.map((track) => {
                      const style = getStyles(track.id);
                      const isActive = activeTrack === track.id;
                      return (
                        <button
                          key={track.id}
                          onClick={() => setActiveTrack(track.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-primary text-[10px] md:text-xs font-bold border transition-all duration-300 ${
                            isActive ? `${style.activeText} ${style.activeBtnBg} ${style.borderColor}` : `text-muted-foreground border-transparent ${style.hover}`
                          }`}
                        >
                          {isActive && <ChevronRight className="w-3 h-3 shrink-0" />}
                          <span className="truncate">{track.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Prize Details Panel */}
              <div className={`md:w-[70%] p-6 md:p-10 transition-colors duration-500 ${activeStyle.rightPanelBg}`}>
                <motion.div key={currentTrack.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className={`font-display text-xs md:text-base font-bold mb-8 tracking-widest ${activeStyle.activeText}`}>
                    {currentTrack.title}
                  </h3>

                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4">
                    {currentTrack.prizes.map((prize, index) => {
                      // Check if this specific prize has an extra perk
                      const hasExtra = !!prize.extra;
                      
                      const getIcon = (pos) => {
                        const iconClass = "w-10 h-10 sm:w-8 sm:h-8 text-white";
                        if (pos === "1st") return <Trophy className={iconClass} />;
                        if (pos === "2nd") return <Medal className={iconClass} />;
                        return <Award className={iconClass} />;
                      };

                      return (
                        <div
                          key={index}
                          className={`
                            flex flex-row sm:flex-col items-center 
                            p-5 rounded-2xl bg-white/5 border border-white/10 
                            min-h-[85px] sm:min-h-[160px] gap-4
                            ${hasExtra ? "sm:justify-between" : "sm:justify-center sm:gap-6"} 
                          `}
                        >
                          <div className="shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            {getIcon(prize.position)}
                          </div>

                          <div className={`text-left sm:text-center ${hasExtra ? "flex-1" : ""}`}>
                            <p className="font-barlow text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40 mb-0.5 uppercase">
                              {prize.position} Place
                            </p>
                            
                            {/* HORIZONTAL LINE FOR REWARD AND EXTRA */}
                            <div className="flex flex-row sm:flex-col items-baseline sm:items-center gap-2 sm:gap-1">
                              <p className="font-display text-base sm:text-lg font-bold text-white tracking-[0.1em] whitespace-nowrap">
                                {prize.reward}
                              </p>
                              {prize.extra && (
                                <span className="text-[7px] sm:text-[8px] text-white/60 italic font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/5 uppercase tracking-wider whitespace-nowrap">
                                  {prize.extra}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Participant Benefits Footer */}
        <div className="mt-8 md:mt-12 glass-card rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border border-white/5 bg-white/[0.02]">
          <h3 className="font-primary text-[9px] md:text-xs font-bold text-center mb-8 tracking-[0.3em] text-white/70">
            EVERY PARTICIPANT RECEIVES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {participantBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="w-4 h-4 text-white/80" />
                  </div>
                  <span className="font-barlow text-[9px] md:text-xs text-white/50 tracking-wide uppercase">
                    {benefit.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}