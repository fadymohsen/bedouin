import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Card from '../../Components/Card';
import 'swiper/css/free-mode';
import './scss/style.scss';
import 'swiper/css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { TestimonialCard } from '../Rating_Card';
import { useTranslation } from 'react-i18next';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import sweetAlert from '../../utils/sweetAlert';

export const SwiperCarousel = ({ status, orderid, isOrder = false, card_page = false, slidesData = [], trapCount = 0, userCount = 0, orderCount = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});
    const { t } = useTranslation();
    const navigate = useNavigate()
    const slides = slidesData;

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const handleImageLoad = (index) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    };
    const handeCancelling = async (id) => {
        try {
            const response = await api.cancellOrder(id)
            if (response) {
                console.log(response)
                sweetAlert.success(t('order_cancelled_success'))
                setTimeout(() => {
                    window.location.reload()
                }, 3500)
            }
            else {
                console.log("error")
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="hero-container">
            {/* {!isAllLoaded && (
                <div className="carousel-loader">
                    <div className="loader-spinner"></div>
                </div>
            )} */}
            <div className="main-bg">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`bg-layer ${index === activeIndex ? 'active' : ''}`}
                        style={{
                            backgroundImage: card_page
                                ? `linear-gradient(0deg, rgba(30, 30, 30, 0.16), rgba(30, 30, 30, 0.16)), url(${slide.image})`
                                : `url(${slide.image})`
                        }}
                        onLoad={() => handleImageLoad(index)}
                    >
                        {card_page == false ?

                            <div className="social-links">

                                <div class="vertical-line"></div>
                                <div className="socials">
                                    <a target='_blank' href="https://wa.link/qtrpve" className='link' rel="noopener noreferrer">
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
                            : <div className='card_nav'>
                                <div className="content-logo">
                                    <img src="/img/bedouin-trail.png" alt="Bedouin Trail Logo" loading="lazy" />
                                </div>

                                <div className="backBtn">
                                    <button
                                        className='btn'
                                        onClick={() => window.history.back()}
                                        aria-label="Back"
                                    />
                                    {/* <div className='border'></div> */}
                                    {isOrder &&   (status !=="cancelled" && status !== "paid" && status != "accepted")? (<button onClick={() => handeCancelling(orderid)} className='cancell-btn'>{t('cancel')}</button>) : null}

                                </div>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <div className="main-content">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`content-item ${index === activeIndex ? 'active' : 'exit'}`}
                    >
                        {card_page == false ?
                            (<>
                                <div className="content-logo">
                                    <img src="/img/bedouin-trail.png" alt="Bedouin Trail Logo" loading="lazy" />
                                </div>
                                <h1>{t(slide.title)}</h1>
                                <p>{t(slide.description)}</p></>) : null}
                    </div>
                ))}
            </div>
            {card_page == false ?

                <div className="stats-bar">
                    <div className="stat-item">
                        <h3>+{trapCount}</h3>
                        <p>{t('number_of_destinations')}</p>
                    </div>
                    <div className="stat-item">
                        <h3>+{userCount}</h3>
                        <p>{t('our_clients')}</p>
                    </div>
                    <div className="stat-item">
                        <h3>+5</h3>
                        <p>{t('experience_years')}</p>
                    </div>
                </div>
                : null}
            <div className="thumbnail-track">
                {slides.map((slide, index) => {
                    let position = index - activeIndex;
                    if (position < 0) position += slides.length;

                    return (
                        <div
                            key={index}
                            className={`thumb-node pos-${position}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="img-box">
                                <img src={slide.image} alt={t(slide.title) || "Desert safari slide"} loading="lazy" />
                            </div>
                            {position === 0 && <div className="active-frame" />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const CardCarousel = ({ data = [], type = "journey" }) => {
    const breakpoints = {
        768: { slidesPerView: type === "journey" ? 2 : 2 },
        1024: { slidesPerView: type === "journey" ? 3 : 2.5 },
        1440: { slidesPerView: type === "journey" ? 4 : 3 },
    };

    return (
        <div className="marquee-wrapper">
            <Swiper
                modules={[Autoplay, FreeMode]}
                slidesPerView={1.2}
                spaceBetween={type === "journey" ? 40 : 20}
                loop={true}
                freeMode={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                }}
                allowTouchMove={true}
                breakpoints={breakpoints}
                onTouchStart={(swiper) => {
                    swiper.autoplay.stop();
                    swiper.autoplay.start();
                }}
                onTouchEnd={(swiper) => swiper.autoplay.start()}
                onTouchMove={(swiper) => swiper.autoplay.start()}
                className="steady-swiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        {type === "journey" ? (
                            <Card data={item} />
                        ) : (
                            <TestimonialCard review={item} />
                        )}
                    </SwiperSlide>
                ))}
                {
                    type === "journey" ? (
                        <SwiperSlide>
                            <div className='discoverCard'>
                                <div>
                                    <h1>
                                        جاهز للمغامرة؟ استكشف رحلاتنا المصممة بعناية بين سحر الصحراء و هددوء الواحات ، و اختر التجربة التي رحلتك معنا الآن .
                                    </h1>
                                  <a href="/journeys">  <button>إكتشف رحلاتنا المميزة</button></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ) : null
                }
            </Swiper>
        </div>
    );
};