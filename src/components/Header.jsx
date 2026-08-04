import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import './Header.css';
import { Link } from 'react-router-dom';

const menuData = [
  {
    title: 'Kurumsal',
    path: '/kurumsal',
    submenus: [
      {
        name: 'Kurumsal',
        children: [
          { name: 'Hakkımızda', path: '/kurumsal/hakkimizda' },
          { name: 'Vizyon', path: '/kurumsal/vizyon' },
          { name: 'Misyon', path: '/kurumsal/misyon' }
        ]
      }
    ]
  },
  {
    title: 'Alx MICE',
    path: '/alx-mice',
    submenus: [
      {
        name: 'Kongre & Toplantı',
        children: [
          { name: 'Yurtiçi Kongre', path: '/alx-mice/yurtici-kongre' },
          { name: 'Yurtdışı Kongre', path: '/alx-mice/yurtdisi-kongre' },
          { name: 'Toplantı', path: '/alx-mice/toplanti' }
        ]
      },
      {
        name: 'Sempozyum',
        children: [
          { name: 'Yurtiçi Sempozyum', path: '/alx-mice/yurtici-sempozyum' },
          { name: 'Yurtdışı Sempozyum', path: '/alx-mice/yurtdisi-sempozyum' }
        ]
      }
    ]
  },
  {
    title: 'Alx 4 You',
    path: '/alx-4-you',
    submenus: [
      {
        name: 'Own Event',
        children: [
          { name: 'Own Event - Yurtiçi', path: '/alx-4-you/own-event-yurtici' },
          { name: 'Own Event - Yurtdışı', path: '/alx-4-you/own-event-yurtdisi' }
        ]
      },
      {
        name: 'Preceptorship',
        children: [
          { name: 'Yurtiçi Preceptorship', path: '/alx-4-you/preceptorship-yurtici' },
          { name: 'Yurtdışı Preceptorship', path: '/alx-4-you/preceptorship-yurtdisi' }
        ]
      },
      {
        name: 'Kurs & Eğitim',
        children: [
          { name: 'Uygulamalı Kurslar', path: '/alx-4-you/uygulamali-kurslar' },
          { name: 'AI Destekli Kurslar', path: '/alx-4-you/ai-destekli-kurslar' },
          { name: 'VR Destekli Öğrenme', path: '/alx-4-you/vr-destekli-ogrenme' }
        ]
      },
      {
        name: 'Incentive',
        children: [
          { name: 'Motivasyonel Faaliyetler', path: '/alx-4-you/motivasyonel-faaliyetler' },
          { name: 'Lansman Toplantıları', path: '/alx-4-you/lansman-toplantilari' },
          { name: 'Şirket Piknikleri', path: '/alx-4-you/sirket-piknikleri' }
        ]
      }
    ]
  },
  {
    title: 'Alx Digi',
    path: '/alx-digi',
    submenus: [
      {
        name: 'Dijital Çözümler',
        children: [
          { name: 'Online Sağlık Danışmanlık', path: '/alx-digi/online-saglik-danismanlik' },
          { name: 'Online Sağlık Asistan', path: '/alx-digi/online-saglik-asistan' },
          { name: 'AI Sağlık Hizmetleri', path: '/alx-digi/ai-saglik-hizmetleri' },
          { name: 'Giyilebilir Teknoloji ile Online Canlı Yayın', path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin' }
        ]
      }
    ]
  },
  {
    title: 'Alx Need',
    path: '/alx-need',
    submenus: [
      {
        name: 'Stratejik Çözümler',
        children: [
          { name: 'Medikal & Bilimsel', path: '/alx-need/medikal-bilimsel' },
          { name: 'İstatistik & Çeviri', path: '/alx-need/istatistik-ceviri' },
          { name: 'Omnichannel', path: '/alx-need/omnichannel' }
        ]
      }
    ]
  }
];

const Header = ({ hasBanner = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lang, setLang] = useState('TR');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${hasBanner ? 'with-banner' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Alexander Troy" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Anasayfa</Link>
            </li>
            {menuData.map((menu, index) => (
              <li 
                key={index} 
                className="nav-item dropdown-trigger"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={menu.path} onClick={() => setActiveDropdown(null)}>
                  {menu.title} <ChevronDown size={16} className="dropdown-icon" />
                </Link>
                
                {/* Mega Menu Dropdown */}
                <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
                  <div className="dropdown-inner">
                    <div className="dropdown-grid">
                      {menu.submenus.map((sub, subIdx) => (
                        <div key={subIdx} className="dropdown-column">
                          <h4 className="dropdown-column-title">{sub.name}</h4>
                          {sub.children.length > 0 && (
                            <ul className="dropdown-sublist">
                              {sub.children.map((child, childIdx) => (
                                <li key={childIdx}><Link to={child.path} onClick={() => setActiveDropdown(null)}>{child.name}</Link></li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <li className="nav-item">
              <Link to="/iletisim">İletişim</Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="language-selector">
            <Globe size={18} className="lang-icon" />
            <button className={`lang-btn ${lang === 'TR' ? 'active' : ''}`} onClick={() => setLang('TR')}>TR</button>
            <span className="lang-divider">/</span>
            <button className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>EN</button>
          </div>
          <Link to="/iletisim" className="btn btn-primary contact-btn">Bize Ulaşın</Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item"><Link to="/" onClick={() => setMobileMenuOpen(false)}>Anasayfa</Link></li>
          {menuData.map((menu, index) => (
            <li key={index} className="mobile-nav-item">
              <Link to={menu.path} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-title" style={{ display: 'block', textDecoration: 'none' }}>
                {menu.title}
              </Link>
              <ul className="mobile-sub-list">
                {menu.submenus.map((sub, subIdx) => (
                  <li key={subIdx}>
                    <span>{sub.name}</span>
                    {sub.children.length > 0 && (
                      <ul className="mobile-child-list">
                        {sub.children.map((child, childIdx) => (
                          <li key={childIdx}><Link to={child.path} onClick={() => setMobileMenuOpen(false)}>- {child.name}</Link></li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="mobile-nav-item">
             <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)} className="mobile-contact-link">Bize Ulaşın</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
