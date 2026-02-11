import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://portfolio-jomar.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // bloquea rutas privadas
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
