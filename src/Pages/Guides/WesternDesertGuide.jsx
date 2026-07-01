import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function WesternDesertGuide() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_western_breadcrumb'), url: 'https://bedouintrails.com/western-desert-egypt-guide' }
      ]} />
      <Helmet>
        <title>{t('guide_western_title')}</title>
        <meta name="description" content={t('guide_western_meta_desc')} />
        <meta name="keywords" content={t('guide_western_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/western-desert-egypt-guide" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/western-desert-egypt-guide" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/western-desert-egypt-guide" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/western-desert-egypt-guide" />
        <meta property="og:title" content={t('guide_western_og_title')} />
        <meta property="og:description" content={t('guide_western_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/western-desert-egypt-guide" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_western_twitter_title')} />
        <meta name="twitter:description" content={t('guide_western_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Complete Guide to Egypt's Western Desert",
            "description": "The ultimate guide to exploring Egypt's Western Desert including the White Desert, Black Desert, Bahariya Oasis, Siwa Oasis, and Djara Cave.",
            "url": "https://bedouintrails.com/western-desert-egypt-guide",
            "publisher": { "@type": "Organization", "name": "Bedouin Trails", "url": "https://bedouintrails.com" },
            "mainEntityOfPage": "https://bedouintrails.com/western-desert-egypt-guide"
          })}
        </script>
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/western-desert-hero.webp')" }}>
        <h1>{t('guide_western_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_western_intro_p1')}</p>
        <p>{t('guide_western_intro_p2')}</p>

        <h2>{t('guide_western_geography_h2')}</h2>
        <p>{t('guide_western_geography_p1')}</p>
        <p>{t('guide_western_geography_p2')}</p>

        <h2>{t('guide_western_destinations_h2')}</h2>

        <h3>{t('guide_western_white_h3')}</h3>
        <p>
          {t('guide_western_white_p1')} <Link to="/white-desert-tour-from-cairo">{t('guide_western_white_link')}</Link> {t('guide_western_white_p2')}
        </p>

        <h3>{t('guide_western_black_h3')}</h3>
        <p>
          {t('guide_western_black_p1')} <Link to="/black-desert-egypt">{t('guide_western_black_link')}</Link> {t('guide_western_black_p2')}
        </p>

        <h3>{t('guide_western_bahariya_h3')}</h3>
        <p>{t('guide_western_bahariya_p')}</p>

        <h3>{t('guide_western_siwa_h3')}</h3>
        <p>{t('guide_western_siwa_p')}</p>

        <h3>{t('guide_western_crystal_h3')}</h3>
        <p>
          <Link to="/crystal-mountain-egypt">{t('guide_western_crystal_link')}</Link> {t('guide_western_crystal_p')}
        </p>

        <h3>{t('guide_western_djara_h3')}</h3>
        <p>
          <Link to="/djara-cave">{t('guide_western_djara_link')}</Link> {t('guide_western_djara_p')}
        </p>

        <h3>{t('guide_western_agabat_h3')}</h3>
        <p>{t('guide_western_agabat_p')}</p>

        <h3>{t('guide_western_sandsea_h3')}</h3>
        <p>{t('guide_western_sandsea_p')}</p>

        <h2>{t('guide_western_explore_h2')}</h2>
        <p>{t('guide_western_explore_p')}</p>

        <h3>{t('guide_western_duration_h3')}</h3>
        <ul>
          <li><strong><Link to="/white-desert-tour-from-cairo">{t('guide_western_duration_li1_bold')}</Link></strong> — {t('guide_western_duration_li1_text')}</li>
          <li><strong>{t('guide_western_duration_li2_bold')}</strong> — {t('guide_western_duration_li2_text')}</li>
          <li><strong>{t('guide_western_duration_li3_bold')}</strong> — {t('guide_western_duration_li3_text')} <Link to="/djara-cave">{t('guide_western_duration_li3_link')}</Link> {t('guide_western_duration_li3_cont')}</li>
          <li><strong>{t('guide_western_duration_li4_bold')}</strong> — {t('guide_western_duration_li4_text')} <Link to="/camel-trek">{t('guide_western_duration_li4_link')}</Link> {t('guide_western_duration_li4_cont')}</li>
          <li><strong>{t('guide_western_duration_li5_bold')}</strong> — {t('guide_western_duration_li5_text')}</li>
        </ul>

        <h3>{t('guide_western_activity_h3')}</h3>
        <ul>
          <li><strong>{t('guide_western_activity_li1_bold')}</strong> — {t('guide_western_activity_li1_text')}</li>
          <li><strong><Link to="/camel-trek">{t('guide_western_activity_li2_bold')}</Link></strong> — {t('guide_western_activity_li2_text')}</li>
          <li><strong>{t('guide_western_activity_li3_bold')}</strong> — {t('guide_western_activity_li3_text')}</li>
          <li><strong><Link to="/desert-yoga-retreat">{t('guide_western_activity_li4_bold')}</Link></strong> — {t('guide_western_activity_li4_text')}</li>
          <li><strong>{t('guide_western_activity_li5_bold')}</strong> — {t('guide_western_activity_li5_text')}</li>
        </ul>

        <h2>{t('guide_western_climate_h2')}</h2>
        <p>{t('guide_western_climate_p')}</p>

        <div className="highlight-box">
          <p>{t('guide_western_highlight')}</p>
        </div>

        <h2>{t('guide_western_history_h2')}</h2>
        <p>{t('guide_western_history_p1')}</p>
        <p>{t('guide_western_history_p2')}</p>

        <h2>{t('guide_western_wildlife_h2')}</h2>
        <p>{t('guide_western_wildlife_p')}</p>

        <h2>{t('guide_western_practical_h2')}</h2>

        <h3>{t('guide_western_getting_h3')}</h3>
        <p>{t('guide_western_getting_p')}</p>

        <h3>{t('guide_western_bring_h3')}</h3>
        <p>
          {t('guide_western_bring_p')} <Link to="/what-to-pack-white-desert">{t('guide_western_bring_link')}</Link>{t('guide_western_bring_p_cont')}
        </p>

        <h3>{t('guide_western_permits_h3')}</h3>
        <p>{t('guide_western_permits_p')}</p>

        <h3>{t('guide_western_safety_h3')}</h3>
        <p>
          {t('guide_western_safety_p')} <Link to="/desert-safety-guide">{t('guide_western_safety_link')}</Link> {t('guide_western_safety_p_cont')}
        </p>

        <div className="cta-section">
          <p>{t('guide_western_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_western_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
