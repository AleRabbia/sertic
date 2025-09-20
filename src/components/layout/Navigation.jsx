import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import Button from '../ui/Button';
import QuoteModal from '../ui/QuoteModal';
import { useNavigate } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navigationLinks } from '../../data/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Focus management para accesibilidad
      element.focus({ preventScroll: true });
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInicioClick = () => {
    setIsMenuOpen(false);
    navigate('/'); // navega a Home desde cualquier página
    // Opcional: scroll al top
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Focus trap en menú móvil
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" role="menubar">
              {navigationLinks.map((link) => {
                if (link.label === 'Inicio') {
                  return (
                    <button
                      key={link.href}
                      onClick={handleInicioClick}
                      className="hover:text-cyan-400 focus:text-cyan-400 focus:bg-cyan-400/10 transition-all duration-200 focus:outline-none rounded px-2 py-1"
                      role="menuitem"
                      aria-label={`Ir a ${link.label}`}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-cyan-400 focus:text-cyan-400 focus:bg-cyan-400/10 transition-all duration-200 focus:outline-none rounded px-2 py-1"
                    role="menuitem"
                    aria-label={`Ir a sección ${link.label}`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button 
                size="sm" 
                onClick={handleOpenModal}
                aria-label="Abrir modal de cotización"
              >
                Cotización
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              className="md:hidden p-2 hover:bg-white/10 focus:bg-white/20 rounded-lg transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6" aria-hidden="true" /> : 
                <Menu className="w-6 h-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            role="menu"
            aria-label="Menú de navegación móvil"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationLinks.map((link, index) => {
                if (link.label === 'Inicio') {
                  return (
                    <button
                      key={link.href}
                      onClick={handleInicioClick}
                      className="block w-full text-left hover:text-cyan-400 focus:text-cyan-400 focus:bg-cyan-400/10 transition-all duration-200 focus:outline-none rounded px-3 py-2"
                      role="menuitem"
                      aria-label={`Ir a ${link.label}`}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left hover:text-cyan-400 focus:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded px-3 py-2"
                    role="menuitem"
                    aria-label={`Ir a sección ${link.label}`}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button 
                className="w-full mt-4" 
                onClick={handleOpenModal}
                aria-label="Abrir modal de cotización"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                Cotización
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Modal de Cotización */}
      <QuoteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navigation;