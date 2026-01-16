import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gift, ChevronRight } from "lucide-react";

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
    id: "BATTLE OF KNOWHERE",
    name: "BATTLE OF KNOWHERE",
    title: "BATTLE OF KNOWHERE",
    prizes: [
      { position: "1st", reward: "₹8,000", extra: "+ Gaming Gear", icon: "🥇" },
      { position: "2nd", reward: "₹5,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹3,000", extra: null, icon: "🥉" },
    ],
    special: "Premium Gaming Accessories",
  },
  {
    id: "SOVEREIGN'S GAMBIT",
    name: "SOVEREIGN'S GAMBIT",
    title: "SOVEREIGN'S GAMBIT BOUNTY",
    prizes: [
      { position: "1st", reward: "₹5,000", extra: "+ Goodies", icon: "🥇" },
      { position: "2nd", reward: "₹3,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹2,000", extra: null, icon: "🥉" },
    ],
    special: "Special Mentions & Shoutouts",
  },
  {
    id: "COSMIC LENS",
    name: "COSMIC LENS",
    title: "COSMIC LENS BOUNTY",
    prizes: [
      { position: "1st", reward: "₹5,000", extra: "+ Goodies", icon: "🥇" },
      { position: "2nd", reward: "₹3,000", extra: null, icon: "🥈" },
      { position: "3rd", reward: "₹2,000", extra: null, icon: "🥉" },
    ],
    special: "Special Mentions & Shoutouts",
  },
];

// Helper to get specific styles for each track ID
const getStyles = (id) => {
  const styles = {
    hackx: {
      borderColor: "border-[#00f0ff]/60", // Slightly stronger opacity for outer border
      activeText: "text-[#00f0ff]",
      bgSoft: "bg-[#00f0ff]/10",
      hover: "hover:text-[#00f0ff] hover:bg-[#00f0ff]/10",
    },
    buildx: {
      borderColor: "border-[#FF8C00]/60",
      activeText: "text-[#FF8C00]",
      bgSoft: "bg-[#FF8C00]/10",
      hover: "hover:text-[#FF8C00] hover:bg-[#FF8C00]/10",
    },
    thinkx: {
      borderColor: "border-[#FF003C]/60",
      activeText: "text-[#FF003C]",
      bgSoft: "bg-[#FF003C]/10",
      hover: "hover:text-[#FF003C] hover:bg-[#FF003C]/10",
    },
    "BATTLE OF KNOWHERE": {
      borderColor: "border-[#A020F0]/60",
      activeText: "text-[#A020F0]",
      bgSoft: "bg-[#A020F0]/10",
      hover: "hover:text-[#A020F0] hover:bg-[#A020F0]/10",
    },
    "SOVEREIGN'S GAMBIT": {
      borderColor: "border-[#FFD700]/60",
      activeText: "text-[#FFD700]",
      bgSoft: "bg-[#FFD700]/10",
      hover: "hover:text-[#FFD700] hover:bg-[#FFD700]/10",
    },
    "COSMIC LENS": {
      borderColor: "border-[#39FF14]/60",
      activeText: "text-[#39FF14]",
      bgSoft: "bg-[#39FF14]/10",
      hover: "hover:text-[#39FF14] hover:bg-[#39FF14]/10",
    },
  };

  return styles[id] || styles.hackx;
};

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
            <span className="text-gradient-gold">GALACTIC BOUNTIES</span>
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
          className="max-w-5xl mx-auto"
        >
          {/* MAIN CONTAINER (OUTER BORDER)
              The border color here changes based on the active track 
          */}
          <div
            className={`glass-card rounded-2xl border overflow-hidden transition-colors duration-300 ${activeStyle.borderColor}`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Vertical Tab Menu - Left Side */}
              <div className="md:w-[40%] border-b md:border-b-0 md:border-r border-primary/20 bg-card/50">
                <div className="p-4 md:p-6">
                  <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                    {tracks.map((track) => {
                      const style = getStyles(track.id);
                      const isActive = activeTrack === track.id;
                      return (
                        <button
                          key={track.id}
                          onClick={() => setActiveTrack(track.id)}
                          className={`relative flex items-center justify-start gap-3 px-4 py-3 rounded-lg font-primary text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap md:w-full text-left border ${
                            isActive
                              ? `${style.activeText} ${style.bgSoft} ${style.borderColor}`
                              : `text-muted-foreground hover:bg-primary/5 border-transparent ${style.hover}`
                          }`}
                        >
                          {isActive && (
                            <ChevronRight className="w-4 h-4 flex-shrink-0" />
                          )}
                          <span className="truncate">{track.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Prize Card - Right Side */}
              <div className="md:w-[60%] p-6 md:p-8">
                <motion.div
                  key={currentTrack.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Track Title - Default Gold/Primary Color */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-primary">
                    {currentTrack.title}
                  </h3>

                  {/* Prize List */}
                  <div className="space-y-4 mb-6">
                    {currentTrack.prizes.map((prize, index) => (
                      <div
                        key={index}
                        // INNER BORDERS: Default Primary/Gold style (not dynamic)
                        className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="text-2xl">{prize.icon}</span>
                        <div className="flex-1">
                          <span className="font-primary text-lg font-semibold text-foreground">
                            {prize.position}:
                          </span>
                          {/* Reward Amount - Default Gold/Primary Color */}
                          <span className="ml-2 font-heading text-lg font-bold text-primary">
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
                        <span className="text-accent font-semibold">
                          Special:
                        </span>{" "}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20"
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