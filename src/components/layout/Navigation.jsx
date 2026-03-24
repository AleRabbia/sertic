import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/Logo';
import Button from '../ui/Button';
import QuoteModal from '../ui/QuoteModal';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navigationLinks } from '../../data/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href, isPage) => {
    setIsMenuOpen(false);
    
    if (isPage) {
    navigate(href);
    return;
  }

    if (location.pathname !== "/") {
      navigate("/");
      
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      
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
            <div className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isPage)}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {t(link.labelKey)}
                </button>
              ))}
              <LanguageSwitcher />
              <Button 
                size="sm"
                onClick={handleOpenModal}
              >
                {t('nav.cotizacion')}
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
                  onClick={() => handleNavClick(link.href,link.isPage)}
                  className="block w-full text-left hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="py-4 border-t border-cyan-400/20">
                <LanguageSwitcher />
              </div>
              <Button 
                className="w-full"
                onClick={handleOpenModal}
              >
                {t('nav.cotizacion')}
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