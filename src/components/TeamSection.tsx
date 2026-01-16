import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, Instagram, Users, Megaphone, Palette, Calendar, Handshake } from "lucide-react";

// --- IMPORTANT: IMPORT YOUR IMAGES HERE ---
// You must import images from your assets folder like this. 
import arjunImage from "@/assets/organiser1.png"; 
import deImage from "@/assets/organ2.png"; 

// Placeholders for other images (Uncomment and change paths as needed)
// import arjunImg from "../assets/organiser1.png";

const teamCategories = [
  { id: "organizers", label: "Organizers ", icon: Users },
  { id: "Management", label: "Management ", icon: Users },
  { id: "webandtech", label: "Technical", icon: Calendar },
  { id: "sm&design", label: "Media", icon: Palette },
  { id: "Logistics", label: "Logistics", icon: Megaphone },
  { id: "Decoration", label: "Decoration", icon: Handshake },
  { id: "Outreach", label: "Outreach", icon: Handshake },
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
  technical: [
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

  const currentCategoryMembers = teamMembers[activeCategory] || [];

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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">The Guardians</span>
          </h2>
          <p className="font-heading text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the cosmic crew making it all happen
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {teamCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gold-gradient text-primary-foreground shadow-glow-gold"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
                }`}
              >
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
              {/* UPDATED: w-48 on mobile makes image smaller/sharper. sm:w-full restores desktop size. */}
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