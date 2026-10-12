import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo, company, contact } from '../config/factory.config';
import { useLocale, pick } from './i18n';
import type { Locale } from './i18n';

/** Placeholder OG/Twitter image. Replace with a real 1200×630 asset. */
const OG_IMAGE = '/assets/img/og-placeholder.png';

interface PageMeta {
  title: string;
  description?: string;
  /** Route path used to build the canonical URL (defaults to current pathname) */
  path?: string;
  /** JSON-LD graph to append for this page */
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function setJsonLd(data: Record<string, unknown>) {
  const id = 'page-jsonld';
  document.getElementById(id)?.remove();
  const el = document.createElement('script');
  el.id = id;
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
}

function setOgImage(url: string) {
  setMeta('property', 'og:image', url);
  setMeta('property', 'og:image:width', '1200');
  setMeta('property', 'og:image:height', '630');
  setMeta('name', 'twitter:image', url);
}

function setHreflang(path: string) {
  const enUrl = `${seo.siteUrl}${path}`;
  const zhUrl = `${seo.siteUrl}/zh${path === '/' ? '' : path}`;
  const langs = [
    { rel: 'alternate', hreflang: 'x-default', href: enUrl },
    { rel: 'alternate', hreflang: 'en', href: enUrl },
    { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl },
  ];
  document.head.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove());
  langs.forEach((l) => {
    const el = document.createElement('link');
    el.rel = l.rel;
    el.hreflang = l.hreflang;
    el.href = l.href;
    el.setAttribute('data-hreflang', 'true');
    document.head.appendChild(el);
  });
}

/** Per-route document head management for the SPA. */
export function usePageMeta({ title, description, path, jsonLd }: PageMeta) {
  const location = useLocation();
  const { locale } = useLocale();
  const canonicalPath = path ?? location.pathname;

  useEffect(() => {
    const fullTitle = title.includes(seo.siteName) ? title : seo.titleTemplate.replace('%s', title);
    const desc = description ?? seo.defaultDescription;

    document.title = fullTitle;
    setMeta('name', 'description', desc);

    const url = `${seo.siteUrl}${canonicalPath}`;
    setCanonical(url);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', seo.siteName);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:locale', locale === 'zh' ? 'zh_CN' : 'en_US');
    setOgImage(`${seo.siteUrl}${OG_IMAGE}`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);

    setHreflang(canonicalPath);

    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      document.getElementById('page-jsonld')?.remove();
    }
  }, [title, description, canonicalPath, jsonLd, locale]);
}

/* ---------- Shared JSON-LD builders ---------- */

export function organizationJsonLd(locale: Locale = 'en'): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: pick(company.legalName, locale),
    url: seo.siteUrl,
    description: seo.defaultDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      email: contact.email,
      telephone: contact.phone,
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese'],
    },
  };
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    url: seo.siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${seo.siteUrl}/products?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function homeJsonLd(locale: Locale = 'en'): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationJsonLd(locale), websiteJsonLd()],
  };
}

export function productJsonLd(params: {
  name: string;
  sku: string;
  description: string;
  category: string;
  path: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    sku: params.sku,
    description: params.description,
    category: params.category,
    url: `${seo.siteUrl}${params.path}`,
    brand: { '@type': 'Brand', name: seo.siteName },
    manufacturer: { '@type': 'Organization', name: seo.siteName },
  };
}
