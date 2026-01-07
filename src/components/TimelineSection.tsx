import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const timelineEvents = [
  {
    icon: Clock,
    date: "March 10, 2026",
    time: "11:59 PM",
    title: "Registration Closes",
    description: "Last chance to register for Hack The Spring 2026!",
  },
  {
    icon: UserCheck,
    date: "March 21, 2026",
    time: "8:00 AM",
    title: "Check-in Begins",
    description: "Arrive at the venue and complete your registration.",
  },
  {
    icon: PartyPopper,
    date: "March 21, 2026",
    time: "9:30 AM",
    title: "Opening Ceremony",
    description: "Kickoff with keynote speakers and event introduction.",
  },
  {
    icon: Rocket,
    date: "March 21, 2026",
    time: "11:00 AM",
    title: "Hacking Begins",
    description: "Start building your innovative solutions!",
  },
  {
    icon: FileCheck,
    date: "March 21, 2026",
    time: "8:00 PM",
    title: "Checkpoint 1",
    description: "First progress check with mentors.",
  },
  {
    icon: Coffee,
    date: "March 22, 2026",
    time: "2:00 PM",
    title: "Workshop Sessions",
    description: "Learn from industry experts and tech sessions.",
  },
  {
    icon: Send,
    date: "March 22, 2026",
    time: "9:00 AM",
    title: "Final Submissions",
    description: "Submit your projects and prepare for demos.",
  },
  {
    icon: Trophy,
    date: "March 22, 2026",
    time: "3:00 PM",
    title: "Closing Ceremony",
    description: "Winners announcement and prize distribution!",
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">Event Timeline</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendar for these important milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:justify-start"
                          : ""
                      }`}
                    >
                      <span className="text-sm font-body text-primary font-semibold">
                        {event.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-glow-gold"
                  >
                    <event.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}