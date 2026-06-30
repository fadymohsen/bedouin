import React, { useState } from 'react'
import "./scss/style.scss"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(null);

    const atv =
        "/img/adventure4.webp";
    const gathering =
        "/img/adventure.webp";

    return (
        <div className='contact'>
            <Helmet>
                <title>Contact Bedouin Trails | Book White Desert Safari Tours from Cairo</title>
                <meta name="description" content="Contact Bedouin Trails to book your White Desert safari tour from Cairo, Egypt desert tours, camel treks, desert trekking adventures, and multi-day desert treks to Bahariya Oasis, Siwa Oasis, and the Western Desert of Egypt." />
                <meta name="keywords" content="White Desert Egypt, White Desert Safari, White Desert Camping, Egypt Desert Tour, Egypt Safari Tours, Bahariya Oasis Tour, Western Desert Egypt, Desert Trekking Egypt, Camel Trek Egypt, White Desert tour from Cairo, Black Desert Egypt tour, 2 day White Desert tour Egypt, Multi Day Desert Trek, Sahara Hiking Tour, Desert Yoga Retreat Egypt, Meditation Retreat Egypt, Silent Retreat Desert, Djara Cave Western Desert" />
                <link rel="canonical" href="https://bedouintrails.com/contact" />
                <link rel="alternate" hreflang="en" href="https://bedouintrails.com/contact" />
                <link rel="alternate" hreflang="ar" href="https://bedouintrails.com/contact" />
                <link rel="alternate" hreflang="x-default" href="https://bedouintrails.com/contact" />
                <meta property="og:title" content="Contact Bedouin Trails | Book White Desert Safari Tours" />
                <meta property="og:description" content="Contact Bedouin Trails to book White Desert safari tours, Egypt desert tours, camel treks, and multi-day adventures from Cairo." />
                <meta property="og:url" content="https://bedouintrails.com/contact" />
                <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Bedouin Trails | Book Desert Safari Tours" />
                <meta name="twitter:description" content="Contact Bedouin Trails to book White Desert safari tours, Egypt desert tours, and multi-day desert treks from Cairo." />
                <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
            </Helmet>
            <div className="contact-hero">
                <h1>{t('contact_hero_title')}</h1>
                <div className="curve-bg"></div>
            </div>
            <div className="part-1">
                <div className="left-p">
                    <div className="scene">
                        <div className="collage-wrapper">
                            <div
                                className="pill-large"
                                onMouseEnter={() => setHovered("atv")}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <img
                                    src={atv}
                                    alt="ATV rider celebrating on sand dunes"
                                    style={{
                                        transform: hovered === "atv" ? "scale(1.07)" : "scale(1)",
                                        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                    }}
                                />
                                <div className="grain-overlay" />
                            </div>
                            <div
                                className="pill-small"
                                onMouseEnter={() => setHovered("gather")}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <img
                                    src={gathering}
                                    alt="Group dancing near Elephant Rock"
                                    style={{
                                        transform:
                                            hovered === "gather" ? "scale(1.07)" : "scale(1)",
                                        transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                                    }}
                                />
                                <div className="grain-overlay" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-p">
                    <h2>{t('contact_experience_title')}</h2>
                    <p>{t('contact_experience_text')}</p>
                    <h2 className="idk">Bedouin Trails</h2>
                </div>
            </div>
            <div className="part-2">

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
                <div className="location"></div>
                <div className="paragraph">
                    <h2>{t('contact_us')} <br />{t('book_your_trip_now')}</h2>
                    <div className="socials">
                        <div className="whatsapp">
                            <p>+20 10 02717380</p>
                            <div></div>
                            <FaWhatsapp className="img" size={45} color="#05ee24" />
                        </div>
                        <div className="email">
                            <p>info@bedouintrails.com</p>
                            <div></div>
                            <img className="img" src="https://img.icons8.com/?size=30&id=P7UIlhbpWzZm&format=png&color=000000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
