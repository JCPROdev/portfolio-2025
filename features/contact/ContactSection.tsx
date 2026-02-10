"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

import { useInView } from "react-intersection-observer";
import { Toaster } from "sonner";
import { motion } from "motion/react";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <Toaster position="bottom-right" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            ¡Trabajemos <span className="text-indigo-600"> Juntos! </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea
            y cómo puedo ayudarte a hacerla realidad
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 min-w-0"
        >
          <ContactInfo />

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
