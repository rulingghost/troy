import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import './FloatingSupport.css';

const FloatingSupport = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const general = content?.general || defaultContent.general;
  const floatingConfig = general.floatingButtons || defaultContent.general.floatingButtons || {};

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (floatingConfig.enabled === false || floatingConfig.scrollTop === false || !showScrollTop) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-support-bar" aria-label={isEn ? 'Scroll to Top' : 'Sayfa Başına Dön'}>
      <button 
        type="button" 
        className="floating-btn scroll-btn"
        onClick={scrollToTop}
        title={isEn ? 'Scroll to Top' : 'Sayfa Başına Dön'}
        aria-label={isEn ? 'Back to Top' : 'Başa Dön'}
      >
        <ChevronUp size={24} />
      </button>
    </aside>
  );
};

export default FloatingSupport;
