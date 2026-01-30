"use client";

import { CAREER_DATA } from "./data";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const { skills, experience, education } = CAREER_DATA;

  // Obtener categorías únicas
  const uniqueCategories = [
    ...new Set(skills?.items?.map((s) => s.category) ?? []),
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const filteredSkills = skills.items.filter(
    (skill) => skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Habilidades <span className="text-indigo-600">Técnicas</span>
          </h1>
          <p className="text-xl text-gray-600">
            {" "}
            Dominio de tecnologías modernas para crear soluciones digitales
            innovadoras
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {filteredSkills
              .slice(0, Math.ceil(filteredSkills.length / 2))
              .map((skill, index) => (
                <div className="mb-6" key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium text-gray-800">
                      {skill.name}
                    </h1>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-linear-to-r from-indigo-500 to-purple-600 h-2 rounded-full progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className="space-y-6">
            {filteredSkills
              .slice(Math.ceil(filteredSkills.length / 2))
              .map((skill) => (
                <div className="mb-6" key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="text-lg font-medium text-gray-800">
                      {skill.name}
                    </h1>
                    <span className="text-sm text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-linear-to-r from-indigo-500 to-purple-600 h-2 rounded-full progress-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Additional Info*/}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
