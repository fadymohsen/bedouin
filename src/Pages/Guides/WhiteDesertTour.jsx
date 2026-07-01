import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function WhiteDesertTour() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_whitetour_breadcrumb'), url: 'https://bedouintrails.com/white-desert-tour-from-cairo' }
      ]} />
      <Helmet>
        <title>{t('guide_whitetour_title')}</title>
        <meta name="description" content={t('guide_whitetour_meta_desc')} />
        <meta name="keywords" content={t('guide_whitetour_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <meta property="og:title" content={t('guide_whitetour_og_title')} />
        <meta property="og:description" content={t('guide_whitetour_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/white-desert-tour-from-cairo" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_whitetour_twitter_title')} />
        <meta name="twitter:description" content={t('guide_whitetour_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "2 Day White Desert Tour from Cairo",
            "description": "A 2-day White Desert safari tour from Cairo including Bahariya Oasis, Black Desert, Crystal Mountain, and overnight camping in the White Desert under the stars.",
            "touristType": ["Adventure seekers", "Nature lovers", "Photographers"],
            "url": "https://bedouintrails.com/white-desert-tour-from-cairo",
            "itinerary": {
              "@type": "ItemList",
              "numberOfItems": 2,
              "description": "2 days from Cairo to White Desert via Bahariya Oasis"
            },
            "provider": {
              "@type": "TravelAgency",
              "name": "Bedouin Trails",
              "url": "https://bedouintrails.com"
            }
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t('guide_whitetour_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_whitetour_intro_p')}</p>

        <h2>{t('guide_whitetour_itinerary_h2')}</h2>

        <h3>{t('guide_whitetour_day1_h3')}</h3>
        <ol>
          <li><strong>{t('guide_whitetour_day1_li1_bold')}</strong> — {t('guide_whitetour_day1_li1_text')}</li>
          <li><strong>{t('guide_whitetour_day1_li2_bold')}</strong> — {t('guide_whitetour_day1_li2_text')}</li>
          <li><strong>{t('guide_whitetour_day1_li3_bold')}</strong> — {t('guide_whitetour_day1_li3_text')}</li>
          <li><strong>{t('guide_whitetour_day1_li4_bold')}</strong> — {t('guide_whitetour_day1_li4_text')}</li>
          <li><strong>{t('guide_whitetour_day1_li5_bold')}</strong> — {t('guide_whitetour_day1_li5_text')}</li>
          <li><strong>{t('guide_whitetour_day1_li6_bold')}</strong> — {t('guide_whitetour_day1_li6_text')}</li>
        </ol>

        <h3>{t('guide_whitetour_day2_h3')}</h3>
        <ol>
          <li><strong>{t('guide_whitetour_day2_li1_bold')}</strong> — {t('guide_whitetour_day2_li1_text')}</li>
          <li><strong>{t('guide_whitetour_day2_li2_bold')}</strong> — {t('guide_whitetour_day2_li2_text')}</li>
          <li><strong>{t('guide_whitetour_day2_li3_bold')}</strong> — {t('guide_whitetour_day2_li3_text')}</li>
          <li><strong>{t('guide_whitetour_day2_li4_bold')}</strong> — {t('guide_whitetour_day2_li4_text')}</li>
          <li><strong>{t('guide_whitetour_day2_li5_bold')}</strong> — {t('guide_whitetour_day2_li5_text')}</li>
        </ol>

        <div className="highlight-box">
          <p>{t('guide_whitetour_highlight')}</p>
        </div>

        <h2>{t('guide_whitetour_included_h2')}</h2>
        <ul>
          <li>{t('guide_whitetour_included_li1')}</li>
          <li>{t('guide_whitetour_included_li2')}</li>
          <li>{t('guide_whitetour_included_li3')}</li>
          <li>{t('guide_whitetour_included_li4')}</li>
          <li>{t('guide_whitetour_included_li5')}</li>
          <li>{t('guide_whitetour_included_li6')}</li>
          <li>{t('guide_whitetour_included_li7')}</li>
        </ul>

        <h2>{t('guide_whitetour_notincluded_h2')}</h2>
        <ul>
          <li>{t('guide_whitetour_notincluded_li1')}</li>
          <li>{t('guide_whitetour_notincluded_li2')}</li>
          <li>{t('guide_whitetour_notincluded_li3')}</li>
        </ul>

        <h2>{t('guide_whitetour_howto_h2')}</h2>
        <p>{t('guide_whitetour_howto_p')}</p>

        <h2>{t('guide_whitetour_besttime_h2')}</h2>
        <p>{t('guide_whitetour_besttime_p1')} <strong>{t('guide_whitetour_besttime_p1_bold')}</strong>{t('guide_whitetour_besttime_p1_cont')}</p>

        <div className="faq-section">
          <h2>{t('guide_whitetour_faq_h2')}</h2>

          <div className="faq-item">
            <h3>{t('guide_whitetour_faq1_q')}</h3>
            <p>{t('guide_whitetour_faq1_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_whitetour_faq2_q')}</h3>
            <p>{t('guide_whitetour_faq2_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_whitetour_faq3_q')}</h3>
            <p>{t('guide_whitetour_faq3_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_whitetour_faq4_q')}</h3>
            <p>{t('guide_whitetour_faq4_a')}</p>
          </div>
        </div>

        <div className="cta-section">
          <p>{t('guide_whitetour_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_whitetour_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
