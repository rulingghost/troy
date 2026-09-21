import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  MessageSquare, 
  PhoneCall, 
  Sparkles, 
  Search, 
  Trash2, 
  Eye, 
  Clock, 
  Download, 
  RefreshCw, 
  X, 
  Phone, 
  Mail, 
  CheckCircle2
} from 'lucide-react';
import { 
  getChatSessions, 
  updateChatSessionStatus, 
  deleteChatSession 
} from '../services/aiService';
import './AdminAiSupportTab.css';

const AdminAiSupportTab = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'leads' | 'new'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Sohbetleri Yükle
  const loadChats = async () => {
    setLoading(true);
    try {
      const data = await getChatSessions();
      setChats(data || []);
    } catch (e) {
      console.error('Sohbetler yüklenemedi:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  // Durum Değiştirme
  const handleStatusChange = async (sessionId, newStatus) => {
    const updated = await updateChatSessionStatus(sessionId, newStatus);
    setChats([...updated]);
    if (selectedChat && selectedChat.id === sessionId) {
      setSelectedChat({ ...selectedChat, status: newStatus });
    }
  };

  // Sohbet Silme
  const handleDeleteChat = async (sessionId) => {
    if (window.confirm('Bu müşteri görüşme kaydını silmek istediğinize emin misiniz?')) {
      const updated = await deleteChatSession(sessionId);
      setChats([...updated]);
      if (selectedChat?.id === sessionId) {
        setSelectedChat(null);
      }
    }
  };

  // Dışa Aktarma (JSON)
  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(chats, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `troy-ai-musteri-talepleri-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // İstatistikler
  const totalChats = chats.length;
  const leadChats = chats.filter(c => c.hasLeadInfo || Boolean(c.visitorPhone || c.visitorEmail));
  const newChats = chats.filter(c => c.status === 'lead' || c.status === 'active' || c.status === 'new');

  // Filtreleme
  const filteredChats = chats.filter(chat => {
    if (filterType === 'leads' && !chat.hasLeadInfo && !chat.visitorPhone) return false;
    if (filterType === 'new' && (chat.status === 'completed' || chat.status === 'called')) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = (chat.visitorName || '').toLowerCase().includes(q);
      const matchPhone = (chat.visitorPhone || '').toLowerCase().includes(q);
      const matchEmail = (chat.visitorEmail || '').toLowerCase().includes(q);
      const matchMsg = (chat.messages || []).some(m => (m.content || '').toLowerCase().includes(q));
      return matchName || matchPhone || matchEmail || matchMsg;
    }
    return true;
  });

  return (
    <div className="admin-ai-support-wrapper">
      {/* Üst Başlık */}
      <div className="ai-support-header">
        <div>
          <h2 className="section-heading">
            <Bot size={24} className="heading-icon" />
            <span>AI Canlı Destek &amp; Müşteri Talepleri</span>
          </h2>
          <p className="section-subtext">
            Web sitenizdeki Truva Atı üzerinden gelen canlı destek sorularını, numara bırakan müşterileri (lead) ve tüm görüşme dökümlerini buradan takip edebilirsiniz.
          </p>
        </div>

        <div className="ai-actions-right">
          <button 
            type="button" 
            className="ai-tool-btn" 
            onClick={loadChats} 
            title="Listeyi Yenile"
          >
            <RefreshCw size={14} className={loading ? 'spinning' : ''} />
            <span>Yenile</span>
          </button>
          <button 
            type="button" 
            className="ai-tool-btn" 
            onClick={handleExportData} 
            title="Kayıtları JSON İndir"
          >
            <Download size={14} />
            <span>Dışa Aktar</span>
          </button>
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div className="ai-stats-grid">
        <div className="ai-stat-card">
          <div className="stat-icon-wrap purple">
            <MessageSquare size={22} />
          </div>
          <div className="stat-details">
            <span className="stat-label">Toplam Ziyaretçi Görüşmesi</span>
            <strong className="stat-value">{totalChats}</strong>
          </div>
        </div>

        <div className="ai-stat-card highlight">
          <div className="stat-icon-wrap gold">
            <PhoneCall size={22} />
          </div>
          <div className="stat-details">
            <span className="stat-label">Numara Bırakan Müşteri (Lead)</span>
            <strong className="stat-value">{leadChats.length}</strong>
          </div>
        </div>

        <div className="ai-stat-card">
          <div className="stat-icon-wrap green">
            <Clock size={22} />
          </div>
          <div className="stat-details">
            <span className="stat-label">Bekleyen / Yeni Talepler</span>
            <strong className="stat-value">{newChats.length}</strong>
          </div>
        </div>

        <div className="ai-stat-card">
          <div className="stat-icon-wrap blue">
            <Sparkles size={22} />
          </div>
          <div className="stat-details">
            <span className="stat-label">AI Altyapı Durumu</span>
            <strong className="stat-value-text">Troy AI • Aktif</strong>
          </div>
        </div>
      </div>

      {/* Görüşmeler & Talepler Bölümü */}
      <div className="ai-chats-section">
        {/* Filtre ve Arama Çubuğu */}
        <div className="ai-filter-toolbar">
          <div className="ai-filter-tabs">
            <button 
              type="button" 
              className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              Tümü ({chats.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn lead-filter ${filterType === 'leads' ? 'active' : ''}`}
              onClick={() => setFilterType('leads')}
            >
              📞 Numara Bırakanlar ({leadChats.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterType === 'new' ? 'active' : ''}`}
              onClick={() => setFilterType('new')}
            >
              ⏳ Bekleyen Talepler ({newChats.length})
            </button>
          </div>

          <div className="ai-search-box">
            <Search size={15} />
            <input 
              type="text" 
              placeholder="İsim, telefon veya soru içeriği ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button type="button" className="clear-btn" onClick={() => setSearchQuery('')}>
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Görüşmeler Tablosu */}
        {loading ? (
          <div className="ai-loading-state">
            <RefreshCw size={24} className="spinning" />
            <span>Müşteri görüşmeleri yükleniyor...</span>
          </div>
        ) : filteredChats.length === 0 ? (
          <div className="ai-empty-state">
            <MessageSquare size={42} />
            <h4>Kayıtlı görüşme bulunamadı</h4>
            <p>Ziyaretçiler sitedeki Truva Atı'na tıklayarak soru sorduğunda veya numara bıraktığında bu listede görüntülenecektir.</p>
          </div>
        ) : (
          <div className="ai-table-card">
            <table className="ai-chats-table">
              <thead>
                <tr>
                  <th>Tarih &amp; Saat</th>
                  <th>Ziyaretçi / Müşteri</th>
                  <th>İletişim Numarası</th>
                  <th>Mesaj Sayısı</th>
                  <th>Talep Durumu</th>
                  <th style={{ textAlign: 'right' }}>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredChats.map((chat) => {
                  const hasLead = Boolean(chat.visitorPhone || chat.visitorEmail);
                  const dateFormatted = new Date(chat.createdAt || chat.updatedAt).toLocaleString('tr-TR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <tr key={chat.id} className={hasLead ? 'lead-row' : ''}>
                      <td className="date-cell">
                        <span className="date-text">{dateFormatted}</span>
                        <span className="page-text">{chat.pageUrl || '/'}</span>
                      </td>
                      <td className="visitor-cell">
                        <strong>{chat.visitorName || 'Anonim Ziyaretçi'}</strong>
                        {hasLead && <span className="lead-tag">MÜŞTERİ TALEBİ</span>}
                      </td>
                      <td className="contact-cell">
                        {chat.visitorPhone ? (
                          <div className="contact-group">
                            <a 
                              href={`tel:${chat.visitorPhone}`} 
                              className="phone-link" 
                              title="Telefonla Ara"
                            >
                              <Phone size={13} />
                              <span>{chat.visitorPhone}</span>
                            </a>
                            <a 
                              href={`https://wa.me/${chat.visitorPhone.replace(/\D/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="wa-link" 
                              title="WhatsApp'tan Yaz"
                            >
                              WhatsApp
                            </a>
                          </div>
                        ) : (
                          <span className="no-contact">-</span>
                        )}
                        {chat.visitorEmail && (
                          <div className="email-subtext">
                            <Mail size={12} />
                            <span>{chat.visitorEmail}</span>
                          </div>
                        )}
                      </td>
                      <td className="msg-count-cell">
                        <span className="count-pill">{chat.messages?.length || 0} mesaj</span>
                      </td>
                      <td className="status-cell">
                        <select 
                          value={chat.status || 'lead'} 
                          onChange={(e) => handleStatusChange(chat.id, e.target.value)}
                          className={`status-select status-${chat.status || 'lead'}`}
                        >
                          <option value="lead">🚨 Yeni Talep</option>
                          <option value="active">💬 Aktif Sohbet</option>
                          <option value="called">📞 Arandı / İletişime Geçildi</option>
                          <option value="completed">✅ Tamamlandı</option>
                        </select>
                      </td>
                      <td className="actions-cell">
                        <button 
                          type="button" 
                          className="btn-read-chat"
                          onClick={() => setSelectedChat(chat)}
                          title="Tüm Konuşmayı İncele"
                        >
                          <Eye size={15} />
                          <span>İncele</span>
                        </button>
                        <button 
                          type="button" 
                          className="btn-delete-chat"
                          onClick={() => handleDeleteChat(chat.id)}
                          title="Kaydı Sil"
                        >
                          <Trash2 size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* SOHBET DETAY TRANSKRİPT MODALI */}
      {selectedChat && (
        <div className="ai-modal-backdrop" onClick={() => setSelectedChat(null)}>
          <div className="ai-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="ai-modal-header">
              <div className="modal-title-wrap">
                <MessageSquare size={20} className="icon-purple" />
                <div>
                  <h3>Müşteri Talebi &amp; Görüşme Dökümü</h3>
                  <span className="modal-sub">Oturum ID: {selectedChat.id}</span>
                </div>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedChat(null)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Müşteri İletişim Kartı */}
            <div className="ai-modal-lead-card">
              <div className="lead-card-col">
                <span className="col-label">Ziyaretçi Adı</span>
                <strong>{selectedChat.visitorName || 'İsim Belirtilmedi'}</strong>
              </div>
              <div className="lead-card-col">
                <span className="col-label">Telefon Numarası</span>
                {selectedChat.visitorPhone ? (
                  <div className="phone-action-row">
                    <a href={`tel:${selectedChat.visitorPhone}`} className="modal-phone-btn">
                      <Phone size={14} />
                      <span>{selectedChat.visitorPhone}</span>
                    </a>
                    <a 
                      href={`https://wa.me/${selectedChat.visitorPhone.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="modal-wa-btn"
                    >
                      WhatsApp
                    </a>
                  </div>
                ) : (
                  <span className="empty-text">Numara bırakılmadı</span>
                )}
              </div>
              <div className="lead-card-col">
                <span className="col-label">E-Posta</span>
                <span>{selectedChat.visitorEmail || '-'}</span>
              </div>
              <div className="lead-card-col">
                <span className="col-label">Talep Durumu</span>
                <select 
                  value={selectedChat.status || 'lead'} 
                  onChange={(e) => handleStatusChange(selectedChat.id, e.target.value)}
                  className={`modal-status-select status-${selectedChat.status || 'lead'}`}
                >
                  <option value="lead">🚨 Yeni Talep</option>
                  <option value="active">💬 Aktif Sohbet</option>
                  <option value="called">📞 Arandı / İletişime Geçildi</option>
                  <option value="completed">✅ Tamamlandı</option>
                </select>
              </div>
            </div>

            {/* Konuşma Transkripti */}
            <div className="ai-modal-transcript">
              <h4 className="transcript-title">Tüm Konuşma Geçmişi ({selectedChat.messages?.length || 0} Mesaj)</h4>
              <div className="transcript-messages">
                {(selectedChat.messages || []).map((msg, i) => (
                  <div key={i} className={`transcript-row ${msg.role}`}>
                    <div className="transcript-meta">
                      <strong>{msg.role === 'user' ? (selectedChat.visitorName || 'Ziyaretçi') : 'Alexander Troy AI'}</strong>
                      <span>{msg.timestamp || ''}</span>
                    </div>
                    <div className="transcript-bubble">
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-modal-footer">
              <button 
                type="button" 
                className="btn-modal-delete" 
                onClick={() => handleDeleteChat(selectedChat.id)}
              >
                <Trash2 size={15} />
                <span>Kaydı Sil</span>
              </button>
              <button 
                type="button" 
                className="btn-modal-close" 
                onClick={() => setSelectedChat(null)}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAiSupportTab;
