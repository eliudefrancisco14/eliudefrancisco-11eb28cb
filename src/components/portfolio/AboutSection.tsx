import { Palette, BookOpen, BarChart3, Music, Brain, Globe } from "lucide-react";
import { personalInfo, education, interests, experiences } from "@/data/portfolio";
import FadeIn from "./FadeIn";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="w-4 h-4" />,
  book: <BookOpen className="w-4 h-4" />,
  chart: <BarChart3 className="w-4 h-4" />,
  music: <Music className="w-4 h-4" />,
  brain: <Brain className="w-4 h-4" />,
  globe: <Globe className="w-4 h-4" />,
};

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
          Sobre Mim
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-muted-foreground leading-relaxed mb-12">
          {personalInfo.aboutExtended}
        </p>
      </FadeIn>

      {/* Experience */}
      <FadeIn delay={0.15}>
        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          Experiência
        </h3>
      </FadeIn>
      <div className="space-y-6 mb-12">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.05}>
            <div className="group">
              <div className="flex items-baseline justify-between mb-1">
                <h4 className="font-display font-medium text-foreground">{exp.role}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">{exp.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Education */}
      <FadeIn delay={0.3}>
        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          Formação
        </h3>
      </FadeIn>
      <div className="space-y-4 mb-12">
        {education.map((edu, i) => (
          <FadeIn key={i} delay={0.35}>
            <div className="flex items-baseline justify-between">
              <div>
                <h4 className="font-display font-medium text-foreground">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{edu.period}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Interests */}
      <FadeIn delay={0.4}>
        <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          Interesses
        </h3>
      </FadeIn>
      <FadeIn delay={0.45}>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
            >
              {iconMap[interest.icon]}
              <span>{interest.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
