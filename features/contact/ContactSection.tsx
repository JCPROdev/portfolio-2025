"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            ¡Trabajemos <span className="text-indigo-600"> Juntos! </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu idea
            y cómo puedo ayudarte a hacerla realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 min-w-0">
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
