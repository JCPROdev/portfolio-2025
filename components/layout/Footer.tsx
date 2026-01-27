"use client";

import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Jomar <span className="text-indigo-400">.dev</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Creando experiencias digitales excepcionales con pasión y
              dedicación
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sobre Mí
            </a>
            <a
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Portafolio
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contacto
            </a>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 flex items-center justify-center">
              Hecho por Jomar Camacho
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Todos los derechos reservados
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
