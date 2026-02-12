import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { X, Settings, CheckCircle2, Circle } from "lucide-react";

const ConsentSettings = ({ isOpen, onClose }) => {
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsentSettings");
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        setAnalytics(parsed.analytics);
        setAds(parsed.ads);
      } catch {
        console.error("Error al leer cookieConsentSettings");
      }
    }
  }, []); 

  useEffect(() => {
    if (isOpen) {
      const consent = Cookies.get("cookieConsentSettings");
      if (consent) {
        try {
          const parsed = JSON.parse(consent);
          setAnalytics(parsed.analytics);
          setAds(parsed.ads);
        } catch {
          console.error("Error al leer cookieConsentSettings");
        }
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    const settings = { analytics, ads };
    Cookies.set("cookieConsentSettings", JSON.stringify(settings), { expires: 365 });

    // Guardar flag general
    if (analytics || ads) {
      Cookies.set("cookieConsent", "accepted", { expires: 365 });
    } else {
      Cookies.set("cookieConsent", "rejected", { expires: 365 });
    }

    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4">
      {/* Modal Card */}
      <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-sertic-cyan/20 shadow-2xl w-full max-w-md overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-sertic-cyan/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-sertic-cyan/20 to-sertic-blue/20 backdrop-blur-sm rounded-lg">
              <Settings className="w-5 h-5 text-sertic-cyan" />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-light bg-clip-text text-transparent">
              Configuración de Cookies
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Analytics Toggle */}
          <label className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 hover:border-sertic-cyan/30 cursor-pointer transition-all group">
            <button
              onClick={() => setAnalytics(!analytics)}
              className="flex-shrink-0 relative"
              type="button"
            >
              {analytics ? (
                <CheckCircle2 className="w-6 h-6 text-sertic-cyan" />
              ) : (
                <Circle className="w-6 h-6 text-gray-500 group-hover:text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <p className="font-semibold text-white">Cookies Analíticas</p>
              <p className="text-sm text-gray-400 mt-1">
                Google Analytics y herramientas similares para entender cómo usas nuestro sitio
              </p>
            </div>
          </label>

          {/* Ads Toggle */}
          <label className="flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 hover:border-sertic-cyan/30 cursor-pointer transition-all group">
            <button
              onClick={() => setAds(!ads)}
              className="flex-shrink-0 relative"
              type="button"
            >
              {ads ? (
                <CheckCircle2 className="w-6 h-6 text-sertic-cyan" />
              ) : (
                <Circle className="w-6 h-6 text-gray-500 group-hover:text-gray-400" />
              )}
            </button>
            <div className="flex-1">
              <p className="font-semibold text-white">Cookies de Publicidad</p>
              <p className="text-sm text-gray-400 mt-1">
                Anuncios personalizados según tus intereses y comportamiento
              </p>
            </div>
          </label>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-sertic-cyan/10 flex gap-3 bg-slate-900/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg border border-sertic-cyan/30 hover:border-sertic-cyan/60 text-sertic-cyan hover:bg-sertic-cyan/10 font-semibold text-sm transition-all duration-300"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentSettings;
