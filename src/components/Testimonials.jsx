import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Testimonials.css';

const Testimonials = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const testimonialsData = content?.testimonials || {};
  const testimonials = testimonialsData.items || [];
  const sectionTitle = testimonialsData.title || (isEn ? 'Client Testimonials' : 'Müşteri Yorumları');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth <= 768 ? 1 : 2);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">{sectionTitle}</h2>
        
        <div className="testimonials-carousel">
          {testimonials.length > itemsPerView && (
            <button className="carousel-btn prev" onClick={prevSlide} aria-label={isEn ? "Previous testimonial" : "Önceki Yorum"}>
              <ChevronLeft size={24} />
            </button>
          )}
          
          <div className="carousel-track-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={testimonial.id || idx} className="carousel-slide">
                  <div className="testimonial-card glass-panel">
                    <Quote className="quote-icon" size={40} />
                    <p className="testimonial-content">{testimonial.content}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image || 'https://i.pravatar.cc/150?img=1'} 
                        alt={testimonial.name} 
                        className="author-image" 
                      />
                      <div>
                        <h4 className="author-name">{testimonial.name}</h4>
                        <span className="author-role">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > itemsPerView && (
            <button className="carousel-btn next" onClick={nextSlide} aria-label={isEn ? "Next testimonial" : "Sonraki Yorum"}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {testimonials.length > itemsPerView && (
          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button 
                key={idx} 
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={isEn ? `Testimonial page ${idx + 1}` : `Yorum sayfası ${idx + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
