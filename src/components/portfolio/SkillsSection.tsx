import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
          Skills
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <FadeIn key={group.category} delay={0.1 + i * 0.05}>
            <div>
              <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                {group.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-card-foreground hover:bg-secondary transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
