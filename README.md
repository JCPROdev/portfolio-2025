# ⚡ Jomar Camacho | Frontend Developer, UX/UI Designer

![Project Banner](public/og-image.jpg)

> Portafolio profesional de alto rendimiento desarrollado con las últimas tecnologías del ecosistema React. Enfocado en performance, accesibilidad y SEO técnico.

[![Vercel Deploy](https://deploy-badge.vercel.app/vercel/portfolio-jomar)](https://portfolio-jomar.vercel.app/)

## 🛠 Tech Stack

Este proyecto no es solo una cara bonita; está construido sobre una arquitectura robusta y moderna:

- **Core:** [Next.js 15](https://nextjs.org/) (App Router & Server Components)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado estricto)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- **Animaciones:** [Motion](https://motion.dev/)
- **Formularios & Validación:** [React Server Actions](https://react.dev/reference/react/use-server) + [Zod](https://zod.dev/)
- **Email:** [Resend API](https://resend.com/) (Envío transaccional real)
- **Analytics:** Google Analytics 4 (GA4)
- **Despliegue:** Vercel (CI/CD)

## 🚀 Características Clave

- ✅ **Performance 100/100:** Optimización de Core Web Vitals (Lighthouse).
- ✅ **Server Actions:** Manejo de formularios sin API Routes tradicionales (Backend-for-Frontend).
- ✅ **SEO Optimizado:** Metadatos dinámicos, sitemap.xml, robots.txt y Open Graph.
- ✅ **Diseño Responsivo:** Adaptable a Móvil, Tablet y Desktop con enfoque "Mobile First".
- ✅ **Seguridad:** Validación de inputs con Zod en servidor y cliente.

## 📦 Instalación y Uso Local

Si quieres clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone [https://github.com/JCPROdev/portfolio-2025.git]
   cd portfolio-2025
   ```

2. **Instalar dependencias:**

```Bash
pnpm install

# o

npm install
```

3. **Configurar Variables de Entorno: Renombra o crea el archivo .env.local y añade tus claves:**

```text
RESEND_API_KEY=re_12345...
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXX
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Ejecutar servidor de desarrollo:**

```Bash
pnpm dev
```

Abre http://localhost:3000 en tu navegador.

📂 Estructura del Proyecto

```text
├── src/
│ ├── app/ # App Router (Layout)
│ ├── components/ # Componentes React reutilizables (Páginas y UI)
│ ├── features/ # Módulos específicos (ej: contact)
│ └── features/contact # Utilidades (Zod schemas, Server actions)
├── public/ # Assets estáticos (Imágenes, fuentes)
└── ...config files # Tailwind, Next.js, TypeScript config
```

🤝 Contacto
¿Te interesa mi perfil o quieres colaborar?

Website: https://portfolio-jomar.vercel.app/

LinkedIn: https://www.linkedin.com/in/jomar-camacho/

Email: camacho.jomar28@outlook.com

Desarrollado por Jomar Camacho.
