import React from 'react';
import { ArrowRight } from 'lucide-react';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section id="about-preview" className="about-preview-section">
      <div className="container">
        <div className="about-preview-wrapper">
          <div className="about-preview-image">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Biz Kimiz Ekibimiz" 
              />
              <div className="image-decoration"></div>
            </div>
          </div>
          
          <div className="about-preview-content">
            <h4 className="about-subtitle">Biz Kimiz?</h4>
            <h2 className="about-title">Geleceğin Çözümlerini Bugünden Tasarlıyoruz</h2>
            <p className="about-desc">
              Alexander Troy olarak, yenilikçi yaklaşımımız ve globale yayılan tecrübemizle kurumunuza özel çözümler üreten dijital etkinlik, eğitim ve danışmanlık partneriniziz.
            </p>
            <p className="about-desc">
              Sürdürülebilirlik, bilimsel yaklaşım ve yaratıcılık ilkelerimizle, ihtiyaç duyduğunuz her alanda güvenilir bir iş ortağı olarak yanınızda yer alıyoruz.
            </p>
            <a href="#hakkimizda" className="btn btn-outline about-btn">
              Hakkımızda Daha Fazla <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
