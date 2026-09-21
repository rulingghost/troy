import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import WalkingTrojan from './WalkingTrojan';
import TrojanAiChat from './TrojanAiChat';
import { getAiSettings } from '../services/aiService';
import './FloatingSupport.css';

const FloatingSupport = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const general = content?.general || defaultContent.general;
  const floatingConfig = general.floatingButtons || defaultContent.general.floatingButtons || {};

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [aiSettings, setAiSettings] = useState(getAiSettings());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Periyodik veya sayfa etkileşiminde ayarları güncelle
  useEffect(() => {
    setAiSettings(getAiSettings());
  }, [isChatOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTrojanEnabled = floatingConfig.enabled !== false && 
                          floatingConfig.walkingTrojan !== false && 
                          aiSettings.enabled !== false &&
                          aiSettings.walkingTrojanEnabled !== false;

  const isScrollTopVisible = floatingConfig.enabled !== false && 
                             floatingConfig.scrollTop !== false && 
                             showScrollTop;

  return (
    <>
      {/* Ekranın Altında Gezinen Truva Atı Maskotu */}
      {isTrojanEnabled && (
        <WalkingTrojan 
          onOpenChat={() => setIsChatOpen(true)} 
          isChatOpen={isChatOpen} 
        />
      )}

      {/* Yapay Zeka Canlı Destek Modalı */}
      <TrojanAiChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      {/* Sayfa Başına Dön Butonu */}
      {isScrollTopVisible && (
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
      )}
    </>
  );
};

export default FloatingSupport;
