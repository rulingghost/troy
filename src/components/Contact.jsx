import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper glass-panel">
          <div className="contact-info">
            <h2 className="contact-title">Bizimle İletişime Geçin</h2>
            <p className="contact-desc">
              Etkinlik, kongre ve dijital çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
            </p>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <strong>Adres:</strong>
                  <p>Levent, Büyükdere Cd. No:195, Şişli/İstanbul</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Phone size={24} /></div>
                <div>
                  <strong>Telefon:</strong>
                  <p>+90 (212) 555 01 23</p>
                </div>
              </li>
              <li>
                <div className="info-icon"><Mail size={24} /></div>
                <div>
                  <strong>E-posta:</strong>
                  <p>info@alx.com.tr</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Adınız Soyadınız</label>
                <input type="text" id="name" placeholder="Adınız Soyadınız" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta Adresiniz</label>
                <input type="email" id="email" placeholder="ornek@sirket.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <select id="subject">
                  <option value="">Lütfen seçiniz</option>
                  <option value="mice">Alx MICE (Etkinlik/Kongre)</option>
                  <option value="4you">Alx 4 You (Eğitim)</option>
                  <option value="digi">Alx Digi (Dijital/Sağlık)</option>
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
