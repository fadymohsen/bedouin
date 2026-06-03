import React, { useState } from 'react'
import "./scss/style.scss"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const [hovered, setHovered] = useState(null);

    const atv =
        "/img/adventure4.jpg";
    const gathering =
        "/img/adventure.png";

    return (
        <div className='contact'>
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
                    <h1>{t('contact_experience_title')}</h1>
                    <p>{t('contact_experience_text')}</p>
                    <h1 className="idk">Bedouin Trails</h1>
                </div>
            </div>
            <div className="part-2">

                <div className="social-links">

                    <div class="vertical-line"></div>
                    <div className="socials">
                        <a href="https://https://wa.link/qtrpve/" className='link' target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp id='whatsapp' />
                        </a>

                        <a href="https://www.instagram.com/the.white.and.black.desert?igsh=aHdjbzB6ajJ5dTBk" className='link' target="_blank" rel="noopener noreferrer">
                            <FaInstagram id='instgram' />
                        </a>

                        <a href="https://www.facebook.com/profile.php?id=61587717913002" className='link' target="_blank" rel="noopener noreferrer">
                            <FaFacebook id='facebook' />
                        </a>
                    </div>
                    <div class="vertical-line"></div>

                </div>
                <div className="location"></div>
                <div className="paragraph">
                    <h1>{t('contact_us')} <br />{t('book_your_trip_now')}</h1>
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
