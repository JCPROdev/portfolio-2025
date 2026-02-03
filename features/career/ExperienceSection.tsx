"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";
import { CAREER_DATA } from "./data";

const ExperienceSection = () => {
  const { experiences } = CAREER_DATA;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50" ref={ref}>
      <div className="mx-auto px-5 max-w-6xl sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Experiencia <span className="text-indigo-600">Profesional</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Mi trayectoria profesional construyendo soluciones digitales
            innovadoras
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-200 hidden md:block"></div>
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-12 md:mb-16 md:ml-16"
            >
              {/* Timeline Dot*/}
              <div className="absolute -left-24 md:-left-18 lg:-left-24 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md hidden md:block">
                {experience.current && (
                  <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Experience Card */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex flex-col mb-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                      <Briefcase className="w-6 h-6 text-indigo-600 mr-3 shrink-0" />
                      {experience.title}
                      {experience.current && (
                        <span className="bg-green-100 text-green-800 text-sm ml-3 px-3 py-1 rounded-full">
                          Actual
                        </span>
                      )}
                    </h2>
                    <div className="flex flex-col text-gray-600 sm:flex-row sm:items-center sm:space-x-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">
                          {experience.company}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {formatDate(experience.startDate)} -{" "}
                      {experience.endDate
                        ? formatDate(experience.endDate)
                        : "Presente"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {experience.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg text-white">
            <h3 className="font-bold text-2xl mb-4">
              ¿Interesado en mi experiencia?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevos desafíos y oportunidades. ¡Hablemos
              sobre cómo puedo contribuir a tu próximo proyecto!
            </p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-bold">
              Contactar Ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
