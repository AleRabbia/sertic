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
              Bienvenido a SerTIC Tech Solutions. Al acceder o utilizar nuestros
              servicios, aceptás los siguientes términos.
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                1. Uso del servicio
              </h2>
              <p>
                El uso de nuestros servicios implica aceptar las condiciones,
                límites y responsabilidades establecidas por SerTIC Tech
                Solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                2. Propiedad intelectual
              </h2>
              <p>
                El contenido, marcas y software son propiedad de SerTIC Tech
                Solutions. No está permitido su uso sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                3. Limitación de responsabilidad
              </h2>
              <p>
                SerTIC Tech Solutions no se hace responsable por pérdidas
                indirectas, interrupciones del servicio o daños derivados del
                uso del sitio o sus servicios.
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
