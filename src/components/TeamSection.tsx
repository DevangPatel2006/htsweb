import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";

// --- IMPORTANT: IMPORT YOUR IMAGES HERE ---
import arjunImage from "@/assets/organiser1.png"; 
import deImage from "@/assets/organ2.png"; 

// Removed the 'icon' property from these objects
const teamCategories = [
  { id: "organizers", label: "Organizers" },
  { id: "Management", label: "Management" },
  { id: "webandtech", label: "Technical" },
  { id: "sm&design", label: "Media" },
  { id: "Logistics", label: "Logistics" },
  { id: "Decoration", label: "Decoration" },
  { id: "Outreach", label: "Outreach" },
];

const teamMembers = {
  organizers: [
    {
      name: "ARJUN PATEL",
      image: arjunImage, 
      linkedin: "#", twitter: "#"
    },
    {
      name: "ARJUN PATEL",
      image: deImage, 
      linkedin: "#", twitter: "#"
    },
  ],
  management: [
    {
      name: "Vikram Singh",
      image: "/images/team/management/vikram-card.png",
      linkedin: "#"
    },
    {
      name: "Neha Reddy",
      image: "/images/team/management/neha-card.png",
      linkedin: "#", instagram: "#"
    },
    {
      name: "Amit Kumar",
      image: "/images/team/management/amit-card.png",
      linkedin: "#"
    },
  ],
  webandtech: [
    {
      name: "Karan Joshi",
      image: "/images/team/technical/karan-card.png",
      linkedin: "#", github: "#"
    },
    {
      name: "Sneha Nair",
      image: "/images/team/technical/sneha-card.png",
      linkedin: "#", github: "#"
    },
    {
      name: "Rohan Verma",
      image: "/images/team/technical/rohan-card.png",
      github: "#"
    },
    {
      name: "Divya Iyer",
      image: "/images/team/technical/divya-card.png",
      linkedin: "#", github: "#"
    },
  ],
  "sm&design": [
    {
      name: "Aisha Khan",
      image: "/images/team/design/aisha-card.png",
      linkedin: "#", instagram: "#"
    },
    {
      name: "Aryan Desai",
      image: "/images/team/design/aryan-card.png",
      linkedin: "#"
    },
    {
      name: "Maya Pillai",
      image: "/images/team/design/maya-card.png",
      instagram: "#"
    },
     {
      name: "Riya Kapoor",
      image: "/images/team/social/riya-card.png",
      instagram: "#", twitter: "#"
    },
    {
      name: "Ishaan Malik",
      image: "/images/team/social/ishaan-card.png",
      linkedin: "#", instagram: "#"
    },
    {
      name: "Tanvi Shah",
      image: "/images/team/social/tanvi-card.png",
      twitter: "#"
    },
  ],
  Logistics: [],
  Decoration: [],
  Outreach: [
    {
      name: "Varun Agarwal",
      image: "/images/team/sponsorship/varun-card.png",
      linkedin: "#"
    },
    {
      name: "Pooja Menon",
      image: "/images/team/sponsorship/pooja-card.png",
      linkedin: "#"
    },
    {
      name: "Siddharth Rao",
      image: "/images/team/sponsorship/siddharth-card.png",
      linkedin: "#", twitter: "#"
    },
  ],
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("organizers");

  // Type assertion to handle the dynamic key access if using TypeScript, 
  // or just standard JS access.
  const currentCategoryMembers = teamMembers[activeCategory as keyof typeof teamMembers] || [];

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
           <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 [word-spacing:-0.25em] sm:[word-spacing:normal]">
             <span className="text-gradient-gold">THE FREAKIN' GUARDIANS</span>
           </h2>

           <p className="font-barlow uppercase text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            We aren't just standing<br className="block sm:hidden" /> in a circle.
          </p>
        </motion.div>

        {/* Categories Toggles (Icons Removed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {teamCategories.map((category) => {
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-open text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? "bg-gold-gradient text-primary-foreground shadow-glow-gold" 
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
                }`}
              >
                {/* Icon removed here */}
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Team Members Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-6xl mx-auto"
        >
          {currentCategoryMembers.length > 0 ? (
            currentCategoryMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center w-full sm:w-64 lg:w-72"
            >
              {/* IMAGE CONTAINER */}
              <div className="w-48 sm:w-full mb-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-contain block mx-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'; 
                  }}
                />
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex justify-center gap-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-12 w-full">
              Coming Soon...
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}