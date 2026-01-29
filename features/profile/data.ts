import {
  Code2,
  Palette,
  Smartphone,
  Coffee,
  Terminal,
  FolderGit2,
} from "lucide-react";

export const PROFILE_DATA = {
  header: {
    title: "Sobre Mí",
    description:
      "Soy un ingeniero apasionado por crear soluciones digitales que impacten positivamente la vida de las personas",
  },
  content: {
    passion: {
      title: "Mi Pasión",
      description:
        "Mi viaje comenzó con la curiosidad de cómo funcionan las cosas. Hoy, esa curiosidad se ha transformado en una búsqueda constante por crear interfaces que no solo sean funcionales, sino también intuitivas y accesibles.",
    },
    focus: {
      title: "Mi enfoque",
      description:
        "Me especializo en el ecosistema React (Next.js), combinando rendimiento técnico con principios de diseño modernos. Cada proyecto es una oportunidad para aprender algo nuevo y superar mis propios límites.",
    },
    quote: "Alimentado por café y motivado por desafíos.",
  },

  // Right side data
  services: [
    {
      title: "Desarrollo Frontend",
      description:
        "Transformo ideas en experiencias web interactivas y responsivas",
      icon: Code2,
    },
    {
      title: "Diseño UI/UX",
      description:
        "Creo interfaces atractivas que priorizan la experiencia del usuario",
      icon: Palette,
    },
    {
      title: "Desarrollo Móvil",
      description: "Desarrollo aplicaciones móviles nativas y multiplataforma",
      icon: Smartphone,
    },
  ],

  // Bottom side data
  stats: [
    {
      label: "Proyectos Personales",
      value: "5+",
      icon: FolderGit2,
    },
    {
      label: "Horas de Código",
      value: "800+",
      icon: Terminal,
    },
    {
      label: "Tazas de Café",
      value: "∞",
      icon: Coffee,
    },
    {
      label: "Ganas de Aprender",
      value: "100%",
      icon: Code2,
    },
  ],
};
