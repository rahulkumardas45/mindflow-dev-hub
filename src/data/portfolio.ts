export const profile = {
  name: "Rahul Kumar",
  role: "Full Stack Developer",
  taglines: [
    "Building scalable full-stack applications.",
    "Crafting seamless user experiences.",
    "From backend APIs to pixel-perfect UIs.",
    "Solving problems, one commit at a time.",
  ],
  bio: "B.Tech CSE student at IIIT Bhagalpur, passionate about full-stack development, scalable systems, and building production-grade web applications. 250+ LeetCode problems solved.",
  email: "rahulku3223@gmail.com",
  altEmail: "rahul.230101096@iiitbh.ac.in",
  phone: "+91-8084601841",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "/resume.pdf",
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
    title: "Edemy – Online LMS",
    description: "Full-stack Learning Management System with RBAC authentication and Stripe payments. Built scalable REST APIs and optimized MongoDB schema for efficient course and user data retrieval.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: "2",
    title: "AI-Powered Blog App",
    description: "MERN blog platform with AI content assistance and JWT authentication. Features role-based access, full CRUD APIs, and a responsive Redux-based UI.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: "3",
    title: "Real-Time Chat App",
    description: "Low-latency real-time chat application using WebSockets. Supports secure one-to-one and group chat with persistent storage, optimized for concurrent active users.",
    techStack: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-primary/20 to-emerald-500/20",
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
      { name: "React.js / Redux", level: 90 },
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "RESTful APIs", level: 88 },
      { name: "Socket.io", level: 82 },
      { name: "JWT Authentication", level: 85 },
    ],
  },
  {
    category: "Languages & DB",
    icon: "brain",
    skills: [
      { name: "C / C++", level: 90 },
      { name: "Python / SQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "CS & Tools",
    icon: "cloud",
    skills: [
      { name: "DSA", level: 88 },
      { name: "Git / GitHub", level: 90 },
      { name: "Stripe / Clerk", level: 80 },
      { name: "OS / DBMS / CN", level: 82 },
    ],
  },
];

export const achievements = [
  { platform: "LeetCode", detail: "250+ problems solved, highest rating 1516", link: "#" },
  { platform: "CodeChef", detail: "Highest rating 1400, multiple rated contests", link: "#" },
  { platform: "GeeksforGeeks", detail: "50+ DSA problems solved", link: "#" },
];

export const certifications = [
  "Cyber Security Certification",
  "Google Generative AI Introduction",
  "AI Agent Development Bootcamp (5 Days)",
];

export const education = [
  { institution: "IIIT Bhagalpur", degree: "B.Tech, CSE", year: "2023 – 2027", score: "CGPA: 6.81" },
  { institution: "Sri Radha Krishna Goenka College", degree: "12th (BSEB)", year: "2020 – 2022", score: "82.8%" },
  { institution: "Hit Narayan High School", degree: "10th (BSEB)", year: "2020", score: "82.2%" },
];

export const architectureComponents = [
  { id: "client", label: "React Frontend", x: 10, y: 40, description: "React.js SPA with Redux state management. Handles routing, UI rendering, and API calls." },
  { id: "api", label: "Express API", x: 35, y: 40, description: "Node.js + Express.js REST API. JWT auth, request validation, and route handling." },
  { id: "realtime", label: "Socket.io", x: 60, y: 20, description: "WebSocket layer for real-time features. Powers live chat and notifications." },
  { id: "auth", label: "Auth (JWT/Clerk)", x: 85, y: 20, description: "Authentication via JWT tokens or Clerk. Supports RBAC and secure sessions." },
  { id: "db", label: "MongoDB", x: 60, y: 60, description: "Primary NoSQL database. Stores users, courses, messages, and blog posts." },
  { id: "payments", label: "Stripe", x: 85, y: 60, description: "Payment processing for course purchases. Secure checkout integration." },
];
