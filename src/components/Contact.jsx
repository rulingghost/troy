import React from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle-badge">İletişim & Destek</span>
          <h2 className="contact-main-title">Bizimle İletişime Geçin</h2>
          <p className="contact-header-desc">
            Etkinlik, kongre, medikal çeviri ve yapay zeka dijital çözümlerimiz için bize dilediğiniz kanaldan ulaşabilirsiniz.
          </p>
          <div className="contact-header-actions">
            <Link to="/iletisim" className="btn btn-outline dedicated-contact-btn">
              Detaylı İletişim & Harita Sayfası <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </Link>
          </div>
        </div>

        <div className="contact-wrapper glass-panel">
          {/* Left Column: Direct Contact & Social Action Cards */}
          <div className="contact-info">
            <h3 className="contact-info-title">Direkt İletişim Kanalları</h3>
            <p className="contact-desc">
              Telefon, WhatsApp veya sosyal medya hesaplarımız üzerinden hızlıca temsilcilerimizle görüşün.
            </p>

            {/* Quick Action Badges */}
            <div className="quick-contact-actions">
              <a 
                href="https://wa.me/905550123456?text=Merhaba,%20Alexander%20Troy%20hizmetleri%20hakkinda%20bilgi%20almak%20istiyorum." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="action-card whatsapp-card"
              >
                <div className="card-icon whatsapp-bg">
                  <MessageSquare size={22} />
                </div>
                <div className="card-body">
                  <strong>WhatsApp Canlı Destek</strong>
                  <span>+90 (555) 012 34 56</span>
                </div>
                <ExternalLink size={16} className="card-arrow" />
              </a>

              <a href="tel:+902125550123" className="action-card phone-card">
                <div className="card-icon phone-bg">
                  <Phone size={22} />
                </div>
                <div className="card-body">
                  <strong>Telefon İletişim</strong>
                  <span>+90 (212) 555 01 23</span>
                </div>
                <ExternalLink size={16} className="card-arrow" />
              </a>
            </div>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={22} /></div>
                <div>
                  <strong>Adres:</strong>
                  <p>Levent, Büyükdere Cd. No:195, Şişli / İstanbul</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={22} /></div>
                <div>
                  <strong>E-posta:</strong>
                  <p><a href="mailto:info@alx.com.tr">info@alx.com.tr</a></p>
                </div>
              </li>
            </ul>

            {/* Social Media & Instant Messaging Hub */}
            <div className="social-channel-hub">
              <h4>Sosyal Medya & Diğer Kanallar</h4>
              <div className="social-buttons-grid">
                <a 
                  href="https://wa.me/905550123456" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn whatsapp-btn"
                  title="WhatsApp"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </a>

                <a 
                  href="tel:+902125550123" 
                  className="social-btn phone-btn"
                  title="Telefon"
                >
                  <Phone size={18} />
                  <span>Telefon</span>
                </a>

                <a 
                  href="https://instagram.com" 
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

                <a 
                  href="#" 
                  className="social-btn wechat-btn"
                  title="WeChat"
                >
                  <Globe size={18} />
                  <span>WeChat</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Interactive Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Mesaj Gönderin</h3>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.');
            }}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input type="text" id="name" placeholder="Adınız Soyadınız" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input type="email" id="email" placeholder="ornek@sirket.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telefon Numaranız</label>
                <input type="tel" id="phone" placeholder="+90 (5XX) XXX XX XX" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select id="subject" defaultValue="">
                  <option value="" disabled>Lütfen bir konu seçiniz</option>
                  <option value="mice">Alx MICE (Etkinlik/Kongre)</option>
                  <option value="4you">Alx 4 You (Eğitim)</option>
                  <option value="digi">Alx Digi (Dijital/Sağlık/AI)</option>
                  <option value="need">Alx Need (Danışmanlık/Çeviri)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız</label>
                <textarea id="message" rows="4" placeholder="Mesajınızı buraya yazın..." required></textarea>
              </div>

              {/* Captcha Box */}
              <div className="captcha-container">
                <div className="captcha-checkbox-wrap">
                  <input type="checkbox" id="robot-check" required className="captcha-checkbox" />
                  <label htmlFor="robot-check" className="captcha-label">Ben robot değilim</label>
                </div>
                <div className="captcha-logo-wrap">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                  <div className="captcha-texts">
                    <span className="captcha-title">reCAPTCHA</span>
                    <div className="captcha-links">
                      <a href="#">Gizlilik</a> - <a href="#">Şartlar</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Gönder <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
