import { Hero } from '../sections/Hero';
import { CategoryGrid } from '../sections/CategoryGrid';
import { FactorySection } from '../sections/FactorySection';
import { FeaturedProducts } from '../sections/FeaturedProducts';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { OemSection } from '../sections/OemSection';
import { QualitySection } from '../sections/QualitySection';
import { FactoryTourSection } from '../sections/FactoryTourSection';
import { CertificatesSection } from '../sections/CertificatesSection';
import { TrustSection } from '../sections/TrustSection';
import { ExportSection } from '../sections/ExportSection';
import { CtaBand } from '../sections/StatsBand';
import { usePageMeta, homeJsonLd } from '../lib/seo';
import { seo } from '../config/theme';
import { useLocale } from '../lib/i18n';

/**
 * Section rhythm: brand statement → range → manufacturing proof → flagship
 * products → capabilities → OEM → quality → export → conversion.
 * Large / small / dark / muted sections alternate so no two consecutive
 * blocks share the same layout pattern.
 */
export default function HomePage() {
  const { locale } = useLocale();
  usePageMeta({
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    path: '/',
    jsonLd: homeJsonLd(locale),
  });

  return (
    <>
      <Hero />
      <CategoryGrid />
      <FactorySection />
      <FeaturedProducts />
      <CapabilitiesSection />
      <OemSection />
      <QualitySection />
      <FactoryTourSection />
      <CertificatesSection />
      <TrustSection />
      <ExportSection />
      <CtaBand />
    </>
  );
}
