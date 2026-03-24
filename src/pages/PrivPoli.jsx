import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navigation, Footer } from "../components/layout";
import { ArrowLeft } from "lucide-react";

const PrivPoli = () => {
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
              {t("privacyPolicy.title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("privacyPolicy.subtitle")}
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("privacyPolicy.section1.title")}
              </h2>
              <p>{t("privacyPolicy.section1.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("privacyPolicy.section2.title")}
              </h2>
              <p>{t("privacyPolicy.section2.text")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">
                {t("privacyPolicy.section3.title")}
              </h2>
              <p>
                {t("privacyPolicy.section3.textPrefix")}
                <a
                  href="mailto:info@sertic.cloud"
                  className="hover:text-cyan-400 font-semibold transition-colors text-sm"
                >
                  info@sertic.cloud
                </a>
                {t("privacyPolicy.section3.textSuffix")}
              </p>
            </section>

            <p className="mt-8 text-sm opacity-80">
              {t("privacyPolicy.lastUpdate")}
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