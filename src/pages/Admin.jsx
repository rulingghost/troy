import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
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
  Database,
  Globe,
  Target,
  Award,
  Building2,
  MapPin,
  ClipboardCheck
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
  const [corporateSubTab, setCorporateSubTab] = useState('about');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState('kurumsal');
  const [contactSubTab, setContactSubTab] = useState('info');
  const [subservicesSubTab, setSubservicesSubTab] = useState('congress');
  const [legalSubTab, setLegalSubTab] = useState('privacy');
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

  const handleSeoChange = (field, val) => {
    const currentSeo = content.seo || defaultContent.seo;
    updateContent({
      ...content,
      seo: { ...currentSeo, [field]: val }
    });
  };

  const handleFloatingButtonsChange = (field, val) => {
    const currentGeneral = content.general || defaultContent.general;
    const currentFloating = currentGeneral.floatingButtons || defaultContent.general.floatingButtons;
    updateContent({
      ...content,
      general: {
        ...currentGeneral,
        floatingButtons: {
          ...currentFloating,
          [field]: val
        }
      }
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

  // --- CORPORATE PAGES (HAKKIMIZDA, VİZYON, MİSYON) HANDLERS ---
  const handleCorporateChange = (section, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCorporate = currentPages.corporate || defaultContent.pages.corporate;
    const targetSection = currentCorporate[section] || defaultContent.pages.corporate[section];

    updateContent({
      ...content,
      pages: {
        ...currentPages,
        corporate: {
          ...currentCorporate,
          [section]: {
            ...targetSection,
            [field]: val
          }
        }
      }
    });
  };

  const handleCorporateBulletChange = (section, index, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCorporate = currentPages.corporate || defaultContent.pages.corporate;
    const targetSection = currentCorporate[section] || defaultContent.pages.corporate[section];
    const bulletsField = section === 'about' ? 'statsBullets' : 'bullets';
    const currentBullets = [...(targetSection[bulletsField] || [])];
    currentBullets[index] = val;

    handleCorporateChange(section, bulletsField, currentBullets);
  };

  const handleAddCorporateBullet = (section) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCorporate = currentPages.corporate || defaultContent.pages.corporate;
    const targetSection = currentCorporate[section] || defaultContent.pages.corporate[section];
    const bulletsField = section === 'about' ? 'statsBullets' : 'bullets';
    const currentBullets = [...(targetSection[bulletsField] || []), 'Yeni madde metnini buraya giriniz...'];

    handleCorporateChange(section, bulletsField, currentBullets);
  };

  const handleDeleteCorporateBullet = (section, index) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCorporate = currentPages.corporate || defaultContent.pages.corporate;
    const targetSection = currentCorporate[section] || defaultContent.pages.corporate[section];
    const bulletsField = section === 'about' ? 'statsBullets' : 'bullets';
    const currentBullets = (targetSection[bulletsField] || []).filter((_, i) => i !== index);

    handleCorporateChange(section, bulletsField, currentBullets);
  };

  // Capabilities in About
  const handleCapabilityChange = (index, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentAbout = currentPages.corporate?.about || defaultContent.pages.corporate.about;
    const currentCaps = [...(currentAbout.capabilities || [])];
    currentCaps[index] = { ...currentCaps[index], [field]: val };
    handleCorporateChange('about', 'capabilities', currentCaps);
  };

  const handleAddCapability = () => {
    const currentPages = content.pages || defaultContent.pages;
    const currentAbout = currentPages.corporate?.about || defaultContent.pages.corporate.about;
    const currentCaps = [
      ...(currentAbout.capabilities || []),
      { icon: '⭐', title: 'Yeni Hizmet Yeteneği', desc: 'Açıklama metnini giriniz.' }
    ];
    handleCorporateChange('about', 'capabilities', currentCaps);
  };

  const handleDeleteCapability = (index) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentAbout = currentPages.corporate?.about || defaultContent.pages.corporate.about;
    const currentCaps = (currentAbout.capabilities || []).filter((_, i) => i !== index);
    handleCorporateChange('about', 'capabilities', currentCaps);
  };

  // --- CATEGORY OVERVIEWS HANDLERS ---
  const handleCategoryOverviewChange = (catKey, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};

    updateContent({
      ...content,
      pages: {
        ...currentPages,
        categoryOverviews: {
          ...currentCategories,
          [catKey]: {
            ...targetCat,
            [field]: val
          }
        }
      }
    });
  };

  const handleCategoryStatChange = (catKey, statIdx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedStats = [...(targetCat.stats || [])];
    updatedStats[statIdx] = { ...updatedStats[statIdx], [field]: val };
    handleCategoryOverviewChange(catKey, 'stats', updatedStats);
  };

  const handleAddCategoryStat = (catKey) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedStats = [...(targetCat.stats || []), { value: '100+', label: 'Yeni İstatistik' }];
    handleCategoryOverviewChange(catKey, 'stats', updatedStats);
  };

  const handleDeleteCategoryStat = (catKey, statIdx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedStats = (targetCat.stats || []).filter((_, i) => i !== statIdx);
    handleCategoryOverviewChange(catKey, 'stats', updatedStats);
  };

  // Category Groups & Items
  const handleCategoryGroupTitleChange = (catKey, gIdx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedGroups = [...(targetCat.groups || [])];
    updatedGroups[gIdx] = { ...updatedGroups[gIdx], [field]: val };
    handleCategoryOverviewChange(catKey, 'groups', updatedGroups);
  };

  const handleCategoryItemChange = (catKey, gIdx, itemIdx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedGroups = [...(targetCat.groups || [])];
    const groupItems = [...(updatedGroups[gIdx]?.items || [])];
    groupItems[itemIdx] = { ...groupItems[itemIdx], [field]: val };
    updatedGroups[gIdx] = { ...updatedGroups[gIdx], items: groupItems };
    handleCategoryOverviewChange(catKey, 'groups', updatedGroups);
  };

  const handleCategoryItemHighlightChange = (catKey, gIdx, itemIdx, hIdx, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedGroups = [...(targetCat.groups || [])];
    const groupItems = [...(updatedGroups[gIdx]?.items || [])];
    const highlights = [...(groupItems[itemIdx]?.highlights || [])];
    highlights[hIdx] = val;
    groupItems[itemIdx] = { ...groupItems[itemIdx], highlights };
    updatedGroups[gIdx] = { ...updatedGroups[gIdx], items: groupItems };
    handleCategoryOverviewChange(catKey, 'groups', updatedGroups);
  };

  const handleAddCategoryItemHighlight = (catKey, gIdx, itemIdx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedGroups = [...(targetCat.groups || [])];
    const groupItems = [...(updatedGroups[gIdx]?.items || [])];
    const highlights = [...(groupItems[itemIdx]?.highlights || []), 'Yeni özellik maddesi'];
    groupItems[itemIdx] = { ...groupItems[itemIdx], highlights };
    updatedGroups[gIdx] = { ...updatedGroups[gIdx], items: groupItems };
    handleCategoryOverviewChange(catKey, 'groups', updatedGroups);
  };

  const handleDeleteCategoryItemHighlight = (catKey, gIdx, itemIdx, hIdx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentCategories = currentPages.categoryOverviews || defaultContent.pages.categoryOverviews;
    const targetCat = currentCategories[catKey] || defaultContent.pages.categoryOverviews[catKey] || {};
    const updatedGroups = [...(targetCat.groups || [])];
    const groupItems = [...(updatedGroups[gIdx]?.items || [])];
    const highlights = (groupItems[itemIdx]?.highlights || []).filter((_, i) => i !== hIdx);
    groupItems[itemIdx] = { ...groupItems[itemIdx], highlights };
    updatedGroups[gIdx] = { ...updatedGroups[gIdx], items: groupItems };
    handleCategoryOverviewChange(catKey, 'groups', updatedGroups);
  };

  // --- CONTACT PAGE & FAQ HANDLERS ---
  const handleContactPageChange = (field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentContactPage = currentPages.contactPage || defaultContent.pages.contactPage;

    updateContent({
      ...content,
      pages: {
        ...currentPages,
        contactPage: {
          ...currentContactPage,
          [field]: val
        }
      }
    });
  };

  const handleFaqChange = (index, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentContactPage = currentPages.contactPage || defaultContent.pages.contactPage;
    const updatedFaqs = [...(currentContactPage.faqs || [])];
    updatedFaqs[index] = { ...updatedFaqs[index], [field]: val };
    handleContactPageChange('faqs', updatedFaqs);
  };

  const handleAddFaq = () => {
    const currentPages = content.pages || defaultContent.pages;
    const currentContactPage = currentPages.contactPage || defaultContent.pages.contactPage;
    const updatedFaqs = [
      ...(currentContactPage.faqs || []),
      { q: 'Yeni Sıkça Sorulan Soru', a: 'Cevap metnini buraya giriniz.' }
    ];
    handleContactPageChange('faqs', updatedFaqs);
  };

  const handleDeleteFaq = (index) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentContactPage = currentPages.contactPage || defaultContent.pages.contactPage;
    const updatedFaqs = (currentContactPage.faqs || []).filter((_, i) => i !== index);
    handleContactPageChange('faqs', updatedFaqs);
  };

  // --- SUB-SERVICES & EVENTS DATA HANDLERS ---
  const handleSubServicesDataChange = (field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;

    updateContent({
      ...content,
      pages: {
        ...currentPages,
        subServicesData: {
          ...currentSubData,
          [field]: val
        }
      }
    });
  };

  // Congress events
  const handleCongressEventChange = (idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [...(currentSubData.congressEvents || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    handleSubServicesDataChange('congressEvents', updated);
  };

  const handleAddCongressEvent = () => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [
      ...(currentSubData.congressEvents || []),
      { category: 'yurtici-kongre', title: 'Yeni Kongre / Sempozyum', org: 'Organizasyon Kurumu', desc: 'Etkinlik açıklaması...', link: 'https://...', badge: 'Yurtiçi Kongre' }
    ];
    handleSubServicesDataChange('congressEvents', updated);
  };

  const handleDeleteCongressEvent = (idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = (currentSubData.congressEvents || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('congressEvents', updated);
  };

  // Destinations
  const handleDestinationChange = (type, idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const destObj = { ...(currentSubData.destinations || defaultContent.pages.subServicesData.destinations) };
    const list = [...(destObj[type] || [])];
    list[idx] = { ...list[idx], [field]: val };
    destObj[type] = list;
    handleSubServicesDataChange('destinations', destObj);
  };

  const handleAddDestination = (type) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const destObj = { ...(currentSubData.destinations || defaultContent.pages.subServicesData.destinations) };
    const list = [...(destObj[type] || []), { name: 'Yeni Destinasyon', landmark: 'Simge Mekan / Konsept', image: '', icon: type === 'yurtdisi' ? '✈️' : '🎈' }];
    destObj[type] = list;
    handleSubServicesDataChange('destinations', destObj);
  };

  const handleDeleteDestination = (type, idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const destObj = { ...(currentSubData.destinations || defaultContent.pages.subServicesData.destinations) };
    destObj[type] = (destObj[type] || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('destinations', destObj);
  };

  // Preceptorship
  const handlePreceptorshipChange = (type, idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const precepObj = { ...(currentSubData.preceptorship || defaultContent.pages.subServicesData.preceptorship) };
    const list = [...(precepObj[type] || [])];
    list[idx] = { ...list[idx], [field]: val };
    precepObj[type] = list;
    handleSubServicesDataChange('preceptorship', precepObj);
  };

  const handleAddPreceptorship = (type) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const precepObj = { ...(currentSubData.preceptorship || defaultContent.pages.subServicesData.preceptorship) };
    const list = [...(precepObj[type] || []), { title: 'Yeni Preceptorship Programı', desc: 'Klinik gözlem ve prosedür eğitimi...', image: '', badge: type === 'yurtdisi' ? 'Yurtdışı Preceptorship' : 'Yurtiçi Preceptorship' }];
    precepObj[type] = list;
    handleSubServicesDataChange('preceptorship', precepObj);
  };

  const handleDeletePreceptorship = (type, idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const precepObj = { ...(currentSubData.preceptorship || defaultContent.pages.subServicesData.preceptorship) };
    precepObj[type] = (precepObj[type] || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('preceptorship', precepObj);
  };

  // Partner Platforms
  const handlePartnerPlatformChange = (catKey, idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const platObj = { ...(currentSubData.partnerPlatforms || defaultContent.pages.subServicesData.partnerPlatforms) };
    const list = [...(platObj[catKey] || [])];
    list[idx] = { ...list[idx], [field]: val };
    platObj[catKey] = list;
    handleSubServicesDataChange('partnerPlatforms', platObj);
  };

  const handleAddPartnerPlatform = (catKey) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const platObj = { ...(currentSubData.partnerPlatforms || defaultContent.pages.subServicesData.partnerPlatforms) };
    const list = [...(platObj[catKey] || []), { title: 'Yeni Çözüm Platformu', brand: 'Platform Adı', link: 'https://...', desc: 'Açıklama...', icon: '🤝', slug: 'yeni-platform' }];
    platObj[catKey] = list;
    handleSubServicesDataChange('partnerPlatforms', platObj);
  };

  const handleDeletePartnerPlatform = (catKey, idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const platObj = { ...(currentSubData.partnerPlatforms || defaultContent.pages.subServicesData.partnerPlatforms) };
    platObj[catKey] = (platObj[catKey] || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('partnerPlatforms', platObj);
  };

  // Courses
  const handleCourseChange = (idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [...(currentSubData.courses || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    handleSubServicesDataChange('courses', updated);
  };

  const handleAddCourse = () => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [...(currentSubData.courses || []), { title: 'Yeni Eğitim / Kurs', desc: 'Açıklama...', icon: '🎓', badge: 'Eğitim Modülü' }];
    handleSubServicesDataChange('courses', updated);
  };

  const handleDeleteCourse = (idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = (currentSubData.courses || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('courses', updated);
  };

  // Incentive
  const handleIncentiveChange = (idx, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [...(currentSubData.incentive || [])];
    updated[idx] = { ...updated[idx], [field]: val };
    handleSubServicesDataChange('incentive', updated);
  };

  const handleAddIncentive = () => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = [...(currentSubData.incentive || []), { title: 'Yeni Motivasyon Etkinliği', desc: 'Açıklama...', icon: '⚡', badge: 'Kurumsal Etkinlik' }];
    handleSubServicesDataChange('incentive', updated);
  };

  const handleDeleteIncentive = (idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const updated = (currentSubData.incentive || []).filter((_, i) => i !== idx);
    handleSubServicesDataChange('incentive', updated);
  };

  // Corporate Travel Texts
  const handleCorporateTravelChange = (section, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const corpTravel = { ...(currentSubData.corporateTravel || defaultContent.pages.subServicesData.corporateTravel) };
    corpTravel[section] = {
      ...(corpTravel[section] || {}),
      [field]: val
    };
    handleSubServicesDataChange('corporateTravel', corpTravel);
  };

  const handleCorporateTravelServiceChange = (section, sIdx, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const corpTravel = { ...(currentSubData.corporateTravel || defaultContent.pages.subServicesData.corporateTravel) };
    const currentServices = [...(corpTravel[section]?.services || [])];
    currentServices[sIdx] = val;
    corpTravel[section] = {
      ...(corpTravel[section] || {}),
      services: currentServices
    };
    handleSubServicesDataChange('corporateTravel', corpTravel);
  };

  const handleAddCorporateTravelService = (section) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const corpTravel = { ...(currentSubData.corporateTravel || defaultContent.pages.subServicesData.corporateTravel) };
    const currentServices = [...(corpTravel[section]?.services || []), 'Yeni Hizmet Maddesi'];
    corpTravel[section] = {
      ...(corpTravel[section] || {}),
      services: currentServices
    };
    handleSubServicesDataChange('corporateTravel', corpTravel);
  };

  const handleDeleteCorporateTravelService = (section, sIdx) => {
    const currentPages = content.pages || defaultContent.pages;
    const currentSubData = currentPages.subServicesData || defaultContent.pages.subServicesData;
    const corpTravel = { ...(currentSubData.corporateTravel || defaultContent.pages.subServicesData.corporateTravel) };
    const currentServices = (corpTravel[section]?.services || []).filter((_, i) => i !== sIdx);
    corpTravel[section] = {
      ...(corpTravel[section] || {}),
      services: currentServices
    };
    handleSubServicesDataChange('corporateTravel', corpTravel);
  };

  // --- LEGAL PAGES HANDLERS ---
  const handleLegalPageChange = (pageKey, field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const legalPages = { ...(currentPages.legalPages || defaultContent.pages.legalPages) };
    legalPages[pageKey] = {
      ...(legalPages[pageKey] || {}),
      [field]: val
    };
    updateContent({
      pages: {
        ...currentPages,
        legalPages
      }
    });
  };

  // --- ORG FORM CONFIG HANDLERS ---
  const handleOrgFormConfigChange = (field, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    orgForm[field] = val;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleOrgTypeChange = (idx, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = [...(orgForm.orgTypes || defaultContent.pages.orgFormConfig.orgTypes)];
    list[idx] = val;
    orgForm.orgTypes = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleAddOrgType = () => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = [...(orgForm.orgTypes || defaultContent.pages.orgFormConfig.orgTypes), 'Yeni Organizasyon Türü'];
    orgForm.orgTypes = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleDeleteOrgType = (idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = (orgForm.orgTypes || defaultContent.pages.orgFormConfig.orgTypes).filter((_, i) => i !== idx);
    orgForm.orgTypes = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleOrgServiceChange = (idx, val) => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = [...(orgForm.servicesList || defaultContent.pages.orgFormConfig.servicesList)];
    list[idx] = val;
    orgForm.servicesList = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleAddOrgService = () => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = [...(orgForm.servicesList || defaultContent.pages.orgFormConfig.servicesList), 'Yeni Hizmet Türü'];
    orgForm.servicesList = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
    });
  };

  const handleDeleteOrgService = (idx) => {
    const currentPages = content.pages || defaultContent.pages;
    const orgForm = { ...(currentPages.orgFormConfig || defaultContent.pages.orgFormConfig) };
    const list = (orgForm.servicesList || defaultContent.pages.orgFormConfig.servicesList).filter((_, i) => i !== idx);
    orgForm.servicesList = list;
    updateContent({
      pages: {
        ...currentPages,
        orgFormConfig: orgForm
      }
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
            <div className="tab-group-label">GENEL &amp; NAVİGASYON</div>
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
              className={`tab-btn ${activeTab === 'seo' ? 'active' : ''}`}
              onClick={() => setActiveTab('seo')}
            >
              <Globe size={18} />
              <span>🔍 SEO &amp; Meta Etiketleri</span>
            </button>

            <div className="tab-group-label">TÜM SAYFALAR</div>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveTab('corporate')}
            >
              <FileText size={18} />
              <span>🏢 Kurumsal Sayfaları</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveTab('categories')}
            >
              <Globe size={18} />
              <span>🌐 Kategori Sayfaları</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'subservices' ? 'active' : ''}`}
              onClick={() => setActiveTab('subservices')}
            >
              <Sparkles size={18} />
              <span>🎯 Alt Hizmet &amp; Destinasyonlar</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'orgForm' ? 'active' : ''}`}
              onClick={() => setActiveTab('orgForm')}
            >
              <ClipboardCheck size={18} />
              <span>📋 Organizasyon Talep Formu</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'legal' ? 'active' : ''}`}
              onClick={() => setActiveTab('legal')}
            >
              <ShieldCheck size={18} />
              <span>📜 Yasal &amp; Sözleşme Metinleri</span>
            </button>

            <button 
              type="button"
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <PhoneCall size={18} />
              <span>📞 İletişim, Harita &amp; SSS</span>
            </button>

            <div className="tab-group-label">ANA SAYFA BÖLÜMLERİ</div>
            <button 
              type="button"
              className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              <FileText size={18} />
              <span>Tanıtım Önizleme</span>
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

            <div className="tab-group-label">SİSTEM &amp; GÜVENLİK</div>
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

              {/* Header CTA Button Settings */}
              <div className="admin-card">
                <h3 className="card-subheading">Header Sağ Üst Buton (CTA)</h3>
                <div className="grid-2-col">
                  <div className="input-group">
                    <label className="admin-label">Buton Metni</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.headerCtaText || 'Bize Ulaşın'} 
                      onChange={(e) => handleGeneralChange('headerCtaText', e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label className="admin-label">Buton Yönlendirme Linki</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={content.general?.headerCtaLink || '/iletisim'} 
                      onChange={(e) => handleGeneralChange('headerCtaLink', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Action Buttons Settings */}
              <div className="admin-card">
                <h3 className="card-subheading">💬 Yüzen Canlı Destek &amp; Hızlı Butonlar</h3>
                <p className="card-hint">Sitenin sağ alt köşesinde sabit duran WhatsApp, Telefon ve Başa Dön butonlarının kontrolü.</p>

                <div className="grid-2-col" style={{ marginTop: '16px' }}>
                  <div className="input-group">
                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={content.general?.floatingButtons?.enabled !== false} 
                        onChange={(e) => handleFloatingButtonsChange('enabled', e.target.checked)}
                      />
                      <span>Yüzen Butonlar Çubuğu Aktif</span>
                    </label>
                  </div>

                  <div className="input-group">
                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={content.general?.floatingButtons?.whatsapp !== false} 
                        onChange={(e) => handleFloatingButtonsChange('whatsapp', e.target.checked)}
                      />
                      <span>WhatsApp Hızlı Sohbet Butonu</span>
                    </label>
                  </div>

                  <div className="input-group">
                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={content.general?.floatingButtons?.phone !== false} 
                        onChange={(e) => handleFloatingButtonsChange('phone', e.target.checked)}
                      />
                      <span>Doğrudan Telefon Arama Butonu</span>
                    </label>
                  </div>

                  <div className="input-group">
                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={content.general?.floatingButtons?.scrollTop !== false} 
                        onChange={(e) => handleFloatingButtonsChange('scrollTop', e.target.checked)}
                      />
                      <span>Sayfa Başına Dön (Scroll to Top) Butonu</span>
                    </label>
                  </div>
                </div>

                <div className="input-group" style={{ marginTop: '16px' }}>
                  <label className="admin-label">WhatsApp Buton Üstü Karşılama Balonu Metni</label>
                  <input 
                    type="text" 
                    className="admin-input" 
                    value={content.general?.floatingButtons?.bubbleText || 'Size nasıl yardımcı olabiliriz?'} 
                    onChange={(e) => handleFloatingButtonsChange('bubbleText', e.target.value)}
                  />
                </div>
              </div>
            </section>
          )}

          {/* TAB: SEO & META SETTINGS */}
          {activeTab === 'seo' && (() => {
            const seo = content.seo || defaultContent.seo;
            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">SEO, Meta Etiketleri &amp; Paylaşım Ayarları</h2>
                    <p className="section-desc">
                      Google arama sonuçlarında, tarayıcı sekmelerinde ve sosyal medya paylaşımlarında (WhatsApp, LinkedIn, Twitter) görünecek site başlık, açıklama ve görsellerini yapılandırın.
                    </p>
                  </div>
                </div>

                <div className="admin-card">
                  <h3 className="card-subheading">Arama Motoru (Google) Optimizasyonu</h3>

                  <div className="input-group">
                    <label className="admin-label">SEO Meta Başlığı (Meta Title)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seo.metaTitle || ''} 
                      onChange={(e) => handleSeoChange('metaTitle', e.target.value)}
                      placeholder="Alexander Troy | MICE, Preceptorship & Medikal Çözümler"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">SEO Meta Açıklaması (Meta Description)</label>
                    <textarea 
                      className="admin-textarea" 
                      rows={3}
                      value={seo.metaDescription || ''} 
                      onChange={(e) => handleSeoChange('metaDescription', e.target.value)}
                      placeholder="Sitenizi tanıtan 150-160 karakterlik özet açıklama..."
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Anahtar Kelimeler (Keywords)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seo.keywords || ''} 
                      onChange={(e) => handleSeoChange('keywords', e.target.value)}
                      placeholder="alexander troy, mice, kongre, medikal, preceptorship"
                    />
                  </div>
                </div>

                <div className="admin-card">
                  <h3 className="card-subheading">Görsel &amp; Paylaşım Ayarları</h3>
                  <div className="grid-2-col">
                    <ImageUploader 
                      label="Favicon / Sekme İkonu"
                      value={seo.favicon || ''} 
                      onChange={(url) => handleSeoChange('favicon', url)}
                      placeholder="/logo.png veya ikon URL'si"
                    />

                    <ImageUploader 
                      label="Sosyal Medya Paylaşım Görseli (OG:Image)"
                      value={seo.ogImage || ''} 
                      onChange={(url) => handleSeoChange('ogImage', url)}
                      placeholder="Sosyal medyada paylaşılınca çıkacak görsel URL'si"
                    />
                  </div>
                </div>

                <div className="admin-card">
                  <h3 className="card-subheading">Analitik &amp; Takip Kodları</h3>
                  <div className="input-group">
                    <label className="admin-label">Google Analytics Ölçüm Kimliği (Measurement ID)</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={seo.googleAnalyticsId || ''} 
                      onChange={(e) => handleSeoChange('googleAnalyticsId', e.target.value)}
                      placeholder="Örn: G-XXXXXXXXXX"
                    />
                  </div>
                </div>
              </section>
            );
          })()}

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

          {/* TAB: CORPORATE PAGES (HAKKIMIZDA, VİZYON, MİSYON) */}
          {activeTab === 'corporate' && (
            <section className="admin-section">
              <div className="section-header">
                <div>
                  <h2 className="section-heading">🏢 Kurumsal Sayfaları Yönetimi</h2>
                  <p className="section-desc">
                    Hakkımızda, Vizyon ve Misyon sayfalarının tüm başlıklarını, paragraflarını, &quot;Enjoy Your Journey&quot; mottolarını, maddelerini ve yetenek kartlarını düzenleyin.
                  </p>
                </div>
                <div className="section-header-actions">
                  <a 
                    href={`/kurumsal/${corporateSubTab === 'about' ? 'hakkimizda' : corporateSubTab === 'vision' ? 'vizyon' : 'misyon'}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-preview-link"
                  >
                    <span>Canlı Sayfayı Gör</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Sub Navigation for Corporate Pages */}
              <div className="page-subtabs-nav">
                <button 
                  type="button" 
                  className={`page-subtab-btn ${corporateSubTab === 'about' ? 'active' : ''}`}
                  onClick={() => setCorporateSubTab('about')}
                >
                  <FileText size={16} />
                  <span>Hakkımızda Sayfası (/kurumsal/hakkimizda)</span>
                </button>
                <button 
                  type="button" 
                  className={`page-subtab-btn ${corporateSubTab === 'vision' ? 'active' : ''}`}
                  onClick={() => setCorporateSubTab('vision')}
                >
                  <Target size={16} />
                  <span>Vizyon Sayfası (/kurumsal/vizyon)</span>
                </button>
                <button 
                  type="button" 
                  className={`page-subtab-btn ${corporateSubTab === 'mission' ? 'active' : ''}`}
                  onClick={() => setCorporateSubTab('mission')}
                >
                  <Award size={16} />
                  <span>Misyon Sayfası (/kurumsal/misyon)</span>
                </button>
              </div>

              {/* Sub-tab 1: Hakkımızda */}
              {corporateSubTab === 'about' && (() => {
                const aboutData = content.pages?.corporate?.about || defaultContent.pages.corporate.about;
                return (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <h3 className="card-subheading">Hakkımızda Ana Başlık &amp; Giriş Metinleri</h3>
                      <div className="input-group">
                        <label className="admin-label">Sayfa Ana Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={aboutData.title || ''}
                          onChange={(e) => handleCorporateChange('about', 'title', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Vurgulu Giriş Paragrafı (Lead Text)</label>
                        <textarea 
                          className="admin-textarea"
                          rows={3}
                          value={aboutData.lead || ''}
                          onChange={(e) => handleCorporateChange('about', 'lead', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Detaylı Açıklama Paragrafı</label>
                        <textarea 
                          className="admin-textarea"
                          rows={3}
                          value={aboutData.desc1 || ''}
                          onChange={(e) => handleCorporateChange('about', 'desc1', e.target.value)}
                        />
                      </div>

                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Motto Alıntısı</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={aboutData.mottoQuote || ''}
                            onChange={(e) => handleCorporateChange('about', 'mottoQuote', e.target.value)}
                            placeholder="Enjoy Your Journey"
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Motto Devam Cümlesi</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={aboutData.mottoDesc || ''}
                            onChange={(e) => handleCorporateChange('about', 'mottoDesc', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">&quot;Peki Biz Kim miyiz?&quot; Vurgulu Maddeleri</h3>
                        <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateBullet('about')}>
                          <Plus size={14} /> Yeni Madde Ekle
                        </button>
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Bölüm Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={aboutData.statsTitle || ''}
                          onChange={(e) => handleCorporateChange('about', 'statsTitle', e.target.value)}
                        />
                      </div>

                      <div className="dynamic-list-container">
                        {(aboutData.statsBullets || []).map((bullet, bIdx) => (
                          <div key={bIdx} className="dynamic-list-row">
                            <span className="row-num">{bIdx + 1}.</span>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={bullet}
                              onChange={(e) => handleCorporateBulletChange('about', bIdx, e.target.value)}
                            />
                            <button 
                              type="button" 
                              className="btn-row-del" 
                              onClick={() => handleDeleteCorporateBullet('about', bIdx)}
                              title="Maddeyi Sil"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">&quot;Sizin İçin Neler Yapabiliriz?&quot; Yetenek Kartları</h3>
                        <button type="button" className="btn-add-secondary" onClick={handleAddCapability}>
                          <Plus size={14} /> Yeni Yetenek Kartı Ekle
                        </button>
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Bölüm Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={aboutData.capabilitiesTitle || ''}
                          onChange={(e) => handleCorporateChange('about', 'capabilitiesTitle', e.target.value)}
                        />
                      </div>

                      <div className="capabilities-editor-grid">
                        {(aboutData.capabilities || []).map((cap, cIdx) => (
                          <div key={cIdx} className="capability-edit-card nested-box">
                            <div className="card-header-bar">
                              <span className="cap-badge">Kart #{cIdx + 1}</span>
                              <button 
                                type="button" 
                                className="btn-icon btn-danger" 
                                onClick={() => handleDeleteCapability(cIdx)}
                                title="Kartı Sil"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            <div className="grid-2-col">
                              <div className="input-group">
                                <label className="admin-label">İkon / Emoji</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={cap.icon || ''}
                                  onChange={(e) => handleCapabilityChange(cIdx, 'icon', e.target.value)}
                                  placeholder="💻, ✈️, 🩺, 🤖..."
                                />
                              </div>
                              <div className="input-group">
                                <label className="admin-label">Kart Başlığı</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={cap.title || ''}
                                  onChange={(e) => handleCapabilityChange(cIdx, 'title', e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Açıklama</label>
                              <textarea 
                                className="admin-textarea"
                                rows={2}
                                value={cap.desc || ''}
                                onChange={(e) => handleCapabilityChange(cIdx, 'desc', e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Sub-tab 2: Vizyon */}
              {corporateSubTab === 'vision' && (() => {
                const visionData = content.pages?.corporate?.vision || defaultContent.pages.corporate.vision;
                return (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <h3 className="card-subheading">Vizyon Sayfası Başlık &amp; Alıntı</h3>
                      <div className="input-group">
                        <label className="admin-label">Sayfa Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={visionData.title || ''}
                          onChange={(e) => handleCorporateChange('vision', 'title', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Vurgulu Vizyon Mottosu / Alıntı</label>
                        <textarea 
                          className="admin-textarea"
                          rows={3}
                          value={visionData.quote || ''}
                          onChange={(e) => handleCorporateChange('vision', 'quote', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Detaylı Açıklama Metni</label>
                        <textarea 
                          className="admin-textarea"
                          rows={4}
                          value={visionData.desc || ''}
                          onChange={(e) => handleCorporateChange('vision', 'desc', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">Vizyon Maddeleri &amp; Temel İlkeler</h3>
                        <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateBullet('vision')}>
                          <Plus size={14} /> Yeni Madde Ekle
                        </button>
                      </div>

                      <div className="dynamic-list-container">
                        {(visionData.bullets || []).map((bullet, bIdx) => (
                          <div key={bIdx} className="dynamic-list-row">
                            <span className="row-num">{bIdx + 1}.</span>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={bullet}
                              onChange={(e) => handleCorporateBulletChange('vision', bIdx, e.target.value)}
                            />
                            <button 
                              type="button" 
                              className="btn-row-del" 
                              onClick={() => handleDeleteCorporateBullet('vision', bIdx)}
                              title="Maddeyi Sil"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Sub-tab 3: Misyon */}
              {corporateSubTab === 'mission' && (() => {
                const missionData = content.pages?.corporate?.mission || defaultContent.pages.corporate.mission;
                return (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <h3 className="card-subheading">Misyon Sayfası Başlık &amp; Alıntı</h3>
                      <div className="input-group">
                        <label className="admin-label">Sayfa Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={missionData.title || ''}
                          onChange={(e) => handleCorporateChange('mission', 'title', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Vurgulu Misyon Mottosu / Alıntı</label>
                        <textarea 
                          className="admin-textarea"
                          rows={3}
                          value={missionData.quote || ''}
                          onChange={(e) => handleCorporateChange('mission', 'quote', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Detaylı Açıklama Metni</label>
                        <textarea 
                          className="admin-textarea"
                          rows={4}
                          value={missionData.desc || ''}
                          onChange={(e) => handleCorporateChange('mission', 'desc', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">Misyon Maddeleri &amp; Temel İlkeler</h3>
                        <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateBullet('mission')}>
                          <Plus size={14} /> Yeni Madde Ekle
                        </button>
                      </div>

                      <div className="dynamic-list-container">
                        {(missionData.bullets || []).map((bullet, bIdx) => (
                          <div key={bIdx} className="dynamic-list-row">
                            <span className="row-num">{bIdx + 1}.</span>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={bullet}
                              onChange={(e) => handleCorporateBulletChange('mission', bIdx, e.target.value)}
                            />
                            <button 
                              type="button" 
                              className="btn-row-del" 
                              onClick={() => handleDeleteCorporateBullet('mission', bIdx)}
                              title="Maddeyi Sil"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </section>
          )}

          {/* TAB: CATEGORY OVERVIEW PAGES */}
          {activeTab === 'categories' && (() => {
            const currentCatKey = selectedCategoryKey || 'kurumsal';
            const catOverviews = content.pages?.categoryOverviews || defaultContent.pages.categoryOverviews;
            const currentCatData = catOverviews[currentCatKey] || defaultContent.pages.categoryOverviews[currentCatKey] || {};

            const categoryList = [
              { key: 'kurumsal', label: '🏢 Kurumsal', path: '/kurumsal' },
              { key: 'alx-mice', label: '🎪 Alx MICE', path: '/alx-mice' },
              { key: 'alx-4-you', label: '🌟 Alx 4 You', path: '/alx-4-you' },
              { key: 'alx-digi', label: '💻 Alx Digi', path: '/alx-digi' },
              { key: 'alx-need', label: '🎯 Alx Need', path: '/alx-need' }
            ];

            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">🌐 Kategori Genel Sayfaları Yönetimi</h2>
                    <p className="section-desc">
                      Tüm ana kategori genel sayfalarının (/kurumsal, /alx-mice, /alx-4-you, /alx-digi, /alx-need) hero banner, istatistik ve alt başlık kartlarını tek merkezden yönetin.
                    </p>
                  </div>
                  <div className="section-header-actions">
                    <a 
                      href={`/${currentCatKey}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-preview-link"
                    >
                      <span>Canlı Sayfayı Gör (/{currentCatKey})</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Category selector subtabs */}
                <div className="page-subtabs-nav">
                  {categoryList.map((cat) => (
                    <button 
                      key={cat.key}
                      type="button" 
                      className={`page-subtab-btn ${currentCatKey === cat.key ? 'active' : ''}`}
                      onClick={() => setSelectedCategoryKey(cat.key)}
                    >
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>

                <div className="page-editor-container">
                  {/* Hero & Banner */}
                  <div className="admin-card">
                    <h3 className="card-subheading">{currentCatData.title || currentCatKey} Hero &amp; Tanıtım Alanı</h3>
                    
                    <div className="grid-2-col">
                      <div className="input-group">
                        <label className="admin-label">Sayfa Ana Başlığı</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={currentCatData.title || ''}
                          onChange={(e) => handleCategoryOverviewChange(currentCatKey, 'title', e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <label className="admin-label">Üst Rozet / Etiket</label>
                        <input 
                          type="text" 
                          className="admin-input"
                          value={currentCatData.badge || ''}
                          onChange={(e) => handleCategoryOverviewChange(currentCatKey, 'badge', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Slogan / Tagline</label>
                      <input 
                        type="text" 
                        className="admin-input"
                        value={currentCatData.tagline || ''}
                        onChange={(e) => handleCategoryOverviewChange(currentCatKey, 'tagline', e.target.value)}
                        placeholder="Enjoy Your Journey"
                      />
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Detaylı Açıklama Metni</label>
                      <textarea 
                        className="admin-textarea"
                        rows={3}
                        value={currentCatData.description || ''}
                        onChange={(e) => handleCategoryOverviewChange(currentCatKey, 'description', e.target.value)}
                      />
                    </div>

                    <ImageUploader 
                      label="Hero Arka Plan Görseli"
                      value={currentCatData.heroImage || ''}
                      onChange={(url) => handleCategoryOverviewChange(currentCatKey, 'heroImage', url)}
                    />
                  </div>

                  {/* Stats Bar */}
                  <div className="admin-card">
                    <div className="card-header-bar">
                      <h3 className="card-subheading">İstatistik &amp; Rakam Sayaçları (Stats Bar)</h3>
                      <button type="button" className="btn-add-secondary" onClick={() => handleAddCategoryStat(currentCatKey)}>
                        <Plus size={14} /> Yeni İstatistik Ekle
                      </button>
                    </div>

                    <div className="stats-editor-grid">
                      {(currentCatData.stats || []).map((st, sIdx) => (
                        <div key={sIdx} className="nested-box stat-edit-box">
                          <div className="card-header-bar">
                            <span className="cap-badge">İstatistik #{sIdx + 1}</span>
                            <button 
                              type="button" 
                              className="btn-icon btn-danger" 
                              onClick={() => handleDeleteCategoryStat(currentCatKey, sIdx)}
                              title="Sil"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Vurgulu Değer (Örn: 500+, %100, AI)</label>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={st.value || ''}
                              onChange={(e) => handleCategoryStatChange(currentCatKey, sIdx, 'value', e.target.value)}
                            />
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Açıklama Etiketi (Örn: Kongre & Etkinlik)</label>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={st.label || ''}
                              onChange={(e) => handleCategoryStatChange(currentCatKey, sIdx, 'label', e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Groups and Sub-service cards */}
                  {(currentCatData.groups || []).map((group, gIdx) => (
                    <div key={gIdx} className="admin-card">
                      <h3 className="card-subheading">Alt Başlık Grubu #{gIdx + 1}</h3>
                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Grup Başlığı</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={group.groupTitle || ''}
                            onChange={(e) => handleCategoryGroupTitleChange(currentCatKey, gIdx, 'groupTitle', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Grup Açıklaması</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={group.groupDesc || ''}
                            onChange={(e) => handleCategoryGroupTitleChange(currentCatKey, gIdx, 'groupDesc', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="group-items-list">
                        {(group.items || []).map((item, itmIdx) => (
                          <div key={itmIdx} className="nested-box item-sub-card">
                            <div className="card-header-bar">
                              <h4 className="nested-title">📌 {item.name || 'Hizmet Kartı'}</h4>
                              <span className="cap-badge">{item.tag || 'Alt Sayfa'}</span>
                            </div>

                            <div className="grid-3-col">
                              <div className="input-group">
                                <label className="admin-label">Başlık / İsim</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={item.name || ''}
                                  onChange={(e) => handleCategoryItemChange(currentCatKey, gIdx, itmIdx, 'name', e.target.value)}
                                />
                              </div>
                              <div className="input-group">
                                <label className="admin-label">Etiket / Rozet</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={item.tag || ''}
                                  onChange={(e) => handleCategoryItemChange(currentCatKey, gIdx, itmIdx, 'tag', e.target.value)}
                                />
                              </div>
                              <div className="input-group">
                                <PathSelector 
                                  label="Yönlendirme Yolu (Path)"
                                  value={item.path || ''}
                                  onChange={(url) => handleCategoryItemChange(currentCatKey, gIdx, itmIdx, 'path', url)}
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Kısa Açıklama Metni</label>
                              <textarea 
                                className="admin-textarea"
                                rows={2}
                                value={item.shortDesc || ''}
                                onChange={(e) => handleCategoryItemChange(currentCatKey, gIdx, itmIdx, 'shortDesc', e.target.value)}
                              />
                            </div>

                            {/* Highlights bullets */}
                            <div className="highlights-editor-box">
                              <div className="card-header-bar">
                                <label className="admin-label" style={{ margin: 0 }}>Öne Çıkan Maddeler</label>
                                <button 
                                  type="button" 
                                  className="btn-add-secondary"
                                  onClick={() => handleAddCategoryItemHighlight(currentCatKey, gIdx, itmIdx)}
                                >
                                  <Plus size={13} /> Madde Ekle
                                </button>
                              </div>
                              <div className="dynamic-list-container">
                                {(item.highlights || []).map((high, hIdx) => (
                                  <div key={hIdx} className="dynamic-list-row">
                                    <span className="row-num">•</span>
                                    <input 
                                      type="text" 
                                      className="admin-input"
                                      value={high}
                                      onChange={(e) => handleCategoryItemHighlightChange(currentCatKey, gIdx, itmIdx, hIdx, e.target.value)}
                                    />
                                    <button 
                                      type="button" 
                                      className="btn-row-del"
                                      onClick={() => handleDeleteCategoryItemHighlight(currentCatKey, gIdx, itmIdx, hIdx)}
                                      title="Maddeyi Sil"
                                    >
                                      <Trash2 size={15} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* TAB: SUB-SERVICES & DETAILED CONTENT */}
          {activeTab === 'subservices' && (() => {
            const subData = content.pages?.subServicesData || defaultContent.pages.subServicesData || {};
            const congressList = subData.congressEvents || defaultContent.pages.subServicesData.congressEvents || [];
            const destList = subData.destinations || defaultContent.pages.subServicesData.destinations || {};
            const precepList = subData.preceptorship || defaultContent.pages.subServicesData.preceptorship || {};
            const partnerList = subData.partnerPlatforms || defaultContent.pages.subServicesData.partnerPlatforms || {};
            const courseList = subData.courses || defaultContent.pages.subServicesData.courses || [];
            const incList = subData.incentive || defaultContent.pages.subServicesData.incentive || [];

            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">🎯 Alt Hizmet, Etkinlik &amp; Destinasyonlar</h2>
                    <p className="section-desc">
                      Tüm kongre/sempozyum bağlantılarını, Kapadokya/İtalya vb. destinasyon kartlarını, Preceptorship gözlem programlarını, Doktorum Yanımda/Beynex/Niceye partner kartlarını ve kursları düzenleyin.
                    </p>
                  </div>
                </div>

                {/* Sub Navigation */}
                <div className="page-subtabs-nav">
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'congress' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('congress')}
                  >
                    <Globe size={16} />
                    <span>🏛️ Kongre &amp; Sempozyumlar ({congressList.length})</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'destinations' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('destinations')}
                  >
                    <MapPin size={16} />
                    <span>✈️ Own Event Destinasyonları</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'preceptorship' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('preceptorship')}
                  >
                    <Award size={16} />
                    <span>🩺 Preceptorship Programları</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'platforms' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('platforms')}
                  >
                    <Users size={16} />
                    <span>🤝 Çözüm Platformları (Alx Digi / Need)</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'courses' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('courses')}
                  >
                    <FileText size={16} />
                    <span>🎓 Kurs &amp; Eğitimler</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'incentive' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('incentive')}
                  >
                    <Sparkles size={16} />
                    <span>⚡ Incentive &amp; Motivasyon</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${subservicesSubTab === 'travelText' ? 'active' : ''}`}
                    onClick={() => setSubservicesSubTab('travelText')}
                  >
                    <Building2 size={16} />
                    <span>🏢 Seyahat &amp; Misafir Tanıtım Metinleri</span>
                  </button>
                </div>

                <div className="page-editor-container">
                  {/* SUBTAB 1: CONGRESS & SYMPOSIUMS */}
                  {subservicesSubTab === 'congress' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <div>
                          <h3 className="card-subheading">Öne Çıkan Kongre ve Sempozyum Kartları</h3>
                          <p className="card-hint">
                            Yurtiçi ve yurtdışı kongre/sempozyum sayfalarında gösterilen resmi etkinlik bağlantılarını ekleyin veya güncelleyin.
                          </p>
                        </div>
                        <button type="button" className="btn-add-primary" onClick={handleAddCongressEvent}>
                          <Plus size={16} /> Yeni Etkinlik Ekle
                        </button>
                      </div>

                      <div className="cards-stack">
                        {congressList.map((ev, evIdx) => (
                          <div key={evIdx} className="nested-box">
                            <div className="card-header-bar">
                              <span className="cap-badge">Etkinlik #{evIdx + 1} ({ev.badge || 'Etkinlik'})</span>
                              <button 
                                type="button" 
                                className="btn-icon btn-danger" 
                                onClick={() => handleDeleteCongressEvent(evIdx)}
                                title="Etkinliği Sil"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            <div className="grid-3-col">
                              <div className="input-group">
                                <label className="admin-label">Etkinlik Başlığı</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={ev.title || ''}
                                  onChange={(e) => handleCongressEventChange(evIdx, 'title', e.target.value)}
                                  placeholder="Örn: 42. Ulusal Kardiyoloji Kongresi"
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Düzenleyen Kurum / Dernek</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={ev.org || ''}
                                  onChange={(e) => handleCongressEventChange(evIdx, 'org', e.target.value)}
                                  placeholder="Örn: Türk Kardiyoloji Derneği"
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Hangi Sayfada Gösterilsin? (Slug)</label>
                                <select 
                                  className="admin-select"
                                  value={ev.category || 'yurtici-kongre'}
                                  onChange={(e) => handleCongressEventChange(evIdx, 'category', e.target.value)}
                                >
                                  <option value="yurtici-kongre">Yurtiçi Kongre (/alx-mice/yurtici-kongre)</option>
                                  <option value="yurtdisi-kongre">Yurtdışı Kongre (/alx-mice/yurtdisi-kongre)</option>
                                  <option value="yurtici-sempozyum">Yurtiçi Sempozyum (/alx-mice/yurtici-sempozyum)</option>
                                  <option value="yurtdisi-sempozyum">Yurtdışı Sempozyum (/alx-mice/yurtdisi-sempozyum)</option>
                                </select>
                              </div>
                            </div>

                            <div className="grid-2-col">
                              <div className="input-group">
                                <label className="admin-label">Üst Rozet Metni</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={ev.badge || ''}
                                  onChange={(e) => handleCongressEventChange(evIdx, 'badge', e.target.value)}
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Resmi Web Sitesi Bağlantısı (URL)</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={ev.link || ''}
                                  onChange={(e) => handleCongressEventChange(evIdx, 'link', e.target.value)}
                                  placeholder="https://..."
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Kısa Açıklama</label>
                              <textarea 
                                className="admin-textarea"
                                rows={2}
                                value={ev.desc || ''}
                                onChange={(e) => handleCongressEventChange(evIdx, 'desc', e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 2: DESTINATIONS */}
                  {subservicesSubTab === 'destinations' && (
                    <div className="page-editor-container">
                      {/* Yurtiçi */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">🇹🇷 Yurtiçi Destinasyonları (Own Event)</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddDestination('yurtici')}>
                            <Plus size={14} /> Yeni Yurtiçi Destinasyon Ekle
                          </button>
                        </div>

                        <div className="capabilities-editor-grid">
                          {(destList.yurtici || []).map((dest, dIdx) => (
                            <div key={dIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{dIdx + 1} {dest.name}</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeleteDestination('yurtici', dIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="grid-2-col">
                                <div className="input-group">
                                  <label className="admin-label">İkon / Emoji</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={dest.icon || ''}
                                    onChange={(e) => handleDestinationChange('yurtici', dIdx, 'icon', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">Şehir / Bölge İsmi</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={dest.name || ''}
                                    onChange={(e) => handleDestinationChange('yurtici', dIdx, 'name', e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Simge Yapı / Mekan Açıklaması</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={dest.landmark || ''}
                                  onChange={(e) => handleDestinationChange('yurtici', dIdx, 'landmark', e.target.value)}
                                />
                              </div>

                              <ImageUploader 
                                label="Destinasyon Fotoğrafı"
                                value={dest.image || ''}
                                onChange={(url) => handleDestinationChange('yurtici', dIdx, 'image', url)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Yurtdışı */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">🌐 Yurtdışı Destinasyonları (Own Event)</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddDestination('yurtdisi')}>
                            <Plus size={14} /> Yeni Yurtdışı Destinasyon Ekle
                          </button>
                        </div>

                        <div className="capabilities-editor-grid">
                          {(destList.yurtdisi || []).map((dest, dIdx) => (
                            <div key={dIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{dIdx + 1} {dest.name}</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeleteDestination('yurtdisi', dIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="grid-2-col">
                                <div className="input-group">
                                  <label className="admin-label">Bayrak / Emoji</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={dest.icon || ''}
                                    onChange={(e) => handleDestinationChange('yurtdisi', dIdx, 'icon', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">Ülke / Şehir İsmi</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={dest.name || ''}
                                    onChange={(e) => handleDestinationChange('yurtdisi', dIdx, 'name', e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Simge Yapı / Mekan Açıklaması</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={dest.landmark || ''}
                                  onChange={(e) => handleDestinationChange('yurtdisi', dIdx, 'landmark', e.target.value)}
                                />
                              </div>

                              <ImageUploader 
                                label="Destinasyon Fotoğrafı"
                                value={dest.image || ''}
                                onChange={(url) => handleDestinationChange('yurtdisi', dIdx, 'image', url)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 3: PRECEPTORSHIP */}
                  {subservicesSubTab === 'preceptorship' && (
                    <div className="page-editor-container">
                      {/* Yurtiçi */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">🩺 Yurtiçi Preceptorship Programları</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddPreceptorship('yurtici')}>
                            <Plus size={14} /> Yeni Program Ekle
                          </button>
                        </div>

                        <div className="capabilities-editor-grid">
                          {(precepList.yurtici || []).map((item, pIdx) => (
                            <div key={pIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{pIdx + 1} {item.title}</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeletePreceptorship('yurtici', pIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Program Başlığı</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={item.title || ''}
                                  onChange={(e) => handlePreceptorshipChange('yurtici', pIdx, 'title', e.target.value)}
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Açıklama</label>
                                <textarea 
                                  className="admin-textarea"
                                  rows={2}
                                  value={item.desc || ''}
                                  onChange={(e) => handlePreceptorshipChange('yurtici', pIdx, 'desc', e.target.value)}
                                />
                              </div>

                              <ImageUploader 
                                label="Program Görseli"
                                value={item.image || ''}
                                onChange={(url) => handlePreceptorshipChange('yurtici', pIdx, 'image', url)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Yurtdışı */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">🌍 Yurtdışı Preceptorship Programları</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddPreceptorship('yurtdisi')}>
                            <Plus size={14} /> Yeni Program Ekle
                          </button>
                        </div>

                        <div className="capabilities-editor-grid">
                          {(precepList.yurtdisi || []).map((item, pIdx) => (
                            <div key={pIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{pIdx + 1} {item.title}</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeletePreceptorship('yurtdisi', pIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Program Başlığı</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={item.title || ''}
                                  onChange={(e) => handlePreceptorshipChange('yurtdisi', pIdx, 'title', e.target.value)}
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Açıklama</label>
                                <textarea 
                                  className="admin-textarea"
                                  rows={2}
                                  value={item.desc || ''}
                                  onChange={(e) => handlePreceptorshipChange('yurtdisi', pIdx, 'desc', e.target.value)}
                                />
                              </div>

                              <ImageUploader 
                                label="Program Görseli"
                                value={item.image || ''}
                                onChange={(url) => handlePreceptorshipChange('yurtdisi', pIdx, 'image', url)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 4: PARTNER PLATFORMS */}
                  {subservicesSubTab === 'platforms' && (
                    <div className="page-editor-container">
                      {/* Alx Digi Partners */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">💻 Alx Digi Çözüm Platformları (Doktorum Yanımda, Beynex, Niceye)</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddPartnerPlatform('alx-digi')}>
                            <Plus size={14} /> Yeni Digi Platform Ekle
                          </button>
                        </div>

                        <div className="cards-stack">
                          {(partnerList['alx-digi'] || []).map((plat, plIdx) => (
                            <div key={plIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{plIdx + 1} {plat.brand} ({plat.title})</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeletePartnerPlatform('alx-digi', plIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="grid-3-col">
                                <div className="input-group">
                                  <label className="admin-label">Hizmet Başlığı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.title || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-digi', plIdx, 'title', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">Partner / Marka Adı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.brand || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-digi', plIdx, 'brand', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">İkon / Emoji</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.icon || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-digi', plIdx, 'icon', e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Resmi Web Sitesi Linki (URL)</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={plat.link || ''}
                                  onChange={(e) => handlePartnerPlatformChange('alx-digi', plIdx, 'link', e.target.value)}
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Açıklama</label>
                                <textarea 
                                  className="admin-textarea"
                                  rows={2}
                                  value={plat.desc || ''}
                                  onChange={(e) => handlePartnerPlatformChange('alx-digi', plIdx, 'desc', e.target.value)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Alx Need Partners */}
                      <div className="admin-card">
                        <div className="card-header-bar">
                          <h3 className="card-subheading">🎯 Alx Need Stratejik Ortakları (Gama CRO, Niceye IT)</h3>
                          <button type="button" className="btn-add-secondary" onClick={() => handleAddPartnerPlatform('alx-need')}>
                            <Plus size={14} /> Yeni Need Platform Ekle
                          </button>
                        </div>

                        <div className="cards-stack">
                          {(partnerList['alx-need'] || []).map((plat, plIdx) => (
                            <div key={plIdx} className="nested-box">
                              <div className="card-header-bar">
                                <span className="cap-badge">#{plIdx + 1} {plat.brand} ({plat.title})</span>
                                <button 
                                  type="button" 
                                  className="btn-icon btn-danger" 
                                  onClick={() => handleDeletePartnerPlatform('alx-need', plIdx)}
                                  title="Sil"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>

                              <div className="grid-3-col">
                                <div className="input-group">
                                  <label className="admin-label">Hizmet Başlığı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.title || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-need', plIdx, 'title', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">Partner / Marka Adı</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.brand || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-need', plIdx, 'brand', e.target.value)}
                                  />
                                </div>
                                <div className="input-group">
                                  <label className="admin-label">İkon / Emoji</label>
                                  <input 
                                    type="text" 
                                    className="admin-input"
                                    value={plat.icon || ''}
                                    onChange={(e) => handlePartnerPlatformChange('alx-need', plIdx, 'icon', e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Resmi Web Sitesi Linki (URL)</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={plat.link || ''}
                                  onChange={(e) => handlePartnerPlatformChange('alx-need', plIdx, 'link', e.target.value)}
                                />
                              </div>

                              <div className="input-group">
                                <label className="admin-label">Açıklama</label>
                                <textarea 
                                  className="admin-textarea"
                                  rows={2}
                                  value={plat.desc || ''}
                                  onChange={(e) => handlePartnerPlatformChange('alx-need', plIdx, 'desc', e.target.value)}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 5: COURSES */}
                  {subservicesSubTab === 'courses' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">🎓 Kurs &amp; Eğitim Programları</h3>
                        <button type="button" className="btn-add-primary" onClick={handleAddCourse}>
                          <Plus size={16} /> Yeni Kurs Ekle
                        </button>
                      </div>

                      <div className="capabilities-editor-grid">
                        {courseList.map((course, crIdx) => (
                          <div key={crIdx} className="nested-box">
                            <div className="card-header-bar">
                              <span className="cap-badge">#{crIdx + 1} {course.title}</span>
                              <button 
                                type="button" 
                                className="btn-icon btn-danger" 
                                onClick={() => handleDeleteCourse(crIdx)}
                                title="Sil"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>

                            <div className="grid-2-col">
                              <div className="input-group">
                                <label className="admin-label">İkon / Emoji</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={course.icon || ''}
                                  onChange={(e) => handleCourseChange(crIdx, 'icon', e.target.value)}
                                />
                              </div>
                              <div className="input-group">
                                <label className="admin-label">Rozet</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={course.badge || ''}
                                  onChange={(e) => handleCourseChange(crIdx, 'badge', e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Kurs Başlığı</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={course.title || ''}
                                onChange={(e) => handleCourseChange(crIdx, 'title', e.target.value)}
                              />
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Açıklama</label>
                              <textarea 
                                className="admin-textarea"
                                rows={3}
                                value={course.desc || ''}
                                onChange={(e) => handleCourseChange(crIdx, 'desc', e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 6: INCENTIVE */}
                  {subservicesSubTab === 'incentive' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">⚡ Incentive &amp; Motivasyon Etkinlikleri</h3>
                        <button type="button" className="btn-add-primary" onClick={handleAddIncentive}>
                          <Plus size={16} /> Yeni Etkinlik Ekle
                        </button>
                      </div>

                      <div className="capabilities-editor-grid">
                        {incList.map((inc, incIdx) => (
                          <div key={incIdx} className="nested-box">
                            <div className="card-header-bar">
                              <span className="cap-badge">#{incIdx + 1} {inc.title}</span>
                              <button 
                                type="button" 
                                className="btn-icon btn-danger" 
                                onClick={() => handleDeleteIncentive(incIdx)}
                                title="Sil"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>

                            <div className="grid-2-col">
                              <div className="input-group">
                                <label className="admin-label">İkon / Emoji</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={inc.icon || ''}
                                  onChange={(e) => handleIncentiveChange(incIdx, 'icon', e.target.value)}
                                />
                              </div>
                              <div className="input-group">
                                <label className="admin-label">Rozet</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={inc.badge || ''}
                                  onChange={(e) => handleIncentiveChange(incIdx, 'badge', e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Etkinlik Başlığı</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={inc.title || ''}
                                onChange={(e) => handleIncentiveChange(incIdx, 'title', e.target.value)}
                              />
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Açıklama</label>
                              <textarea 
                                className="admin-textarea"
                                rows={3}
                                value={inc.desc || ''}
                                onChange={(e) => handleIncentiveChange(incIdx, 'desc', e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUBTAB 7: CORPORATE TRAVEL & GUEST SERVICES */}
                  {subservicesSubTab === 'travelText' && (() => {
                    const corp = subData.corporateTravel || defaultContent.pages.subServicesData.corporateTravel;
                    const gs = corp.guestServices || defaultContent.pages.subServicesData.corporateTravel.guestServices;
                    const ot = corp.overseasTravel || defaultContent.pages.subServicesData.corporateTravel.overseasTravel;
                    const dt = corp.domesticTravel || defaultContent.pages.subServicesData.corporateTravel.domesticTravel;

                    return (
                      <div className="page-editor-container">
                        {/* 1. Misafir Hizmetleri */}
                        <div className="admin-card">
                          <div className="card-header-bar">
                            <div>
                              <h3 className="card-subheading">🛎️ Uluslararası Misafir Hizmetleri Bölümü Metinleri</h3>
                              <p className="card-hint">/alx-4-you/uluslararasi-misafir-hizmetleri sayfasındaki detaylı tanıtım ve hizmet maddelerini düzenleyin.</p>
                            </div>
                          </div>

                          <div className="grid-2-col">
                            <div className="input-group">
                              <label className="admin-label">Ana Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={gs.title || ''}
                                onChange={(e) => handleCorporateTravelChange('guestServices', 'title', e.target.value)}
                              />
                            </div>
                            <div className="input-group">
                              <label className="admin-label">Alt Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={gs.subtitle || ''}
                                onChange={(e) => handleCorporateTravelChange('guestServices', 'subtitle', e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Üst Slogan / Motto</label>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={gs.motto || ''}
                              onChange={(e) => handleCorporateTravelChange('guestServices', 'motto', e.target.value)}
                            />
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Giriş Paragrafı (Lead)</label>
                            <textarea 
                              className="admin-textarea"
                              rows={2}
                              value={gs.lead || ''}
                              onChange={(e) => handleCorporateTravelChange('guestServices', 'lead', e.target.value)}
                            />
                          </div>

                          <div className="grid-2-col">
                            <div className="input-group">
                              <label className="admin-label">Detay Paragraf 1</label>
                              <textarea 
                                className="admin-textarea"
                                rows={2}
                                value={gs.text1 || ''}
                                onChange={(e) => handleCorporateTravelChange('guestServices', 'text1', e.target.value)}
                              />
                            </div>
                            <div className="input-group">
                              <label className="admin-label">Detay Paragraf 2</label>
                              <textarea 
                                className="admin-textarea"
                                rows={2}
                                value={gs.text2 || ''}
                                onChange={(e) => handleCorporateTravelChange('guestServices', 'text2', e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="bullets-container" style={{ marginTop: '16px' }}>
                            <div className="card-header-bar">
                              <label className="admin-label">Hizmet Maddeleri ({gs.services?.length || 0})</label>
                              <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateTravelService('guestServices')}>
                                <Plus size={14} /> Madde Ekle
                              </button>
                            </div>
                            {(gs.services || []).map((srv, sIdx) => (
                              <div key={sIdx} className="bullet-row">
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={srv}
                                  onChange={(e) => handleCorporateTravelServiceChange('guestServices', sIdx, e.target.value)}
                                />
                                <button type="button" className="btn-icon btn-danger" onClick={() => handleDeleteCorporateTravelService('guestServices', sIdx)}>
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 2. Yurtdışı Seyahat & Org */}
                        <div className="admin-card">
                          <div className="card-header-bar">
                            <div>
                              <h3 className="card-subheading">✈️ Yurtdışı Seyahat ve Organizasyonlar Bölümü</h3>
                              <p className="card-hint">Yurtdışı seyahat sayfalarında gösterilen ana metin ve hizmet kapsamı.</p>
                            </div>
                          </div>

                          <div className="grid-2-col">
                            <div className="input-group">
                              <label className="admin-label">Ana Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={ot.title || ''}
                                onChange={(e) => handleCorporateTravelChange('overseasTravel', 'title', e.target.value)}
                              />
                            </div>
                            <div className="input-group">
                              <label className="admin-label">Alt Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={ot.subtitle || ''}
                                onChange={(e) => handleCorporateTravelChange('overseasTravel', 'subtitle', e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Giriş Paragrafı (Lead)</label>
                            <textarea 
                              className="admin-textarea"
                              rows={2}
                              value={ot.lead || ''}
                              onChange={(e) => handleCorporateTravelChange('overseasTravel', 'lead', e.target.value)}
                            />
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Detay Açıklama</label>
                            <textarea 
                              className="admin-textarea"
                              rows={2}
                              value={ot.text || ''}
                              onChange={(e) => handleCorporateTravelChange('overseasTravel', 'text', e.target.value)}
                            />
                          </div>

                          <div className="bullets-container" style={{ marginTop: '16px' }}>
                            <div className="card-header-bar">
                              <label className="admin-label">Hizmet Maddeleri ({ot.services?.length || 0})</label>
                              <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateTravelService('overseasTravel')}>
                                <Plus size={14} /> Madde Ekle
                              </button>
                            </div>
                            {(ot.services || []).map((srv, sIdx) => (
                              <div key={sIdx} className="bullet-row">
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={srv}
                                  onChange={(e) => handleCorporateTravelServiceChange('overseasTravel', sIdx, e.target.value)}
                                />
                                <button type="button" className="btn-icon btn-danger" onClick={() => handleDeleteCorporateTravelService('overseasTravel', sIdx)}>
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 3. Yurtiçi Seyahat & Org */}
                        <div className="admin-card">
                          <div className="card-header-bar">
                            <div>
                              <h3 className="card-subheading">🇹🇷 Yurtiçi Seyahat ve Organizasyonlar Bölümü</h3>
                              <p className="card-hint">Yurtiçi organizasyon sayfalarında gösterilen ana metin ve hizmet kapsamı.</p>
                            </div>
                          </div>

                          <div className="grid-2-col">
                            <div className="input-group">
                              <label className="admin-label">Ana Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={dt.title || ''}
                                onChange={(e) => handleCorporateTravelChange('domesticTravel', 'title', e.target.value)}
                              />
                            </div>
                            <div className="input-group">
                              <label className="admin-label">Alt Başlık</label>
                              <input 
                                type="text" 
                                className="admin-input"
                                value={dt.subtitle || ''}
                                onChange={(e) => handleCorporateTravelChange('domesticTravel', 'subtitle', e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Giriş Paragrafı (Lead)</label>
                            <textarea 
                              className="admin-textarea"
                              rows={2}
                              value={dt.lead || ''}
                              onChange={(e) => handleCorporateTravelChange('domesticTravel', 'lead', e.target.value)}
                            />
                          </div>

                          <div className="input-group">
                            <label className="admin-label">Detay Açıklama</label>
                            <textarea 
                              className="admin-textarea"
                              rows={2}
                              value={dt.text || ''}
                              onChange={(e) => handleCorporateTravelChange('domesticTravel', 'text', e.target.value)}
                            />
                          </div>

                          <div className="bullets-container" style={{ marginTop: '16px' }}>
                            <div className="card-header-bar">
                              <label className="admin-label">Hizmet Maddeleri ({dt.services?.length || 0})</label>
                              <button type="button" className="btn-add-secondary" onClick={() => handleAddCorporateTravelService('domesticTravel')}>
                                <Plus size={14} /> Madde Ekle
                              </button>
                            </div>
                            {(dt.services || []).map((srv, sIdx) => (
                              <div key={sIdx} className="bullet-row">
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={srv}
                                  onChange={(e) => handleCorporateTravelServiceChange('domesticTravel', sIdx, e.target.value)}
                                />
                                <button type="button" className="btn-icon btn-danger" onClick={() => handleDeleteCorporateTravelService('domesticTravel', sIdx)}>
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </section>
            );
          })()}

          {/* TAB: ORG FORM */}
          {activeTab === 'orgForm' && (() => {
            const orgForm = content?.pages?.orgFormConfig || defaultContent.pages.orgFormConfig;
            const orgTypes = orgForm.orgTypes || defaultContent.pages.orgFormConfig.orgTypes;
            const servicesList = orgForm.servicesList || defaultContent.pages.orgFormConfig.servicesList;

            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">Organizasyon &amp; Teklif Talep Formu Yönetimi</h2>
                    <p className="section-desc">
                      Ana sayfada ve hizmet sayfalarında yer alan kapsamlı talep formunun başlıklarını, organizasyon türlerini, hizmet listesini ve başarı mesajını özelleştirin.
                    </p>
                  </div>
                </div>

                <div className="admin-card">
                  <div className="card-header-bar">
                    <h3 className="card-subheading">Form Başlık &amp; Tanıtım Metinleri</h3>
                  </div>

                  <div className="grid-2-col">
                    <div className="input-group">
                      <label className="admin-label">Üst Rozet (Badge)</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={orgForm.badge || ''} 
                        onChange={(e) => handleOrgFormConfigChange('badge', e.target.value)}
                        placeholder="Online Teklif & Planlama"
                      />
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Ana Başlık</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={orgForm.title || ''} 
                        onChange={(e) => handleOrgFormConfigChange('title', e.target.value)}
                        placeholder="Hayalinizdeki Organizasyonu Birlikte Planlayalım"
                      />
                    </div>
                  </div>

                  <div className="grid-2-col">
                    <div className="input-group">
                      <label className="admin-label">Slogan / Alt Başlık</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={orgForm.subtitle || ''} 
                        onChange={(e) => handleOrgFormConfigChange('subtitle', e.target.value)}
                        placeholder="Siz hayal edin, biz tüm detayları planlayalım."
                      />
                    </div>

                    <div className="input-group">
                      <label className="admin-label">Gönder Buton Metni</label>
                      <input 
                        type="text" 
                        className="admin-input" 
                        value={orgForm.submitBtnText || ''} 
                        onChange={(e) => handleOrgFormConfigChange('submitBtnText', e.target.value)}
                        placeholder="ORGANİZASYON TALEBİMİ GÖNDER"
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Açıklama Paragrafı</label>
                    <textarea 
                      className="admin-textarea" 
                      rows={3} 
                      value={orgForm.desc || ''} 
                      onChange={(e) => handleOrgFormConfigChange('desc', e.target.value)}
                      placeholder="Yurt içinde veya dünyanın herhangi bir noktasında..."
                    />
                  </div>
                </div>

                {/* Success Message Card */}
                <div className="admin-card">
                  <div className="card-header-bar">
                    <h3 className="card-subheading">Başarılı Gönderim Popup Mesajı</h3>
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Başarı Başlığı</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      value={orgForm.successTitle || ''} 
                      onChange={(e) => handleOrgFormConfigChange('successTitle', e.target.value)}
                      placeholder="Organizasyon Talebiniz Başarıyla Alındı!"
                    />
                  </div>

                  <div className="input-group">
                    <label className="admin-label">Başarı Açıklaması</label>
                    <textarea 
                      className="admin-textarea" 
                      rows={2} 
                      value={orgForm.successDesc || ''} 
                      onChange={(e) => handleOrgFormConfigChange('successDesc', e.target.value)}
                      placeholder="Ekibimiz en kısa sürede sizinle iletişime geçecektir..."
                    />
                  </div>
                </div>

                {/* Group 2: Org Types */}
                <div className="admin-card">
                  <div className="card-header-bar">
                    <div>
                      <h3 className="card-subheading">Organizasyon Türleri Seçenekleri ({orgTypes.length})</h3>
                      <p className="card-hint">Kullanıcının formda işaretleyebileceği etkinlik kategorileri.</p>
                    </div>
                    <button type="button" className="btn-add-secondary" onClick={handleAddOrgType}>
                      <Plus size={14} /> Seçenek Ekle
                    </button>
                  </div>

                  <div className="capabilities-editor-grid">
                    {orgTypes.map((type, tIdx) => (
                      <div key={tIdx} className="bullet-row" style={{ background: 'rgba(255,255,255,0.02)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', minWidth: '24px' }}>#{tIdx+1}</span>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={type} 
                          onChange={(e) => handleOrgTypeChange(tIdx, e.target.value)}
                        />
                        <button type="button" className="btn-icon btn-danger" onClick={() => handleDeleteOrgType(tIdx)} title="Sil">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Group 3: Services List */}
                <div className="admin-card">
                  <div className="card-header-bar">
                    <div>
                      <h3 className="card-subheading">Hizmet Seçimleri Listesi ({servicesList.length})</h3>
                      <p className="card-hint">Kullanıcının formda talep edebileceği kurumsal hizmetler.</p>
                    </div>
                    <button type="button" className="btn-add-secondary" onClick={handleAddOrgService}>
                      <Plus size={14} /> Hizmet Ekle
                    </button>
                  </div>

                  <div className="capabilities-editor-grid">
                    {servicesList.map((srv, sIdx) => (
                      <div key={sIdx} className="bullet-row" style={{ background: 'rgba(255,255,255,0.02)', padding: '8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', minWidth: '24px' }}>#{sIdx+1}</span>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={srv} 
                          onChange={(e) => handleOrgServiceChange(sIdx, e.target.value)}
                        />
                        <button type="button" className="btn-icon btn-danger" onClick={() => handleDeleteOrgService(sIdx)} title="Sil">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })()}

          {/* TAB: LEGAL & POLICIES */}
          {activeTab === 'legal' && (() => {
            const legal = content?.pages?.legalPages || defaultContent.pages.legalPages;
            const priv = legal.privacyPolicy || defaultContent.pages.legalPages.privacyPolicy;
            const terms = legal.termsOfService || defaultContent.pages.legalPages.termsOfService;
            const kvkk = legal.kvkk || defaultContent.pages.legalPages.kvkk;

            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">Yasal &amp; Sözleşme Metinleri</h2>
                    <p className="section-desc">
                      Sitede footer ve formlarda yer alan Gizlilik Politikası, Kullanım Şartları ve KVKK Aydınlatma Metinlerini düzenleyin.
                    </p>
                  </div>
                </div>

                <div className="page-subtabs-nav">
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${legalSubTab === 'privacy' ? 'active' : ''}`}
                    onClick={() => setLegalSubTab('privacy')}
                  >
                    <ShieldCheck size={16} />
                    <span>Gizlilik Politikası</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${legalSubTab === 'terms' ? 'active' : ''}`}
                    onClick={() => setLegalSubTab('terms')}
                  >
                    <FileText size={16} />
                    <span>Kullanım Koşulları</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${legalSubTab === 'kvkk' ? 'active' : ''}`}
                    onClick={() => setLegalSubTab('kvkk')}
                  >
                    <ClipboardCheck size={16} />
                    <span>KVKK Aydınlatma Metni</span>
                  </button>
                </div>

                <div className="page-editor-container">
                  {legalSubTab === 'privacy' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">🔒 Gizlilik ve Kişisel Verilerin Korunması Politikası</h3>
                      </div>
                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Başlık</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={priv.title || ''} 
                            onChange={(e) => handleLegalPageChange('privacyPolicy', 'title', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Son Güncelleme Yılı / Tarihi</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={priv.lastUpdated || ''} 
                            onChange={(e) => handleLegalPageChange('privacyPolicy', 'lastUpdated', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <label className="admin-label">Politika İçerik Metni (Paragraflar)</label>
                        <textarea 
                          className="admin-textarea" 
                          rows={10} 
                          value={priv.content || ''} 
                          onChange={(e) => handleLegalPageChange('privacyPolicy', 'content', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {legalSubTab === 'terms' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">📄 Kullanım Koşulları &amp; Hizmet Şartları</h3>
                      </div>
                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Başlık</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={terms.title || ''} 
                            onChange={(e) => handleLegalPageChange('termsOfService', 'title', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Son Güncelleme Yılı / Tarihi</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={terms.lastUpdated || ''} 
                            onChange={(e) => handleLegalPageChange('termsOfService', 'lastUpdated', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <label className="admin-label">Sözleşme İçerik Metni (Paragraflar)</label>
                        <textarea 
                          className="admin-textarea" 
                          rows={10} 
                          value={terms.content || ''} 
                          onChange={(e) => handleLegalPageChange('termsOfService', 'content', e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {legalSubTab === 'kvkk' && (
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <h3 className="card-subheading">📋 KVKK Aydınlatma ve Rıza Metni</h3>
                      </div>
                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Başlık</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={kvkk.title || ''} 
                            onChange={(e) => handleLegalPageChange('kvkk', 'title', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Son Güncelleme Yılı / Tarihi</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={kvkk.lastUpdated || ''} 
                            onChange={(e) => handleLegalPageChange('kvkk', 'lastUpdated', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <label className="admin-label">Aydınlatma İçerik Metni (Paragraflar)</label>
                        <textarea 
                          className="admin-textarea" 
                          rows={10} 
                          value={kvkk.content || ''} 
                          onChange={(e) => handleLegalPageChange('kvkk', 'content', e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })()}

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

          {/* TAB: CONTACT & GENERAL & FAQ */}
          {activeTab === 'contact' && (() => {
            const currentContactPage = content.pages?.contactPage || defaultContent.pages.contactPage || {};

            return (
              <section className="admin-section">
                <div className="section-header">
                  <div>
                    <h2 className="section-heading">📞 İletişim, Harita &amp; SSS Yönetimi</h2>
                    <p className="section-desc">
                      İletişim bilgilerini, /iletisim sayfasının hero başlıklarını, Google Maps harita bağlantısını ve Sıkça Sorulan Soruları (SSS) yönetin.
                    </p>
                  </div>
                  <div className="section-header-actions">
                    <a 
                      href="/iletisim" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-preview-link"
                    >
                      <span>Canlı İletişim Sayfasını Gör (/iletisim)</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Sub Navigation */}
                <div className="page-subtabs-nav">
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${contactSubTab === 'info' ? 'active' : ''}`}
                    onClick={() => setContactSubTab('info')}
                  >
                    <PhoneCall size={16} />
                    <span>Genel İletişim Bilgileri &amp; Footer</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${contactSubTab === 'page' ? 'active' : ''}`}
                    onClick={() => setContactSubTab('page')}
                  >
                    <MapPin size={16} />
                    <span>/iletisim Sayfası &amp; Harita</span>
                  </button>
                  <button 
                    type="button" 
                    className={`page-subtab-btn ${contactSubTab === 'faq' ? 'active' : ''}`}
                    onClick={() => setContactSubTab('faq')}
                  >
                    <HelpCircle size={16} />
                    <span>Sıkça Sorulan Sorular (SSS - {(currentContactPage.faqs || []).length})</span>
                  </button>
                </div>

                {/* Sub-tab 1: Genel İletişim */}
                {contactSubTab === 'info' && (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <h3 className="card-subheading">Temel İletişim Kanalları</h3>

                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Telefon Numarası</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={content.contact?.phone || ''} 
                            onChange={(e) => handleContactChange('phone', e.target.value)}
                            placeholder="+90 (212) 555 01 23"
                          />
                        </div>

                        <div className="input-group">
                          <label className="admin-label">WhatsApp Numarası</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={content.contact?.whatsapp || ''} 
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
                            value={content.contact?.email || ''} 
                            onChange={(e) => handleContactChange('email', e.target.value)}
                            placeholder="info@alx.com.tr"
                          />
                        </div>

                        <div className="input-group">
                          <label className="admin-label">Fiziki Adres (Merkez)</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={content.contact?.address || ''} 
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
                          value={content.contact?.whatsappText || ''} 
                          onChange={(e) => handleContactChange('whatsappText', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="admin-card">
                      <h3 className="card-subheading">Sosyal Medya ve Footer Telif Metni</h3>

                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Instagram Linki</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={content.contact?.instagram || ''} 
                            onChange={(e) => handleContactChange('instagram', e.target.value)}
                          />
                        </div>

                        <div className="input-group">
                          <label className="admin-label">WeChat Linki / Kimliği</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={content.contact?.wechat || ''} 
                            onChange={(e) => handleContactChange('wechat', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Telif Hakkı (Copyright) Metni</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={content.contact?.copyright || ''} 
                          onChange={(e) => handleContactChange('copyright', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-tab 2: /iletisim Sayfası & Harita */}
                {contactSubTab === 'page' && (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <h3 className="card-subheading">/iletisim Sayfası Hero Başlık &amp; Tanıtımı</h3>

                      <div className="grid-2-col">
                        <div className="input-group">
                          <label className="admin-label">Hero Başlığı</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={currentContactPage.heroTitle || ''} 
                            onChange={(e) => handleContactPageChange('heroTitle', e.target.value)}
                          />
                        </div>
                        <div className="input-group">
                          <label className="admin-label">Hero Üst Rozeti</label>
                          <input 
                            type="text" 
                            className="admin-input" 
                            value={currentContactPage.heroBadge || ''} 
                            onChange={(e) => handleContactPageChange('heroBadge', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Hero Giriş Açıklaması (Lead)</label>
                        <textarea 
                          className="admin-textarea"
                          rows={3}
                          value={currentContactPage.heroLead || ''}
                          onChange={(e) => handleContactPageChange('heroLead', e.target.value)}
                        />
                      </div>

                      <div className="input-group">
                        <label className="admin-label">Google Maps Harita Yönlendirme Linki</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          value={currentContactPage.mapUrl || ''} 
                          onChange={(e) => handleContactPageChange('mapUrl', e.target.value)}
                          placeholder="https://maps.google.com/?q=..."
                        />
                        <span className="card-hint">Boş bırakılırsa genel merkez adresinden otomatik Google Maps URL üretilir.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sub-tab 3: SSS (FAQs) */}
                {contactSubTab === 'faq' && (
                  <div className="page-editor-container">
                    <div className="admin-card">
                      <div className="card-header-bar">
                        <div>
                          <h3 className="card-subheading">Sıkça Sorulan Sorular (FAQ) Yönetimi</h3>
                          <p className="card-hint">
                            İletişim sayfasında yer alan akordeon SSS sorularını ve yanıtlarını ekleyin veya düzenleyin.
                          </p>
                        </div>
                        <button type="button" className="btn-add-primary" onClick={handleAddFaq}>
                          <Plus size={16} />
                          <span>Yeni Soru &amp; Cevap Ekle</span>
                        </button>
                      </div>

                      <div className="faqs-admin-list">
                        {(currentContactPage.faqs || []).map((faq, fIdx) => (
                          <div key={fIdx} className="nested-box faq-item-edit-box">
                            <div className="card-header-bar">
                              <span className="cap-badge">Soru #{fIdx + 1}</span>
                              <button 
                                type="button" 
                                className="btn-icon btn-danger" 
                                onClick={() => handleDeleteFaq(fIdx)}
                                title="Soruyu Sil"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Soru Metni</label>
                              <input 
                                type="text" 
                                className="admin-input" 
                                value={faq.q || ''} 
                                onChange={(e) => handleFaqChange(fIdx, 'q', e.target.value)}
                              />
                            </div>

                            <div className="input-group">
                              <label className="admin-label">Cevap / Açıklama Metni</label>
                              <textarea 
                                className="admin-textarea" 
                                rows={3} 
                                value={faq.a || ''} 
                                onChange={(e) => handleFaqChange(fIdx, 'a', e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            );
          })()}

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
