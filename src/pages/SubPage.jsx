import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, Award, CheckCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import ServiceSubPage from './ServiceSubPage';
import './SubPage.css';

const SubPage = () => {
  const { category, slug } = useParams();
  const { content } = useContent();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, slug]);

  // Format title from slug
  const formatTitle = (text) => {
    if (!text) return '';
    return text.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const pageTitle = formatTitle(slug);
  const categoryTitle = formatTitle(category);

  // Check if special service theme applies
  const serviceCategories = ['alx-mice', 'alx-4-you', 'alx-digi', 'alx-need'];
  const isServiceTheme = serviceCategories.includes(category.toLowerCase());

  if (isServiceTheme) {
    return (
      <ServiceSubPage 
        categoryTitle={categoryTitle} 
        pageTitle={pageTitle} 
        category={category} 
        slug={slug} 
      />
    );
  }

  // Dynamic image based on category
  const getBannerImage = () => {
    switch(category.toLowerCase()) {
      case 'kurumsal':
        return 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920';
      case 'galeri':
        return 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1920';
      default:
        return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920';
    }
  };

  const corporateData = content?.pages?.corporate || {};

  const renderContent = () => {
    const normalizedSlug = (slug || '').toLowerCase();

    if (normalizedSlug === 'vizyon') {
      const vision = corporateData.vision || {};
      return (
        <div className="corporate-vision-box">
          <h2 className="vision-header">{vision.title || 'Stratejik Vizyonumuz'}</h2>
          <div className="highlight-quote-box">
            <div className="quote-icon-badge"><Target size={28} /></div>
            <p className="highlight-text">
              &ldquo;{vision.quote || 'Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten & fark yaratan stratejik iş ortağı olmak'}&rdquo;
            </p>
          </div>
          <div className="vision-details">
            <p>
              {vision.desc || 'Alx Troy olarak, sağlık ve kurumsal etkinlik sektörlerinde yenilikçi, dinamik ve geleceğe yön veren bir vizyon benimsiyoruz. Yalnızca mevcut talepleri karşılamakla kalmayıp, sektörün henüz fark edilmemiş ihtiyaçlarını önceden tespit ederek proaktif çözümler geliştiriyoruz.'}
            </p>
            {vision.bullets && vision.bullets.length > 0 && (
              <ul className="subpage-feature-list">
                {vision.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }

    if (normalizedSlug === 'misyon') {
      const mission = corporateData.mission || {};
      return (
        <div className="corporate-mission-box">
          <h2 className="mission-header">{mission.title || 'Misyonumuz'}</h2>
          <div className="highlight-quote-box mission-theme">
            <div className="quote-icon-badge"><Award size={28} /></div>
            <p className="highlight-text">
              &ldquo;{mission.quote || 'Lokal & global çerçevede sunduğu bilimsel temelli butik çözümleriyle, sürdürülebilir & güvenilir bir paydaştır.'}&rdquo;
            </p>
          </div>
          <div className="mission-details">
            <p>
              {mission.desc || 'Her kurumun ve projenin özgün dinamiklerini merkeze alarak, ulusal ve uluslararası ölçekte bilimsel, sürdürülebilir ve yüksek kalite standartlarında hizmet sunmayı misyon ediniyoruz.'}
            </p>
            {mission.bullets && mission.bullets.length > 0 && (
              <ul className="subpage-feature-list">
                {mission.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }

    if (normalizedSlug === 'hakkimizda') {
      const about = corporateData.about || {};
      return (
        <div className="corporate-about-box">
          <h2>{about.title || 'Hakkımızda'}</h2>
          <p className="lead-paragraph">
            {about.lead || 'Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden "stratejik birer yolculuk" olduğuna inanıyoruz.'}
          </p>
          <p className="about-text-p">
            {about.desc1 || 'Biz; her kurumun kendine özgü dinamiklerine odaklanan, projelere bilimsel ve butik-kreatif çözümlerle yaklaşan yeni nesil bir MICE partneriyiz.'}
          </p>
          <p className="about-text-p">
            Bu doğrultuda <strong><em>&ldquo;{about.mottoQuote || 'Enjoy Your Journey'}&rdquo;</em></strong> {about.mottoDesc || 'mottomuzla, planlama aşamasından etkinlik sonrasına kadar tüm süreci sizin için keyifli bir deneyime dönüştürüyoruz. Ve sadece bir tedarikçi değil, taleplerinize katma değer sağlayan stratejik bir ortak vizyonuyla yaklaşıyoruz.'}
          </p>

          <div className="about-stats-card">
            <h3>{about.statsTitle || 'Peki Biz Kim miyiz?'}</h3>
            <ul className="about-bullet-list">
              {(about.statsBullets || [
                '25 yıldır,',
                'Ulusal ve Uluslararası çerçevede,',
                'Güvenilir & Sürdürülebilir iş paydaşı sorumluluğuyla hareket eden,',
                'Amerika merkezli bir organizasyon...'
              ]).map((bullet, idx) => (
                <li key={idx}>
                  <CheckCircle size={18} className="bullet-icon" /> <strong>{bullet}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-capabilities">
            <h3>{about.capabilitiesTitle || 'Sizin için neler mi yapabiliriz?'}</h3>
            <div className="capabilities-grid">
              {(about.capabilities || [
                { icon: '💻', title: 'MICE & Kongre Hizmetleri', desc: 'Ulaşım, konaklama, transfer, salon & teknik altyapı, gala ve profesyonel rehberlik.' },
                { icon: '✈️', title: 'Own Event & Özel Destinasyonlar', desc: 'Yurtiçi ve yurtdışı butik organizasyonlar.' },
                { icon: '🩺', title: 'Preceptorship & Eğitimler', desc: 'Klinik gözlem programları ve uygulamalı kurslar.' },
                { icon: '🤖', title: 'AI Destekli Sağlık & Yayın', desc: 'Online sağlık danışmanlığı, tele-tıp, giyilebilir teknoloji ve canlı yayın platformları.' },
                { icon: '📊', title: 'Medikal & Omnichannel Yönetimi', desc: 'Medikal yazım, biyo-istatistik, tıbbi çeviri ve omnichannel iletişim stratejileri.' }
              ]).map((cap, idx) => (
                <div key={idx} className="capability-card">
                  <div className="cap-icon">{cap.icon || '✨'}</div>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="subpage-main-text">
        <h2>{pageTitle} Hakkında</h2>
        <p>
          Alexander Troy olarak, <strong>{pageTitle}</strong> alanında sektördeki en güncel yenilikleri ve en kaliteli yaklaşımları bir araya getirerek sizlere benzersiz bir deneyim sunuyoruz. Uzman ekibimizle, küresel standartlarda hazırladığımız çözümleri ihtiyaçlarınıza tam uyumlu hale getiriyoruz.
        </p>
        <p>
          Detaylı planlama, yenilikçi süreç yönetimi ve sürdürülebilir iş modelleri üzerine inşa ettiğimiz {pageTitle} hizmetlerimiz, hedeflerinize daha güvenle ve hızla ulaşmanızı sağlar. Geleceğin iş yapış şekillerini bugünden tasarlayan bir vizyonla hareket etmekteyiz.
        </p>
        <ul className="subpage-feature-list">
          <li>İhtiyaç odaklı özelleştirilebilir yaklaşım</li>
          <li>Uluslararası standartlarda operasyonel mükemmellik</li>
          <li>7/24 kesintisiz destek ve şeffaf iletişim</li>
          <li>Yenilikçi teknolojilerle desteklenen süreçler</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="subpage-wrapper">
      {/* Hero Banner */}
      <section className="subpage-hero" style={{ backgroundImage: `url(${getBannerImage()})` }}>
        <div className="subpage-overlay"></div>
        <div className="container">
          <div className="subpage-hero-content">
            <Link to="/" className="back-link">
              <ArrowLeft size={16} /> Anasayfaya Dön
            </Link>
            <span className="subpage-category">{categoryTitle}</span>
            <h1 className="subpage-title">{pageTitle}</h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="subpage-content-section">
        <div className="container">
          <div className="subpage-content-grid">
            <div className="subpage-main-text">
              {renderContent()}
            </div>

            <div className="subpage-sidebar">
              <div className="sidebar-card contact-card">
                <h3>Sorularınız mı var?</h3>
                <p>Ekibimiz {pageTitle} konusuyla ilgili tüm sorularınızı yanıtlamaktan mutluluk duyacaktır.</p>
                <Link to="/iletisim" className="btn btn-primary sidebar-btn">Bize Ulaşın</Link>
              </div>

              <div className="sidebar-card features-card">
                <h3>Öne Çıkan Özellikler</h3>
                <div className="feature-item">
                  <div className="feature-icon">✨</div>
                  <div>
                    <h4>Kalite Garantisi</h4>
                    <span>Uluslararası kalite standartları</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚀</div>
                  <div>
                    <h4>Hızlı Entegrasyon</h4>
                    <span>Süreçlerinize anında uyum</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🌐</div>
                  <div>
                    <h4>Global Erişilebilirlik</h4>
                    <span>360° stratejik iş ortaklığı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
