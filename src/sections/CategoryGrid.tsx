import { Link } from 'react-router-dom';
import { categories } from '../config/categories';
import { useLocale, pick } from '../lib/i18n';
import { useDisplay } from '../lib/display';
import { homeSections } from '../config/hero';
import { productsInCategory } from '../lib/products';
import { ProductMedia } from '../components/ui/Media';
import { ArrowIcon, SectionHead } from '../components/ui/SectionHead';

export function CategoryGrid() {
  const s = homeSections.categories;
  const { t, locale } = useLocale();
  const { categoryName, categoryDesc, categoryShort } = useDisplay();
  return (
    <section className="section" aria-labelledby="categories-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={pick(s.label, locale)}
          title={pick(s.title, locale)}
          description={pick(s.description, locale)}
          cta={{ label: t('common.viewAllProducts'), href: '/products' }}
          align="between"
        />
        <div className="category-grid">
          {categories.map((category, i) => {
            const representative = productsInCategory(category.slug)[0];
            const count = productsInCategory(category.slug).length;
            return (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className={`category-card ${i === 0 ? 'category-card--lead' : ''}`}
              >
                <div className="category-card__media" aria-hidden="true">
                  {representative && (
                    <ProductMedia
                      slug={representative.slug}
                      spec={representative.visual}
                      images={representative.images}
                      title={`${pick(category.name, locale)} range`}
                      alt={`${pick(category.name, locale)} range`}
                    />
                  )}
                  <span className="category-card__count mono">{count} {t('common.skus')}</span>
                </div>
                <div className="category-card__body">
                  <h3 className="category-card__name">{categoryName(category)}</h3>
                  <p className="category-card__desc">{categoryDesc(category)}</p>
                  <span className="arrow-link">
                    {t('home.cat.browse')} {categoryShort(category)}
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
