import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickReplies: Record<string, string> = {
  skills: "I'm proficient in C, C++, JavaScript, Python, and SQL. On the frontend I use React.js and Redux; on the backend, Node.js, Express.js, Socket.io, and JWT auth. I also work with MongoDB, MySQL, Stripe, and Clerk. My core CS knowledge covers DSA, OS, DBMS, and Computer Networks.",
  experience: "I'm a B.Tech CSE student at IIIT Bhagalpur (2023-2027). I've built production-grade full-stack apps including an LMS with Stripe payments, an AI-powered blog platform, and a real-time chat app with WebSockets.",
  projects: "I've built 3 key projects: Edemy (full-stack LMS with RBAC + Stripe), an AI-Powered Blog App (MERN + JWT + Redux), and a Real-Time Chat App (Socket.io + MongoDB). All are deployed and available on GitHub!",
  contact: "You can reach me at rahulku3223@gmail.com or +91-8084601841. I'm also on GitHub and LinkedIn — check the links in the contact section!",
  hire: "I'm a B.Tech CSE student at IIIT Bhagalpur, actively looking for internships and opportunities in full-stack development and backend engineering. Feel free to reach out via the contact form!",
  education: "I'm pursuing B.Tech in CSE from IIIT Bhagalpur (2023-2027) with a CGPA of 6.81. I completed 12th from Sri Radha Krishna Goenka College (82.8%) and 10th from Hit Narayan High School (82.2%).",
  leetcode: "I've solved 250+ problems on LeetCode with a highest rating of 1516. I'm also active on CodeChef (rating 1400) and GeeksforGeeks (50+ DSA problems).",
  achievements: "250+ LeetCode problems (rating 1516), CodeChef rating 1400, 50+ GFG problems. I also have certifications in Cyber Security, Google Generative AI, and AI Agent Development.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(quickReplies)) {
    if (lower.includes(key)) return value;
  }
  if (lower.includes("dsa") || lower.includes("algorithm") || lower.includes("competitive")) return quickReplies.leetcode;
  if (lower.includes("college") || lower.includes("study") || lower.includes("university")) return quickReplies.education;
  if (lower.includes("certif")) return quickReplies.achievements;
  return "Great question! I can tell you about my skills, projects, education, achievements, LeetCode stats, or how to contact/hire me. What would you like to know?";
}

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey! 👋 I'm Rahul's AI assistant. Ask me about skills, projects, education, achievements, or anything else!" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = { current: null as HTMLDivElement | null };

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(userMsg.content) }]);
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 600);
  };

  return (
    <>
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
            <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">AI Assistant</p>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>

            <div ref={(el) => { scrollRef.current = el; }} className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
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
