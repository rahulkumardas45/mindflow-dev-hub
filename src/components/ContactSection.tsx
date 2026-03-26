import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Download, Github, Linkedin, Mail, Phone, Loader2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const id = crypto.randomUUID();

      const { error } = await supabase.from("contact_submissions").insert({
        id,
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });

      if (error) throw error;

      // Try sending notification email via edge function
      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          },
        });
      } catch {
        // Email sending is optional — submission is already saved
        console.log("Email notification skipped (not configured yet)");
      }

      toast({
        title: "Message sent! ✉️",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
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
                disabled={sending}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {sending ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
              <a
                href={profile.resumeUrl}
                download
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
            <a href={`tel:${profile.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
