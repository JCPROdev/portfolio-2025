"use client";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { BadgeCheck, Calendar, GraduationCap, MapPin } from "lucide-react";
import { CAREER_DATA } from "./data";

const EducationSection = () => {
  const { education } = CAREER_DATA;

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const formatDate = (dateStr: string) => {
    const [year] = dateStr.split("-");
    return year;
  };

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="px-5 md:px-8 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl mb-4 lg:text-5xl">
            Educación & <span className="text-indigo-600">Certificaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación académica y certificaciones que respaldan mi expertise
            técnico
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-3" />
              Formación Académica
            </h3>

            {education.academic.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="p-6 bg-linear-to-r from-indigo-50 to-blue-50 rounded-lg mb-4"
              >
                <div className="flex flex-col mb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 lg:flex-col xl:flex-row text-gray-600">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 bg-white px-4 py-2 rounded-full mt-4 lg:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </span>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-gray-700 italic">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-8">
              <BadgeCheck className="text-indigo-600 w-6 h-6 mr-3" />
              <h3 className="font-bold text-2xl">Certificaciones</h3>
            </div>

            <div className="space-y-4">
              {education.certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="bg-white border-indigo-500 border-l-4 p-6 shadow-md rounded-r-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">
                        {cert.name}
                      </h4>
                      <p className="font-medium text-indigo-600 mb-2">
                        {cert.issuer}
                      </p>
                      {cert.credentialId && (
                        <p className="text-sm text-gray-500">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    <div className="text-sm text-gray-500 text-right ml-4">
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white">
            <h3 className="font-bold text-2xl mb-4">
              Aprendizaje Continuo & Evolución
            </h3>
            <p className="max-w-3xl mx-auto mb-6">
              Me enfoco en perfeccionar mis habilidades a través de cursos
              especializados y la investigación constante, incorporando
              estándares modernos de UX/UI y arquitectura de software en cada
              nuevo desafío.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Autoformación
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Mejores Prácticas
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Proyectos Personales
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Nuevas Tecnologías
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
