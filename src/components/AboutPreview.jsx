import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
              İhtiyaçlarınıza özel, bilimsel temelli ve özgün yaklaşımlarla, ulusal ve uluslararası çerçevede 360 derece stratejik çözümler üreten güvenilir ve sürdürülebilir bir iş ortağıyız.
            </p>
            <p className="about-desc">
              Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden &ldquo;stratejik birer yolculuk&rdquo; olduğuna inanıyoruz.
            </p>
            <Link to="/kurumsal/hakkimizda" className="btn btn-outline about-btn">
              Hakkımızda Daha Fazla <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
