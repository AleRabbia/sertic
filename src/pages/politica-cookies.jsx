import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";
import ConsentSettings from "../components/privacity/ConsentSettings";

const PoliticaCookies = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
      <Navigation />

      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Volver */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition group"
                          >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t("common.back")}
                          </button>
                        </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              {t("cookiePolicy.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("cookiePolicy.subtitle")}
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold">{t("cookiePolicy.whatAreCookies.title")}</h2>
            <p>{t("cookiePolicy.whatAreCookies.text")}</p>

            <h2 className="text-2xl font-semibold">{t("cookiePolicy.cookieTypes.title")}</h2>
            <ul className="list-disc pl-6">
              <li><strong>{t("cookiePolicy.cookieTypes.essentialLabel")}</strong> {t("cookiePolicy.cookieTypes.essentialText")}</li>
              <li><strong>{t("cookiePolicy.cookieTypes.analyticsLabel")}</strong> {t("cookiePolicy.cookieTypes.analyticsText")}</li>
              <li><strong>{t("cookiePolicy.cookieTypes.advertisingLabel")}</strong> {t("cookiePolicy.cookieTypes.advertisingText")}</li>
            </ul>

            <h2 className="text-2xl font-semibold">{t("cookiePolicy.consentManagement.title")}</h2>
            <p>{t("cookiePolicy.consentManagement.text")}</p>

            <h2 className="text-2xl font-semibold">{t("cookiePolicy.disableCookies.title")}</h2>
            <p>{t("cookiePolicy.disableCookies.text")}</p>

            {/* Configurar */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowSettings(true)}
                className="bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                {t("cookiePolicy.configureButton")}
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
