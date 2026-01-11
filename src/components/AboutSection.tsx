import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import gallery images
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";
import event7 from "@/assets/gallery/event-7.jpg";
import event8 from "@/assets/gallery/event-8.jpg";
import event9 from "@/assets/gallery/event-9.jpg";
import event10 from "@/assets/gallery/event-10.jpg";
import event11 from "@/assets/gallery/event-11.jpg";

// Import combined SVG frames
import CardsFrames from "@/assets/Frame 29.svg";

const images = [
  event1, event2, event3, event4, event5, event6, 
  event7, event8, event9, event10, event11,
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      // UPDATED:
      // 1. changed 'h-screen' to 'min-h-screen lg:h-screen' (allows scrolling on mobile)
      // 2. changed 'overflow-hidden' to 'overflow-x-hidden' (prevents mobile horizontal scroll)
      // 3. Converted specific padding to 'lg:' classes and added sensible mobile padding (px-6 py-12)
      className="relative w-full min-h-screen lg:h-screen overflow-x-hidden flex flex-col px-6 py-12 lg:pt-[99px] lg:pb-[50px] lg:pl-[99.5px] lg:pr-[89.5px]"
    >
      <div className="w-full h-full relative z-10">
        {/* Grid Definition: Stacks on mobile (grid-cols-1), 50/50 on desktop (lg:grid-cols-2) */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] h-auto lg:h-full items-start"
        >
          
          {/* --- LEFT COLUMN (Title + Text) --- */}
          <div className="flex flex-col h-full">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              // Responsive margin bottom: 40px on mobile, 110px on desktop
              className="mb-10 lg:mb-[110px] shrink-0"
            >
              <h2 
                className="font-display font-bold text-3xl lg:text-[40px] text-left leading-[1.2] tracking-[0.03em]"
                style={{
                  // Kept gradient exactly as requested
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                THE GALACTIC<br/>CONVERGENCE
              </h2>
              <p 
                className="font-barlow italic text-lg lg:text-[20px] mt-[10px] tracking-[0.3em]"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                WHERE ENGINEERING MEETS INFINITY
              </p>
            </motion.div>

            {/* Body Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grow"
            >
              <div className="font-open leading-relaxed text-justify text-base lg:text-[20px] text-white/85 space-y-5">
                <p>
                  Orchestrated by Government Engineering College, Gandhinagar, this{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>2-Day</span> Tech Fest unites the brightest
                  minds from across the cosmos.
                </p>

                <p>
                  We are launching a multi-dimensional expedition covering{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>software, hardware, and creative strategy</span>{" "}
                  during standard solar hours. At Hack The Spring, every participant is a{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Guardian of Innovation</span>. Whether you
                  are debugging complex systems in{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Hack.X</span>, building
                  prototypes in{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Build.X</span>, or pitching strategies in{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Think.X</span>, you are here to{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>push boundaries</span>.
                </p>

                <p>
                  From{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>restoring</span> the{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Cosmic Chord</span> to capturing the
                  universe in{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Cosmic Lens</span>, this is where your skills
                  become the tools to save the system. Prepare to{" "}
                  <span style={{ color: '#FFD700', fontWeight: '600' }}>Solve for X</span> and leave your mark on the galaxy.
                </p>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN (Visuals) --- */}
          <div className="flex flex-col">
            
            {/* 1. Image Container */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="relative rounded-xl overflow-hidden border shadow-2xl w-full h-[220px] lg:h-[280px] shrink-0 mb-[10px]"
               style={{
                 borderColor: 'rgba(255, 255, 255, 0.1)'
               }}
            >
              {images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`Event ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300`}
                    style={{
                      width: currentImageIndex === index ? '32px' : '8px',
                      backgroundColor: currentImageIndex === index ? '#FFD700' : 'rgba(255, 255, 255, 0.5)'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* 2. SVG Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full"
            >
              <img 
                src={CardsFrames} 
                alt="Mission Modules, Solar Cycles, and Guardians Stats"
                className="w-full h-auto object-contain object-top"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}