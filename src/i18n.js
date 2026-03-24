import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

const resources = {
  es: {
    translation: esCommon
  },
  en: {
    translation: enCommon
  }
};

const savedLanguage = localStorage.getItem('language') || 'es';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
