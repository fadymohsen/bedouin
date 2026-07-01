import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function CrystalMountain() {
  const { t } = useTranslation();

  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_crystal_breadcrumb'), url: 'https://bedouintrails.com/crystal-mountain-egypt' }
      ]} />
      <Helmet>
        <title>{t('guide_crystal_title')}</title>
        <meta name="description" content={t('guide_crystal_meta_desc')} />
        <meta name="keywords" content="Crystal Mountain Egypt, Crystal Mountain Western Desert, quartz crystal desert Egypt, Egypt Desert Tour, White Desert tour stops, Bahariya Oasis attractions, Western Desert Egypt landmarks, crystal ridge Egypt" />
        <link rel="canonical" href="https://bedouintrails.com/crystal-mountain-egypt" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/crystal-mountain-egypt" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/crystal-mountain-egypt" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/crystal-mountain-egypt" />
        <meta property="og:title" content={t('guide_crystal_og_title')} />
        <meta property="og:description" content={t('guide_crystal_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/crystal-mountain-egypt" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_crystal_twitter_title')} />
        <meta name="twitter:description" content={t('guide_crystal_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Crystal Mountain",
            "description": "Crystal Mountain is a small ridge of quartz crystals in Egypt's Western Desert located between the Black Desert and White Desert, sparkling in sunlight.",
            "url": "https://bedouintrails.com/crystal-mountain-egypt",
            "geo": { "@type": "GeoCoordinates", "latitude": "27.65", "longitude": "28.3" },
            "touristType": ["Nature lovers", "Photographers", "Adventure seekers"]
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/godl.webp')" }}>
        <h1>{t('guide_crystal_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>
          {t('guide_crystal_intro_p')}
        </p>

        <h2>{t('guide_crystal_what_h2')}</h2>
        <p>
          {t('guide_crystal_what_p1')}
        </p>
        <p>
          {t('guide_crystal_what_p2')}
        </p>

        <h2>{t('guide_crystal_where_h2')}</h2>
        <p>
          {t('guide_crystal_where_p')}
        </p>

        <h2>{t('guide_crystal_visiting_h2')}</h2>
        <p>
          {t('guide_crystal_visiting_p')}
        </p>

        <h3>{t('guide_crystal_typical_h3')}</h3>
        <ol>
          <li>{t('guide_crystal_typical_li1')}</li>
          <li>{t('guide_crystal_typical_li2')}</li>
          <li>{t('guide_crystal_typical_li3')}</li>
          <li>{t('guide_crystal_typical_li4')}</li>
        </ol>

        <div className="highlight-box">
          <p><strong>{t('guide_crystal_phototip_bold')}</strong> {t('guide_crystal_phototip_text')}</p>
        </div>

        <h2>{t('guide_crystal_conservation_h2')}</h2>
        <p>
          {t('guide_crystal_conservation_p')}
        </p>

        <h2>{t('guide_crystal_nearby_h2')}</h2>
        <ul>
          <li><strong><Link to="/black-desert-egypt">{t('guide_crystal_nearby_li1_bold')}</Link></strong> {t('guide_crystal_nearby_li1_text')}</li>
          <li><strong><Link to="/white-desert-tour-from-cairo">{t('guide_crystal_nearby_li2_bold')}</Link></strong> {t('guide_crystal_nearby_li2_text')}</li>
          <li><strong>{t('guide_crystal_nearby_li3_bold')}</strong> {t('guide_crystal_nearby_li3_text')}</li>
          <li><strong>{t('guide_crystal_nearby_li4_bold')}</strong> {t('guide_crystal_nearby_li4_text')}</li>
        </ul>

        <div className="cta-section">
          <p>{t('guide_crystal_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_crystal_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
