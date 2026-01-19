import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslations from './pt.json';
import enTranslations from './en.json';

const savedLanguage = (() => {
  if (typeof window === 'undefined') return 'pt'
  try {
    return localStorage.getItem('language') || 'pt'
  } catch {
    // localStorage may be unavailable in incognito mode or when disabled
    return 'pt'
  }
})();

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslations },
      en: { translation: enTranslations }
    },
    lng: savedLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
