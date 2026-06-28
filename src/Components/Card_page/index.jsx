import React, { useRef, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { CardCarousel, SwiperCarousel } from "../Carousel/index"
import { FaStar, FaTimes, FaWhatsapp } from 'react-icons/fa'
import "./scss/style.scss"
import { ExperienceCTA } from '../CallToAction';
import api from '../../services/api';
import { useTranslation } from 'react-i18next';
import sweetAlert from '../../utils/sweetAlert';
import Loading from '../Loading';
import BookingDetails from '../BookingDetails';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../utils/Breadcrumbs';
import { slugify } from '../../utils/slugify';

export default function Card_page() {
    const { t } = useTranslation();
    const { id } = useParams();
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([]);
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);
    const topPageRef = useRef(null);
    const [currentDay, setCurrentDay] = useState(1);
    const [isFromMyJourneys, setIsFromMyJourneys] = useState(false);
    const currentDayData = trip?.trapDays?.find(day => day.day_number === currentDay);
    const [bookingData, setBookingData] = useState(false);
    const [order, setOrder] = useState();

    const goToPrevDay = () => {
        if (currentDay > 1 && trip?.trapDays) {
            setCurrentDay(currentDay - 1);
        }
    };

    const goToNextDay = () => {
        if (trip?.trapDays && currentDay < trip.trapDays.length) {
            setCurrentDay(currentDay + 1);
        }
    };

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                setLoading(true);
                if (!id || id === ':id') {
                    console.error('Invalid trip ID');
                    setLoading(false);
                    return;
                }
                const isFromMyJourneys = window.location.pathname === `/order/cardpage/${id}` ? true : false;
                setIsFromMyJourneys(isFromMyJourneys);
                let tripData;
                let orderData = null;

                if (isFromMyJourneys) {
                    try {
                        const orderRes = await api.getOrderDetails(id);
                        if (orderRes.data && orderRes.data.status && orderRes.data.data) {
                            orderData = orderRes.data.data;
                            tripData = orderData.trap;
                            setOrder(orderData);
                        } else {
                            const fallbackRes = await api.getMyOrderById(id);
                            if (fallbackRes.data && fallbackRes.data.status && fallbackRes.data.data) {
                                orderData = fallbackRes.data.data;
                                tripData = orderData.trap;
                                setOrder(orderData);
                            } else {
                                throw new Error('Order not found or invalid response');
                            }
                        }
                    } catch (orderError) {
                        console.warn('Failed to fetch order details, trying fallback:', orderError);
                        const fallbackRes = await api.getMyOrderById(id);
                        if (fallbackRes.data && fallbackRes.data.status && fallbackRes.data.data) {
                            orderData = fallbackRes.data.data;
                            tripData = orderData.trap;
                            setOrder(orderData);
                        } else {
                            throw new Error('Order not found or invalid response');
                        }
                    }
                } else {
                    const tripRes = await api.getTrapDetails(id);
                    tripData = tripRes.data.data;
                }

                setTrip(tripData);
                setReviews(tripData.reviews || []);

            } catch (err) {
                console.error(t('error_fetching_trip_details') + ":", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTripData();
    }, [id]);

    const isCancelled = order?.status === 'cancelled';
    if (loading) {
        return <Loading />;
    }

    if (!trip) {
        return <div className="loader">{t('error_occurred')}</div>;
    }

    const handleAddReview = async () => {
        if (rating === 0) return sweetAlert.warning(t('please_select_star_rating'));
        try {
            const response = await api.addReview({
                order_id: id,
                stars: rating,
                comment: comment
            });
            sweetAlert.success(t('rating_added_successfully'));
            setShowPopup(false);
            setRating(0);
            setComment("");
            setReviews(prev => [response.data.data, ...prev]);
            setTimeout(() => {
                window.location.reload()
            }, 3000)

        } catch (err) {
            console.error(err);

            if (err.response?.data?.errors) {
                const errorMessages = Object.values(err.response.data.errors).flat().join('\n');
                sweetAlert.error(t('rating_submit_failed'), errorMessages || t('rating_submit_login_required'));
            } else {
                sweetAlert.warning(err.response?.data?.message || t('rating_submit_failed') + ": " + t('rating_submit_login_required'));
            }
        }
    };

    const handleAction = () => {
        topPageRef.current?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => setShowPopup(true), 500);
    };

    const handleBooking = () => {
        navigate(`/book/${id}`);
    };

    const sliderImages = trip?.galleries && trip.galleries.length > 0
        ? trip.galleries.map(gallery => ({ image: gallery.image }))
        : [{ image: '/img/placeholder.jpg' }];

    return (
        <div className='Card_page' ref={topPageRef}>
            <Breadcrumbs items={[
                { name: 'Home', url: 'https://bedouintrails.com/' },
                { name: 'Journeys', url: 'https://bedouintrails.com/journeys' },
                { name: trip.name, url: `https://bedouintrails.com/journeys/${id}/${slugify(trip.name)}` }
            ]} />
            <Helmet>
                <title>{trip.meta_title || trip.name} | Bedouin Trails</title>
                <meta name="description" content={trip.meta_description || `${trip.name} - ${t('departure_point')}: ${trip.interfaceFrom} → ${trip.interfaceTo}. ${t('book_your_spot_now')} | Bedouin Trails`} />
                <link rel="canonical" href={`https://bedouintrails.com/journeys/${id}/${slugify(trip.name)}`} />
                <meta property="og:title" content={trip.meta_title || trip.name} />
                <meta property="og:description" content={trip.meta_description || `${trip.name} - ${trip.interfaceFrom} → ${trip.interfaceTo}`} />
                <meta property="og:image" content={trip.mainImage || 'https://bedouintrails.com/og-image.jpg'} />
                <meta property="og:url" content={`https://bedouintrails.com/journeys/${id}/${slugify(trip.name)}`} />
                <meta property="og:type" content="product" />
            </Helmet>
            {showPopup && (
                <div className="rating-overlay">
                    <div className="rating-modal">
                        <button className="close-btn" onClick={() => setShowPopup(false)}><FaTimes /></button>
                        <h3>{t('service_rating')}</h3>
                        <div className="stars-row">
                            {[1, 2, 3, 4, 5].map(num => (
                                <FaStar
                                    key={num}
                                    color={num <= rating ? "#ffc107" : "#e4e5e9"}
                                    onClick={() => setRating(num)}
                                    size={35}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>
                        <textarea
                            placeholder={t('write_your_comment')}
                            className="review-textarea"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                        <button className="submit-btn" onClick={handleAddReview}>{t('submit_rating')}</button>
                    </div>
                </div>
            )}

            <div className="Carousel">
                {isFromMyJourneys
                    ? <SwiperCarousel status={order.status} isOrder={true} orderid={id} slidesData={sliderImages} card_page={true} />
                    : <SwiperCarousel slidesData={sliderImages} card_page={true} />
                }
            </div>

            <div className="part-1">
                <div className="leftP">
                    <h1>{trip.name}</h1>
                    <div className="dates">
                        <div className="start">
                            <p>{trip.interfaceFrom}</p>
                            <p>{t('departure_point')}</p>
                        </div>
                        <img src="/img/small-logo.png" alt="logo" />
                        <div className="end">
                            <p>{trip.interfaceTo}</p>
                            <p>{t('destination_point')}</p>
                        </div>
                    </div>
                </div>

                <div className="rightP">
                    {!isFromMyJourneys ? (
                        <>
                            <div className='container'>
                                <h1>{t('have_questions_about_trip')}</h1>
                                <h3>{t('contact_us_now')}</h3>
                                <a target='_blank' href="https://wa.link/qtrpve/" className="whatsapp">
                                    <p><span>+20 10 02717380</span> <span>: {t('whatsapp_number')} </span></p>
                                    <div></div>
                                    <FaWhatsapp className="img" size={45} color="#05ee24" />
                                </a>
                            </div>
                            <button className='bookingBtn' onClick={handleBooking}>
                                {t('book_your_spot_now')}
                            </button>
                        </>
                    ) : (
                        <div className="btnsntrack">
                            <div className='DataBtns'>
                                <button className={`${bookingData ? "active" : ""}`} onClick={() => setBookingData(true)}>
                                    {t('booking_data')}
                                </button>
                                <button className={`${!bookingData ? "active" : ""}`} onClick={() => setBookingData(false)}>
                                    {t('trip_data')}
                                </button>
                            </div>
                            {isFromMyJourneys && order && (
                                <div className="stepper">
                                    <div className="stepper__steps">
                                        {(order.status === 'cancelled'
                                            ? [
                                                { key: 'cancelled', label: t('booking_cancelled') },
                                                { key: 'pending', label: t('booking_pending') },
                                            ]
                                            : [
                                                { key: 'accepted', label: t('booking_completed') },
                                                { key: 'paid', label: t('booking_paid') },
                                                { key: 'pending', label: t('booking_pending') },
                                            ]
                                        ).map((step, i) => {
                                            const activeIndex = order.status === 'cancelled'
                                                ? (order.status === 'cancelled' ? 0 : 1)
                                                : (order.status === 'accepted' ? 0 : order.status === 'paid' ? 1 : 2);
                                            const isActive = i === activeIndex;
                                            const isCancelled = order.status === 'cancelled';
                                            return (
                                                <div className="stepper__step" key={step.key}>
                                                    <div className="stepper__dot" style={isActive ? {
                                                        background: isCancelled ? '#e03535' : '#3b6fd4',
                                                        border: `2px solid ${isCancelled ? '#e03535' : '#3b6fd4'}`,
                                                        boxShadow: `0 0 0 5px ${isCancelled ? 'rgba(224,53,53,0.2)' : 'rgba(59,111,212,0.2)'}`,
                                                        width: 16, height: 16,
                                                    } : {}} />
                                                    <span className="stepper__label" style={isActive ? {
                                                        color: isCancelled ? '#e03535' : '#1a1a1a',
                                                        fontWeight: 700,
                                                    } : {}}>
                                                        {step.label}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                        </div>
                    )}
                </div>
            </div>

            {!bookingData ? (
                <>
                    <div className="part-2">
                        <h1>{t('trip_details')}</h1>
                        <div className="dates-container">
                            <div className="numWhere">
                                <p style={{ color: "#CF9050", fontSize: ".9rem" }}>{t('starting_point')}</p>
                                <p>{trip.interfaceFrom}</p>
                            </div>
                            <div className="days-navigation-container">
                                <div className="days-strip">
                                    {trip.trapDays?.map((day) => (
                                        <div
                                            key={day.day_number}
                                            className={`day-item ${currentDay === day.day_number ? 'active-day' : ''}`}
                                            onClick={() => setCurrentDay(day.day_number)}
                                        >
                                            <span className="day-label">{t('day')}</span>
                                            <span className="day-number">{day.day_number}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="start-end">
                                <p style={{ color: "#CF9050" }}>{t('end_point')}</p>
                                <p>{trip.interfaceTo}</p>
                            </div>
                        </div>

                        <div className="btns">
                            <div>
                                <button
                                    className="nav-arrow-btn"
                                    onClick={goToPrevDay}
                                    disabled={currentDay <= 1}
                                >
                                    <span className="arrow-icon">‹</span>
                                </button>
                            </div>
                            <div>
                                <button
                                    className="nav-arrow-btn"
                                    onClick={goToNextDay}
                                    disabled={trip?.trapDays && currentDay >= trip.trapDays.length}
                                >
                                    <span className="arrow-icon">›</span>
                                </button>
                            </div>
                        </div>

                        <div className="journeyDesCard">
                            {currentDayData?.cards?.length > 0 ? (
                                currentDayData.cards.map((card, index) => (
                                    <div className="step-card" key={card.id}>
                                        <div className="badge">{index + 1}</div>
                                        <div className="content">
                                            <h3>
                                                {t('day')} {currentDay} - {t('card_label')}: <br /> {card.title}
                                            </h3>
                                            <div className="image-wrapper">
                                                <img src={card.image} alt={card.title} />
                                            </div>
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-cards-message" style={{
                                    textAlign: 'center',
                                    padding: '40px 20px',
                                    background: '#f9f9f9',
                                    borderRadius: '12px',
                                    margin: '20px 0'
                                }}>
                                    <h3 style={{ color: '#666', marginBottom: '10px' }}>
                                        {t('trip_program_coming_soon')}
                                    </h3>
                                    <p style={{ color: '#999', fontSize: '14px' }}>
                                        {t('contact_whatsapp_for_more')}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="part-3">
                        <h1>{t('customer_reviews')}</h1>
                        {reviews.length > 0 ? (
                            <CardCarousel data={reviews} type="review" />
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '30px',
                                background: '#f9f9f9',
                                borderRadius: '12px',
                                color: '#999'
                            }}>
                                <p>{t('no_reviews_yet')}</p>
                            </div>
                        )}
                    </div>

                    {isFromMyJourneys && order.status!="cancelled" ? (
                        <div className="part-4">
                            <ExperienceCTA onTriggerRating={handleAction} />
                        </div>
                    ) : null}
                </>
            ) : (

                <BookingDetails data={order} />
            )}
        </div>
    );
}