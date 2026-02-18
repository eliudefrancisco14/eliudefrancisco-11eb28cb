import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
          Projetos
        </h2>
      </FadeIn>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={0.1 + i * 0.05}>
            <motion.div
              className="group p-5 rounded-xl border border-border bg-card hover:border-foreground/20 transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 30px hsla(0, 0%, 0%, 0.12)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-medium text-card-foreground group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
