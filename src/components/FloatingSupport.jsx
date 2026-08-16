import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ChevronUp, X } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import './FloatingSupport.css';

const FloatingSupport = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const general = content?.general || defaultContent.general;
  const contact = content?.contact || defaultContent.contact;
  const floatingConfig = general.floatingButtons || defaultContent.general.floatingButtons || {};

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (floatingConfig.enabled === false) {
    return null;
  }

  const rawPhone = (contact.whatsapp || '+905550123456').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/${rawPhone}?text=${encodeURIComponent(contact.whatsappText || (isEn ? 'Hello, I would like to get information about Alexander Troy services.' : 'Merhaba, Alexander Troy hizmetleri hakkında bilgi almak istiyorum.'))}`;
  const directPhoneLink = `tel:${(contact.phone || '+902125550123').replace(/[^0-9+]/g, '')}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-support-bar" aria-label={isEn ? 'Fast Support & Contact' : 'Hızlı Destek ve İletişim'}>
      {/* WhatsApp Message Bubble */}
      {floatingConfig.whatsapp && bubbleOpen && (
        <div className="floating-bubble">
          <span>{floatingConfig.bubbleText || (isEn ? 'How can we help you?' : 'Size nasıl yardımcı olabiliriz?')}</span>
          <button 
            type="button" 
            className="floating-bubble-close" 
            onClick={() => setBubbleOpen(false)}
            aria-label={isEn ? 'Close Message' : 'Mesajı Kapat'}
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp Action Button */}
      {floatingConfig.whatsapp && (
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn whatsapp-btn"
          title={isEn ? 'Send Message on WhatsApp' : 'WhatsApp ile Mesaj Gönderin'}
          aria-label={isEn ? 'WhatsApp Support' : 'WhatsApp Destek'}
        >
          <MessageSquare size={24} />
          <span className="pulse-ring"></span>
        </a>
      )}

      {/* Phone Call Action Button */}
      {floatingConfig.phone && (
        <a 
          href={directPhoneLink} 
          className="floating-btn phone-btn"
          title={isEn ? 'Call Us' : 'Bizi Arayın'}
          aria-label={isEn ? 'Call Us' : 'Telefonla Arayın'}
        >
          <Phone size={22} />
        </a>
      )}

      {/* Scroll to Top Action Button */}
      {floatingConfig.scrollTop && showScrollTop && (
        <button 
          type="button" 
          className="floating-btn scroll-btn"
          onClick={scrollToTop}
          title={isEn ? 'Scroll to Top' : 'Sayfa Başına Dön'}
          aria-label={isEn ? 'Back to Top' : 'Başa Dön'}
        >
          <ChevronUp size={24} />
        </button>
      )}
    </aside>
  );
};

export default FloatingSupport;
