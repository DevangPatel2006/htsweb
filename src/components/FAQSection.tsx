import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in Hack The Spring 2026?",
    answer:
      "Hack The Spring 2026 is open to all students, professionals, and enthusiasts! Whether you're a beginner or an experienced developer, from any academic discipline, you're welcome to join. Teams can have 1-4 members.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No! Participation in Hack The Spring 2026 is completely free. We believe innovation shouldn't have barriers. All participants get free meals, snacks, and beverages throughout the event.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "No worries! We have a team formation session at the beginning of the event and a Discord community where you can connect with other participants looking for teammates. You can also participate solo!",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, charger, any hardware you might need for your project, valid ID proof, and lots of enthusiasm! We'll provide the rest - workspace, internet, food, and all the caffeine you need.",
  },
  {
    question: "Is this my first hackathon - can I still participate?",
    answer:
      "Absolutely! Hack The Spring is beginner-friendly. We have workshops, mentorship sessions, and experienced volunteers to guide first-timers. It's the perfect place to start your hackathon journey!",
  },
  {
    question: "Are participants from other colleges/cities allowed?",
    answer:
      "Yes! Hack The Spring welcomes participants from across India. We encourage diversity in teams and love seeing collaborations between students from different institutions.",
  },
  {
    question: "What kind of projects can we build?",
    answer:
      "You can build anything within our 8 tracks: AI/ML, FinTech, EdTech, HealthTech, Sustainability, IoT, Web3/Blockchain, or Open Innovation. The key is to build something innovative that solves a real problem.",
  },
  {
    question: "Will accommodation be provided?",
    answer:
      "The hackathon is a 48-hour event at the venue. We provide a comfortable hacking space with rest areas. For participants traveling from other cities, we can suggest nearby affordable accommodations.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="text-gradient-gold ">FAQ'S</span>
          </h2>
           <p className="font-barlow text-lg lg:text-[20px] mt-[10px] tracking-[0.2em] leading-tight sm:leading-normal text-[#C1EAFF] italic">
            WE CAUGHT THE MOST COMMON QUESTIONS FOR YOU
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl border-border/50 px-6 data-[state=open]:border-primary/50 transition-all duration-300"
                >
                  <AccordionTrigger className="font-body text-left text-foreground hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="font-primary text-xl font-semibold text-foreground mb-6">
            SEND A DISTRESS SIGNAL
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href="mailto:hello@hackthespring.in">
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a
                href="https://discord.gg/hackthespring"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}