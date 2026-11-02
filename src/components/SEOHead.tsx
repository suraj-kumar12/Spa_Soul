import React, { useEffect } from 'react';
import { SITE_URL, DEFAULT_OG_IMAGE, BreadcrumbEntry, getBreadcrumbSchema } from '../utils/seoSchemas';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Array<Record<string, any>>;
  breadcrumbs?: BreadcrumbEntry[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords,
  ogType = 'website',
  ogImage,
  noindex = false,
  schema,
  breadcrumbs,
}) => {
  const cleanPath = canonicalPath === '/' ? '' : canonicalPath.replace(/\/+$/, '');
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const fullOgImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`
    : DEFAULT_OG_IMAGE;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    if (keywords) {
      setMeta('name', 'keywords', keywords);
    }
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 4. OpenGraph Tags
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:site_name', 'Spa Soul');
    setMeta('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);

    // 6. JSON-LD Structured Data
    const combinedSchemas: Array<Record<string, any>> = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      combinedSchemas.push(getBreadcrumbSchema(breadcrumbs));
    }

    if (schema) {
      if (Array.isArray(schema)) {
        combinedSchemas.push(...schema);
      } else {
        combinedSchemas.push(schema);
      }
    }

    const SCRIPT_ID = 'spa-soul-page-schema';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (combinedSchemas.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(
        combinedSchemas.length === 1 ? combinedSchemas[0] : { '@context': 'https://schema.org', '@graph': combinedSchemas }
      );
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up injected page-specific schema on unmount
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalUrl, keywords, ogType, fullOgImage, noindex, schema, breadcrumbs]);

  // React 19 native document metadata rendering for initial render & SSR/prerender compatibility
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Spa Soul" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </>
  );
};
