import { certifications } from '../config/certifications';
import { homeSections } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { resolveCertificateScan } from '../config/media';
import { Media } from '../components/ui/Media';
import { EditorialVisual } from '../components/visuals/EditorialVisual';
import { SectionHead } from '../components/ui/SectionHead';

export function CertificatesSection() {
  const s = homeSections.certificates;
  const { locale } = useLocale();

  return (
    <section className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={pick(s.label, locale)}
          title={pick(s.title, locale)}
          description={pick(s.description, locale)}
          align="between"
        />
        <div className="cert-gallery">
          {certifications.map((cert) => {
            const scan = resolveCertificateScan(cert.id);
            const name = pick(cert.name, locale);
            return (
              <figure key={cert.id} className="cert-card" data-reveal>
                <div className="cert-card__media">
                  {scan ? (
                    <Media
                      src={scan.src}
                      alt={name}
                      aspectRatio="3 / 4"
                      fallback={<EditorialVisual subject="quality" title={name} />}
                    />
                  ) : (
                    <EditorialVisual subject="quality" title={name} />
                  )}
                </div>
                <figcaption className="cert-card__caption">
                  <span className="cert-card__code mono">{cert.code}</span>
                  <span className="cert-card__name">{name}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
