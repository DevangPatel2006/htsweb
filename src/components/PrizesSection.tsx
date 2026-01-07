import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Gift, Star } from "lucide-react";

const prizes = [
  {
    position: "1st",
    title: "First Place",
    amount: "₹25,000",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
    shadow: "shadow-[0_0_50px_rgba(251,191,36,0.3)]",
    benefits: [
      "Winner's Trophy & Certificate",
      "Internship Opportunities",
      "Tech Goodies & Swag",
      "Mentorship Sessions",
    ],
  },
  {
    position: "2nd",
    title: "Second Place",
    amount: "₹15,000",
    icon: Medal,
    color: "from-gray-300 to-gray-400",
    shadow: "shadow-[0_0_40px_rgba(156,163,175,0.3)]",
    benefits: [
      "Runner-up Trophy & Certificate",
      "Tech Goodies & Swag",
      "Learning Resources",
    ],
  },
  {
    position: "3rd",
    title: "Third Place",
    amount: "₹10,000",
    icon: Award,
    color: "from-amber-600 to-amber-700",
    shadow: "shadow-[0_0_40px_rgba(217,119,6,0.3)]",
    benefits: [
      "Achievement Trophy & Certificate",
      "Tech Swag Kit",
      "Course Vouchers",
    ],
  },
];

const specialPrizes = [
  { title: "Best UI/UX", prize: "₹5,000", icon: Star },
  { title: "Best Innovation", prize: "₹5,000", icon: Star },
  { title: "People's Choice", prize: "₹5,000", icon: Star },
  { title: "Best First-Timer", prize: "₹3,000", icon: Gift },
];

export default function PrizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="prizes"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-secondary/30"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-gradient-gold">Prizes & Rewards</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-2xl mx-auto">
            Incredible rewards await the brightest innovators
          </p>
        </motion.div>

        {/* Main Prizes - 2nd, 1st, 3rd layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {/* 2nd Place - Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:mt-8"
          >
            <PrizeCard prize={prizes[1]} />
          </motion.div>

          {/* 1st Place - Center (larger) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:-mt-4"
          >
            <PrizeCard prize={prizes[0]} featured />
          </motion.div>

          {/* 3rd Place - Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:mt-8"
          >
            <PrizeCard prize={prizes[2]} />
          </motion.div>
        </div>

        {/* Special Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            Special Category Prizes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialPrizes.map((prize, index) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-5 text-center hover:border-primary/50 transition-all duration-300"
              >
                <prize.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                  {prize.title}
                </h4>
                <p className="font-body text-lg font-bold text-primary">
                  {prize.prize}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Participation Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass-card rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-6 text-foreground">
            Every Participant Receives
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

function PrizeCard({
  prize,
  featured = false,
}: {
  prize: (typeof prizes)[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${prize.shadow} ${
        featured ? "border-2 border-primary" : "hover:border-primary/50"
      }`}
    >
      {/* Header */}
      <div
        className={`bg-gradient-to-r ${prize.color} p-6 text-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <prize.icon className="w-12 h-12 mx-auto mb-3 text-white drop-shadow-lg" />
          <span className="font-display text-4xl font-bold text-white drop-shadow-lg">
            {prize.position}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground text-center mb-2">
          {prize.title}
        </h3>
        <p className="font-display text-3xl font-bold text-primary text-center mb-6">
          {prize.amount}
        </p>

        <ul className="space-y-3">
          {prize.benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center gap-3 font-body text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}