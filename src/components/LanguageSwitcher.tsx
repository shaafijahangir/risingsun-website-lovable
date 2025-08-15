import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { useI18n } from '@/i18n/context';
import { Locale, LOCALES } from '@/i18n/types';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'desktop',
  className = ''
}) => {
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocaleConfig = LOCALES[locale];

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    
    // Update URL to include new locale while preserving the rest of the path
    const currentPath = location.pathname;
    const currentSearch = location.search;
    
    // Remove current locale from path if it exists
    const pathWithoutLocale = currentPath.replace(/^\/(en|bn)/, '') || '/';
    
    // Navigate to new localized path
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    navigate(newPath + currentSearch, { replace: true });
    
    setIsOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="text-sm font-medium text-muted-foreground">
          {t('language.changeLanguage')}
        </div>
        {Object.values(LOCALES).map((localeConfig) => (
          <Button
            key={localeConfig.code}
            variant={locale === localeConfig.code ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => handleLocaleChange(localeConfig.code)}
            aria-label={`${t('language.switchTo')} ${localeConfig.nativeName}`}
          >
            <span className="mr-2">{localeConfig.flag}</span>
            {localeConfig.nativeName}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`gap-2 ${className}`}
          aria-label={t('language.changeLanguage')}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLocaleConfig.flag}</span>
          <span className="hidden md:inline">{currentLocaleConfig.nativeName}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.values(LOCALES).map((localeConfig) => (
          <DropdownMenuItem
            key={localeConfig.code}
            onClick={() => handleLocaleChange(localeConfig.code)}
            className={`flex items-center gap-2 ${
              locale === localeConfig.code ? 'bg-accent' : ''
            }`}
          >
            <span>{localeConfig.flag}</span>
            <span>{localeConfig.nativeName}</span>
            {locale === localeConfig.code && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};