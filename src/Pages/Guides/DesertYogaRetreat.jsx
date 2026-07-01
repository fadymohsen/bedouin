import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function DesertYogaRetreat() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_yoga_breadcrumb'), url: 'https://bedouintrails.com/desert-yoga-retreat' }
      ]} />
      <Helmet>
        <title>{t('guide_yoga_title')}</title>
        <meta name="description" content={t('guide_yoga_meta_desc')} />
        <meta name="keywords" content={t('guide_yoga_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/desert-yoga-retreat" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/desert-yoga-retreat" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/desert-yoga-retreat" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/desert-yoga-retreat" />
        <meta property="og:title" content={t('guide_yoga_og_title')} />
        <meta property="og:description" content={t('guide_yoga_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/desert-yoga-retreat" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_yoga_twitter_title')} />
        <meta name="twitter:description" content={t('guide_yoga_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Desert Yoga Retreat in Egypt's White Desert",
            "description": "A unique yoga and meditation retreat experience in the heart of Egypt's Western Desert, combining desert camping with mindfulness practices under the Saharan sky.",
            "touristType": ["Yoga practitioners", "Meditation seekers", "Wellness travelers"],
            "url": "https://bedouintrails.com/desert-yoga-retreat",
            "provider": {
              "@type": "TravelAgency",
              "name": "Bedouin Trails",
              "url": "https://bedouintrails.com"
            }
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/western-desert-hero.webp')" }}>
        <h1>{t('guide_yoga_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_yoga_intro_p')}</p>

        <h2>{t('guide_yoga_why_h2')}</h2>
        <p>{t('guide_yoga_why_p')}</p>

        <div className="highlight-box">
          <p>{t('guide_yoga_highlight')}</p>
        </div>

        <h2>{t('guide_yoga_includes_h2')}</h2>
        <ul>
          <li><strong>{t('guide_yoga_includes_li1_bold')}</strong> — {t('guide_yoga_includes_li1_text')}</li>
          <li><strong>{t('guide_yoga_includes_li2_bold')}</strong> — {t('guide_yoga_includes_li2_text')}</li>
          <li><strong>{t('guide_yoga_includes_li3_bold')}</strong> — {t('guide_yoga_includes_li3_text')}</li>
          <li><strong>{t('guide_yoga_includes_li4_bold')}</strong> — {t('guide_yoga_includes_li4_text')}</li>
          <li><strong>{t('guide_yoga_includes_li5_bold')}</strong> — {t('guide_yoga_includes_li5_text')}</li>
          <li><strong>{t('guide_yoga_includes_li6_bold')}</strong> — {t('guide_yoga_includes_li6_text')}</li>
          <li><strong>{t('guide_yoga_includes_li7_bold')}</strong> — {t('guide_yoga_includes_li7_text')}</li>
        </ul>

        <h2>{t('guide_yoga_who_h2')}</h2>
        <p>{t('guide_yoga_who_p')}</p>

        <h2>{t('guide_yoga_duration_h2')}</h2>
        <h3>{t('guide_yoga_duration_2day_h3')}</h3>
        <p>{t('guide_yoga_duration_2day_p')}</p>

        <h3>{t('guide_yoga_duration_3day_h3')}</h3>
        <p>{t('guide_yoga_duration_3day_p')}</p>

        <h3>{t('guide_yoga_duration_5day_h3')}</h3>
        <p>{t('guide_yoga_duration_5day_p')}</p>

        <h2>{t('guide_yoga_getting_h2')}</h2>
        <p>{t('guide_yoga_getting_p')}</p>

        <h2>{t('guide_yoga_besttime_h2')}</h2>
        <p>{t('guide_yoga_besttime_p')}</p>

        <div className="faq-section">
          <h2>{t('guide_yoga_faq_h2')}</h2>

          <div className="faq-item">
            <h3>{t('guide_yoga_faq1_q')}</h3>
            <p>{t('guide_yoga_faq1_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_yoga_faq2_q')}</h3>
            <p>{t('guide_yoga_faq2_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_yoga_faq3_q')}</h3>
            <p>{t('guide_yoga_faq3_a')}</p>
          </div>

          <div className="faq-item">
            <h3>{t('guide_yoga_faq4_q')}</h3>
            <p>{t('guide_yoga_faq4_a')}</p>
          </div>
        </div>

        <div className="cta-section">
          <p>{t('guide_yoga_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_yoga_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
