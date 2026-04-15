import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

type PageType =
  | "home"
  | "about"
  | "services"
  | "training"
  | "technologies"
  | "clients"
  | "contact"
  | "accounting"
  | "financial"
  | "tax"
  | "payroll"
  | "content"
  | "articleTaxReform"
  | "articleSinief"
  | "coursePrecificacao"
  | "courseNr1Responsabilidade"
  | "courseNr1Psicossocial"
  | "courseTributosImobiliarios"
  | "articleReformaGestores"
  | "articleReformaTecnicos"
  | "articleCbenef";

interface SEOProps {
  page: PageType;
  path?: string;
}

// Hoisted constants and pure functions outside component (rendering-hoist-jsx, js-cache-function-results)
const BASE_URL = "https://www.opbo.com.br";
const OG_IMAGE = `${BASE_URL}/logo.png`;
const OG_IMAGE_WIDTH = "5333";
const OG_IMAGE_HEIGHT = "2308";

const LOCALE_MAP: Record<string, { og: string; alt: string }> = {
  pt: { og: "pt_BR", alt: "en_US" },
  en: { og: "en_US", alt: "pt_BR" },
};

const ARTICLE_PAGES = new Set<PageType>([
  "articleTaxReform",
  "articleSinief",
  "articleReformaGestores",
  "articleReformaTecnicos",
  "articleCbenef",
]);

// Wrapped with React.memo — page/path change infrequently (rerender-memo)
const SEO = memo(function SEO({ page, path = "" }: SEOProps) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const fullUrl = `${BASE_URL}${path}`;

  const siteName = t("seo.siteName");
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);
  const fullTitle = page === "home" ? siteName : `${title} | ${siteName}`;

  const locales = LOCALE_MAP[currentLang] ?? LOCALE_MAP.pt;
  const ogType = ARTICLE_PAGES.has(page) ? "article" : "website";
  const imageAlt = t("seo.imageAlt");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="contabilidade, financeiro, assessoria contábil, BPO, gestão financeira, São Paulo, Brasil, accounting, financial advisory, Brazil"
      />
      <link rel="canonical" href={fullUrl} />
      <html lang={currentLang === "pt" ? "pt-BR" : "en"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locales.og} />
      <meta property="og:locale:alternate" content={locales.alt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
});

export default SEO;
