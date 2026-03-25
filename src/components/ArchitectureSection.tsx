import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { architectureComponents } from "@/data/portfolio";

const ArchitectureSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeComp = architectureComponents.find((c) => c.id === active);

  return (
    <section id="architecture" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <p className="text-primary font-mono text-sm mb-2">// architecture</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            System <span className="gradient-text">Design</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 relative"
        >
          <p className="text-muted-foreground text-sm mb-8">Click a component to learn more about it.</p>

          {/* Diagram */}
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            {/* Connection lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="none">
              <line x1="22" y1="44" x2="35" y2="44" stroke="hsl(var(--border))" strokeWidth="0.3" />
              <line x1="47" y1="44" x2="60" y2="24" stroke="hsl(var(--border))" strokeWidth="0.3" />
              <line x1="47" y1="44" x2="60" y2="64" stroke="hsl(var(--border))" strokeWidth="0.3" />
              <line x1="72" y1="24" x2="85" y2="24" stroke="hsl(var(--border))" strokeWidth="0.3" />
              <line x1="72" y1="64" x2="85" y2="64" stroke="hsl(var(--border))" strokeWidth="0.3" />
            </svg>

            {architectureComponents.map((comp) => (
              <button
                key={comp.id}
                onClick={() => setActive(active === comp.id ? null : comp.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer border ${
                  active === comp.id
                    ? "bg-primary/20 border-primary text-primary glow-box"
                    : "glass border-border/30 text-foreground hover:border-primary/40"
                }`}
                style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
              >
                {comp.label}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {activeComp && (
              <motion.div
                key={activeComp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 p-4 rounded-xl bg-secondary/50 border border-border/30"
              >
                <p className="text-sm font-semibold text-primary mb-1">{activeComp.label}</p>
                <p className="text-sm text-muted-foreground">{activeComp.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
