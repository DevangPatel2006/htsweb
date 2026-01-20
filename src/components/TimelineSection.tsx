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
    description: "1:30 PM Arena Unlock: The Grandmaster opens lobbies for BGMI & FreeFire. 2:00 PM Hack.X [Final Round]: Surviving teams begin final code polishing.",
  },
  {
    icon: Trophy,
    time: "04:00 PM",
    title: "GUARDIANS ASSEMBLED",
    description: "Valedictory Ceremony. The mission is complete. The Final Verdict is delivered and winners are announced for Hack.X, Think.X, and Side Quests.",
  },
];

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const currentEvents = activeDay === 1 ? day1Events : day2Events;
  const currentDate = activeDay === 1 ? "Friday, February 20, 2026" : "Saturday, February 21, 2026";

  return (
    // Changes made:
    // 1. Added 'mt-3' (12px) for mobile top margin.
    // 2. Added 'scroll-mt-24' so anchor links land correctly below the header.
    <section 
      id="timeline" 
      className="relative py-10 lg:py-16 overflow-hidden mt-3"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10">
            <span className="sr-only">Hack The Spring Event Schedule and Timeline - </span>
            <span className="text-gradient-gold">THE PLAN</span>
          </h2>
           <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            DON’T WORRY, WE HAVE MORE THAN 12% OF A PLAN.
          </p>
        </div>

        {/* Day Toggle */}
        {/* Change made: Removed 'border-b border-white/10' to remove the line */}
        <div className="flex justify-center gap-8 mb-8 w-fit mx-auto px-8">
          <button
            onClick={() => setActiveDay(1)}
            className={`relative pb-3 text-lg md:text-xl font-barlow tracking-wider transition-all duration-300 ${
              activeDay === 1
                ? "text-primary border-b-2 border-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]" // Glowing line effect
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            DAY 01
          </button>
          
          <button
            onClick={() => setActiveDay(2)}
            className={`relative pb-3 text-lg md:text-xl font-barlow tracking-wider transition-all duration-300 ${
              activeDay === 2
                ? "text-primary border-b-2 border-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]" // Glowing line effect
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
                <h3 className="font-display text-2xl md:text-3xl text-gradient-gold">
                  Day {activeDay}
                </h3>
                <p className="font-body text-muted-foreground text-sm mt-1">
                  {currentDate}
                </p>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <span className="font-display text-lg md:text-xl text-primary">
                  {activeDay}
                </span>
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
                    <span className="text-xs md:text-sm font-body text-primary font-semibold whitespace-nowrap">
                      {event.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-primary text-base md:text-lg font-semibold text-foreground mb-1">
                      {event.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {event.description}
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