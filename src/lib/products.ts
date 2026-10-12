import { categories } from '../config/categories';
import { certifications } from '../config/certifications';
import type { Category, Certification, Product } from '../data/types';
import { products } from '../data/products';

export type SortKey = 'featured' | 'name' | 'category';

export interface CatalogueFilters {
  query: string;
  category: string | null; // category slug
  application: string | null;
  certification: string | null; // certification id
  sort: SortKey;
}

/** Shared application vocabulary, derived from the catalogue (not hardcoded per page). */
export const applications: string[] = [
  'Residential',
  'Commercial',
  'Hospitality',
  'Industrial',
  'Outdoor',
];

const categoryBySlug = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const categoryOf = (product: Product): Category => {
  const cat = categories.find((c) => c.id === product.categoryId);
  if (!cat) throw new Error(`Product ${product.sku} references unknown category ${product.categoryId}`);
  return cat;
};

export const certificationOf = (id: string): Certification | undefined =>
  certifications.find((c) => c.id === id);

export const certificationsOf = (product: Product): Certification[] =>
  product.certificationIds
    .map((id) => certificationOf(id))
    .filter((c): c is Certification => Boolean(c));

export const productsInCategory = (slug: string): Product[] => {
  const cat = categoryBySlug(slug);
  return cat ? products.filter((p) => p.categoryId === cat.id) : [];
};

export const featuredProducts = (limit = 8): Product[] => {
  const featured = products.filter((p) => p.featured);
  return featured.slice(0, limit);
};

function matchesQuery(product: Product, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;
  const terms = q.split(/\s+/);
  const category = categoryOf(product);
  const haystack = [
    product.name.en,
    product.sku,
    product.id,
    category.name.en,
    product.shortDescription.en,
    ...product.keywords,
  ]
    .join(' ')
    .toLowerCase();
  return terms.every((term) => haystack.includes(term));
}

function matchesFilters(product: Product, filters: CatalogueFilters): boolean {
  if (filters.category) {
    const cat = categoryBySlug(filters.category);
    if (!cat || product.categoryId !== cat.id) return false;
  }
  if (filters.application && !product.applications.some((app) => app.en === filters.application)) return false;
  if (filters.certification && !product.certificationIds.includes(filters.certification)) return false;
  return true;
}

function sortProducts(list: Product[], sort: SortKey): Product[] {
  const sorted = [...list];
  switch (sort) {
    case 'name':
      sorted.sort((a, b) => a.name.en.localeCompare(b.name.en));
      break;
    case 'category':
      sorted.sort(
        (a, b) =>
          categoryOf(a).name.en.localeCompare(categoryOf(b).name.en) ||
          a.name.en.localeCompare(b.name.en),
      );
      break;
    case 'featured':
    default:
      // Featured first, then catalogue order
      sorted.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
      break;
  }
  return sorted;
}

export function queryCatalogue(filters: CatalogueFilters): Product[] {
  const result = products.filter(
    (p) => matchesQuery(p, filters.query) && matchesFilters(p, filters),
  );
  return sortProducts(result, filters.sort);
}

/** Related products: explicit list first, then same-category fallbacks. Never returns fewer than 3 unless the catalogue is tiny. */
export function relatedProducts(product: Product, limit = 4): Product[] {
  const seen = new Set<string>([product.id]);
  const result: Product[] = [];

  const push = (p: Product | undefined) => {
    if (p && !seen.has(p.id) && result.length < limit) {
      seen.add(p.id);
      result.push(p);
    }
  };

  product.relatedSlugs?.forEach((slug) => push(productBySlug(slug)));

  const siblings = products.filter(
    (p) => p.categoryId === product.categoryId && !seen.has(p.id),
  );
  // Prefer featured siblings, keep catalogue order
  siblings.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  siblings.forEach(push);

  // Cross-family fill for products whose category is small
  if (result.length < limit) {
    products.filter((p) => p.featured && !seen.has(p.id)).forEach(push);
  }
  return result.slice(0, limit);
}

export const productBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
