"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Send } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ContactFormData, contactFormSchema } from "./schemas";
import { toast } from "sonner";
import { sendEmail } from "./actions";
import { motion } from "motion/react";

const ContactForm = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await sendEmail(data);

    if (result.success) {
      toast.success("¡Mensaje enviado correctamente!");
      reset();
    } else {
      toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  return (
    <motion.div variants={itemVariants} className="min-w-0">
      <Card className="border-gray-200 hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Envíame un Mensaje
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre *
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="pl-4 bg-white border-gray-300 focus-visible:ring-indigo-500"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-4 bg-white border-gray-300 focus-visible:ring-indigo-500"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-600 flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Asunto
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="¿De qué quieres hablar?"
                className="bg-white border-gray-300 focus-visible:ring-indigo-500"
                disabled={isSubmitting}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                {...register("subject")}
              />
              {errors.subject && (
                <p
                  id="subject-error"
                  className="mt-1 text-sm text-red-600 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto, necesidades, timeline, etc..."
                className="bg-white border-gray-300 focus-visible:ring-indigo-500"
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Enviando...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
