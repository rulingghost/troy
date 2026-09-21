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

      {/* Sağdan sola yürüdüğü için yüzü sola bakar */}
      <div className="trojan-flip-wrap face-left">
        <div 
          className={`trojan-horse-body ${isWalking ? 'is-walking' : 'is-parked'}`}
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
