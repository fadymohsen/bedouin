import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./scss/style.scss";
import LanguageSwitcher from "../LanguageSwitcher";
import { FaBars } from "react-icons/fa";

export default function Navbar({ userData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('userToken')?.trim();
    setIsLoggedIn(!!token);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    if (location.hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const handleContactClick = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    const isHome = location.pathname === '/' || location.pathname === '/' || location.pathname === '/';
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollToContact', 'true'); // ← set flag
      navigate('/');
    }
  };

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem('scrollToContact');
    if (shouldScroll) {
      sessionStorage.removeItem('scrollToContact'); // ← clean up immediately
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location]); // ← runs every time location changes, catches the home navigation

  const navLinks = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/journeys', label: t('journeys') },
    { path: '/blogs', label: t('blogs') },
    { path: '/myjourneys', label: t('my_journeys') },
    { path: '/faq', label: t('faq') },
    { path: '/#contact', label: t('contact'), isAnchor: true },
  ];

  const isActive = (path) => location.pathname === path;
  const activeLink = navLinks.find(link => !link.isAnchor && isActive(link.path));
  const activeLinkLabel = activeLink?.label || t('home');

  const hideNavbarOn = ["/cardpage", "/auth", "/profile", '/book', "/cardpage", "/order/cardpage", "/auth", "/profile", '/book'];
  const shouldHide = hideNavbarOn.some(path => location.pathname.startsWith(path));

  const navDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';

  if (shouldHide) return null;

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/img/logo.png" alt="Bedouin Trails" />
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="nav-links nav-links--desktop" style={{ direction: navDirection }}>
        {navLinks.map(link => (
          <div key={link.path} className={`nav-link ${!link.isAnchor && isActive(link.path) ? 'active' : ''}`}>
            {link.isAnchor
              ? <a href={link.path} onClick={handleContactClick}>{link.label}</a>
              : <Link to={link.path}>{link.label}</Link>
            }
          </div>
        ))}
      </div>

      {/* Tablet dropdown */}
      <div className="nav-dropdown" ref={dropdownRef}>
        <span className="nav-dropdown__active-label">{activeLinkLabel}</span>
        <button
          className={`nav-dropdown__trigger ${dropdownOpen ? 'open' : ''}`}
          onClick={() => setDropdownOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          <FaBars size={14} />
        </button>
        <LanguageSwitcher />
        {dropdownOpen && (
          <div className="nav-dropdown__menu" style={{ direction: navDirection }}>
            {navLinks.map(link => (
              <div
                key={link.path}
                className={`nav-dropdown__item ${!link.isAnchor && isActive(link.path) ? 'active' : ''}`}
              >
                {link.isAnchor
                  ? <a href={link.path} onClick={handleContactClick}>{link.label}</a>
                  : <Link to={link.path} onClick={() => setDropdownOpen(false)}>{link.label}</Link>
                }
              </div>
            ))}

            <div className="nav-dropdown__divider" />

            <div className="nav-dropdown__auth">
              {isLoggedIn && userData ? (
                <Link to="/profile" className="nav-dropdown__profile" onClick={() => setDropdownOpen(false)}>
                  <img
                    src={userData.image || "/img/profile-img.png"}
                    alt={userData.first_name || "User"}
                    onError={(e) => { e.target.onerror = null; e.target.src = "/img/profile-img.png"; }}
                  />
                  <span>{userData.first_name}</span>
                  <FaBars size={18} />
                </Link>
              ) : (
                <Link to="/auth" className="nav-dropdown__login" onClick={() => setDropdownOpen(false)}>
                  {t('login')}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop profile */}
      <div className="profile">
        {isLoggedIn && userData ? (
          <Link to="/profile" className="user-profile">
            <IoSettingsOutline size={30} />
            <img
              src={userData.image || "/img/profile-img.png"}
              alt={userData.first_name || "User Profile"}
              onError={(e) => { e.target.onerror = null; e.target.src = "/img/profile-img.png"; }}
            />
          </Link>
        ) : (
          <Link to="/auth" className="login-btn-nav">{t('login')}</Link>
        )}
        <LanguageSwitcher />
      </div>

    </div>
  );
}