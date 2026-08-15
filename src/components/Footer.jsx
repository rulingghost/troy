import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import './Footer.css';

const Footer = () => {
  const { content } = useContent();
  const contact = content?.contact || {};
  const general = content?.general || {};
  const services = content?.services?.items || [];

  const rawPhone = (contact.whatsapp || '+905550123456').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${rawPhone}${contact.whatsappText ? `?text=${encodeURIComponent(contact.whatsappText)}` : ''}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              {general.siteTitle || 'Alexander Troy'}<span>.</span>
            </Link>
            <p className="footer-slogan">&ldquo;{general.topBannerText || 'Enjoy your journey'}&rdquo;</p>
            <p className="footer-desc">
              {contact.desc || 'Geleceğin yapay zeka destekli kurumsal iletişim, MICE etkinlik ve medikal teknoloji çözümleriyle yanınızdayız.'}
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Hizmetlerimiz</h4>
            <ul className="footer-links">
              {services.map((s, idx) => (
                <li key={s.id || idx}>
                  <Link to={s.link || '/'}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Kurumsal & İletişim</h4>
            <ul className="footer-links">
              <li><a href="/#about-preview">Hakkımızda</a></li>
              <li><a href="/#journey">Hizmet Süreci</a></li>
              <li><Link to="/iletisim">Bize Ulaşın</Link></li>
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp Destek
                </a>
              </li>
              <li>
                <Link to="/admin" style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                  Yönetici Paneli (Admin)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {contact.copyright || 'Alexander Troy Corporate. Tüm hakları saklıdır. — Enjoy your journey'}</p>
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
