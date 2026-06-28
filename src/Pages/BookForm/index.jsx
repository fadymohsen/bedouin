import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './scss/style.scss';
import { Helmet } from 'react-helmet-async';

export default function BookForm({ traps = [] }) {
  const { t } = useTranslation();
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);
  const [loadingTrip, setLoadingTrip] = useState(!!tripId);
  const [selectedTripId, setSelectedTripId] = useState(tripId || '');
  const [formData, setFormData] = useState({
    trap_id: tripId || '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    number_of_adults: 1,
    number_of_children: 0,
    start_date: '',
    end_date: '',
    description: ' '
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setFormData(prev => ({ ...prev, trip_id: selectedTripId || '' }));
  }, [selectedTripId]);

  useEffect(() => {
    if (tripId) {
      setSelectedTripId(tripId);
      const fetchTrip = async () => {
        try {
          const response = await api.getTrapDetails(tripId);
          if (response.data.status) {
            setTrip(response.data.data);
          }
        } catch (error) {
          console.error('Error fetching trip:', error);
        } finally {
          setLoadingTrip(false);
        }
      };
      fetchTrip();
    } else {
      setLoadingTrip(false);
    }
  }, [tripId]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.trip_id) newErrors.trip_id = t('trap_id_required');
    if (!formData.first_name.trim()) newErrors.first_name = t('first_name_required');
    if (!formData.last_name.trim()) newErrors.last_name = t('last_name_required');
    if (!formData.email.trim()) {
      newErrors.email = t('email_required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('email_invalid');
    }
    if (!formData.phone.trim()) newErrors.phone = t('phone_required');
    if (!formData.start_date) newErrors.start_date = t('start_date_required');
    if (!formData.end_date) newErrors.end_date = t('end_date_required');

    const dateRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;
    if (formData.start_date && !dateRegex.test(formData.start_date)) {
      newErrors.start_date = t('valid_date_required');
    }
    if (formData.end_date && !dateRegex.test(formData.end_date)) {
      newErrors.end_date = t('valid_date_required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleTripSelect = (e) => {
    const value = e.target.value;
    setSelectedTripId(value);
    if (errors.trip_id) {
      setErrors(prev => ({ ...prev, trip_id: null }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const numValue = type === 'number' ? parseInt(value) || 0 : value;
    setFormData(prev => ({
      ...prev,
      [name]: numValue
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataForApi = {
        ...formData,
        start_date: formData.start_date ? formData.start_date.replace(/-/g, '/') : '',
        end_date: formData.end_date ? formData.end_date.replace(/-/g, '/') : ''
      };

      const response = await api.addOrder(formDataForApi);
      const data = response.data;

      if (data.status) {
        setSubmitStatus({
          type: 'success',
          message: t('booking_success')
        });
        setFormData({
          trip_id: tripId || '',
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          number_of_adults: 1,
          number_of_children: 0,
          start_date: '',
          end_date: '',
          description: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || t('booking_failed') });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.response?.data?.message || t('network_error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loadingTrip) {
    return (
      <div className="book-form-container">
        <div className="loading-container">
          <p>{t('loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-form-container">
      <Helmet>
        <title>Book Your Trip | Bedouin Trails</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="book-form-split">
        <div className="form-panel">
          <div className="form-panel-inner">
            {/* Form Header */}
            <div className="form-header">
              <h1>{t('book_your_trip')}</h1>
            </div>


            <form onSubmit={handleSubmit} className="booking-form">
              {!tripId && (
                <div className="form-field">
                  <label>{t('journeys')}</label>
                  <select
                    name="trip_id"
                    value={selectedTripId}
                    onChange={handleTripSelect}
                    className={errors.trip_id ? 'error' : ''}
                  >
                    <option value="">{t('select_trip')}</option>
                    {traps.map((trap) => (
                      <option key={trap.id} value={trap.id}>
                        {trap.name}  {t('egp')}
                      </option>
                    ))}
                  </select>
                  {errors.trip_id && <span className="field-error">{errors.trip_id}</span>}
                </div>
              )}

              {/* Show selected trip info if tripId exists */}
              {tripId && trip && (
                <div className="selected-trip-info">
                  {/* <h3>{trip.name}</h3> */}
                  {/* <p>{trip.price} {t('egp')}</p> */}
                </div>
              )}

              <div className="form-field">
                <label>{t('first_name')}</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className={errors.first_name ? 'error' : ''}
                  placeholder={t('first_name')}
                />
                {errors.first_name && <span className="field-error">{t('error_occurred')}</span>}
              </div>

              <div className="form-field">
                <label>{t('last_name')}</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className={errors.last_name ? 'error' : ''}
                  placeholder={t('last_name')}
                />
                {errors.last_name && <span className="field-error">{t('error_occurred')}</span>}
              </div>

              <div className="form-field">
                <label>{t('email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder={t('email')}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label>{t('phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder={t('phone')}
                />
                {errors.phone && <span className="field-error">{t('error_occurred')}</span>}
              </div>

              <div className="form-row-split">
                <div className="form-field">
                  <label>{t('number_of_guests')}</label>
                  <input
                    type="number"
                    name="number_of_adults"
                    value={formData.number_of_adults}
                    onChange={handleChange}
                    min="1"
                    max="20"
                  />
                </div>
                <div className="form-field">
                  <label>{t('children')}</label>
                  <input
                    type="number"
                    name="number_of_children"
                    value={formData.number_of_children}
                    onChange={handleChange}
                    min="0"
                    max="20"
                  />
                </div>
              </div>

              <div className="form-row-split">
                <div className="form-field">
                  <label>{t('start_date')}</label>
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className={errors.start_date ? 'error' : ''}
                  />
                  {errors.start_date && <span className="field-error">{t('error_occurred')}</span>}
                </div>
                <div className="form-field">
                  <label>{t('end_date')}</label>
                  <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                    className={errors.end_date ? 'error' : ''}
                  />
                  {errors.end_date && <span className="field-error">{t('error_occurred')}</span>}
                </div>
              </div>

              <div className="form-field">
                <label>{t('additional_notes')}</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder={t('additional_notes')}
                />
              </div>

              <input type="hidden" name="trip_id" value={formData.trip_id} />

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    {t('submit')}...
                  </>
                ) : (
                  t('submit')
                )}
              </button>
            </form>
            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                <div className="status-icon">
                  {submitStatus.type === 'success' ? '✓' : '✗'}
                </div>
                <p>{submitStatus.message}</p>
                {submitStatus.type === 'success' && (
                  <button className="view-booking-link" onClick={() => navigate('/myjourneys')}>
                    {t('view_booking')}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="image-panel">
          <div className="image-panel-overlay">
            <div className="trip-info-card">
              <h2>{trip ? trip.name : t('book_your_trip')}</h2>
              {trip && (
                <>
                  <p className="trip-description">{trip.description}</p>
                </>
              )}
            </div>
          </div>
          <div
            className="image-panel-bg"
            style={{
              backgroundImage: trip?.image ? `url(${trip.image})` : 'url(/img/adventure.webp)'
            }}
          />
        </div>

      </div>

    </div>
  );
}