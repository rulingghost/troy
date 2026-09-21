import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, X, Pause, Play } from 'lucide-react';
import './WalkingTrojan.css';

const WalkingTrojan = ({ onOpenChat, isChatOpen }) => {
  const [posX, setPosX] = useState(60);
  const [direction, setDirection] = useState(1); // 1: Sağa, -1: Sola
  const [isHovered, setIsHovered] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const requestRef = useRef();
  const lastTimeRef = useRef();

  // Ekran boyutunu izle
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Yürüme animasyonu döngüsü (requestAnimationFrame ile akıcı 60fps)
  useEffect(() => {
    if (isChatOpen || isManualPaused || isHidden) return;

    const speed = 35; // Piksel/saniye
    const horseWidth = 75;

    const animate = (time) => {
      if (lastTimeRef.current !== undefined && !isHovered) {
        const delta = (time - lastTimeRef.current) / 1000;
        const maxRight = Math.max(160, window.innerWidth - horseWidth - 40);
        const minLeft = 20;

        setPosX((prev) => {
          let next = prev + direction * speed * delta;
          if (next >= maxRight) {
            next = maxRight;
            setDirection(-1); // Sola dön
          } else if (next <= minLeft) {
            next = minLeft;
            setDirection(1); // Sağa dön
          }
          return next;
        });
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [direction, isHovered, isChatOpen, isManualPaused, isHidden]);

  if (isHidden) {
    return (
      <button 
        type="button" 
        className="trojan-reopen-pill" 
        onClick={() => setIsHidden(false)}
        title="Troy AI Asistanı Göster"
      >
        <Sparkles size={13} />
        <span>Troy AI</span>
      </button>
    );
  }

  if (isChatOpen) return null;

  return (
    <div 
      className={`walking-trojan-container ${isMobile ? 'is-mobile' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        transform: isMobile ? 'none' : `translateX(${posX}px)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Çok Küçük ve Minimalist Canlı Destek Butonu */}
      <button 
        type="button" 
        className="trojan-micro-chat-btn" 
        onClick={onOpenChat}
        title="Canlı Destek Başlat"
      >
        <MessageCircle size={10} className="micro-icon" />
        <span>Destek</span>
        <span className="micro-pulse-dot" />
      </button>

      {/* Mini Kontroller (Durdur/Gizle) */}
      {isHovered && !isMobile && (
        <div className="trojan-mini-controls">
          <button 
            type="button" 
            className="trojan-ctrl-btn" 
            title={isManualPaused ? 'Devam Et' : 'Durdur'}
            onClick={(e) => {
              e.stopPropagation();
              setIsManualPaused(!isManualPaused);
            }}
          >
            {isManualPaused ? <Play size={10} /> : <Pause size={10} />}
          </button>
          <button 
            type="button" 
            className="trojan-ctrl-btn close-btn" 
            title="Gizle"
            onClick={(e) => {
              e.stopPropagation();
              setIsHidden(true);
            }}
          >
            <X size={10} />
          </button>
        </div>
      )}

      {/* Yön Sarmalayıcısı: direction -1 ise sola döner, 1 ise sağa bakar */}
      <div className={`trojan-flip-wrap ${direction === -1 ? 'face-left' : 'face-right'}`}>
        <div 
          className="trojan-horse-body" 
          onClick={onOpenChat}
          role="button"
          tabIndex={0}
          aria-label="Troy AI Canlı Destek Asistanını Başlat"
          onKeyDown={(e) => { if (e.key === 'Enter') onOpenChat(); }}
        >
          <img 
            src="/trojan-horse.png" 
            alt="Alexander Troy Atı" 
            className="trojan-horse-img"
            draggable="false"
          />
        </div>
        {/* Zemin Temas Gölgesi (Uçuyor hissini tamamen ortadan kaldırır) */}
        <div className="trojan-ground-shadow" />
      </div>
    </div>
  );
};

export default WalkingTrojan;
