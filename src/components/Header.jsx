import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe, PhoneCall } from 'lucide-react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Header = ({ hasBanner = true }) => {
  const { content, lang, setLang } = useContent();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menus = content?.menus || [];
  const logoSrc = content?.general?.logo || '/logo.png';
  const homeLabel = lang === 'EN' ? 'Home' : 'Anasayfa';
  const contactLabel = lang === 'EN' ? 'Contact' : 'İletişim';
  const ctaLabel = content?.general?.headerCtaText || (lang === 'EN' ? 'Contact Us' : 'Bize Ulaşın');

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${hasBanner ? 'with-banner' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <Link to="/" aria-label="Alexander Troy Home">
              <img src={logoSrc} alt={content?.general?.siteTitle || "Alexander Troy"} className="logo-image" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">{homeLabel}</Link>
              </li>
              {menus.map((menu, index) => (
                <li 
                  key={menu.id || index} 
                  className="nav-item dropdown-trigger"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={menu.path} onClick={() => setActiveDropdown(null)}>
                    {menu.title} {menu.submenus && menu.submenus.length > 0 && <ChevronDown size={16} className="dropdown-icon" />}
                  </Link>
                  
                  {/* Mega Menu Dropdown */}
                  {menu.submenus && menu.submenus.length > 0 && (
                    <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
                      <div className="dropdown-inner">
                        <div className="dropdown-grid">
                          {menu.submenus.map((sub, subIdx) => (
                            <div key={subIdx} className="dropdown-column">
                              <h4 className="dropdown-column-title">{sub.name}</h4>
                              {sub.children && sub.children.length > 0 && (
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
                  )}
                </li>
              ))}
              <li className="nav-item">
                <Link to="/iletisim">{contactLabel}</Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            {/* Desktop Language Selector */}
            <div className="language-selector" title={lang === 'EN' ? 'Switch Language' : 'Dili Değiştir'}>
              <Globe size={16} className="lang-icon" />
              <button 
                type="button" 
                className={`lang-btn ${lang === 'TR' ? 'active' : ''}`} 
                onClick={() => setLang('TR')}
                aria-label="Türkçe"
              >
                TR
              </button>
              <span className="lang-divider">/</span>
              <button 
                type="button" 
                className={`lang-btn ${lang === 'EN' ? 'active' : ''}`} 
                onClick={() => setLang('EN')}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link to={content?.general?.headerCtaLink || '/iletisim'} className="btn btn-primary contact-btn">
              {ctaLabel}
            </Link>

            <button 
              type="button"
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-menu-title">{content?.general?.siteTitle || 'Alexander Troy'}</span>
            <div className="mobile-lang-switch">
              <button 
                type="button" 
                className={`mobile-lang-btn ${lang === 'TR' ? 'active' : ''}`} 
                onClick={() => setLang('TR')}
              >
                🇹🇷 TR
              </button>
              <button 
                type="button" 
                className={`mobile-lang-btn ${lang === 'EN' ? 'active' : ''}`} 
                onClick={() => setLang('EN')}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>{homeLabel}</Link>
            </li>
            {menus.map((menu, index) => (
              <li key={menu.id || index} className="mobile-nav-item">
                <Link to={menu.path} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-title">
                  {menu.title}
                </Link>
                {menu.submenus && menu.submenus.length > 0 && (
                  <ul className="mobile-sub-list">
                    {menu.submenus.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <span className="mobile-sub-heading">{sub.name}</span>
                        {sub.children && sub.children.length > 0 && (
                          <ul className="mobile-child-list">
                            {sub.children.map((child, childIdx) => (
                              <li key={childIdx}>
                                <Link to={child.path} onClick={() => setMobileMenuOpen(false)}>
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mobile-nav-item">
              <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)}>
                {contactLabel}
              </Link>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <Link to={content?.general?.headerCtaLink || '/iletisim'} onClick={() => setMobileMenuOpen(false)} className="btn btn-primary mobile-cta-btn">
              <PhoneCall size={18} />
              <span>{ctaLabel}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        )}
      </header>
    </>
  );
};

export default Header;
