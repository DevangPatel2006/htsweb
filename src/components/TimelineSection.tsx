import { useState } from "react";
import {
  UserCheck,
  PartyPopper,
  Rocket,
  FileCheck,
  Coffee,
  Send,
  Trophy,
  Clock,
} from "lucide-react";

const day1Events = [
  {
    icon: UserCheck,
    time: "08:30 AM",
    title: "DOCKING & REFUEL",
    description: "Galactic Entry. Complete your registration protocol at the gates. Grab your breakfast rations before the mission commences.",
  },
  {
    icon: PartyPopper,
    time: "11:00 AM",
    title: "IGNITION SEQUENCE",
    description: "Inauguration Ceremony. The official launch. Keynote speakers initiate the event protocol. All systems go.",
  },
  {
    icon: Rocket,
    time: "12:00 PM",
    title: "PROTOCOL: ACTION",
    description: "Round 1 Begins. Build.X: Elimination Round active (Hardware). Hack.X: The coding marathon begins (Non-elimination).",
  },
  {
    icon: FileCheck,
    time: "02:30 PM",
    title: "THE CRUCIBLE",
    description: "Hardware Finale & Software Progress. Build.X [Final Round]: Hardware teams face their ultimate assessment. Hack.X [Round 2]: Development continues.",
  },
  {
    icon: Trophy,
    time: "04:00 PM",
    title: "COLLECTOR’S VERDICT",
    description: "Build.X Valedictory. The hardware mission concludes. Winners of the Build.X are identified and the bounty is awarded.",
  },
];

const day2Events = [
  {
    icon: Coffee,
    time: "08:30 AM",
    title: "RE-ENTRY & FUEL",
    description: "Doors Open. Return to Sector 28. Refuel with breakfast and prepare your workstations for the final sprint.",
  },
  {
    icon: Rocket,
    time: "10:30 AM",
    title: "THE SNAP (HACK.X)",
    description: "Hack.X [Round 3]. Elimination Round. A critical checkpoint where only the Top 12 Teams survive to advance. Mentors review progress.",
  },
  {
    icon: Send,
    time: "11:00 AM",
    title: "STAR-LORD’S PITCH",
    description: "Think.X Begins. The stage is yours. Teams present their strategies to the jury. (Note: Think.X Registration desk opens prior at 10:00 AM)",
  },
  {
    icon: Clock,
    time: "01:30 PM",
    title: "ENDGAME PROTOCOLS",
    description: "1:30 PM Arena Unlock: The Grandmaster opens lobbies for BGMI & FreeFire Max. 2:00 PM Hack.X [Final Round]: Surviving teams begin final code polishing.",
  },
  {
    icon: Trophy,
    time: "04:00 PM",
    title: "GUARDIANS ASSEMBLED",
    description: "Valedictory Ceremony. The mission is complete. The Final Verdict is delivered and winners are announced for Hack.X, Think.X, and Side Quests.",
  },
];

// --- STYLES CONFIGURATION ---
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

// --- HELPER TO COLORIZE TEXT ---
const highlightText = (text) => {
  // Regex to match keywords. Note: ( ) capturing group keeps the delimiter in the result array
  const regex = /(Hack\.X|Build\.X|Think\.X|BGMI|FreeFire)/g;
  
  return text.split(regex).map((part, index) => {
    let colorClass = "";
    
    // Map keywords to specific style keys
    if (part === "Hack.X") colorClass = getStyles("hackx").activeText;
    else if (part === "Build.X") colorClass = getStyles("buildx").activeText;
    else if (part === "Think.X") colorClass = getStyles("thinkx").activeText;
    // Mapping games to 'BATTLE OF KNOWHERE' (Purple)
    else if (part === "BGMI" || part === "FreeFire") colorClass = getStyles("BATTLE OF KNOWHERE").activeText;
    
    if (colorClass) {
      return <span key={index} className={`font-bold ${colorClass}`}>{part}</span>;
    }
    return part;
  });
};

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);

  const currentEvents = activeDay === 1 ? day1Events : day2Events;
  const currentDate = activeDay === 1 ? "Friday, February 20, 2026" : "Saturday, February 21, 2026";

  return (
    <section 
      id="timeline" 
      className="relative py-10 lg:py-16 overflow-hidden mt-3"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10">
            {/* SEO OPTIMIZATION: Invisible Context Keywords */}
            <span className="sr-only">Hack The Spring Event Schedule and Timeline - </span>
            <span className="text-gradient-gold">THE PLAN</span>
          </h2>
           <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            DON’T WORRY, WE HAVE MORE THAN 12% OF A PLAN.
          </p>
        </div>

        {/* Day Toggle */}
        <div className="flex justify-center gap-8 mb-8 w-fit mx-auto px-8">
          <button
            onClick={() => setActiveDay(1)}
            className={`relative pb-3 text-lg md:text-xl font-barlow tracking-normal transition-all duration-300 ${
              activeDay === 1
                ? "text-primary border-b-2 border-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]" 
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            DAY 01
          </button>
          
          <button
            onClick={() => setActiveDay(2)}
            className={`relative pb-3 text-lg md:text-xl font-barlow tracking-normal transition-all duration-300 ${
              activeDay === 2
                ? "text-primary border-b-2 border-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]" 
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            DAY 02
          </button>
        </div>

        {/* Day Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 border border-border/50">
            {/* Day Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/30">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-gradient-gold gap-5 flex items-center gap-1">
                  <span>Day </span>
                  <span> {activeDay}</span>
                </h3>

                {/* SEO OPTIMIZATION: Added title attribute for date context */}
                <p 
                  className="font-body text-muted-foreground text-sm mt-1"
                  title={`Event Date: ${currentDate}`}
                >
                  {currentDate}
                </p>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid gap-4">
              {currentEvents.map((event, index) => (
                <div
                  key={`${activeDay}-${index}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card/80 transition-colors duration-200 border border-transparent hover:border-primary/30"
                >
                  {/* Time & Icon */}
                  <div className="flex flex-col items-center gap-2 min-w-[60px] md:min-w-[80px]">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                      <event.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    {/* SEO OPTIMIZATION: Added title attribute for time context */}
                    <span 
                      className="text-xs md:text-sm font-body text-primary font-semibold whitespace-nowrap"
                      title={`Event Start Time: ${event.time}`}
                    >
                      {event.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Applied highlightText to title for consistency if keywords appear there too, or just keep it simple */}
                    <h4 className="font-primary text-base md:text-lg font-semibold text-foreground mb-1">
                      {highlightText(event.title)}
                    </h4>
                    {/* UPDATED: Calling highlightText function here */}
                    <p className="font-body text-sm text-muted-foreground">
                      {highlightText(event.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}