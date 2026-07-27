import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'Pazarlama Direktörü, MedTech A.Ş.',
    content: 'Alx ile gerçekleştirdiğimiz ürün lansmanı beklentilerimizin çok ötesindeydi. Özellikle dijital entegrasyonlar katılımcılarımızı büyüledi.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    role: 'Klinik Araştırmalar Yöneticisi',
    content: 'Medikal çeviri ve canlı yayın hizmetlerindeki profesyonellikleri sayesinde uluslararası kongremizi sıfır hata ile tamamladık.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Dr. Can Kaya',
    role: 'Başhekim, Özel Sağlık Grubu',
    content: 'Tele-sağlık ve AI destekli eğitim çözümlerinde Türkiye\'deki en yenilikçi vizyona sahipler. İletişimimiz çok güçlendi.',
    image: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 4,
    name: 'Elif Şahin',
    role: 'Etkinlik Yöneticisi',
    content: 'Tüm organizasyon sürecinde yanımızda olmaları ve proaktif çözümleri, kriz anlarını bile sorunsuz atlatmamızı sağladı.',
    image: 'https://i.pravatar.cc/150?img=9'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth <= 768 ? 1 : 2);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Müşteri Yorumları</h2>
        
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-track-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="carousel-slide">
                  <div className="testimonial-card glass-panel">
                    <Quote className="quote-icon" size={40} />
                    <p className="testimonial-content">{testimonial.content}</p>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} className="author-image" />
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

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
