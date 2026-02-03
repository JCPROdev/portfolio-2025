"use client";

import { BadgeCheck, Calendar, GraduationCap, MapPin } from "lucide-react";
import { CAREER_DATA } from "./data";

const EducationSection = () => {
  const { education } = CAREER_DATA;

  const formatDate = (dateStr: string) => {
    const [year] = dateStr.split("-");
    return year;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="px-5 md:px-8 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl mb-4 lg:text-5xl">
            Educación & <span className="text-indigo-600">Certificaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formación académica y certificaciones que respaldan mi expertise
            técnico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-indigo-600 mr-3" />
              Formación Académica
            </h3>

            {education.academic.map((edu) => (
              <div
                key={edu.id}
                className="p-6 bg-linear-to-r from-indigo-50 to-blue-50 rounded-lg"
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
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <BadgeCheck className="text-indigo-600 w-6 h-6 mr-3" />
              <h3 className="font-bold text-2xl">Certificaciones</h3>
            </div>

            <div className="space-y-4">
              {education.certifications.map((cert) => (
                <div
                  key={cert.id}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Learning Section */}
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-white">
            <h3 className="font-bold text-2xl mb-4">
              Compromiso con el aprendizaje
            </h3>
            <p className="max-w-3xl mx-auto mb-6">
              En el mundo de la tecnología, el aprendizaje nunca se detiene. Me
              mantengo actualizado con las últimas tendencias, asisto a
              conferencias, y contribuyo a la comunidad de desarrolladores.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Cursos Online
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Conferencias Tech
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Open Source
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Comunidades Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
