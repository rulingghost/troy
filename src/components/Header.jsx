import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Header = ({ hasBanner = true }) => {
  const { content } = useContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lang, setLang] = useState('TR');

  const menus = content?.menus || [];
  const logoSrc = content?.general?.logo || '/logo.png';

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
            <img src={logoSrc} alt={content?.general?.siteTitle || "Alexander Troy"} className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Anasayfa</Link>
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
          <Link to={content?.general?.headerCtaLink || '/iletisim'} className="btn btn-primary contact-btn">
            {content?.general?.headerCtaText || 'Bize Ulaşın'}
          </Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item"><Link to="/" onClick={() => setMobileMenuOpen(false)}>Anasayfa</Link></li>
          {menus.map((menu, index) => (
            <li key={menu.id || index} className="mobile-nav-item">
              <Link to={menu.path} onClick={() => setMobileMenuOpen(false)} className="mobile-nav-title" style={{ display: 'block', textDecoration: 'none' }}>
                {menu.title}
              </Link>
              {menu.submenus && menu.submenus.length > 0 && (
                <ul className="mobile-sub-list">
                  {menu.submenus.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <span>{sub.name}</span>
                      {sub.children && sub.children.length > 0 && (
                        <ul className="mobile-child-list">
                          {sub.children.map((child, childIdx) => (
                            <li key={childIdx}><Link to={child.path} onClick={() => setMobileMenuOpen(false)}>- {child.name}</Link></li>
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
             <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)} className="mobile-contact-link">Bize Ulaşın</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
