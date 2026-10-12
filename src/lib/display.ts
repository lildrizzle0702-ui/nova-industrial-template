import { useLocale, pick } from './i18n';
import type { Category, Product, LocalizedString } from '../data/types';

/** Returns localized display helpers for catalogue entities. */
export function useDisplay() {
  const { locale, t } = useLocale();

  const applicationLabel = (app: string) => (locale === 'zh' ? t(`application.${app}`) : app);
  const colorName = (color: LocalizedString) => pick(color, locale);

  return {
    productName: (p: Product) => pick(p.name, locale),
    productShort: (p: Product) => pick(p.shortDescription, locale),
    categoryName: (c: Category) => pick(c.name, locale),
    categoryShort: (c: Category) => pick(c.shortName, locale),
    categoryDesc: (c: Category) => pick(c.description, locale),
    applicationLabel,
    colorName,
    specLabel: (label: LocalizedString) => pick(label, locale),
  };
}
