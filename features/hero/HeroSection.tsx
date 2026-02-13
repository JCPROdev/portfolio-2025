"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import ProfileImage from "@/public/images/profile_im.png";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-297.5 sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left px-5 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6">
                Hola, soy{" "}
                <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Jomar
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-indigo-500 mb-8 font-semibold text-xl lg:text-2xl"
            >
              Ingeniero de Sistemas{" "}
              <span className="text-white"> enfocado en </span> Desarrollo
              Frontend <span className="text-white">y </span> Arquitectura de
              Información
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg font-semibold mb-10 max-w-lg"
            >
              Creo interfaces web modernas y escalables, combinando la lógica de
              la ingeniería con la creatividad del diseño UI/UX.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-x-6"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-500 hover:bg-indigo-700 text-white px-8 py-4 text-lg sm:mb-0"
              >
                Ver mi trabajo
              </Button>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/jomar-camacho/"
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 text-white transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:camacho.jomar28@outlook.com"
                  aria-label="Email"
                  className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 text-white transition-colors duration-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-indigo-400">
                <Image
                  src={ProfileImage}
                  alt="Jomar Camacho - Profile"
                  fill
                  // Esta línea le dice a Next.js cómo optimizar el tamaño:
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating eements around the image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-indigo-700 w-14 h-14 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">JS</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-purple-800 w-14 h-14 rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">UI</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
