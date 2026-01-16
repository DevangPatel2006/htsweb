import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, Instagram, Users, Megaphone, Palette, Calendar, Handshake } from "lucide-react";

// --- IMPORTANT: IMPORT YOUR IMAGES HERE ---
// You must import images from your assets folder like this. 
// Make sure the file names match exactly what is in your folder.
// Example:
import arjunImage from "@/assets/organiser1.png"; 

// For this code to work, I am using placeholders. 
// You need to uncomment the import lines below and change the path to your real files.

// import arjunImg from "../assets/organiser1.png";
// import priyaImg from "../assets/priya.png";
// ... and so on for all members

const teamCategories = [
  { id: "organizers", label: "Organizers ", icon: Users },
  { id: "Management", label: "Management ", icon: Users },
  { id: "webandtech", label: "Technical", icon: Calendar },
  { id: "sm&design", label: "Media", icon: Palette },
  { id: "Logistics", label: "Logistics", icon: Megaphone },
  { id: "Decoration", label: "Decoration", icon: Handshake },
  { id: "Outreach", label: "Outreach", icon: Handshake },
];

const teamMembers: Record<string, Array<{
  name: string;
  image: string; // This will now take the imported variable, or a valid public path
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
}>> = {
  organizers: [
    {
      name: "ARJUN PATEL",
      // OPTION 1 (Recommended): Use the imported variable name (uncomment import above)
      image: arjunImage, 
      
      // OPTION 2: If you put images in the 'public' folder, use the absolute path like this:
     // image: "/images/organiser1.png", 
      linkedin: "#", twitter: "#"
    },
    {
      name: "PRIYA SHARMA",
      image: "/images/team/organizers/priya-card.png", 
      linkedin: "#", instagram: "#"
    },
    {
      name: "RAHUL MEHTA",
      image: "/images/team/organizers/rahul-card.png",
      linkedin: "#", github: "#"
    },
    {
      name: "ANANYA GUPTA",
      image: "/images/team/organizers/ananya-card.png",
      linkedin: "#"
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

        {/* Team Members Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto"
        >
          {currentCategoryMembers.length > 0 ? (
            currentCategoryMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              {/* IMAGE CONTAINER - No Styles, just the image */}
              <div className="w-full mb-4 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-contain block mx-auto"
                  onError={(e) => {
                    // This fallback only shows if your image path is still wrong
                    e.currentTarget.style.display = 'none'; // Hide broken image completely so no box appears
                  }}
                />
              </div>

              {/* SOCIAL LINKS - No Boxes/Backgrounds */}
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
            <div className="col-span-full text-center text-muted-foreground py-12">
              Coming Soon...
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}