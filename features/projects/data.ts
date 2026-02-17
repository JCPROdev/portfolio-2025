// Data Structure
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "ui-ux" | "mobile"; // For Filter
  links: {
    demo?: string;
    github?: string;
  };
}

export const PROJECT_CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "mobile", label: "Mobile" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "Level Gym: Sistema de Gestión & Web",
    description:
      "Desarrollo colaborativo de una solución digital para un gimnasio local. Lideré el diseño UI/UX y la implementación del Frontend, asegurando una interfaz amigable para que el personal administre ventas, inventario y accesos QR sin complicaciones.",
    image: "/images/p1_level_gym.webp",
    tags: ["Svelte", "Javascript", "SCSS", "Auth"],
    category: "frontend",
    links: { demo: "https://levelgym-cbba.web.app", github: "#" },
  },
  {
    id: "2",
    title: "Personal Brand Portfolio & Identity",
    description:
      "Diseño y construcción de mi identidad digital. Traduje mi prototipo de Figma a una aplicación web real con Next.js, enfocándome en la creación de componentes reutilizables, un diseño totalmente responsivo y la aplicación de buenas prácticas de código limpio.",
    image: "/images/p2_per_portfolio.webp",
    tags: ["React", "Next.js", "TypeScript", "Figma", "Tailwind CSS"],
    category: "frontend",
    links: {
      demo: "https://www.figma.com/design/46SrohqEx8WOn4MuUXOMaV/Portfolio---Web-Design?node-id=366-21&t=O9lDIMjqWWIMPNPc-1",
      github: "https://github.com/JCPROdev/portfolio-2025",
    },
  },
  // {
  //   id: "3",
  //   title: "UI/UX Design System",
  //   description:
  //     "Sistema completo de diseño con componentes reutilizables y guías de estilo modernas.",
  //   image: "/images/image1.png",
  //   tags: ["Figma", "Storybook", "CSS Modules"],
  //   category: "ui-ux",
  //   links: { demo: "#" },
  // },
  // {
  //   id: "4",
  //   title: "Developer Portfolio",
  //   description:
  //     "Portfolio interactivo con animaciones avanzadas y optimización SEO.",
  //   image: "/images/image1.png",
  //   tags: ["Next.js", "Framer Motion", "Tailwind"],
  //   category: "frontend",
  //   links: { github: "#" },
  // },
];
