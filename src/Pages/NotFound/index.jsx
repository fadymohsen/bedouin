import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <Helmet>
        <title>404 - Page Not Found | Bedouin Trails</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 style={{ fontSize: '6rem', color: '#CF9050', marginBottom: '0' }}>404</h1>
      <h2 style={{ color: '#333', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '32px', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={{
        background: '#CF9050',
        color: '#fff',
        padding: '12px 32px',
        borderRadius: '8px',
        fontSize: '1rem',
        textDecoration: 'none',
      }}>
        {t('home')}
      </Link>
    </div>
  );
}
