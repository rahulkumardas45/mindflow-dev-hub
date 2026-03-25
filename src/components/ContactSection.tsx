import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="text-primary font-mono text-sm mb-2">// contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                {sent ? "Sent!" : "Send Message"} <Send className="w-4 h-4" />
              </button>
              <a
                href={profile.resumeUrl}
                className="px-6 py-3 rounded-xl glass text-foreground font-semibold text-sm flex items-center gap-2 hover:border-primary/40 transition-colors"
              >
                Download Resume <Download className="w-4 h-4" />
              </a>
            </div>
          </form>

          <div className="flex items-center gap-5 mt-8 pt-6 border-t border-border/30">
            <a href={profile.github} className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
