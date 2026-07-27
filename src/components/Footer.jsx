import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">Alx<span>.</span></a>
            <p className="footer-desc">
              Geleceğin kurumsal iletişim, etkinlik ve medikal teknoloji çözümleriyle markanızı bir adım öteye taşıyoruz.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
              <a href="#" className="social-link">IN</a>
              <a href="#" className="social-link">IG</a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li><a href="#">Alx MICE</a></li>
              <li><a href="#">Alx 4 You</a></li>
              <li><a href="#">Alx Digi</a></li>
              <li><a href="#">Alx Need</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Kurumsal</h4>
            <ul className="footer-links">
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Referanslarımız</a></li>
              <li><a href="#">Kariyer</a></li>
              <li><a href="#">İletişim</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alx Corporate. Tüm hakları saklıdır.</p>
          <div className="footer-legal">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
