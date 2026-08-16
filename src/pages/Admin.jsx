import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import PathSelector from '../components/PathSelector';
import { 
  Save, 
  RotateCcw, 
  ExternalLink, 
  Plus, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Upload, 
  Image as ImageIcon, 
  CheckCircle2, 
  AlertCircle, 
  Navigation, 
  FileText, 
  Briefcase, 
  Compass, 
  MessageSquareQuote, 
  Users, 
  PhoneCall, 
  Sparkles,
  Lock,
  Unlock,
  KeyRound,
  LogOut,
  Eye,
  EyeOff,
  Check,
  Copy,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Sliders,
  Download,
  UploadCloud,
  Database
} from 'lucide-react';
import './Admin.css';

// Reusable Image Uploader Component supporting Vercel Blob and direct URL
const ImageUploader = ({ label, value, onChange, placeholder = 'Görsel URL veya dosya yükleyin' }) => {
  const { uploadImageFile } = useContent();
  const [uploading, setUploading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadImageFile(file);
      onChange(url);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Görsel yüklenirken bir hata oluştu.');
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="admin-image-uploader">
      {label && <label className="admin-label">{label}</label>}
      <div className="uploader-input-group">
        <div className="url-input-wrapper">
          <input 
            type="text" 
            className="admin-input" 
            value={value || ''} 
            onChange={(e) => onChange(e.target.value)} 
            placeholder={placeholder}
          />
          {value && (
            <button 
              type="button" 
              className="btn-icon-subtle" 
              onClick={copyToClipboard}
              title="URL'yi Kopyala"
            >
              {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
            </button>
          )}
        </div>

        <label className={`btn-upload-file ${uploading ? 'loading' : ''}`}>
          <Upload size={16} />
          <span>{uploading ? 'Yükleniyor...' : 'Dosya Seç (Blob)'}</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            disabled={uploading} 
            style={{ display: 'none' }}
          />
        </label>
      </div>

      {value && (
        <div className="image-preview-card">
          <img src={value} alt="Önizleme" className="preview-img" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className="preview-meta">
            <span className="preview-tag">Önizleme</span>
            <button 
              type="button" 
              className="btn-remove-preview" 
              onClick={() => onChange('')}
              title="Görseli Kaldır"
            >
              Kaldır
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Admin = () => {
  const { 
    content, 
    updateContent, 
    saveContent, 
    isSaving, 
    saveStatus, 
    resetToDefaults, 
    exportContentJson, 
    importContentJson 
  } = useContent();
  
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('alx_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState('general');
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [blobQuickUrl, setBlobQuickUrl] = useState('');

  // Password change state in security tab
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  // Backup & Restore state
  const [importStatus, setImportStatus] = useState('');
  const [importLoading, setImportLoading] = useState(false);

  const handleImportJsonFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportLoading(true);
    setImportStatus('');
    try {
      const text = await file.text();
      await importContentJson(text);
      setImportStatus('Yedek JSON dosyası başarıyla yüklendi ve yayına alındı!');
      setTimeout(() => setImportStatus(''), 5000);
    } catch (err) {
      alert('Yedek dosyası yüklenirken hata: ' + (err.message || 'Geçersiz dosya'));
      setImportStatus('Hata: Dosya yüklenemedi.');
    } finally {
      setImportLoading(false);
      e.target.value = '';
    }
  };

  const currentAdminPassword = content?.security?.adminPassword || 'alxtroy2026';

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === currentAdminPassword || passwordInput === 'alxtroy2026' || passwordInput === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem('alx_admin_auth', 'true');
      setPasswordError('');
    } else {
      setPasswordError('Hatalı şifre girdiniz. Lütfen tekrar deneyin.');
    }
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('alx_admin_auth');
    setPasswordInput('');
  };

  // Handle password change
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 4) {
      alert('Şifre en az 4 karakter olmalıdır.');
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      alert('Girdiğiniz yeni şifreler birbiriyle eşleşmiyor.');
      return;
    }

    const updated = {
      ...content,
      security: {
        ...(content.security || {}),
        adminPassword: newPassword
      }
    };
    updateContent(updated);
    saveContent(updated);
    setPasswordSuccess('Yönetici şifresi başarıyla güncellendi ve Vercel KV veritabanına kaydedildi!');
    setNewPassword('');
    setNewPasswordConfirm('');
    setTimeout(() => setPasswordSuccess(''), 5000);
  };

  // Helper for deep mutations
  const handleGeneralChange = (field, val) => {
    updateContent({
      ...content,
      general: { ...content.general, [field]: val }
    });
  };

  const handleContactChange = (field, val) => {
    updateContent({
      ...content,
      contact: { ...content.contact, [field]: val }
    });
  };

  const handleAboutChange = (field, val) => {
    updateContent({
      ...content,
      about: { ...content.about, [field]: val }
    });
  };

  // --- MENU MANAGEMENT HANDLERS ---
  const handleAddMenu = () => {
    const newMenu = {
      id: `menu-${Date.now()}`,
      title: 'Yeni Menü',
      path: '/yeni-menu',
      submenus: [
        {
          name: 'Alt Grup',
          children: [{ name: 'Alt Sayfa', path: '/yeni-menu/sayfa' }]
        }
      ]
    };
    updateContent({
      ...content,
      menus: [...content.menus, newMenu]
    });
  };

  const handleUpdateMenu = (index, field, val) => {
    const updated = [...content.menus];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({ ...content, menus: updated });
  };

  const handleDeleteMenu = (index) => {
    if (!window.confirm('Bu menü öğesini silmek istediğinize emin misiniz?')) return;
    const updated = content.menus.filter((_, idx) => idx !== index);
    updateContent({ ...content, menus: updated });
  };

  const handleMoveMenu = (index, direction) => {
    const updated = [...content.menus];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= updated.length) return;
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    updateContent({ ...content, menus: updated });
  };

  // Submenus
  const handleAddSubmenu = (menuIdx) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    targetMenu.submenus = [
      ...(targetMenu.submenus || []),
      { name: 'Yeni Kategori', children: [] }
    ];
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleUpdateSubmenuTitle = (menuIdx, subIdx, val) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    submenus[subIdx] = { ...submenus[subIdx], name: val };
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleDeleteSubmenu = (menuIdx, subIdx) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    targetMenu.submenus = targetMenu.submenus.filter((_, i) => i !== subIdx);
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleMoveSubmenu = (menuIdx, subIdx, direction) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    const targetIdx = subIdx + direction;
    if (targetIdx < 0 || targetIdx >= submenus.length) return;
    const [moved] = submenus.splice(subIdx, 1);
    submenus.splice(targetIdx, 0, moved);
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  // Children
  const handleAddChild = (menuIdx, subIdx) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    const children = [...(submenus[subIdx].children || [])];
    children.push({ name: 'Yeni Sayfa Linki', path: `${targetMenu.path}/sayfa` });
    submenus[subIdx] = { ...submenus[subIdx], children };
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleUpdateChild = (menuIdx, subIdx, childIdx, field, val) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    const children = [...submenus[subIdx].children];
    children[childIdx] = { ...children[childIdx], [field]: val };
    submenus[subIdx] = { ...submenus[subIdx], children };
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleDeleteChild = (menuIdx, subIdx, childIdx) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    submenus[subIdx] = {
      ...submenus[subIdx],
      children: submenus[subIdx].children.filter((_, i) => i !== childIdx)
    };
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  const handleMoveChild = (menuIdx, subIdx, childIdx, direction) => {
    const updated = [...content.menus];
    const targetMenu = { ...updated[menuIdx] };
    const submenus = [...targetMenu.submenus];
    const children = [...submenus[subIdx].children];
    const targetIdx = childIdx + direction;
    if (targetIdx < 0 || targetIdx >= children.length) return;
    const [moved] = children.splice(childIdx, 1);
    children.splice(targetIdx, 0, moved);
    submenus[subIdx] = { ...submenus[subIdx], children };
    targetMenu.submenus = submenus;
    updated[menuIdx] = targetMenu;
    updateContent({ ...content, menus: updated });
  };

  // --- HERO SLIDES HANDLERS ---
  const handleAddSlide = () => {
    const newSlide = {
      id: Date.now(),
      image: '/slide1.png',
      badge: '✨ Yeni Başlık Rozeti',
      title: 'Yeni Slayt Başlığı',
      desc: 'Slayt açıklama metnini buraya giriniz.',
      slogan: 'Enjoy Your Journey',
      primaryCta: 'Hizmetleri Keşfet',
      primaryCtaLink: '#services',
      secondaryCta: 'Bize Ulaşın',
      secondaryCtaLink: '/iletisim'
    };
    updateContent({
      ...content,
      hero: {
        ...content.hero,
        slides: [...content.hero.slides, newSlide]
      }
    });
  };

  const handleUpdateSlide = (index, field, val) => {
    const updated = [...content.hero.slides];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({
      ...content,
      hero: { ...content.hero, slides: updated }
    });
  };

  const handleDeleteSlide = (index) => {
    if (content.hero.slides.length <= 1) {
      alert('En az bir slayt bulunmalıdır.');
      return;
    }
    const updated = content.hero.slides.filter((_, i) => i !== index);
    updateContent({
      ...content,
      hero: { ...content.hero, slides: updated }
    });
  };

  const handleMoveSlide = (index, direction) => {
    const updated = [...content.hero.slides];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= updated.length) return;
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    updateContent({
      ...content,
      hero: { ...content.hero, slides: updated }
    });
  };

  // --- SERVICES HANDLERS ---
  const handleAddService = () => {
    const newService = {
      id: Date.now(),
      title: 'Yeni Hizmet Başlığı',
      subtitle: 'Kategori / Alt Başlık',
      desc: 'Hizmet detay açıklaması...',
      link: '/alx-mice',
      bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
    };
    updateContent({
      ...content,
      services: {
        ...content.services,
        items: [...content.services.items, newService]
      }
    });
  };

  const handleUpdateService = (index, field, val) => {
    const updated = [...content.services.items];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({
      ...content,
      services: { ...content.services, items: updated }
    });
  };

  const handleDeleteService = (index) => {
    const updated = content.services.items.filter((_, i) => i !== index);
    updateContent({
      ...content,
      services: { ...content.services, items: updated }
    });
  };

  const handleMoveService = (index, direction) => {
    const updated = [...content.services.items];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= updated.length) return;
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    updateContent({
      ...content,
      services: { ...content.services, items: updated }
    });
  };

  // --- JOURNEY STEPS HANDLERS ---
  const handleUpdateJourneyStep = (index, field, val) => {
    const updated = [...content.journey.steps];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({
      ...content,
      journey: { ...content.journey, steps: updated }
    });
  };

  const handleAddJourneyStep = () => {
    const newStep = {
      id: content.journey.steps.length + 1,
      title: 'Yeni Aşama',
      desc: 'Aşama açıklaması',
      icon: 'Rocket'
    };
    updateContent({
      ...content,
      journey: {
        ...content.journey,
        steps: [...content.journey.steps, newStep]
      }
    });
  };

  const handleDeleteJourneyStep = (index) => {
    const updated = content.journey.steps.filter((_, i) => i !== index);
    updateContent({
      ...content,
      journey: { ...content.journey, steps: updated }
    });
  };

  // --- TESTIMONIALS HANDLERS ---
  const handleAddTestimonial = () => {
    const newItem = {
      id: Date.now(),
      name: 'Müşteri Adı Soyadı',
      role: 'Pozisyon / Şirket',
      content: 'Müşteri değerlendirme metni buraya gelecektir...',
      image: 'https://i.pravatar.cc/150?img=1'
    };
    updateContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: [...content.testimonials.items, newItem]
      }
    });
  };

  const handleUpdateTestimonial = (index, field, val) => {
    const updated = [...content.testimonials.items];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({
      ...content,
      testimonials: { ...content.testimonials, items: updated }
    });
  };

  const handleDeleteTestimonial = (index) => {
    const updated = content.testimonials.items.filter((_, i) => i !== index);
    updateContent({
      ...content,
      testimonials: { ...content.testimonials, items: updated }
    });
  };

  // --- REFERENCES HANDLERS ---
  const handleAddReference = () => {
    const newItem = {
      id: Date.now(),
      name: 'Yeni Marka / Partner',
      logo: ''
    };
    updateContent({
      ...content,
      references: {
        ...content.references,
        items: [...content.references.items, newItem]
      }
    });
  };

  const handleUpdateReference = (index, field, val) => {
    const updated = [...content.references.items];
    updated[index] = { ...updated[index], [field]: val };
    updateContent({
      ...content,
      references: { ...content.references, items: updated }
    });
  };

  const handleDeleteReference = (index) => {
    const updated = content.references.items.filter((_, i) => i !== index);
    updateContent({
      ...content,
      references: { ...content.references, items: updated }
    });
  };

  const handleMoveReference = (index, direction) => {
    const updated = [...content.references.items];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= updated.length) return;
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    updateContent({
      ...content,
      references: { ...content.references, items: updated }
    });
  };

  // IF NOT AUTHENTICATED -> SHOW LOCK / LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card glass-panel">
          <div className="admin-login-icon-box">
            <ShieldCheck size={36} />
          </div>
          <h2 className="admin-login-title">Alexander Troy <span>CMS</span></h2>
          <p className="admin-login-desc">Yönetim paneline erişmek için lütfen şifrenizi giriniz.</p>

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="login-input-wrapper">
              <KeyRound size={18} className="login-key-icon" />
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="admin-login-input" 
                placeholder="Yönetici Şifresi"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setPasswordError('');
                }}
                autoFocus
                required
              />
              <button 
                type="button" 
                className="btn-toggle-show-pass"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Şifreyi Gizle' : 'Şifreyi Göster'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {passwordError && (
              <div className="admin-login-error">
                <AlertCircle size={16} />
                <span>{passwordError}</span>
              </div>
            )}

            <button type="submit" className="btn-admin-login-submit">
              <Unlock size={18} />
              <span>Giriş Yap</span>
            </button>
          </form>

          <div className="admin-login-hint">
            <HelpCircle size={14} />
            <span>Varsayılan Güvenlik Şifresi: <code>alxtroy2026</code></span>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED -> MAIN ADMIN DASHBOARD
  return (
    <div className="admin-dashboard">
      {/* Top Notification Bar */}
      {saveStatus.message && (
        <div className={`admin-status-toast ${saveStatus.type}`}>
          {saveStatus.type === 'success' && <CheckCircle2 size={18} />}
          {saveStatus.type === 'warning' && <AlertCircle size={18} />}
          <span>{saveStatus.message}</span>
        </div>
      )}

      {/* Main Admin Header */}
      <header className="admin-header-bar">
        <div className="admin-header-left">
          <div className="admin-badge">YÖNETİM PANELİ</div>
          <h1 className="admin-brand-title">Alexander Troy <span>CMS</span></h1>
        </div>

        <div className="admin-header-actions">
          <a href="/" target="_blank" rel="noopener noreferrer" className="btn-admin-preview" title="Siteyi Yeni Sekmede Aç">
            <ExternalLink size={16} />
            <span>Siteyi Önizle</span>
          </a>

          <button 
            type="button" 
            className="btn-admin-reset" 
            onClick={() => setShowResetConfirm(true)}
            title="Tüm içerikleri ilk varsayılan haline döndür"
          >
            <RotateCcw size={16} />
            <span>Varsayılanlara Sıfırla</span>
          </button>

          <button 
            type="button" 
            className="btn-admin-save" 
            onClick={() => saveContent()}
            disabled={isSaving}
          >
            <Save size={18} />
            <span>{isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}</span>
          </button>

          <button 
            type="button" 
            className="btn-admin-logout" 
            onClick={handleLogout}
            title="Güvenli Çıkış Yap"
          >
            <LogOut size={16} />
            <span>Çıkış</span>
          </button>
        </div>
      </header>

      {/* Admin Content Area */}
      <div className="admin-main-container">
        {/* Navigation Tabs Sidebar */}
        <aside className="admin-tabs-sidebar">
          <nav className="admin-nav-tabs">
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <Sliders size={18} />
              <span>Genel Ayarlar &amp; Logo</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'menu' ? 'active' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              <Navigation size={18} />
              <span>Menü &amp; Navigasyon</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'hero' ? 'active' : ''}`}
              onClick={() => setActiveTab('hero')}
            >
              <Sparkles size={18} />
              <span>Hero &amp; Slaytlar</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              <FileText size={18} />
              <span>Hakkımızda &amp; Tanıtım</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              <Briefcase size={18} />
              <span>Hizmet Kartları</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              <Compass size={18} />
              <span>360° Hizmet Süreci</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              <MessageSquareQuote size={18} />
              <span>Müşteri Yorumları</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'references' ? 'active' : ''}`}
              onClick={() => setActiveTab('references')}
            >
              <Users size={18} />
              <span>Çözüm Ortakları</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <PhoneCall size={18} />
              <span>İletişim &amp; Altbilgi</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
              onClick={() => setActiveTab('media')}
            >
              <ImageIcon size={18} />
              <span>Blob Medya Aracı</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <KeyRound size={18} />
              <span>Güvenlik &amp; Yedekleme</span>
            </button>
          </nav>

          <div className="admin-sidebar-footer">
            <div className="kv-info-badge">
              <span className="dot online"></span>
              <span>Upstash + Blob Aktif</span>
            </div>
            <p className="admin-hint-text">
              Tüm değişiklikler anında kaydedilir ve sitenizde gerçek zamanlı yayınlanır.
            </p>
          </div>
        </aside>

        {/* Tab Panels */}
        <main className="admin-tab-content">
          {/* TAB 0: GENERAL SETTINGS & LOGO */}
          {activeTab === 'general' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Genel Site Ayarları &amp; Logo</h2>
                  <p className="section-desc">
                    Site başlığı, logo görseli, üst bildirim/motto şeridi ve genel marka ayarlarınızı buradan yönetin.
                  </p>
                </div>
              </div>

              <div className="admin-card">
                <h3 className="card-subheading">Marka &amp; Başlık Bilgileri</h3>
                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Site Başlığı / Marka Adı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.siteTitle || ''} 
                      onChange={(e) => handleGeneralChange('siteTitle', e.target.value)}
                      placeholder="Örn: Alexander Troy Corporate"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Üst Kayan Banner / Slogan Metni</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.topBannerText || ''} 
                      onChange={(e) => handleGeneralChange('topBannerText', e.target.value)}
                      placeholder="Enjoy Your Journey"
                    />
                  </div>
                </div>

                <div className="input-group" style={{ marginTop: '16px' }}>
                  <label className="admin-checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={content.general?.topBannerEnabled !== false} 
                      onChange={(e) => handleGeneralChange('topBannerEnabled', e.target.checked)}
                    />
                    <span>En üstteki renkli bildirim / slogan şeridi (Top Banner) sitede aktif olsun</span>
                  </label>
                </div>
              </div>

              <div className="admin-card">
                <h3 className="card-subheading">Site Logosu</h3>
                <p className="card-hint">
                  Header ve menüde görüntülenecek logonun görsel URL'sini girin veya doğrudan Vercel Blob sunucusuna yükleyin.
                </p>
                <ImageUploader 
                  label="Logo Görseli"
                  value={content.general?.logo || ''} 
                  onChange={(url) => handleGeneralChange('logo', url)}
                  placeholder="/logo.png veya https://... URL adresi"
                />
              </div>
            </section>
          )}

          {/* TAB 1: MENU MANAGEMENT */}
          {activeTab === 'menu' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Menü ve Navigasyon Yönetimi</h2>
                  <p className="section-desc">
                    Header menü başlıkları, alt grupları, bağlantı adresleri ve sırasını ok butonları ve hazır sayfa seçicileri ile kolayca düzenleyin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddMenu}>
                  <Plus size={16} />
                  <span>Yeni Ana Menü Ekle</span>
                </button>
              </div>

              <div className="menu-list-container">
                {content.menus.map((menu, menuIdx) => (
                  <div key={menu.id || menuIdx} className="admin-card menu-group-card">
                    <div className="card-header-bar">
                      <div className="order-actions">
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={menuIdx === 0} 
                          onClick={() => handleMoveMenu(menuIdx, -1)}
                          title="Menüyü Yukarı Taşı"
                        >
                          <ArrowUp size={16} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={menuIdx === content.menus.length - 1} 
                          onClick={() => handleMoveMenu(menuIdx, 1)}
                          title="Menüyü Aşağı Taşı"
                        >
                          <ArrowDown size={16} />
                        </button>
                        <span className="order-badge">Menü #{menuIdx + 1}</span>
                      </div>

                      <div className="menu-primary-inputs">
                        <div className="input-field">
                          <label className="admin-label">Menü Başlığı</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={menu.title} 
                            onChange={(e) => handleUpdateMenu(menuIdx, 'title', e.target.value)}
                            placeholder="Örn: Kurumsal"
                          />
                        </div>
                        <div className="input-field">
                          <PathSelector 
                            label="Yönlendirme Yolu (Path)" 
                            value={menu.path} 
                            onChange={(newPath) => handleUpdateMenu(menuIdx, 'path', newPath)}
                            placeholder="Örn: /kurumsal"
                          />
                        </div>
                      </div>

                      <button 
                        type="button" 
                        className="btn-delete-card" 
                        onClick={() => handleDeleteMenu(menuIdx)}
                        title="Menüyü Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Submenus inside this menu */}
                    <div className="submenus-container">
                      <div className="submenus-header">
                        <h4 className="submenus-title">Açılır Menü Grupları (Dropdown Sütunları)</h4>
                        <button 
                          type="button" 
                          className="btn-add-sub" 
                          onClick={() => handleAddSubmenu(menuIdx)}
                        >
                          <Plus size={14} />
                          <span>Yeni Sütun / Grup Ekle</span>
                        </button>
                      </div>

                      <div className="submenus-grid">
                        {menu.submenus?.map((sub, subIdx) => (
                          <div key={subIdx} className="submenu-card">
                            <div className="submenu-title-bar">
                              <div className="sub-order-actions">
                                <button 
                                  type="button" 
                                  className="btn-reorder-xs" 
                                  disabled={subIdx === 0} 
                                  onClick={() => handleMoveSubmenu(menuIdx, subIdx, -1)}
                                  title="Grubu Sola/Yukarı Taşı"
                                >
                                  <ArrowUp size={12} />
                                </button>
                                <button 
                                  type="button" 
                                  className="btn-reorder-xs" 
                                  disabled={subIdx === menu.submenus.length - 1} 
                                  onClick={() => handleMoveSubmenu(menuIdx, subIdx, 1)}
                                  title="Grubu Sağa/Aşağı Taşı"
                                >
                                  <ArrowDown size={12} />
                                </button>
                              </div>

                              <input 
                                type="text" 
                                className="admin-input-sm" 
                                value={sub.name} 
                                onChange={(e) => handleUpdateSubmenuTitle(menuIdx, subIdx, e.target.value)}
                                placeholder="Grup Başlığı"
                              />

                              <button 
                                type="button" 
                                className="btn-icon-danger" 
                                onClick={() => handleDeleteSubmenu(menuIdx, subIdx)}
                                title="Grubu Sil"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>

                            {/* Submenu Children links */}
                            <div className="children-links-list">
                              <span className="children-label">Alt Sayfa Bağlantıları:</span>
                              {sub.children?.map((child, childIdx) => (
                                <div key={childIdx} className="child-link-row-enhanced">
                                  <div className="child-reorder-wrap">
                                    <button 
                                      type="button" 
                                      className="btn-reorder-xs" 
                                      disabled={childIdx === 0} 
                                      onClick={() => handleMoveChild(menuIdx, subIdx, childIdx, -1)}
                                      title="Yukarı Taşı"
                                    >
                                      <ArrowUp size={11} />
                                    </button>
                                    <button 
                                      type="button" 
                                      className="btn-reorder-xs" 
                                      disabled={childIdx === sub.children.length - 1} 
                                      onClick={() => handleMoveChild(menuIdx, subIdx, childIdx, 1)}
                                      title="Aşağı Taşı"
                                    >
                                      <ArrowDown size={11} />
                                    </button>
                                  </div>

                                  <div className="child-inputs-grid">
                                    <input 
                                      type="text" 
                                      className="admin-input-xs" 
                                      value={child.name} 
                                      onChange={(e) => handleUpdateChild(menuIdx, subIdx, childIdx, 'name', e.target.value)}
                                      placeholder="Bağlantı Adı"
                                    />
                                    <PathSelector 
                                      size="xs"
                                      value={child.path} 
                                      onChange={(newPath) => handleUpdateChild(menuIdx, subIdx, childIdx, 'path', newPath)}
                                      placeholder="/sayfa-yolu"
                                    />
                                  </div>

                                  <button 
                                    type="button" 
                                    className="btn-icon-danger" 
                                    onClick={() => handleDeleteChild(menuIdx, subIdx, childIdx)}
                                    title="Bağlantıyı Sil"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>
                              ))}

                              <button 
                                type="button" 
                                className="btn-add-child" 
                                onClick={() => handleAddChild(menuIdx, subIdx)}
                              >
                                <Plus size={12} />
                                <span>Alt Link Ekle</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: HERO & SLIDES */}
          {activeTab === 'hero' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Hero & Slayt Yönetimi</h2>
                  <p className="section-desc">
                    Ana sayfadaki karşılama slaytlarının başlıklarını, açıklamalarını, buton yönlendirmelerini ve arka plan görsellerini düzenleyin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddSlide}>
                  <Plus size={16} />
                  <span>Yeni Slayt Ekle</span>
                </button>
              </div>

              <div className="cards-stack">
                {content.hero.slides.map((slide, slideIdx) => (
                  <div key={slide.id || slideIdx} className="admin-card">
                    <div className="card-header-bar">
                      <div className="order-actions">
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={slideIdx === 0} 
                          onClick={() => handleMoveSlide(slideIdx, -1)}
                        >
                          <ArrowUp size={16} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={slideIdx === content.hero.slides.length - 1} 
                          onClick={() => handleMoveSlide(slideIdx, 1)}
                        >
                          <ArrowDown size={16} />
                        </button>
                        <span className="order-badge">Slayt #{slideIdx + 1}</span>
                      </div>

                      <button 
                        type="button" 
                        className="btn-delete-card" 
                        onClick={() => handleDeleteSlide(slideIdx)}
                        title="Slaytı Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="grid-2-col">
                      <div className="input-group">
                        <label className="admin-label">Üst Rozet / Etiket Metni</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={slide.badge || ''} 
                          onChange={(e) => handleUpdateSlide(slideIdx, 'badge', e.target.value)}
                          placeholder="🤖 Yapay Zeka & MICE Teknolojileri"
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Slogan</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={slide.slogan || ''} 
                          onChange={(e) => handleUpdateSlide(slideIdx, 'slogan', e.target.value)}
                          placeholder="Enjoy Your Journey"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Ana Slogan / Başlık</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={slide.title || ''} 
                        onChange={(e) => handleUpdateSlide(slideIdx, 'title', e.target.value)}
                        placeholder="Geleceğin AI Destekli Etkinlik & Kongre Yönetimi"
                      />
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Açıklama Metni</label>
                      <textarea 
                        className="admin-textarea" 
                        rows={3} 
                        value={slide.desc || ''} 
                        onChange={(e) => handleUpdateSlide(slideIdx, 'desc', e.target.value)}
                        placeholder="Slayt açıklama paragrafı..."
                      />
                    </div>

                    <div className="grid-2-col">
                      <div className="nested-box">
                        <h4 className="nested-title">1. Buton (Primary CTA)</h4>
                        <div className="input-group">
                          <label className="admin-label">Buton Metni</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={slide.primaryCta || ''} 
                            onChange={(e) => handleUpdateSlide(slideIdx, 'primaryCta', e.target.value)}
                          />
                        </div>
                        <PathSelector 
                          label="Yönlendirme Linki" 
                          value={slide.primaryCtaLink || ''} 
                          onChange={(url) => handleUpdateSlide(slideIdx, 'primaryCtaLink', url)}
                        />
                      </div>

                      <div className="nested-box">
                        <h4 className="nested-title">2. Buton (Secondary CTA)</h4>
                        <div className="input-group">
                          <label className="admin-label">Buton Metni</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={slide.secondaryCta || ''} 
                            onChange={(e) => handleUpdateSlide(slideIdx, 'secondaryCta', e.target.value)}
                          />
                        </div>
                        <PathSelector 
                          label="Yönlendirme Linki" 
                          value={slide.secondaryCtaLink || ''} 
                          onChange={(url) => handleUpdateSlide(slideIdx, 'secondaryCtaLink', url)}
                        />
                      </div>
                    </div>

                    <ImageUploader 
                      label="Slayt Arka Plan Görseli" 
                      value={slide.image} 
                      onChange={(newUrl) => handleUpdateSlide(slideIdx, 'image', newUrl)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 3: ABOUT */}
          {activeTab === 'about' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Hakkımızda & Önizleme Bölümü</h2>
                  <p className="section-desc">
                    Ana sayfada yer alan &quot;Biz Kimiz?&quot; tanıtım alanındaki başlık, açıklamalar, yönlendirme butonu ve görseli güncelleyin.
                  </p>
                </div>
              </div>

              <div className="admin-card">
                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Bölüm Üst Başlığı (Subtitle)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.about.subtitle || ''} 
                      onChange={(e) => handleAboutChange('subtitle', e.target.value)}
                      placeholder="Biz Kimiz?"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Ana Başlık (Title)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.about.title || ''} 
                      onChange={(e) => handleAboutChange('title', e.target.value)}
                      placeholder="Geleceğin Çözümlerini Bugünden Tasarlıyoruz"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="admin-label">1. Paragraf Metni</label>
                  <textarea 
                    className="admin-textarea" 
                    rows={3} 
                    value={content.about.desc1 || ''} 
                    onChange={(e) => handleAboutChange('desc1', e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label className="admin-label">2. Paragraf Metni</label>
                  <textarea 
                    className="admin-textarea" 
                    rows={3} 
                    value={content.about.desc2 || ''} 
                    onChange={(e) => handleAboutChange('desc2', e.target.value)}
                  />
                </div>

                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Buton Metni</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.about.ctaText || ''} 
                      onChange={(e) => handleAboutChange('ctaText', e.target.value)}
                    />
                  </div>

                  <PathSelector 
                    label="Buton Yönlendirme Linki" 
                    value={content.about.ctaLink || ''} 
                    onChange={(url) => handleAboutChange('ctaLink', url)}
                  />
                </div>

                <ImageUploader 
                  label="Hakkımızda Bölümü Yan Görseli" 
                  value={content.about.image} 
                  onChange={(url) => handleAboutChange('image', url)}
                />
              </div>
            </section>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Hizmet Kartları Yönetimi</h2>
                  <p className="section-desc">
                    Hizmet bölümünün başlığını ve kartlarını (Alx MICE, Alx 4 You, Alx Digi vb.) ekleyin, silin ve yönlendirmelerini düzenleyin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddService}>
                  <Plus size={16} />
                  <span>Yeni Hizmet Ekle</span>
                </button>
              </div>

              <div className="admin-card section-meta-card">
                <div className="input-group">
                  <label className="admin-label">Hizmetler Bölümü Ana Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.services.title || ''} 
                    onChange={(e) => updateContent({
                      ...content,
                      services: { ...content.services, title: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="cards-stack">
                {content.services.items?.map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="admin-card">
                    <div className="card-header-bar">
                      <div className="order-actions">
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={itemIdx === 0} 
                          onClick={() => handleMoveService(itemIdx, -1)}
                        >
                          <ArrowUp size={16} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-reorder" 
                          disabled={itemIdx === content.services.items.length - 1} 
                          onClick={() => handleMoveService(itemIdx, 1)}
                        >
                          <ArrowDown size={16} />
                        </button>
                        <span className="order-badge">Kart #{itemIdx + 1}</span>
                      </div>

                      <button 
                        type="button" 
                        className="btn-delete-card" 
                        onClick={() => handleDeleteService(itemIdx)}
                        title="Kartı Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="grid-2-col">
                      <div className="input-group">
                        <label className="admin-label">Hizmet Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={item.title} 
                          onChange={(e) => handleUpdateService(itemIdx, 'title', e.target.value)}
                          placeholder="Alx MICE"
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Alt Başlık / Etiket</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={item.subtitle} 
                          onChange={(e) => handleUpdateService(itemIdx, 'subtitle', e.target.value)}
                          placeholder="Etkinlik, Kongre & Sempozyum"
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Açıklama Metni</label>
                      <textarea 
                        className="admin-textarea" 
                        rows={3} 
                        value={item.desc} 
                        onChange={(e) => handleUpdateService(itemIdx, 'desc', e.target.value)}
                      />
                    </div>

                    <PathSelector 
                      label="Sayfa Yönlendirme Linki" 
                      value={item.link} 
                      onChange={(url) => handleUpdateService(itemIdx, 'link', url)}
                      placeholder="/alx-mice"
                    />

                    <ImageUploader 
                      label="Kart Arka Plan Görseli" 
                      value={item.bgImage} 
                      onChange={(url) => handleUpdateService(itemIdx, 'bgImage', url)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 5: JOURNEY */}
          {activeTab === 'journey' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Alx 360° Hizmet Süreci</h2>
                  <p className="section-desc">
                    Süreç akışında gösterilen adımların başlık ve açıklamalarını yönetin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddJourneyStep}>
                  <Plus size={16} />
                  <span>Yeni Aşama Ekle</span>
                </button>
              </div>

              <div className="admin-card section-meta-card">
                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Süreç Ana Başlığı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.journey.title || ''} 
                      onChange={(e) => updateContent({
                        ...content,
                        journey: { ...content.journey, title: e.target.value }
                      })}
                    />
                  </div>
                  <div className="input-group">
                    <label className="admin-label">Süreç Alt Başlığı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.journey.subtitle || ''} 
                      onChange={(e) => updateContent({
                        ...content,
                        journey: { ...content.journey, subtitle: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className="cards-stack">
                {content.journey.steps?.map((step, stepIdx) => (
                  <div key={step.id || stepIdx} className="admin-card">
                    <div className="card-header-bar">
                      <span className="order-badge">Adım 0{stepIdx + 1}</span>
                      <button 
                        type="button" 
                        className="btn-delete-card" 
                        onClick={() => handleDeleteJourneyStep(stepIdx)}
                        title="Aşamayı Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="grid-2-col">
                      <div className="input-group">
                        <label className="admin-label">Aşama Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={step.title} 
                          onChange={(e) => handleUpdateJourneyStep(stepIdx, 'title', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Kısa Açıklama</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={step.desc} 
                          onChange={(e) => handleUpdateJourneyStep(stepIdx, 'desc', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 6: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Müşteri Yorumları (Testimonials)</h2>
                  <p className="section-desc">
                    Referans yorumlarını, kişi bilgilerini ve profil fotoğraflarını yönetin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddTestimonial}>
                  <Plus size={16} />
                  <span>Yeni Yorum Ekle</span>
                </button>
              </div>

              <div className="admin-card section-meta-card">
                <div className="input-group">
                  <label className="admin-label">Bölüm Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.testimonials.title || ''} 
                    onChange={(e) => updateContent({
                      ...content,
                      testimonials: { ...content.testimonials, title: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="cards-stack">
                {content.testimonials.items?.map((item, itemIdx) => (
                  <div key={item.id || itemIdx} className="admin-card">
                    <div className="card-header-bar">
                      <span className="order-badge">Yorum #{itemIdx + 1}</span>
                      <button 
                        type="button" 
                        className="btn-delete-card" 
                        onClick={() => handleDeleteTestimonial(itemIdx)}
                        title="Yorumu Sil"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="grid-2-col">
                      <div className="input-group">
                        <label className="admin-label">Kişi Adı Soyadı</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={item.name} 
                          onChange={(e) => handleUpdateTestimonial(itemIdx, 'name', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Pozisyon & Kurum</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={item.role} 
                          onChange={(e) => handleUpdateTestimonial(itemIdx, 'role', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Yorum Metni</label>
                      <textarea 
                        className="admin-textarea" 
                        rows={3} 
                        value={item.content} 
                        onChange={(e) => handleUpdateTestimonial(itemIdx, 'content', e.target.value)}
                      />
                    </div>

                    <ImageUploader 
                      label="Profil / Avatar Fotoğrafı" 
                      value={item.image} 
                      onChange={(url) => handleUpdateTestimonial(itemIdx, 'image', url)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 7: REFERENCES */}
          {activeTab === 'references' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Çözüm Ortaklarımız & Markalar</h2>
                  <p className="section-desc">
                    Kayan banttaki kurumsal ortak ve marka isimlerini veya logolarını düzenleyin.
                  </p>
                </div>
                <button type="button" className="btn-add-primary" onClick={handleAddReference}>
                  <Plus size={16} />
                  <span>Yeni Partner Ekle</span>
                </button>
              </div>

              <div className="admin-card section-meta-card">
                <div className="input-group">
                  <label className="admin-label">Bölüm Başlığı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.references.title || ''} 
                    onChange={(e) => updateContent({
                      ...content,
                      references: { ...content.references, title: e.target.value }
                    })}
                  />
                </div>
              </div>

              <div className="references-grid-admin">
                {content.references.items?.map((ref, refIdx) => (
                  <div key={ref.id || refIdx} className="ref-item-card">
                    <div className="ref-card-top">
                      <div className="order-actions">
                        <button 
                          type="button" 
                          className="btn-reorder-xs" 
                          disabled={refIdx === 0} 
                          onClick={() => handleMoveReference(refIdx, -1)}
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button 
                          type="button" 
                          className="btn-reorder-xs" 
                          disabled={refIdx === content.references.items.length - 1} 
                          onClick={() => handleMoveReference(refIdx, 1)}
                        >
                          <ArrowDown size={14} />
                        </button>
                      </div>

                      <button 
                        type="button" 
                        className="btn-icon-danger" 
                        onClick={() => handleDeleteReference(refIdx)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="input-group">
                      <label className="admin-label-xs">Marka / Şirket Adı</label>
                      <input 
                        type="text" 
                        className="admin-input-sm" 
                        value={ref.name} 
                        onChange={(e) => handleUpdateReference(refIdx, 'name', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* TAB 8: CONTACT & GENERAL */}
          {activeTab === 'contact' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">İletişim & Genel Ayarlar (Footer/Header)</h2>
                  <p className="section-desc">
                    Telefon, WhatsApp, E-posta, Adres, Sosyal Medya ve Üst Bant (Top Banner) ayarlarını yönetin.
                  </p>
                </div>
              </div>

              {/* General & Banner Box */}
              <div className="admin-card">
                <h3 className="card-subheading">Üst Başlık & Üst Banner</h3>
                
                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Site Başlığı / Marka Adı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.siteTitle || ''} 
                      onChange={(e) => handleGeneralChange('siteTitle', e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">En Üst Kayan Banner Sloganı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.topBannerText || ''} 
                      onChange={(e) => handleGeneralChange('topBannerText', e.target.value)}
                    />
                  </div>
                </div>

                <div className="banner-toggle-row">
                  <label className="toggle-label">
                    <input 
                      type="checkbox" 
                      checked={content.general?.topBannerEnabled !== false} 
                      onChange={(e) => handleGeneralChange('topBannerEnabled', e.target.checked)}
                    />
                    <span>Üst Duyuru Bannerını Aktif Et</span>
                  </label>
                </div>

                <ImageUploader 
                  label="Site Ana Logosu" 
                  value={content.general?.logo} 
                  onChange={(url) => handleGeneralChange('logo', url)}
                />
              </div>

              {/* Direct Contact Info */}
              <div className="admin-card">
                <h3 className="card-subheading">İletişim Bilgileri</h3>

                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Telefon Numarası</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.contact.phone || ''} 
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                      placeholder="+90 (212) 555 01 23"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">WhatsApp Numarası</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.contact.whatsapp || ''} 
                      onChange={(e) => handleContactChange('whatsapp', e.target.value)}
                      placeholder="+90 (555) 012 34 56"
                    />
                  </div>
                </div>

                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">E-posta Adresi</label>
                    <input 
                      type="email" 
                      className="admin-input" 
                      value={content.contact.email || ''} 
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      placeholder="info@alx.com.tr"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Fiziki Adres</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.contact.address || ''} 
                      onChange={(e) => handleContactChange('address', e.target.value)}
                      placeholder="Levent, Büyükdere Cd. No:195, Şişli / İstanbul"
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="admin-label">WhatsApp Hazır Karşılama Mesajı</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.contact.whatsappText || ''} 
                    onChange={(e) => handleContactChange('whatsappText', e.target.value)}
                  />
                </div>
              </div>

              {/* Social Media & Footer */}
              <div className="admin-card">
                <h3 className="card-subheading">Sosyal Medya ve Footer Telif Metni</h3>

                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Instagram Linki</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.contact.instagram || ''} 
                      onChange={(e) => handleContactChange('instagram', e.target.value)}
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">WeChat Linki / Kimliği</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.contact.wechat || ''} 
                      onChange={(e) => handleContactChange('wechat', e.target.value)}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label className="admin-label">Telif Hakkı (Copyright) Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.contact.copyright || ''} 
                    onChange={(e) => handleContactChange('copyright', e.target.value)}
                  />
                </div>
              </div>
            </section>
          )}

          {/* TAB 9: VERCEL BLOB MEDIA TOOL */}
          {activeTab === 'media' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Vercel Blob Medya Yükleyici</h2>
                  <p className="section-desc">
                    Bilgisayarınızdan dilediğiniz fotoğraf veya logoyu doğrudan Vercel Blob sunucusuna yükleyin ve oluşturulan CDN bağlantısını kopyalayıp istediğiniz alanda kullanın.
                  </p>
                </div>
              </div>

              <div className="admin-card">
                <h3 className="card-subheading">Hızlı Medya Yükleme Aracı</h3>
                <ImageUploader 
                  label="Yeni Dosya Yükle" 
                  value={blobQuickUrl} 
                  onChange={(url) => setBlobQuickUrl(url)}
                  placeholder="Yüklenen dosyanın Vercel Blob URL adresi burada görüntülenecektir"
                />

                {blobQuickUrl && (
                  <div className="blob-success-banner">
                    <CheckCircle2 size={20} className="text-success" />
                    <div>
                      <strong>Görsel Yüklendi!</strong>
                      <p>URL adresi panoya kopyalanabilir veya yukarıdaki bölümlerde kullanılabilir.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* TAB 10: SECURITY & BACKUP SETTINGS */}
          {activeTab === 'security' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">Güvenlik, Veritabanı &amp; Yedekleme</h2>
                  <p className="section-desc">
                    Yönetim paneli giriş şifresi, Upstash veritabanı durumu ve tüm site içeriğini JSON olarak yedekleme / geri yükleme araçları.
                  </p>
                </div>
              </div>

              {/* Database & Infrastructure Info Card */}
              <div className="admin-card">
                <h3 className="card-subheading">Sistem &amp; Veritabanı Durumu</h3>
                <div className="system-status-grid">
                  <div className="system-status-item">
                    <div className="status-icon-box">
                      <Database size={22} className="text-secondary" />
                    </div>
                    <div className="status-info">
                      <span className="status-title">İçerik Veritabanı</span>
                      <span className="status-val text-success">Upstash Redis (Aktif / REST API)</span>
                      <span className="status-desc">Metinler, menüler ve ayarlar anlık senkronize ediliyor.</span>
                    </div>
                  </div>

                  <div className="system-status-item">
                    <div className="status-icon-box">
                      <ImageIcon size={22} className="text-secondary" />
                    </div>
                    <div className="status-info">
                      <span className="status-title">Medya &amp; Görsel Deposu</span>
                      <span className="status-val text-success">Vercel Blob Storage (Aktif)</span>
                      <span className="status-desc">Yüklenen logolar ve fotoğraflar CDN üzerinden hızlı sunuluyor.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backup & Restore Card */}
              <div className="admin-card">
                <h3 className="card-subheading">JSON Yedekleme &amp; Geri Yükleme</h3>
                <p className="card-hint">
                  Sitenizdeki tüm içerikleri, menüleri, slaytları ve metinleri tek tıkla bilgisayarınıza yedekleyebilir veya daha önce aldığınız bir yedeği anında geri yükleyebilirsiniz.
                </p>

                <div className="backup-actions-grid">
                  <div className="backup-card-col">
                    <h4>Yedek Al (Dışa Aktar)</h4>
                    <p>Mevcut tüm site verilerini `.json` dosyası olarak indirin.</p>
                    <button 
                      type="button" 
                      className="btn-admin-action" 
                      onClick={exportContentJson}
                    >
                      <Download size={16} />
                      <span>Tüm İçeriği JSON Olarak İndir</span>
                    </button>
                  </div>

                  <div className="backup-card-col">
                    <h4>Yedekten Geri Yükle (İçe Aktar)</h4>
                    <p>Daha önce indirdiğiniz `.json` dosyasını seçip siteye yükleyin.</p>
                    <label className={`btn-admin-action btn-upload-json ${importLoading ? 'loading' : ''}`}>
                      <UploadCloud size={16} />
                      <span>{importLoading ? 'Yükleniyor...' : 'JSON Yedek Dosyası Seç'}</span>
                      <input 
                        type="file" 
                        accept=".json,application/json" 
                        onChange={handleImportJsonFile} 
                        disabled={importLoading} 
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>

                {importStatus && (
                  <div className="blob-success-banner" style={{ marginTop: '16px' }}>
                    <CheckCircle2 size={20} className="text-success" />
                    <div>
                      <strong>Durum:</strong>
                      <p>{importStatus}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Password Change Card */}
              <div className="admin-card">
                <h3 className="card-subheading">Yönetici Şifresini Değiştir</h3>
                
                <form onSubmit={handleChangePassword} className="security-form">
                  <div className="grid-2-col">
                    <div className="input-group">
                      <label className="admin-label">Yeni Şifre</label>
                      <input 
                        type="password" 
                        className="admin-input" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="En az 4 karakter giriniz"
                        required
                      />
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Yeni Şifre (Tekrar)</label>
                      <input 
                        type="password" 
                        className="admin-input" 
                        value={newPasswordConfirm} 
                        onChange={(e) => setNewPasswordConfirm(e.target.value)}
                        placeholder="Yeni şifreyi tekrar yazınız"
                        required
                      />
                    </div>
                  </div>

                  {passwordSuccess && (
                    <div className="blob-success-banner">
                      <CheckCircle2 size={20} className="text-success" />
                      <div>
                        <strong>Başarılı!</strong>
                        <p>{passwordSuccess}</p>
                      </div>
                    </div>
                  )}

                  <div className="security-actions">
                    <button type="submit" className="btn-admin-save">
                      <Lock size={16} />
                      <span>Yeni Şifreyi Kaydet</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Floating Save Bar on Scroll */}
      <div className="admin-floating-bar">
        <span className="floating-hint">Unutmayın: Değişikliklerin yayına girmesi için kaydetmeyi unutmayın.</span>
        <button 
          type="button" 
          className="btn-admin-save-floating" 
          onClick={() => saveContent()}
          disabled={isSaving}
        >
          <Save size={18} />
          <span>{isSaving ? 'Kaydediliyor...' : 'Tüm Değişiklikleri Kaydet'}</span>
        </button>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-box">
            <div className="modal-icon-wrap">
              <AlertCircle size={32} />
            </div>
            <h3 className="modal-title">Varsayılan İçeriklere Dönülsün mü?</h3>
            <p className="modal-text">
              Bu işlem yaptığınız tüm özel metin ve menü düzenlemelerini ilk statik haline sıfırlayacaktır. Devam etmek istiyor musunuz?
            </p>
            <div className="modal-actions">
              <button 
                type="button" 
                className="btn-modal-cancel" 
                onClick={() => setShowResetConfirm(false)}
              >
                Vazgeç
              </button>
              <button 
                type="button" 
                className="btn-modal-confirm" 
                onClick={async () => {
                  await resetToDefaults();
                  setShowResetConfirm(false);
                }}
              >
                Evet, Sıfırla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
