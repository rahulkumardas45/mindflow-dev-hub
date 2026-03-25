import { motion } from "framer-motion";
import { ExternalLink, Github, MessageSquare } from "lucide-react";
import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-hover rounded-2xl p-6 flex flex-col group"
            >
              <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-5`} />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a href={project.liveUrl} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
                <a href={project.githubUrl} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <button className="ml-auto flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <MessageSquare className="w-4 h-4" /> Explain
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
