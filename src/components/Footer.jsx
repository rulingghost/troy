import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Alexander Troy<span>.</span></Link>
            <p className="footer-slogan">&ldquo;Enjoy your journey&rdquo;</p>
            <p className="footer-desc">
              Geleceğin yapay zeka destekli kurumsal iletişim, MICE etkinlik ve medikal teknoloji çözümleriyle yanınızdayız.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Hizmetlerimiz</h4>
            <ul className="footer-links">
              <li><Link to="/alx-mice">Alx MICE</Link></li>
              <li><Link to="/alx-4-you">Alx 4 You</Link></li>
              <li><Link to="/alx-digi">Alx Digi</Link></li>
              <li><Link to="/alx-need">Alx Need</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Kurumsal & İletişim</h4>
            <ul className="footer-links">
              <li><a href="/#about-preview">Hakkımızda</a></li>
              <li><a href="/#journey">Hizmet Süreci</a></li>
              <li><Link to="/iletisim">Bize Ulaşın</Link></li>
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
