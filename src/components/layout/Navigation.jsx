import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import Button from '../ui/Button';
import QuoteModal from '../ui/QuoteModal';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navigationLinks } from '../../data/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScrollPosition();

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      // Si no estás en home, navegá a home y hacé scroll después de cargar
      navigate("/");

      // Esperá un momento a que el DOM cargue las secciones
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Si ya estás en home, solo hacé scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };


  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
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
          }}className="focus:outline-none"
            aria-label="Ir al inicio"
          >
            <Logo />
          </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                size="sm"
                onClick={handleOpenModal}
              >
                Cotización
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                className="w-full"
                onClick={handleOpenModal}
              >
                Cotización
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Modal de Cotización */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Navigation;