import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
  availableLanguages: Array<{ code: string; name: string; flag: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const availableLanguages = useMemo(() => ([
    { code: 'en', name: 'English', flag: '🇺🇸' }, // Default language
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ]), []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  useEffect(() => {
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferred-language');
    const defaultLanguage = 'en';
    
    if (savedLanguage && availableLanguages.some(lang => lang.code === savedLanguage)) {
      if (i18n.language !== savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
      setCurrentLanguage(savedLanguage);
    } else {
      // Set default to English if no saved preference or invalid language
      if (i18n.language !== defaultLanguage) {
        i18n.changeLanguage(defaultLanguage);
      }
      setCurrentLanguage(defaultLanguage);
      localStorage.setItem('preferred-language', defaultLanguage);
    }

    // Listen for language changes
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
