const STORAGE_SETTINGS_KEY = 'troy_ai_settings';
const STORAGE_CHATS_KEY = 'troy_ai_chats_history';

// 1 Saniyenin altında çalışan, mantıklı, zeki ve kurumsal Türkçe bilen model sırası
const FAST_MODELS = [
  'deepseek/deepseek-chat',
  'nex-agi/nex-n2.5-mini:free'
];

export const defaultAiSettings = {
  enabled: true,
  walkingTrojanEnabled: true,
  walkingSpeed: 40,
  openRouterKey: '',
  model: FAST_MODELS[0],
  assistantName: 'Alexander Troy Danışman',
  welcomeMessage: 'Merhaba! Alexander Troy kurumsal MICE, Preceptorship klinik eğitimleri ve medikal çözümlerimiz hakkında size nasıl yardımcı olabilirim?',
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
// HIZLI & NET SİSTEM PROMPTU (Alexander Troy Proje Bilgileri & Kurumsal Kurallar)
// ============================================================================
export const buildSystemPrompt = () => {
  return `
Sen "Alexander Troy" (Alx Troy) kurumsal firmasının uzman MICE ve Proje Danışmanısın.
Sloganımız: "Enjoy Your Journey".
BU PROJE ALEXANDER TROY PROJESİDİR. KESİNLİKLE KANAL KAPLAMA, İNŞAAT VEYA HAVALANDIRMA İLE İLGİLİ DEĞİLDİR.

UZMANLIK VE FAALİYET ALANLARIMIZ (SADECE BU KONULARDA BİLGİ VERİRSİN):
1. Alx MICE (Meetings, Incentives, Conferences, Events):
   - Yurt içi ve yurt dışı ulusal ve uluslararası tıp kongreleri, sempozyumlar, bilimsel zirveler, kurumsal bayi toplantıları ve ürün lansmanları.
   - Uçak bileti & charter uçuşlar, VIP havalimanı transferi, lüks otel konaklama yönetimi, kongre merkezi & salon kiralama, sahne, ses, ışık & dev LED ekran sistemleri, simultane çeviri & teknik altyapı, sosyal ve kültürel programlar (Boğaz turları, gala geceleri, şehir turları).
2. Alx 4 You (Klinik Eğitim & Butik Deneyimler):
   - Klinik Preceptorship Hekim Eğitimleri: Uzman hekimlerin mesleki gelişimleri için yurt içi ve yurt dışı kliniklerde birebir vaka gözlemleri, ameliyathane uygulamalı cerrahi eğitim programları.
   - VR ve AI Destekli Medikal Simülasyonlar: Cerrahi ve klinik senaryolar için ileri teknoloji eğitim deneyimleri.
   - Motivasyon Gezileri & Kurumsal Lansmanlar: Şirket ekiplerine ve hekimlere özel butik deneyimler.
   - Uluslararası Delege Ağırlama (VIP Delegasyon Yönetimi).
3. Alx Digi (Dijital Sağlık & İnovasyon):
   - Doktorum Yanımda: Hekimler ve hastalar için güvenli online danışmanlık ve tele-sağlık platformu.
   - Beynex: Yapay zeka tabanlı bilişsel sağlık, hafıza ve beyin egzersizi asistanı.
   - Niceye: AI destekli sağlık çözümleri, giyilebilir teknolojiler, medikal veri analitiği.
   - Canlı Cerrahi & Kongre Yayınları: Ameliyathanelerden kongre salonlarına kesintisiz, yüksek çözünürlüklü canlı yayın altyapısı.
4. Alx Need (Medikal İletişim, CRO & Danışmanlık):
   - Gama CRO: Klinik araştırmalar, medikal ve bilimsel danışmanlık, biyo-istatistiksel analiz ve raporlama.
   - Tıbbi Çeviri & Bilimsel Yayın Desteği: Çok dilli medikal literatür, makale ve ruhsatlandırma çevirileri.
   - Omnichannel Medikal Marka Yönetimi: Niceye IT altyapısıyla fiziksel ve dijital entegre çok kanallı iletişim kurguları.
5. Referanslarımız & Çözüm Ortaklarımız:
   - GSK, Kyowa Kirin, Teva, Novo Nordisk, Janssen, Bristol-Myers Squibb, Eli Lilly, Johnson & Johnson vb. küresel ilaç devleri.
6. İletişim & Lokasyon:
   - Genel Merkez: Levent, Büyükdere Cd. No:195, Şişli / İstanbul (Yapı Kredi Plaza Beşiktaş)
   - Telefon: +90 (212) 555 01 23 / +90 (212) 211 44 48
   - E-Posta: info@alexandertroy.com / info@alx.com.tr
   - Çalışma Saatleri: Hafta içi 09:00 - 18:00

KESİN KURAL - KAPSAM DIŞI VE ALAKASIZ SORULARI KESİNLİKLE REDDET:
1. Eğer kullanıcı "kanal kaplama", "inşaat", "havalandırma kanalı" gibi şeyler sorarsa:
   "Alexander Troy olarak kanal kaplama veya inşaat hizmeti sunmamaktayız. Firmamız MICE kongre organizasyonları, klinik Preceptorship hekim eğitimleri ve dijital sağlık teknolojileri alanında hizmet vermektedir."
2. Kullanıcı web sitesi yapımı, kod/yazılım yazma, yemek tarifi, genel teknoloji, siyaset veya Alexander Troy dışındaki bir konu sorarsa genel tavsiye verme! Hemen nazikçe reddet:
   "Ben yalnızca Alexander Troy'un kurumsal faaliyet alanları hakkında bilgi verebilen uzman bir danışmanım. Web sitesi geliştirme veya konumuz dışındaki alanlarda hizmet sunmamaktayız. Sizlere Alx MICE kongre çözümlerimiz, klinik Preceptorship hekim eğitimlerimiz veya dijital sağlık teknolojilerimiz hakkında nasıl yardımcı olabilirim?"

DİĞER ÖNEMLİ KURALLAR:
1. Kullanıcıya her seferinde "telefon numaranızı bırakın" deme! Sorulan kongre, etkinlik, hekim eğitimi veya teknoloji sorularına doyurucu, vizyoner ve profesyonel bilgiler ver.
2. SADECE TÜRKÇE konuş. Akıcı, kurumsal, saygılı ve net yanıt ver.
3. Fiyat veya bütçe sorulursa; etkinliğin katılımcı sayısı, lokasyon ve lojistik kapsamına göre bütçelendirildiğini belirt; isterse telefon numarası bırakabileceğini nazikçe ekle.
4. Kullanıcı 05xx... ile numara bırakırsa teşekkür et ve proje yöneticimizin kendisini arayacağını belirt.

DİNAMİK TAKİP SORULARI (ÇOK ÖNEMLİ - KESİNLİKLE MÜŞTERİ AĞZINDAN OLMALIDIR):
Cevabının altındaki 3 soru butonu, KULLANICININ/MÜŞTERİNİN TIKLAYIP SANA SORACAĞI sorulardır!
Bu yüzden sorular ASLA botun/danışmanın ağzından ("...ister misiniz?", "...var mı?", "...düşünür müsünüz?") OLMAMALIDIR!
Sorular KESİNLİKLE MÜŞTERİ AĞZINDAN birinci tekil şahıs veya soru kipiyle ("...alabilir miyim?", "...nasıl yapılıyor?", "...nelerdir?", "...düzenlenebilir mi?") şeklinde yazılmalıdır.

DOĞRU MÜŞTERİ AĞZI ÖRNEKLERİ:
✅ "MICE tıp kongrelerinizde simultane çeviri ve teknik altyapı sağlıyor musunuz?"
✅ "Preceptorship klinik eğitim programlarınız hangi uzmanlık alanlarını kapsıyor?"
✅ "Canlı cerrahi yayın altyapınız ameliyathaneden kongre salonuna nasıl aktarılıyor?"
✅ "500 kişilik bir uluslararası kongre için organizasyon teklifi alabilir miyim?"
✅ "Referans çalıştığınız küresel ilaç firmalarını öğrenebilir miyim?"
✅ "VR ve AI destekli medikal simülasyonlarınız nasıl uygulanıyor?"

FORMAT:
[SORULAR]
1. Müşteri ağzından birinci soru?
2. Müşteri ağzından ikinci soru?
3. Müşteri ağzından üçüncü soru?
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
      text: `✅ **İletişim Numaranız Alındı!**\n\nPaylaşmış olduğunuz **${phoneMatch[0]}** numaralı telefonu Proje ve Etkinlik Yönetimi birimimize ilettim. MICE kongre veya medikal projenizle ilgili detayları görüşmek üzere uzman proje yöneticimiz gün içinde sizinle iletişime geçecektir.`,
      questions: [
        'MICE kongre organizasyon süreciniz nasıl işliyor?',
        'Preceptorship klinik eğitim detaylarını alabilir miyim?',
        'Referans çalıştığınız ilaç firmaları hangileridir?'
      ]
    };
  }

  // Konu Dışı / Alakasız Sorular (Web sitesi yapımı, kod, yemek vb.)
  if (
    msg.includes('web sitesi') || 
    msg.includes('website') || 
    msg.includes('site oluştur') || 
    msg.includes('site yap') || 
    msg.includes('kod yaz') || 
    msg.includes('yemek tarif') || 
    msg.includes('hava nasıl') || 
    msg.includes('fıkra anlat') ||
    msg.includes('şarkı yaz')
  ) {
    return {
      text: `Ben yalnızca **Alexander Troy** kurumsal çözümleri ve faaliyet alanlarımız hakkında danışmanlık verebilen bir uzmanım.\n\nWeb sitesi geliştirme veya konumuz dışındaki genel alanlarda hizmet sunmamaktayız. Kurumsal **MICE tıp kongrelerimiz**, **Preceptorship klinik hekim eğitimlerimiz** ve **dijital sağlık teknolojilerimiz** hakkında size memnuniyetle yardımcı olabilirim.`,
      questions: [
        '🏛️ Alx MICE Kongre ve Etkinlik Hizmetleriniz Nelerdir?',
        '🎓 Preceptorship ve Klinik Eğitim Programlarınız Nasıl İşliyor?',
        '💡 Dijital Sağlık & AI Çözümleriniz Hakkında Bilgi Alabilir miyim?'
      ]
    };
  }

  // Kanal Kaplama Sorulursa (Açık ve Net Ret)
  if (msg.includes('kanal') && (msg.includes('kaplama') || msg.includes('havalandırma') || msg.includes('izolasyon') || msg.includes('temiz oda'))) {
    return {
      text: `Alexander Troy olarak kanal kaplama veya inşaat/tesisat hizmeti sunmamaktayız.\n\nFirmamız **MICE ulusal & uluslararası tıp kongreleri**, **Preceptorship klinik hekim eğitimleri**, **Alx Digi sağlık teknolojileri** ve **Alx Need medikal iletişim** alanlarında faaliyet göstermektedir. Projelerinizde size yardımcı olmaktan memnuniyet duyarız.`,
      questions: [
        '🏛️ Alx MICE Kongre ve Etkinlik Hizmetleriniz Nelerdir?',
        '🎓 Preceptorship ve Klinik Eğitim Programlarınız Nasıl İşliyor?',
        '💡 Dijital Sağlık & AI Çözümleriniz Hakkında Bilgi Alabilir miyim?'
      ]
    };
  }

  // MICE, Kongre, Toplantı, Sempozyum, Organizasyon, Seyahat
  if (
    msg.includes('mice') || 
    msg.includes('kongre') || 
    msg.includes('toplantı') || 
    msg.includes('sempozyum') || 
    msg.includes('etkinlik') || 
    msg.includes('organizasyon') || 
    msg.includes('lansman') ||
    msg.includes('uçak') ||
    msg.includes('otel') ||
    msg.includes('transfer') ||
    msg.includes('simultane')
  ) {
    return {
      text: `🏛️ **Alx MICE — Kongre, Sempozyum & Etkinlik Yönetimi**\n\nAlexander Troy olarak yurt içi ve yurt dışı tıp kongreleri, sempozyumlar, bilimsel zirveler ve kurumsal toplantıları uçtan uca yönetiyoruz.\n\n• **Ulaşım & Lojistik:** Uçak bileti/charter, VIP havalimanı transferleri ve 5 yıldızlı otel konaklamaları.\n• **Teknik Altyapı:** Sahne, truss, ses, ışık, dev LED ekranlar ve çok dilli simultane çeviri sistemleri.\n• **Sosyal Programlar:** Boğaz turları, gala geceleri ve özel kültürel geziler.\n\n"Enjoy Your Journey" yaklaşımımızla katılımcılarınıza kusursuz bir deneyim sunuyoruz.`,
      questions: [
        'Uluslararası bir tıp kongresi için teklif alabilir miyim?',
        'Kongrelerde simultane çeviri hizmeti sağlıyor musunuz?',
        'Sosyal program ve gala organizasyonu yapıyor musunuz?'
      ]
    };
  }

  // Preceptorship, Hekim Eğitimi, Kurs, Ameliyathane, VR Simülasyon
  if (
    msg.includes('preceptorship') || 
    msg.includes('eğitim') || 
    msg.includes('kurs') || 
    msg.includes('hekim') || 
    msg.includes('doktor') || 
    msg.includes('klinik') || 
    msg.includes('vaka') || 
    msg.includes('ameliyathane') ||
    msg.includes('simülasyon') ||
    msg.includes('vr')
  ) {
    return {
      text: `🎓 **Alx 4 You — Preceptorship & Klinik Hekim Eğitimleri**\n\nUzman hekimlerin mesleki yetkinliklerini ve cerrahi deneyimlerini artırmak amacıyla özel tasarlanmış eğitim programları sunuyoruz:\n\n• **Klinik Vaka Gözlemleri:** Yurt içi ve yurt dışındaki akredite merkezlerde alanında öncü cerrahlarla birebir çalışma.\n• **Ameliyathane Pratikleri:** İleri cerrahi tekniklerin yerinde incelenmesi ve uygulamalı workshoplar.\n• **VR & AI Simülasyonları:** Sanal gerçeklik ve yapay zeka destekli medikal eğitim simülasyonları.\n• **VIP Delegasyon:** Hekimlerin seyahat, konaklama ve resmi izin süreçlerinin eksiksiz yönetimi.`,
      questions: [
        'Preceptorship programları hangi tıbbi branşları kapsıyor?',
        'Yurt dışı klinik eğitimleri hangi ülkelerde düzenleniyor?',
        'VR ve AI destekli simülasyonlarınız nasıl uygulanıyor?'
      ]
    };
  }

  // Dijital Sağlık, Digi, AI, Doktorum Yanımda, Beynex, Niceye, Canlı Cerrahi Yayın
  if (
    msg.includes('digi') || 
    msg.includes('dijital') || 
    msg.includes('doktorum yanımda') || 
    msg.includes('beynex') || 
    msg.includes('niceye') || 
    msg.includes('yayın') || 
    msg.includes('cerrahi yayın') || 
    msg.includes('tele') || 
    msg.includes('yapay zeka') ||
    msg.includes('sağlık teknoloji')
  ) {
    return {
      text: `💡 **Alx Digi — Dijital Sağlık & İnovasyon Çözümleri**\n\nSağlık sektörünün geleceğini yapay zeka ve dijital teknolojilerle şekillendiriyoruz:\n\n• **Doktorum Yanımda:** Hekimler ve danışanlar için güvenli online danışmanlık ve tele-sağlık platformu.\n• **Beynex:** Yapay zeka tabanlı bilişsel sağlık asistanı ve beyin egzersizleri.\n• **Niceye IT:** AI tabanlı medikal analizler, giyilebilir teknolojiler ve omnichannel marka çözümleri.\n• **Canlı Cerrahi Yayın Altyapısı:** Ameliyathaneden kongre salonlarına kesintisiz, sıfır gecikmeli 4K cerrahi yayın aktarımı.`,
      questions: [
        'Canlı cerrahi yayın altyapınız nasıl çalışıyor?',
        'Beynex bilişsel sağlık asistanı hakkında bilgi alabilir miyim?',
        'Doktorum Yanımda platformu hekimlere ne sağlıyor?'
      ]
    };
  }

  // Medikal İletişim, CRO, Need, Gama CRO, Medikal Çeviri, Biyo-İstatistik
  if (
    msg.includes('need') || 
    msg.includes('cro') || 
    msg.includes('gama') || 
    msg.includes('çeviri') || 
    msg.includes('tercüme') || 
    msg.includes('istatistik') || 
    msg.includes('makale') || 
    msg.includes('yayın') || 
    msg.includes('omnichannel')
  ) {
    return {
      text: `🔬 **Alx Need — Medikal İletişim, Gama CRO & Danışmanlık**\n\nİlaç ve sağlık kuruluşları için bilimsel ve stratejik danışmanlık sunuyoruz:\n\n• **Gama CRO:** Klinik araştırma süreçleri, Faz çalışmaları ve etik kurul danışmanlığı.\n• **Biyo-İstatistik:** Klinik verilerin biyo-istatistiksel analizi, modelleme ve raporlama.\n• **Tıbbi Çeviri & Yayın:** Çok dilli medikal literatür, klinik protokol, ruhsatlandırma ve makale çevirileri.\n• **Omnichannel İletişim:** Hekim ve eczacılara yönelik bütünleşik fiziksel ve dijital marka yönetimi.`,
      questions: [
        'Gama CRO klinik araştırma desteğiniz neleri kapsıyor?',
        'Medikal çeviri hizmetiniz hangi dillerde sunuluyor?',
        'Omnichannel medikal marka yönetimi nasıl kurgulanıyor?'
      ]
    };
  }

  // Referanslar & Çözüm Ortakları
  if (msg.includes('referans') || msg.includes('ortak') || msg.includes('firma') || msg.includes('kimlerle')) {
    return {
      text: `🤝 **Referanslarımız & Çözüm Ortaklarımız**\n\nAlexander Troy olarak dünyanın önde gelen ilaç ve sağlık firmalarıyla uzun yıllardır güvenle çalışıyoruz:\n\n• **Global İlaç Devleri:** GSK, Kyowa Kirin, Teva, Novo Nordisk, Janssen, Bristol-Myers Squibb, Eli Lilly, Johnson & Johnson.\n• **Uzmanlık:** 15+ yıllık tecrübemizle medikal kongrelerden Preceptorship programlarına kadar sağlık sektörünün en prestijli etkinliklerine imza atıyoruz.`,
      questions: [
        'MICE kongre hizmetleriniz hakkında bilgi alabilir miyim?',
        'Preceptorship eğitim programlarınız için teklif alabilir miyim?',
        'Doğrudan arayabileceğim iletişim numaranız nedir?'
      ]
    };
  }

  // Fiyat ve Teklif Talebi
  if (msg.includes('fiyat') || msg.includes('teklif') || msg.includes('bütçe') || msg.includes('maliyet') || msg.includes('ne kadar') || msg.includes('ücret')) {
    return {
      text: `📋 **Kurumsal Teklif & Bütçelendirme Süreci**\n\nAlexander Troy'da tüm MICE kongreleri, Preceptorship programları ve dijital projeler kuruma özel planlanır:\n\n• **Kişiselleştirilmiş Bütçe:** Katılımcı sayısı, destinasyon, konaklama sınıfı, teknik ekipman ve içerik kapsamına göre en optimize maliyet tablosu hazırlanır.\n• **Hızlı Teklif:** Etkinlik detaylarınızı paylaştığınızda ekibimiz 24 saat içinde detaylı teklif sunumunu iletir.\n\nTelefon numaranızı yazarsanız proje sorumlumuz hemen sizinle iletişime geçebilir.`,
      questions: [
        'Kongre organizasyonumuz için fiyat teklifi alabilir miyim?',
        'Preceptorship eğitimi için bütçe planlaması nasıl yapılıyor?',
        'Yetkilinizin beni doğrudan aramasını talep edebilir miyim?'
      ]
    };
  }

  // İletişim & Lokasyon
  if (msg.includes('iletişim') || msg.includes('telefon') || msg.includes('adres') || msg.includes('nerede') || msg.includes('ofis')) {
    return {
      text: `📞 **Alexander Troy İletişim Bilgileri**\n\n• **Santral:** +90 (212) 555 01 23 / +90 (212) 211 44 48\n• **GSM / WhatsApp:** +90 (533) 500 48 48\n• **E-Posta:** info@alexandertroy.com / info@alx.com.tr\n• **Adres:** Levent, Büyükdere Cd. No:195, Şişli / İstanbul (Yapı Kredi Plaza Beşiktaş)\n• **Çalışma Saatleri:** Hafta içi 09:00 - 18:00\n\n*Numaranızı buraya yazarsanız proje yöneticimiz gün içinde sizi doğrudan arayabilir.*`,
      questions: [
        'Yetkilinizin beni aramasını istiyorum',
        'MICE kongre çözümlerinizi incelemek istiyorum',
        'Preceptorship eğitimleri hakkında detaylı bilgi alabilir miyim?'
      ]
    };
  }

  // Genel Karşılama
  return {
    text: `Alexander Troy kurumsal asistanına hoş geldiniz. **Alx MICE** tıp kongreleri, **Preceptorship** klinik hekim eğitimleri, **Alx Digi** dijital sağlık teknolojileri ve **Alx Need** medikal iletişim çözümlerimizle 'Enjoy Your Journey' anlayışıyla yanınızdayız.\n\nSize en hızlı şekilde yardımcı olabilmem için aşağıdaki konulardan birini seçebilir veya sorunuzu yazabilirsiniz:`,
    questions: [
      '🏛️ Alx MICE Kongre ve Etkinlik Hizmetleriniz Nelerdir?',
      '🎓 Preceptorship ve Klinik Eğitim Programlarınız Nasıl İşliyor?',
      '💡 Dijital Sağlık & AI Çözümleriniz Hakkında Bilgi Alabilir miyim?'
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

  // Modelin iç sesi / reasoning veya saçma yanıt filtresi
  const isGarbageOrReasoning = (str) => {
    if (!str || typeof str !== 'string' || str.trim().length < 15) return true;
    const lower = str.toLowerCase();
    return (
      lower.includes('we need') || 
      lower.includes('user asks') || 
      lower.includes('rule says') || 
      lower.includes("let's formulate") ||
      lower.includes('need explain') ||
      lower.includes('mention pre-fabricated')
    );
  };

  // Soruları her zaman müşteri ağzına çeviren yardımcı dönüştürücü
  const formatCustomerQuestion = (q) => {
    if (!q || typeof q !== 'string') return '';
    let str = q.trim();
    str = str.replace(/hakkında\s+detaylı\s+bilgi\s+almak\s+ister\s+misiniz\??/gi, 'hakkında detaylı bilgi alabilir miyim?');
    str = str.replace(/hakkında\s+bilgi\s+almak\s+ister\s+misiniz\??/gi, 'hakkında bilgi alabilir miyim?');
    str = str.replace(/bilgi\s+edinmek\s+ister\s+misiniz\??/gi, 'bilgi alabilir miyim?');
    str = str.replace(/almak\s+ister\s+misiniz\??/gi, 'alabilir miyim?');
    str = str.replace(/ister\s+misiniz\??/gi, 'alabilir miyim?');
    str = str.replace(/istiyor\s+musunuz\??/gi, 'alabilir miyim?');
    str = str.replace(/ister\s+miydiniz\??/gi, 'alabilir miyim?');
    str = str.replace(/öğrenmek\s+ister\s+misiniz\??/gi, 'öğrenebilir miyim?');
    str = str.replace(/özel\s+bir\s+proje\s+gereksiniminiz\s+var\s+mı\??/gi, 'Projeler için teknik standartlarınız nelerdir?');
    str = str.replace(/özel\s+bir\s+gereksiniminiz\s+var\s+mı\??/gi, 'Standartlara uyumunuz nedir?');
    str = str.replace(/ihtiyacınız\s+var\s+mı\??/gi, 'çözümünüz var mı?');
    str = str.replace(/talebinde\s+bulunmak\s+ister\s+misiniz\??/gi, 'talebi oluşturabilir miyim?');
    str = str.replace(/bulunmak\s+ister\s+misiniz\??/gi, 'bulunabilir miyim?');
    str = str.replace(/faydalanmak\s+ister\s+misiniz\??/gi, 'faydalanabilir miyim?');
    str = str.replace(/yararlanmak\s+ister\s+misiniz\??/gi, 'yararlanabilir miyim?');
    if (!str.endsWith('?')) str += '?';
    return str;
  };

  if (apiKey) {
    const systemPrompt = buildSystemPrompt();
    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ];

    for (const modelCandidate of FAST_MODELS) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4500);

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
            temperature: 0.6, // Doğal, zengin ve çeşitli konuşma tonu (tekrarları engeller)
            max_tokens: 750 // Yarım kalmayı ve kelime ortasında kesilmeyi tamamen engeller
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const choice = data?.choices?.[0];
          const rawContent = choice?.message?.content;

          // Asla reasoning/iç ses alanını kullanıcıya gösterme! Yalnızca geçerli Türkçe içerik
          if (rawContent && typeof rawContent === 'string' && !isGarbageOrReasoning(rawContent)) {
            // Eğer yanıt yarım kesilmişse (finish_reason = length ve nokta ile bitmemişse) reddet
            const isCutOff = choice?.finish_reason === 'length' && !/[.!?\n]$/.test(rawContent.trim());
            if (!isCutOff) {
              let cleanText = rawContent.trim();
              let extractedQuestions = [];

              if (cleanText.includes('[SORULAR]')) {
                const parts = cleanText.split('[SORULAR]');
                cleanText = parts[0].trim();
                const qLines = parts[1].split('\n').map(l => l.replace(/^\d+[\.\)\-]\s*/, '').trim()).filter(l => l.length > 3);
                extractedQuestions = qLines.slice(0, 3).map(formatCustomerQuestion);
              }

              if (extractedQuestions.length === 0) {
                extractedQuestions = generateSmartResponseWithQuestions(lastUserMsg).questions.map(formatCustomerQuestion);
              }

              return {
                text: cleanText,
                questions: extractedQuestions
              };
            }
          }
        }
      } catch (e) {
        // Hata durumunda bir sonraki modele geç
      }
    }
  }

  // Model yavaş kalırsa, yarım kalırsa veya saçmalarsa 0ms profesyonel yerel yanıtı ver
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
