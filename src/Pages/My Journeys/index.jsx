import Card from '../../Components/Card'
import "./scss/style.scss"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import Loading from '../../Components/Loading';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function MyJourneys() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem('userToken')?.trim();

        if (!userToken) {
            navigate('/auth');
            return;
        }

        const fetchMyOrders = async () => {
            try {
                const response = await api.getMyOrders();
                if (response.data && response.data.status) {
                    console.log(response.data.data + "orderData")
                    setOrders(response.data.data || []);
                }
            } catch (err) {
                console.error('Error fetching orders:', err);
                if (err.response && err.response.status === 401) {
                    // Token is invalid or expired, redirect to auth
                    navigate('/auth');
                    return;
                }
                setError('Failed to load your journeys');
            } finally {
                setLoading(false);
            }
        };

        fetchMyOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="my-journeys-container">
                <h1>{t('my_experiences_and_journeys')}</h1>
                <div className="error-message">{error}</div>
            </div>
        );
    }

    return (
        <div className="my-journeys-container">
            <Helmet>
                <title>My Journeys | Bedouin Trails</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className="cards-container">
                <h1>{t('my_experiences_and_journeys')}</h1>

                {orders.length === 0 ? (
                    <div className="no-orders">
                        <p>{t('no_bookings')}</p>
                    </div>
                ) : (
                    <div className="orders-grid">
                        {orders.map((order) => (
                            <Card
                                key={order.id}
                                data={order.trap}
                                orderID={order.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
