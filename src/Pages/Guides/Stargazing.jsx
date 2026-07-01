import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function Stargazing() {
  const { t } = useTranslation();

  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_stars_breadcrumb'), url: 'https://bedouintrails.com/stargazing-western-desert' }
      ]} />
      <Helmet>
        <title>{t('guide_stars_title')}</title>
        <meta name="description" content={t('guide_stars_meta_desc')} />
        <meta name="keywords" content="stargazing Western Desert, stargazing Egypt, White Desert stars, dark sky Egypt, Milky Way Egypt, desert stargazing, White Desert Camping, night sky Western Desert, astrophotography Egypt desert" />
        <link rel="canonical" href="https://bedouintrails.com/stargazing-western-desert" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/stargazing-western-desert" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/stargazing-western-desert" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/stargazing-western-desert" />
        <meta property="og:title" content={t('guide_stars_og_title')} />
        <meta property="og:description" content={t('guide_stars_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/stargazing-western-desert" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_stars_twitter_title')} />
        <meta name="twitter:description" content={t('guide_stars_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/contact-cta.webp')" }}>
        <h1>{t('guide_stars_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>
          {t('guide_stars_intro_p')}
        </p>

        <h2>{t('guide_stars_why_h2')}</h2>
        <ul>
          <li><strong>{t('guide_stars_why_li1_bold')}</strong> {t('guide_stars_why_li1_text')}</li>
          <li><strong>{t('guide_stars_why_li2_bold')}</strong> {t('guide_stars_why_li2_text')}</li>
          <li><strong>{t('guide_stars_why_li3_bold')}</strong> {t('guide_stars_why_li3_text')}</li>
          <li><strong>{t('guide_stars_why_li4_bold')}</strong> {t('guide_stars_why_li4_text')}</li>
          <li><strong>{t('guide_stars_why_li5_bold')}</strong> {t('guide_stars_why_li5_text')}</li>
        </ul>

        <div className="highlight-box">
          <p>{t('guide_stars_highlight')}</p>
        </div>

        <h2>{t('guide_stars_see_h2')}</h2>

        <h3>{t('guide_stars_milkyway_h3')}</h3>
        <p>
          {t('guide_stars_milkyway_p')}
        </p>

        <h3>{t('guide_stars_planets_h3')}</h3>
        <p>
          {t('guide_stars_planets_p')}
        </p>

        <h3>{t('guide_stars_shooting_h3')}</h3>
        <p>
          {t('guide_stars_shooting_p')}
        </p>

        <h3>{t('guide_stars_constellations_h3')}</h3>
        <p>
          {t('guide_stars_constellations_p')}
        </p>

        <h2>{t('guide_stars_besttime_h2')}</h2>
        <ul>
          <li><strong>{t('guide_stars_besttime_li1_bold')}</strong> {t('guide_stars_besttime_li1_text')}</li>
          <li><strong>{t('guide_stars_besttime_li2_bold')}</strong> {t('guide_stars_besttime_li2_text')}</li>
          <li><strong>{t('guide_stars_besttime_li3_bold')}</strong> {t('guide_stars_besttime_li3_text')}</li>
          <li><strong>{t('guide_stars_besttime_li4_bold')}</strong> {t('guide_stars_besttime_li4_text')}</li>
        </ul>

        <h2>{t('guide_stars_photo_h2')}</h2>
        <ul>
          <li><strong>{t('guide_stars_photo_li1_bold')}</strong> {t('guide_stars_photo_li1_text')}</li>
          <li><strong>{t('guide_stars_photo_li2_bold')}</strong> {t('guide_stars_photo_li2_text')}</li>
          <li><strong>{t('guide_stars_photo_li3_bold')}</strong> {t('guide_stars_photo_li3_text')}</li>
          <li><strong>{t('guide_stars_photo_li4_bold')}</strong> {t('guide_stars_photo_li4_text')}</li>
          <li><strong>{t('guide_stars_photo_li5_bold')}</strong> {t('guide_stars_photo_li5_text')}</li>
          <li><strong>{t('guide_stars_photo_li6_bold')}</strong> {t('guide_stars_photo_li6_text')}</li>
        </ul>

        <h2>{t('guide_stars_camping_h2')}</h2>
        <p>
          {t('guide_stars_camping_p')}
        </p>

        <div className="cta-section">
          <p>{t('guide_stars_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_stars_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
