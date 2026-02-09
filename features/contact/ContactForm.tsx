import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const ContactForm = () => {
  return (
    <div className="min-w-0">
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Envíame un Mensaje
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre *
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="pl-4 bg-white border-gray-300 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-4 bg-white border-gray-300 focus-visible:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Asunto
              </label>
              <Input
                id="subject"
                type="text"
                placeholder="¿De qué quieres hablar?"
                className="bg-white border-gray-300 focus-visible:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto, necesidades, timeline, etc..."
                className="bg-white border-gray-300 focus-visible:ring-indigo-500"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-indigo-600 text-white"
            >
              <div className="flex items-center">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensaje
              </div>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
