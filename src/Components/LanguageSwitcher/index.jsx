import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { Globe } from '@phosphor-icons/react';
import './scss/style.scss';

const LanguageSwitcher = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'ar', name: t('arabic'), flag: 'sa' },
        { code: 'en', name: t('english'), flag: 'gb' },
        { code: 'pt', name: t('portuguese'), flag: 'br' },
        { code: 'zh', name: t('chinese'), flag: 'cn' },
        { code: 'es', name: t('spanish'), flag: 'es' },
        { code: 'sv', name: t('swedish'), flag: 'se' },
        { code: 'it', name: t('italian'), flag: 'it' },
        { code: 'de', name: t('german'), flag: 'de' },
        { code: 'fr', name: t('french'), flag: 'fr' }
    ];

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className="globe-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Language"
            >
                <Globe size={24} weight="thin" />
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <img
                                src={`https://flagcdn.com/w20/${lang.flag}.png`}
                                alt={`${lang.name} flag`}
                                className="flag-img"
                                loading="lazy"
                            />
                            <span className="lang-name">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
