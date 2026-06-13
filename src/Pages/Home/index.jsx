import "./scss/style.scss"
import Card from "../../Components/Card"
import { CardCarousel, SwiperCarousel } from "../../Components/Carousel"
import { FaChevronDown, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import api from "../../services/api";
import Loading from "../../Components/Loading";
import { Helmet } from "react-helmet-async";

const BlogSection = ({ articles = [] }) => {
    const { t } = useTranslation();
    const safeArticles = Array.isArray(articles) ? articles : [];

    return (
        <section className="blogs-section">
            <div className="container">
                <div className="blogs-grid">
                    {safeArticles.slice(0, 3).map((blog) => (
                        <div key={blog.id} className="blog-card">
                            <div className="image-container">
                                <img src={blog.image} alt={blog.title} loading="lazy" />
                            </div>
                            <div className="content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-description">{blog.description?.slice(1, 200)}</p>
                                <Link to={`/blogs?article=${blog.id}`} className="see-more-link" aria-label={`Read more about ${blog.title}`}>
                                    {t('see_more')} {blog.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const { t } = useTranslation();
    const [openItems, setOpenItems] = useState([0]);
    const [hovered, setHovered] = useState(null);
    const [homeData, setHomeData] = useState({
        sliders: [],
        articles: [],
        traps: [],
        commonQuestions: [],
        trapCount: 0,
        userCount: 0,
        orderCount: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [faqImageHeight, setFaqImageHeight] = useState(0);
    const faqImageRef = useRef(null);

    // Fetch home data on component mount
    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await api.getHomeData();

                if (response.data && response.data.data) {
                    const data = response.data.data;
                    console.log('Home data received:', data);
                    setHomeData({
                        sliders: data.sliders || [],
                        articles: data.articles || [],
                        traps: data.traps || [],
                        commonQuestions: data.commonQuestions || [],
                        trapCount: data.trapCount || 0,
                        userCount: data.userCount || 0,
                        orderCount: data.orderCount || 0
                    });
                }
            } catch (err) {
                console.error('Error fetching home data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHomeData();
    }, []);

    useEffect(() => {
        const updateHeight = () => {
            if (faqImageRef.current) {
                setFaqImageHeight(faqImageRef.current.clientHeight);
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [homeData]);

    const toggleAccordion = (index) => {
        setOpenItems([index]);
    };

    const activities = [
        { id: 1, title: t('recreational_trips'), img: '/img/camel-ride.jpg' },
        { id: 2, title: t('safari_trips'), img: '/img/quad-bike.jpg' },
        { id: 3, title: t('parties_events'), img: '/img/events.jpg' },
        { id: 4, title: t('therapeutic_lakes'), img: '/img/salt-lake.jpg' },
    ];
    const atv =
        "/img/adventure.png";
    const gathering =
        "/img/adventure1.jpg";
    const safeFaqs = Array.isArray(homeData.commonQuestions) ? homeData.commonQuestions : [];
    const safeSliders = Array.isArray(homeData.sliders) ? homeData.sliders : [];
    const safeTraps = Array.isArray(homeData.traps) ? homeData.traps : [];
    const safeArticles = Array.isArray(homeData.articles) ? homeData.articles : [];

    console.log('SafeFaqs:', safeFaqs);
    if (loading) {
        return (<Loading />);
    }
    if (error) {
        return (
            <div className='home'>
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
        <div className='home'>
            <Helmet>
                <title>Bedouin Trails - Authentic Desert Safari & Adventure Tourism in Egypt | Siwa & Matrouh</title>
                <meta name="description" content="Experience authentic desert safari, adventure trips, and cultural journeys in Egypt's Siwa & Matrouh Governorate. Book your unforgettable desert adventure with Bedouin Trails today!" />
                <meta name="keywords" content="desert safari, Egypt tourism, Siwa, Matrouh, adventure trips, Bedouin culture, white desert, black desert, desert tours, cultural journeys" />
                <link rel="canonical" href="https://bedouin-trails.com/" />
                <meta property="og:title" content="Bedouin Trails - Desert Safari & Adventure Tourism" />
                <meta property="og:description" content="Experience authentic desert safari, adventure trips, and cultural journeys in Egypt's Siwa & Matrouh Governorate." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bedouin-trails.com/" />
                <meta property="og:image" content="/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bedouin Trails - Desert Safari & Adventure Tourism" />
                <meta name="twitter:description" content="Experience authentic desert safari, adventure trips, and cultural journeys in Egypt's Siwa & Matrouh Governorate." />
                <meta name="twitter:image" content="/og-image.jpg" />
            </Helmet>
            <div className="carousel">
                <SwiperCarousel
                    slidesData={safeSliders}
                    trapCount={homeData.trapCount}
                    userCount={homeData.userCount}
                    orderCount={homeData.orderCount}
                />
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
                    <h1>{t('our_safari_story')}</h1>
                    <p>{t('safari_experience_message')}</p>
                    <h1 className="idk">Bedouin Trails</h1>
                </div>
            </div>

            <div className="part-2">
                <div className="carousel-cards">
                    <CardCarousel data={safeTraps} />
                </div>
            </div>

            <div className="part-3">
                <h1>{t('safari_spirit')}</h1>
                <div className="gallery-layout">
                    <div className="puzzle-container">
                        {activities.map((item) => (
                            <div key={item.id} className="puzzle-item">
                                <div className="image-circle">
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                    <div className="text-tag">
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p>{t('safari_experiences_description')}</p>
            </div>

            <div id='contact' className="part-4">
                <div className="social-links">
                    <div className="vertical-line"></div>
                    <div className="socials">
                        <a target='_blank' href="https://https://wa.link/qtrpve/" className='link'><FaWhatsapp id='whatsapp' /></a>
                        <a target='_blank' href="https://www.instagram.com/the.white.and.black.desert?igsh=aHdjbzB6ajJ5dTBk" className='link'><FaInstagram id='instgram' /></a>
                        <a target='_blank' href="https://www.facebook.com/profile.php?id=61587717913002" className='link'><FaFacebook id='facebook' /></a>
                    </div>
                    <div className="vertical-line"></div>
                </div>

                <div>
                    <a className="location" target='_blank' href="https://www.google.com/maps?q=28.345849,28.8724675&z=17&hl=en">
                        <img src="/img/googlemaps.jpg" alt="Location map showing Bedouin Trails office in Cairo, Egypt" />
                        <div className="text">
                            <p>نتشرف بزيارتك لشركتنا</p>
                            <p>Egypt - Cairo</p>
                        </div>
                    </a>
                </div>
                <div className="paragraph">
                    <h1>{t('contact_us')} <br />{t('book_your_trip_now')}</h1>
                    <div className="socials">
                        <a target="_blank" href="mailto:info@bedouintrails.com" className="email">
                            <img className="img" src="https://img.icons8.com/?size=30&id=P7UIlhbpWzZm&format=png&color=000000" alt="Email icon" />
                            <div></div>
                            <p>info@bedouintrails.com</p>
                        </a>
                        <a target="_blank" href="https://wa.link/qtrpve/" className="whatsapp">
                            <FaWhatsapp className="img" size={45} color="#05ee24" />
                            <div></div>
                            <p>+20 10 02717380</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="part-5">
                <h3>{t('blogs')}</h3>
                <h1>{t('latest_published_articles')}</h1>
                <BlogSection articles={safeArticles} />
                <Link to="/blogs">
                    <button>{t('read_more_articles')} <ArrowUpRight /></button>
                </Link>
            </div>

            <div className="part-6">
                <h1>{t('faq_title')}</h1>
                <img
                    ref={faqImageRef}
                    src="/img/faq-img.jpg"
                    alt="FAQ"
                    loading="lazy"
                    onLoad={() => setFaqImageHeight(faqImageRef.current?.clientHeight || 0)}
                />
                <div className="leftP faq-container" style={{ height: faqImageHeight || 'auto' }}>
                    <div className="faq-accordion" style={{ height: '100%' }}>
                        {safeFaqs.length > 0 ? (
                            safeFaqs.map((item, index) => (
                                <div key={item.id || index} className={`faq-item ${openItems.includes(index) ? 'active' : ''}`}>
                                    <button className="faq-question" onClick={() => toggleAccordion(index)}>
                                        <span className="accordion-icon"><FaChevronDown /></span>
                                        <span className="question-text">{item.question}</span>
                                        <span className="question-number">{index + 1}</span>
                                    </button>
                                    <div className="faq-answer">
                                        <div className="answer-content"><p>{item.answer}</p></div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-faqs">
                                <p>{t('no_faqs_available')}</p>
                            </div>
                        )}
                    </div>
                </div>
                <Link to="/faq"><button>{t('view_more_questions')} <ArrowUpRight /></button></Link>
            </div>
        </div>
    )
}
