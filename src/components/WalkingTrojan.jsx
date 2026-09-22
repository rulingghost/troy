import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import './WalkingTrojan.css';

const WalkingTrojan = ({ onOpenChat, isChatOpen }) => {
  const [posX, setPosX] = useState(0);
  const [isWalking, setIsWalking] = useState(true);
  const [hasArrived, setHasArrived] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const requestRef = useRef();
  const lastTimeRef = useRef();

  // Ekran boyutunu izle & 1/8 pozisyonunu güncel tut
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (hasArrived && !mobile) {
        setPosX(Math.round(window.innerWidth / 8));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasArrived]);

  // Sağ taraftan başla, ekranın 1/8'i kadar sola yol al ve orada sabit kal (git-gel yapmaz)
  useEffect(() => {
    if (hasArrived || isChatOpen || isHidden || isMobile) return;

    const speed = 55; // Piksel/saniye (akıcı ve doğal adımlama hızı)

    const animate = (time) => {
      const targetX = Math.round(window.innerWidth / 8);

      if (lastTimeRef.current !== undefined && !isHovered) {
        const delta = (time - lastTimeRef.current) / 1000;
        setPosX((prev) => {
          const next = prev + speed * delta;
          if (next >= targetX) {
            setHasArrived(true);
            setIsWalking(false);
            return targetX;
          }
          return next;
        });
      }
      lastTimeRef.current = time;

      if (!hasArrived) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [hasArrived, isHovered, isChatOpen, isHidden, isMobile]);

  const activelyMoving = isWalking && !hasArrived && !isHovered && !isMobile;

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
      className={`walking-trojan-container ${isMobile ? 'is-mobile' : ''} ${isHovered ? 'hovered' : ''} ${hasArrived ? 'is-arrived' : ''}`}
      style={{
        transform: isMobile ? 'none' : `translateX(-${posX}px)`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Minimalist Canlı Destek Butonu */}
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

      {/* Mini Kapatma Butonu (Hover Olunca Çıkar) */}
      {isHovered && !isMobile && (
        <div className="trojan-mini-controls">
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

      {/* Ayaklardan Çıkan Net ve Belirgin Koşu Toz Bulutu Efekti */}
      <div 
        className={`trojan-dust-trail ${activelyMoving ? 'is-active' : ''}`} 
        aria-hidden="true"
      >
        <svg className="trojan-dust-defs" width="0" height="0">
          <defs>
            <linearGradient id="trojanDustGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffdfa" />
              <stop offset="45%" stopColor="#f6ecdb" />
              <stop offset="100%" stopColor="#e3cbab" />
            </linearGradient>
          </defs>
        </svg>

        {/* 1. Ana Arka Ayak Toz Pufu */}
        <div className="trojan-dust-cloud puff-main">
          <svg viewBox="0 0 28 19" className="dust-cloud-svg">
            <path
              d="M 6,17 C 2.5,17 0.5,14.5 0.5,11.5 C 0.5,8.8 2.6,6.6 5.2,6.4 C 6.3,2.8 9.6,0.5 13.5,0.5 C 17.6,0.5 21,3 21.8,6.8 C 24.2,7.2 26.5,9.2 26.5,11.8 C 26.5,14.7 24.2,17 21.5,17 Z"
              fill="url(#trojanDustGrad)"
              stroke="rgba(175, 135, 90, 0.45)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 2. Yükselen İkincil Toz Bulutu */}
        <div className="trojan-dust-cloud puff-high">
          <svg viewBox="0 0 24 16" className="dust-cloud-svg">
            <path
              d="M 5,14.5 C 1.8,14.5 0.5,12.2 0.5,9.8 C 0.5,7 2.5,5 5,4.8 C 6,1.8 9,0.5 12.5,0.5 C 16.5,0.5 19.2,2.5 19.8,5.2 C 21.8,5.8 23.5,7.5 23.5,9.8 C 23.5,12.5 21.5,14.5 19,14.5 Z"
              fill="url(#trojanDustGrad)"
              stroke="rgba(175, 135, 90, 0.45)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 3. İkinci Adım Arka Toz Pufu */}
        <div className="trojan-dust-cloud puff-low">
          <svg viewBox="0 0 28 19" className="dust-cloud-svg">
            <path
              d="M 6,17 C 2.5,17 0.5,14.5 0.5,11.5 C 0.5,8.8 2.6,6.6 5.2,6.4 C 6.3,2.8 9.6,0.5 13.5,0.5 C 17.6,0.5 21,3 21.8,6.8 C 24.2,7.2 26.5,9.2 26.5,11.8 C 26.5,14.7 24.2,17 21.5,17 Z"
              fill="url(#trojanDustGrad)"
              stroke="rgba(175, 135, 90, 0.45)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 4. Ön Ayak Tozu */}
        <div className="trojan-dust-cloud puff-front">
          <svg viewBox="0 0 24 16" className="dust-cloud-svg">
            <path
              d="M 5,14.5 C 1.8,14.5 0.5,12.2 0.5,9.8 C 0.5,7 2.5,5 5,4.8 C 6,1.8 9,0.5 12.5,0.5 C 16.5,0.5 19.2,2.5 19.8,5.2 C 21.8,5.8 23.5,7.5 23.5,9.8 C 23.5,12.5 21.5,14.5 19,14.5 Z"
              fill="url(#trojanDustGrad)"
              stroke="rgba(175, 135, 90, 0.45)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* 5. Zemin Çizgisinde Toz Dalgası */}
        <div className="trojan-ground-puff" />

        {/* 6. Havaya Fırlayan Küçük Toprak Taneleri */}
        <span className="trojan-dust-grain grain-1" />
        <span className="trojan-dust-grain grain-2" />
        <span className="trojan-dust-grain grain-3" />
      </div>

      {/* Sağdan sola yürüdüğü için yüzü sola bakar */}
      <div className="trojan-flip-wrap face-left">
        <div 
          className={`trojan-horse-body ${activelyMoving ? 'is-walking' : 'is-parked'}`}
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
        {/* Zemin Temas Gölgesi */}
        <div className="trojan-ground-shadow" />
      </div>
    </div>
  );
};

export default WalkingTrojan;
