import { useTranslation } from 'react-i18next';

/**
 * Custom hook for easier translation usage
 * Provides common translation functions with better TypeScript support
 */
export const useTranslations = () => {
  const { t, i18n } = useTranslation();

  return {
    t,
    i18n,
    // Helper function for pluralization
    tPlural: (key: string, count: number, options?: any) => {
      return t(key, { count, ...options });
    },
    // Helper function for interpolation
    tInterpolate: (key: string, values: Record<string, any>) => {
      return t(key, values);
    },
    // Get current language
    currentLanguage: i18n.language,
    // Check if language is RTL
    isRTL: ['ar', 'he', 'fa'].includes(i18n.language),
  };
};
