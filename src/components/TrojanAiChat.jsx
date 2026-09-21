import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  X, 
  RotateCcw, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Bot,
  ExternalLink,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { 
  getAiSettings, 
  sendChatMessage, 
  saveChatSession 
} from '../services/aiService';
import './TrojanAiChat.css';

const quickSuggestions = [
  { id: 'coating', label: '🛡️ Kanal Kaplama & Temiz Oda', text: 'Kanal kaplama sistemleriniz, GMP ve hijyen standartlarınız hakkında detaylı bilgi alabilir miyim?' },
  { id: 'pricing', label: '📐 Ücretsiz Keşif & Metraj Teklifi', text: 'Tesisimiz için ücretsiz keşif, 3D ölçülendirme ve maliyet teklifi nasıl alabiliriz?' },
  { id: 'installation', label: '⚡ Sıfır Duruşla Hızlı Montaj', text: 'Üretim hatlarımızı durdurmadan kanal kaplama montajı nasıl yapılıyor?' },
  { id: 'mice', label: '🏛️ Alx MICE & Kongre Çözümleri', text: 'Medikal kongre organizasyonları, hekim preceptorship eğitimleri ve kurumsal etkinlikleriniz nelerdir?' },
  { id: 'contact', label: '📞 Uzmanımız Sizi Arasın', text: 'Yetkili proje mühendisinizin beni aramasını istiyorum, numaramı bırakabilir miyim?' }
];

const TrojanAiChat = ({ isOpen, onClose }) => {
  const { content } = useContent();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);

  // Ziyaretçi Bilgileri (Lead)
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [sessionId, setSessionId] = useState('');

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const scrollSuggestions = (dir) => {
    if (suggestionsRef.current) {
      suggestionsRef.current.scrollBy({ left: dir * 180, behavior: 'smooth' });
    }
  };

  // Oturum Başlatma ve Mesajları Yükleme
  useEffect(() => {
    let currentSessionId = localStorage.getItem('troy_active_chat_session_id');
    if (!currentSessionId) {
      currentSessionId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      localStorage.setItem('troy_active_chat_session_id', currentSessionId);
    }
    setSessionId(currentSessionId);

    // Kayıtlı mesajları yükle veya hoşgeldiniz mesajını koy
    const savedChatData = localStorage.getItem(`troy_chat_msgs_${currentSessionId}`);
    if (savedChatData) {
      try {
        const parsed = JSON.parse(savedChatData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch (e) {}
    }

    // İlk Hoşgeldiniz Mesajı
    const initialMsg = {
      id: 'welcome-1',
      role: 'assistant',
      content: `Merhaba Sn. Misafirimiz! 👋\n\nBen **Alexander Troy Akıllı Proje Danışmanıyım**. İlaç ve gıda tesislerine özel **antibakteriyel kanal kaplama sistemlerimiz**, temiz oda çözümleri ve **Alx MICE & etkinlik yönetimi** hakkında merak ettiğiniz tüm teknik detayları yanıtlayabilir, projeniz için **ücretsiz keşif ve fiyat teklifi** sürecinizi başlatabilirim.\n\nSize bugün hangi konuda yardımcı olabilirim?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([initialMsg]);
  }, []);

  // Mesajlar değiştikçe alta kaydır ve kaydet
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Açıldığında inputa odaklan
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Oturumu kaydetme yardımcısı
  const persistSession = (currentMessages, leadInfo = {}) => {
    if (!sessionId) return;

    try {
      localStorage.setItem(`troy_chat_msgs_${sessionId}`, JSON.stringify(currentMessages));
    } catch (e) {}

    const sessionPayload = {
      id: sessionId,
      visitorName: leadInfo.name || visitorName || 'Ziyaretçi',
      visitorPhone: leadInfo.phone || visitorPhone || '',
      visitorEmail: leadInfo.email || visitorEmail || '',
      messages: currentMessages,
      pageUrl: window.location.pathname
    };

    saveChatSession(sessionPayload);
  };

  // Yeni Mesaj Gönderme
  const handleSendMessage = async (textToSend = null) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMessage = {
      id: 'usr_' + Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    // Telefon numarası varsa lead'e işle
    const phoneMatch = text.match(/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/);
    let currentPhone = visitorPhone;
    if (phoneMatch) {
      currentPhone = phoneMatch[0];
      setVisitorPhone(currentPhone);
      setLeadSaved(true);
    }

    persistSession(updatedMessages, { phone: currentPhone });

    try {
      // AI servisine gönder
      const aiResponse = await sendChatMessage({
        messages: updatedMessages.filter(m => m.id !== 'welcome-1'),
        siteContent: content
      });

      const assistantMessage = {
        id: 'ast_' + Date.now(),
        role: 'assistant',
        content: aiResponse.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      persistSession(finalMessages, { phone: currentPhone });
    } catch (error) {
      console.error('Mesaj gönderim hatası:', error);
      const errorMsg = {
        id: 'err_' + Date.now(),
        role: 'assistant',
        content: 'Bağlantı esnasında bir gecikme yaşandı. Sorunuzu yanıtlamak veya sizi aramak üzere **+90 212 211 44 48** numaralı santralimizden veya buradan numaranızı ileterek uzmanımıza hemen ulaşabilirsiniz.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...updatedMessages, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Hızlı öneri butonuna tıklama
  const handleSuggestionClick = (suggestion) => {
    if (suggestion.id === 'contact') {
      setShowLeadForm(true);
    } else {
      handleSendMessage(suggestion.text);
    }
  };

  // İletişim / Lead Formunu Gönderme
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!visitorPhone.trim()) return;

    setLeadSaved(true);
    setShowLeadForm(false);

    const leadConfirmedMsg = {
      id: 'lead_confirm_' + Date.now(),
      role: 'assistant',
      content: `✅ **İletişim bilgileriniz başarıyla alındı!**\n\nSn. **${visitorName || 'Değerli Misafirimiz'}**, paylaşmış olduğunuz **${visitorPhone}** numaralı telefonunuz üzerinden proje mühendisimiz en kısa sürede sizinle irtibata geçecek ve teknik keşif/teklif sürecinizi başlatacaktır. Alexander Troy kalitesini tercih ettiğiniz için teşekkür ederiz.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMsgs = [...messages, leadConfirmedMsg];
    setMessages(newMsgs);
    persistSession(newMsgs, { name: visitorName, phone: visitorPhone, email: visitorEmail });
  };

  // Sohbeti Sıfırlama
  const handleResetChat = () => {
    if (window.confirm('Mevcut sohbeti sıfırlamak istiyor musunuz?')) {
      const newSessionId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      localStorage.setItem('troy_active_chat_session_id', newSessionId);
      localStorage.removeItem(`troy_chat_msgs_${sessionId}`);
      setSessionId(newSessionId);
      setVisitorName('');
      setVisitorPhone('');
      setVisitorEmail('');
      setLeadSaved(false);

      setMessages([{
        id: 'welcome-1',
        role: 'assistant',
        content: 'Merhaba Sn. Misafirimiz! Alexander Troy kanal kaplama sistemleri ve kurumsal çözümlerimiz hakkında size nasıl yardımcı olabilirim?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  // Zengin Formatlayıcı (Kalın metin, emojiler, maddeler)
  const renderFormattedMessage = (content) => {
    if (!content) return '';
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(<strong key={`bold-${idx}-${match.index}`}>{match[1]}</strong>);
        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');

      return (
        <div key={idx} className={`chat-line ${isBullet ? 'chat-bullet-line' : ''}`}>
          {parts.length > 0 ? parts : (line || <br />)}
        </div>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div className="trojan-chat-backdrop" onClick={onClose}>
      <aside 
        className="trojan-chat-window" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Alexander Troy Canlı Destek"
      >
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-header-profile">
            <div className="chat-avatar">
              <Bot size={22} className="avatar-icon" />
              <span className="online-indicator" />
            </div>
            <div className="chat-header-info">
              <h3 className="chat-title">Alexander Troy Danışman</h3>
              <p className="chat-subtitle">
                <span className="dot-blink" /> 7/24 Kanal Kaplama &amp; Proje Canlı Destek
              </p>
            </div>
          </div>

          <div className="chat-header-actions">
            <button 
              type="button" 
              className="chat-action-btn" 
              onClick={handleResetChat} 
              title="Sohbeti Sıfırla"
            >
              <RotateCcw size={15} />
            </button>
            <button 
              type="button" 
              className="chat-action-btn close-btn" 
              onClick={onClose} 
              title="Kapat"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Canlı Numara Bırakma Rozet Butonu */}
        {!leadSaved && (
          <div className="chat-lead-banner">
            <div className="lead-banner-text">
              <PhoneCall size={13} />
              <span>Projeniz için uzmanımızın sizi aramasını ister misiniz?</span>
            </div>
            <button 
              type="button" 
              className="lead-banner-btn"
              onClick={() => setShowLeadForm(!showLeadForm)}
            >
              {showLeadForm ? 'Kapat' : 'Hemen Numara Bırak'}
            </button>
          </div>
        )}

        {/* Lead Formu (Açılır Panel) */}
        {showLeadForm && (
          <form className="chat-lead-panel" onSubmit={handleLeadSubmit}>
            <div className="lead-panel-header">
              <ShieldCheck size={16} />
              <h4>Ücretsiz 3D Keşif &amp; Fiyat Teklifi İçin Numaranızı İletin</h4>
            </div>
            <div className="lead-inputs">
              <div className="lead-field">
                <User size={14} />
                <input 
                  type="text" 
                  placeholder="Adınız Soyadınız / Firma Adı" 
                  value={visitorName} 
                  onChange={(e) => setVisitorName(e.target.value)}
                  required
                />
              </div>
              <div className="lead-field">
                <Phone size={14} />
                <input 
                  type="tel" 
                  placeholder="Telefon Numaranız (05...)" 
                  value={visitorPhone} 
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  required
                />
              </div>
              <div className="lead-field">
                <Mail size={14} />
                <input 
                  type="email" 
                  placeholder="E-Posta Adresiniz (İsteğe bağlı)" 
                  value={visitorEmail} 
                  onChange={(e) => setVisitorEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="lead-actions">
              <button 
                type="button" 
                className="lead-btn-cancel"
                onClick={() => setShowLeadForm(false)}
              >
                Vazgeç
              </button>
              <button type="submit" className="lead-btn-submit">
                <CheckCircle2 size={14} />
                <span>Bilgilerimi İlet</span>
              </button>
            </div>
          </form>
        )}

        {/* Mesaj Akışı */}
        <div className="chat-messages-area">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat-message-row ${msg.role === 'user' ? 'user-row' : 'assistant-row'}`}
            >
              {msg.role === 'assistant' && (
                <div className="msg-avatar">
                  <Sparkles size={13} />
                </div>
              )}
              <div className="msg-bubble">
                <div className="msg-content">
                  {renderFormattedMessage(msg.content)}
                </div>
                <div className="msg-meta">
                  <span className="msg-time">{msg.timestamp}</span>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-message-row assistant-row">
              <div className="msg-avatar">
                <Sparkles size={13} />
              </div>
              <div className="msg-bubble typing-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Hızlı Öneri Çipleri (Quick Suggestions) */}
        <div className="chat-suggestions-wrapper">
          <button 
            type="button" 
            className="chip-scroll-btn left" 
            onClick={() => scrollSuggestions(-1)}
            title="Sola Kaydır"
          >
            <ChevronLeft size={14} />
          </button>

          <div 
            className="chat-suggestions-strip" 
            ref={suggestionsRef}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
          >
            {quickSuggestions.map((item) => (
              <button 
                key={item.id} 
                type="button" 
                className="suggestion-chip"
                onClick={() => handleSuggestionClick(item)}
                disabled={isLoading}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            type="button" 
            className="chip-scroll-btn right" 
            onClick={() => scrollSuggestions(1)}
            title="Sağa Kaydır"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Chat Input Alanı */}
        <form 
          className="chat-input-bar" 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Kanal kaplama veya projeniz hakkında soru sorun..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isLoading}
            className="chat-text-input"
          />
          <button 
            type="submit" 
            className="chat-send-btn" 
            disabled={!inputText.trim() || isLoading}
            title="Gönder"
          >
            <Send size={16} />
          </button>
        </form>

        {/* Footer Alt Bilgi */}
        <div className="chat-footer-brand">
          <span>⚡ Alexander Troy Endüstriyel Hijyen &amp; MICE Çözümleri</span>
        </div>
      </aside>
    </div>
  );
};

export default TrojanAiChat;
