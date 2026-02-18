import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import FadeIn from "./FadeIn";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            {personalInfo.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
            {personalInfo.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
            {personalInfo.bio}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-5 mb-12">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
