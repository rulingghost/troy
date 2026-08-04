import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  Globe, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  ChevronDown,
  Sparkles,
  Building2,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    captcha: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.captcha) {
      alert('Lütfen "Ben robot değilim" kutusunu işaretleyiniz.');
      return;
    }
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        captcha: false
      });
    }, 6000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Alexander Troy temsilcisiyle ne zaman iletişime geçebilirim?",
      a: "Hafta içi 09:00 - 18:00 saatleri arasında telefon ve e-posta kanallarımız aktiftir. WhatsApp canlı destek hattımız üzerinden 7/24 mesaj iletebilirsiniz."
    },
    {
      q: "MICE ve Etkinlik organizasyonu talepleri için ne kadar önceden başvurmalıyız?",
      a: "Ulusal ve uluslararası kongre veya incentive etkinlik planlamaları için organizasyon tarihinden en az 2-4 hafta önce iletişime geçmeniz önerilir."
    },
    {
      q: "Medikal çeviri ve dijital teknoloji projeleri nasıl yürütülür?",
      a: "Talebinizi ilettikten sonra uzman medikal & teknik ekibimiz 24 saat içerisinde tarafınızla iletişime geçerek gereksinim analizi ve projelendirme sürecini başlatır."
    },
    {
      q: "Ofisinizi ziyaret etmek için randevu almak gerekli midir?",
      a: "Evet, sizleri en iyi şekilde ağırlayabilmek ve ilgili departman sorumlularımızla buluşturabilmek için önceden randevu oluşturmanızı rica ederiz."
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Hero Banner */}
      <section className="contact-page-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container contact-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Anasayfa</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">İletişim</span>
          </div>
          
          <div className="contact-hero-badge">
            <Sparkles size={16} />
            <span>Bize Ulaşın</span>
          </div>

          <h1 className="contact-page-title">
            Geleceğin Çözümleri İçin <span className="gradient-text">İletişime Geçin</span>
          </h1>

          <p className="contact-page-lead">
            Alexander Troy; MICE, 4 You, Digi ve Need çözümleri ile iş ortaklarına uçtan uca hizmet sunar. Sorularınız ve proje talepleriniz için bize ulaşın.
          </p>

          <div className="hero-quick-badges">
            <div className="quick-badge">
              <Headphones size={18} />
              <span>Hızlı Destek</span>
            </div>
            <div className="quick-badge">
              <Building2 size={18} />
              <span>Levent / İstanbul Headquarters</span>
            </div>
            <div className="quick-badge">
              <ShieldCheck size={18} />
              <span>Gizlilik & Kalite Garantisi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-page-main container">
        {/* Info Cards Grid */}
        <div className="contact-cards-grid">
          <div className="contact-card">
            <div className="contact-card-icon map-icon">
              <MapPin size={26} />
            </div>
            <h3>Genel Merkez</h3>
            <p>Levent, Büyükdere Cd. No:195, 34394 Şişli / İstanbul</p>
            <a 
              href="https://maps.google.com/?q=Levent+Büyükdere+Cd.+No:195+Şişli+İstanbul" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link"
            >
              Haritada Yol Tarifi Al <ExternalLink size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon phone-icon">
              <Phone size={26} />
            </div>
            <h3>Telefon & Santral</h3>
            <p>Tüm soru ve talepleriniz için doğrudan bize ulaşın.</p>
            <a href="tel:+902125550123" className="card-highlight-link">
              +90 (212) 555 01 23
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon wa-icon">
              <MessageSquare size={26} />
            </div>
            <h3>WhatsApp Canlı Destek</h3>
            <p>Hızlı ve anlık müşteri hizmetleri temsilcisi ile görüşün.</p>
            <a 
              href="https://wa.me/905550123456?text=Merhaba,%20Alexander%20Troy%20hizmetleri%20hakkinda%20bilgi%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-highlight-link wa-link"
            >
              WhatsApp Sohbet Başlat <ExternalLink size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon mail-icon">
              <Mail size={26} />
            </div>
            <h3>E-posta İletişim</h3>
            <p>Teklif ve kurumsal iş birlikleri için e-posta gönderin.</p>
            <a href="mailto:info@alx.com.tr" className="card-highlight-link">
              info@alx.com.tr
            </a>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="contact-split-layout">
          {/* Left Form Section */}
          <div className="contact-form-section glass-panel">
            <div className="section-header-sm">
              <span className="badge-sub">İletişim Formu</span>
              <h2>Bize Mesaj Gönderin</h2>
              <p>Formu doldurarak projeniz veya merak ettikleriniz hakkında hemen teklif alabilirsiniz.</p>
            </div>

            {formSubmitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Mesajınız Başarıyla İletildi!</h3>
                <p>Teşekkür ederiz. Temsilcilerimiz en kısa sürede sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cp-name">Adınız Soyadınız *</label>
                    <input 
                      type="text" 
                      id="cp-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Adınız Soyadınız" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cp-email">E-posta Adresiniz *</label>
                    <input 
                      type="email" 
                      id="cp-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="ornek@sirket.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cp-phone">Telefon Numaranız</label>
                    <input 
                      type="tel" 
                      id="cp-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="+90 (5XX) XXX XX XX" 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cp-company">Şirket / Kurum Adı</label>
                    <input 
                      type="text" 
                      id="cp-company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="Kurum / Şirket Adı" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-subject">İletişim Konusu *</label>
                  <select 
                    id="cp-subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>Lütfen bir konu seçiniz</option>
                    <option value="mice">Alx MICE - Toplantı, Kongre & Incentive</option>
                    <option value="4you">Alx 4 You - Kurs, Eğitim & Preceptorship</option>
                    <option value="digi">Alx Digi - Yapay Zeka, VR & Tele Sağlık</option>
                    <option value="need">Alx Need - Medikal Çeviri & İstatistik</option>
                    <option value="genel">Genel Bilgi & Randevu Talebi</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-message">Mesajınız *</label>
                  <textarea 
                    id="cp-message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Projeniz veya sorunuz hakkında detay yazabilirsiniz..." 
                    required
                  ></textarea>
                </div>

                <div className="captcha-container">
                  <div className="captcha-checkbox-wrap">
                    <input 
                      type="checkbox" 
                      id="cp-robot-check" 
                      name="captcha" 
                      checked={formData.captcha} 
                      onChange={handleChange} 
                      className="captcha-checkbox" 
                    />
                    <label htmlFor="cp-robot-check" className="captcha-label">Ben robot değilim</label>
                  </div>
                  <div className="captcha-logo-wrap">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                    <div className="captcha-texts">
                      <span className="captcha-title">reCAPTCHA</span>
                      <div className="captcha-links">
                        <a href="#" onClick={e => e.preventDefault()}>Gizlilik</a> - <a href="#" onClick={e => e.preventDefault()}>Şartlar</a>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary cp-submit-btn">
                  <span>Gönder</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Map & Details Section */}
          <div className="contact-details-side">
            {/* Map Frame Card */}
            <div className="map-container-card glass-panel">
              <div className="map-card-header">
                <MapPin size={20} className="map-header-icon" />
                <h3>Ofis Konumumuz</h3>
              </div>
              <div className="map-iframe-wrapper">
                <iframe 
                  title="Alexander Troy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8282772704153!2d29.008432376660144!3d41.072708371341775!2m2!1b1!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6fcd66fa85b%3A0x7d6560bcbc798d1a!2sB%C3%BCy%C3%BCkdere%20Cd.%20No%3A195%2C%2034394%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                  width="100%" 
                  height="280" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="working-hours-card glass-panel">
              <div className="wh-header">
                <Clock size={20} className="wh-icon" />
                <h3>Çalışma Saatlerimiz</h3>
              </div>
              <ul className="wh-list">
                <li>
                  <span>Pazartesi - Cuma:</span>
                  <strong>09:00 - 18:00</strong>
                </li>
                <li>
                  <span>Cumartesi:</span>
                  <strong>10:00 - 15:00</strong>
                </li>
                <li>
                  <span>Pazar:</span>
                  <span className="closed-badge">Kapalı</span>
                </li>
              </ul>
              <div className="wh-note">
                <Sparkles size={14} />
                <span>WhatsApp Hattımız Etkinlik Süreçlerinde 7/24 Hizmetinizdedir.</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section glass-panel">
          <div className="faq-header text-center">
            <span className="contact-subtitle-badge">Sıkça Sorulan Sorular</span>
            <h2>Merak Edilenler</h2>
            <p>İletişim süreci ve hizmetlerimizle ilgili en sık sorulan soruların yanıtları.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq-chevron" />
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
