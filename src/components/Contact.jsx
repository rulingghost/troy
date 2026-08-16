import React from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import './Contact.css';

const Contact = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const contact = content?.contact || {};

  const title = contact.title || (isEn ? 'Get in Touch with Us' : 'Bizimle İletişime Geçin');
  const subtitle = contact.subtitle || (isEn ? 'Contact & Support' : 'İletişim & Destek');
  const desc = contact.desc || (isEn 
    ? 'Feel free to reach out to us via any channel for your events, congresses, medical translations, and AI digital solutions.' 
    : 'Etkinlik, kongre, medikal çeviri ve yapay zeka dijital çözümlerimiz için bize dilediğiniz kanaldan ulaşabilirsiniz.');
  const phone = contact.phone || '+90 (212) 555 01 23';
  const rawPhone = (contact.whatsapp || '+90 (555) 012 34 56').replace(/[^0-9]/g, '');
  const whatsapp = contact.whatsapp || '+90 (555) 012 34 56';
  const whatsappText = contact.whatsappText || (isEn ? 'Hello, I would like to get information about Alexander Troy services.' : 'Merhaba, Alexander Troy hizmetleri hakkında bilgi almak istiyorum.');
  const email = contact.email || 'info@alx.com.tr';
  const address = contact.address || 'Levent, Büyükdere Cd. No:195, Şişli / İstanbul';
  const instagram = contact.instagram || 'https://instagram.com';
  const wechat = contact.wechat || '#';

  const waLink = `https://wa.me/${rawPhone}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle-badge">{subtitle}</span>
          <h2 className="contact-main-title">{title}</h2>
          <p className="contact-header-desc">{desc}</p>
          <div className="contact-header-actions">
            <Link to="/iletisim" className="btn btn-outline dedicated-contact-btn">
              {isEn ? 'Detailed Contact & Location Page' : 'Detaylı İletişim & Harita Sayfası'} <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </Link>
          </div>
        </div>

        <div className="contact-wrapper glass-panel">
          {/* Left Column: Direct Contact & Social Action Cards */}
          <div className="contact-info">
            <h3 className="contact-info-title">{isEn ? 'Direct Contact Channels' : 'Direkt İletişim Kanalları'}</h3>
            <p className="contact-desc">
              {isEn 
                ? 'Connect promptly with our representatives via phone, WhatsApp, or official channels.' 
                : 'Telefon, WhatsApp veya sosyal medya hesaplarımız üzerinden hızlıca temsilcilerimizle görüşün.'}
            </p>

            {/* Quick Action Badges */}
            <div className="quick-contact-actions">
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-card whatsapp-card"
              >
                <div className="card-icon whatsapp-bg">
                  <MessageSquare size={22} />
                </div>
                <div className="card-body">
                  <strong>{isEn ? 'WhatsApp Live Support' : 'WhatsApp Canlı Destek'}</strong>
                  <span>{whatsapp}</span>
                </div>
                <ExternalLink size={16} className="card-arrow" />
              </a>

              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="action-card phone-card">
                <div className="card-icon phone-bg">
                  <Phone size={22} />
                </div>
                <div className="card-body">
                  <strong>{isEn ? 'Phone Inquiry' : 'Telefon İletişim'}</strong>
                  <span>{phone}</span>
                </div>
                <ExternalLink size={16} className="card-arrow" />
              </a>
            </div>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={22} /></div>
                <div>
                  <strong>{isEn ? 'Address:' : 'Adres:'}</strong>
                  <p>{address}</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={22} /></div>
                <div>
                  <strong>{isEn ? 'Email:' : 'E-posta:'}</strong>
                  <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
              </li>
            </ul>

            {/* Social Media & Instant Messaging Hub */}
            <div className="social-channel-hub">
              <h4>{isEn ? 'Social Channels & Messaging' : 'Sosyal Medya & Diğer Kanallar'}</h4>
              <div className="social-buttons-grid">
                <a 
                  href={waLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn whatsapp-btn"
                  title="WhatsApp"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </a>

                <a 
                  href={`tel:${phone.replace(/[^0-9+]/g, '')}`} 
                  className="social-btn phone-btn"
                  title={isEn ? 'Phone' : 'Telefon'}
                >
                  <Phone size={18} />
                  <span>{isEn ? 'Phone' : 'Telefon'}</span>
                </a>

                <a 
                  href={instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn instagram-btn"
                  title="Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>

                {wechat && wechat !== '#' && (
                  <a 
                    href={wechat} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn wechat-btn"
                    title="WeChat"
                  >
                    <Globe size={18} />
                    <span>WeChat</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column: Interactive Form */}
          <div className="contact-form-container">
            <h3 className="form-title">{isEn ? 'Send Us a Message' : 'Mesaj Gönderin'}</h3>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert(isEn ? 'Your message has been sent successfully! We will get back to you shortly.' : 'Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.');
            }}>
              <div className="form-group">
                <label htmlFor="name">{isEn ? 'Full Name' : 'Adınız Soyadınız'}</label>
                <input type="text" id="name" placeholder={isEn ? 'Your Full Name' : 'Adınız Soyadınız'} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{isEn ? 'Email Address' : 'E-posta Adresiniz'}</label>
                <input type="email" id="email" placeholder={isEn ? 'name@company.com' : 'ornek@sirket.com'} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{isEn ? 'Phone Number' : 'Telefon Numaranız'}</label>
                <input type="tel" id="phone" placeholder="+90 (5XX) XXX XX XX" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{isEn ? 'Subject' : 'Konu'}</label>
                <select id="subject" defaultValue="">
                  <option value="" disabled>{isEn ? 'Please select a topic' : 'Lütfen bir konu seçiniz'}</option>
                  <option value="mice">{isEn ? 'Alx MICE (Events / Congresses)' : 'Alx MICE (Etkinlik/Kongre)'}</option>
                  <option value="4you">{isEn ? 'Alx 4 You (Education / Preceptorship)' : 'Alx 4 You (Eğitim)'}</option>
                  <option value="digi">{isEn ? 'Alx Digi (Digital / Health / AI)' : 'Alx Digi (Dijital/Sağlık/AI)'}</option>
                  <option value="need">{isEn ? 'Alx Need (Consulting / Medical Writing)' : 'Alx Need (Danışmanlık/Çeviri)'}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{isEn ? 'Your Message' : 'Mesajınız'}</label>
                <textarea id="message" rows="4" placeholder={isEn ? 'Type your message here...' : 'Mesajınızı buraya yazın...'} required></textarea>
              </div>

              {/* Captcha Box */}
              <div className="captcha-container">
                <div className="captcha-checkbox-wrap">
                  <input type="checkbox" id="robot-check" required className="captcha-checkbox" />
                  <label htmlFor="robot-check" className="captcha-label">{isEn ? 'I am not a robot' : 'Ben robot değilim'}</label>
                </div>
                <div className="captcha-logo-wrap">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                  <div className="captcha-texts">
                    <span className="captcha-title">reCAPTCHA</span>
                    <div className="captcha-links">
                      <a href="#" onClick={(e) => e.preventDefault()}>{isEn ? 'Privacy' : 'Gizlilik'}</a> - <a href="#" onClick={(e) => e.preventDefault()}>{isEn ? 'Terms' : 'Şartlar'}</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                {isEn ? 'Send Message' : 'Gönder'} <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
