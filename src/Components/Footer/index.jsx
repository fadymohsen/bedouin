import React, { useEffect } from 'react'
import "./scss/style.scss"
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const location = useLocation();
  const { t } = useTranslation();


  const hideFooteron = ["/auth", "/profile", '/book/', "/auth", "/profile", '/book'];
  const shouldHide = hideFooteron.some(path => location.pathname.startsWith(path));

  if (shouldHide) return null;
  return (
    <div className='footer'>
      <img src="/img/logo.png" alt="Bedouin Trails Logo" width="80" height="80" />
      <h1>Bedouin Trails</h1>
      <div className="links-socials">
        <div className="footer-links">
          <div className='footer-link'>
            <Link to="/">{t('home')}</Link>
          </div>
          <div className='footer-link'>
            <Link to="/about">{t('about')}</Link>
          </div>
          <div className='footer-link'>
            <Link to="/journeys">{t('journeys')}</Link>
          </div>
          <div className='footer-link'>
            <Link to="/blogs">{t('blogs')}</Link>
          </div>
          <div className='footer-link'>
            <Link to="/faq">{t('faq')}</Link>
          </div>
          <div className='footer-link'>
            <Link to="/#contact">{t('contact')}</Link>
          </div>
        </div>
        <div className="social-links">
          <div className="vertical-line"></div>
          <div className="socials">
            <a href="https://wa.link/qtrpve/" className='link' target="_blank" rel="noopener noreferrer">
              <FaWhatsapp id='whatsapp' />
            </a>
            <a href="https://www.instagram.com/the.white.and.black.desert?igsh=aHdjbzB6ajJ5dTBk" className='link' target="_blank" rel="noopener noreferrer">
              <FaInstagram id='instgram' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587717913002" className='link' target="_blank" rel="noopener noreferrer">
              <FaFacebook id='facebook' />
            </a>
          </div>
          <div className="vertical-line"></div>
        </div>
      </div>
      <div className="copyrights">
        <p>{t('terms_privacy')}</p>
      </div>
    </div>
  )
}
