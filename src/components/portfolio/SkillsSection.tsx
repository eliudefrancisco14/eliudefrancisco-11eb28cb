import { skills } from "@/data/portfolio";
import FadeIn from "./FadeIn";

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
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-lg border border-border bg-card text-card-foreground hover:bg-secondary transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
