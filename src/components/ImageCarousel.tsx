import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Import gallery images
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";

const images = [event1, event2, event3, event4, event5, event6];

// SEO: Specific keywords for each image to rank in Google Images
const altTags = [
  "Hack The Spring Hackathon Coding Event",
  "Robotics Competition Arena",
  "Student Innovation Showcase",
  "Prize Distribution Ceremony",
  "Team Brainstorming Session",
  "Gaming Tournament Setup"
];

interface ImageCarouselProps {
  direction?: "left" | "right";
  speed?: number;
}

export default function ImageCarousel({ direction = "left", speed = 30 }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = direction === "left" ? 0 : scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (!scrollContainer) return;

      if (direction === "left") {
        scrollPosition += 0.5;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
      } else {
        scrollPosition -= 0.5;
        if (scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth / 2;
        }
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);

  // Double the images for seamless loop
  const doubledImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {doubledImages.map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 md:w-80 h-48 md:h-56 rounded-xl overflow-hidden border border-border/50 shadow-lg"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img}
              // SEO UPDATE: Dynamic Alt Text mapping
              alt={altTags[index % altTags.length] || "Hack The Spring Event Highlight"}
              className="w-full h-full object-cover"
              loading="lazy" // SEO UPDATE: Improves page speed
              width="320"    // SEO UPDATE: Helps prevent layout shift
              height="224"   
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}