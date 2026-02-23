import React from "react";
import { Linkedin, Twitter, Github, Mail, MapPin } from "lucide-react";
import { Logo } from "../ui/Logo";
import { contactInfo } from "../../data/contact";
import { navigationLinks } from "../../data/navigation";
import { useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "../../data/services";

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-sertic-blue hover:to-sertic-cyan rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const QuickLink = ({ href, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (!href.startsWith("#")) {
      navigate(href);
      return;
    }

    const id = href.replace("#", "");

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 block py-1"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const socialLinks = [
    {
      href: contactInfo.social?.linkedin || "#",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: contactInfo.social?.twitter || "#",
      icon: Twitter,
      label: "Twitter",
    },
    { href: contactInfo.social?.github || "#", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="bg-black/50 py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <button
              onClick={() => {
                if (location.pathname !== "/") {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="focus:outline-none"
              aria-label="Ir al inicio"
            >
              <Logo />
            </button>

            <p className="text-gray-400 text-sm max-w-xs">
              Soluciones IT confiables para empresas. Transformamos la
              tecnología en el motor de tu crecimiento.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.label}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <QuickLink key={link.href} href={link.href}>
                  {link.label}
                </QuickLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <div className="space-y-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate(`/servicios/${service.slug}`)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 block py-1 text-left"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-sertic-cyan flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="w-4 h-4 text-sertic-cyan flex-shrink-0" />
                <a
                  href={`https://wa.me/${contactInfo.phone.replace(/[^\d]/g, "")}`}
                  className="hover:text-cyan-400 transition-colors text-sm"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-sertic-cyan flex-shrink-0 mt-1" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} SerTIC Tech Solutions. Todos los derechos
              reservados.
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <button
                onClick={() => navigate("/politica-privacidad")}
                className="hover:text-cyan-400 transition-colors"
              >
                Política de Privacidad
              </button>

              <button
                onClick={() => navigate("/terminos-servicios")}
                className="hover:text-cyan-400 transition-colors"
              >
                Términos de Servicio
              </button>

              <button
                onClick={() => navigate("/politica-cookies")}
                className="hover:text-cyan-400 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
