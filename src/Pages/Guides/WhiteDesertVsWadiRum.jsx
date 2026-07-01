import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function WhiteDesertVsWadiRum() {
  const { t } = useTranslation();

  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_compare_breadcrumb'), url: 'https://bedouintrails.com/white-desert-vs-wadi-rum' }
      ]} />
      <Helmet>
        <title>{t('guide_compare_title')}</title>
        <meta name="description" content={t('guide_compare_meta_desc')} />
        <meta name="keywords" content="White Desert vs Wadi Rum, Egypt desert or Jordan desert, White Desert Egypt, Wadi Rum comparison, desert safari comparison, best desert experience, Egypt Safari Tours, White Desert Safari" />
        <link rel="canonical" href="https://bedouintrails.com/white-desert-vs-wadi-rum" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/white-desert-vs-wadi-rum" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/white-desert-vs-wadi-rum" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/white-desert-vs-wadi-rum" />
        <meta property="og:title" content={t('guide_compare_og_title')} />
        <meta property="og:description" content={t('guide_compare_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/white-desert-vs-wadi-rum" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_compare_twitter_title')} />
        <meta name="twitter:description" content={t('guide_compare_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/western-desert-hero.webp')" }}>
        <h1>{t('guide_compare_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>
          {t('guide_compare_intro_p')}
        </p>

        <h2>{t('guide_compare_landscape_h2')}</h2>
        <h3>{t('guide_compare_landscape_wd_h3')}</h3>
        <p>
          {t('guide_compare_landscape_wd_p')}
        </p>
        <h3>{t('guide_compare_landscape_wr_h3')}</h3>
        <p>
          {t('guide_compare_landscape_wr_p')}
        </p>

        <div className="highlight-box">
          <p><strong>{t('guide_compare_landscape_verdict_bold')}</strong> {t('guide_compare_landscape_verdict_text')}</p>
        </div>

        <h2>{t('guide_compare_activities_h2')}</h2>
        <h3>{t('guide_compare_activities_wd_h3')}</h3>
        <ul>
          <li>{t('guide_compare_activities_wd_li1')}</li>
          <li>{t('guide_compare_activities_wd_li2')}</li>
          <li>{t('guide_compare_activities_wd_li3')}</li>
          <li>{t('guide_compare_activities_wd_li4')}</li>
          <li>{t('guide_compare_activities_wd_li5')}</li>
          <li>{t('guide_compare_activities_wd_li6')}</li>
          <li>{t('guide_compare_activities_wd_li7')}</li>
        </ul>
        <h3>{t('guide_compare_activities_wr_h3')}</h3>
        <ul>
          <li>{t('guide_compare_activities_wr_li1')}</li>
          <li>{t('guide_compare_activities_wr_li2')}</li>
          <li>{t('guide_compare_activities_wr_li3')}</li>
          <li>{t('guide_compare_activities_wr_li4')}</li>
          <li>{t('guide_compare_activities_wr_li5')}</li>
          <li>{t('guide_compare_activities_wr_li6')}</li>
        </ul>

        <h2>{t('guide_compare_remoteness_h2')}</h2>
        <h3>{t('guide_compare_remoteness_wd_h3')}</h3>
        <p>
          {t('guide_compare_remoteness_wd_p')}
        </p>
        <h3>{t('guide_compare_remoteness_wr_h3')}</h3>
        <p>
          {t('guide_compare_remoteness_wr_p')}
        </p>

        <h2>{t('guide_compare_accommodation_h2')}</h2>
        <h3>{t('guide_compare_accommodation_wd_h3')}</h3>
        <p>
          {t('guide_compare_accommodation_wd_p')}
        </p>
        <h3>{t('guide_compare_accommodation_wr_h3')}</h3>
        <p>
          {t('guide_compare_accommodation_wr_p')}
        </p>

        <h2>{t('guide_compare_accessibility_h2')}</h2>
        <h3>{t('guide_compare_accessibility_wd_h3')}</h3>
        <p>
          {t('guide_compare_accessibility_wd_p')}
        </p>
        <h3>{t('guide_compare_accessibility_wr_h3')}</h3>
        <p>
          {t('guide_compare_accessibility_wr_p')}
        </p>

        <h2>{t('guide_compare_culture_h2')}</h2>
        <h3>{t('guide_compare_culture_wd_h3')}</h3>
        <p>
          {t('guide_compare_culture_wd_p')}
        </p>
        <h3>{t('guide_compare_culture_wr_h3')}</h3>
        <p>
          {t('guide_compare_culture_wr_p')}
        </p>

        <h2>{t('guide_compare_bestfor_h2')}</h2>
        <ul>
          <li><strong>{t('guide_compare_bestfor_li1_bold')}</strong> {t('guide_compare_bestfor_li1_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li2_bold')}</strong> {t('guide_compare_bestfor_li2_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li3_bold')}</strong> {t('guide_compare_bestfor_li3_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li4_bold')}</strong> {t('guide_compare_bestfor_li4_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li5_bold')}</strong> {t('guide_compare_bestfor_li5_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li6_bold')}</strong> {t('guide_compare_bestfor_li6_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li7_bold')}</strong> {t('guide_compare_bestfor_li7_text')}</li>
          <li><strong>{t('guide_compare_bestfor_li8_bold')}</strong> {t('guide_compare_bestfor_li8_text')}</li>
        </ul>

        <h2>{t('guide_compare_both_h2')}</h2>
        <p>
          {t('guide_compare_both_p')}
        </p>

        <div className="cta-section">
          <p>{t('guide_compare_cta')}</p>
          <Link to="/white-desert-tour-from-cairo" className="cta-button">{t('guide_compare_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
