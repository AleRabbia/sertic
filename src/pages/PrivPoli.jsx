import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";

const PrivPoli = () => {

  
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
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En
              <a className="font-semibold"> SerTIC Tech Solutions </a> 
              valoramos tu privacidad. Esta política describe 
              cómo recopilamos, usamos y protegemos tus datos personales.
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                1. Información que recopilamos
              </h2>
              <p>
                Podemos recopilar datos de contacto, uso de servicios, 
                formularios web, etc.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                2. Uso de la información
              </h2>
              <p>
                Utilizamos los datos para prestar nuestros servicios, 
                mejorar procesos y comunicarnos con vos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                3. Tus derechos
              </h2>
              <p>
                Podés solicitar acceso, corrección o 
                eliminación de tus datos escribiendo a 
                <a href={`mailto:info@sertic.cloud`}
                className="hover:text-cyan-400 font-semibold transition-colors text-sm"> info@sertic.cloud</a>
                .
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

export default PrivPoli; 