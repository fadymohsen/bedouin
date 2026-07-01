import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function DjaraCave() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_djara_breadcrumb'), url: 'https://bedouintrails.com/djara-cave' }
      ]} />
      <Helmet>
        <title>{t('guide_djara_title')}</title>
        <meta name="description" content={t('guide_djara_meta_desc')} />
        <meta name="keywords" content={t('guide_djara_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/djara-cave" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/djara-cave" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/djara-cave" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/djara-cave" />
        <meta property="og:title" content={t('guide_djara_og_title')} />
        <meta property="og:description" content={t('guide_djara_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/djara-cave" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_djara_twitter_title')} />
        <meta name="twitter:description" content={t('guide_djara_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Djara Cave",
            "alternateName": "\u0643\u0647\u0641 \u0627\u0644\u062c\u0627\u0631\u0629",
            "description": "Djara Cave is a prehistoric cave in Egypt's Western Desert containing Neolithic rock art and murals dating back to 7700\u20135300 BC, depicting humans, animals, and hunting scenes from when the Sahara was green.",
            "url": "https://bedouintrails.com/djara-cave",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.55",
              "longitude": "28.65"
            },
            "touristType": ["History enthusiasts", "Adventure seekers", "Archaeologists"]
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/adventure1.webp')" }}>
        <h1>{t('guide_djara_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_djara_intro_p')}</p>

        <h2>{t('guide_djara_what_h2')}</h2>
        <p>{t('guide_djara_what_p1')}</p>
        <p>{t('guide_djara_what_p2')}</p>

        <h2>{t('guide_djara_see_h2')}</h2>
        <ul>
          <li><strong>{t('guide_djara_see_li1_bold')}</strong> — {t('guide_djara_see_li1_text')}</li>
          <li><strong>{t('guide_djara_see_li2_bold')}</strong> — {t('guide_djara_see_li2_text')}</li>
          <li><strong>{t('guide_djara_see_li3_bold')}</strong> — {t('guide_djara_see_li3_text')}</li>
          <li><strong>{t('guide_djara_see_li4_bold')}</strong> — {t('guide_djara_see_li4_text')}</li>
          <li><strong>{t('guide_djara_see_li5_bold')}</strong> — {t('guide_djara_see_li5_text')}</li>
        </ul>

        <div className="highlight-box">
          <p>{t('guide_djara_highlight')}</p>
        </div>

        <h2>{t('guide_djara_howto_h2')}</h2>
        <p>{t('guide_djara_howto_p')}</p>

        <h3>{t('guide_djara_itinerary_h3')}</h3>
        <ol>
          <li><strong>{t('guide_djara_itinerary_li1_bold')}</strong> {t('guide_djara_itinerary_li1_text')}</li>
          <li><strong>{t('guide_djara_itinerary_li2_bold')}</strong> {t('guide_djara_itinerary_li2_text')}</li>
          <li><strong>{t('guide_djara_itinerary_li3_bold')}</strong> {t('guide_djara_itinerary_li3_text')}</li>
          <li><strong>{t('guide_djara_itinerary_li4_bold')}</strong> {t('guide_djara_itinerary_li4_text')}</li>
        </ol>

        <h2>{t('guide_djara_besttime_h2')}</h2>
        <p>{t('guide_djara_besttime_p')}</p>

        <h2>{t('guide_djara_why_h2')}</h2>
        <p>{t('guide_djara_why_p')}</p>

        <div className="faq-section">
          <h2>{t('guide_djara_faq_h2')}</h2>

          <div className="faq-item">
            <h3>{t('guide_djara_faq1_q')}</h3>
            <p>{t('guide_djara_faq1_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_djara_faq2_q')}</h3>
            <p>{t('guide_djara_faq2_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_djara_faq3_q')}</h3>
            <p>{t('guide_djara_faq3_a')}</p>
          </div>
        </div>

        <div className="cta-section">
          <p>{t('guide_djara_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_browse_tours')}</Link>
        </div>
      </div>
    </div>
  );
}
