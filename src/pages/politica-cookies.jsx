// src/pages/PoliticaCookies.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";
import ConsentSettings from "../components/privacity/ConsentSettings";

const PoliticaCookies = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Botón Volver */}
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
              Política de Cookies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En SerTIC Tech Solutions te explicamos cómo usamos las cookies para
              mejorar tu experiencia y proteger tu privacidad.
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu
              dispositivo cuando visitas un sitio web. Sirven para recordar tus
              preferencias, recopilar estadísticas y mostrar contenido relevante.
            </p>

            <h2 className="text-2xl font-semibold">Tipos de cookies que usamos</h2>
            <ul className="list-disc pl-6">
              <li><strong>Esenciales:</strong> necesarias para el funcionamiento básico del sitio.</li>
              <li><strong>Analíticas:</strong> nos ayudan a entender cómo usas nuestro sitio (ej. Google Analytics).</li>
              <li><strong>Publicidad:</strong> permiten mostrar anuncios personalizados.</li>
            </ul>

            <h2 className="text-2xl font-semibold">Gestión del consentimiento</h2>
            <p>
              Al visitar nuestro sitio por primera vez, te pedimos tu consentimiento
              para el uso de cookies. Podés aceptarlas o rechazarlas en cualquier
              momento. Si querés cambiar tu decisión, podés usar el botón “Configurar cookies”.
            </p>

            <h2 className="text-2xl font-semibold">Cómo desactivar las cookies</h2>
            <p>
              Podés configurar tu navegador para bloquear o eliminar cookies. Tené en
              cuenta que algunas funciones del sitio podrían no estar disponibles si
              desactivás ciertas cookies.
            </p>

            {/* Botón Configurar */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowSettings(true)}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Configurar cookies
              </button>
            </div>
          </div>

          {/* Modal de configuración */}
          <ConsentSettings
            isOpen={showSettings}
            onClose={() => setShowSettings(false)}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
