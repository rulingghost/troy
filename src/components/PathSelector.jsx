import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { presetPages } from '../data/presetPages';
import { Compass, Check, ChevronDown, Link2, Search, X } from 'lucide-react';
import './PathSelector.css';

const PathSelector = ({ 
  value, 
  onChange, 
  placeholder = 'Örn: /kurumsal veya https://...', 
  label, 
  size = 'normal' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 380, placement: 'bottom' });
  
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const updatePosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const dropdownWidth = Math.min(380, window.innerWidth - 20);
    const dropdownHeight = 360;
    
    // Check if bottom has enough room; if not, open upward
    const spaceBelow = window.innerHeight - rect.bottom;
    const placeTop = spaceBelow < dropdownHeight && rect.top > dropdownHeight;

    let top = placeTop 
      ? rect.top + window.scrollY - dropdownHeight - 6 
      : rect.bottom + window.scrollY + 6;

    // Right-align with button
    let left = rect.right - dropdownWidth;
    if (left < 10) left = 10;
    if (left + dropdownWidth > window.innerWidth - 10) {
      left = window.innerWidth - dropdownWidth - 10;
    }

    setCoords({
      top,
      left,
      width: dropdownWidth,
      placement: placeTop ? 'top' : 'bottom'
    });
  };

  useEffect(() => {
    if (isOpen) {
      updatePosition();
      const handleScrollOrResize = () => updatePosition();
      window.addEventListener('scroll', handleScrollOrResize, true);
      window.addEventListener('resize', handleScrollOrResize);
      return () => {
        window.removeEventListener('scroll', handleScrollOrResize, true);
        window.removeEventListener('resize', handleScrollOrResize);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRef.current && !wrapperRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleSelect = (path) => {
    onChange(path);
    setIsOpen(false);
    setSearch('');
  };

  const filteredCategories = presetPages.map(cat => ({
    ...cat,
    pages: cat.pages.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.path.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.pages.length > 0);

  return (
    <div className={`path-selector-wrapper size-${size}`} ref={wrapperRef}>
      {label && <label className="path-selector-label">{label}</label>}
      <div className="path-input-group">
        <div className="path-input-inner">
          <Link2 size={size === 'xs' ? 12 : 14} className="path-input-icon" />
          <input 
            type="text" 
            className={`admin-path-input ${size}`} 
            value={value || ''} 
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
          />
        </div>

        <button 
          ref={buttonRef}
          type="button" 
          className={`btn-choose-page ${isOpen ? 'active' : ''} ${size}`}
          onClick={() => {
            if (!isOpen) updatePosition();
            setIsOpen(!isOpen);
          }}
          title="Sitedeki Hazır Sayfalardan Seç"
        >
          <Compass size={size === 'xs' ? 12 : 14} />
          {size !== 'xs' && <span>Sayfa Seç</span>}
          <ChevronDown size={size === 'xs' ? 10 : 12} />
        </button>
      </div>

      {/* Render via Portal at document.body so it NEVER clips under other cards */}
      {isOpen && createPortal(
        <div 
          ref={dropdownRef}
          className={`path-dropdown-portal-menu ${coords.placement}`}
          style={{
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            width: `${coords.width}px`
          }}
        >
          <div className="dropdown-search-box">
            <Search size={14} className="dropdown-search-icon" />
            <input 
              type="text" 
              className="dropdown-search-input" 
              placeholder="Sayfa veya rota ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {search && (
              <button 
                type="button" 
                className="btn-clear-search" 
                onClick={() => setSearch('')}
                title="Aramayı Temizle"
              >
                <X size={12} />
              </button>
            )}
          </div>

          <div className="dropdown-options-list">
            {filteredCategories.map((category, catIdx) => (
              <div key={catIdx} className="category-group">
                <div className="category-title">{category.category}</div>
                {category.pages.map((page, pageIdx) => {
                  const isSelected = value === page.path;
                  return (
                    <button 
                      key={pageIdx} 
                      type="button" 
                      className={`path-option-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelect(page.path)}
                    >
                      <div className="option-texts">
                        <span className="option-name">{page.name}</span>
                        <span className="option-path-pill">{page.path}</span>
                      </div>
                      {isSelected && <Check size={16} className="text-success" />}
                    </button>
                  );
                })}
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="no-results">
                <span>Eşleşen sayfa bulunamadı.</span>
                <button 
                  type="button" 
                  className="btn-use-custom" 
                  onClick={() => handleSelect(search)}
                >
                  &quot;{search}&quot; olarak kullan
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default PathSelector;
