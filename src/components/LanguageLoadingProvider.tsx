import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Component to show loading state during language switching
 * This helps provide better UX when switching languages
 */
export const LanguageLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleLanguageChangeStart = () => {
      setIsLoading(true);
    };

    const handleLanguageChangeComplete = () => {
      setIsLoading(false);
    };

    i18n.on('languageChanged', handleLanguageChangeComplete);
    
    // Listen for language change start (if available)
    if (i18n.on) {
      i18n.on('languageChanging', handleLanguageChangeStart);
    }

    return () => {
      i18n.off('languageChanged', handleLanguageChangeComplete);
      if (i18n.off) {
        i18n.off('languageChanging', handleLanguageChangeStart);
      }
    };
  }, [i18n]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">Đang chuyển đổi ngôn ngữ...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
