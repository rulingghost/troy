import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Cpu, Globe, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/slide1.png',
    badge: '🤖 Yapay Zeka & MICE Teknolojileri',
    title: 'Geleceğin AI Destekli Etkinlik & Kongre Yönetimi',
    desc: 'Yapay zeka algoritmaları, akıllı dijital katılımcı deneyimleri ve hibrit platformlarla organizasyonlarınızı kusursuz bir yolculuğa dönüştürüyoruz.',
    slogan: 'Enjoy your journey',
    icon: <Cpu size={20} />,
    primaryCta: 'Hizmetleri Keşfet',
    secondaryCta: 'Bize Ulaşın'
  },
  {
    id: 2,
    image: '/slide2.png',
    badge: '💡 Alx Digi & Medikal Teknoloji',
    title: 'Tele-Sağlık & Sanal Gerçeklik (VR) Çözümleri',
    desc: 'Giyilebilir teknolojiler, yapay zeka destekli klinik eğitim simülasyonları ve interaktif sağlık platformları ile sınırları kaldırın.',
    slogan: 'Enjoy your journey',
    icon: <Sparkles size={20} />,
    primaryCta: 'Dijital Çözümler',
    secondaryCta: 'İletişime Geçin'
  },
  {
    id: 3,
    image: '/slide3.png',
    badge: '🌐 Omnichannel & Kurumsal Strateji',
    title: 'Uçtan Uca Akıllı Veri & Canlı Yayın Yönetimi',
    desc: '360° medikal iletişim, canlı dijital yayınlar ve yapay zeka destekli çeviri çözümleriyle her adımda yenilikçi iş ortağınızız.',
    slogan: 'Enjoy your journey',
    icon: <Globe size={20} />,
    primaryCta: 'Sürecimizi İnceleyin',
    secondaryCta: 'Bizimle Görüşün'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="hero-slider-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            
            {/* Animated background glow */}
            <div className="glow-effect"></div>

            <div className="container slide-container">
              <div className="slide-content">
                <div className="hero-top-meta">
                  <div className="hero-badge">
                    {slide.icon}
                    <span>{slide.badge}</span>
                  </div>
                </div>

                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>
                
                <div className="hero-actions">
                  <a href="#services" className="btn btn-primary hero-btn-main">
                    {slide.primaryCta} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                  </a>
                  <Link to="/iletisim" className="btn btn-outline hero-btn-sub">
                    {slide.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Dynamic Progress Bar */}
        <div className="slider-progress-bar">
          <div 
            key={current}
            className={`progress-fill ${isPlaying ? 'running' : ''}`}
          ></div>
        </div>

        {/* Slider Controls */}
        <div className="slider-controls">
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Önceki Slayt">
            <ChevronLeft size={28} />
          </button>
          <button className="slider-btn toggle-play" onClick={togglePlay} aria-label="Oynat / Durdur">
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="slider-btn next" onClick={nextSlide} aria-label="Sonraki Slayt">
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Thumbnail Dots */}
        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button 
              key={index} 
              className={`slider-dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Slayt ${index + 1}`}
            >
              <span className="dot-number">0{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
