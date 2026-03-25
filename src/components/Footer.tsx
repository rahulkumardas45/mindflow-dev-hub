import { Terminal } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/20 px-6 py-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="font-mono">alex.dev</span>
      </div>
      <p>© {new Date().getFullYear()} Alex Chen. Built with passion & AI.</p>
    </div>
  </footer>
);

export default Footer;
