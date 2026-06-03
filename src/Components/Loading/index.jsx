import { useTranslation } from 'react-i18next';
import './scss/style.scss';
const Loading = () => {
    const { t, ready } = useTranslation();

    return (
        <div className="loading-container">
            <div className="loading-wrapper">
                <div className="spinner">
                    <div className="spinner-circle"></div>
                </div>
                {ready && <p className="loading-text">{t('loading')}</p>}
            </div>
        </div>
    );
};

export default Loading;
