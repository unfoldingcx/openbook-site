import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  page: 'home' | 'about' | 'services' | 'technologies' | 'clients' | 'contact';
  path?: string;
}

const SEO = ({ page, path = '' }: SEOProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://www.opbo.com.br';
  const fullUrl = `${baseUrl}${path}`;

  const siteName = t('seo.siteName');
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);
  const fullTitle = page === 'home' ? siteName : `${title} | ${siteName}`;

  // Open Graph image
  const ogImage = 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200';

  // Locale mapping for Open Graph
  const getOgLocale = (lang: string) => {
    return lang === 'pt' ? 'pt_BR' : 'en_US';
  };

  const getAlternateLocale = (lang: string) => {
    return lang === 'pt' ? 'en_US' : 'pt_BR';
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="contabilidade, financeiro, assessoria contábil, BPO, gestão financeira, São Paulo, Brasil, accounting, financial advisory, Brazil" />
      <link rel="canonical" href={fullUrl} />
      <html lang={currentLang === 'pt' ? 'pt-BR' : 'en'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={getOgLocale(currentLang)} />
      <meta property="og:locale:alternate" content={getAlternateLocale(currentLang)} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
