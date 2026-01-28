import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import gov from "@/assets/govlogo.svg";

const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/hackthespring?igsh=dmM5NWQzajNxd3Jp", 
    label: "Follow Hack The Spring on Instagram" 
  },
  { 
    icon: Youtube, 
    href: "https://youtube.com/@hackthespring", 
    label: "Subscribe to Hack The Spring YouTube Channel" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/company/hackthespring-26/", 
    label: "Connect with Hack The Spring on LinkedIn" 
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1628] border-t border-border overflow-hidden text-white w-full">
      <div 
        className="max-w-[1400px] mx-auto w-full flex flex-col px-6"
        style={{ 
          paddingTop: "45px", 
          paddingBottom: "0px" 
        }}
      >
        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
          
          {/* --- LEFT COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 lg:justify-self-start lg:w-[300px]"
          >
            <img 
              src={gov}
              alt="Government Engineering College Logo" 
              className="h-28 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300" 
            />
            <div className="font-open text-[11px] leading-relaxed text-[#E6AB27] font-bold tracking-widest italic text-center">
              <address className="font-open text-[11px] leading-relaxed text-[#E6AB27] font-bold tracking-widest italic text-center not-italic">
                <p>Government Engineering College</p>
                <p>Sector 28, Gandhinagar</p>
              </address>
            </div>
          </motion.div>

          {/* --- CENTER COLUMN (Updated Mobile Alignment) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-self-center w-full gap-6"
          >
            <div className="flex flex-col items-center space-y-4 mt-0 lg:mt-5">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 flex items-center justify-center text-[#B0E5FF] hover:text-white transition-colors mt-3"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* --- LINKS SECTION --- */}
            <div className="flex items-center justify-center w-full max-w-[500px] mt-3 text-[12px] text-[#B0E5FF] uppercase tracking-widest font-barlow">
              
              {/* Left Link: Auto width on mobile, Flex-1/Right-align on Desktop */}
              <div className="lg:flex-1 lg:text-right">
                <a 
                  /* UPDATED: Verify this filename matches your public folder exactly */
                  href="/HTS26_Terms_&_Conditions_compressed.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TERMS & CONDITIONS
                </a>
              </div>

              {/* Separator */}
              <span className="text-[#B0E5FF] opacity-50 px-3">|</span>

              {/* Right Link: Auto width on mobile, Flex-1/Left-align on Desktop */}
              <div className="lg:flex-1 lg:text-left">
                <a 
                  /* UPDATED: Verify this filename matches your public folder exactly */
                  href="/HTS26_Privacy_Policy_compressed.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  PRIVACY POLICY
                </a>
              </div>

            </div>
          </motion.div>

          {/* --- RIGHT COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end lg:justify-self-end gap-3 lg:w-[300px]"
          >
            <h4 className="font-barlow text-[20px] text-[#B0E5FF] uppercase tracking-[0.1em] font-medium whitespace-nowrap self-center lg:self-start">
              COMMAND POST
            </h4>
            
            <div className="w-full rounded-xl overflow-hidden border border-gray-700/50 shadow-lg relative bg-gray-800">
              <iframe
                src="https://www.google.com/maps?q=Government+Engineering+College,+Sector+28,+Gandhinagar&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, height: "120px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                title="GEC Gandhinagar Campus Map"
              />
            </div>
          </motion.div>
        </div>

        {/* --- DIVIDER LINE --- */}
        <div className="w-[calc(100%+48px)] -mx-6 border-t border-slate-800 mt-8 mb-3"></div>

        {/* --- Copyright Row --- */}
        <div className="w-full text-center pb-5">
          <p className="font-open text-[10px] text-[#B0E5FF] tracking-wide">
            © 2026 Hack The Spring. Engineered on Terra. We have 12% of a plan.
          </p>
        </div>
      </div>
    </footer>
  );
}