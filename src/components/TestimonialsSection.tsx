import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";

// Import gallery images for testimonial cards
import event1 from "@/assets/voices/meg.jfif";
import event2 from "@/assets/voices/ld.jpg";
import event3 from "@/assets/voices/dev.jfif";
import event4 from "@/assets/voices/divy.jfif";
import event5 from "@/assets/voices/raj.jfif";
import event6 from "@/assets/voices/bhvy.jfif";
import event7 from "@/assets/voices/abh.jfif";

const testimonials = [
  {
    name: "L.D. College of Engineering",
    handle: "@ldcollegeofengineering",
    content:
      "Our students secured 2nd Runner-Up at Hack The Spring’25, held 28 Feb - 1 Mar 2025 at GEC Gandhinagar, Gujarat.",
    image: event2, // Assigned existing image
    avatar: "LD",
  },
  {
    name: "Devansh Vora",
    handle: "@devanshvora03",
    content:
      "Proud to see my juniors carry forward the legacy with passion. Watching HTS 2025 come alive was truly fulfilling.",
    image: event3,
    avatar: "DV",
  },
  {
    name: "Divy Pattani",
    handle: "@divysoni03",
    content:
      "I participated in my college’s HackTheSpring hackathon. It was a great journey, with valuable feedback from judges and professors.",
    image: event4,
    avatar: "DP",
  },
  {
    name: "Dhruvi Raj",
    handle: "@dhruvi raj",
    content:
      "Proud to organize Hack The Spring ’25 at GEC Gandhinagar, witnessing 450+ participants’ passion and innovation.",
    image: event5,
    avatar: "RP",
  },
  {
    name: "Bhagy Patel",
    handle: "@bhagypatel1810",
    content:
      "Great experience at HackTheSpring. Thanks to the organizers and mentors who made the event possible.",
    image: event6,
    avatar: "BP",
  },
  {
    name: "Meghani Ansh",
    handle: "@meghani_ansh",
    content:
      "Secured 1st Runner-Up at Hack The Spring 2025, a two-day hackathon held on 28 Feb–1 Mar at GEC Gandhinagar.",
    image: event1,
    avatar: "MA",
  },
  {
    name: "Chauhan Abhay",
    handle: "@abhay7066",
    content:
      "Organizing HTS’25 was a journey of teamwork, problem-solving, and learning that shaped us and inspires the future.",
    image: event7,
    avatar: "MA",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);

  // Auto scroll (works on all screens, no pause)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
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
          <h2 className="font-display text-4xl md:text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-gold">HOOKED ON A FEELING</span>
          </h2>
          <p className="font-barlow text-lg text-muted-foreground">
            They’re high on believing... that these were the best 2 days.
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
                    {/* Changed Twitter to Linkedin */}
                    <Linkedin className="w-5 h-5 text-cosmic-blue" />
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