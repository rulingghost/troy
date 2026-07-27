import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
              <h2>{pageTitle} Hakkında</h2>
              <p>
                Alexander Troy olarak, <strong>{pageTitle}</strong> alanında sektördeki en güncel yenilikleri ve en kaliteli yaklaşımları bir araya getirerek sizlere benzersiz bir deneyim sunuyoruz. Uzman ekibimizle, küresel standartlarda hazırladığımız çözümleri ihtiyaçlarınıza tam uyumlu hale getiriyoruz.
              </p>
              <p>
                Detaylı planlama, yenilikçi süreç yönetimi ve sürdürülebilir iş modelleri üzerine inşa ettiğimiz {pageTitle} hizmetlerimiz, hedeflerinize daha güvenle ve hızla ulaşmanızı sağlar. Geleceğin iş yapış şekillerini bugünden tasarlayan bir vizyonla hareket etmekteyiz.
              </p>
              
              {slug.toLowerCase() === 'belgeler' ? (
                <div className="documents-grid">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="document-card">
                      <div className="document-icon">📄</div>
                      <div className="document-info">
                        <h4>ISO {9000 + item}:2026 Yeterlilik ve Kalite Sertifikası</h4>
                        <span className="document-meta">PDF • 2.{item} MB</span>
                      </div>
                      <a href="#" className="btn btn-outline document-download">İncele / İndir</a>
                    </div>
                  ))}
                </div>
              ) : slug.toLowerCase() === 'katalog' ? (
                <div className="catalog-container">
                  <div className="catalog-cover">
                    <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600" alt="Alexander Troy E-Katalog" />
                  </div>
                  <div className="catalog-details">
                    <h3>2026 Kurumsal E-Katalog</h3>
                    <p>Tüm etkinlik yönetimi, danışmanlık hizmetlerimiz ve vizyonumuzun detaylı olarak anlatıldığı, yepyeni teknolojik çözümlerimizin yer aldığı güncel interaktif e-kataloğumuzu keşfedin.</p>
                    <div className="catalog-actions">
                      <a href="#" className="btn btn-primary">📖 Online İncele</a>
                      <a href="#" className="btn btn-outline">📥 PDF Olarak İndir</a>
                    </div>
                  </div>
                </div>
              ) : category.toLowerCase() === 'galeri' ? (
                <div className="placeholder-gallery">
                  <div className="gallery-item"></div>
                  <div className="gallery-item"></div>
                  <div className="gallery-item"></div>
                  <div className="gallery-item"></div>
                </div>
              ) : (
                <ul className="subpage-feature-list">
                  <li>İhtiyaç odaklı özelleştirilebilir yaklaşım</li>
                  <li>Uluslararası standartlarda operasyonel mükemmellik</li>
                  <li>7/24 kesintisiz destek ve şeffaf iletişim</li>
                  <li>Yenilikçi teknolojilerle desteklenen süreçler</li>
                </ul>
              )}
            </div>

            <div className="subpage-sidebar">
              <div className="sidebar-card contact-card">
                <h3>Sorularınız mı var?</h3>
                <p>Ekibimiz {pageTitle} konusuyla ilgili tüm sorularınızı yanıtlamaktan mutluluk duyacaktır.</p>
                <Link to="/#contact" className="btn btn-primary sidebar-btn">Bize Ulaşın</Link>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
