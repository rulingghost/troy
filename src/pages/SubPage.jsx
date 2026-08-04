import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, Award, CheckCircle } from 'lucide-react';
import ServiceSubPage from './ServiceSubPage';
import './SubPage.css';

const SubPage = () => {
  const { category, slug } = useParams();

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

  const renderContent = () => {
    const normalizedSlug = (slug || '').toLowerCase();

    if (normalizedSlug === 'vizyon') {
      return (
        <div className="corporate-vision-box">
          <h2 className="vision-header">Stratejik Vizyonumuz</h2>
          <div className="highlight-quote-box">
            <div className="quote-icon-badge"><Target size={28} /></div>
            <p className="highlight-text">
              &ldquo;Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten &amp; fark yaratan stratejik iş ortağı olmak&rdquo;
            </p>
          </div>
          <div className="vision-details">
            <p>
              Alx Troy olarak, sağlık ve kurumsal etkinlik sektörlerinde yenilikçi, dinamik ve geleceğe yön veren bir vizyon benimsiyoruz. Yalnızca mevcut talepleri karşılamakla kalmayıp, sektörün henüz fark edilmemiş ihtiyaçlarını önceden tespit ederek proaktif çözümler geliştiriyoruz.
            </p>
            <ul className="subpage-feature-list">
              <li>Geleceğin sağlık &amp; MICE teknolojilerini bugünden kurgulama</li>
              <li>Stratejik vizyon ile katma değer yaratan ortaklık anlayışı</li>
              <li>Bilimsel ve yenilikçi metotlarla sektöre öncülük etme</li>
            </ul>
          </div>
        </div>
      );
    }

    if (normalizedSlug === 'misyon') {
      return (
        <div className="corporate-mission-box">
          <h2 className="mission-header">Misyonumuz</h2>
          <div className="highlight-quote-box mission-theme">
            <div className="quote-icon-badge"><Award size={28} /></div>
            <p className="highlight-text">
              &ldquo;Lokal &amp; global çerçevede sunduğu bilimsel temelli butik çözümleriyle, sürdürülebilir &amp; güvenilir bir paydaştır.&rdquo;
            </p>
          </div>
          <div className="mission-details">
            <p>
              Her kurumun ve projenin özgün dinamiklerini merkeze alarak, ulusal ve uluslararası ölçekte bilimsel, sürdürülebilir ve yüksek kalite standartlarında hizmet sunmayı misyon ediniyoruz.
            </p>
            <ul className="subpage-feature-list">
              <li>Lokal ve global pazarlarda sürdürülebilir iş paydaşlığı</li>
              <li>Her projeye özel butik ve bilimsel temelli yaklaşım</li>
              <li>Güvenilirlik ve operasyonel mükemmellik</li>
            </ul>
          </div>
        </div>
      );
    }

    if (normalizedSlug === 'hakkimizda') {
      return (
        <div className="corporate-about-box">
          <h2>Hakkımızda</h2>
          <p className="lead-paragraph">
            <strong>Alx Troy</strong> olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden &ldquo;stratejik birer yolculuk&rdquo; olduğuna inanıyoruz.
          </p>
          <p className="about-text-p">
            Biz; her kurumun kendine özgü dinamiklerine odaklanan, projelere bilimsel ve butik-kreatif çözümlerle yaklaşan yeni nesil bir MICE partneriyiz.
          </p>
          <p className="about-text-p">
            Bu doğrultuda <strong>&ldquo;Enjoy your journey&rdquo;</strong> mottomuzla, planlama aşamasından etkinlik sonrasına kadar tüm süreci sizin için keyifli bir deneyime dönüştürüyoruz. Ve sadece bir tedarikçi değil, taleplerinize katma değer sağlayan stratejik bir ortak vizyonuyla yaklaşıyoruz.
          </p>

          <div className="about-stats-card">
            <h3>Peki Biz Kim miyiz?</h3>
            <ul className="about-bullet-list">
              <li><CheckCircle size={18} className="bullet-icon" /> <strong>25 yıldır,</strong></li>
              <li><CheckCircle size={18} className="bullet-icon" /> <strong>Ulusal ve Uluslararası çerçevede,</strong></li>
              <li><CheckCircle size={18} className="bullet-icon" /> <strong>Güvenilir &amp; Sürdürülebilir iş paydaşı sorumluluğuyla hareket eden,</strong></li>
              <li><CheckCircle size={18} className="bullet-icon" /> <strong>Amerika merkezli bir organizasyon...</strong></li>
            </ul>
          </div>

          <div className="about-capabilities">
            <h3>Sizin için neler mi yapabiliriz?</h3>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="cap-icon">💻</div>
                <h4>Dijital Çözümler</h4>
                <p>Hedef kitlenizin ihtiyaçlarına özgü üretilen Dijital &amp; AI destekli çözümler</p>
              </div>
              <div className="capability-card">
                <div className="cap-icon">✈️</div>
                <h4>MICE</h4>
                <p>Size özel planlanan yurt içi, yurt dışı toplantı, event, kongre, sempozyum hizmetleri (Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri)</p>
              </div>
              <div className="capability-card">
                <div className="cap-icon">🎓</div>
                <h4>Uygulamalı Öğrenim Modeli</h4>
                <p>Paydaşlarınız için gelişimi interaktif ve keyifli hale getiren eğitim, kurs ve içerikler</p>
              </div>
              <div className="capability-card">
                <div className="cap-icon">🔄</div>
                <h4>Uçtan Uca Yönetim</h4>
                <p>Projelerinizin tek bir elden yönetilmesine imkan sağlayan uçtan uca destek</p>
              </div>
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
