import React from 'react';
import { Sparkles, X } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './TopBanner.css';

const TopBanner = ({ onClose }) => {
  const { content } = useContent();
  const bannerText = content?.general?.topBannerText || 'Enjoy Your Journey';
  const isEnabled = content?.general?.topBannerEnabled !== false;

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="top-banner">
      <div className="container top-banner-container">
        <div className="top-banner-content">
          <Sparkles className="top-banner-sparkle" size={14} />
          <span className="slogan-text">{bannerText}</span>
          <Sparkles className="top-banner-sparkle" size={14} />
        </div>
        <button 
          className="top-banner-close-btn" 
          onClick={onClose} 
          aria-label="Kapat"
          title="Kapat"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
