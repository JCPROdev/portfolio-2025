import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Linkedin, Mail, MapPin } from "lucide-react";

import { motion } from "motion/react";

const ContactInfo = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-8 min-w-0">
      <Card className="border-gray-200 hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            Información de contacto
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex space-x-4 items-center">
            <div className="bg-indigo-100 rounded-lg p-3">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>

            <div>
              <h2 className="font-semibold">Email</h2>
              <a
                href="mailto:camacho.jomar28@outlook.com"
                className="text-gray-600 hover:text-indigo-700"
              >
                camacho.jomar28@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-indigo-100 rounded-lg p-3">
              <MapPin className="w-6 h-6 text-indigo-600" />
            </div>

            <div>
              <h2 className="font-semibold">Ubcación</h2>
              <p className="text-gray-600">Madrid, España</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="font-semibold mb-4">Sígueme</h2>

            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/jomar-camacho/"
                className="bg-indigo-600 p-3 rounded-lg text-white hover:bg-indigo-700 transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:camacho.jomar28@outlook.com"
                className="bg-gray-600 p-3 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {" "}
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-linear-to-br from-indigo-50 to-purple-50 border-gray-200 hover:scale-105 transition-transform duration-300">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">¿Qué aporto al equipo?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />
              Traducción fiel de diseños (Figma) a código funcional
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />{" "}
              Enfoque lógico y estructurado de ingeniería
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />
              Adaptabilidad rápida a nuevos stacks tecnológicos
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />{" "}
              Atención al detalle visual y experiencia de usuario
            </li>
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;
