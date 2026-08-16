import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Sparkles } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { lang } = useContent();
  const isEn = lang === 'EN';

  return (
    <div className="not-found-wrapper">
      <div className="container not-found-container">
        <div className="not-found-card glass-panel">
          <div className="not-found-badge">
            <Sparkles size={16} />
            <span>404 ERROR</span>
          </div>
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">
            {isEn ? 'Page Not Found' : 'Sayfa Bulunamadı'}
          </h2>
          <p className="not-found-desc">
            {isEn 
              ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.' 
              : 'Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.'}
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary not-found-btn">
              <Home size={18} />
              <span>{isEn ? 'Back to Homepage' : 'Anasayfaya Dön'}</span>
            </Link>
            <button 
              type="button" 
              onClick={() => window.history.back()} 
              className="btn btn-outline not-found-btn-back"
            >
              <ArrowLeft size={18} />
              <span>{isEn ? 'Go Back' : 'Geri Dön'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
