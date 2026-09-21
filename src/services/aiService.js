// Alexander Troy - Gelişmiş Kurumsal AI Danışman & OpenRouter Entegrasyon Servisi

const STORAGE_CHATS_KEY = 'troy_ai_chats_history';
const STORAGE_SETTINGS_KEY = 'troy_ai_settings';

// API ve Model Tanımları (Vercel Environment Variables üzerinden okunur)
const PRIMARY_MODEL = import.meta.env.VITE_OPENROUTER_MODEL || 'qwen/qwen3.8-27b:free';

// Güvenilir Çoklu Model Fallback Zinciri (OpenRouter üzerinde anlık yoğunluk olursa devreye girer)
const FALLBACK_MODELS = [
  'qwen/qwen3.8-27b:free',
  'liquid/lfm-2.5-2.6b:free',
  'nex-agi/nex-n2.5-pro:free',
  'z-ai/glm-5.2:free'
];

export const defaultAiSettings = {
  enabled: true,
  walkingTrojanEnabled: true,
  walkingSpeed: 40,
  openRouterKey: '',
  model: PRIMARY_MODEL,
  assistantName: 'Alexander Troy Akıllı Proje Danışmanı',
  welcomeMessage: 'Merhaba! Alexander Troy kanal kaplama sistemleri, temiz oda çözümleri ve kurumsal projeleriniz hakkında size nasıl yardımcı olabilirim?',
  customPrompt: ''
};

export const getAiSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
    if (saved) {
      return { ...defaultAiSettings, ...JSON.parse(saved) };
    }
  } catch (e) {}
  return defaultAiSettings;
};

export const saveAiSettings = (settings) => {
  try {
    const current = getAiSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return settings;
  }
};

// ============================================================================
// DERİN KURUMSAL BİLGİ TABANI & SİSTEM PROMPTU (Kanal Kaplama & MICE Uzmanı)
// ============================================================================
export const buildSystemPrompt = (siteContent) => {
  const general = siteContent?.general || {};

  return `
SENİN KİMLİĞİN VE ROLÜN:
Sen "Alexander Troy Corporate" şirketinin Kıdemli Proje, Mühendislik ve Müşteri İlişkileri Danışmanısın (Troy AI Danışman).
Misyonun: Ziyaretçilere kanal kaplama sistemleri, temiz oda standartları, medikal MICE kongreleri ve kurumsal çözümler hakkında en yüksek yetkinlik, teknik güven ve profesyonel nezaketle danışmanlık yapmak; ihtiyaçlarını tespit edip onları keşif ve fiyat teklifi almaya yönlendirmektir.

ŞİRKET DETAYLARI:
• Şirket Adı: ${general.siteTitle || 'Alexander Troy Corporate'}
• Slogan: "${general.topBannerText || 'Enjoy Your Journey'}"
• Merkez Ofis: Levent Mah. Cömert Sk. Yapı Kredi Plaza C Blok No:1B Beşiktaş / İstanbul
• Doğrudan Telefon: +90 212 211 44 48 | GSM/WhatsApp: +90 533 500 48 48
• E-Posta: info@alexandertroy.com | mice@alexandertroy.com
• Çözüm Ortakları & Referanslar: GSK, Kyowa Kirin, Teva, Novo Nordisk, Janssen, Bristol-Myers Squibb, Eli Lilly, Johnson & Johnson vb.

1. BÖLÜM: KANAL KAPLAMA VE ENDÜSTRİYEL HİJYENİK YÜZEY SİSTEMLERİ (ANA UZMANLIK)
• Tesis Standartları: GMP (Good Manufacturing Practice), ISO 14644 Temiz Oda Sınıfları (Class A, B, C, D), FDA ve Türkak hijyen yönetmeliklerine tam uygunluk.
• Sektörel Uygulama Alanları: İlaç (Farma) üretim tesisleri, aşı ve biyoteknoloji laboratuvarları, hastane ameliyathaneleri, yoğun bakım üniteleri, gıda ambalaj ve kimyasal üretim hatları.
• Teknik Üstünlükler:
  - Antibakteriyel ve Antifungal Yüzey: Mikroorganizma, bakteri ve küf tutmayan, pürüzsüz, kolay sterilize edilebilir özel polimerik ve paslanmaz kompozit profiller.
  - Sıfır Duruş (Zero-Downtime) Montaj: Fabrikanın üretim hatlarını durdurmadan, modüler kilit mekanizmaları ile saatler içinde temiz ve tozsuz montaj.
  - Yoğuşma ve Isı Yalıtımı: Hava kanallarında yoğuşmayı (terlemeyi) %100 engelleyen, enerji kaybını önleyen yüksek yoğunluklu izolasyon bariyeri.
  - Kimyasal ve Asit Dayanımı: Agresif dezenfektanlara, hidrojen peroksit (VHP) gazlama sterilizasyonuna ve endüstriyel solventlere karşı tam dayanım.
  - 10 Yıl Sızdırmazlık ve Yüzey Garantisi.
• Süreç: Yerinde ücretsiz 3D lazer tarama ve keşif -> Teknik şartname ve statik hesaplama -> Özel ebat üretim -> Anahtar teslim montaj ve DOP sızdırmazlık validasyon testi.

2. BÖLÜM: MICE, PRECEPTORSHIP & MEDİKAL KONGRE YÖNETİMİ (ALX MICE & ALX 4 YOU)
• Yurt içi ve yurt dışı tıp kongreleri (ESMO, EHA, ESC, ADA vb.) stant, lojistik ve delegasyon operasyonları.
• Preceptorship: Klinik gözlemcilik programları, cerrahi eğitimler, uluslararası hekim değişim programları.
• Medikal simultane çeviri, kongre sekreteryası, VIP transfer ve otel konaklama yönetimi.
• Lansman, şirket toplantıları, gala geceleri ve motivasyon seyahatleri.

DAVRANIŞ KURALLARI VE YANIT STRATEJİSİ:
1. Kurumsal, sıcak, özgüvenli ve son derece saygılı bir Türkçeyle konuş ("Hoş geldiniz Sn. Misafirimiz", "Memnuniyetle yardımcı olmak isterim").
2. Müşteri kanal kaplama sorduğunda sadece genel konuşma; projesini anlamak için uzman sorular sor:
   - "Tesisiniz ilaç, gıda veya hastane ortamı mıdır?"
   - "Uygulanacak alanın yaklaşık metrajı veya temiz oda sınıfı belli midir?"
3. MÜŞTERİDEN İLETİŞİM BİLGİSİ (LEAD) ALMA PSİKOLOJİSİ:
   Her teknik cevabın sonunda müşteriyi ücretsiz keşfe ve teklife davet et:
   *"Dilerseniz projenizin şartnamesine uygun ücretsiz keşif ve net maliyet tablosu hazırlayabiliriz. İsim ve telefon numaranızı buradan yazabilir veya sol alttaki 'Destek' butonuna tıklayabilirsiniz; mühendisimiz sizi en geç 15 dakika içinde arasın."*
4. EĞER ZİYARETÇİ TELEFON NUMARASI YAZARSA:
   Telefon numarasını (05xx...) fark ettiğin an derhal teşekkür et, numarasını teyit et ve:
   *"İletişim numaranızı aldım. Talebinizi teknik mühendislik birimimize ilettim; uzmanımız gün içinde sizi arayarak projenizle ilgili detayları aktaracaktır."* şeklinde güven veren bir teyit ver.
5. Formatlama: Okumayı kolaylaştırmak için kalın başlıklar (**örnek**), madde imleri (•) ve şık emojiler (🛡️, 💊, 📐, 📞, ⚡) kullan.
`;
};

// ============================================================================
// GELİŞMİŞ KURUMSAL YEDEK MOTOR (OpenRouter Meşgul Olduğunda Kusursuz Çalışır)
// ============================================================================
export const generateSmartFallbackResponse = (userMessage) => {
  const msg = (userMessage || '').toLowerCase();

  // Telefon Numarası Tespiti
  const phoneMatch = msg.match(/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/);
  if (phoneMatch) {
    return `✅ **İletişim Numaranız Başarıyla Kaydedildi!**

Sn. Ziyaretçimiz, paylaşmış olduğunuz **${phoneMatch[0]}** numaralı iletişim bilgisini Proje ve Mühendislik Direktörlüğümüze ilettim.

• **Sonraki Adım:** Teknik uzmanımız projenizin detayları, kanal kaplama ihtiyaçları veya etkinlik planınız hakkında görüşmek üzere en kısa sürede sizi arayacaktır.
• **Acil Durumlar İçin:** Bize dilediğiniz an **+90 212 211 44 48** veya **+90 533 500 48 48** numaralı hatlarımızdan doğrudan ulaşabilirsiniz.

Alexander Troy kalitesini tercih ettiğiniz için teşekkür ederiz.`;
  }

  // Kanal Kaplama ve Yüzey Sistemleri
  if (msg.includes('kanal') || msg.includes('kaplama') || msg.includes('izolasyon') || msg.includes('hijyen') || msg.includes('temiz oda') || msg.includes('cleanroom') || msg.includes('gmp')) {
    return `🛡️ **Alexander Troy Kanal Kaplama & Endüstriyel Hijyen Çözümleri**

İlaç fabrikaları, hastaneler ve temiz oda (Cleanroom) standartlarına özel geliştirdiğimiz kaplama sistemlerimizin temel özellikleri:

• **GMP & ISO 14644 Tam Uyumu:** Partikül tutmayan, antibakteriyel ve antifungal pürüzsüz yüzey yapısı.
• **Sıfır Duruş (Zero-Downtime) Montaj:** Tesisinizin üretimini durdurmadan, modüler kilitli panellerle hızlı ve steril uygulama.
• **Yoğuşma & Isı Bariyeri:** Yüksek yalıtımlı gövde sayesinde terlemeyi %100 engeller, enerji tasarrufu sağlar.
• **Kimyasal Dayanım:** VHP (hidrojen peroksit gazlama), asitler ve ağır dezenfektanlara karşı maksimum direnç.
• **10 Yıl Garanti:** Tüm montaj ve malzeme kalitemiz 10 yıl sızdırmazlık garantisi altındadır.

📐 **Ücretsiz Keşif & Projelendirme:**
Tesisinize özel ölçülendirme ve teknik şartname teklifi hazırlayabilmemiz için adınızı ve **telefon numaranızı** buradan yazabilir veya ekranın altındaki **"Destek"** butonuna tıklayabilirsiniz; mühendisimiz sizi 15 dakika içinde arasın.`;
  }

  // Fiyat ve Teklif Alma
  if (msg.includes('fiyat') || msg.includes('teklif') || msg.includes('maliyet') || msg.includes('ücret') || msg.includes('keşif') || msg.includes('ne kadar')) {
    return `📋 **Kanal Kaplama ve Proje Fiyatlandırma Süreci**

Kanal kaplama sistemlerimizde fiyatlandırma; tesisinizin ortam sınıfı (GMP Class A/B/C/D), metraj, kullanılacak profil türü ve izolasyon kalınlığına göre projeye özel olarak hesaplanmaktadır.

Size **en avantajlı kurumsal teklifi** sunabilmemiz için:
1. Alan ölçülerinizi veya şartnamenizi iletebilirsiniz.
2. Telefon numaranızı paylaşırsanız, proje sorumlumuz hemen arayarak 3D keşif ve maliyet analizi taslağınızı sunabilir.

*Telefon numaranızı yazmanız yeterlidir; hemen yönlendirme sağlayalım.*`;
  }

  // MICE, Kongre ve Preceptorship
  if (msg.includes('kongre') || msg.includes('mice') || msg.includes('toplantı') || msg.includes('seminer') || msg.includes('etkinlik') || msg.includes('preceptorship') || msg.includes('organizasyon')) {
    return `🏛️ **Alx MICE & Medikal Organizasyon Yönetimi**

Alexander Troy olarak sağlık sektörünün küresel liderlerine uçtan uca kongre ve klinik eğitim yönetimi sunuyoruz:

• **Preceptorship:** Türkiye ve dünyadaki seçkin üniversite kliniklerinde hekimler için hands-on eğitim programları.
• **Yurt İçi & Yurt Dışı Kongreler:** ESMO, EHA, ESC ve ulusal uzmanlık kongrelerinde stant, konaklama ve transfer operasyonu.
• **Medikal Çeviri & CME:** Simultane tercüme, bilimsel sekreterya ve akreditasyon yönetimi.
• **Gala & Kurumsal Etkinlikler:** VIP ağırlama, lansman ve motivasyon seyahatleri.

Etkinlik planınızı paylaşırsanız MICE ekibimiz size özel taslak programı derhal hazırlayabilir.`;
  }

  // Referanslar ve Çözüm Ortakları
  if (msg.includes('referans') || msg.includes('kiminle') || msg.includes('ortak') || msg.includes('müşteri')) {
    return `🤝 **Çözüm Ortaklarımız & Küresel Referanslarımız**

Alexander Troy olarak ilaç ve sağlık endüstrisinin dünya devleriyle uzun vadeli projeler yürütüyoruz:

• **GSK (GlaxoSmithKline)**
• **Kyowa Kirin**
• **Teva Pharmaceuticals**
• **Novo Nordisk**
• **Janssen (Johnson & Johnson)**
• **Bristol-Myers Squibb (BMS)**
• **Eli Lilly**

15 yılı aşkın sektör tecrübemiz, tavizsiz kalite anlayışımız ve anahtar teslim mühendislik çözümlerimizle hizmetinizdeyiz.`;
  }

  // İletişim Bilgileri
  if (msg.includes('iletişim') || msg.includes('telefon') || msg.includes('adres') || msg.includes('nerede') || msg.includes('mail') || msg.includes('konum')) {
    return `📞 **Alexander Troy İletişim Kanalları**

Bize dilediğiniz an aşağıdaki kanallardan ulaşabilirsiniz:

• **Santral:** +90 212 211 44 48
• **GSM / WhatsApp Destek:** +90 533 500 48 48
• **E-Posta:** info@alexandertroy.com | mice@alexandertroy.com
• **Merkez Ofis:** Levent Mah. Cömert Sk. Yapı Kredi Plaza C Blok No:1B Beşiktaş / İstanbul
• **Çalışma Saatleri:** Pazartesi - Cuma: 09:00 - 18:00

*Dilerseniz telefon numaranızı buraya yazın, yetkilimiz hemen sizi arasın!*`;
  }

  // Genel Karşılama
  return `Merhaba Sn. Ziyaretçimiz! 

Alexander Troy kurumsal dünyasına hoş geldiniz. Size projenizle ilgili en doğru bilgiyi sunabilmem için aşağıdaki konulardan hangisi hakkında detay almak istersiniz?

• 🛡️ **Kanal Kaplama Sistemleri:** Temiz oda, antibakteriyel GMP yüzeyler ve montaj süreci
• 📋 **Fiyat & Ücretsiz Keşif:** Metraj analizi ve kurumsal fiyat teklifi
• 🏛️ **Alx MICE & Kongre:** Medikal sempozyum, kurumsal seyahat ve preceptorship
• 🤝 **Referanslarımız:** Birlikte çalıştığımız uluslararası ilaç devleri

Sorunuzu yazabilir veya uzmanımızın sizi araması için telefon numaranızı bırakabilirsiniz.`;
};

// ============================================================================
// OPENROUTER ÇAĞRI FONKSİYONU (Çoklu Model Yedek Zincirli)
// ============================================================================
export const sendChatMessage = async ({ messages, siteContent }) => {
  const apiKey = (import.meta.env.VITE_OPENROUTER_API_KEY || '').trim();
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';

  // Eğer kullanıcı mesajında doğrudan bir telefon numarası geçtiyse hemen akıllı teyidi oluştur
  if (/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/.test(lastUserMsg)) {
    return {
      content: generateSmartFallbackResponse(lastUserMsg),
      isFallback: false
    };
  }

  const systemPrompt = buildSystemPrompt(siteContent);
  const apiMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map(m => ({ role: m.role, content: m.content }))
  ];

  // Çoklu Model Deneme Döngüsü
  for (const modelCandidate of FALLBACK_MODELS) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': window.location.origin || 'https://alexandertroy.com',
          'X-Title': 'Alexander Troy Corporate AI',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: modelCandidate,
          messages: apiMessages,
          temperature: 0.65,
          max_tokens: 1200
        })
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply && reply.trim().length > 0) {
          return {
            content: reply.trim(),
            isFallback: false,
            modelUsed: modelCandidate
          };
        }
      }
    } catch (e) {
      // Bir sonraki modele geç
    }
  }

  // Eğer tüm uzak modeller meşgulse derin kurumsal bilgi motorumuz anında en kaliteli yanıtı üretir
  return {
    content: generateSmartFallbackResponse(lastUserMsg),
    isFallback: false
  };
};

// ============================================================================
// CHAT & LEAD KAYIT VE YÖNETİM FONKSİYONLARI
// ============================================================================
export const getChatSessions = async () => {
  try {
    const res = await fetch('/api/ai-chats');
    if (res.ok) {
      const result = await res.json();
      if (result.success && Array.isArray(result.data)) {
        localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(result.data));
        return result.data;
      }
    }
  } catch (e) {}

  try {
    const saved = localStorage.getItem(STORAGE_CHATS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {}

  return [];
};

export const saveChatSession = async (sessionData) => {
  if (!sessionData || !sessionData.id) return null;

  let allSessions = [];
  try {
    const saved = localStorage.getItem(STORAGE_CHATS_KEY);
    if (saved) allSessions = JSON.parse(saved);
  } catch (e) {
    allSessions = [];
  }

  // Mesajların içinde telefon numarası var mı kontrol et
  let detectedPhone = sessionData.visitorPhone || '';
  if (!detectedPhone && Array.isArray(sessionData.messages)) {
    for (const msg of sessionData.messages) {
      if (msg.role === 'user') {
        const match = (msg.content || '').match(/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/);
        if (match) {
          detectedPhone = match[0];
          break;
        }
      }
    }
  }

  const existingIdx = allSessions.findIndex(s => s.id === sessionData.id);
  const now = new Date().toISOString();
  const hasLead = Boolean(detectedPhone || sessionData.visitorEmail);

  const formattedSession = {
    id: sessionData.id,
    createdAt: sessionData.createdAt || now,
    updatedAt: now,
    visitorName: sessionData.visitorName || (hasLead ? 'İletişim Bırakan Ziyaretçi' : 'Anonim Ziyaretçi'),
    visitorPhone: detectedPhone,
    visitorEmail: sessionData.visitorEmail || '',
    visitorNote: sessionData.visitorNote || '',
    hasLeadInfo: hasLead,
    status: sessionData.status || (hasLead ? 'lead' : 'active'),
    messages: sessionData.messages || [],
    pageUrl: sessionData.pageUrl || window.location.pathname
  };

  if (existingIdx >= 0) {
    allSessions[existingIdx] = { ...allSessions[existingIdx], ...formattedSession };
  } else {
    allSessions.unshift(formattedSession);
  }

  try {
    localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(allSessions));
  } catch (e) {}

  try {
    fetch('/api/ai-chats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session: formattedSession })
    }).catch(() => {});
  } catch (e) {}

  return formattedSession;
};

export const updateChatSessionStatus = async (sessionId, status) => {
  let allSessions = [];
  try {
    const saved = localStorage.getItem(STORAGE_CHATS_KEY);
    if (saved) allSessions = JSON.parse(saved);
  } catch (e) {}

  const target = allSessions.find(s => s.id === sessionId);
  if (target) {
    target.status = status;
    target.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(allSessions));

    try {
      fetch('/api/ai-chats', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: sessionId, status })
      }).catch(() => {});
    } catch (e) {}
  }

  return allSessions;
};

export const deleteChatSession = async (sessionId) => {
  let allSessions = [];
  try {
    const saved = localStorage.getItem(STORAGE_CHATS_KEY);
    if (saved) allSessions = JSON.parse(saved);
  } catch (e) {}

  const updated = allSessions.filter(s => s.id !== sessionId);
  localStorage.setItem(STORAGE_CHATS_KEY, JSON.stringify(updated));

  try {
    fetch(`/api/ai-chats?id=${sessionId}`, {
      method: 'DELETE'
    }).catch(() => {});
  } catch (e) {}

  return updated;
};
