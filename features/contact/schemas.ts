import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, introduce un email válido" }),
  subject: z.string().min(5, { message: "El asunto es muy corto" }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
