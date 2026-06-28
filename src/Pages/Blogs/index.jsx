import React, { useState, useEffect } from 'react';
import "./scss/style.scss";
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';
import api from '../../services/api';
import { slugify } from '../../utils/slugify';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '../../utils/Breadcrumbs';

const Blog = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
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
      if (slug) {
        const foundArticle = blogData.find(a => slugify(a.title) === slug);
        if (foundArticle) {
          setActiveArticle(foundArticle);
          return;
        }
      }
      if (!activeArticle) {
        setActiveArticle(blogData[0]);
      }
    }
  }, [blogData, slug]);

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
      {currentArticle && (
        <>
        <Breadcrumbs items={[
          { name: 'Home', url: 'https://bedouintrails.com/' },
          { name: 'Blogs', url: 'https://bedouintrails.com/blogs' },
          { name: currentArticle.title, url: `https://bedouintrails.com/blogs/${slugify(currentArticle.title)}` }
        ]} />
        <Helmet>
          <title>{currentArticle.meta_title || currentArticle.title} | Bedouin Trails</title>
          <meta name="description" content={currentArticle.meta_description || currentArticle.title} />
          <link rel="canonical" href={`https://bedouintrails.com/blogs/${slugify(currentArticle.title)}`} />
          <meta property="og:title" content={currentArticle.meta_title || currentArticle.title} />
          <meta property="og:description" content={currentArticle.meta_description || currentArticle.title} />
          <meta property="og:image" content={currentArticle.image} />
          <meta property="og:url" content={`https://bedouintrails.com/blogs/${slugify(currentArticle.title)}`} />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentArticle.meta_title || currentArticle.title} />
          <meta name="twitter:description" content={currentArticle.meta_description || currentArticle.title} />
          <meta name="twitter:image" content={currentArticle.image} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": currentArticle.meta_title || currentArticle.title,
              "description": currentArticle.meta_description || currentArticle.title,
              "image": currentArticle.image,
              "url": `https://bedouintrails.com/blogs/${slugify(currentArticle.title)}`,
              "publisher": {
                "@type": "Organization",
                "name": "Bedouin Trails",
                "logo": { "@type": "ImageObject", "url": "https://bedouintrails.com/img/logo.png" }
              },
              "mainEntityOfPage": `https://bedouintrails.com/blogs/${slugify(currentArticle.title)}`
            })}
          </script>
        </Helmet>
        </>
      )}
      <aside className="sidebar">
        <h3>{t('latest_articles')}</h3>
        <nav className="article-links">
          {blogData.map((article) => (
            <div
              key={article.id}
              className={`link-item ${currentArticle?.id === article.id ? 'active' : ''}`}
              onClick={() => {
                setActiveArticle(article);
                navigate(`/blogs/${slugify(article.title)}`);
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
        <article>
          <div className="image-container">
            <img src={currentArticle?.image} alt={currentArticle?.title} className="header-image" />
          </div>
          <div className="article-text">
            <h1>{currentArticle?.title}</h1>

            <p className="description">{currentArticle?.content}</p>
            {currentArticle?.description && <p>{currentArticle?.description}</p>}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog;
