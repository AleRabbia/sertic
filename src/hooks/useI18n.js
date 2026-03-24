import { useTranslation } from 'react-i18next';

/**
 * Hook personalizado para usar i18n en toda la app
 * Proporciona acceso a funciones de traducción con autocompletado
 */
export const useI18n = () => {
  const { t, i18n } = useTranslation();

  return {
    // Función de traducción
    t,
    // Objeto con información del idioma actual
    currentLanguage: i18n.language,
    // Función para cambiar idioma
    changeLanguage: (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('language', lng);
    },
    // Lista de idiomas disponibles
    availableLanguages: i18n.options.resources ? Object.keys(i18n.options.resources) : []
  };
};
