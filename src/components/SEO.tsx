import { Helmet } from "react-helmet-async";
import { useLocaleStore } from "@/store/useLocaleStore";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SITE_URL = "https://prism-mlb.top";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const locale = useLocaleStore((s) => s.locale);
  const fullCanonical = canonical ? (canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`) : SITE_URL;
  const fullOgImage = ogImage ? (ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`) : DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <html lang={locale === "zh" ? "zh-CN" : "en"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={locale === "zh" ? "zh_CN" : "en_US"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
}
