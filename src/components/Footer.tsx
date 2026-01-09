import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/hackthespring", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/hackthespring", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/hackthespring", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/hackthespring", label: "GitHub" },
];

export default function Footer() {
  return (
<footer className="relative bg-[#06121F] border-t border-border overflow-hidden py-10">


      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@hackthespring.in"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-body text-sm">hello@hackthespring.in</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-body text-sm">+91 98765 43210</span>
              </a>
            </div>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Find Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6753373063604!2d72.62866031496754!3d23.018533084948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a7a8a5e71b%3A0x1f9b8c7a3f0c5d7e!2sGujarat%2C%20India!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border/30 text-center"
        >
          <p className="font-body text-xs text-muted-foreground">
            © Hack The Spring 2026. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}