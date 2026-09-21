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
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { 
  getAiSettings, 
  sendChatMessage, 
  saveChatSession 
} from '../services/aiService';
import './TrojanAiChat.css';

const defaultWelcomeQuestions = [
  '🏛️ Alx MICE Kongre ve Etkinlik Hizmetleriniz Nelerdir?',
  '🎓 Preceptorship ve Klinik Eğitim Programlarınız Nasıl İşliyor?',
  '💡 Dijital Sağlık & AI Çözümleriniz Hakkında Bilgi Alabilir miyim?'
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
      content: `Merhaba Sn. Misafirimiz! 👋\n\nAlexander Troy kurumsal asistanına hoş geldiniz. **Alx MICE** ulusal & uluslararası tıp kongrelerimiz, **Preceptorship** klinik hekim eğitimlerimiz ve **Alx Digi** dijital sağlık teknolojilerimiz hakkında size bilgi vermekten mutluluk duyarım.\n\n"Enjoy Your Journey" yaklaşımımızla projenizi birlikte planlayabiliriz. Aşağıdaki sorulardan birine tıklayarak hemen başlayabilir veya sorunuzu yazabilirsiniz:`,
      questions: defaultWelcomeQuestions,
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

    // Eğer "telefon numaramı bırakmak" veya "aramasını istiyorum" tarzı bir butona tıklandıysa formu aç
    if (text.toLowerCase().includes('ara') || text.toLowerCase().includes('numara') || text.toLowerCase().includes('iletişim')) {
      if (!leadSaved && !visitorPhone) {
        setShowLeadForm(true);
      }
    }

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
      // AI servisine gönder (Kısa, net ve dinamik 3 soru üreten sistem)
      const aiResponse = await sendChatMessage({
        messages: updatedMessages.filter(m => m.id !== 'welcome-1'),
        siteContent: content
      });

      const assistantMessage = {
        id: 'ast_' + Date.now(),
        role: 'assistant',
        content: aiResponse.text || aiResponse.content || 'Size nasıl yardımcı olabilirim?',
        questions: aiResponse.questions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      persistSession(finalMessages, { phone: currentPhone });
    } catch (error) {
      console.error('Mesaj hatası:', error);
      const errorMsg = {
        id: 'err_' + Date.now(),
        role: 'assistant',
        content: 'Sorunuzu yanıtlarken kısa bir gecikme oluştu. Proje yöneticimizin sizi doğrudan araması için telefon numaranızı bırakabilirsiniz.',
        questions: [
          'MICE kongre organizasyon süreciniz nasıl işliyor?',
          'Preceptorship klinik eğitim detaylarını alabilir miyim?',
          'İletişim bilgilerinizi alabilir miyim?'
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...updatedMessages, errorMsg]);
    } finally {
      setIsLoading(false);
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
      content: `✅ **İletişim bilgileriniz başarıyla alındı!**\n\nSn. **${visitorName || 'Değerli Misafirimiz'}**, **${visitorPhone}** numaralı telefonunuz Proje ve Etkinlik Yönetimimize iletilmiştir. Uzman proje yöneticimiz gün içinde sizinle iletişime geçerek detayları aktaracaktır.`,
      questions: [
        'MICE kongre organizasyon süreciniz nasıl işliyor?',
        'Preceptorship eğitim programlarınız için teklif alabilir miyim?',
        'Referanslarınızı görebilir miyim?'
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMsgs = [...messages, leadConfirmedMsg];
    setMessages(newMsgs);
    persistSession(newMsgs, { name: visitorName, phone: visitorPhone, email: visitorEmail });
  };

  // Sohbeti Sıfırlama
  const handleResetChat = () => {
    if (window.confirm('Sohbeti sıfırlamak istiyor musunuz?')) {
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
        content: 'Merhaba Sn. Misafirimiz! Alexander Troy kurumsal MICE kongre organizasyonları, Preceptorship klinik hekim eğitimleri ve medikal çözümlerimiz hakkında size nasıl yardımcı olabilirim?',
        questions: defaultWelcomeQuestions,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  };

  // Zengin Formatlayıcı
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
                <span className="dot-blink" /> Canlı MICE &amp; Proje Danışmanı
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
              <span>Uzmanımızın sizi hemen aramasını ister misiniz?</span>
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
              <h4>Ücretsiz Keşif &amp; Fiyat Teklifi İçin Numaranızı İletin</h4>
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
                  placeholder="E-Posta (İsteğe bağlı)" 
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
                <span>İlet</span>
              </button>
            </div>
          </form>
        )}

        {/* Mesaj Akışı */}
        <div className="chat-messages-area">
          {messages.map((msg, index) => {
            const isLastAssistant = msg.role === 'assistant' && index === messages.length - 1;
            const hasQuestions = msg.questions && Array.isArray(msg.questions) && msg.questions.length > 0;

            return (
              <div key={msg.id} className="chat-message-group">
                <div 
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

                {/* SADECE EN SON ASİSTAN MESAJININ ALTINDA ÇIKAN DİNAMİK 3 SORU BUTONU */}
                {isLastAssistant && hasQuestions && !isLoading && (
                  <div className="dynamic-questions-container">
                    <span className="dynamic-questions-title">💡 İlgili Sorular:</span>
                    <div className="dynamic-questions-list">
                      {msg.questions.map((qText, qIdx) => (
                        <button
                          key={qIdx}
                          type="button"
                          className="dynamic-question-btn"
                          onClick={() => handleSendMessage(qText)}
                        >
                          <span>{qText}</span>
                          <ArrowRight size={12} className="btn-arrow" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

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
            placeholder="MICE, Preceptorship veya medikal projeniz hakkında yazın..." 
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
          <span>⚡ Alexander Troy Kurumsal MICE &amp; Medikal Çözümler • "Enjoy Your Journey"</span>
        </div>
      </aside>
    </div>
  );
};

export default TrojanAiChat;
