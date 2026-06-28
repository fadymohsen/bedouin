import React, { useState, useEffect } from 'react'
import "./scss/style.scss"
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Loading from '../../Components/Loading';
import api from '../../services/api';
import { Helmet } from 'react-helmet-async';

export default function FAQ({ faqs = [] }) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await api.getFAQ();

        if (response.data && response.data.data) {
          setFaqData(response.data.data);
        } else {
          setFaqData([]);
        }
      } catch (err) {
        console.error('Error fetching FAQ data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className='faq'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#c53030', fontSize: '1.1rem' }}>{t('error_loading_data') || 'Error loading data'}</p>
            <p style={{ color: '#999' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };


  return (
    <div className='faq'>
      <Helmet>
        <title>{t('faq')} | Bedouin Trails - Desert Safari in Bahariya & Siwa Oasis</title>
        <meta name="description" content="Frequently asked questions about desert safari trips, Bahariya Oasis, Siwa Oasis, White Desert camping, booking, pricing, and what to expect on your adventure with Bedouin Trails." />
        <link rel="canonical" href="https://bedouintrails.com/faq" />
        <meta property="og:title" content={`${t('faq')} | Bedouin Trails`} />
        <meta property="og:description" content="Frequently asked questions about desert safari trips, Bahariya Oasis, Siwa Oasis, White Desert camping, booking, and pricing." />
        <meta property="og:url" content="https://bedouintrails.com/faq" />
        <meta property="og:image" content="/og-image.jpg" />
      </Helmet>
      <div className="faq-hero">
        <h1>{t('faq')}</h1>
        <div className="curve-bg"></div>
      </div>

      <div className="faq-container">
        <div className="faq-accordion">
          {faqData.length > 0 ? faqData.map((item, index) => (
            <div
              key={item.id || index}
              className={`faq-item ${openItems.includes(index) ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openItems.includes(index)}
              >
                <span className="accordion-icon">
                  <FaChevronDown />
                </span>

                <span className="question-text">{item.question}</span>

                <span className="question-number">
                  {index + 1}
                </span>
              </button>

              <div className="faq-answer">
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          )) : (
            <div className='no-FAQ'>
              <h1>No FAQ</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}