/* ============================================================
   DATA MODEL — every entity the template renders.
   All page content flows from these types via src/config + src/data.
   ============================================================ */

/* ---------- Bilingual content primitives ---------- */

export interface LocalizedString {
  en: string;
  zh: string;
}

/** A paragraph or multi-line block that is fully bilingual. */
export type LocalizedText = LocalizedString;

/* ---------- Brand & company ---------- */

export interface BrandConfig {
  name: string;
  /** Two-line lockup: primary word + secondary word (e.g. "NOVA" / "INDUSTRIAL") */
  wordmarkPrimary: string;
  wordmarkSecondary: string;
  tagline: LocalizedString;
  description: LocalizedString;
}

export interface CompanyConfig {
  legalName: LocalizedString;
  founded: number;
  headquarters: LocalizedString;
  markets: LocalizedString[];
  employees: LocalizedString;
  factoryArea: LocalizedString;
  annualCapacity: LocalizedString;
  experience: LocalizedString;
}

export interface FactoryStat {
  value: string;
  label: LocalizedString;
  note?: LocalizedString;
}

export interface ContactConfig {
  email: string;
  salesEmail: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  addressLines: LocalizedString[];
  country: LocalizedString;
  businessHours: LocalizedString;
  responseTime: LocalizedString;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface FooterColumn {
  title: LocalizedString;
  links: NavItem[];
}

export interface NavigationConfig {
  header: NavItem[];
  headerCta: NavItem;
  footerColumns: FooterColumn[];
}

/* ---------- Theme (mirrors styles/tokens.css for runtime use) ---------- */

export interface ThemeConfig {
  colors: {
    background: string;
    surface: string;
    surfaceMuted: string;
    ink: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    borderStrong: string;
    primary: string;
    primaryHover: string;
    accent: string;
    success: string;
    error: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
}

/* ---------- SEO ---------- */

export interface SeoConfig {
  siteUrl: string;
  siteName: string;
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
}

/* ---------- Catalogue ---------- */

export type Finish = 'white' | 'black' | 'chrome' | 'champagne' | 'graphite';

export interface Category {
  id: string;
  slug: string;
  name: LocalizedString;
  shortName: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  keywords: string[];
}

export interface Certification {
  id: string;
  code: string;
  name: LocalizedString;
  description: LocalizedString;
  /** Which products / markets this certification covers. */
  scope: LocalizedString;
}

export interface SpecRow {
  label: LocalizedString;
  value: string;
}

export interface ProductVisualSpec {
  /** Which renderer draws this product (matches category family) */
  kind: 'rocker' | 'socket' | 'usb' | 'smart' | 'accessory';
  /** Index of the face variant within the renderer (gang count, port count, ...) */
  variant: number;
  finish: Finish;
}

/** Optional real photography per slot — overrides the SVG demo renderer when present. */
export interface ProductImages {
  hero?: { src: string; alt?: string; position?: string };
  technical?: { src: string; alt?: string; position?: string };
  detail?: { src: string; alt?: string; position?: string };
  /** Extra photos appended to the product detail gallery. */
  gallery?: { src: string; alt?: string; position?: string }[];
}

export interface Product {
  id: string;
  slug: string;
  name: LocalizedString;
  sku: string;
  categoryId: string;
  shortDescription: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  specifications: SpecRow[];
  applications: LocalizedString[];
  certificationIds: string[];
  keywords: string[];
  featured?: boolean;
  /** Catalogue heroes — rendered large on the home page. */
  flagship?: boolean;
  visual: ProductVisualSpec;
  /** Real photography slots; absent views fall back to the SVG demo renderer. */
  images?: ProductImages;
  colors: LocalizedString[];
  warranty: LocalizedString;
  packaging: LocalizedString;
  moq: LocalizedString;
  leadTime: LocalizedString;
  relatedSlugs?: string[];
}

/* ---------- Marketing sections ---------- */

export interface HeroConfig {
  eyebrow: LocalizedString;
  titleLines: LocalizedString[];
  description: LocalizedString;
  primaryCta: NavItem;
  secondaryCta: NavItem;
  /** Technical metadata line — rendered as quiet mono annotation, not badges. */
  footnote: LocalizedString;
  /** Caption under the hero visual, styled like a drawing title block. */
  visualCaption: LocalizedString;
}

export interface Capability {
  id: string;
  index: string;
  title: LocalizedString;
  description: LocalizedString;
  points: LocalizedString[];
}

export interface FaqItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface CtaBandConfig {
  eyebrow: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  primaryCta: NavItem;
  secondaryCta: NavItem;
}

export interface PdpConfig {
  oemLabel: LocalizedString;
  oemNote: LocalizedString;
  oemHref: string;
}

export interface FooterCtaConfig {
  title: LocalizedString;
  cta: NavItem;
}

/* ---------- Inquiry ---------- */

export interface InquiryLine {
  productId: string;
  quantity: number;
}

export interface InquiryContactForm {
  name: string;
  company: string;
  email: string;
  country: string;
  /** Optional procurement requirements. */
  certification?: string;
  packaging?: string;
  message: string;
}

/* ---------- Insights / Blog ---------- */

export interface InsightSection {
  heading: string;
  paragraphs: string[];
}

export interface Insight {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  category: string;
  categoryZh: string;
  readTime: string;
  readTimeZh: string;
  excerpt: string;
  excerptZh: string;
  sections: InsightSection[];
}
