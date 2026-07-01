import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function CamelTrek() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_camel_breadcrumb'), url: 'https://bedouintrails.com/camel-trek' }
      ]} />
      <Helmet>
        <title>{t('guide_camel_title')}</title>
        <meta name="description" content={t('guide_camel_meta_desc')} />
        <meta name="keywords" content={t('guide_camel_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/camel-trek" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/camel-trek" />
        <meta property="og:title" content={t('guide_camel_og_title')} />
        <meta property="og:description" content={t('guide_camel_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/camel-trek" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_camel_twitter_title')} />
        <meta name="twitter:description" content={t('guide_camel_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Camel Trek in Egypt's Western Desert",
            "description": "Multi-day camel trekking adventure through the White Desert, Black Desert, and Sahara landscapes with experienced Bedouin guides and traditional camping.",
            "touristType": ["Adventure seekers", "Nature lovers", "Culture enthusiasts"],
            "url": "https://bedouintrails.com/camel-trek",
            "provider": {
              "@type": "TravelAgency",
              "name": "Bedouin Trails",
              "url": "https://bedouintrails.com"
            }
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/camel-ride.webp')" }}>
        <h1>{t('guide_camel_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_camel_intro_p')}</p>

        <h2>{t('guide_camel_why_h2')}</h2>
        <p>{t('guide_camel_why_p')}</p>

        <div className="highlight-box">
          <p>{t('guide_camel_highlight')}</p>
        </div>

        <h2>{t('guide_camel_options_h2')}</h2>

        <h3>{t('guide_camel_options_2day_h3')}</h3>
        <p>{t('guide_camel_options_2day_p')}</p>

        <h3>{t('guide_camel_options_3day_h3')}</h3>
        <p>{t('guide_camel_options_3day_p')}</p>

        <h3>{t('guide_camel_options_5day_h3')}</h3>
        <p>{t('guide_camel_options_5day_p')}</p>

        <h2>{t('guide_camel_expect_h2')}</h2>
        <ul>
          <li><strong>{t('guide_camel_expect_li1_bold')}</strong> — {t('guide_camel_expect_li1_text')}</li>
          <li><strong>{t('guide_camel_expect_li2_bold')}</strong> — {t('guide_camel_expect_li2_text')}</li>
          <li><strong>{t('guide_camel_expect_li3_bold')}</strong> — {t('guide_camel_expect_li3_text')}</li>
          <li><strong>{t('guide_camel_expect_li4_bold')}</strong> — {t('guide_camel_expect_li4_text')}</li>
          <li><strong>{t('guide_camel_expect_li5_bold')}</strong> — {t('guide_camel_expect_li5_text')}</li>
          <li><strong>{t('guide_camel_expect_li6_bold')}</strong> — {t('guide_camel_expect_li6_text')}</li>
        </ul>

        <h2>{t('guide_camel_packing_h2')}</h2>
        <ul>
          <li>{t('guide_camel_packing_li1')}</li>
          <li>{t('guide_camel_packing_li2')}</li>
          <li>{t('guide_camel_packing_li3')}</li>
          <li>{t('guide_camel_packing_li4')}</li>
          <li>{t('guide_camel_packing_li5')}</li>
          <li>{t('guide_camel_packing_li6')}</li>
          <li>{t('guide_camel_packing_li7')}</li>
        </ul>

        <h2>{t('guide_camel_bestseason_h2')}</h2>
        <p>{t('guide_camel_bestseason_p')}</p>

        <div className="faq-section">
          <h2>{t('guide_camel_faq_h2')}</h2>

          <div className="faq-item">
            <h3>{t('guide_camel_faq1_q')}</h3>
            <p>{t('guide_camel_faq1_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_camel_faq2_q')}</h3>
            <p>{t('guide_camel_faq2_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_camel_faq3_q')}</h3>
            <p>{t('guide_camel_faq3_a')}</p>
          </div>
        </div>

        <div className="cta-section">
          <p>{t('guide_camel_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_camel_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
