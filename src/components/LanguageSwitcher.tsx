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
  const { locale, setLocale } = useI18n();

  const languages = [
    {
      code: 'en' as Locale,
      name: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'bn' as Locale,
      name: 'বাংলা',
      flag: '🇧🇩'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center gap-1.5 h-9 px-2 sm:px-3 min-w-[44px] glass-morphism border border-white/20 hover:bg-white/20 hover:shadow-3d-md transition-all duration-300 hover-lift text-shadow-sm"
          aria-label="Change language"
        >
          <span className="text-base animate-float">
            {currentLanguage?.flag}
          </span>
          <span className="font-medium text-sm hidden sm:inline">
            {currentLanguage?.name}
          </span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[140px] z-50 glass-morphism shadow-3d-lg border border-white/20"
        sideOffset={4}
      >
        {languages.map((language, index) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code)}
            className="flex items-center gap-2 cursor-pointer hover:bg-white/10 transition-all duration-200 hover-lift rounded-md mx-1 stagger-fade"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-base">{language.flag}</span>
            <span className="font-medium text-shadow-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;