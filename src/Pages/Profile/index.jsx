import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLock, FaTimes, FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import "./scss/style.scss";
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Profile() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [needsAuth, setNeedsAuth] = useState(false);
    // main form data
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        image: '',
    });
    // password changing data
    const [passwordData, setPasswordData] = useState({
        current_password: '',
        password: '',
        password_confirmation: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        current_password: false,
        password: false,
        password_confirmation: false
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    // checking user token to fetch user data
    useEffect(() => {
        const token = localStorage.getItem('userToken')?.trim();
        if (!token) {
            setNeedsAuth(true);
            setLoading(false);
            return;
        }
        fetchProfile();
    }, []);
    // getting user data
    const fetchProfile = () => {
        api.getProfile()
            .then(res => {
                const data = res.data.data;
                setUserData(data);
                // setting the imprtant data for user in the form
                setFormData({
                    first_name: data.first_name || '',
                    last_name: data.last_name || '',
                    phone: data.phone || '',
                    email: data.email || '',
                    image: data.image || ''
                });
                setLoading(false);
            })
            .catch(err => {
                console.error(t('error_fetching_data'), err);
                if (err.response?.status === 401 || err.response?.status === 403) {
                    localStorage.removeItem('userToken');
                    setNeedsAuth(true);
                }
                setLoading(false);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleImageSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.match('image.*')) {
                setErrors({ image: t('please_select_image_only') });
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                setErrors({ image: t('image_size_error') });
                return;
            }

            setSelectedImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

            if (errors.image) {
                setErrors({ ...errors, image: '' });
            }
        }
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setErrors({});
        setSuccessMessage('');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('_method', 'put');
            if (formData.first_name) {
                formDataToSend.append('first_name', formData.first_name);
            }
            if (formData.last_name) {
                formDataToSend.append('last_name', formData.last_name);
            }
            formDataToSend.append('phone', formData.phone);
            if (formData.email) {
                formDataToSend.append('email', formData.email);
            }
            if (selectedImage) {
                formDataToSend.append('image', selectedImage);
            }

            await api.updateProfile(formDataToSend);
            setSuccessMessage(t('data_updated_successfully'));
            fetchProfile();
            setSelectedImage(null);
            setImagePreview(null);
            setEditMode(false);
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
            console.error('Profile update error:', err.response?.data);
            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('userToken');
                navigate('/');
                return;
            }

            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else if (err.response?.data?.message) {
                setErrors({ general: err.response.data.message });
            } else {
                setErrors({ general: t('error_updating_data') });
            }
        } finally {
            setSaving(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        if (!passwordData.current_password) {
            setErrors({ current_password: t('current_password_required') });
            return;
        }
        if (!passwordData.password) {
            setErrors({ password: t('new_password_required') });
            return;
        }
        if (passwordData.password.length < 6) {
            setErrors({ password: t('new_password_min_length') });
            return;
        }
        if (passwordData.password !== passwordData.password_confirmation) {
            setErrors({ password_confirmation: t('passwords_not_matching') });
            return;
        }
        setSaving(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('_method', 'put');
            formDataToSend.append('current_password', passwordData.current_password);
            formDataToSend.append('password', passwordData.password);
            formDataToSend.append('password_confirmation', passwordData.password_confirmation);

            await api.updateProfile(formDataToSend);
            setSuccessMessage(t('password_changed_successfully'));
            setShowPasswordModal(false);
            setPasswordData({
                current_password: '',
                password: '',
                password_confirmation: ''
            });
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (err) {
            console.error('Password change error:', err.response?.data);

            if (err.response?.status === 401 || err.response?.status === 403) {
                localStorage.removeItem('userToken');
                navigate('/auth');
                return;
            }

            if (err.response?.data?.errors) {
                setErrors(err.response.data.errors);
            } else if (err.response?.data?.message) {
                setErrors({ general: err.response.data.message });
            } else {
                setErrors({ general: t('error_changing_password') });
            }
        } finally {
            setSaving(false);
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords({
            ...showPasswords,
            [field]: !showPasswords[field]
        });
    };

    const handleLogout = async () => {
        try {
            await api.logout();
            localStorage.removeItem('userToken');
            navigate('/');
        } catch (err) {
            console.error(t('logout_error'), err);
            localStorage.removeItem('userToken');
            navigate('/');
        }
    };

    if (loading) return <div className="loader">{t('loading_your_data')}</div>;

    if (needsAuth || !userData) {
        navigate('/auth')
    }

    return (
        <div className='profilePage'>
            <Helmet>
                <title>Profile | Bedouin Trails</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className='coverHeader'>
                <div className='headerButtons'>
                    <div className='card_nav'>
                        {!editMode ? (
                            <button className='text' onClick={() => setEditMode(true)}>
                                {t('edit_account_data')}
                            </button>
                        ) : <div></div>}

                        <div className="backBtn" onClick={() => window.history.back()}>
                            <button className='btn' aria-label="Back"></button>
                            <div className='border' />
                            <div className='text'>{t('personal_account')}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pageBody'>
                <div className='imageSection'>
                    <div className='imageContainer'>
                        <img
                            className='userImage'
                            src={imagePreview || userData.image || "/img/profile-img.png"}
                            alt={`${userData?.name || 'User'} profile picture`}
                        />
                    </div>
                    {editMode && (
                        <label className='imageUploadBtn' htmlFor="imageUpload">
                            <FaCamera className='cameraIcon' />
                        </label>
                    )}
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageSelect}
                    />
                    {selectedImage && (
                        <div className='imageInfo'>
                            {/* <span>{t('new_image_selected')}</span>
                            <small>{t('image_will_be_saved')}</small> */}
                        </div>
                    )}

                    {errors.image && <div className='errorMessage'>{errors.image}</div>}
                </div>
                <h2 className='mainTitle'>{t('personal_data')}</h2>
                {successMessage && (
                    <div className='successMessage'>{successMessage}</div>
                )}

                {errors.general && (
                    <div className='errorMessage'>{errors.general}</div>
                )}
                <form ref={formRef} id="profileForm" onSubmit={handleProfileSubmit}>
                    <div className='formGrid'>
                        <div className='nameRow'>
                            <div className='fieldGroup'>
                                <label>{t('first_name')}</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    disabled={!editMode}
                                    className={`${errors.first_name ? 'error' : ''} ${editMode ? "edit" : ""}`}
                                />
                                {errors.name && <span className='fieldError'>{errors.name}</span>}
                            </div>
                            <div className='fieldGroup'>
                                <label>{t('last_name')}</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    disabled={!editMode}

                                    className={`${errors.last_name ? 'error' : ''} ${editMode ? "edit" : ""}`}
                                />
                                {errors.last_name && <span className='fieldError'>{errors.last_name}</span>}
                            </div>
                        </div>
                        <div className='fieldGroup'>
                            <label>{t('email')}</label>
                            <div className='inputWithIcon'>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={!editMode}

                                    className={`${errors.email ? 'error' : ''} ${editMode ? "edit" : ""}`}
                                />
                                <FaEnvelope className='fieldIcon' />
                            </div>
                            {errors.email && <span className='fieldError'>{errors.email}</span>}
                        </div>
                        <div className='fieldGroup'>
                            <label>{t('mobile_number')}</label>
                            <div className='inputWithIcon'>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    disabled={!editMode}
                                    className={`${errors.phone ? 'error' : ''} ${editMode ? "edit" : ""}`}
                                />
                                <FaPhoneAlt className='fieldIcon' />
                            </div>
                            {errors.phone && <span className='fieldError'>{errors.phone}</span>}
                        </div>
                        <div className='fieldGroup'>
                            <label>{t('password')}</label>
                            {editMode ? (
                                <div
                                    className='inputWithIcon clickable'
                                    onClick={() => setShowPasswordModal(true)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <input type="password" placeholder="********" readOnly />
                                    <FaLock className='fieldIcon' />
                                </div>
                            ) : (
                                <div className='inputWithIcon disabled'>
                                    <input style={{ cursor: "pointer" }} type="password" placeholder="********" readOnly />
                                    <FaLock className='fieldIcon' />
                                </div>
                            )}
                            <small className='passwordHint'>
                                {editMode ? t('click_to_change_password') : t('not_changeable_in_view_mode')}
                            </small>
                        </div>
                    </div><div className='actionButtons'>
                        {editMode ?
                            (<button type="submit" className='saveBtn' disabled={saving}>
                                {saving ? t('saving') : t('save_changes')}
                            </button>)
                            : (
                                <button
                                    type="button"
                                    className='logoutBtn'
                                    onClick={() => setShowLogoutModal(true)}
                                >
                                    {t('logout')}
                                </button>
                            )}
                    </div>
                </form>
            </div>

            {showPasswordModal && (
                <div className='modalOverlay'>
                    <div className='passwordModalContent'>
                        <button className='closeBtn' onClick={() => setShowPasswordModal(false)}>
                            <FaTimes />
                        </button>

                        <h3 className='modalTitle'>{t('change_password')}</h3>

                        {errors.general && (
                            <div className='errorMessage'>{errors.general}</div>
                        )}

                        <form onSubmit={handlePasswordSubmit}>
                            <div className='passwordFields'>
                                <div className='passwordField'>
                                    <label>{t('current_password')}</label>
                                    <div className='passwordInputWrapper'>
                                        <input
                                            type={showPasswords.current_password ? "text" : "password"}
                                            name="current_password"
                                            value={passwordData.current_password}
                                            onChange={handlePasswordChange}
                                            placeholder={t('enter_current_password')}
                                            className={errors.current_password ? 'error' : ''}
                                            required
                                        />
                                        <span
                                            className='passwordToggle'
                                            onClick={() => togglePasswordVisibility('current_password')}
                                        >
                                            {showPasswords.current_password ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    {errors.current_password && <span className='fieldError'>{errors.current_password}</span>}
                                </div>

                                <div className='passwordField'>
                                    <label>{t('new_password')}</label>
                                    <div className='passwordInputWrapper'>
                                        <input
                                            type={showPasswords.password ? "text" : "password"}
                                            name="password"
                                            value={passwordData.password}
                                            onChange={handlePasswordChange}
                                            placeholder={t('enter_new_password')}
                                            className={errors.password ? 'error' : ''}
                                            required
                                        />
                                        <span
                                            className='passwordToggle'
                                            onClick={() => togglePasswordVisibility('password')}
                                        >
                                            {showPasswords.password ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    {errors.password && <span className='fieldError'>{errors.password}</span>}
                                </div>

                                <div className='passwordField'>
                                    <label>{t('confirm_new_password')}</label>
                                    <div className='passwordInputWrapper'>
                                        <input
                                            type={showPasswords.password_confirmation ? "text" : "password"}
                                            name="password_confirmation"
                                            value={passwordData.password_confirmation}
                                            onChange={handlePasswordChange}
                                            placeholder={t('reenter_new_password')}
                                            className={errors.password_confirmation ? 'error' : ''}
                                            required
                                        />
                                        <span
                                            className='passwordToggle'
                                            onClick={() => togglePasswordVisibility('password_confirmation')}
                                        >
                                            {showPasswords.password_confirmation ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                    {errors.password_confirmation && (
                                        <span className='fieldError'>{errors.password_confirmation}</span>
                                    )}
                                </div>
                            </div>

                            <div className='modalActions'>
                                <button
                                    type="button"
                                    className='cancelBtn'
                                    onClick={() => {
                                        setShowPasswordModal(false);
                                        setErrors({});
                                    }}
                                >
                                    {t('cancel')}
                                </button>
                                <button
                                    type="submit"
                                    className='submitPasswordBtn'
                                    disabled={saving}
                                >
                                    {saving ? t('saving') : t('change_password')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showLogoutModal && (
                <div className='modalOverlay'>
                    <div className='logoutModalContent'>
                        <button className='closeBtn' onClick={() => setShowLogoutModal(false)}>
                            <FaTimes />
                        </button>
                        <h3 className='modalTitle'>{t('logout_confirmation')}</h3>
                        <div className='modalActions'>
                            <button
                                type="button"
                                className='confirmLogoutBtn'
                                onClick={handleLogout}
                            >
                                {t('logout_yes')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
