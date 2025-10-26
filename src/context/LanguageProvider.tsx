import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';
import { DEFAULT_LANGUAGE } from '../i18n/langagues';
import type { LanguageCode } from '../i18n/translations';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Récupérer la langue depuis localStorage
    const saved = localStorage.getItem('language') as LanguageCode | null;
    
    // Ou utiliser la langue du navigateur
    if (!saved) {
      const browserLang = navigator.language.split('-')[0];
      if (['fr', 'en', 'es', 'ar'].includes(browserLang)) {
        return browserLang as LanguageCode;
      }
    }
    
    return saved ?? DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem('language', language);

    document.documentElement.setAttribute('lang', language);
    
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};