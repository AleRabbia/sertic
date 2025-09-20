import React from 'react';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { contactInfo } from '../../data/contact';
import { navigationLinks } from '../../data/navigation';

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-cyan-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
    aria-label={`Seguir en ${label}`}
  >
    <Icon className="w-5 h-5" aria-hidden="true" />
  </a>
);

const QuickLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-cyan-400 focus:text-cyan-400 transition-colors duration-200 block py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      href: contactInfo.social?.linkedin || '#', 
      icon: Linkedin, 
      label: 'LinkedIn' 
    },
    { 
      href: contactInfo.social?.twitter || '#', 
      icon: Twitter, 
      label: 'Twitter' 
    },
    { 
      href: contactInfo.social?.github || '#', 
      icon: Github, 
      label: 'GitHub' 
    }
  ];

  return (
    <footer className="bg-black/50 py-12 border-t border-slate-800/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 text-sm max-w-xs">
              Soluciones IT confiables para empresas. Transformamos la tecnología en el motor de tu crecimiento.
            </p>
            <div className="flex space-x-3" role="list" aria-label="Redes sociales">
              {socialLinks.map((social) => (
                <div key={social.label} role="listitem">
                  <SocialLink 
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h3 className="text-white font-semibold mb-4 text-base">Enlaces Rápidos</h3>
            <ul className="space-y-2" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href} role="listitem">
                  <QuickLink href={link.href}>
                    {link.label}
                  </QuickLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Servicios">
            <h3 className="text-white font-semibold mb-4 text-base">Servicios</h3>
            <ul className="space-y-2" role="list">
              <li role="listitem">
                <QuickLink href="#servicios">Soporte Remoto</QuickLink>
              </li>
              <li role="listitem">
                <QuickLink href="#servicios">Infraestructura</QuickLink>
              </li>
              <li role="listitem">
                <QuickLink href="#servicios">Consultoría IT</QuickLink>
              </li>
              <li role="listitem">
                <QuickLink href="#servicios">Staffing</QuickLink>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Contacto</h3>
            <div className="space-y-3" role="list" aria-label="Información de contacto">
              <div className="flex items-center gap-3 text-gray-300" role="listitem">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-cyan-400 focus:text-cyan-400 transition-colors text-sm focus:outline-none focus:underline"
                  aria-label={`Enviar correo a ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300" role="listitem">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" aria-hidden="true" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-purple-400 focus:text-purple-400 transition-colors text-sm focus:outline-none focus:underline"
                  aria-label={`Llamar al ${contactInfo.phone}`}
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-300" role="listitem">
                <MapPin className="w-4 h-4 text-pink-400 flex-shrink-0 mt-1" aria-hidden="true" />
                <address className="text-sm not-italic">{contactInfo.location}</address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-sm">
              &copy; {currentYear} SerTIC Tech Solutions. Todos los derechos reservados.
            </div>
            <nav aria-label="Enlaces legales">
              <ul className="flex gap-6 text-sm text-gray-300" role="list">
                <li role="listitem">
                  <a 
                    href="#" 
                    className="hover:text-cyan-400 focus:text-cyan-400 transition-colors focus:outline-none focus:underline"
                    aria-label="Ver política de privacidad"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#" 
                    className="hover:text-cyan-400 focus:text-cyan-400 transition-colors focus:outline-none focus:underline"
                    aria-label="Ver términos de servicio"
                  >
                    Términos de Servicio
                  </a>
                </li>
                <li role="listitem">
                  <a 
                    href="#" 
                    className="hover:text-cyan-400 focus:text-cyan-400 transition-colors focus:outline-none focus:underline"
                    aria-label="Ver política de cookies"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;