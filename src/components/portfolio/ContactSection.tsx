import { Mail, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import FadeIn from "./FadeIn";

const ContactSection = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
          Vamos Conversar
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Se tens um projeto em mente, uma ideia para discutir ou simplesmente queres trocar uma ideia — ficarei feliz em ouvir.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity duration-200"
        >
          <Mail className="w-4 h-4" />
          Enviar Email
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </FadeIn>
    </div>
  </section>
);

export default ContactSection;
