"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { CAREER_DATA } from "./data";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const { skills } = CAREER_DATA;

  // Obtener categorías únicas
  const uniqueCategories = [
    ...new Set(skills?.items?.map((s) => s.category) ?? []),
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const filteredSkills = skills.items.filter(
    (skill) => skill.category === activeCategory,
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Habilidades <span className="text-indigo-600">Técnicas</span>
          </h1>
          <p className="text-xl text-gray-600">
            {" "}
            Dominio de tecnologías modernas para crear soluciones digitales
            innovadoras
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-indigo-600 text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            {filteredSkills
              .slice(0, Math.ceil(filteredSkills.length / 2))
              .map((skill) => (
                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                  key={skill.name}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium text-gray-800">
                      {skill.name}
                    </h1>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-linear-to-r from-indigo-500 to-purple-600 h-2 rounded-full progress-fill"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
          <div className="space-y-6">
            {filteredSkills
              .slice(Math.ceil(filteredSkills.length / 2))
              .map((skill) => (
                <motion.div
                  variants={itemVariants}
                  className="mb-6"
                  key={skill.name}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium text-gray-800">
                      {skill.name}
                    </h1>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-linear-to-r from-indigo-500 to-purple-600 h-2 rounded-full progress-fill"
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.5 }}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Additional Info*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Siempre Aprendiendo</h1>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              La tecnología evoluciona constantemente, y yo también. Me mantengo
              actualizado con las últimas tendencias y mejores prácticas del
              desarrollo web y móvil.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-gray-200">Aprendizaje Continuo</Badge>
              <Badge className="bg-gray-200">Mejores Prácticas</Badge>
              <Badge className="bg-gray-200">Clean Code</Badge>
              <Badge className="bg-gray-200">Performance</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
