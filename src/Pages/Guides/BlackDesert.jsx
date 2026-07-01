import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function BlackDesert() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_black_breadcrumb'), url: 'https://bedouintrails.com/black-desert-egypt' }
      ]} />
      <Helmet>
        <title>{t('guide_black_title')}</title>
        <meta name="description" content={t('guide_black_meta_desc')} />
        <meta name="keywords" content={t('guide_black_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/black-desert-egypt" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/black-desert-egypt" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/black-desert-egypt" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/black-desert-egypt" />
        <meta property="og:title" content={t('guide_black_og_title')} />
        <meta property="og:description" content={t('guide_black_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/black-desert-egypt" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_black_twitter_title')} />
        <meta name="twitter:description" content={t('guide_black_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Black Desert",
            "alternateName": "\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u0633\u0648\u062f\u0627\u0621",
            "description": "The Black Desert in Egypt's Western Desert is a volcanic landscape of dark dolerite-covered hills and mountains between Bahariya Oasis and the White Desert. A key stop on Egypt desert safari tours.",
            "url": "https://bedouintrails.com/black-desert-egypt",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.0",
              "longitude": "28.7"
            },
            "touristType": ["Adventure seekers", "Photographers", "Nature lovers"]
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/adventure3.webp')" }}>
        <h1>{t('guide_black_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_black_intro_p')}</p>

        <h2>{t('guide_black_what_h2')}</h2>
        <p>{t('guide_black_what_p1')}</p>
        <p>{t('guide_black_what_p2')}</p>

        <h2>{t('guide_black_see_h2')}</h2>
        <ul>
          <li><strong>{t('guide_black_see_li1_bold')}</strong> — {t('guide_black_see_li1_text')}</li>
          <li><strong>{t('guide_black_see_li2_bold')}</strong> — {t('guide_black_see_li2_text')}</li>
          <li><strong>{t('guide_black_see_li3_bold')}</strong> — {t('guide_black_see_li3_text')}</li>
          <li><strong>{t('guide_black_see_li4_bold')}</strong> — {t('guide_black_see_li4_text')}</li>
          <li><strong>{t('guide_black_see_li5_bold')}</strong> — {t('guide_black_see_li5_text')}</li>
        </ul>

        <div className="highlight-box">
          <p>{t('guide_black_highlight')}</p>
        </div>

        <h2>{t('guide_black_howto_h2')}</h2>
        <p>{t('guide_black_howto_p')}</p>

        <h3>{t('guide_black_route_h3')}</h3>
        <ol>
          <li><strong>{t('guide_black_route_li1_bold')}</strong> {t('guide_black_route_li1_text')}</li>
          <li><strong>{t('guide_black_route_li2_bold')}</strong> {t('guide_black_route_li2_text')}</li>
          <li><strong>{t('guide_black_route_li3_bold')}</strong> {t('guide_black_route_li3_text')}</li>
          <li><strong>{t('guide_black_route_li4_bold')}</strong> {t('guide_black_route_li4_text')}</li>
          <li><strong>{t('guide_black_route_li5_bold')}</strong></li>
        </ol>

        <h2>{t('guide_black_photo_h2')}</h2>
        <p>{t('guide_black_photo_p')}</p>

        <h2>{t('guide_black_besttime_h2')}</h2>
        <p>{t('guide_black_besttime_p1')} <strong>{t('guide_black_besttime_p1_bold')}</strong>{t('guide_black_besttime_p1_cont')}</p>

        <div className="faq-section">
          <h2>{t('guide_black_faq_h2')}</h2>

          <div className="faq-item">
            <h3>{t('guide_black_faq1_q')}</h3>
            <p>{t('guide_black_faq1_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_black_faq2_q')}</h3>
            <p>{t('guide_black_faq2_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_black_faq3_q')}</h3>
            <p>{t('guide_black_faq3_a')}</p>
          </div>
        </div>

        <div className="cta-section">
          <p>{t('guide_black_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_black_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
