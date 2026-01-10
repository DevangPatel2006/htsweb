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
  Calendar,
} from "lucide-react";

const day1Events = [
  {
    icon: Clock,
    time: "11:59 PM",
    title: "REGISTRATION CLOSES",
    description: "Last chance to register for Hack The Spring 2026!",
  },
  {
    icon: UserCheck,
    time: "8:00 AM",
    title: "CHECK-IN & REGISTRATION",
    description: "Arrive at the venue and complete your registration.",
  },
  {
    icon: PartyPopper,
    time: "9:30 AM",
    title: "OPENING CEREMONY",
    description: "Kickoff with keynote speakers and event introduction.",
  },
  {
    icon: Rocket,
    time: "11:00 AM",
    title: "HACKING BEGINS",
    description: "Start building your innovative solutions!",
  },
  {
    icon: FileCheck,
    time: "8:00 PM",
    title: "CHECKPOINT 1",
    description: "First progress check with mentors.",
  },
];

const day2Events = [
  {
    icon: Coffee,
    time: "2:00 AM",
    title: "MIDNIGHT SNACKS",
    description: "Fuel up for the final stretch!",
  },
  {
    icon: FileCheck,
    time: "8:00 AM",
    title: "CHECKPOINT 2",
    description: "Second progress check with mentors.",
  },
  {
    icon: Send,
    time: "12:00 PM",
    title: "FINAL SUBMISSIONS",
    description: "Submit your projects and prepare for demos.",
  },
  {
    icon: Trophy,
    time: "3:00 PM",
    title: "CLOSING CEREMONY",
    description: "Winners announcement and prize distribution!",
  },
];

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const currentEvents = activeDay === 1 ? day1Events : day2Events;
  const currentDate = activeDay === 1 ? "March 21, 2026" : "March 22, 2026";

  return (
    <section id="timeline" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">event timeline</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar for these important milestones
          </p>
        </div>

        {/* Day Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveDay(1)}
            className={`relative px-6 py-3 md:px-8 md:py-4 rounded-xl font-primary text-base md:text-lg font-semibold transition-all duration-300 ${
              activeDay === 1
                ? "bg-primary text-primary-foreground glow-gold"
                : "glass-card text-foreground hover:border-primary/50"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Day 1
            </span>
            
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`relative px-6 py-3 md:px-8 md:py-4 rounded-xl font-primary text-base md:text-lg font-semibold transition-all duration-300 ${
              activeDay === 2
                ? "bg-primary text-primary-foreground glow-gold"
                : "glass-card text-foreground hover:border-primary/50"
            }`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Day 2
            </span>
            
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
