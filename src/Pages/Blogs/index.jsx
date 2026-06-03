import React, { useState, useEffect } from 'react';
import "./scss/style.scss";
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import api from '../../services/api';

const Blog = ({ articles = [] }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeArticle, setActiveArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await api.getAllArticles();

        if (response.data && response.data.data) {
          setBlogData(response.data.data);
        } else {
          setBlogData([]);
        }
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  useEffect(() => {
    if (blogData.length > 0) {
      const articleId = searchParams.get('article');
      if (articleId) {
        const foundArticle = blogData.find(a => a.id === parseInt(articleId));
        if (foundArticle) {
          setActiveArticle(foundArticle);
          return;
        }
      }
      if (!activeArticle) {
        setActiveArticle(blogData[0]);
      }
    }
  }, [blogData, searchParams]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="blogs-page">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#c53030', fontSize: '1.1rem' }}>{t('error_loading_data') || 'Error loading data'}</p>
            <p style={{ color: '#999' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const currentArticle = activeArticle || blogData[0];

  return (
    <div className="blogs-page">
      <aside className="sidebar">
        <h3>{t('latest_articles')}</h3>
        <nav className="article-links">
          {blogData.map((article) => (
            <div
              key={article.id}
              className={`link-item ${currentArticle?.id === article.id ? 'active' : ''}`}
              onClick={() => {
                setActiveArticle(article);
                navigate(`/blogs?article=${article.id}`);
              }}
            >
              <span className="bullet"></span>
              <span className="title">{article.title}</span>
              <span className="arrow"></span>
            </div>
          ))}
        </nav>
      </aside>
      <main className="content-section">
        <div className="image-container">
          <img src={currentArticle?.image} alt={currentArticle?.title} className="header-image" />
        </div>
        <div className="article-text">
          <h2>{currentArticle?.title}</h2>

          <p className="description">{currentArticle?.content}</p>
          {currentArticle?.description && <p>{currentArticle?.description}</p>}
        </div>
      </main>
    </div>
  );
};

export default Blog;