export const CAREER_DATA = {
  skills: {
    title: "Habilidades Técnicas",
    subtitle:
      " Dominio de tecnologías modernas para crear soluciones digitales innovadoras",

    // Aqui definimos las skills con porcentajes
    items: [
      // Frontend
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 85, category: "frontend" },
      { name: "TypeScript", level: 80, category: "frontend" },
      { name: "Tailwind CSS", level: 95, category: "frontend" },

      // Backend
      { name: "Node.js", level: 75, category: "backend" },
      { name: "PostgreSQL", level: 70, category: "backend" },

      // Design
      { name: "Figma", level: 80, category: "design" },

      // Tools
      { name: "Git", level: 90, category: "tools" },
    ],
  },
  experience: [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Tech Innovation Lab",
      location: "Remoto",
      startDate: "2022-01",
      description: [
        "Desarrollo de aplicaciones web complejas usando React, Next.js y TypeScript",
        "Implementación de diseños UI/UX responsivos con Tailwind CSS",
        "Optimización de rendimiento y SEO en aplicaciones web",
        "Colaboración en arquitectura frontend y mejores prácticas",
      ],
      current: true,
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Digital Solutions Corp",
      location: "Híbrido",
      startDate: "2020-03",
      endDate: "2021-12",
      description: [
        "Desarrollo de plataformas web full-stack con React y Node.js",
        "Diseño e implementación de APIs RESTful",
        "Gestión de bases de datos PostgreSQL y MongoDB",
        "Implementación de autenticación y autorización segura",
      ],
      current: false,
    },
    {
      id: "3",
      title: "Mobile App Developer",
      company: "AppCraft Studio",
      location: "Presencial",
      startDate: "2019-01",
      endDate: "2020-02",
      description: [
        "Desarrollo de aplicaciones móviles nativas con React Native",
        "Integración con APIs de terceros y servicios en la nube",
        "Optimización de performance en dispositivos móviles",
        "Testing y deployment en App Store y Google Play",
      ],
      current: false,
    },
  ],
  education: {
    academic: [
      {
        id: "1",
        degree: "Ingeniería de Sistemas",
        institution: "Universidad Nacional",
        location: "Colombia",
        startDate: "2015-02",
        endDate: "2019-12",
        description:
          "Especialización en Desarrollo de Software y Sistemas de Información",
      },
    ],
    certifications: [
      {
        id: "1",
        name: "React Developer Certification",
        issuer: "Meta",
        date: "2023-03",
        credentialId: "META-REACT-2023",
      },
      {
        id: "2",
        name: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2022-11",
        credentialId: "AWS-CP-2022",
      },
      {
        id: "3",
        name: "Google UX Design Certificate",
        issuer: "Google",
        date: "2022-07",
        credentialId: "GOOGLE-UX-2022",
      },
      {
        id: "4",
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2021-09",
        credentialId: "FCC-JS-2021",
      },
    ],
  },
};
