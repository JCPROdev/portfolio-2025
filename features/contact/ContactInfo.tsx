import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Linkedin, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8 min-w-0">
      <Card className="border-gray-200">
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
                href=""
                className="bg-indigo-600 p-3 rounded-lg text-white hover:bg-indigo-700 transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href=""
                className="bg-gray-600 p-3 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                {" "}
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-linear-to-br from-indigo-50 to-purple-50 border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">¿Por que trabajar conmigo?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />
              Respuesta rápida (menos de 24 horas)
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />{" "}
              Comunicación clara y constante
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />
              Código limpio y bien documentado
            </li>
            <li className="flex items-start">
              {" "}
              <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0 mr-2" />{" "}
              Soporte post-entrega incluido
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
