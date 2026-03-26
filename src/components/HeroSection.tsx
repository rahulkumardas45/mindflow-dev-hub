import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Search } from "lucide-react";
import { profile } from "@/data/portfolio";

const HeroSection = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const tagline = profile.taglines[taglineIndex];
    if (isTyping) {
      if (displayText.length < tagline.length) {
        const timeout = setTimeout(() => setDisplayText(tagline.slice(0, displayText.length + 1)), 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
        return () => clearTimeout(timeout);
      } else {
        setTaglineIndex((prev) => (prev + 1) % profile.taglines.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, taglineIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(hsl(var(--muted-foreground) / 0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Available for new projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-medium glow-text mb-6"
        >
          {profile.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="h-8 mb-10"
        >
          <span className="text-lg text-muted-foreground font-mono">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* AI Input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div
            className="glass glow-box rounded-2xl p-1 cursor-pointer"
            onClick={() => document.getElementById("chat-toggle")?.click()}
          >
            <div className="flex items-center gap-3 px-5 py-4 pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <span className="flex-1 text-muted-foreground text-sm text-left">Ask anything about me...</span>
              <span className="text-xs text-muted-foreground font-mono px-2 py-1 rounded bg-secondary">AI</span>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-xl glass text-foreground font-semibold hover:border-primary/40 transition-colors">
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
