import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

// --- TEAM IMAGE IMPORTS ---

// // Organizers
// import devangImage from "@/assets/team/devang.png";
import vrajImage from "@/assets/team/og_vraj.png";

// Technical
import mohammedImage from "@/assets/team/web_mohammed.png"; 
import rikinImage from "@/assets/team/tech_rikin.png"; 
import princeImage from "@/assets/team/design_prince.png";
import harshImage from "@/assets/team/design_harsh.png";
// import dhrumilImage from "@/assets/team/dhrumil.png";
import mananImage from "@/assets/team/doc_manan.png";

// // Outreach
// import priyanshuImage from "@/assets/team/priyanshu.png";
// import kathanImage from "@/assets/team/kathan.png";
// import parthwImage from "@/assets/team/parth_w.png";
import suryaImage from "@/assets/team/camp_surya.png";
import hemanshiImage from "@/assets/team/camp_himanshi.png";
// import vandanImage from "@/assets/team/vandan.png";
import viralImage from "@/assets/team/photo_viral.png";
import bharviImage from "@/assets/team/sm_bharvii.png";

// // Administration
import divyImage from "@/assets/team/divy.png";
import parthpImage from "@/assets/team/event_parth.png";
import hiyaImage from "@/assets/team/event_hiya.png";
import rageshreeImage from "@/assets/team/evaluation_rageshree.png";
import vrutiImage from "@/assets/team/evaluation_vruti.png";

// // Venue
// import pranavImage from "@/assets/team/pranav.png";
// import karanImage from "@/assets/team/karan.png";
import yagnitImage from "@/assets/team/logistic_yagnit.png";
// import pakshilImage from "@/assets/team/pakshil.png";
// import dhavalImage from "@/assets/team/dhaval.png";
import trushaImage from "@/assets/team/decor_trusha.png";
import darshnaImage from "@/assets/team/decor_darshana.png";

// // Operations
import kunjImage from "@/assets/team/regis_kunj.png";
import preranaImage from "@/assets/team/regis_prerna.png";
// import parthpaneraImage from "@/assets/team/parth_panera.png";
// import karanmImage from "@/assets/team/karan_m.png";
import vrajvImage from "@/assets/team/hosp_vraj.png";
import vivekImage from "@/assets/team/hosp_vivek.png";
// import shreyanshImage from "@/assets/team/shreyansh.png";


const teamCategories = [
  { id: "organizers", label: "Organizers" },
  { id: "technical", label: "Technical" },
  { id: "outreach", label: "Outreach" },
  { id: "administration", label: "Administration" },
  { id: "venue", label: "Venue" },
  { id: "operations", label: "Operations" },
];

const teamMembers = {
  organizers: [
    {
      name: "Devang Patel",
      // image: devangImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Vraj Patel",
      // image: vrajImage,
      linkedin: "#", instagram: "#"
    },
  ],
  technical: [
    {
      name: "Mohammed Pithapur",
      role: "Web & Tech",
      image: mohammedImage, 
      linkedin: "https://www.linkedin.com/in/mohammed-pithapur", 
      instagram: "https://www.instagram.com/mohammed.index?igsh=ZTh2enVldHFpcHY5"
    },
    {
      name: "Rikin Pithadia",
      role: "Web & Tech",
      image: rikinImage,
      linkedin: "https://www.linkedin.com/in/rikin-pithadia-20b94729b/", 
      instagram: "https://www.instagram.com/rikin_2911?igsh=MWkwd3BoenVidGZqZQ=="
    },
    {
      name: "Prince Parmar",
      role: "Design",
      image: princeImage,
      linkedin: "https://www.linkedin.com/in/prince-parmar-b07616372", 
      instagram: "https://www.instagram.com/prince___9506?igsh=ZTd0d2Y3OWl2dGpo"
    },
    {
      name: "Harsh Chauhan",
      role: "Design",
      image: harshImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Dhrumil Shah",
      role: "Documentation",
      // image: dhrumilImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Manan Sanghani",
      role: "Documentation",
      image: mananImage,
      linkedin: "#", instagram: "#"
    },
  ],
  outreach: [
    {
      name: "Priyanshu Singh",
      role: "Campaigning",
      // image: priyanshuImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Kathan Mankad",
      role: "Campaigning",
      // image: kathanImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Parth Wathodkar",
      role: "Campaigning",
      // image: parthwImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Surya Chandak",
      role: "Campaigning",
      image: suryaImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Hemanshi Jalondhara",
      role: "Campaigning",
      image: hemanshiImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Vandan Jakhaniya",
      role: "Social Media",
      // image: vandanImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Viral Mahemdavadia",
      role: "Social Media",
      image: viralImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Bharvi Savaliya",
      role: "Social Media",
      image: bharviImage,
      linkedin: "#", instagram: "#"
    },
  ],
  administration: [
    {
      name: "Parth Prajapati",
      role: "Event Management",
      image: parthpImage,
      linkedin: "https://www.linkedin.com/in/prajapati-parth-gecgn-mec-07aa76340", 
      instagram: "https://www.instagram.com/parth_p_152?igsh=MWw1dzZ1czNlcnZxYw=="
    },
    {
      name: "Hiya Jagtap",
      role: "Event Management",
      image: hiyaImage,
      linkedin: "https://www.linkedin.com/in/hiyajagtap", 
      instagram: "https://www.instagram.com/hiya.jagtap"
    },
    {
      name: "Divy Gandhi",
      role: "Finance",
      image: divyImage,
      linkedin: "https://www.linkedin.com/in/divygandhi4978", 
      instagram: "https://www.instagram.com/divygandhi4978"
    },
    {
      name: "Rageshree Chauhan",
      role: "Evaluation (Jury)",
      image: rageshreeImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Vruti Rupapara",
      role: "Evaluation (Jury)",
      image: vrutiImage,
      linkedin: "#", instagram: "#"
    },
  ],
  venue: [
    {
      name: "Pranav Patel",
      role: "Logistics",
      // image: pranavImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Karan Rabadiya",
      role: "Logistics",
      // image: karanImage,
      linkedin: "https://www.linkedin.com/in/karan-rabadiya-81bbb6313", 
      instagram: "https://www.instagram.com/k_a_r_a_n_1098?igsh=YXY3dnNydmc2MHNt"
    },
    {
      name: "Yagnit Baraiya",
      role: "Logistics",
      image: yagnitImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Pakshil Patel",
      role: "Infrastructure",
      // image: pakshilImage,
      linkedin: "www.linkedin.com/in/pakshil-patel-423911289", 
      instagram: "https://www.instagram.com/pakshil_patel"
    },
    {
      name: "Dhaval Kanani",
      role: "Infrastructure",
      // image: dhavalImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Trusha Bhatt",
      role: "Decoration",
      image: trushaImage,
      linkedin: "https://www.linkedin.com/in/trusha-bhatt-260542375", 
      instagram: "https://www.instagram.com/venus__01109?igsh=NXRtZTVmaGIzdzZj"
    },
    {
      name: "Darshna Nainuji",
      role: "Decoration",
      image: darshnaImage,
      linkedin: "https://www.linkedin.com/in/darshna-nainuji-8aa586374", 
      instagram: "#"
    },
  ],
  operations: [
    {
      name: "Kunj Darji",
      role: "Registration",
      image: kunjImage,
      linkedin: "https://www.linkedin.com/in/kunj-darji-064b0a290", 
      instagram: "https://www.instagram.com/_kunjdarji_?igsh=Z3c3ZWV6eGFrMmFw"
    },
    {
      name: "Prerana Som",
      role: "Registration",
      image: preranaImage,
      linkedin: "https://www.linkedin.com/in/prerana-som-bm-gecg-dte", 
      instagram: "https://www.instagram.com/thephilosophicalpakodi?igsh=ODZkZ2FlbW5vOHoz"
    },
    {
      name: "Parth Panera",
      role: "Delegate Affairs",
      // image: parthpaneraImage,
      linkedin: "www.linkedin.com/in/parth-panera-79b7b4289", 
      instagram: "#"
    },
    {
      name: "Karan Meghnathi",
      role: "Delegate Affairs",
      // image: karanmImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Vraj Vaghasiya",
      role: "Food & Sanitation",
      image: vrajvImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Vivek Patel",
      role: "Food & Sanitation",
      image: vivekImage,
      linkedin: "#", instagram: "#"
    },
    {
      name: "Shreyansh Thakor",
      role: "Safety",
      // image: shreyanshImage,
      linkedin: "#", instagram: "#"
    },
  ],
};

// Helper component to handle icons consistently
const SocialLink = ({ href, icon: Icon, label }) => {
  const hasLink = href && href !== "#" && href.trim() !== "";
  
  if (hasLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        <Icon size={20} />
      </a>
    );
  }

  // Render disabled icon if no link
  return (
    <span className="text-muted-foreground/30 cursor-not-allowed" aria-hidden="true">
      <Icon size={20} />
    </span>
  );
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("organizers");

  const currentCategoryMembers = teamMembers[activeCategory] || [];

  // SORTING LOGIC: Members with images go first
  const sortedMembers = [...currentCategoryMembers].sort((a, b) => {
    // If 'a' has an image and 'b' does not, 'a' comes first (-1)
    if (a.image && !b.image) return -1;
    // If 'b' has an image and 'a' does not, 'b' comes first (1)
    if (!a.image && b.image) return 1;
    // Maintain original order otherwise
    return 0;
  });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Hide scrollbar via CSS for a cleaner mobile look */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
           <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="sr-only">Hack The Spring Organizing Team and Committee - </span>
             <span className="text-gradient-gold">THE FREAKIN' GUARDIANS</span>
           </h2>

           <p className="font-barlow uppercase text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            We aren't just standing<br className="block sm:hidden" /> in a circle.
          </p>
        </motion.div>

        {/* Categories Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-nowrap overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-3 mb-12 px-4 sm:px-0 w-full sm:w-auto no-scrollbar pb-2 sm:pb-0"
        >
          {teamCategories.map((category) => {
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2 px-6 py-2 rounded-full font-open text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? "bg-gold-gradient text-primary-foreground" 
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
          className={`flex flex-wrap justify-center max-w-7xl mx-auto ${
            activeCategory === "administration" ? "gap-x-4 gap-y-8" : "gap-x-8 gap-y-12"
          }`}
        >
          {sortedMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              // --- LAYOUT LOGIC ---
              // Admin = 20% width (1/5) so all 5 fit in one row.
              // Others = 25% width (1/4) so 4 fit in one row.
              className={`flex flex-col items-center w-full sm:w-[calc(50%-2rem)] ${
                activeCategory === "administration" ? "lg:w-[calc(20%-1rem)]" : "lg:w-[calc(25%-2rem)]"
              }`}
            >
              {/* Wrapper to preserve visual scale */}
              <div className="w-full max-w-[280px]">
                {/* IMAGE CONTAINER */}
                <div className="w-48 sm:w-full mb-4 relative aspect-[4/5] flex items-end justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-bottom block mx-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'; 
                      }}
                    />
                  ) : (
                    // Placeholder
                    <div className="w-full h-full bg-secondary/20 rounded-lg flex items-center justify-center border border-dashed border-secondary/40">
                      <span className="text-secondary/50 text-sm">No Image</span>
                    </div>
                  )}
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex justify-center gap-4 mt-2">
                  <SocialLink 
                    href={member.linkedin} 
                    icon={Linkedin} 
                    label={`Connect with ${member.name} on LinkedIn`} 
                  />
                  
                  <SocialLink 
                    href={member.instagram} 
                    icon={Instagram} 
                    label={`Follow ${member.name} on Instagram`} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}