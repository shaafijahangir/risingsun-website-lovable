import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n/context';
import { LOCALES } from '@/i18n/types';

interface LocalizedMetaProps {
  titleKey?: string;
  descriptionKey?: string;
  title?: string;
  description?: string;
  path?: string;
}

export const LocalizedMeta: React.FC<LocalizedMetaProps> = ({
  titleKey = 'meta.title',
  descriptionKey = 'meta.description',
  title,
  description,
  path = ''
}) => {
  const { t, locale } = useI18n();

  const metaTitle = title || t(titleKey);
  const metaDescription = description || t(descriptionKey);
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}/${locale}${path}`;

  // Generate alternate URLs for hreflang
  const alternateUrls = Object.keys(LOCALES).map(loc => ({
    locale: loc,
    url: `${baseUrl}/${loc}${path}`
  }));

  return (
    <Helmet>
      <html lang={locale} dir={LOCALES[locale].dir} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={locale === 'bn' ? 'bn_BD' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang alternates */}
      {alternateUrls.map(({ locale: altLocale, url }) => (
        <link
          key={altLocale}
          rel="alternate"
          hrefLang={altLocale === 'bn' ? 'bn-BD' : 'en-US'}
          href={url}
        />
      ))}
      
      {/* x-default for search engines */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${path}`} />
    </Helmet>
  );
};