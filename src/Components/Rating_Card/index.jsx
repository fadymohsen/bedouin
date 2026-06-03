import React from 'react';
import { FaStar } from "react-icons/fa6";
import "./scss/style.scss";
import { useTranslation } from 'react-i18next';

export const TestimonialCard = ({ review }) => {
    const { t } = useTranslation();
    if (!review) return null;

    return (
        <div className="testimonial-card">
            <div className="card-content">
                <div className="text-section">
                    <h3 className="user-name">{review.user.name || t('anonymous_guest')}</h3>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className="star"
                                style={{ color: i < (review.rate || 5) ? "#ffc107" : "#e4e5e9" }}
                            >
                                <FaStar />
                            </span>
                        ))}
                    </div>

                    <p className="comment">
                        {review.comments || t('no_comment_available')}
                    </p>
                </div>
                <div className="avatar-wrapper">
                    <img
                        src={review.user.image||  "https://ui-avatars.com/api/?name="}
                        alt={review.user.name}
                        className="avatar-img"
                    />
                </div>
            </div>
        </div>
    );
};