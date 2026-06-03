import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import "./scss/style.scss";
import { useTranslation } from 'react-i18next';

export const ExperienceCTA = ({ onTriggerRating }) => {
  const { t } = useTranslation();
  const [hover, setHover] = useState(0);

  return (
    <section className="experience-cta">
      <div className="cta-overlay">
        <div className="cta-content">
          <h2 className="cta-title">{t('share_your_siwa_experience')}</h2>
          <p className="cta-description">
            {t('experience_cta_description')}
          </p>

          <div className="cta-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="star-icon"
                color={(i + 1) <= hover ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(i + 1)}
                onMouseLeave={() => setHover(0)}
                onClick={onTriggerRating}
                style={{ cursor: 'pointer', transition: 'color 200ms', fontSize: '2.5rem' }}
              />
            ))}
          </div>

          <button className="cta-button" onClick={onTriggerRating}>
            {t('rate_us_now')}
          </button>
        </div>
      </div>
    </section>
  );
};