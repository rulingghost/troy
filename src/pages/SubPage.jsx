import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Target, Award, CheckCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import ServiceSubPage from './ServiceSubPage';
import './SubPage.css';

const SubPage = () => {
  const { category, slug } = useParams();
  const { content, lang } = useContent();

  const isEn = lang === 'EN';

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
          <h2 className="vision-header">{vision.title || (isEn ? 'Our Strategic Vision' : 'Stratejik Vizyonumuz')}</h2>
          <div className="highlight-quote-box">
            <div className="quote-icon-badge"><Target size={28} /></div>
            <p className="highlight-text">
              &ldquo;{vision.quote || (isEn ? 'To be the leading strategic partner that anticipates existing or unperceived needs in the healthcare sector, creating proactive solutions and making a difference.' : 'Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten & fark yaratan stratejik iş ortağı olmak')}&rdquo;
            </p>
          </div>
          <div className="vision-details">
            <p>
              {vision.desc || (isEn ? 'At Alx Troy, we adopt an innovative, dynamic, and forward-looking vision in the healthcare and corporate events industry. We not only meet existing demands, but also identify emerging needs to build proactive solutions.' : 'Alx Troy olarak, sağlık ve kurumsal etkinlik sektörlerinde yenilikçi, dinamik ve geleceğe yön veren bir vizyon benimsiyoruz. Yalnızca mevcut talepleri karşılamakla kalmayıp, sektörün henüz fark edilmemiş ihtiyaçlarını önceden tespit ederek proaktif çözümler geliştiriyoruz.')}
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
          <h2 className="mission-header">{mission.title || (isEn ? 'Our Mission' : 'Misyonumuz')}</h2>
          <div className="highlight-quote-box mission-theme">
            <div className="quote-icon-badge"><Award size={28} /></div>
            <p className="highlight-text">
              &ldquo;{mission.quote || (isEn ? 'To be a sustainable and reliable partner through science-based boutique solutions offered within local and global frameworks.' : 'Lokal & global çerçevede sunduğu bilimsel temelli butik çözümleriyle, sürdürülebilir & güvenilir bir paydaştır.')}&rdquo;
            </p>
          </div>
          <div className="mission-details">
            <p>
              {mission.desc || (isEn ? 'Centering on the unique dynamics of each organization and project, our mission is to deliver high-quality, sustainable, and scientifically backed services worldwide.' : 'Her kurumun ve projenin özgün dinamiklerini merkeze alarak, ulusal ve uluslararası ölçekte bilimsel, sürdürülebilir ve yüksek kalite standartlarında hizmet sunmayı misyon ediniyoruz.')}
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
          <h2>{about.title || (isEn ? 'About Us' : 'Hakkımızda')}</h2>
          <p className="lead-paragraph">
            {about.lead || (isEn ? 'As Alx Troy, we believe that corporate events are strategic journeys that nurture company culture and serve your goals, beyond just being an organization.' : 'Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden "stratejik birer yolculuk" olduğuna inanıyoruz.')}
          </p>
          <p className="about-text-p">
            {about.desc1 || (isEn ? 'We are a next-generation MICE partner focusing on each organization\'s unique dynamics, approaching projects with scientific and boutique-creative solutions.' : 'Biz; her kurumun kendine özgü dinamiklerine odaklanan, projelere bilimsel ve butik-kreatif çözümlerle yaklaşan yeni nesil bir MICE partneriyiz.')}
          </p>
          <p className="about-text-p">
            {isEn ? 'Driven by our motto ' : 'Bu doğrultuda '}<strong><em>&ldquo;{about.mottoQuote || 'Enjoy Your Journey'}&rdquo;</em></strong> {about.mottoDesc || (isEn ? ', we turn the entire journey into a delightful experience from inception to wrap-up.' : 'mottomuzla, planlama aşamasından etkinlik sonrasına kadar tüm süreci sizin için keyifli bir deneyime dönüştürüyoruz. Ve sadece bir tedarikçi değil, taleplerinize katma değer sağlayan stratejik bir ortak vizyonuyla yaklaşıyoruz.')}
          </p>

          <div className="about-stats-card">
            <h3>{about.statsTitle || (isEn ? 'Who Are We?' : 'Peki Biz Kim miyiz?')}</h3>
            <ul className="about-bullet-list">
              {(about.statsBullets || (isEn ? [
                '25 years of excellence,',
                'Operating nationally and internationally,',
                'Acting with the responsibility of a trusted stakeholder,',
                'A US-headquartered global organization...'
              ] : [
                '25 yıldır,',
                'Ulusal ve Uluslararası çerçevede,',
                'Güvenilir & Sürdürülebilir iş paydaşı sorumluluğuyla hareket eden,',
                'Amerika merkezli bir organizasyon...'
              ])).map((bullet, idx) => (
                <li key={idx}>
                  <CheckCircle size={18} className="bullet-icon" /> <strong>{bullet}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-capabilities">
            <h3>{about.capabilitiesTitle || (isEn ? 'What Can We Do For You?' : 'Sizin için neler mi yapabiliriz?')}</h3>
            <div className="capabilities-grid">
              {(about.capabilities || [
                { icon: '💻', title: isEn ? 'MICE & Congress Services' : 'MICE & Kongre Hizmetleri', desc: isEn ? 'Transportation, accommodation, transfers, AV technical production, and expert guides.' : 'Ulaşım, konaklama, transfer, salon & teknik altyapı, gala ve profesyonel rehberlik.' },
                { icon: '✈️', title: isEn ? 'Own Event & Special Destinations' : 'Own Event & Özel Destinasyonlar', desc: isEn ? 'Domestic and international boutique corporate events.' : 'Yurtiçi ve yurtdışı butik organizasyonlar.' },
                { icon: '🩺', title: isEn ? 'Preceptorship & Trainings' : 'Preceptorship & Eğitimler', desc: isEn ? 'Clinical observation programs and hands-on workshops.' : 'Klinik gözlem programları ve uygulamalı kurslar.' },
                { icon: '🤖', title: isEn ? 'AI Health & Broadcasting' : 'AI Destekli Sağlık & Yayın', desc: isEn ? 'Online health consulting, telemedicine, wearable tech and live streaming.' : 'Online sağlık danışmanlığı, tele-tıp, giyilebilir teknoloji ve canlı yayın platformları.' },
                { icon: '📊', title: isEn ? 'Medical & Omnichannel Management' : 'Medikal & Omnichannel Yönetimi', desc: isEn ? 'Medical writing, biostatistics, certified medical translation, and omnichannel strategies.' : 'Medikal yazım, biyo-istatistik, tıbbi çeviri ve omnichannel iletişim stratejileri.' }
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
        <h2>{pageTitle} {isEn ? 'Overview' : 'Hakkında'}</h2>
        <p>
          {isEn 
            ? `At Alexander Troy, we bring together the latest innovations and highest quality standards in ${pageTitle} to offer you an unmatched experience.` 
            : `Alexander Troy olarak, ${pageTitle} alanında sektördeki en güncel yenilikleri ve en kaliteli yaklaşımları bir araya getirerek sizlere benzersiz bir deneyim sunuyoruz.`}
        </p>
        <p>
          {isEn
            ? `Built upon meticulous planning, innovative process governance, and sustainable business models, our ${pageTitle} services empower you to reach your strategic milestones securely and swiftly.`
            : `Detaylı planlama, yenilikçi süreç yönetimi ve sürdürülebilir iş modelleri üzerine inşa ettiğimiz ${pageTitle} hizmetlerimiz, hedeflerinize daha güvenle ve hızla ulaşmanızı sağlar.`}
        </p>
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
              <ArrowLeft size={16} /> {isEn ? 'Back to Home' : 'Anasayfaya Dön'}
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
                <h3>{content?.pages?.sidebarConfig?.contactTitle || (isEn ? 'Have Questions?' : 'Sorularınız mı var?')}</h3>
                <p>{content?.pages?.sidebarConfig?.contactDesc || (isEn ? `Our team will be delighted to assist you with all inquiries regarding ${pageTitle}.` : `Ekibimiz ${pageTitle} konusuyla ilgili tüm sorularınızı yanıtlamaktan mutluluk duyacaktır.`)}</p>
                <Link to="/iletisim" className="btn btn-primary sidebar-btn">{isEn ? 'Contact Us' : 'Bize Ulaşın'}</Link>
              </div>

              <div className="sidebar-card features-card">
                <h3>{content?.pages?.sidebarConfig?.featuresTitle || (isEn ? 'Key Highlights' : 'Öne Çıkan Özellikler')}</h3>
                {(content?.pages?.sidebarConfig?.features || (isEn ? [
                  { icon: '✨', title: 'Quality Guarantee', desc: 'International quality standards' },
                  { icon: '🚀', title: 'Swift Integration', desc: 'Seamless workflow adaptation' },
                  { icon: '🌐', title: 'Global Accessibility', desc: '360° strategic partnership' }
                ] : [
                  { icon: '✨', title: 'Kalite Garantisi', desc: 'Uluslararası kalite standartları' },
                  { icon: '🚀', title: 'Hızlı Entegrasyon', desc: 'Süreçlerinize anında uyum' },
                  { icon: '🌐', title: 'Global Erişilebilirlik', desc: '360° stratejik iş ortaklığı' }
                ])).map((feat, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">{feat.icon || '✨'}</div>
                    <div>
                      <h4>{feat.title}</h4>
                      <span>{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubPage;
