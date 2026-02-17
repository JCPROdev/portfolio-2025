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
  // {
  //   id: "2",
  //   title: "FoodDelivery Mobile App",
  //   description:
  //     "Aplicación móvil para delivery de comida con navegación intuitiva y seguimiento en tiempo real.",
  //   image: "/images/image1.png",
  //   tags: ["React Native", "Expo", "TypeScript"],
  //   category: "mobile",
  //   links: { demo: "#", github: "#" },
  // },
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
