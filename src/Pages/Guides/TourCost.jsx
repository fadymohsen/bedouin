import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function TourCost() {
  const { t } = useTranslation();

  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_cost_breadcrumb'), url: 'https://bedouintrails.com/white-desert-tour-cost' }
      ]} />
      <Helmet>
        <title>{t('guide_cost_title')}</title>
        <meta name="description" content={t('guide_cost_meta_desc')} />
        <meta name="keywords" content="White Desert tour cost, White Desert tour price, Egypt desert tour cost, how much White Desert safari, Egypt Safari Tours price, Bahariya Oasis tour cost, desert camping Egypt price, White Desert tour from Cairo cost" />
        <link rel="canonical" href="https://bedouintrails.com/white-desert-tour-cost" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/white-desert-tour-cost" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/white-desert-tour-cost" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/white-desert-tour-cost" />
        <meta property="og:title" content={t('guide_cost_og_title')} />
        <meta property="og:description" content={t('guide_cost_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/white-desert-tour-cost" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_cost_twitter_title')} />
        <meta name="twitter:description" content={t('guide_cost_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t('guide_cost_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>
          {t('guide_cost_intro_p')}
        </p>

        <h2>{t('guide_cost_factors_h2')}</h2>

        <h3>{t('guide_cost_group_h3')}</h3>
        <p>
          {t('guide_cost_group_p')}
        </p>

        <h3>{t('guide_cost_duration_h3')}</h3>
        <p>
          {t('guide_cost_duration_p')}
        </p>

        <h3>{t('guide_cost_season_h3')}</h3>
        <p>
          {t('guide_cost_season_p')}
        </p>

        <h3>{t('guide_cost_inclusions_h3')}</h3>
        <p>
          {t('guide_cost_inclusions_p')}
        </p>

        <h2>{t('guide_cost_included_h2')}</h2>
        <ul>
          <li>{t('guide_cost_included_li1')}</li>
          <li>{t('guide_cost_included_li2')}</li>
          <li>{t('guide_cost_included_li3')}</li>
          <li>{t('guide_cost_included_li4')}</li>
          <li>{t('guide_cost_included_li5')}</li>
          <li>{t('guide_cost_included_li6')}</li>
        </ul>

        <h2>{t('guide_cost_notincluded_h2')}</h2>
        <ul>
          <li>{t('guide_cost_notincluded_li1')}</li>
          <li>{t('guide_cost_notincluded_li2')}</li>
          <li>{t('guide_cost_notincluded_li3')}</li>
          <li>{t('guide_cost_notincluded_li4')}</li>
        </ul>

        <div className="highlight-box">
          <p><strong>{t('guide_cost_tip_bold')}</strong> {t('guide_cost_tip_text')}</p>
        </div>

        <h2>{t('guide_cost_value_h2')}</h2>
        <ul>
          <li><strong>{t('guide_cost_value_li1_bold')}</strong> {t('guide_cost_value_li1_text')}</li>
          <li><strong>{t('guide_cost_value_li2_bold')}</strong> {t('guide_cost_value_li2_text')}</li>
          <li><strong>{t('guide_cost_value_li3_bold')}</strong> {t('guide_cost_value_li3_text')}</li>
          <li><strong>{t('guide_cost_value_li4_bold')}</strong> {t('guide_cost_value_li4_text')}</li>
        </ul>

        <h2>{t('guide_cost_worth_h2')}</h2>
        <p>
          {t('guide_cost_worth_p1')}
        </p>
        <p>
          {t('guide_cost_worth_p2')}
        </p>

        <div className="cta-section">
          <p>{t('guide_cost_cta')}</p>
          <Link to="/journeys" className="cta-button">{t('guide_cost_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
