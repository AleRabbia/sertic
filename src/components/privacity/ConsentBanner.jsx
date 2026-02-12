import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    Cookies.set("cookieConsent", choice, { expires: 365 }); // 1 año
    setVisible(false);

    if (choice === "accepted") {
      enableAnalytics();
    }
  };

  const handleCookiesClick = (e) => {
    e.preventDefault();
    navigate('/politica-cookies');
  };

  const enableAnalytics = () => {
  if (document.getElementById("ga-script")) return; // evitar duplicados

  try {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    script.async = true;
    script.id = "ga-script";
    

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  } catch (err) {
    console.info("ℹ️ No se pudo cargar Google Analytics:", err);
  }
};


  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-96 z-50 animate-fade-in">
      {/* Banner con diseño consistente: card, backdrop blur, gradient borders */}
      <div className="bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-sertic-cyan/20 shadow-2xl overflow-hidden">
        
        {/* Header con ícono e icono cerrar */}
        <div className="flex items-start justify-between p-6 border-b border-sertic-cyan/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-sertic-cyan/20 to-sertic-blue/20 backdrop-blur-sm rounded-lg">
              <Cookie className="w-5 h-5 text-sertic-cyan" />
            </div>
            <h3 className="font-bold text-white text-lg">Cookies</h3>
          </div>
          <button
            onClick={() => handleConsent("rejected")}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            Usamos cookies para mejorar tu experiencia y analizar el uso del sitio. Tus datos están protegidos y no los compartimos.
          </p>
          
          <a 
            href="/politica-cookies"
            onClick={handleCookiesClick}
            className="inline-flex text-sertic-cyan hover:text-sertic-light text-sm font-medium transition-colors underline"
          >
            Leer política de cookies →
          </a>
        </div>

        {/* Botones */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={() => handleConsent("rejected")}
            className="flex-1 px-4 py-3 rounded-lg border border-sertic-cyan/30 hover:border-sertic-cyan/60 text-sertic-cyan hover:bg-sertic-cyan/10 font-semibold text-sm transition-all duration-300"
          >
            Rechazar
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
