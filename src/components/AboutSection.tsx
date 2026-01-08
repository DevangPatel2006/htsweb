import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Clock, Lightbulb, Trophy } from "lucide-react";

// Import gallery images
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";

const images = [event1, event2, event3, event4, event5, event6];

const stats = [
  { icon: Users, value: "600+", label: "Participants" },
  { icon: Clock, value: "48", label: "Hours of Innovation" },
  { icon: Lightbulb, value: "8+", label: "Innovation Tracks" },
  { icon: Trophy, value: "₹50K+", label: "Prize Pool" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll images one at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nebula-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nebula-pink/5 rounded-full blur-3xl" />
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
            <span className="text-gradient-gold">Step Into the Galaxy</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-3xl mx-auto">
            of Innovation
          </p>
        </motion.div>

        {/* Main Content - Text Left, Single Large Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
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

          {/* Right - Single Large Auto-scrolling Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Event ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? "bg-primary w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats - replacing the features */}
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}