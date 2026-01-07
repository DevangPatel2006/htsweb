import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/hackthespring", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/hackthespring", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/hackthespring", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/hackthespring", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border overflow-hidden py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Find Us - Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-3 flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-primary" />
              Find Us
            </h4>
            <div className="rounded-lg overflow-hidden border border-border/50 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6753373063604!2d72.62866031496754!3d23.018533084948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a7a8a5e71b%3A0x1f9b8c7a3f0c5d7e!2sGujarat%2C%20India!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Connect With Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-3 flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4 text-primary" />
              Connect With Us
            </h4>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Become a Sponsor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">
              Partner With Us
            </h4>
            <Button variant="hero" size="default" asChild>
              <a href="mailto:sponsors@hackthespring.in">
                <ExternalLink className="w-4 h-4" />
                Become a Sponsor
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-border/30 text-center"
        >
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Hack The Spring. Made with 💜 in Gujarat, India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}