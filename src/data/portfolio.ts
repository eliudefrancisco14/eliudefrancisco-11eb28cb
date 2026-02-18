export const personalInfo = {
  name: "Eliude Francisco",
  role: "Engenheiro de Dados",
  tagline: "Dados · IA · Visualização",
  bio: "Olá, eu sou Eliude Francisco — Engenheiro de Dados apaixonado por transformar dados brutos em insights acionáveis. Atuo na interseção entre IA, análise e visualização de dados, construindo pipelines robustos e soluções inteligentes.",
  aboutExtended: "Angolano, entusiasta de tecnologia e programação. Acredito que a engenharia de dados é a espinha dorsal da tomada de decisões inteligentes. Minha jornada vai desde desenvolvimento web até o mundo dos dados, sempre buscando simplicidade e clareza em tudo que construo.",
  email: "eliudefrancisco14@gmail.com",
  location: "Angola",
  social: {
    github: "https://github.com/eliudefrancisco14",
    linkedin: "https://linkedin.com/in/eliude-quintas-francisco-7b2347252",
    instagram: "https://instagram.com/eliudepauloquintas",
    twitter: "https://x.com/EliudeQuintas14",
  },
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    title: "Angofuel",
    description: "Sistema de Geolocalização de Postos de Combustíveis em Angola, integrando dados geográficos com visualização em tempo real.",
    technologies: ["Laravel", "Bootstrap", "MySQL", "Google Maps"],
  },
  {
    title: "Assistente Hospitalar",
    description: "Plataforma de consulta online que conecta pacientes a profissionais de saúde de forma simples e eficiente.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "School Management",
    description: "Sistema de gestão escolar completo, abrangendo desde matrículas até o acompanhamento de desempenho acadêmico.",
    technologies: ["Laravel", "Bootstrap", "MySQL"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Engenheiro de Dados",
    company: "Freelance / Projetos Pessoais",
    period: "2024 — Presente",
    description: "Desenvolvimento de pipelines de dados, análise exploratória e visualização com Python, SQL e ferramentas de BI.",
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "INOKRI",
    period: "2022 — 2024",
    description: "Desenvolvimento de aplicações web com Laravel, React e integração com APIs REST.",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Linguagens",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "SQL", "Java"],
  },
  {
    category: "Dados & IA",
    items: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Apache Spark"],
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "Laravel", "Next.js"],
  },
  {
    category: "Ferramentas",
    items: ["Docker", "Git", "VS Code", "Postman", "MySQL"],
  },
];

export const education = [
  {
    degree: "Licenciatura em Engenharia Informática",
    school: "ITEL",
    period: "2018 — 2022",
  },
];

export const interests = [
  { label: "Artes Visuais", icon: "palette" },
  { label: "Leitura", icon: "book" },
  { label: "Data Science", icon: "chart" },
  { label: "Música", icon: "music" },
  { label: "IA & ML", icon: "brain" },
  { label: "Explorar o Mundo", icon: "globe" },
];
