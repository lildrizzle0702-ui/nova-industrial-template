import { Link } from 'react-router-dom';
import { brand } from '../../config/brand';
import { certifications } from '../../config/certifications';
import { company } from '../../config/company';
import { contact } from '../../config/contact';
import { navigation } from '../../config/navigation';
import { footerCta } from '../../config/hero';
import { useLocale, pick } from '../../lib/i18n';
import { Logo } from '../ui/Logo';

export function Footer() {
  const { t, locale } = useLocale();
  const brandDesc = pick(brand.description, locale);
  const addressLines = contact.addressLines.map((line) => pick(line, locale));
  const businessHours = pick(contact.businessHours, locale);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <p className="footer-cta__title h4">{pick(footerCta.title, locale)}</p>
          <Link to={footerCta.cta.href} className="btn btn--accent">
            {pick(footerCta.cta.label, locale)}
          </Link>
        </div>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo inverted />
            <p className="site-footer__blurb">{brandDesc}</p>
            <p className="site-footer__certs mono" aria-label="Certifications">
              {certifications.map((c) => c.code).join(' · ')}
            </p>
          </div>

          {navigation.footerColumns.map((col) => (
            <nav key={pick(col.title, locale)} className="site-footer__col" aria-label={pick(col.title, locale)}>
              <h3 className="site-footer__heading mono">{pick(col.title, locale)}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={pick(link.label, locale)}>
                    <Link to={link.href} className="site-footer__link">
                      {pick(link.label, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="site-footer__col">
            <h3 className="site-footer__heading mono">{t('footer.contact')}</h3>
            <address className="site-footer__address">
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </p>
              <p>{addressLines.join('， ')}</p>
              <p className="site-footer__hours">{businessHours}</p>
            </address>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            © {new Date().getFullYear()} {pick(company.legalName, locale)}. {t('footer.rights')}
          </p>
          <p className="site-footer__legal-note">
            {t('footer.legal')} · {pick(company.factoryArea, locale)} · {company.markets.length} {t('footer.regions')}
          </p>
        </div>
      </div>
    </footer>
  );
}
