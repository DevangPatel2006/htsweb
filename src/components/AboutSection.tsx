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
      className="relative w-full h-screen overflow-hidden"
      style={{
        paddingTop: '99px',
        paddingBottom: '50px',
        paddingLeft: '99.5px',
        paddingRight: '89.5px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="w-full h-full relative z-10">
        {/* Grid Definition: Strictly 50% 50% */}
        <div 
          className="grid grid-cols-2" 
          style={{ 
            gap: '60px', 
            height: '100%',
            alignItems: 'start' // Ensures Image and Title start at the exact same top line
          }}
        >
          
          {/* --- LEFT COLUMN (Title + Text) --- */}
          <div className="flex flex-col h-full">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '110px', flexShrink: 0 }} 
            >
              <h2 
                className="font-display font-bold"
                style={{
                  fontSize: '40px',
                  lineHeight: '1.2',
                  letterSpacing: '0.03em',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'left',
                  margin: 0
                }}
              >
                THE GALACTIC<br/>CONVERGENCE
              </h2>
              <p 
                className="font-barlow italic"
                style={{
                  fontSize: '20px',
                  letterSpacing: '0.3em',
                  marginTop: '10px',
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
              style={{ flexGrow: 1 }}
            >
              <p 
                className="font-open leading-relaxed text-justify"
                style={{ 
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                Orchestrated by Government Engineering College, Gandhinagar, this{" "}
                <span style={{ color: '#FFD700', fontWeight: '600' }}>2-Day</span> Tech Fest unites the brightest
                minds from across the cosmos.
              </p>

              <p 
                className="font-open leading-relaxed text-justify"
                style={{ 
                  fontSize: '20px',
                  lineHeight: '1.5',
                  marginBottom: '20px',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
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

              <p 
                className="font-open leading-relaxed text-justify"
                style={{ 
                  fontSize: '20px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 0.85)'
                }}
              >
                From{" "}
                <span style={{ color: '#FFD700', fontWeight: '600' }}>restoring</span> the{" "}
                <span style={{ color: '#FFD700', fontWeight: '600' }}>Cosmic Chord</span> to capturing the
                universe in{" "}
                <span style={{ color: '#FFD700', fontWeight: '600' }}>Cosmic Lens</span>, this is where your skills
                become the tools to save the system. Prepare to{" "}
                <span style={{ color: '#FFD700', fontWeight: '600' }}>Solve for X</span> and leave your mark on the galaxy.
              </p>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN (Visuals) --- */}
          <div className="flex flex-col">
            
            {/* 1. Image Container */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="relative rounded-xl overflow-hidden border shadow-2xl w-full"
               style={{
                 height: '280px',
                 flexShrink: 0,
                 marginBottom: '10px', // EXACTLY 10px Gap as requested
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
                className="w-full h-auto object-contain object-top" // Aligns top to the gap
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}