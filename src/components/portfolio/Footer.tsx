import { personalInfo } from "@/data/portfolio";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <div className="flex items-center gap-6">
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={personalInfo.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
