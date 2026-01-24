import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    question: "What is HackTheSpring ’26?",
    answer:
      "HackTheSpring ’26 is a two-day inter-college technical festival focused on innovation, problem-solving, idea presentation, and interactive competitions.",
  },
  {
    question: "When and where will the event be held?",
    answer:
      "The event will be held on 20th and 21st February 2026 at Government Engineering College, Gandhinagar (GECG).",
  },
  {
    question: "Who can participate in the event?",
    answer:
      "Students enrolled in a recognized educational institution can participate. Eligibility may vary for specific events.",
  },
  {
    question: "Can students from different colleges form a team?",
    answer:
      "Yes, cross-college and cross-institute teams are allowed, unless restricted by a specific event.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Yes, registration fee details will be announced on the official registration platform.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes, participation certificates will be provided to all registered participants. Winner certificates will be provided to selected teams.",
  },
  {
    question: "Will Accommodation be provided?",
    answer:
      "No Accommodation will be provided by the college. But, you can contact the team if you need.",
  },
  {
    question: "Will food be provided?",
    answer:
      "Yes, Food/Refreshments will be provided, depending on the competition you have registered for.",
  },
  {
    question: "Do participants need to bring their own devices?",
    answer:
      "Yes, participants are required to bring their own laptops, hardware components, chargers, and necessary tools as per their event requirements.",
  },
  {
    question: "How do I contact the admins?",
    answer:
      "Push the button! (The one on Discord). Open a Ticket in the support channel, and we will teleport to you.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Logic to switch link based on device
  const [emailHref, setEmailHref] = useState("mailto:hackthespring@gecg28.ac.in");

  useEffect(() => {
    // Check if user is NOT on mobile
    const isDesktop = !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isDesktop) {
      setEmailHref("https://mail.google.com/mail/?view=cm&fs=1&to=hackthespring@gecg28.ac.in");
    }
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-24 lg:pt-[100px] lg:pb-32 overflow-hidden"
    >
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
          <h2 className="font-display text-[27px] lg:text-[48px] font-bold mb-2 mt-10 lg:mt-0 [word-spacing:-0.25em] sm:[word-spacing:normal]">
            <span className="sr-only">
              Hack The Spring Frequently Asked Questions -{" "}
            </span>
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
          <h3 className="font-primary text-xl font-semibold mb-6 text-[#C1EAFF]">
            SEND A DISTRESS SIGNAL
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <a 
              href={emailHref}
              target={emailHref.startsWith('mailto') ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              <Button variant="hero" className="gap-2">
                <Mail className="w-5 h-5" />
                Send an Email
              </Button>
            </a>

            <a
              href="https://discord.gg/hackthespring"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}