export const CAREER_DATA = {
  skills: {
    title: "Habilidades Técnicas",
    subtitle:
      " Dominio de tecnologías modernas para crear soluciones digitales innovadoras",

    // Aqui definimos las skills con porcentajes
    items: [
      // Frontend
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "TypeScript", level: 80, category: "Frontend" },
      { name: "Tailwind CSS", level: 95, category: "Frontend" },

      // Backend
      { name: "Node.js", level: 75, category: "Backend" },
      { name: "PostgreSQL", level: 70, category: "Backend" },

      // Design
      { name: "Figma", level: 80, category: "Design" },

      // Tools
      { name: "Git", level: 90, category: "Tools" },
    ],
  },
  experiences: [
    {
      id: "1",
      title: "Cybersecurity Intern",
      company: "Cybersecurity S.R.L",
      location: "Cochabamba, Bolivia",
      startDate: "2021-10",
      endDate: "2022-01",
      description: [
        "Monitorización y análisis de tráfico de red para la detección de vulnerabilidades",
        "Configuración y gestión de políticas de seguridad en firewalls Sophos",
        "Implementación de controles de acceso y seguridad perimetral",
        "Colaboración en el aseguramiento de la infraestructura de datos",
      ],
      current: false,
    },
    // {
    //   id: "2",
    //   title: "Full Stack Developer",
    //   company: "Digital Solutions Corp",
    //   location: "Híbrido",
    //   startDate: "2020-03",
    //   endDate: "2021-12",
    //   description: [
    //     "Desarrollo de plataformas web full-stack con React y Node.js",
    //     "Diseño e implementación de APIs RESTful",
    //     "Gestión de bases de datos PostgreSQL y MongoDB",
    //     "Implementación de autenticación y autorización segura",
    //   ],
    //   current: false,
    // },
    // {
    //   id: "3",
    //   title: "Mobile App Developer",
    //   company: "AppCraft Studio",
    //   location: "Presencial",
    //   startDate: "2019-01",
    //   endDate: "2020-02",
    //   description: [
    //     "Desarrollo de aplicaciones móviles nativas con React Native",
    //     "Integración con APIs de terceros y servicios en la nube",
    //     "Optimización de performance en dispositivos móviles",
    //     "Testing y deployment en App Store y Google Play",
    //   ],
    //   current: false,
    // },
  ],
  education: {
    academic: [
      {
        id: "1",
        degree: "Máster en Digital Media Business & Technology",
        institution: "Universidad Complutense de Madrid",
        location: "Madrid, España",
        startDate: "2024-11",
        endDate: "2025-06",
        description:
          "Especialización en gestión de productos digitales, innovación tecnológica y estrategias de negocio UX/UI.",
      },
      {
        id: "2",
        degree: "Ingeniería de Sistemas",
        institution: "Universidad Privada Franz Tamayo",
        location: "Cochabamba, Bolivia",
        startDate: "2017-02",
        endDate: "2022-01",
        description:
          "Formación integral en desarrollo de software, arquitectura de sistemas y seguridad informática.",
      },
    ],
    certifications: [
      {
        id: "1",
        name: "Web & Mobile Designer: UI/UX + Figma",
        issuer: "Udemy",
        date: "2023",
        credentialId: "UC-2023-UX",
      },
      {
        id: "2",
        name: "Sophos Firewall Engineer v18.5",
        issuer: "Sophos",
        date: "2022",
        credentialId: "SOPHOS-ENG-18",
      },
      {
        id: "3",
        name: "Master in JavaScript Frameworks",
        issuer: "Udemy",
        date: "2021",
        credentialId: "UC-JS-FRAM",
      },
      // {
      //   id: "4",
      //   name: "JavaScript Algorithms and Data Structures",
      //   issuer: "freeCodeCamp",
      //   date: "2021-09",
      //   credentialId: "FCC-JS-2021",
      // },
    ],
  },
};
