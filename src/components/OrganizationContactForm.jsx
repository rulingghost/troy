import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  FileText, 
  Upload, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  DollarSign, 
  MessageSquare, 
  Sparkles,
  Paperclip,
  X
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { defaultContent } from '../data/defaultContent';
import './OrganizationContactForm.css';

const DEFAULT_ORG_TYPES = [
  'Toplantı / Seminer',
  'Kongre / Sempozyum',
  'Eğitim Organizasyonu',
  'Bayi / Distribütör Organizasyonu',
  'Lansman / Tanıtım',
  'Motivasyon / Incentive',
  'Kurumsal Seyahat',
  'Fuar / Etkinlik',
  'Diğer'
];

const DEFAULT_SERVICES_LIST = [
  'Uçak / Ulaşım',
  'Otel / Konaklama',
  'Havalimanı ve Şehir İçi Transfer',
  'Toplantı / Etkinlik Alanı',
  'Teknik Ekipman ve Organizasyon Desteği',
  'Yemek / Davet Organizasyonu',
  'Sosyal Program ve Aktivite',
  'Rehberlik Hizmetleri',
  'Diğer'
];

const OrganizationContactForm = () => {
  const { content } = useContent();
  const formConfig = content?.pages?.orgFormConfig || defaultContent.pages.orgFormConfig || {};
  const currentOrgTypes = formConfig.orgTypes || DEFAULT_ORG_TYPES;
  const currentServicesList = formConfig.servicesList || DEFAULT_SERVICES_LIST;

  const [formData, setFormData] = useState({
    firmaAdi: '',
    yetkiliAdSoyad: '',
    eposta: '',
    telefon: '',
    orgTurleri: [],
    destinasyon: '',
    tarih: '',
    katilimciSayisi: '',
    orgSuresi: '',
    hizmetler: [],
    orgDetay: '',
    butce: '',
    ekBilgi: '',
    dosya: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleOrgType = (type) => {
    setFormData(prev => {
      const exists = prev.orgTurleri.includes(type);
      return {
        ...prev,
        orgTurleri: exists 
          ? prev.orgTurleri.filter(t => t !== type)
          : [...prev.orgTurleri, type]
      };
    });
  };

  const toggleService = (service) => {
    setFormData(prev => {
      const exists = prev.hizmetler.includes(service);
      return {
        ...prev,
        hizmetler: exists 
          ? prev.hizmetler.filter(s => s !== service)
          : [...prev.hizmetler, service]
      };
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, dosya: e.target.files[0] }));
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, dosya: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firmaAdi.trim()) newErrors.firmaAdi = 'Firma Adı alanı zorunludur.';
    if (!formData.yetkiliAdSoyad.trim()) newErrors.yetkiliAdSoyad = 'Yetkili Ad Soyad alanı zorunludur.';
    if (!formData.eposta.trim()) {
      newErrors.eposta = 'E-posta Adresi alanı zorunludur.';
    } else if (!/\S+@\S+\.\S+/.test(formData.eposta)) {
      newErrors.eposta = 'Geçerli bir e-posta adresi giriniz.';
    }
    if (!formData.telefon.trim()) newErrors.telefon = 'Telefon Numarası alanı zorunludur.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorField = document.querySelector('.org-input-error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      firmaAdi: '',
      yetkiliAdSoyad: '',
      eposta: '',
      telefon: '',
      orgTurleri: [],
      destinasyon: '',
      tarih: '',
      katilimciSayisi: '',
      orgSuresi: '',
      hizmetler: [],
      orgDetay: '',
      butce: '',
      ekBilgi: '',
      dosya: null
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="organizasyon-talep-formu" className="org-form-section">
      <div className="container">
        <div className="org-form-container">
          
          {/* Header Banner */}
          <div className="org-form-header">
            <div className="org-header-badge">
              <Sparkles size={16} />
              <span><em>{formConfig.badge || 'Enjoy Your Journey'}</em></span>
            </div>
            <h2 className="org-form-title">{formConfig.title || 'Hayalinizdeki Organizasyonu Birlikte Planlayalım'}</h2>
            <p className="org-form-tagline">&ldquo;{formConfig.subtitle || 'Siz hayal edin, biz tüm detayları planlayalım.'}&rdquo;</p>
            <p className="org-form-desc">
              {formConfig.desc || 'Yurt içinde veya dünyanın herhangi bir noktasında gerçekleştirmek istediğiniz kurumsal organizasyonunuzu bize anlatın. Toplantı, kongre, sempozyum, bayi organizasyonu, lansman, eğitim, motivasyon gezisi, kurumsal seyahat veya özel etkinlikleriniz için ihtiyaçlarınıza uygun çözümleri birlikte oluşturalım.'}
            </p>
          </div>

          {isSubmitted ? (
            <div className="org-success-box">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={60} />
              </div>
              <h3>{formConfig.successTitle || 'Organizasyon Talebiniz Başarıyla Alındı!'}</h3>
              <p>
                Sayın <strong>{formData.yetkiliAdSoyad}</strong> ({formData.firmaAdi}), talebinizi aldık. {formConfig.successDesc || 'Ekibimiz en kısa sürede sizinle iletişime geçerek detayları birlikte değerlendirecek ve size özel teklif sunacaktır.'}
              </p>
              <div className="success-quote">
                <em>&ldquo;Enjoy Your Journey — We Take Care of Every Detail&rdquo;</em>
              </div>
              <button type="button" onClick={resetForm} className="btn btn-primary btn-reset">
                Yeni Talep Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="org-main-form" noValidate>
              
              {/* Group 1: Organizasyon Bilgileri */}
              <div className="org-form-group-block">
                <div className="org-group-title-row">
                  <span className="org-group-number">01</span>
                  <h3>Organizasyon Bilgileri</h3>
                  <span className="org-req-info">* Kırmızı işaretli alanlar doldurulması zorunlu alanlardır.</span>
                </div>

                <div className="org-form-grid">
                  <div className={`org-form-field ${errors.firmaAdi ? 'org-input-error' : ''}`}>
                    <label>
                      <Building2 size={16} /> Firma Adı <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="firmaAdi" 
                      value={formData.firmaAdi} 
                      onChange={handleInputChange} 
                      placeholder="Firmanızın adını yazınız."
                      required
                    />
                    {errors.firmaAdi && <span className="error-msg">{errors.firmaAdi}</span>}
                  </div>

                  <div className={`org-form-field ${errors.yetkiliAdSoyad ? 'org-input-error' : ''}`}>
                    <label>
                      <User size={16} /> Yetkili Ad Soyad <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="yetkiliAdSoyad" 
                      value={formData.yetkiliAdSoyad} 
                      onChange={handleInputChange} 
                      placeholder="Adınızı ve soyadınızı yazınız."
                      required
                    />
                    {errors.yetkiliAdSoyad && <span className="error-msg">{errors.yetkiliAdSoyad}</span>}
                  </div>

                  <div className={`org-form-field ${errors.eposta ? 'org-input-error' : ''}`}>
                    <label>
                      <Mail size={16} /> E-posta Adresi <span className="req-star">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="eposta" 
                      value={formData.eposta} 
                      onChange={handleInputChange} 
                      placeholder="Size ulaşabileceğimiz e-posta adresiniz."
                      required
                    />
                    {errors.eposta && <span className="error-msg">{errors.eposta}</span>}
                  </div>

                  <div className={`org-form-field ${errors.telefon ? 'org-input-error' : ''}`}>
                    <label>
                      <Phone size={16} /> Telefon Numarası <span className="req-star">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="telefon" 
                      value={formData.telefon} 
                      onChange={handleInputChange} 
                      placeholder="Telefon numaranızı yazınız."
                      required
                    />
                    {errors.telefon && <span className="error-msg">{errors.telefon}</span>}
                  </div>
                </div>
              </div>

              {/* Group 2: Organizasyonunuzu Anlatalım */}
              <div className="org-form-group-block">
                <div className="org-group-title-row">
                  <span className="org-group-number">02</span>
                  <h3>Organizasyon Detayları</h3>
                </div>

                <div className="org-sub-block">
                  <label className="org-checkbox-group-label">Organizasyon Türü (İlgili seçenekleri işaretleyiniz)</label>
                  <div className="org-checkbox-grid">
                    {currentOrgTypes.map((type, idx) => {
                      const isSelected = formData.orgTurleri.includes(type);
                      return (
                        <div 
                          key={idx} 
                          className={`org-checkbox-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleOrgType(type)}
                        >
                          <input 
                            type="checkbox" 
                            checked={isSelected} 
                            onChange={() => {}} 
                          />
                          <span>{type}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="org-form-grid" style={{ marginTop: '24px' }}>
                  <div className="org-form-field">
                    <label><MapPin size={16} /> Destinasyon</label>
                    <input 
                      type="text" 
                      name="destinasyon" 
                      value={formData.destinasyon} 
                      onChange={handleInputChange} 
                      placeholder="Şehir, ülke veya tercih ettiğiniz destinasyonu belirtiniz."
                    />
                  </div>

                  <div className="org-form-field">
                    <label><Calendar size={16} /> Planlanan Tarih</label>
                    <input 
                      type="text" 
                      name="tarih" 
                      value={formData.tarih} 
                      onChange={handleInputChange} 
                      placeholder="Kesin tarih veya tahmini tarih aralığını paylaşabilirsiniz."
                    />
                  </div>

                  <div className="org-form-field">
                    <label><Users size={16} /> Katılımcı Sayısı</label>
                    <input 
                      type="text" 
                      name="katilimciSayisi" 
                      value={formData.katilimciSayisi} 
                      onChange={handleInputChange} 
                      placeholder="Yaklaşık kişi sayısını belirtiniz."
                    />
                  </div>

                  <div className="org-form-field">
                    <label><Clock size={16} /> Organizasyon Süresi</label>
                    <input 
                      type="text" 
                      name="orgSuresi" 
                      value={formData.orgSuresi} 
                      onChange={handleInputChange} 
                      placeholder="Örneğin: 2 gün / 3 gece."
                    />
                  </div>
                </div>
              </div>

              {/* Group 3: İhtiyaçlarınız */}
              <div className="org-form-group-block">
                <div className="org-group-title-row">
                  <span className="org-group-number">03</span>
                  <h3>İhtiyaçlarınız &amp; Hizmet Seçimleri</h3>
                </div>

                <div className="org-sub-block">
                  <label className="org-checkbox-group-label">Hangi hizmetlere ihtiyacınız var?</label>
                  <div className="org-checkbox-grid">
                    {currentServicesList.map((service, idx) => {
                      const isSelected = formData.hizmetler.includes(service);
                      return (
                        <div 
                          key={idx} 
                          className={`org-checkbox-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleService(service)}
                        >
                          <input 
                            type="checkbox" 
                            checked={isSelected} 
                            onChange={() => {}} 
                          />
                          <span>{service}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="org-form-field full-width" style={{ marginTop: '24px' }}>
                  <label><MessageSquare size={16} /> Organizasyonunuz hakkında bize biraz daha bilgi verin.</label>
                  <textarea 
                    name="orgDetay" 
                    rows={4} 
                    value={formData.orgDetay} 
                    onChange={handleInputChange} 
                    placeholder="Organizasyonunuzun amacı, katılımcı profili, beklentileriniz, özel talepleriniz veya dikkat edilmesini istediğiniz detayları bizimle paylaşabilirsiniz."
                  ></textarea>
                </div>
              </div>

              {/* Group 4: Bütçe ve Özel Talepler */}
              <div className="org-form-group-block">
                <div className="org-group-title-row">
                  <span className="org-group-number">04</span>
                  <h3>Bütçe, Notlar &amp; Dosya Ekleme</h3>
                </div>

                <div className="org-form-grid">
                  <div className="org-form-field">
                    <label><DollarSign size={16} /> Tahmini Bütçe</label>
                    <input 
                      type="text" 
                      name="butce" 
                      value={formData.butce} 
                      onChange={handleInputChange} 
                      placeholder="Varsa kişi başı veya toplam bütçenizi paylaşabilirsiniz."
                    />
                  </div>

                  <div className="org-form-field file-upload-field">
                    <label><Paperclip size={16} /> Dosya Ekle (Brief / Katılımcı Listesi / Doküman)</label>
                    <div className="file-upload-box">
                      <input 
                        type="file" 
                        id="org-file-input" 
                        onChange={handleFileChange} 
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.png"
                      />
                      <label htmlFor="org-file-input" className="file-upload-label">
                        <Upload size={18} />
                        <span>{formData.dosya ? formData.dosya.name : 'Dosya seçmek için tıklayın'}</span>
                      </label>
                      {formData.dosya && (
                        <button type="button" onClick={removeFile} className="btn-remove-file" title="Dosyayı kaldır">
                          <X size={16} />
                        </button>
                      )}
                    </div>
                    <span className="file-hint">PDF, Word, Excel veya Görsel yükleyebilirsiniz.</span>
                  </div>
                </div>

                <div className="org-form-field full-width" style={{ marginTop: '20px' }}>
                  <label><FileText size={16} /> Eklemek istediğiniz başka bir bilgi var mı?</label>
                  <textarea 
                    name="ekBilgi" 
                    rows={3} 
                    value={formData.ekBilgi} 
                    onChange={handleInputChange} 
                    placeholder="Her türlü özel talebinizi veya notunuzu bizimle paylaşabilirsiniz."
                  ></textarea>
                </div>
              </div>

              {/* Submit Action Box */}
              <div className="org-submit-box">
                <p className="org-submit-info">
                  Bilgilerinizi aldıktan sonra ekibimiz sizinle iletişime geçerek organizasyonunuzun detaylarını birlikte değerlendirecek ve ihtiyaçlarınıza özel bir çözüm hazırlayacaktır.
                </p>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary org-submit-btn">
                  {isSubmitting ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <span>{formConfig.submitBtnText || 'ORGANİZASYON TALEBİMİ GÖNDER'}</span>
                      <Send size={18} style={{ marginLeft: '10px' }} />
                    </>
                  )}
                </button>
                <p className="org-privacy-note">
                  🔒 Bilgileriniz yalnızca talebinizi değerlendirmek ve sizinle iletişime geçmek amacıyla kullanılacaktır.
                </p>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default OrganizationContactForm;
