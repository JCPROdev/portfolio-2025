"use client";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Jomar <span className="text-indigo-400">.dev</span>
          </h3>
          <p className="text-gray-300 mb-6 mx-auto">
            Creando experiencias digitales excepcionales con pasión y dedicación
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            <a href="#about" className="text-gray-300 hover:text-white">
              Sobre Mí
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white">
              Portafolio
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white">
              Contacto
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 flex items-center justify-center">
              Hecho por Jomar Camacho
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
