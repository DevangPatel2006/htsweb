import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Clock, Lightbulb, Trophy, Code, Rocket } from "lucide-react";

const stats = [
  { icon: Users, value: "600+", label: "Participants" },
  { icon: Clock, value: "48", label: "Hours of Innovation" },
  { icon: Lightbulb, value: "8+", label: "Innovation Tracks" },
  { icon: Trophy, value: "₹50K+", label: "Prize Pool" },
];

const features = [
  {
    icon: Code,
    title: "Build & Create",
    description:
      "Transform your innovative ideas into working prototypes with cutting-edge technologies.",
  },
  {
    icon: Users,
    title: "Connect & Collaborate",
    description:
      "Network with fellow developers, mentors, and industry professionals from across India.",
  },
  {
    icon: Rocket,
    title: "Learn & Grow",
    description:
      "Attend workshops, get mentorship, and accelerate your technical journey.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <span className="text-gradient-gold">Step Into the Garden</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-3xl mx-auto">
            of Innovation
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              Welcome to <span className="text-primary font-semibold">Hack The Spring 2026</span> — Gujarat's 
              premier 48-hour offline hackathon where innovation blooms and ideas flourish! 🌸
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              Join 600+ brilliant minds from across India as we gather to create, innovate, and transform 
              the future. Whether you're a seasoned developer or just starting your coding journey, 
              Hack The Spring provides the perfect environment for growth and collaboration.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              From groundbreaking problem statements to expert mentorship and incredible rewards, 
              this is where your code becomes the seed of tomorrow's innovation. 🌱✨
            </p>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-emerald-gradient flex items-center justify-center shadow-glow-emerald group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}