export const profile = {
  name: "Alex Chen",
  role: "Full Stack AI Engineer",
  taglines: [
    "Building intelligent systems that scale.",
    "Crafting AI-powered experiences.",
    "From models to production, end to end.",
    "Turning data into decisions.",
  ],
  bio: "I design and build production-grade AI systems, from fine-tuning LLMs to deploying scalable microservices. Passionate about the intersection of software engineering and machine learning.",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "#",
};

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Document Analyzer",
    description: "RAG-powered document Q&A system with vector search, supporting PDF, DOCX, and markdown ingestion with sub-second query responses.",
    techStack: ["Python", "LangChain", "Pinecone", "React", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: "2",
    title: "Real-Time Trading Bot",
    description: "ML-driven trading system processing 10K+ events/sec with live market data, featuring anomaly detection and automated execution.",
    techStack: ["Python", "TensorFlow", "Redis", "Kafka", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: "3",
    title: "Smart Code Reviewer",
    description: "AI-powered code review tool that analyzes PRs, suggests improvements, detects vulnerabilities, and generates documentation automatically.",
    techStack: ["TypeScript", "OpenAI", "Next.js", "GitHub API", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-emerald-500/20",
  },
  {
    id: "4",
    title: "Voice-First AI Assistant",
    description: "Multimodal assistant with real-time speech recognition, natural language understanding, and context-aware responses across 12 languages.",
    techStack: ["Python", "Whisper", "GPT-4", "WebSocket", "React Native"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-rose-500/20 to-accent/20",
  },
];

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "Python / FastAPI", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 82 },
    ],
  },
  {
    category: "AI / ML",
    icon: "brain",
    skills: [
      { name: "LLM Fine-Tuning", level: 90 },
      { name: "RAG Systems", level: 92 },
      { name: "TensorFlow / PyTorch", level: 85 },
      { name: "LangChain", level: 88 },
    ],
  },
  {
    category: "DevOps",
    icon: "cloud",
    skills: [
      { name: "Docker / K8s", level: 87 },
      { name: "AWS / GCP", level: 85 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Terraform", level: 78 },
    ],
  },
];

export const architectureComponents = [
  { id: "client", label: "Client App", x: 10, y: 40, description: "React SPA with SSR. Handles routing, state, and renders the UI." },
  { id: "api", label: "API Gateway", x: 35, y: 40, description: "Express/FastAPI gateway. Rate limiting, auth, request validation." },
  { id: "llm", label: "LLM Service", x: 60, y: 20, description: "Orchestrates LLM calls with LangChain. Manages prompts, chains, and memory." },
  { id: "vector", label: "Vector DB", x: 85, y: 20, description: "Pinecone/FAISS for semantic search. Stores embeddings for RAG retrieval." },
  { id: "db", label: "PostgreSQL", x: 60, y: 60, description: "Primary data store. Projects, users, chat history, analytics." },
  { id: "cache", label: "Redis Cache", x: 85, y: 60, description: "Caches frequent queries, session data, and rate limit counters." },
];
