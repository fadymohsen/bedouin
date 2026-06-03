import React from 'react'
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Calendar } from 'lucide-react';
import "./scss/style.scss"
export default function BookingDetails({ data }) {
  const { t } = useTranslation();
  return (
    <div className='booking-details'>

      <div className="leftP">
        <img src="/img/camel-ride1.jpg" alt="Camel riding experience in the desert" srcset="" />
      </div>
      <div className="rightP">
        <div className="field-row">
          <div className="form-field">
            <label>{t('first_name')}</label>
            <input
              disabled
              type="text"
              name="first_name"
              value={data.first_name}
              placeholder={t('first_name')}
            />
          </div>

          <div className="form-field">
            <label>{t('last_name')}</label>
            <input
              disabled
              type="text"
              name="last_name"
              value={data.last_name}
              placeholder={t('last_name')}
            />
          </div>
        </div>

        <div className="form-field">
          <label>{t('email')}</label>
          <div className="input-with-icon">
            <Mail className="input-icon" size={20} />
            <input
              disabled
              type="email"
              name="email"
              value={data.email}
              placeholder={t('email')}
            />
          </div>
        </div>

        <div className="form-field">
          <label>{t('phone')}</label>
          <div className="input-with-icon">
            <Phone className="input-icon" size={20} />
            <input
              disabled
              type="tel"
              name="phone"
              value={data.phone}
              placeholder={t('phone')}
            />
          </div>
        </div>

        <div className="form-row-split">
          <div className="form-field">
            <label>{t('number_of_guests')}</label>
            <input
              disabled
              type="number"
              name="number_of_adults"
              value={data.number_of_adults}
              min="1"
              max="20"
            />
          </div>
          <div className="form-field">
            <label>{t('children')}</label>
            <input
              disabled
              type="number"
              name="number_of_children"
              value={data.number_of_children}
              min="0"
              max="20"
            />
          </div>
        </div>

        <div className="form-row-split">
          <div className="form-field">
            <label>{t('start_date')}</label>
            <div className="input-with-icon calender">
              <Calendar className="input-icon" size={20} />
              <input
                disabled
                type="text"
                name="start_date"
                value={data.start_date}
              />
            </div>
          </div>
          <div className="form-field">
            <label>{t('end_date')}</label>
            <div className="input-with-icon calender">
              <Calendar className="input-icon" size={20} />
              <input
                disabled
                type="text"
                name="end_date"
                value={data.end_date}
              />
            </div>
          </div>
        </div>

        <div className="form-field">
          <label>{t('additional_notes')}</label>
          <textarea
            disabled
            name="description"
            value={data.description}
            rows="3"
            placeholder={t('additional_notes')}
          />
        </div>
      </div>
    </div>
  )
}
