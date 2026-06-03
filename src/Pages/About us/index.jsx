import React, { useState, useEffect } from 'react';
import './scss/style.scss';
import { useTranslation } from 'react-i18next';
import Loading from '../../Components/Loading';
import api from '../../services/api';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await api.getAbout();

        if (response.data && response.data.data) {
          setAboutData(response.data.data);
        } else {
          setAboutData([]);
        }
      } catch (err) {
        console.error('Error fetching about data:', err);
        setError(err.message);
        setAboutData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="about-page">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#c53030', fontSize: '1.1rem' }}>{t('error_loading_data') || 'Error loading data'}</p>
            <p style={{ color: '#999' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>{t('about_hero_title')}</h1>
          <div className="curve-bg"></div>

        </div>
      </section>

      {aboutData.map((item, index) => (
        <React.Fragment key={item.id || index}>
          {index === 0 && (
            <img
              src={item.image}
              alt={item.title}
              className="top-overlapping-img"
            />
          )}

          <section className={`section-row ${index === 0 ? 'first-section' : ''} ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="text-box">
              <h2>{item.title}</h2>

              <div className="description-content">
                {item.description.split('\n').map((line, i) => {
                  const trimmedLine = line.trim();
                  if (!trimmedLine) return null;
                  const isHeading = trimmedLine.length < 50 && (trimmedLine.endsWith(':') || trimmedLine.endsWith('؟'));

                  return isHeading ? (
                    <h4 key={i} className="sub-heading">{trimmedLine}</h4>
                  ) : (
                    <p key={i}>{trimmedLine}</p>
                  );
                })}
              </div>
            </div>

            <div className={`image-box ${index === 0 ? 'spacer' : ''}`}>
              {index !== 0 && (
                <img src={item.image} alt={item.title} className="rounded-rect" />
              )}
            </div>
          </section>
        </React.Fragment>
      ))}
      <section className="footer-banner">
        <h2>{t('about_footer_title')}</h2>
        <p>{t('about_footer_text')}</p>
      </section>
    </div>
  );
};

export default About;