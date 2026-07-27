import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/slide1.png',
    badge: 'Alx MICE',
    title: 'MICE Organizasyonları',
    desc: 'Lokal ve global çapta profesyonel etkinlik, toplantı ve kongre yönetimiyle markanızı öne çıkarıyoruz.'
  },
  {
    id: 2,
    image: '/slide2.png',
    badge: 'Alx Digi',
    title: 'Dijital Sağlık & AI',
    desc: 'Tele-sağlık, VR donanımları ve yapay zeka destekli tıbbi çözümlerle geleceğe hazırlanın.'
  },
  {
    id: 3,
    image: '/slide3.png',
    badge: 'Alx 4 You & Need',
    title: 'Omnichannel & Kurumsal Eğitim',
    desc: 'İhtiyaç analizinden stratejiye, uçtan uca kurumsal eğitim ve çok kanallı veri yönetimi.'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="container slide-container">
            <div className="slide-content">
              <div className="hero-badge">{slide.badge}</div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  Hizmetleri Keşfet <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </a>
                <a href="#contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                  İletişime Geçin
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="slider-controls">
        <button className="slider-btn prev" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
