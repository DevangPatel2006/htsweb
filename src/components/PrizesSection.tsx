import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Medal, Award, Gift, ChevronRight } from "lucide-react";

const tracks = [
  {
    id: "hackx",
    name: "HACK.X",
    title: "HACK.X BOUNTY",
    prizes: [
      { position: "1st", reward: "₹15,000", extra: "+ Internship", icon: "🥇" },
      { position: "2nd", reward: "₹10,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹5,000", extra: null, icon: "🥉" },
    ],
    special: "Internship powered by Sponsor Partner",
  },
  {
    id: "buildx",
    name: "BUILD.X",
    title: "BUILD.X BOUNTY",
    prizes: [
      { position: "1st", reward: "₹15,000", extra: "+ Internship", icon: "🥇" },
      { position: "2nd", reward: "₹10,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹5,000", extra: null, icon: "🥉" },
    ],
    special: "Best Innovation Award",
  },
  {
    id: "thinkx",
    name: "THINK.X",
    title: "THINK.X BOUNTY",
    prizes: [
      { position: "1st", reward: "₹12,000", extra: "+ Mentorship", icon: "🥇" },
      { position: "2nd", reward: "₹8,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹4,000", extra: null, icon: "🥉" },
    ],
    special: "Access to Exclusive Workshops",
  },
  {
    id: "gaming",
    name: "GAMING",
    title: "GAMING BOUNTY",
    prizes: [
      { position: "1st", reward: "₹8,000", extra: "+ Gaming Gear", icon: "🥇" },
      { position: "2nd", reward: "₹5,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹3,000", extra: null, icon: "🥉" },
    ],
    special: "Premium Gaming Accessories",
  },
  {
    id: "chess",
    name: "CHESS / REELS",
    title: "CHESS / REELS BOUNTY",
    prizes: [
      { position: "1st", reward: "₹5,000", extra: "+ Goodies", icon: "🥇" },
      { position: "2nd", reward: "₹3,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹2,000", extra: null, icon: "🥉" },
    ],
    special: "Special Mentions & Shoutouts",
  },
];

export default function PrizesSection() {
  const [activeTrack, setActiveTrack] = useState("hackx");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentTrack = tracks.find((t) => t.id === activeTrack) || tracks[0];

  return (
    <section
      id="prizes"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden uppercase"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">REWARD PROTOCOLS</span>
          </h2>
          <p className="font-barlow text-lg text-muted-foreground max-w-2xl mx-auto">
            Incredible rewards await the brightest innovators
          </p>
        </motion.div>

        {/* Main Content - Tab Menu + Prize Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl border border-primary/20 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Vertical Tab Menu - Left Side */}
              <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-primary/20 bg-card/50">
                <div className="p-4 md:p-6">
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                    {tracks.map((track) => (
                      <button
                        key={track.id}
                        onClick={() => setActiveTrack(track.id)}
                        className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-primary text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap md:w-full text-left ${
                          activeTrack === track.id
                            ? "bg-gradient-to-r from-primary/30 to-accent/20 text-primary border border-primary/40"
                            : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {activeTrack === track.id && (
                          <ChevronRight className="w-4 h-4 hidden md:block" />
                        )}
                        <span>{track.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prize Card - Right Side */}
              <div className="md:w-2/3 p-6 md:p-8">
                <motion.div
                  key={currentTrack.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Track Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">
                    {currentTrack.title}
                  </h3>

                  {/* Prize List */}
                  <div className="space-y-4 mb-6">
                    {currentTrack.prizes.map((prize, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-2xl">{prize.icon}</span>
                        <div className="flex-1">
                          <span className="font-primary text-lg font-semibold text-foreground">
                            {prize.position}:
                          </span>
                          <span className="ml-2 font-heading text-lg text-primary font-bold">
                            {prize.reward}
                          </span>
                          {prize.extra && (
                            <span className="ml-2 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                              {prize.extra}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Special Note */}
                  {currentTrack.special && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                      <Gift className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="font-body text-sm text-muted-foreground">
                        <span className="text-accent font-semibold">Special:</span>{" "}
                        {currentTrack.special}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Strip - All Participants */}
    {/* Participation Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-primary text-xl font-semibold text-center mb-6 text-foreground">
            EVERY PARTICIPANT RECEIVES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              "Participation Certificate",
              "Free Meals & Snacks",
              "Tech Swag",
              "Networking Access",
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
