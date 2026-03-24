import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'es', label: t('language.es'), flag: '🇪🇸' },
    { code: 'en', label: t('language.en'), flag: '🇺🇸' }
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-md border border-slate-600 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-500 transition-colors duration-200"
        aria-label={t('language.titulo')}
        title={t('language.titulo')}
      >
        <Globe className="w-4 h-4" />
        <span className="text-xs font-medium tracking-wide uppercase">{i18n.language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-md shadow-lg z-50 overflow-hidden">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-3 py-2 text-left flex items-center gap-2 transition-all text-sm ${
                i18n.language === lang.code
                  ? 'bg-slate-800 text-cyan-200 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {i18n.language === lang.code && (
                <span className="ml-auto text-cyan-300">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
