import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import './Header.css';

import { Link, useLocation } from 'react-router-dom';

const menuData = [
  {
    title: 'Kurumsal',
    submenus: [
      {
        name: 'Hakkımızda',
        children: [
          { name: 'Hakkımızda', path: '/kurumsal/hakkimizda' },
          { name: 'Vizyon', path: '/kurumsal/vizyon' },
          { name: 'Misyon', path: '/kurumsal/misyon' }
        ]
      },
      {
        name: 'Bilgi Merkezi',
        children: [
          { name: 'Belgeler', path: '/kurumsal/belgeler' },
          { name: 'Katalog', path: '/kurumsal/katalog' },
          { name: 'Kalite Politikamız', path: '/kurumsal/kalite-politikamiz' }
        ]
      }
    ]
  },
  {
    title: 'Alx MICE',
    submenus: [
      {
        name: 'Toplantı',
        children: [
          { name: 'Lokal', path: '/alx-mice/toplanti-lokal' },
          { name: 'Global', path: '/alx-mice/toplanti-global' }
        ]
      },
      { name: 'Incentive', children: [{ name: 'Genel', path: '/alx-mice/incentive' }] },
      {
        name: 'Kongre',
        children: [
          { name: 'Lokal', path: '/alx-mice/kongre-lokal' },
          { name: 'Global', path: '/alx-mice/kongre-global' }
        ]
      },
      { name: 'Event', children: [{ name: 'Genel', path: '/alx-mice/event' }] }
    ]
  },
  {
    title: 'Alx 4 You',
    submenus: [
      {
        name: 'Own event',
        children: [
          { name: 'Lokal', path: '/alx-4-you/own-event-lokal' },
          { name: 'Global', path: '/alx-4-you/own-event-global' }
        ]
      },
      {
        name: 'Preceptorship',
        children: [
          { name: 'Lokal', path: '/alx-4-you/preceptorship-lokal' },
          { name: 'Global', path: '/alx-4-you/preceptorship-global' }
        ]
      },
      {
        name: 'Kurs & Eğitim',
        children: [
          { name: 'Uygulamalı', path: '/alx-4-you/kurs-uygulamali' },
          { name: 'AI destekli', path: '/alx-4-you/kurs-ai-destekli' }
        ]
      },
      { name: 'Organizasyon', children: [{ name: 'Genel', path: '/alx-4-you/organizasyon' }] }
    ]
  },
  {
    title: 'Alx Digi',
    submenus: [
      { name: 'Giyilebilir Teknoloji', children: [{ name: 'Genel', path: '/alx-digi/giyilebilir-teknoloji' }] },
      { name: 'Tele Sağlık', children: [{ name: 'Genel', path: '/alx-digi/tele-saglik' }] },
      {
        name: 'AI & VR',
        children: [
          { name: 'Deneyimsel Öğrenme', path: '/alx-digi/ai-deneyimsel-ogrenme' },
          { name: 'Aplikasyon', path: '/alx-digi/ai-aplikasyon' }
        ]
      }
    ]
  },
  {
    title: 'Alx Need',
    submenus: [
      { name: 'İstatistik & Çeviri', children: [{ name: 'Genel', path: '/alx-need/istatistik-ceviri' }] },
      { name: 'Medikal & Bilimsel', children: [{ name: 'Genel', path: '/alx-need/medikal-bilimsel' }] },
      { name: 'Online Canlı Yayın', children: [{ name: 'Genel', path: '/alx-need/online-canli-yayin' }] },
      { name: 'Omnichannel Yönetimi', children: [{ name: 'Genel', path: '/alx-need/omnichannel' }] }
    ]
  },
  {
    title: 'Galeri',
    submenus: [
      {
        name: 'Galeri',
        children: [
          { name: 'Fotoğraflar', path: '/galeri/fotograflar' },
          { name: 'Videolar', path: '/galeri/videolar' }
        ]
      }
    ]
  }
];

const Header = () => {
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
                <Link to={menuData[index].submenus[0]?.children[0]?.path || '/'}>
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
          </ul>
        </nav>

        <div className="header-actions">
          <div className="language-selector">
            <Globe size={18} className="lang-icon" />
            <button className={`lang-btn ${lang === 'TR' ? 'active' : ''}`} onClick={() => setLang('TR')}>TR</button>
            <span className="lang-divider">/</span>
            <button className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} onClick={() => setLang('EN')}>EN</button>
          </div>
          <a href="/#contact" className="btn btn-primary contact-btn">Bize Ulaşın</a>
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
              <div className="mobile-nav-title">{menu.title}</div>
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
             <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-contact-link">Bize Ulaşın</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
