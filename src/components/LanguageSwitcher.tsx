import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useI18n, Locale } from '@/i18n/context';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale, t } = useI18n();

  const languages = [
    {
      code: 'en' as Locale,
      name: 'English',
      flag: '🇺🇸',
      nativeName: 'English'
    },
    {
      code: 'bn' as Locale,
      name: 'বাংলা',
      flag: '🇧🇩',
      nativeName: 'বাংলা'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center gap-2 hover:bg-accent transition-all duration-200"
          aria-label={t('language.switchTo')}
        >
          <span className="text-lg transition-transform duration-300 hover:scale-110">
            {currentLanguage?.flag}
          </span>
          <span className="hidden sm:inline-block font-medium">
            {currentLanguage?.nativeName}
          </span>
          <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[160px] bg-background/95 backdrop-blur-sm border shadow-lg"
        sideOffset={8}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code)}
            className={`flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 hover:bg-accent focus:bg-accent ${
              locale === language.code ? 'bg-accent/50' : ''
            }`}
          >
            <span className="text-lg transition-transform duration-200 hover:scale-110">
              {language.flag}
            </span>
            <span className="font-medium">{language.nativeName}</span>
            {locale === language.code && (
              <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;