import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../utils/Breadcrumbs';
import './scss/style.scss';

export default function HowToGetThere() {
  const { t } = useTranslation();
  return (
    <div className="guide-page">
      <Breadcrumbs items={[
        { name: t('breadcrumb_home'), url: 'https://bedouintrails.com/' },
        { name: t('guide_howto_breadcrumb'), url: 'https://bedouintrails.com/how-to-get-to-white-desert' }
      ]} />
      <Helmet>
        <title>{t('guide_howto_title')}</title>
        <meta name="description" content={t('guide_howto_meta_desc')} />
        <meta name="keywords" content={t('guide_howto_meta_keywords')} />
        <link rel="canonical" href="https://bedouintrails.com/how-to-get-to-white-desert" />
        <link rel="alternate" hreflang="en" href="https://bedouintrails.com/how-to-get-to-white-desert" />
        <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/how-to-get-to-white-desert" />
        <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/how-to-get-to-white-desert" />
        <meta property="og:title" content={t('guide_howto_og_title')} />
        <meta property="og:description" content={t('guide_howto_og_desc')} />
        <meta property="og:url" content="https://bedouintrails.com/how-to-get-to-white-desert" />
        <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('guide_howto_twitter_title')} />
        <meta name="twitter:description" content={t('guide_howto_twitter_desc')} />
        <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
      </Helmet>

      <div className="guide-hero" style={{ backgroundImage: "url('/img/bg.webp')" }}>
        <h1>{t('guide_howto_h1')}</h1>
      </div>

      <div className="guide-content">
        <p>{t('guide_howto_intro_p')}</p>

        <h2>{t('guide_howto_route_h2')}</h2>
        <ol>
          <li><strong>{t('guide_howto_route_li1_bold')}</strong> — {t('guide_howto_route_li1_text')}</li>
          <li><strong>{t('guide_howto_route_li2_bold')}</strong> — {t('guide_howto_route_li2_text')}</li>
          <li><strong>{t('guide_howto_route_li3_bold')}</strong> — {t('guide_howto_route_li3_text')}</li>
          <li><strong>{t('guide_howto_route_li4_bold')}</strong> — {t('guide_howto_route_li4_text')}</li>
          <li><strong>{t('guide_howto_route_li5_bold')}</strong> — {t('guide_howto_route_li5_text')}</li>
          <li><strong>{t('guide_howto_route_li6_bold')}</strong> — {t('guide_howto_route_li6_text')}</li>
          <li><strong>{t('guide_howto_route_li7_bold')}</strong> — {t('guide_howto_route_li7_text')}</li>
        </ol>

        <div className="highlight-box">
          <p>{t('guide_howto_highlight')}</p>
        </div>

        <h2>{t('guide_howto_transport_h2')}</h2>

        <h3>{t('guide_howto_option1_h3')}</h3>
        <p>{t('guide_howto_option1_p')}</p>

        <h3>{t('guide_howto_option2_h3')}</h3>
        <p>{t('guide_howto_option2_p')}</p>

        <h3>{t('guide_howto_option3_h3')}</h3>
        <p>{t('guide_howto_option3_p')}</p>

        <h2>{t('guide_howto_tips_h2')}</h2>
        <ul>
          <li><strong>{t('guide_howto_tips_li1_bold')}</strong> — {t('guide_howto_tips_li1_text')}</li>
          <li><strong>{t('guide_howto_tips_li2_bold')}</strong> — {t('guide_howto_tips_li2_text')}</li>
          <li><strong>{t('guide_howto_tips_li3_bold')}</strong> — {t('guide_howto_tips_li3_text')}</li>
          <li><strong>{t('guide_howto_tips_li4_bold')}</strong> — {t('guide_howto_tips_li4_text')}</li>
          <li><strong>{t('guide_howto_tips_li5_bold')}</strong> — {t('guide_howto_tips_li5_text')}</li>
        </ul>

        <h2>{t('guide_howto_distance_h2')}</h2>
        <ul>
          <li>{t('guide_howto_distance_li1')}</li>
          <li>{t('guide_howto_distance_li2')}</li>
          <li>{t('guide_howto_distance_li3')}</li>
          <li>{t('guide_howto_distance_li4')}</li>
          <li><strong>{t('guide_howto_distance_li5')}</strong></li>
        </ul>

        <div className="cta-section">
          <p>{t('guide_howto_cta')}</p>
          <Link to="/white-desert-tour-from-cairo" className="cta-button">{t('guide_howto_cta_button')}</Link>
        </div>
      </div>
    </div>
  );
}
