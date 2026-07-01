import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../utils/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import './scss/style.scss';

export default function DesertSafety() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_safety_breadcrumb'), url: 'https://bedouintrails.com/desert-safety-guide' }
      ]} />
      <Helmet>
        <title>{t('guide_safety_title')}</title>
        <meta name="description" content={t('guide_safety_meta_desc')} />
        <meta name="keywords" content="desert safety Egypt, White Desert safety, Egypt desert tour safety, desert survival tips, desert camping safety, Western Desert Egypt safety, safari safety tips, desert first aid, desert travel advice" />
        <link rel="canonical" href="https://bedouintrails.com/desert-safety-guide" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/desert-safety-guide" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/desert-safety-guide" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/desert-safety-guide" />
        <meta property="og:title" content={t('guide_safety_og_title')} />
        <meta property="og:description" content={t('guide_safety_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/desert-safety-guide" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_safety_og_title')} />
        <meta name="twitter:description" content={t('guide_safety_og_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/adventure4.webp')" }}>
        <h1>{t('guide_safety_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_safety_intro')}</p>

        <h2>{t('guide_safety_sun_h2')}</h2>
        <ul>
          <li><strong>{t('guide_safety_sun_1_bold')}</strong> — {t('guide_safety_sun_1')}</li>
          <li><strong>{t('guide_safety_sun_2_bold')}</strong> — {t('guide_safety_sun_2')}</li>
          <li><strong>{t('guide_safety_sun_3_bold')}</strong> — {t('guide_safety_sun_3')}</li>
          <li><strong>{t('guide_safety_sun_4_bold')}</strong> — {t('guide_safety_sun_4')}</li>
        </ul>

        <h2>{t('guide_safety_hydration_h2')}</h2>
        <p>{t('guide_safety_hydration_p')}</p>
        <ul>
          <li>{t('guide_safety_hydration_1')}</li>
          <li>{t('guide_safety_hydration_2')}</li>
          <li>{t('guide_safety_hydration_3')}</li>
        </ul>

        <div className="highlight-box">
          <p>{t('guide_safety_highlight')}</p>
        </div>

        <h2>{t('guide_safety_navigation_h2')}</h2>
        <p>{t('guide_safety_navigation_p')}</p>

        <h2>{t('guide_safety_wildlife_h2')}</h2>
        <p>{t('guide_safety_wildlife_p')}</p>
        <ul>
          <li>{t('guide_safety_wildlife_1')}</li>
          <li>{t('guide_safety_wildlife_2')}</li>
          <li>{t('guide_safety_wildlife_3')}</li>
        </ul>

        <h2>{t('guide_safety_night_h2')}</h2>
        <p>{t('guide_safety_night_p')}</p>
        <ul>
          <li>{t('guide_safety_night_1')}</li>
          <li>{t('guide_safety_night_2')}</li>
          <li>{t('guide_safety_night_3')}</li>
        </ul>

        <h2>{t('guide_safety_medical_h2')}</h2>
        <p>{t('guide_safety_medical_p')}</p>
        <ul>
          <li>{t('guide_safety_medical_1')}</li>
          <li>{t('guide_safety_medical_2')}</li>
          <li>{t('guide_safety_medical_3')}</li>
        </ul>

        <h2>{t('guide_safety_vehicle_h2')}</h2>
        <p>{t('guide_safety_vehicle_p')}</p>

        <h2>{t('guide_safety_why_guide_h2')}</h2>
        <p>{t('guide_safety_why_guide_p')}</p>

        <div className="cta-section">
          <p>{t('guide_safety_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_browse_tours')}</Link>
        </div>
      </div>
    </div>
  );
}
