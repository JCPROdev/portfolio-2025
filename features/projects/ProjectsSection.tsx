"use client";

import { Filter } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { PROJECTS_DATA, PROJECT_CATEGORIES } from "./data";
import ProjectCard from "./components/ProjectCard";
import { Button } from "@/components/ui/button";

import { AnimatePresence, motion } from "motion/react";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  {
    /* Animations */
  }
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mi <span className="text-indigo-600">Portafolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo frontend, diseño UI/UX y aplicaciones móviles
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-gray-400 mr-3 self-center" />
          {PROJECT_CATEGORIES.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <ProjectCard key={project.id} project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
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
              <Button
                size={"lg"}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-indigo-600 text-white hover:cursor-pointer"
              >
                Hablemos
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={() =>
                  window.open("https://github.com/JCPROdev", "_blank")
                }
                className="hover:cursor-pointer"
              >
                Ver Github
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
