"use server";

import { Resend } from "resend";
import { ContactFormData, contactFormSchema } from "./schemas";

// Inicalizamos RESEND con la clave de API obtenida del entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormData) {
  // Validación de seguridad para evitar inyecciones de código
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Datos inválidos" };
  }

  try {
    // Enviamos el correo
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "camacho.jomar28@outlook.com",
      subject: `Nuevo mensaje de: ${data.name} - ${data.subject}`,
      text: `Email: ${data.email}\n\nMensaje:\n${data.message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    // 1. "USAMOS" el error imprimiéndolo en la terminal del servidor.
    console.error("Error en el servidor:", error);

    return {
      success: false,
      error: "Error al enviar el email. Inténtalo más tarde.",
    };
  }
}
