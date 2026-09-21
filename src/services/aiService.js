const STORAGE_SETTINGS_KEY = 'troy_ai_settings';
const STORAGE_CHATS_KEY = 'troy_ai_chats_history';

// 1 Saniyenin altında çalışan, mantıklı, zeki ve kurumsal Türkçe bilen model sırası
const FAST_MODELS = [
  'nex-agi/nex-n2.5-mini:free',
  'deepseek/deepseek-chat'
];

export const defaultAiSettings = {
  enabled: true,
  walkingTrojanEnabled: true,
  walkingSpeed: 40,
  openRouterKey: '',
  model: FAST_MODELS[0],
  assistantName: 'Alexander Troy Danışman',
  welcomeMessage: 'Merhaba! Alexander Troy kanal kaplama sistemleri ve kurumsal çözümlerimiz hakkında size nasıl yardımcı olabilirim?',
  customPrompt: ''
};

export const getAiSettings = () => {
  try {
    const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
    if (saved) return { ...defaultAiSettings, ...JSON.parse(saved) };
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
// HIZLI & NET SİSTEM PROMPTU (Zeki, Mantıklı ve Kısa)
// ============================================================================
export const buildSystemPrompt = () => {
  return `
Sen "Alexander Troy" kurumsal firmasının profesyonel, zeki ve son derece net Canlı Destek Danışmanısın.
Uzmanlık Alanın: İlaç, gıda, kimya ve medikal tesisler için antibakteriyel kanal kaplama sistemleri, GMP temiz oda standartları, sıfır duruşlu montaj ve Alx MICE medikal kongre çözümleri.

TEMEL YANIT KURALLARI:
1. ÇOK HIZLI, ÖZ VE MANTIKLI CEVAP VER. Asla gereksiz uzun cümleler, saçma kelimeler veya roman gibi paragraflar yazma.
2. Maksimum 2-3 cümle veya 3 kısa madde ile doğrudan sorunun özünü yanıtla.
3. Kusursuz, akıcı ve kurumsal bir Türkçe kullan.
4. Müşteriyi nazikçe ücretsiz keşif ve teklif için telefon numarası bırakmaya davet et.
5. Kullanıcı telefon numarası (05xx...) yazarsa teşekkür et ve proje mühendisimizin arayacağını belirt.

DİNAMİK TAKİP SORULARI ZORUNLULUĞU:
Her cevabının en sonuna MUTLAKA aşağıdaki formatta tam 3 tane kısa, mantıklı ve konuya özel soru ekle:

[SORULAR]
1. Birinci mantıklı soru?
2. İkinci mantıklı soru?
3. Üçüncü mantıklı soru?
`;
};

// ============================================================================
// ANINDA YANIT VEREN AKILLI KURUMSAL MOTOR (Sıfır Gecikme)
// ============================================================================
export const generateSmartResponseWithQuestions = (userMessage) => {
  const msg = (userMessage || '').toLowerCase();

  // Telefon Numarası Algılandıysa
  const phoneMatch = msg.match(/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/);
  if (phoneMatch) {
    return {
      text: `✅ **İletişim Numaranız Alındı!**\n\nPaylaşmış olduğunuz **${phoneMatch[0]}** numaralı telefonu Proje ve Mühendislik birimimize ilettim. Uzman mühendisimiz gün içinde sizinle iletişime geçerek keşif ve teklif sürecinizi başlatacaktır.`,
      questions: [
        'Kanal kaplama montaj süresi nedir?',
        'Garanti kapsamı neleri içerir?',
        'Referanslarınızı görebilir miyim?'
      ]
    };
  }

  // Kanal Kaplama ve İzolasyon
  if (msg.includes('kanal') || msg.includes('kaplama') || msg.includes('hijyen') || msg.includes('temiz oda') || msg.includes('cleanroom')) {
    return {
      text: `🛡️ **Alexander Troy Kanal Kaplama Sistemleri**\n\nİlaç, gıda ve kimya tesisleri için geliştirdiğimiz kaplamalar **GMP ve ISO 14644** temiz oda standartlarına %100 uyumludur.\n\n• **Antibakteriyel Yüzey:** Bakteri ve partikül tutmaz, VHP gazlama ve kimyasallara dayanıklıdır.\n• **Sıfır Duruş (Zero-Downtime):** Üretim hatlarınızı durdurmadan modüler kilitli panellerle hızla monte edilir.\n• **10 Yıl Garanti:** Tam sızdırmazlık ve ısı/yoğuşma izolasyonu sağlar.\n\nTesisinize özel ücretsiz 3D keşif için telefon numaranızı iletebilirsiniz.`,
      questions: [
        'Kanal kaplama fiyat teklifi nasıl alınır?',
        'Sıfır duruşla montaj nasıl yapılıyor?',
        'Hangi ilaç firmaları ile çalışıyorsunuz?'
      ]
    };
  }

  // Fiyat ve Keşif Teklifi
  if (msg.includes('fiyat') || msg.includes('teklif') || msg.includes('keşif') || msg.includes('maliyet') || msg.includes('ne kadar') || msg.includes('ücret')) {
    return {
      text: `📋 **Fiyat & Ücretsiz Keşif Süreci**\n\nKanal kaplama sistemlerimizde fiyatlandırma; tesisin alan metrajı, hijyen sınıfı ve ortam koşullarına göre projeye özel hesaplanır.\n\nUzman mühendisimiz yerinize gelerek **ücretsiz 3D lazer tarama ve keşif** yapar, ardından net maliyet tablonuzu sunar.\n\nTelefon numaranızı yazarsanız proje sorumlumuz hemen sizinle iletişime geçebilir.`,
      questions: [
        'Telefon numaramı bırakmak istiyorum',
        'Kanal kaplama teknik özellikleri nelerdir?',
        'Daha önce yaptığınız projeler hangileri?'
      ]
    };
  }

  // Montaj ve Süreç
  if (msg.includes('montaj') || msg.includes('süre') || msg.includes('nasıl yapılıyor') || msg.includes('üretim')) {
    return {
      text: `⚡ **Sıfır Duruş (Zero-Downtime) Montaj**\n\nFabrikanızın üretimini durdurmadan çalışıyoruz. Özel kilitli modüler panellerimiz sayesinde tesis içinde toz veya inşaat ortamı oluşmaz.\n\n• **Hızlı Entegrasyon:** Mevcut hatlara doğrudan uygulanır.\n• **Validasyon Desteği:** Montaj sonrası sızdırmazlık testleri yapılır.`,
      questions: [
        'Ücretsiz keşif için randevu alabilir miyim?',
        'Garanti süreniz ne kadar?',
        'İletişim bilgilerinizi alabilir miyim?'
      ]
    };
  }

  // MICE ve Kongre
  if (msg.includes('kongre') || msg.includes('mice') || msg.includes('etkinlik') || msg.includes('preceptorship')) {
    return {
      text: `🏛️ **Alx MICE & Kongre Çözümleri**\n\nSağlık ve kurumsal sektöre yönelik ulusal ve uluslararası kongreler, preceptorship klinik hekim eğitimleri, sempozyumlar ve VIP seyahat operasyonları yönetiyoruz.\n\nUçtan uca organizasyon desteğimizle tüm lojistik, konaklama ve teknik altyapıyı sağlıyoruz.`,
      questions: [
        'Preceptorship eğitimleri neleri kapsıyor?',
        'Referans ilaç firmalarınız hangileri?',
        'Etkinlik için teklif almak istiyorum'
      ]
    };
  }

  // Referanslar
  if (msg.includes('referans') || msg.includes('ortak') || msg.includes('firma')) {
    return {
      text: `🤝 **Çözüm Ortaklarımız & Referanslarımız**\n\nAlexander Troy olarak küresel ilaç devleriyle çalışıyoruz: **GSK, Kyowa Kirin, Teva, Novo Nordisk, Janssen, Bristol-Myers Squibb ve Eli Lilly**.\n\nYüksek hijyen ve mühendislik standartlarımızla 15+ yıldır sektör liderlerinin güvenilir çözüm ortağıyız.`,
      questions: [
        'Kanal kaplama çözümlerinizi incelemek istiyorum',
        'Projem için fiyat teklifi nasıl alırım?',
        'Sizi doğrudan arayabileceğim telefon numarası nedir?'
      ]
    };
  }

  // İletişim
  if (msg.includes('iletişim') || msg.includes('telefon') || msg.includes('adres') || msg.includes('nerede')) {
    return {
      text: `📞 **Alexander Troy İletişim Bilgileri**\n\n• **Santral:** +90 212 211 44 48\n• **GSM / WhatsApp:** +90 533 500 48 48\n• **E-Posta:** info@alexandertroy.com\n• **Adres:** Yapı Kredi Plaza C Blok No:1B Beşiktaş / İstanbul\n\n*Numaranızı buraya yazarsanız mühendisimiz gün içinde sizi doğrudan arayabilir.*`,
      questions: [
        'Yetkilinizin beni aramasını istiyorum',
        'Kanal kaplama hakkında bilgi ver',
        'Keşif randevusu oluşturmak istiyorum'
      ]
    };
  }

  // Genel Cevap
  return {
    text: `Alexander Troy kurumsal asistanına hoş geldiniz. İlaç ve gıda tesisleri için **antibakteriyel kanal kaplama**, temiz oda çözümleri ve kurumsal **MICE kongre hizmetlerimizle** yanınızdayız.\n\nSize en hızlı şekilde yardımcı olabilmem için aşağıdaki konulardan birini seçebilir veya sorunuzu yazabilirsiniz:`,
    questions: [
      '🛡️ Kanal Kaplama Sistemleri Nedir?',
      '📐 Ücretsiz Keşif & Fiyat Teklifi Nasıl Alınır?',
      '📞 Uzmanınızın Beni Aramasını İstiyorum'
    ]
  };
};

// ============================================================================
// HIZLI VE AKILLI API ÇAĞRISI (Maksimum 3.5 Saniye Timeout'lu)
// ============================================================================
export const sendChatMessage = async ({ messages }) => {
  const apiKey = (import.meta.env.VITE_OPENROUTER_API_KEY || '').trim();
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';

  // Telefon varsa anında yanıt ver (gecikmesiz)
  if (/(?:0\s*5|\+90\s*5|\b5)\d{2}[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/.test(lastUserMsg)) {
    return generateSmartResponseWithQuestions(lastUserMsg);
  }

  if (apiKey) {
    const systemPrompt = buildSystemPrompt();
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ];

    for (const modelCandidate of FAST_MODELS) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3800); // 3.8 saniyede yanıt gelmezse bekletme

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'HTTP-Referer': window.location.origin || 'https://alexandertroy.com',
            'X-Title': 'Troy AI',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: modelCandidate,
            messages: apiMessages,
            temperature: 0.3,
            max_tokens: 380
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const choice = data?.choices?.[0];
          let fullReply = choice?.message?.content;

          // Eğer model reasoning döndürdüyse ve content boşsa
          if ((!fullReply || fullReply === 'null') && choice?.message?.reasoning) {
            fullReply = choice.message.reasoning;
          }

          if (fullReply && typeof fullReply === 'string' && fullReply.trim().length > 0 && fullReply !== 'null') {
            let cleanText = fullReply;
            let extractedQuestions = [];

            if (fullReply.includes('[SORULAR]')) {
              const parts = fullReply.split('[SORULAR]');
              cleanText = parts[0].trim();
              const qLines = parts[1].split('\n').map(l => l.replace(/^\d+[\.\)\-]\s*/, '').trim()).filter(l => l.length > 3);
              extractedQuestions = qLines.slice(0, 3);
            }

            if (extractedQuestions.length === 0) {
              const defaultFallbackQuestions = generateSmartResponseWithQuestions(lastUserMsg).questions;
              extractedQuestions = defaultFallbackQuestions;
            }

            return {
              text: cleanText,
              questions: extractedQuestions
            };
          }
        }
      } catch (e) {
        // Zaman aşımı veya hata durumunda hemen bir sonraki modele / yerel motora geç
      }
    }
  }

  // Model yavaş kalırsa veya yanıt vermezse saniyesinde profesyonel yerel yanıtı ver
  return generateSmartResponseWithQuestions(lastUserMsg);
};

// ============================================================================
// CHAT & LEAD KAYIT VE YÖNETİMİ
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
  } catch (e) {}

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
