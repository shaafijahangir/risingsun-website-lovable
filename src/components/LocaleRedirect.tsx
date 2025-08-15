import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Locale, DEFAULT_LOCALE, LOCALE_COOKIE_NAME } from '@/i18n/types';

// Detect browser locale preference
const getBrowserLocale = (): Locale => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  
  const browserLang = navigator.language.split('-')[0];
  return (browserLang === 'bn' ? 'bn' : 'en') as Locale;
};

// Extract locale from pathname
export const getLocaleFromPath = (pathname: string): Locale | null => {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment === 'en' || firstSegment === 'bn') {
    return firstSegment as Locale;
  }
  
  return null;
};

// Get preferred locale from cookie or browser
const getPreferredLocale = (): Locale => {
  const cookieLocale = Cookies.get(LOCALE_COOKIE_NAME) as Locale;
  if (cookieLocale && (cookieLocale === 'en' || cookieLocale === 'bn')) {
    return cookieLocale;
  }
  
  return getBrowserLocale();
};

export const LocaleRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentLocale = getLocaleFromPath(location.pathname);
    
    // If no locale in URL, redirect to preferred locale
    if (!currentLocale) {
      const preferredLocale = getPreferredLocale();
      const newPath = `/${preferredLocale}${location.pathname}${location.search}`;
      navigate(newPath, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  return null;
};