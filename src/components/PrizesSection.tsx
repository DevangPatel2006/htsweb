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
  Award,
  CheckCircle2
} from "lucide-react";

const tracks = [
  {
    id: "hackx",
    name: "HACK.X",
    title: "NOVA CORPS TREASURY",
    trackBenefits: [
      "Internship Opportunity",
      "2 Days Breakfast & Lunch",
      "Gift Vouchers",
      "Networking Access",
      "Industry Experience"
    ],
    prizes: [
      { position: "1st", reward: "₹9,000", extra: null },
      { position: "2nd", reward: "₹6,000", extra: null },
      { position: "3rd", reward: "₹3,000", extra: null },
    ],
  },
  {
    id: "buildx",
    name: "BUILD.X",
    title: "ROCKET'S SUPPLY CACHE",
    trackBenefits: [
      "CERTIFICATE OF PARTICIPATION",
      "BREAKFAST & LUNCH",
      "GIFT VOUCHERS",
      "NETWORKING ACCESS",
      "HANDS-ON EXPERIENCE"
    ],
    prizes: [
      { position: "1st", reward: "₹6,000", extra: null },
      { position: "2nd", reward: "₹4,000", extra: null },
      { position: "3rd", reward: "₹2,000", extra: null },
    ],
  },
  {
    id: "thinkx",
    name: "THINK.X",
    title: "THE COLLECTOR'S BID",
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
    title: "AWESOME MIX ROYALTIES",
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
          <h2 className="font-display text-2xl sm:text-3xl lg:text-[44px] font-bold mb-2">
            <span className="text-gradient-gold">GALACTIC BOUNTIES</span>
          </h2>
          <p className="font-barlow text-xs sm:text-sm lg:text-[18px] tracking-[0.15em] sm:tracking-[0.2em] text-[#C1EAFF] italic">
            A reward pool worth <br className="block sm:hidden" /> stealing batteries for
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className={`glass-card rounded-2xl sm:rounded-3xl border overflow-hidden transition-colors duration-500 ${activeStyle.borderColor}`}>
            <div className="flex flex-col md:flex-row">
              
              {/* Sidebar Tabs */}
              <div className={`md:w-[30%] border-b md:border-b-0 md:border-r bg-card/40 ${activeStyle.borderColor}`}>
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {tracks.map((track) => {
                      const style = getStyles(track.id);
                      const isActive = activeTrack === track.id;
                      return (
                        <button
                          key={track.id}
                          onClick={() => setActiveTrack(track.id)}
                          className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-primary text-[9px] sm:text-[10px] md:text-xs font-bold border transition-all duration-300 ${
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
              <div className={`md:w-[70%] p-4 sm:p-6 md:p-10 transition-colors duration-500 ${activeStyle.rightPanelBg}`}>
                <motion.div key={currentTrack.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  
                  <h3 className={`font-display text-[10px] sm:text-xs md:text-base font-bold mb-6 sm:mb-8 tracking-widest ${activeStyle.activeText} flex flex-col md:flex-row md:items-baseline gap-2`}>
                    {currentTrack.title}
                  </h3>

                  {currentTrack.trackBenefits ? (
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                      {/* Left: Prize Money */}
                      <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                        {currentTrack.prizes.map((prize, index) => {
                          const iconClass = "w-6 h-6 sm:w-8 sm:h-8 text-white";
                          let Icon = Award;
                          if (prize.position === "1st") Icon = Trophy;
                          if (prize.position === "2nd") Icon = Medal;

                          return (
                            <div key={index} className="flex items-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 gap-3 sm:gap-4">
                              <div className="shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                <Icon className={iconClass} />
                              </div>
                              <div>
                                <p className="font-barlow text-[8px] sm:text-[9px] tracking-[0.2em] text-white/40 mb-0.5 uppercase">
                                  {prize.position}
                                </p>
                                <p className="font-display text-base sm:text-lg font-bold text-white tracking-[0.1em]">
                                  {prize.reward}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right: Benefits List */}
                      <div className="lg:w-[220px] shrink-0 flex flex-col rounded-xl bg-white/[0.03] border border-white/5 p-4 sm:p-5">
                          <h4 className="font-display text-[9px] sm:text-[10px] font-bold text-white/60 mb-4 sm:mb-5 tracking-widest border-b border-white/10 pb-2">
                           INCLUDES
                          </h4>
                          <ul className="space-y-4 sm:space-y-5">
                           {currentTrack.trackBenefits.map((benefit, i) => {
                             const isInternship = benefit.toLowerCase().includes("internship");
                             return (
                               <li key={i} className="flex items-center gap-2">
                                 <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isInternship ? "text-[#FFD700]" : activeStyle.activeText}`} />
                                 {isInternship ? (
                                   <motion.span
                                     className="font-barlow text-[12px] sm:text-[14px] leading-none font-medium tracking-wide whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]"
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
                                     {benefit}
                                   </motion.span>
                                 ) : (
                                   <span className="font-barlow text-[12px] sm:text-[14px] leading-none font-medium tracking-wide whitespace-nowrap text-white/80">
                                     {benefit}
                                   </span>
                                 )}
                               </li>
                             );
                           })}
                          </ul>
                      </div>
                    </div>
                  ) : (
                    /* Standard Grid for other tracks */
                    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4">
                      {currentTrack.prizes.map((prize, index) => {
                        const hasExtra = !!prize.extra;
                        const iconClass = "w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 text-white";
                        let Icon = Award;
                        if (prize.position === "1st") Icon = Trophy;
                        if (prize.position === "2nd") Icon = Medal;

                        return (
                          <div
                            key={index}
                            className={`
                              flex flex-row sm:flex-col items-center 
                              p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 
                              min-h-[75px] sm:min-h-[160px] gap-3 sm:gap-4
                              ${hasExtra ? "sm:justify-between" : "sm:justify-center sm:gap-6"} 
                            `}
                          >
                            <div className="shrink-0 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                              <Icon className={iconClass} />
                            </div>

                            <div className={`text-left sm:text-center ${hasExtra ? "flex-1" : ""}`}>
                              <p className="font-barlow text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-0.5 uppercase">
                                {prize.position} Place
                              </p>
                              
                              <div className="flex flex-row sm:flex-col items-baseline sm:items-center gap-2 sm:gap-1">
                                <p className="font-display text-sm sm:text-base md:text-lg font-bold text-white tracking-[0.1em] whitespace-nowrap">
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
                  )}

                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Participant Benefits Footer */}
        <div className="mt-8 md:mt-12 glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 max-w-5xl mx-auto border border-white/5 bg-white/[0.02]">
          <h3 className="font-primary text-[8px] sm:text-[9px] md:text-xs font-bold text-center mb-6 sm:mb-8 tracking-[0.2em] sm:tracking-[0.3em] text-white/70">
            EVERY PARTICIPANT RECEIVES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-4">
            {participantBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
                  </div>
                  <span className="font-barlow text-[8px] sm:text-[9px] md:text-xs text-white/50 tracking-wide uppercase leading-tight">
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