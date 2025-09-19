import React, { useState } from 'react';
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

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => {
                if (link.label === 'Inicio') {
                  return (
                    <button
                      key={link.href}
                      onClick={handleInicioClick}
                      className="hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button size="sm" onClick={handleOpenModal}>
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
              {navigationLinks.map((link) => {
                if (link.label === 'Inicio') {
                  return (
                    <button
                      key={link.href}
                      onClick={handleInicioClick}
                      className="block w-full text-left hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                );
              })}
              <Button className="w-full" onClick={handleOpenModal}>
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
