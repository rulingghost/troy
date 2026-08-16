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
import { useContent } from '../context/ContentContext';
import OrganizationContactForm from '../components/OrganizationContactForm';
import './ContactPage.css';

const ContactPage = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const contact = content?.contact || {};
  const contactPageData = content?.pages?.contactPage || {};

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
      alert(isEn ? 'Please check the "I am not a robot" box.' : 'Lütfen "Ben robot değilim" kutusunu işaretleyiniz.');
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

  const defaultFaqsTR = [
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

  const defaultFaqsEN = [
    {
      q: "When can I get in touch with an Alexander Troy representative?",
      a: "Our phone and email channels are active weekdays from 09:00 to 18:00 (GMT+3). You can also send messages 24/7 via WhatsApp live support."
    },
    {
      q: "How far in advance should we submit MICE and Event requests?",
      a: "For national and international congress or incentive event planning, we recommend reaching out at least 2-4 weeks prior to your target dates."
    },
    {
      q: "How are medical translation and digital technology projects handled?",
      a: "Upon receiving your request, our medical & technical team will contact you within 24 hours to conduct a requirements analysis and project scope."
    },
    {
      q: "Is an appointment required to visit your headquarters?",
      a: "Yes, we kindly request scheduling an appointment in advance so we can ensure the appropriate department leads are available to host you."
    }
  ];

  const faqs = contactPageData.faqs && contactPageData.faqs.length > 0 ? contactPageData.faqs : (isEn ? defaultFaqsEN : defaultFaqsTR);
  const rawWaPhone = (contact.whatsapp || '+905550123456').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${rawWaPhone}?text=${encodeURIComponent(contact.whatsappText || (isEn ? 'Hello, I would like to get information about Alexander Troy services.' : 'Merhaba, Alexander Troy hizmetleri hakkında bilgi almak istiyorum.'))}`;
  const mapLink = contactPageData.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(contact.address || 'Levent Büyükdere Cd. No:195 Şişli İstanbul')}`;

  return (
    <div className="contact-page-wrapper">
      {/* Hero Banner */}
      <section className="contact-page-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container contact-hero-content">
          <div className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">{isEn ? 'Home' : 'Anasayfa'}</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{isEn ? 'Contact' : 'İletişim'}</span>
          </div>
          
          <div className="contact-hero-badge">
            <Sparkles size={16} />
            <span>{contactPageData.heroBadge || (isEn ? 'Contact Us' : 'Bize Ulaşın')}</span>
          </div>

          <h1 className="contact-page-title">
            {contactPageData.heroTitle || (isEn ? 'Future-Ready Solutions' : 'Geleceğin Çözümleri İçin')} <span className="gradient-text">{isEn ? 'Get in Touch' : 'İletişime Geçin'}</span>
          </h1>

          <p className="contact-page-lead">
            {contactPageData.heroLead || contact.desc || (isEn 
              ? 'Alexander Troy provides end-to-end solutions with MICE, 4 You, Digi, and Need services. Reach out to us for project inquiries and collaboration.' 
              : 'Alexander Troy; MICE, 4 You, Digi ve Need çözümleri ile iş ortaklarına uçtan uca hizmet sunar. Sorularınız ve proje talepleriniz için bize ulaşın.')}
          </p>

          <div className="hero-quick-badges">
            <div className="quick-badge">
              <Headphones size={18} />
              <span>{isEn ? 'Fast Support' : 'Hızlı Destek'}</span>
            </div>
            <div className="quick-badge">
              <Building2 size={18} />
              <span>{contact.address || 'Levent / İstanbul Headquarters'}</span>
            </div>
            <div className="quick-badge">
              <ShieldCheck size={18} />
              <span>{isEn ? 'Confidentiality & Quality Guaranteed' : 'Gizlilik & Kalite Garantisi'}</span>
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
            <h3>{isEn ? 'Headquarters' : 'Genel Merkez'}</h3>
            <p>{contact.address || 'Levent, Büyükdere Cd. No:195, 34394 Şişli / İstanbul'}</p>
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link"
            >
              {isEn ? 'Get Directions on Map' : 'Haritada Yol Tarifi Al'} <ExternalLink size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon phone-icon">
              <Phone size={26} />
            </div>
            <h3>{isEn ? 'Phone & Switchboard' : 'Telefon & Santral'}</h3>
            <p>{isEn ? 'Contact us directly for all inquiries.' : 'Tüm soru ve talepleriniz için doğrudan bize ulaşın.'}</p>
            <a href={`tel:${(contact.phone || '+902125550123').replace(/[^0-9+]/g, '')}`} className="card-highlight-link">
              {contact.phone || '+90 (212) 555 01 23'}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon wa-icon">
              <MessageSquare size={26} />
            </div>
            <h3>{isEn ? 'WhatsApp Live Support' : 'WhatsApp Canlı Destek'}</h3>
            <p>{isEn ? 'Chat instantly with our customer support team.' : 'Hızlı ve anlık müşteri hizmetleri temsilcisi ile görüşün.'}</p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-highlight-link wa-link"
            >
              {isEn ? 'Start WhatsApp Chat' : 'WhatsApp Sohbet Başlat'} <ExternalLink size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon mail-icon">
              <Mail size={26} />
            </div>
            <h3>{isEn ? 'Email Inquiry' : 'E-posta İletişim'}</h3>
            <p>{isEn ? 'Send an email for RFP and business inquiries.' : 'Teklif ve kurumsal iş birlikleri için e-posta gönderin.'}</p>
            <a href={`mailto:${contact.email || 'info@alx.com.tr'}`} className="card-highlight-link">
              {contact.email || 'info@alx.com.tr'}
            </a>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="contact-split-layout">
          {/* Left Form Section */}
          <div className="contact-form-section glass-panel">
            <div className="section-header-sm">
              <span className="badge-sub">{isEn ? 'Contact Form' : 'İletişim Formu'}</span>
              <h2>{isEn ? 'Send Us a Message' : 'Bize Mesaj Gönderin'}</h2>
              <p>{isEn ? 'Fill out the form below to receive a swift response or proposal for your project.' : 'Formu doldurarak projeniz veya merak ettikleriniz hakkında hemen teklif alabilirsiniz.'}</p>
            </div>

            {formSubmitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>{isEn ? 'Your Message Has Been Sent!' : 'Mesajınız Başarıyla İletildi!'}</h3>
                <p>{isEn ? 'Thank you. Our representatives will get in touch with you shortly.' : 'Teşekkür ederiz. Temsilcilerimiz en kısa sürede sizinle iletişime geçecektir.'}</p>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cp-name">{isEn ? 'Full Name *' : 'Adınız Soyadınız *'}</label>
                    <input 
                      type="text" 
                      id="cp-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder={isEn ? 'Your Full Name' : 'Adınız Soyadınız'} 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cp-email">{isEn ? 'Email Address *' : 'E-posta Adresiniz *'}</label>
                    <input 
                      type="email" 
                      id="cp-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder={isEn ? 'name@company.com' : 'ornek@sirket.com'} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cp-phone">{isEn ? 'Phone Number' : 'Telefon Numaranız'}</label>
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
                    <label htmlFor="cp-company">{isEn ? 'Company / Organization Name' : 'Şirket / Kurum Adı'}</label>
                    <input 
                      type="text" 
                      id="cp-company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder={isEn ? 'Organization / Company Name' : 'Kurum / Şirket Adı'} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-subject">{isEn ? 'Subject of Inquiry *' : 'İletişim Konusu *'}</label>
                  <select 
                    id="cp-subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" disabled>{isEn ? 'Please select a topic' : 'Lütfen bir konu seçiniz'}</option>
                    <option value="mice">{isEn ? 'Alx MICE - Meetings, Congresses & Incentives' : 'Alx MICE - Toplantı, Kongre & Incentive'}</option>
                    <option value="4you">{isEn ? 'Alx 4 You - Courses, Training & Preceptorship' : 'Alx 4 You - Kurs, Eğitim & Preceptorship'}</option>
                    <option value="digi">{isEn ? 'Alx Digi - AI, VR & Telemedicine' : 'Alx Digi - Yapay Zeka, VR & Tele Sağlık'}</option>
                    <option value="need">{isEn ? 'Alx Need - Medical Translation & Statistics' : 'Alx Need - Medikal Çeviri & İstatistik'}</option>
                    <option value="genel">{isEn ? 'General Inquiry & Appointment Request' : 'Genel Bilgi & Randevu Talebi'}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-message">{isEn ? 'Your Message *' : 'Mesajınız *'}</label>
                  <textarea 
                    id="cp-message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder={isEn ? 'Provide details about your inquiry or project...' : 'Projeniz veya sorunuz hakkında detay yazabilirsiniz...'} 
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
                    <label htmlFor="cp-robot-check" className="captcha-label">{isEn ? 'I am not a robot' : 'Ben robot değilim'}</label>
                  </div>
                  <div className="captcha-logo-wrap">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                    <div className="captcha-texts">
                      <span className="captcha-title">reCAPTCHA</span>
                      <div className="captcha-links">
                        <a href="#" onClick={e => e.preventDefault()}>{isEn ? 'Privacy' : 'Gizlilik'}</a> - <a href="#" onClick={e => e.preventDefault()}>{isEn ? 'Terms' : 'Şartlar'}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary cp-submit-btn">
                  <span>{isEn ? 'Send Message' : 'Gönder'}</span>
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
                <h3>{isEn ? 'Office Location' : 'Ofis Konumumuz'}</h3>
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
                <h3>{isEn ? 'Working Hours' : 'Çalışma Saatlerimiz'}</h3>
              </div>
              <ul className="wh-list">
                <li>
                  <span>{isEn ? 'Monday - Friday:' : 'Pazartesi - Cuma:'}</span>
                  <strong>09:00 - 18:00</strong>
                </li>
                <li>
                  <span>{isEn ? 'Saturday:' : 'Cumartesi:'}</span>
                  <strong>10:00 - 15:00</strong>
                </li>
                <li>
                  <span>{isEn ? 'Sunday:' : 'Pazar:'}</span>
                  <span className="closed-badge">{isEn ? 'Closed' : 'Kapalı'}</span>
                </li>
              </ul>
              <div className="wh-note">
                <Sparkles size={14} />
                <span>{isEn ? 'Our WhatsApp channel is active 24/7 during ongoing events.' : 'WhatsApp Hattımız Etkinlik Süreçlerinde 7/24 Hizmetinizdedir.'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Contact Form */}
        <OrganizationContactForm />

        {/* FAQ Section */}
        <div className="contact-faq-section glass-panel">
          <div className="faq-header text-center">
            <span className="contact-subtitle-badge">{isEn ? 'Frequently Asked Questions' : 'Sıkça Sorulan Sorular'}</span>
            <h2>{isEn ? 'FAQ & Inquiries' : 'Merak Edilenler'}</h2>
            <p>{isEn ? 'Answers to commonly asked questions about our process and services.' : 'İletişim süreci ve hizmetlerimizle ilgili en sık sorulan soruların yanıtları.'}</p>
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
