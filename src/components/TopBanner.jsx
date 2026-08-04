import React from 'react';
import { Sparkles, X } from 'lucide-react';
import './TopBanner.css';

const TopBanner = ({ onClose }) => {
  return (
    <div className="top-banner">
      <div className="top-banner-shimmer"></div>
      <div className="container top-banner-container">
        <div className="top-banner-pill">
          <Sparkles className="top-banner-sparkle" size={15} />
          <span className="slogan-text">Enjoy your journey</span>
          <Sparkles className="top-banner-sparkle" size={15} />
        </div>
        <button 
          className="top-banner-close-btn" 
          onClick={onClose} 
          aria-label="Kapat"
          title="Kapat"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
