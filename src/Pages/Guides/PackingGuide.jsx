import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function PackingGuide() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_packing_breadcrumb'), url: 'https://bedouintrails.com/what-to-pack-white-desert' }
      ]} />
      <Helmet>
        <title>{t('guide_packing_title')}</title>
        <meta name="description" content={t('guide_packing_meta_desc')} />
        <meta name="keywords" content={t('guide_packing_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/what-to-pack-white-desert" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/what-to-pack-white-desert" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/what-to-pack-white-desert" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/what-to-pack-white-desert" />
        <meta property="og:title" content={t('guide_packing_og_title')} />
        <meta property="og:description" content={t('guide_packing_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/what-to-pack-white-desert" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_packing_twitter_title')} />
        <meta name="twitter:description" content={t('guide_packing_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/adventure.webp')" }}>
        <h1>{t('guide_packing_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_packing_intro_p')}</p>

        <h2>{t('guide_packing_provided_h2')}</h2>
        <p>{t('guide_packing_provided_intro')}</p>
        <ul>
          <li>{t('guide_packing_provided_li1')}</li>
          <li>{t('guide_packing_provided_li2')}</li>
          <li>{t('guide_packing_provided_li3')}</li>
          <li>{t('guide_packing_provided_li4')}</li>
          <li>{t('guide_packing_provided_li5')}</li>
          <li>{t('guide_packing_provided_li6')}</li>
          <li>{t('guide_packing_provided_li7')}</li>
          <li>{t('guide_packing_provided_li8')}</li>
        </ul>

        <h2>{t('guide_packing_essential_h2')}</h2>

        <h3>{t('guide_packing_clothing_h3')}</h3>
        <ul>
          <li><strong>{t('guide_packing_clothing_li1_bold')}</strong> {t('guide_packing_clothing_li1_text')}</li>
          <li><strong>{t('guide_packing_clothing_li2_bold')}</strong> {t('guide_packing_clothing_li2_text')}</li>
          <li><strong>{t('guide_packing_clothing_li3_bold')}</strong> — {t('guide_packing_clothing_li3_text')}</li>
          <li><strong>{t('guide_packing_clothing_li4_bold')}</strong> — {t('guide_packing_clothing_li4_text')}</li>
          <li><strong>{t('guide_packing_clothing_li5_bold')}</strong> — {t('guide_packing_clothing_li5_text')}</li>
          <li><strong>{t('guide_packing_clothing_li6_bold')}</strong> — {t('guide_packing_clothing_li6_text')}</li>
          <li><strong>{t('guide_packing_clothing_li7_bold')}</strong> — {t('guide_packing_clothing_li7_text')}</li>
        </ul>

        <h3>{t('guide_packing_footwear_h3')}</h3>
        <ul>
          <li><strong>{t('guide_packing_footwear_li1_bold')}</strong> — {t('guide_packing_footwear_li1_text')}</li>
          <li><strong>{t('guide_packing_footwear_li2_bold')}</strong> — {t('guide_packing_footwear_li2_text')}</li>
        </ul>

        <h3>{t('guide_packing_sun_h3')}</h3>
        <ul>
          <li><strong>{t('guide_packing_sun_li1_bold')}</strong> — {t('guide_packing_sun_li1_text')}</li>
          <li><strong>{t('guide_packing_sun_li2_bold')}</strong> — {t('guide_packing_sun_li2_text')}</li>
          <li><strong>{t('guide_packing_sun_li3_bold')}</strong> — {t('guide_packing_sun_li3_text')}</li>
          <li><strong>{t('guide_packing_sun_li4_bold')}</strong> — {t('guide_packing_sun_li4_text')}</li>
        </ul>

        <h3>{t('guide_packing_wind_h3')}</h3>
        <ul>
          <li><strong>{t('guide_packing_wind_li1_bold')}</strong> — {t('guide_packing_wind_li1_text')}</li>
        </ul>

        <h3>{t('guide_packing_personal_h3')}</h3>
        <ul>
          <li><strong>{t('guide_packing_personal_li1_bold')}</strong> — {t('guide_packing_personal_li1_text')}</li>
          <li><strong>{t('guide_packing_personal_li2_bold')}</strong> — {t('guide_packing_personal_li2_text')}</li>
          <li><strong>{t('guide_packing_personal_li3_bold')}</strong> — {t('guide_packing_personal_li3_text')}</li>
          <li><strong>{t('guide_packing_personal_li4_bold')}</strong> — {t('guide_packing_personal_li4_text')}</li>
          <li><strong>{t('guide_packing_personal_li5_bold')}</strong> — {t('guide_packing_personal_li5_text')}</li>
          <li><strong>{t('guide_packing_personal_li6_bold')}</strong> — {t('guide_packing_personal_li6_text')}</li>
          <li><strong>{t('guide_packing_personal_li7_bold')}</strong> — {t('guide_packing_personal_li7_text')}</li>
        </ul>

        <h2>{t('guide_packing_notpack_h2')}</h2>
        <ul>
          <li><strong>{t('guide_packing_notpack_li1_bold')}</strong> — {t('guide_packing_notpack_li1_text')}</li>
          <li><strong>{t('guide_packing_notpack_li2_bold')}</strong> — {t('guide_packing_notpack_li2_text')}</li>
          <li><strong>{t('guide_packing_notpack_li3_bold')}</strong> — {t('guide_packing_notpack_li3_text')}</li>
          <li><strong>{t('guide_packing_notpack_li4_bold')}</strong> — {t('guide_packing_notpack_li4_text')}</li>
          <li><strong>{t('guide_packing_notpack_li5_bold')}</strong> — {t('guide_packing_notpack_li5_text')}</li>
        </ul>

        <div className="highlight-box">
          <p>{t('guide_packing_highlight')}</p>
        </div>

        <h2>{t('guide_packing_seasonal_h2')}</h2>

        <h3>{t('guide_packing_autumn_h3')}</h3>
        <p>{t('guide_packing_autumn_p')}</p>

        <h3>{t('guide_packing_winter_h3')}</h3>
        <p>{t('guide_packing_winter_p')}</p>

        <h3>{t('guide_packing_spring_h3')}</h3>
        <p>{t('guide_packing_spring_p')}</p>

        <div className="cta-section">
          <p>{t('guide_packing_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_browse_tours')}</Link>
        </div>
      </div>
    </div>
  );
}
