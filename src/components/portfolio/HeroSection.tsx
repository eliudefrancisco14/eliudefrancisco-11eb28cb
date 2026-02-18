import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/animated-text";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

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

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
          <AnimatedText text={personalInfo.name} delay={0.2} />
        </h1>

        <FadeIn delay={0.3}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
            {personalInfo.bio}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex items-center justify-center gap-5 mb-12">
            {[
              { href: personalInfo.social.github, icon: Github, label: "GitHub" },
              { href: personalInfo.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: personalInfo.social.instagram, icon: Instagram, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
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
