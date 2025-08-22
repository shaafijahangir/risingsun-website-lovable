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
          variant="outline" 
          size="sm"
          className="flex items-center gap-2 h-9 px-3"
          aria-label="Change language"
        >
          <span className="text-base">
            {currentLanguage?.flag}
          </span>
          <span className="font-medium text-sm">
            {currentLanguage?.name}
          </span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[140px] z-50"
        sideOffset={4}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setLocale(language.code)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-base">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;