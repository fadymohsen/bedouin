import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function BestTime() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_besttime_breadcrumb'), url: 'https://bedouintrails.com/best-time-to-visit-white-desert' }
      ]} />
      <Helmet>
        <title>{t('guide_besttime_title')}</title>
        <meta name="description" content={t('guide_besttime_meta_desc')} />
        <meta name="keywords" content={t('guide_besttime_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/best-time-to-visit-white-desert" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/best-time-to-visit-white-desert" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/best-time-to-visit-white-desert" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/best-time-to-visit-white-desert" />
        <meta property="og:title" content={t('guide_besttime_og_title')} />
        <meta property="og:description" content={t('guide_besttime_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/best-time-to-visit-white-desert" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_besttime_twitter_title')} />
        <meta name="twitter:description" content={t('guide_besttime_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/western-desert-hero.webp')" }}>
        <h1>{t('guide_besttime_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_besttime_intro_p')}</p>

        <div className="highlight-box">
          <p><strong>{t('guide_besttime_highlight_bold')}</strong> {t('guide_besttime_highlight')}</p>
        </div>

        <h2>{t('guide_besttime_monthly_h2')}</h2>

        <h3>{t('guide_besttime_jan_h3')}</h3>
        <p>{t('guide_besttime_jan_temps')}</p>
        <p>{t('guide_besttime_jan_p')}</p>

        <h3>{t('guide_besttime_feb_h3')}</h3>
        <p>{t('guide_besttime_feb_temps')}</p>
        <p>{t('guide_besttime_feb_p')}</p>

        <h3>{t('guide_besttime_mar_h3')}</h3>
        <p>{t('guide_besttime_mar_temps')}</p>
        <p>{t('guide_besttime_mar_p')}</p>

        <h3>{t('guide_besttime_apr_h3')}</h3>
        <p>{t('guide_besttime_apr_temps')}</p>
        <p>{t('guide_besttime_apr_p')}</p>

        <h3>{t('guide_besttime_may_h3')}</h3>
        <p>{t('guide_besttime_may_temps')}</p>
        <p>{t('guide_besttime_may_p')}</p>

        <h3>{t('guide_besttime_summer_h3')}</h3>
        <p>{t('guide_besttime_summer_temps')}</p>
        <p>{t('guide_besttime_summer_p')}</p>

        <h3>{t('guide_besttime_sep_h3')}</h3>
        <p>{t('guide_besttime_sep_temps')}</p>
        <p>{t('guide_besttime_sep_p')}</p>

        <h3>{t('guide_besttime_oct_h3')}</h3>
        <p>{t('guide_besttime_oct_temps')}</p>
        <p>{t('guide_besttime_oct_p')}</p>

        <h3>{t('guide_besttime_nov_h3')}</h3>
        <p>{t('guide_besttime_nov_temps')}</p>
        <p>{t('guide_besttime_nov_p')}</p>

        <h3>{t('guide_besttime_dec_h3')}</h3>
        <p>{t('guide_besttime_dec_temps')}</p>
        <p>{t('guide_besttime_dec_p')}</p>

        <h2>{t('guide_besttime_activity_h2')}</h2>
        <ul>
          <li><strong>{t('guide_besttime_activity_li1_bold')}</strong> {t('guide_besttime_activity_li1_text')}</li>
          <li><strong>{t('guide_besttime_activity_li2_bold')}</strong> {t('guide_besttime_activity_li2_text')}</li>
          <li><strong>{t('guide_besttime_activity_li3_bold')}</strong> {t('guide_besttime_activity_li3_text')}</li>
          <li><strong>{t('guide_besttime_activity_li4_bold')}</strong> {t('guide_besttime_activity_li4_text')}</li>
          <li><strong>{t('guide_besttime_activity_li5_bold')}</strong> {t('guide_besttime_activity_li5_text')}</li>
          <li><strong>{t('guide_besttime_activity_li6_bold')}</strong> {t('guide_besttime_activity_li6_text')}</li>
        </ul>

        <h2>{t('guide_besttime_rain_h2')}</h2>
        <p>{t('guide_besttime_rain_p')}</p>

        <div className="cta-section">
          <p>{t('guide_besttime_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_browse_tours')}</Link>
        </div>
      </div>
    </div>
  );
}
