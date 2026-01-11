import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Coins,
  GraduationCap,
  HeartPulse,
  Rocket,
  Cpu,
  Leaf,
  Sparkles,
} from "lucide-react";

const tracks = [
  {
    icon: Brain,
    title: "AI / ML",
    description:
      "Build intelligent solutions using machine learning and artificial intelligence.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Coins,
    title: "FINTECH",
    description:
      "Revolutionize financial services with innovative technology solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "EDTECH",
    description:
      "Transform education through technology and innovative learning solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeartPulse,
  title: "HEALTHTECH",
    description:
      "Create solutions that improve healthcare accessibility and outcomes.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Leaf,
    title: "SUSTAINABILITY",
    description:
      "Develop eco-friendly solutions for a sustainable future.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cpu,
    title: "IOT",
    description:
      "Connect the physical and digital worlds through smart devices.",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "WEB3 / BLOCKCHAIN",
    description:
      "Build decentralized applications and explore the future of the web.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "OPEN INNOVATION",
    description:
      "Bring your wildest ideas to life - no boundaries, pure creativity.",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function TracksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tracks"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
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
            <span className="text-gradient-gold">Innovation Tracks</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path and transform your ideas into reality
          </p>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${track.color} blur-xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <track.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-primary text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {track.title}
                  </h3>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </section>
  );
}