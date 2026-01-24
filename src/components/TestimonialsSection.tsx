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
    image: event2,
    avatar: "LD",
    linkedinUrl: "https://www.linkedin.com/posts/l%2Ed-college-of-engineering---ahmedabad_ldce-proudmoment-technicalexcellence-activity-7304771375574007808-kqED?utm_source=share&utm_medium=member_android&rcm=ACoAAEIDyTIBBYNLy8oJqgpAT-MyMMX1AB61zmo",
},

{
    name: "Devansh Vora",
    handle: "@devanshvora03",
    content:
      "Proud to see my juniors carry forward the legacy with passion. Watching HTS 2025 come alive was truly fulfilling.",
    image: event3,
    avatar: "DV",
    linkedinUrl: "https://www.linkedin.com/posts/devanshvora03_hackthespring-hts2025-legacycontinues-activity-7302241927452594176-HrdV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40",
 },
 {
 name: "Dhruvi Raj",
    handle: "@dhruvi raj",
    content:
      "Proud to organize Hack The Spring ’25 at GEC Gandhinagar, witnessing 450+ participants’ passion and innovation.",
    image: event5,
    avatar: "DR",
    linkedinUrl: "https://www.linkedin.com/posts/dhruvi-raj-34841924b_hackthespring-organizer-hts2025-activity-7305326483772690432-X1cx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40",
},
{
    name: "Bhagy Patel",
    handle: "@bhagypatel1810",
    content:
      "Great experience at HackTheSpring. Thanks to the organizers and mentors who made the event possible.",
    image: event6,
    avatar: "BP",
    linkedinUrl: "https://www.linkedin.com/posts/bhagypatel1810_hackthespring-expandingexpress-hackathonexperience-activity-7304370987578322944-K1__?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40",
 },
 {
    name: "Meghani Ansh",
    handle: "@meghani ansh",
    content:
      "Secured 1st Runner-Up at Hack The Spring 2025, a two-day hackathon held on 28 Feb–1 Mar at GEC Gandhinagar.",
    image: event1,
    avatar: "MA",
    linkedinUrl: "https://www.linkedin.com/posts/meghani-ansh-340785298_hackthespring-hackathon-teamwork-activity-7302893127827099648-aBCD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40", 
},
 {
    name: "Chauhan Abhay",
    handle: "@abhay7066",
    content:
      "Organizing HTS’25 was a journey of teamwork, problem-solving, and learning that shaped us and inspires the future.",
    image: event7,
    avatar: "CA",
    linkedinUrl: "https://www.linkedin.com/posts/abhay7066_hts25-step-into-the-technoverse-i-activity-7306583024064724992-0W3I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40",
 },
 {
    name: "Murtaza Godhrawala",
    handle: "Murtaza-Godhrawala",
    content:
      "🏆 A Little Late to Share — But Grateful Beyond Words! 🏆Proud to share that our team Trinetra secured the 2nd Runner-Up position at the Technoverse Hackathon, part of HackTheSpring (HTS’25) at Government Engineering College, Gandhinagar! 🎉",
    image: event7,
    avatar: "CA",
    linkedinUrl: "https://www.linkedin.com/posts/murtaza-godhrawala-6b8572349_hackthespring25-technoverse-ai-activity-7393883111119327232-Do-A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDf59kBvoU31IlGYO4U_pzcbVONHJRiT40",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  // Auto scroll (Optimized for Mobile Touch)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    
    // We use a float tracker because scrollLeft is an integer and loses precision
    let currentScroll = container.scrollLeft; 

    const scroll = () => {
      // 1. Always sync with real DOM position first
      if (Math.abs(currentScroll - container.scrollLeft) > 2) {
         currentScroll = container.scrollLeft;
      }

      // 2. If not paused by touch/hover, increment
      if (!isPaused.current) {
        currentScroll += 0.5; // Adjust speed here

        // Loop logic
        if (currentScroll >= container.scrollWidth / 3) {
          currentScroll = 0;
          container.scrollLeft = 0; // Snap back instantly
        } else {
          container.scrollLeft = currentScroll;
        }
      } 
      
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

  // SEO: Generate JSON-LD Schema for Reviews
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "name": "Hack The Spring 2026 Reviews",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": testimonials.length
    }
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* SEO: Inject Review Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="text-gradient-gold">HOOKED ON A FEELING</span>
          </h2>
          <p className="font-barlow uppercase text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
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
          {/* Gradient overlays (Hidden on mobile to allow full width swipe) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            // Pause logic triggers
            onMouseEnter={() => (isPaused.current = true)}
            onMouseLeave={() => (isPaused.current = false)}
            onTouchStart={() => (isPaused.current = true)}
            onTouchEnd={() => (isPaused.current = false)}
            className="flex gap-6 overflow-x-auto [scrollbar-width:none] py-8 select-none touch-pan-x"
          >
            {tripleTestimonials.map((testimonial, index) => {
              const rotation = (index % 5 - 2) * 3;
              const yOffset = (index % 3 - 1) * 20;

              return (
                <motion.a
                  key={index}
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-80 glass-card rounded-2xl p-5 border border-border/50 cursor-pointer block hover:border-cosmic-blue/50 transition-colors"
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
                      alt={`${testimonial.name} participating at Hack The Spring Event`}
                      className="w-full h-36 object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}