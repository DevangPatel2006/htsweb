import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera } from "lucide-react";

// Import gallery images
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";

const pastEventImages = [
  { src: event1, caption: "Hacking in Progress" },
  { src: event2, caption: "Opening Ceremony" },
  { src: event3, caption: "Winners Celebration" },
  { src: event4, caption: "Project Demos" },
  { src: event5, caption: "Workshop Session" },
  { src: event6, caption: "Team Photo" },
];

export default function PastEventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollPosition += 0.4;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Triple for seamless loop
  const tripleImages = [...pastEventImages, ...pastEventImages, ...pastEventImages];

  return (
    <section
      id="past-events"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-secondary/20"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-nebula-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient-gold">Past Events</span>
            </h2>
          </div>
          <p className="font-heading text-lg text-muted-foreground">
            Relive the moments from our previous hackathons
          </p>
        </motion.div>

        {/* Auto-scrolling Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {tripleImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 md:w-96 group relative"
                whileHover={{ scale: 1.03, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl group-hover:shadow-glow-nebula transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-56 md:h-64 object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "4", label: "Editions" },
            { value: "2000+", label: "Participants" },
            { value: "500+", label: "Projects Built" },
            { value: "₹2L+", label: "Prizes Awarded" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="text-center p-4"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}