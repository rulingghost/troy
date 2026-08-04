import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="footer-logo">Alexander Troy<span>.</span></a>
            <p className="footer-slogan">&ldquo;Enjoy your journey&rdquo;</p>
            <p className="footer-desc">
              Geleceğin yapay zeka destekli kurumsal iletişim, MICE etkinlik ve medikal teknoloji çözümleriyle yanınızdayız.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li><a href="/#services">Alx MICE</a></li>
              <li><a href="/#services">Alx 4 You</a></li>
              <li><a href="/#services">Alx Digi</a></li>
              <li><a href="/#services">Alx Need</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Kurumsal & İletişim</h4>
            <ul className="footer-links">
              <li><a href="/#about-preview">Hakkımızda</a></li>
              <li><a href="/#journey">Hizmet Süreci</a></li>
              <li><a href="/#contact">Bize Ulaşın</a></li>
              <li><a href="https://wa.me/905550123456" target="_blank" rel="noopener noreferrer">WhatsApp Destek</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alexander Troy Corporate. Tüm hakları saklıdır. &mdash; <em>Enjoy your journey</em></p>
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
