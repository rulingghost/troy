import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import WalkingTrojan from './WalkingTrojan';
import TrojanAiChat from './TrojanAiChat';
import { getAiSettings } from '../services/aiService';
import './FloatingSupport.css';

const FloatingSupport = () => {
  const { content } = useContent();
  const general = content?.general || defaultContent.general;
  const floatingConfig = general.floatingButtons || defaultContent.general.floatingButtons || {};

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [aiSettings, setAiSettings] = useState(getAiSettings());

  // Periyodik veya sayfa etkileşiminde ayarları güncelle
  useEffect(() => {
    setAiSettings(getAiSettings());
  }, [isChatOpen]);

  const isTrojanEnabled = floatingConfig.enabled !== false && 
                          floatingConfig.walkingTrojan !== false && 
                          aiSettings.enabled !== false &&
                          aiSettings.walkingTrojanEnabled !== false;

  return (
    <>
      {/* Ekranın Sağ Altında Duran Truva Atı Maskotu */}
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
    </>
  );
};

export default FloatingSupport;
