import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Cpu, Globe, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import './Hero.css';

const Hero = () => {
  const { content } = useContent();
  const slides = content?.hero?.slides || [];
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, current, slides.length]);

  const nextSlide = () => {
    if (slides.length <= 1) return;
    setCurrent((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (slides.length <= 1) return;
    setCurrent((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  // Safe bounds check
  const activeIndex = current >= slides.length ? 0 : current;

  return (
    <section className="hero-slider-section">
      <div className="hero-slider">
        {slides.map((slide, index) => {
          const isPrimaryInternal = slide.primaryCtaLink?.startsWith('/');
          const isSecondaryInternal = slide.secondaryCtaLink?.startsWith('/');

          return (
            <div 
              key={slide.id || index} 
              className={`slide ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>

              <div className="container slide-container">
                <div className="slide-content">
                  <div className="hero-top-meta">
                    <div className="hero-badge">
                      <Sparkles size={18} />
                      <span>{slide.badge}</span>
                    </div>
                  </div>

                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-desc">{slide.desc}</p>
                  
                  <div className="hero-actions">
                    {slide.primaryCta && (
                      isPrimaryInternal ? (
                        <Link to={slide.primaryCtaLink || '/'} className="btn btn-primary hero-btn-main">
                          {slide.primaryCta} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </Link>
                      ) : (
                        <a href={slide.primaryCtaLink || '#services'} className="btn btn-primary hero-btn-main">
                          {slide.primaryCta} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </a>
                      )
                    )}

                    {slide.secondaryCta && (
                      isSecondaryInternal ? (
                        <Link to={slide.secondaryCtaLink || '/iletisim'} className="btn btn-outline hero-btn-sub">
                          {slide.secondaryCta}
                        </Link>
                      ) : (
                        <a href={slide.secondaryCtaLink || '/iletisim'} className="btn btn-outline hero-btn-sub">
                          {slide.secondaryCta}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Dynamic Progress Bar */}
        {slides.length > 1 && (
          <div className="slider-progress-bar">
            <div 
              key={activeIndex}
              className={`progress-fill ${isPlaying ? 'running' : ''}`}
            ></div>
          </div>
        )}

        {/* Slider Controls */}
        {slides.length > 1 && (
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
        )}

        {/* Thumbnail Dots */}
        {slides.length > 1 && (
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Slayt ${index + 1}`}
              >
                <span className="dot-number">0{index + 1}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
