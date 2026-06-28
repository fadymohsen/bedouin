import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './scss/style.scss';
import { useTranslation } from 'react-i18next';
import sweetAlert from '../../utils/sweetAlert';
import { FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash, FaChevronLeft, FaChevronDown } from 'react-icons/fa';
import LanguageSwitcher from '../../Components/LanguageSwitcher';
import { Helmet } from 'react-helmet-async';

const COUNTRIES = [
  { code: 'EG', flag: '🇪🇬', dial: '+20', name: 'Egypt', min: 10, max: 10 },
  { code: 'SA', flag: '🇸🇦', dial: '+966', name: 'Saudi Arabia', min: 9, max: 9 },
  { code: 'AE', flag: '🇦🇪', dial: '+971', name: 'UAE', min: 9, max: 9 },
  { code: 'KW', flag: '🇰🇼', dial: '+965', name: 'Kuwait', min: 8, max: 8 },
  { code: 'QA', flag: '🇶🇦', dial: '+974', name: 'Qatar', min: 8, max: 8 },
  { code: 'BH', flag: '🇧🇭', dial: '+973', name: 'Bahrain', min: 8, max: 8 },
  { code: 'OM', flag: '🇴🇲', dial: '+968', name: 'Oman', min: 8, max: 8 },
  { code: 'JO', flag: '🇯🇴', dial: '+962', name: 'Jordan', min: 9, max: 9 },
  { code: 'LB', flag: '🇱🇧', dial: '+961', name: 'Lebanon', min: 7, max: 8 },
  { code: 'SY', flag: '🇸🇾', dial: '+963', name: 'Syria', min: 9, max: 9 },
  { code: 'IQ', flag: '🇮🇶', dial: '+964', name: 'Iraq', min: 10, max: 10 },
  { code: 'LY', flag: '🇱🇾', dial: '+218', name: 'Libya', min: 9, max: 9 },
  { code: 'TN', flag: '🇹🇳', dial: '+216', name: 'Tunisia', min: 8, max: 8 },
  { code: 'DZ', flag: '🇩🇿', dial: '+213', name: 'Algeria', min: 9, max: 9 },
  { code: 'MA', flag: '🇲🇦', dial: '+212', name: 'Morocco', min: 9, max: 9 },
  { code: 'SD', flag: '🇸🇩', dial: '+249', name: 'Sudan', min: 9, max: 9 },
  { code: 'US', flag: '🇺🇸', dial: '+1', name: 'USA', min: 10, max: 10 },
  { code: 'GB', flag: '🇬🇧', dial: '+44', name: 'UK', min: 10, max: 10 },
  { code: 'DE', flag: '🇩🇪', dial: '+49', name: 'Germany', min: 10, max: 11 },
  { code: 'FR', flag: '🇫🇷', dial: '+33', name: 'France', min: 9, max: 9 },
  { code: 'IT', flag: '🇮🇹', dial: '+39', name: 'Italy', min: 9, max: 10 },
  { code: 'ES', flag: '🇪🇸', dial: '+34', name: 'Spain', min: 9, max: 9 },
  { code: 'PT', flag: '🇵🇹', dial: '+351', name: 'Portugal', min: 9, max: 9 },
  { code: 'TR', flag: '🇹🇷', dial: '+90', name: 'Turkey', min: 10, max: 10 },
  { code: 'IN', flag: '🇮🇳', dial: '+91', name: 'India', min: 10, max: 10 },
  { code: 'PK', flag: '🇵🇰', dial: '+92', name: 'Pakistan', min: 10, max: 10 },
  { code: 'CN', flag: '🇨🇳', dial: '+86', name: 'China', min: 11, max: 11 },
  { code: 'RU', flag: '🇷🇺', dial: '+7', name: 'Russia', min: 10, max: 10 },
  { code: 'BR', flag: '🇧🇷', dial: '+55', name: 'Brazil', min: 10, max: 11 },
  { code: 'ZA', flag: '🇿🇦', dial: '+27', name: 'South Africa', min: 9, max: 9 },
];

// ─── PhoneInput component (outside Auth) ─────────────────────────────────────
const PhoneInput = ({ value, onChange, onCountryChange, selectedCountry, placeholder, error }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (country) => {
    onCountryChange(country);
    setOpen(false);
    setSearch('');
  };

  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '');
    onChange(digits);
  };

  return (
    <div className="phone-input-wrapper" ref={wrapperRef}>
      <div className={`phone-input-container ${error ? 'phone-input-container--error' : ''}`}>
        {/* Country selector trigger */}
        <button
          type="button"
          className="country-selector"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Select country code"
        >
          <span className="country-flag">{selectedCountry.flag}</span>
          <span className="country-dial">{selectedCountry.dial}</span>
          <FaChevronDown size={14} className={`country-chevron ${open ? 'open' : ''}`} />
        </button>

        <div className="phone-divider" />

        {/* Number input */}
        <input
          type="tel"
          className="phone-number-input"
          placeholder={placeholder}
          value={value}
          onChange={handlePhoneChange}
          maxLength={selectedCountry.max}
        />
      </div>

      {/* Error message */}
      {error && <span className="phone-error">{error}</span>}

      {/* Dropdown */}
      {open && (
        <div className="country-dropdown">
          <div className="country-search-wrapper">
            <input
              type="text"
              className="country-search"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <ul className="country-list">
            {filtered.map(country => (
              <li
                key={country.code}
                className={`country-item ${selectedCountry.code === country.code ? 'country-item--active' : ''}`}
                onClick={() => handleSelect(country)}
              >
                <span className="country-flag">{country.flag}</span>
                <span className="country-name">{country.name}</span>
                <span className="country-dial-muted">{country.dial}</span>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="country-item country-item--empty">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

// ─── PasswordInput (outside Auth) ────────────────────────────────────────────
const PasswordInput = ({ field, placeholder, value, onChange, showPassword, togglePassword }) => {
  const isVisible = showPassword[field];
  return (
    <div className="input-icon-wrapper">
      <FaLock size={18} className="input-icon input-icon--start" />
      <input
        type={isVisible ? 'text' : 'password'}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div
        className="input-icon input-icon--toggle"
        onClick={() => togglePassword(field)}
        role="button"
        aria-label={isVisible ? 'Hide password' : 'Show password'}
      >
        {isVisible ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
      </div>
    </div>
  );
};

// ─── OtpGrid (outside Auth) ───────────────────────────────────────────────────
const OtpGrid = ({ otp, otpRefs, handleOtpChange, handleOtpKeyDown, handleOtpPaste, disabled }) => (
  <div className="otp-container">
    {otp.map((digit, index) => (
      <input
        key={index}
        ref={(el) => (otpRefs.current[index] = el)}
        type="password"
        inputMode="asteric"
        maxLength={1}
        value={digit}
        className={`otp-input ${digit ? 'filled' : ''} ${disabled ? 'locked' : ''}`}
        disabled={disabled}
        onChange={(e) => handleOtpChange(e, index)}
        onKeyDown={(e) => handleOtpKeyDown(e, index)}
        onPaste={handleOtpPaste}
        autoComplete="one-time-code"
      />
    ))}
  </div>
);

// ─── Auth ─────────────────────────────────────────────────────────────────────
const Auth = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [view, setView] = useState('login');
  const [previousView, setPreviousView] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef([]);
  const [showPassword, setShowPassword] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // Egypt default
  const [localPhone, setLocalPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    first_name: '', last_name: '', email: '', phone: '', password: '', password_confirmation: ''
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: '' });
  const [resetPasswordData, setResetPasswordData] = useState({
    email: '', otp: '', password: '', password_confirmation: ''
  });

  const isRTL = i18n.language === 'ar' || i18n.language?.startsWith('ar');
  const dir = isRTL ? 'rtl' : 'ltr';

  const switchView = (v) => {
    setPreviousView(view);
    setError(null);
    setSuccessMessage(null);
    setOtp(['', '', '', '', '', '']);
    setView(v);
  };

  // ── Phone helpers ──────────────────────────────────────────────────────────
  const handlePhoneChange = (digits) => {
    setLocalPhone(digits);
    setPhoneError('');
    const full = `${selectedCountry.dial.replace('+', '')}${digits}`;
    console.log(full)
    setRegisterData(prev => ({ ...prev, phone: full }));
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setLocalPhone('');
    setPhoneError('');
    setRegisterData(prev => ({ ...prev, phone: '' }));
  };

  const validatePhone = () => {
    const digits = localPhone.replace(/\D/g, '');
    if (digits.length < selectedCountry.min) {
      setPhoneError(`Phone must be at least ${selectedCountry.min} digits for ${selectedCountry.name}`);
      return false;
    }
    if (digits.length > selectedCountry.max) {
      setPhoneError(`Phone must be at most ${selectedCountry.max} digits for ${selectedCountry.name}`);
      return false;
    }
    setPhoneError('');
    return true;
  };

  // ── OTP ────────────────────────────────────────────────────────────────────
  const handleVerifyEmail = async (fullOtp) => {
    const code = typeof fullOtp === 'string' ? fullOtp : otp.join('');
    if (code.length < 6) return setError(t('please_enter_otp'));
    const targetEmail = resetPasswordData.email || registerData.email || loginData.email;
    if (!targetEmail) return setError(t('email_missing_error'));

    setLoading(true); setError(null);
    try {
      const res = await api.verifyOtp({ otp: code, email: targetEmail });
      if (res.data.status) {
        sweetAlert.success(t('verified_success'));
        if (view === 'otp-verify') {
          setResetPasswordData(prev => ({ ...prev, otp: code }));
          switchView('reset-password');
        } else if (view === 'verify') {
          // After OTP verification for registration, login with email and password
          try {
            const loginRes = await api.login({ email: registerData.email, password: registerData.password });
            const { token } = loginRes.data.data;
            if (token && /^[\x00-\x7F]*$/.test(token)) {
              localStorage.setItem('userToken', token);
              window.location.href = '/';
            } else {
              setError(t('invalid_token_format'));
            }
          } catch (loginErr) {
            setError(loginErr.response?.data?.message || t('login_error'));
          }
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || t('invalid_otp'));
    } finally { setLoading(false); }
  };

  const handleBack = () => switchView(previousView);
  const togglePassword = (field) => setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    const newOtp = Array(6).fill('');
    pasted.split('').forEach((char, i) => { newOtp[i] = char; });
    setOtp(newOtp);
    otpRefs.current[Math.min(pasted.length - 1, 5)]?.focus();
    if (pasted.length === 6) handleVerifyEmail(pasted);
  };

  const handleOtpKeyDown = (e, i) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];
      if (otp[i] !== '') { newOtp[i] = ''; setOtp(newOtp); }
      else if (i > 0) { newOtp[i - 1] = ''; setOtp(newOtp); otpRefs.current[i - 1]?.focus(); }
    } else if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); otpRefs.current[i - 1]?.focus(); }
    else if (e.key === 'ArrowRight' && i < 5) { e.preventDefault(); otpRefs.current[i + 1]?.focus(); }
  };

  const handleOtpChange = (e, index) => {
    const char = e.target.value.replace(/\D/g, '').slice(-1);
    if (!char) return;
    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);
    if (index < 5) setTimeout(() => { otpRefs.current[index + 1]?.focus(); }, 0);
    if (newOtp.filter(d => d !== '').length === 6) handleVerifyEmail(newOtp.join(''));
  };

  // ── Auth handlers ──────────────────────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await api.login(loginData);
      const { token, is_verified } = res.data.data;
      if (token && /^[\x00-\x7F]*$/.test(token)) {
        localStorage.setItem('userToken', token);
        is_verified ? (window.location.href = '/') : switchView('verify');
      } else setError(t('invalid_token_format'));
    } catch (err) {
      setError(err.response?.data?.message || t('login_error'));
    } finally { setLoading(false); }
  };

  const handleRegisterNext = (e) => {
    e.preventDefault();
    setError(null);

    // First name: letters only (including Arabic), 2–50 chars
    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(registerData.first_name.trim())) {
      return setError(t('first_name_invalid') || 'First name must be 2–50 letters only');
    }

    // Last name: same rule
    if (!nameRegex.test(registerData.last_name.trim())) {
      return setError(t('last_name_invalid') || 'Last name must be 2–50 letters only');
    }

    // Email: standard format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email.trim())) {
      return setError(t('email_invalid') || 'Invalid email format');
    }

    // Phone: digit count based on selected country
    const digits = localPhone.replace(/\D/g, '');
    if (digits.length < selectedCountry.min || digits.length > selectedCountry.max) {
      setPhoneError(
        `Phone must be ${selectedCountry.min === selectedCountry.max
          ? selectedCountry.min
          : `${selectedCountry.min}–${selectedCountry.max}`} digits for ${selectedCountry.name}`
      );
      return;
    }

    switchView('register-password');
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    // Password: min 8 chars, at least 1 letter and 1 number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(registerData.password)) {
      return setError(t('password_weak') || 'Password must be at least 8 characters with letters and numbers');
    }

    if (registerData.password !== registerData.password_confirmation) {
      return setError(t('passwords_not_match'));
    }

    setLoading(true); setError(null);
    try {
      await api.register(registerData);
      // OTP sent, switch to verify
      switchView('verify');
    } catch (err) {
      const msgs = err.response?.data?.errors
        ? Object.values(err.response.data.errors).flat().join(' - ')
        : err.response?.data?.message || t('unexpected_error');
      setError(msgs);
    } finally { setLoading(false); }
  };
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null);
    try {
      const res = await api.forgetPassword(forgotPasswordData.email);
      setSuccessMessage(res.data.message || t('otp_sent'));
      setResetPasswordData(prev => ({ ...prev, email: forgotPasswordData.email }));
      switchView('otp-verify');
    } catch (err) {
      setError(err.response?.data?.message || t('otp_send_error'));
    } finally { setLoading(false); }
  };

  const handleOtpForgotNext = () => {
    const code = otp.join('');
    if (code.length < 6) return setError(t('please_enter_otp'));
    setResetPasswordData(prev => ({ ...prev, otp: code }));
    switchView('reset-password');
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (resetPasswordData.password !== resetPasswordData.password_confirmation)
      return setError(t('passwords_not_match'));
    setLoading(true); setError(null); setSuccessMessage(null);
    try {
      await api.resetPassword(resetPasswordData);
      setSuccessMessage(t('password_changed_success'));
      setTimeout(() => switchView('login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || t('password_change_error'));
    } finally { setLoading(false); }
  };

  const handleResendOtp = async () => {
    setLoading(true); setError(null); setSuccessMessage(null);
    try {
      await api.resendOtp({ email: loginData.email || registerData.email || resetPasswordData.email });
      setSuccessMessage(t('otp_resent_success'));
    } catch (err) {
      setError(err.response?.data?.message || t('otp_resend_error'));
    } finally { setLoading(false); }
  };

  const imageMap = {
    login: '/img/adventure.webp',
    register: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80',
    'forgot-password': '/img/contact-cta.webp',
    'otp-verify': '/img/contact-cta.webp',
    'reset-password': 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=800&q=80',
    'register-password': '/img/contact-cta.webp',
    verify: '/img/contact-cta.webp',
  };
  useEffect(() => {
    window.location.hash = view;
  }, [view]);

  // Also add this to read the hash on initial load (optional but good UX)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validViews = ['login', 'register', 'forgot-password'];
    if (validViews.includes(hash)) {
      setView(hash);
    }
  }, []);

  // Read hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validEntryViews = ['login', 'register', 'forgot-password'];
    if (validEntryViews.includes(hash)) {
      setView(hash);
    } else {
      // Default to login and set hash if none/invalid
      window.location.hash = 'login';
    }
  }, []);

  // Keep hash in sync with view
  useEffect(() => {
    window.location.hash = view;
    // Update document title so browser tab reflects current step
    const titles = {
      'login': 'Login',
      'register': 'Register',
      'register-password': 'Register - Password',
      'forgot-password': 'Forgot Password',
      'otp-verify': 'Verify OTP',
      'reset-password': 'Reset Password',
      'verify': 'Verify Email',
    };
    document.title = `Siwa | ${titles[view] || 'Auth'}`;
  }, [view]);

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validEntryViews = ['login', 'register', 'forgot-password'];
      if (validEntryViews.includes(hash)) {
        setView(hash);
        setError(null);
        setSuccessMessage(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Auto-hide messages after 2 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  return (
    <div className="auth-page-wrapper">
      <Helmet>
        <title>Login | Bedouin Trails</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="auth-container">
        <div className="auth-container__form-side" dir={dir}>
          <div className="brand-header">
            <img src="/img/logo.png" alt="Logo" className="logo" />
          </div>

          <div className="form-content">
            {/* Messages positioned absolutely to not push content */}
            {error && <div className="error-message-overlay">{error}</div>}
            {successMessage && <div className="success-message-overlay">{successMessage}</div>}

            {/* Login */}
            {view === 'login' && (
              <form onSubmit={handleLogin}>
                <h1>{t('login_title')} 👋</h1>
                <p>{t('login_welcome')}</p>
                <div className="input-group">
                  <div className="input-icon-wrapper">
                    <FaEnvelope size={18} className="input-icon input-icon--start" />
                    <input type="email" required placeholder={t('email')}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                  </div>
                </div>
                <div className="input-group">
                  <PasswordInput
                    field="login" placeholder={t('password')} value={loginData.password}
                    showPassword={showPassword} togglePassword={togglePassword}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                </div>
                <div className="input-group__label-row">
                  <span className="forgot-link" onClick={() => switchView('forgot-password')}>
                    {t('forgot_password')}
                  </span>
                </div>
                <p className="switch-view">
                  {t('dont_have_account')}{' '}
                  <span onClick={() => switchView('register')}>{t('create_account')}</span>
                </p>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? t('loading') : t('login')}
                </button>
              </form>
            )}

            {/* Register Step 1 */}
            {view === 'register' && (
              <form onSubmit={handleRegisterNext}>
                <h1>{t('register_title')}</h1>
                <p>{t('register_desc')}</p>
                <div dir={localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"} className="input-group-row">
                  <div className="input-group">
                    <input type="text" required placeholder={t('first_name')}
                      value={registerData.first_name}
                      onChange={(e) => setRegisterData({ ...registerData, first_name: e.target.value })} />
                  </div>
                  <div className="input-group">
                    <input type="text" required placeholder={t('last_name')}
                      value={registerData.last_name}
                      onChange={(e) => setRegisterData({ ...registerData, last_name: e.target.value })} />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-icon-wrapper">
                    <FaEnvelope size={18} className="input-icon input-icon--start" />
                    <input type="email" required placeholder={t('email')}
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />
                  </div>
                </div>

                {/* ── Phone with country code ── */}
                <div className="input-group">
                  <PhoneInput
                    value={localPhone}
                    onChange={handlePhoneChange}
                    onCountryChange={handleCountryChange}
                    selectedCountry={selectedCountry}
                    placeholder={`${selectedCountry.min}–${selectedCountry.max} digits`}
                    error={phoneError}
                  />
                </div>

                <p className="switch-view">
                  {t('already_have_account')}{' '}
                  <span onClick={() => switchView('login')}>{t('login')}</span>
                </p>
                <button type="submit" className="submit-btn">{t('next')}</button>
              </form>
            )}

            {/* Register Step 2 — Password */}
            {view === 'register-password' && (
              <form onSubmit={handleRegister}>
                <h1>{t('register_title')}</h1>
                <p>{t('password_min')}</p>
                <div className="input-group">
                  <PasswordInput
                    field="reg" placeholder={t('password_min')} value={registerData.password}
                    showPassword={showPassword} togglePassword={togglePassword}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <PasswordInput
                    field="regConfirm" placeholder={t('confirm_password')} value={registerData.password_confirmation}
                    showPassword={showPassword} togglePassword={togglePassword}
                    onChange={(e) => setRegisterData({ ...registerData, password_confirmation: e.target.value })}
                  />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? t('loading') : t('register')}
                </button>
              </form>
            )}

            {/* OTP */}
            {(view === 'otp-verify' || view === 'verify') && (
              <div className="verify-view">
                <h1>{view === 'verify' ? t('verify_title') : t('reset_otp_title')}</h1>
                <p>{t('verify_desc')}</p>
                <OtpGrid otp={otp} otpRefs={otpRefs} handleOtpChange={handleOtpChange}
                  handleOtpKeyDown={handleOtpKeyDown} handleOtpPaste={handleOtpPaste} disabled={loading} />
                <button className="submit-btn"
                  onClick={view === 'verify' ? () => handleVerifyEmail(otp.join('')) : handleOtpForgotNext}
                  disabled={loading || otp.some(d => d === '')}>
                  {loading ? t('loading_verifying') : t('next')}
                </button>
                <p className="switch-view">
                  {t('didnt_receive_code')}{' '}
                  <span onClick={handleResendOtp}>{t('resend')}</span>
                </p>
              </div>
            )}

            {/* Reset Password */}
            {view === 'reset-password' && (
              <form onSubmit={handleResetPassword}>
                <h1>{t('enter_new_password_title')}</h1>
                <p>{t('enter_new_password_desc')}</p>
                <div className="input-group">
                  <PasswordInput field="newPass" placeholder={t('new_password_label')}
                    showPassword={showPassword} togglePassword={togglePassword}
                    value={resetPasswordData.password}
                    onChange={(e) => setResetPasswordData({ ...resetPasswordData, password: e.target.value })} />
                </div>
                <div className="input-group">
                  <PasswordInput field="confPass" placeholder={t('confirm_password')}
                    showPassword={showPassword} togglePassword={togglePassword}
                    value={resetPasswordData.password_confirmation}
                    onChange={(e) => setResetPasswordData({ ...resetPasswordData, password_confirmation: e.target.value })} />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? t('loading_updating') : t('save')}
                </button>
              </form>
            )}

            {/* Forgot Password */}
            {view === 'forgot-password' && (
              <form onSubmit={handleForgotPassword}>
                <h1>{t('forgot_password_title')}</h1>
                <p>{t('forgot_password_desc')}</p>
                <div className="input-group">
                  <div className="input-icon-wrapper">
                    <FaEnvelope size={18} className="input-icon input-icon--start" />
                    <input type="email" required placeholder={t('email')}
                      value={forgotPasswordData.email}
                      onChange={(e) => setForgotPasswordData({ email: e.target.value })} />
                  </div>
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? t('loading_sending') : t('next')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="auth-container__image-side"
          style={{ backgroundImage: `url(${imageMap[view] || imageMap.login})` }}>
          <div className="corner-curve-wrapper">
            <div className="corner-curve corner-curve--top-left"></div>
            <LanguageSwitcher />
          </div>
          {view !== 'login' && (
            <button className="back-button" onClick={handleBack}><FaChevronLeft /></button>
          )}
          <div className="corner-curve corner-curve--bottom-right"></div>
          <div className="glass-card">
            <p>
              {['register', 'register-password', 'verify'].includes(view)
                ? t('glass_register') : t('glass_login')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;