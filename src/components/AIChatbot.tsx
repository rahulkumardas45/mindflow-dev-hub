import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickReplies: Record<string, string> = {
  skills: "I'm proficient in React, TypeScript, Python, Node.js, TensorFlow, LangChain, PostgreSQL, Redis, Docker, and AWS/GCP. My strongest areas are building full-stack AI applications with RAG pipelines and LLM orchestration.",
  experience: "I have 5+ years of experience building production AI systems. I've worked on document analysis platforms, real-time trading bots, code review tools, and voice-first AI assistants — shipping to millions of users.",
  projects: "I've built several notable projects: an AI Document Analyzer using RAG + Pinecone, a real-time ML Trading Bot, a Smart Code Reviewer with GPT-4, and a multilingual Voice AI Assistant. Each one is production-grade and battle-tested.",
  contact: "You can reach me at alex@example.com, or use the contact form on this page. I'm also on GitHub and LinkedIn — links are in the footer!",
  hire: "I'm currently available for full-time roles and consulting. I specialize in AI/ML engineering, full-stack development, and system design. Let's chat — drop me a message via the contact section!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(quickReplies)) {
    if (lower.includes(key)) return value;
  }
  return "Great question! I can tell you about my skills, experience, projects, or how to contact/hire me. What would you like to know?";
}

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Alex's AI assistant. Ask me about skills, projects, experience, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(userMsg.content) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle */}
      <button
        id="chat-toggle"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity glow-box"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">AI Assistant</p>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border/30">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type a message..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  onClick={send}
                  className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
