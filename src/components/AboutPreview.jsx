import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import './AboutPreview.css';

const AboutPreview = () => {
  const { content } = useContent();
  const about = content?.about || {};

  const subtitle = about.subtitle || 'Biz Kimiz?';
  const title = about.title || 'Geleceğin Çözümlerini Bugünden Tasarlıyoruz';
  const desc1 = about.desc1 || 'İhtiyaçlarınıza özel, bilimsel temelli ve özgün yaklaşımlarla, ulusal ve uluslararası çerçevede 360 derece stratejik çözümler üreten güvenilir ve sürdürülebilir bir iş ortağıyız.';
  const desc2 = about.desc2 || 'Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden "stratejik birer yolculuk" olduğuna inanıyoruz.';
  const image = about.image || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800';
  const ctaText = about.ctaText || 'Hakkımızda Daha Fazla';
  const ctaLink = about.ctaLink || '/kurumsal/hakkimizda';

  return (
    <section id="about-preview" className="about-preview-section">
      <div className="container">
        <div className="about-preview-wrapper">
          <div className="about-preview-image">
            <div className="image-container">
              <img 
                src={image} 
                alt={title} 
              />
              <div className="image-decoration"></div>
            </div>
          </div>
          
          <div className="about-preview-content">
            <h4 className="about-subtitle">{subtitle}</h4>
            <h2 className="about-title">{title}</h2>
            {desc1 && <p className="about-desc">{desc1}</p>}
            {desc2 && <p className="about-desc">{desc2}</p>}
            <Link to={ctaLink} className="btn btn-outline about-btn">
              {ctaText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
