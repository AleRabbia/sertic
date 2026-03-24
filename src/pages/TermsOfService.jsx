import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
      {/* Navbar */}
      <Navigation />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Botón volver */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {t('serviceDetail.back')}
              </button>
            </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              {t('terms.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('terms.description')}
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                1. {t('terms.section1')}
              </h2>
              <p>
                SerTIC Tech Solutions brinda servicios profesionales de infraestructura, soporte remoto, 
                consultoría IT, ciberseguridad y staffing. Cada servicio se presta conforme a los acuerdos 
                específicos establecidos con cada cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                2. {t('terms.section2')}
              </h2>
              <p>
                El cliente debe proporcionar información y accesos necesarios para la correcta ejecución de 
                los servicios. SerTIC Tech Solutions aplicará las mejores prácticas técnicas y de seguridad, 
                sin asumir responsabilidad por fallos derivados de factores externos o de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                3. {t('terms.section3')}
              </h2>
                <p>
                    Toda la información compartida será tratada con estricta confidencialidad. 
                    SerTIC Tech Solutions protege los datos personales conforme a su Política de Privacidad 
                    y la legislación vigente.
                </p>
            </section>

            <p className="mt-8 text-sm opacity-80">
              {t('terms.lastUpdate')}
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
