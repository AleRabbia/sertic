import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar */}
      <Navigation />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Botón volver */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Términos de Servicio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bienvenido a 
              <a className="font-semibold"> SerTIC Tech Solutions</a>
              . Al acceder o utilizar nuestros
              servicios, aceptás los siguientes términos.
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                1. Alcance de los servicios
              </h2>
              <p>
                SerTIC Tech Solutions brinda servicios profesionales de infraestructura, soporte remoto, 
                consultoría IT, ciberseguridad y staffing. Cada servicio se presta conforme a los acuerdos 
                específicos establecidos con cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                2. Responsabilidades
              </h2>
              <p>
                El cliente debe proporcionar información y accesos necesarios para la correcta ejecución de 
                los servicios. SerTIC Tech Solutions aplicará las mejores prácticas técnicas y de seguridad, 
                sin asumir responsabilidad por fallos derivados de factores externos o de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                3. Confidencialidad y protección de datos
              </h2>
                <p>
                    Toda la información compartida será tratada con estricta confidencialidad. 
                    SerTIC Tech Solutions protege los datos personales conforme a su Política de Privacidad 
                    y la legislación vigente.
                </p>
            </section>

            <p className="mt-8 text-sm opacity-80">
              Última actualización: Octubre 2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
