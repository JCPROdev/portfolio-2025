"use client";

import { Filter } from "lucide-react";
import { useState } from "react";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "./data";
import ProjectCard from "./components/ProjectCard";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mi <span className="text-indigo-600">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo frontend, diseño UI/UX y aplicaciones móviles
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400 mr-3 self-center" />
          {PROJECT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              ¿Te interesa mi trabajo?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Estos son solo algunos ejemplos de mis proyectos. Si quieres ver
              más o discutir cómo puedo ayudar con tu próximo proyecto, no dudes
              en contactarme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size={"lg"} className="bg-indigo-600 text-white">
                Empezar Proyecto
              </Button>
              <Button variant={"outline"} size={"lg"}>
                Ver más trabajos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
