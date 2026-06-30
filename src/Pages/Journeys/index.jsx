import React, { useState, useMemo, useEffect } from 'react'
import Card from '../../Components/Card'
import "./scss/style.scss"
import { IoSearchOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import Loading from '../../Components/Loading';
import api from '../../services/api';
import { Helmet } from 'react-helmet-async';

export default function Journeys() {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [journeyData, setJourneyData] = useState({ traps: [] });
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedStatus, setSelectedStatus] = useState('')
    const [selectedDuration, setSelectedDuration] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    // Memoize durations - must be called before any conditional returns
    const durations = useMemo(() => {
        if (!Array.isArray(journeyData.duration)) return [];
        return [...journeyData.duration].sort((a, b) => a - b);
    }, [journeyData])

    // Filter journeys - must be called before any conditional returns
    const filteredJourneys = useMemo(() => {
        return Array.isArray(journeyData.traps) ? journeyData.traps.filter(trip => {
            const matchesSearch = searchQuery === '' ||
                trip.name.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesStatus = selectedStatus === '' ||
                (selectedStatus === 'available' && trip.status === 'active') ||
                (selectedStatus === 'not_available' && trip.status !== 'active')
            const matchesDuration = selectedDuration === '' ||
                trip.duration === Number(selectedDuration)
            const price = parseFloat(trip.price)
            const matchesMinPrice = minPrice === '' || price >= Number(minPrice)
            const matchesMaxPrice = maxPrice === '' || price <= Number(maxPrice)
            const matchesPrice = matchesMinPrice && matchesMaxPrice

            return matchesSearch && matchesStatus && matchesDuration && matchesPrice
        }) : []
    }, [journeyData.traps, searchQuery, selectedStatus, selectedDuration, minPrice, maxPrice])

    useEffect(() => {
        const fetchJourneyData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await api.getAllTraps();

                if (response.data && response.data.data) {
                    const trapsArray = Array.isArray(response.data.data)
                        ? response.data.data
                        : (response.data.data.traps || []);

                    if (Array.isArray(trapsArray) && trapsArray.length > 0) {
                        setJourneyData({
                            traps: trapsArray,
                            duration: [...new Set(trapsArray.map(trip => trip.duration).filter(Boolean))]
                        });
                    } else {
                        setJourneyData({ traps: [] });
                    }
                }
            } catch (err) {
                console.error('Error fetching journey data:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchJourneyData();
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="journeys-page">
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
        <div>
            <Helmet>
                <title>Desert Safari Tours & Adventure Journeys | Bedouin Trails</title>
                <meta name="description" content="Browse all White Desert safari tours, Egypt desert tours, multi-day desert treks, camel treks, and desert camping adventures. Explore Bahariya Oasis, Siwa Oasis, White Desert, Black Desert, and Djara Cave in Egypt's Western Desert with Bedouin Trails." />
                <meta name="keywords" content="White Desert Egypt, White Desert Safari, White Desert Camping, Egypt Desert Tour, Egypt Safari Tours, Bahariya Oasis Tour, Western Desert Egypt, Desert Trekking Egypt, Multi Day Desert Trek, Camel Trek Egypt, White Desert tour from Cairo, Djara Cave Western Desert, Black Desert Egypt tour, 2 day White Desert tour Egypt, Sahara Hiking Tour, Desert Yoga Retreat Egypt, Meditation Retreat Egypt, Silent Retreat Desert, سيوة, الواحات البحرية" />
                <link rel="canonical" href="https://bedouintrails.com/journeys" />
                <meta property="og:title" content="Desert Safari Tours & Adventure Journeys | Bedouin Trails" />
                <meta property="og:description" content="Browse White Desert safari tours, Egypt desert tours, multi-day desert treks, camel treks, and camping adventures in Bahariya Oasis, Siwa Oasis & the Western Desert." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bedouintrails.com/journeys" />
                <meta property="og:image" content="https://bedouintrails.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Desert Safari Tours & Adventure Journeys | Bedouin Trails" />
                <meta name="twitter:description" content="Browse White Desert safari tours, Egypt desert tours, multi-day desert treks, camel treks, and camping adventures in Bahariya Oasis, Siwa Oasis & the Western Desert." />
                <meta name="twitter:image" content="https://bedouintrails.com/og-image.jpg" />
            </Helmet>
            <div className="search-filtering">
                <h1>{t('journeys_title')}</h1>
                <div className="curve-bg"></div>
                <div className="filters">

                    <div className="filter">
                        <select
                            value={selectedDuration}
                            onChange={(e) => setSelectedDuration(e.target.value)}
                        >
                            <option value="">{t('trip_duration')}</option>
                            {durations.map(duration => (
                                <option key={duration} value={duration}>
                                    {duration} {t('days')}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="search-bar filter">
                        <IoSearchOutline className='icon' />
                        <input
                            type="text"
                            placeholder={t('search_by_trip_name')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div dir={localStorage.getItem("i18nextLng") ==="ar" ? "rtl" : "ltr"} className="cards-container">
                {filteredJourneys.length > 0 ? (
                    filteredJourneys.map((trip) => (
                        <Card key={trip.id} data={trip} />
                    ))
                ) : (
                    <div className="no-results">
                        <h2>{t('no_results_found')}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}