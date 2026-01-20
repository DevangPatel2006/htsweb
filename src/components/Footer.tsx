import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import gov from "@/assets/govlogo.svg";
const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://instagram.com/hackthespring", 
    label: "Follow Hack The Spring on Instagram" // <--- UPDATE THIS
  },
  { 
    icon: Youtube, 
    href: "https://youtube.com/@hackthespring", 
    label: "Subscribe to Hack The Spring YouTube Channel" // <--- UPDATE THIS
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/company/hackthespring", 
    label: "Connect with Hack The Spring on LinkedIn" // <--- UPDATE THIS
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

          {/* --- CENTER COLUMN --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-self-center gap-6"
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
            
            <div className="flex mt-3 gap-4 text-[12px] text-[#B0E5FF] uppercase tracking-widest font-barlow">
              <a href="/terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
              <span className="text-[#B0E5FF] opacity-50">|</span>
              <a href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (Command Post) --- */}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.556436407986!2d72.6360403149681!3d23.25920398483363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bf8e1467401%3A0xc349c258d440076a!2sGovernment%20Engineering%20College%2C%20Sector%2028%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1676960000000!5m2!1sen!2sin"
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
        {/* -mx-6: Pulls the line 24px to the left and right to touch the edges 
          w-[calc(100%+48px)]: Ensures width covers the padding area
          mt-8 mb-3: Decreased vertical gap
          border-slate-800: Solid dark line
        */}
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