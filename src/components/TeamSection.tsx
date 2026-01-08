import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Linkedin, Twitter, Github, Instagram, Users, Megaphone, Palette, Code, Calendar, Handshake } from "lucide-react";

const teamCategories = [
  { id: "organizers", label: "Organizers ", icon: Users },
  { id: "webandtech", label: "Web & Tech", icon: Calendar },
  { id: "sponsors", label: "Sponshership", icon: Code },
  { id: "sm&design", label: "SM & Design", icon: Palette },
  { id: "Logistics", label: "Logistics", icon: Megaphone },
  { id: "Decoration", label: "Decoration", icon: Handshake },
  { id: "OutReach", label: "Outreach", icon: Handshake },
];

const teamMembers: Record<string, Array<{
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
}>> = {
  organizers: [
    { name: "Arjun Patel", role: "Lead Organizer", linkedin: "#", twitter: "#" },
    { name: "Priya Sharma", role: "Co-Lead", linkedin: "#", instagram: "#" },
    { name: "Rahul Mehta", role: "Event Director", linkedin: "#", github: "#" },
    { name: "Ananya Gupta", role: "Operations Head", linkedin: "#" },
  ],
  management: [
    { name: "Vikram Singh", role: "Venue Coordinator", linkedin: "#" },
    { name: "Neha Reddy", role: "Logistics Lead", linkedin: "#", instagram: "#" },
    { name: "Amit Kumar", role: "Registration Head", linkedin: "#" },
  ],
  technical: [
    { name: "Karan Joshi", role: "Tech Lead", linkedin: "#", github: "#" },
    { name: "Sneha Nair", role: "Platform Developer", linkedin: "#", github: "#" },
    { name: "Rohan Verma", role: "Backend Lead", github: "#" },
    { name: "Divya Iyer", role: "DevOps", linkedin: "#", github: "#" },
  ],
  design: [
    { name: "Aisha Khan", role: "Design Lead", linkedin: "#", instagram: "#" },
    { name: "Aryan Desai", role: "UI/UX Designer", linkedin: "#" },
    { name: "Maya Pillai", role: "Graphics Designer", instagram: "#" },
  ],
  social: [
    { name: "Riya Kapoor", role: "Social Media Lead", instagram: "#", twitter: "#" },
    { name: "Ishaan Malik", role: "Content Creator", linkedin: "#", instagram: "#" },
    { name: "Tanvi Shah", role: "Community Manager", twitter: "#" },
  ],
  sponsorship: [
    { name: "Varun Agarwal", role: "Sponsorship Lead", linkedin: "#" },
    { name: "Pooja Menon", role: "Partner Relations", linkedin: "#" },
    { name: "Siddharth Rao", role: "Outreach Coordinator", linkedin: "#", twitter: "#" },
  ],
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("organizers");

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-nebula-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nebula-pink/5 rounded-full blur-3xl" />
      </div>

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
            const Icon = category.icon;
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
                <Icon size={16} />
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {teamMembers[activeCategory]?.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-nebula-gradient p-0.5 shadow-glow-nebula group-hover:shadow-glow-gold transition-all duration-300">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-2xl text-primary">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin size={14} />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter size={14} />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github size={14} />
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Instagram size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}