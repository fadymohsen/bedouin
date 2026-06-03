import React from 'react';
import { FaStar } from 'react-icons/fa';
import './scss/style.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CamelIcon = "/img/small-logo.png";

export default function Card({ data, orderID }) {
  const { t } = useTranslation();
  const isMyJourney = window.location.pathname === "/myjourneys" ? true : false
  if (!data) return null;

  return (
    <div className="">
      <div className="safari-card">
        <div className="image-container">
          <div className="rating-badge">
            <span>
              <FaStar size={20} /> {data.rate}
            </span>
          </div>

          <img
            src={data.mainImage || data.image || '/img/adventure1.jpg'}
            alt={data.name}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>

        <div className="title-badge">
          <h2>{data.name}</h2>
        </div>

        <div className="info-section">
          <div className="location-row">
            <div className="loc-item">
              <span className="date">{t('destination_point')}</span>
              <span className="name">{data.interfaceTo}</span>
            </div>

            <div className="icon-circle">
              <img src={CamelIcon} alt="camel" />
            </div>

            <div className="loc-item">
              <span className="date">{t('starting_point')}</span>
              <span className="name">{data.interfaceFrom}</span>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-pill">{data.duration} {t('days')}</div>
            <div className="stat-pill">{` ${data.countPeople} ${t('booking')}`}</div>

          </div>
          <Link to={`${isMyJourney ? '/order/cardpage/' + orderID : '/cardpage/' + data.id}`}>
            <button className={`details-btn`}>
              {t('view_details')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}