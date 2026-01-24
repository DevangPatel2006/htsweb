import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

// --- TEAM IMAGE IMPORTS ---

// // Organizers
import sir from "@/assets/team/fc_nitinsir.png";
import devangImage from "@/assets/team/og_devang.png";
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
  { id: "administration", label: "Administration" },
  { id: "operations", label: "Operations" },
  { id: "technical", label: "Technical" },
  { id: "outreach", label: "Outreach" },
  { id: "venue", label: "Venue" },
];

const teamMembers = {
  organizers: [
    {
      name: "Nitin  Raval",
      image: sir,
      linkedin: "#", instagram: "https://www.instagram.com/nitinraval2111/"
    },
    {
      name: "Devang Patel",
      image: devangImage,
      linkedin: "https://www.linkedin.com/in/devangpatel06/", instagram: "https://www.instagram.com/k_devang_?igsh=M211eTgydGo1eGN3"
    },
    {
      name: "Vraj Patel",
      image: vrajImage,
      linkedin: "https://www.linkedin.com/in/vrajramanpatel", 
      instagram: "https://www.instagram.com/vrajinmatrix"
    },
  ],
  technical: [
    {
      name: "Rikin Pithadia",
      role: "Web & Tech",
      image: rikinImage,
      linkedin: "https://www.linkedin.com/in/rikin-pithadia-20b94729b/", 
      instagram: "https://www.instagram.com/rikin_2911?igsh=MWkwd3BoenVidGZqZQ=="
    },
    {
      name: "Mohammed Pithapur",
      role: "Web & Tech",
      image: mohammedImage, 
      linkedin: "https://www.linkedin.com/in/mohammed-pithapur", 
      instagram: "https://www.instagram.com/mohammed.index?igsh=ZTh2enVldHFpcHY5"
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
      linkedin: "https://www.linkedin.com/in/harshchauhan081", 
      instagram: "https://www.instagram.com/_.chauhan._27"
    },
    // {
    //   name: "Dhrumil Shah",
    //   role: "Documentation",
    //   // image: dhrumilImage,
    //   linkedin: "#", instagram: "#"
    // },
    {
      name: "Manan Sanghani",
      role: "Documentation",
      image: mananImage,
      linkedin: "https://www.linkedin.com/in/manan-sanghani-7662942a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/manan_______05?igsh=MTAwZmRvMzNkMjR4Yg=="
    },
  ],
  outreach: [
    // {
    //   name: "Priyanshu Singh",
    //   role: "Campaigning",
    //   // image: priyanshuImage,
    //   linkedin: "#", instagram: "#"
    // },
    // {
    //   name: "Kathan Mankad",
    //   role: "Campaigning",
    //   // image: kathanImage,
    //   linkedin: "#", instagram: "#"
    // },
    // {
    //   name: "Parth Wathodkar",
    //   role: "Campaigning",
    //   // image: parthwImage,
    //   linkedin: "#", instagram: "#"
    // },
    {
      name: "Surya Chandak",
      role: "Campaigning",
      image: suryaImage,
      linkedin: "https://www.linkedin.com/in/surya-chandak-b6880b362?utm_source=share_via&utm_content=profile&utm_medium=member_android", 
      instagram: "https://www.instagram.com/suryachandak_?igsh=dGd4MGtqNjM2M2p4"
    },
    {
      name: "Hemanshi Jalondhara",
      role: "Campaigning",
      image: hemanshiImage,
      linkedin: "https://www.linkedin.com/in/hemanshi-jalondhara-669269284", 
      instagram: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=wz9j3ap"
    },
    // {
    //   name: "Vandan Jakhaniya",
    //   role: "Social Media",
    //   // image: vandanImage,
    //   linkedin: "#", instagram: "#"
    // },
    {
      name: "Viral Mahemdavadia",
      role: "Social Media",
      image: viralImage,
      linkedin: "https://www.linkedin.com/in/viral-gecgn-mech-aa100a375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/viral_031?igsh=NzJpdDA5YjhsdGU3"
    },
    {
      name: "Bharvi Savaliya",
      role: "Social Media",
      image: bharviImage,
      linkedin: "https://www.linkedin.com/in/bharvii-savaliya-607048354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/bharvii._?igsh=MWplM2N2c2JiZmtxcw=="
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
      linkedin: "https://www.linkedin.com/in/rageshreechauhan", 
      instagram: "https://www.instagram.com/shreeeiously?igsh=N3oxM3NtMGtmcXFv"
    },
    {
      name: "Vruti Rupapara",
      role: "Evaluation (Jury)",
      image: vrutiImage,
      linkedin: "https://www.linkedin.com/in/vruti-rupapara?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/vrrr_26"
    },
  ],
  venue: [
    // {
    //   name: "Pranav Patel",
    //   role: "Logistics",
    //   // image: pranavImage,
    //   linkedin: "#", instagram: "#"
    // },
    // {
    //   name: "Karan Rabadiya",
    //   role: "Logistics",
    //   // image: karanImage,
    //   linkedin: "https://www.linkedin.com/in/karan-rabadiya-81bbb6313", 
    //   instagram: "https://www.instagram.com/k_a_r_a_n_1098?igsh=YXY3dnNydmc2MHNt"
    // },
    {
      name: "Yagnit Baraiya",
      role: "Logistics",
      image: yagnitImage,
      linkedin: "https://www.linkedin.com/in/yagnit-baraiya-73421534a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/yagnitbaraiya_9924?igsh=MTBkdDd5MjJ0bWRrcA=="
    },
    // {
    //   name: "Pakshil Patel",
    //   role: "Infrastructure",
    //   // image: pakshilImage,
    //   linkedin: "www.linkedin.com/in/pakshil-patel-423911289", 
    //   instagram: "https://www.instagram.com/pakshil_patel"
    // },
    // {
    //   name: "Dhaval Kanani",
    //   role: "Infrastructure",
    //   // image: dhavalImage,
    //   linkedin: "#", instagram: "#"
    // },
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
      linkedin: "https://www.linkedin.com/in/prerana-som-bm-gecg-dte?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/thephilosophicalpakodi?igsh=ODZkZ2FlbW5vOHoz"
    },
    // {
    //   name: "Parth Panera",
    //   role: "Delegate Affairs",
    //   // image: parthpaneraImage,
    //   linkedin: "www.linkedin.com/in/parth-panera-79b7b4289", 
    //   instagram: "#"
    // },
    // {
    //   name: "Karan Meghnathi",
    //   role: "Delegate Affairs",
    //   // image: karanmImage,
    //   linkedin: "#", instagram: "#"
    // },
    {
      name: "Vraj Vaghasiya",
      role: "Food & Sanitation",
      image: vrajvImage,
      linkedin: "https://www.linkedin.com/in/vraj-vaghasiya-0b84aa383", 
      instagram: "https://www.instagram.com/vraj_vaghasiya_203?igsh=MWpqbTc2ZGkyZDdidw=="
    },
    {
      name: "Vivek Patel",
      role: "Food & Sanitation",
      image: vivekImage,
      linkedin: "https://www.linkedin.com/in/vivek-patel-220b55290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
      instagram: "https://www.instagram.com/patel_vivekk_523?igsh=MTVlZzBkaHkxYWZsYQ=="
    },
    // {
    //   name: "Shreyansh Thakor",
    //   role: "Safety",
    //   // image: shreyanshImage,
    //   linkedin: "#", instagram: "#"
    // },
  ],
};

// Helper component to handle icons consistently
const SocialLink = ({ href, icon: Icon, label }) => {
  // 1. Determine the actual link to use
  let finalHref = href;

  // 2. If the link is missing, empty, or "#", set it to the platform's home page
  if (!finalHref || finalHref === "#" || finalHref.trim() === "") {
    if (Icon === Linkedin) {
      finalHref = "https://www.linkedin.com";
    } else if (Icon === Instagram) {
      finalHref = "https://www.instagram.com";
    } else if (Icon === Twitter) {
      finalHref = "https://twitter.com";
    }
  }

  // 3. Always render the clickable <a> tag (no disabled state)
  return (
    <a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-primary transition-colors duration-300"
    >
      <Icon size={20} />
    </a>
  );
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("organizers");

  const currentCategoryMembers = teamMembers[activeCategory] || [];

  // SORTING LOGIC: Members with images go first
  const sortedMembers = [...currentCategoryMembers].sort((a, b) => {
    if (a.image && !b.image) return -1;
    if (!a.image && b.image) return 1;
    return 0;
  });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 lg:pt-[100px] lg:pb-32 overflow-hidden"
    >
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
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-1 lg:mt-0">
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
        <div className="relative">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex justify-start sm:justify-center max-w-7xl mx-auto px-4 sm:px-0 ${
              // CONTAINER LAYOUT LOGIC
              activeCategory === "organizers" 
                ? "flex-wrap justify-center gap-y-12 sm:gap-x-8" // Organizers: Wrap & Stack
                : "flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible no-scrollbar snap-x snap-mandatory sm:snap-none gap-x-6 sm:gap-x-8 gap-y-12" // Others
            } ${
               activeCategory === "administration" ? "sm:gap-x-4" : "" 
            }`}
          >
            {sortedMembers.map((member, index) => (
              <motion.div
                key={member.name + index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                // ITEM WIDTH LOGIC - UPDATED HERE
                className={`flex-shrink-0 snap-center flex flex-col items-center sm:w-[calc(50%-2rem)] ${
                   activeCategory === "organizers" ? "w-full" : "w-[45%]"
                } ${
                  // FIX: Changed from lg:w-[calc(20%-1rem)] to lg:w-[18%] to ensure all 5 fit in one line with gaps
                  activeCategory === "administration" ? "lg:w-[18%]" : "lg:w-[calc(25%-2rem)]"
                }`}
              >
                {/* Wrapper to preserve visual scale and center content */}
                <div className="w-full flex flex-col items-center">
                  {/* IMAGE CONTAINER */}
                  <div className="w-full max-w-[200px] sm:max-w-[280px] mb-4 relative aspect-[4/5] flex items-end justify-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain object-bottom block mx-auto"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'; 
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/20 rounded-lg flex items-center justify-center border border-dashed border-secondary/40">
                        <span className="text-secondary/50 text-xs sm:text-sm">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* SOCIAL LINKS - Centered */}
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
      </div>
    </section>
  );
}