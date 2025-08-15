import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { Locale, DEFAULT_LOCALE, LOCALE_COOKIE_NAME, LOCALES } from './types';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string>) => string;
  formatDate: (date: Date) => string;
  formatNumber: (number: number) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ 
  children, 
  initialLocale 
}) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale || DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations for current locale
  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      try {
        const response = await import(`./translations/${locale}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        // Fallback to English if translation fails
        if (locale !== DEFAULT_LOCALE) {
          const fallback = await import(`./translations/${DEFAULT_LOCALE}.json`);
          setTranslations(fallback.default);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  // Set locale and persist to cookie
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    Cookies.set(LOCALE_COOKIE_NAME, newLocale, { expires: 365 });
    
    // Update document attributes
    document.documentElement.lang = newLocale;
    document.documentElement.dir = LOCALES[newLocale].dir;
  };

  // Translation function with nested key support
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
        return key; // Return key as fallback
      }
    }
    
    let result = typeof value === 'string' ? value : key;
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, replacement]) => {
        result = result.replace(new RegExp(`{{${param}}}`, 'g'), replacement);
      });
    }
    
    return result;
  };

  // Format date according to locale
  const formatDate = (date: Date): string => {
    const config = LOCALES[locale];
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  };

  // Format number according to locale
  const formatNumber = (number: number): string => {
    const config = LOCALES[locale];
    return new Intl.NumberFormat(config.numberLocale).format(number);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
        formatDate,
        formatNumber,
        isLoading
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};