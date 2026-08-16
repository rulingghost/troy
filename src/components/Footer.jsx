import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import './Footer.css';

const Footer = () => {
  const { content } = useContent();
  const contact = content?.contact || {};
  const general = content?.general || {};
  const services = content?.services?.items || [];
  const legal = content?.pages?.legalPages || defaultContent.pages.legalPages;

  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'kvkk' | null

  const rawPhone = (contact.whatsapp || '+905550123456').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${rawPhone}${contact.whatsappText ? `?text=${encodeURIComponent(contact.whatsappText)}` : ''}`;

  const getModalContent = () => {
    if (activeModal === 'privacy') return legal.privacyPolicy;
    if (activeModal === 'terms') return legal.termsOfService;
    if (activeModal === 'kvkk') return legal.kvkk;
    return null;
  };

  const modalData = getModalContent();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              {general.siteTitle || 'Alexander Troy'}<span>.</span>
            </Link>
            <p className="footer-slogan"><em>&ldquo;{general.topBannerText || 'Enjoy Your Journey'}&rdquo;</em></p>
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
          <p>&copy; {new Date().getFullYear()} {contact.copyright || 'Alexander Troy Corporate. Tüm hakları saklıdır. — Enjoy Your Journey'}</p>
          <div className="footer-legal">
            <button type="button" className="footer-legal-btn" onClick={() => setActiveModal('privacy')}>
              Gizlilik Politikası
            </button>
            <button type="button" className="footer-legal-btn" onClick={() => setActiveModal('terms')}>
              Kullanım Koşulları
            </button>
            <button type="button" className="footer-legal-btn" onClick={() => setActiveModal('kvkk')}>
              KVKK Aydınlatma
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal Popup */}
      {activeModal && modalData && (
        <div className="legal-modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="legal-modal-header">
              <div className="legal-modal-title-row">
                <ShieldCheck size={24} className="legal-icon" />
                <h3>{modalData.title}</h3>
              </div>
              <button type="button" className="legal-modal-close" onClick={() => setActiveModal(null)} aria-label="Kapat">
                <X size={20} />
              </button>
            </div>
            <div className="legal-modal-body">
              <p style={{ whiteSpace: 'pre-line', lineHeight: '1.7', color: 'var(--text-secondary, #94a3b8)' }}>
                {modalData.content}
              </p>
            </div>
            <div className="legal-modal-footer">
              <span className="legal-modal-updated">Son Güncelleme: {modalData.lastUpdated || '2026'}</span>
              <button type="button" className="btn btn-primary btn-sm" onClick={() => setActiveModal(null)}>
                Anladım &amp; Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
