import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Twitter } from "lucide-react";

// Import gallery images for testimonial cards
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";

const testimonials = [
  {
    name: "Arjun Patel",
    handle: "@arjun_dev",
    content:
      "Just won Hack The Spring 2025! 🏆 Amazing experience with incredible mentors and fellow hackers. Can't wait for next year! #HackTheSpring #hackathon",
    image: event3,
    avatar: "AP",
  },
  {
    name: "Priya Sharma",
    handle: "@priya_codes",
    content:
      "Excited to dive into the world of innovation at @HackTheSpring! Ready to code, create, and bring groundbreaking ideas to life. Let the coding frenzy begin! 🚀",
    image: event1,
    avatar: "PS",
  },
  {
    name: "Hack The Spring",
    handle: "@HackTheSpring",
    content:
      "🎉 5,000+ Applications & Counting! We're overwhelmed by the response! Extended registration to March 15. Don't miss out! #HackTheSpring2026",
    image: event6,
    avatar: "HT",
  },
  {
    name: "Rahul Mehta",
    handle: "@rahul_tech",
    content:
      "The workshops at Hack The Spring were mind-blowing! Learned so much about AI/ML in just 48 hours. Best hackathon experience ever! 💡",
    image: event5,
    avatar: "RM",
  },
  {
    name: "Ananya Gupta",
    handle: "@ananya_builds",
    content:
      "Met my future co-founders at @HackTheSpring! The networking and collaboration here is unmatched. Already planning our startup! 🌟",
    image: event4,
    avatar: "AG",
  },
  {
    name: "DevCommunity",
    handle: "@DevCommunity",
    content:
      "Proud community partner of Hack The Spring 2026! Join us for an epic 48-hour coding marathon in Gujarat. 600+ hackers, infinite possibilities! 🔥",
    image: event2,
    avatar: "DC",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll (works on all screens, no pause)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.3;

      if (scrollPosition >= container.scrollWidth / 3) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Triple list for seamless loop
  const tripleTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-nebula-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-3xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">Galaxy Voices</span>
          </h2>
          <p className="font-heading text-lg text-muted-foreground">
            See what people are saying about us on Social Media
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays (DESKTOP ONLY) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden py-8 touch-none select-none"
          >
            {tripleTestimonials.map((testimonial, index) => {
              const rotation = (index % 5 - 2) * 3;
              const yOffset = (index % 3 - 1) * 20;

              return (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 glass-card rounded-2xl p-5 border border-border/50 pointer-events-none"
                  style={{
                    transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-nebula-gradient flex items-center justify-center text-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <Twitter className="w-5 h-5 text-cosmic-blue" />
                  </div>

                  {/* Content */}
                  <p className="font-body text-sm text-foreground/80 mb-4 line-clamp-3">
                    {testimonial.content}
                  </p>

                  {/* Image */}
                  <div className="rounded-xl overflow-hidden border border-border/50">
                    <img
                      src={testimonial.image}
                      alt="Event"
                      className="w-full h-36 object-cover"
                      draggable={false}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
