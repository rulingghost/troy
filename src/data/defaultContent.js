export const defaultContent = {
  general: {
    siteTitle: 'Alexander Troy Corporate',
    logo: '/logo.png',
    topBannerText: 'Enjoy Your Journey',
    topBannerEnabled: true,
  },
  menus: [
    {
      id: 'kurumsal',
      title: 'Kurumsal',
      path: '/kurumsal',
      submenus: [
        {
          name: 'Kurumsal',
          children: [
            { name: 'Hakkımızda', path: '/kurumsal/hakkimizda' },
            { name: 'Vizyon', path: '/kurumsal/vizyon' },
            { name: 'Misyon', path: '/kurumsal/misyon' }
          ]
        }
      ]
    },
    {
      id: 'alx-mice',
      title: 'Alx MICE',
      path: '/alx-mice',
      submenus: [
        {
          name: 'Kongre & Toplantı',
          children: [
            { name: 'Yurtiçi Kongre', path: '/alx-mice/yurtici-kongre' },
            { name: 'Yurtdışı Kongre', path: '/alx-mice/yurtdisi-kongre' },
            { name: 'Toplantı', path: '/alx-mice/toplanti' }
          ]
        },
        {
          name: 'Sempozyum',
          children: [
            { name: 'Yurtiçi Sempozyum', path: '/alx-mice/yurtici-sempozyum' },
            { name: 'Yurtdışı Sempozyum', path: '/alx-mice/yurtdisi-sempozyum' }
          ]
        }
      ]
    },
    {
      id: 'alx-4-you',
      title: 'Alx 4 You',
      path: '/alx-4-you',
      submenus: [
        {
          name: 'Own Event',
          children: [
            { name: 'Own Event - Yurtiçi', path: '/alx-4-you/own-event-yurtici' },
            { name: 'Own Event - Yurtdışı', path: '/alx-4-you/own-event-yurtdisi' },
            { name: 'Uluslararası Misafir Hizmetleri', path: '/alx-4-you/uluslararasi-misafir-hizmetleri' }
          ]
        },
        {
          name: 'Preceptorship',
          children: [
            { name: 'Yurtiçi Preceptorship', path: '/alx-4-you/preceptorship-yurtici' },
            { name: 'Yurtdışı Preceptorship', path: '/alx-4-you/preceptorship-yurtdisi' }
          ]
        },
        {
          name: 'Kurs & Eğitim',
          children: [
            { name: 'Uygulamalı Kurslar', path: '/alx-4-you/uygulamali-kurslar' },
            { name: 'AI Destekli Kurslar', path: '/alx-4-you/ai-destekli-kurslar' },
            { name: 'VR Destekli Öğrenme', path: '/alx-4-you/vr-destekli-ogrenme' }
          ]
        },
        {
          name: 'Incentive',
          children: [
            { name: 'Motivasyonel Faaliyetler', path: '/alx-4-you/motivasyonel-faaliyetler' },
            { name: 'Lansman Toplantıları', path: '/alx-4-you/lansman-toplantilari' },
            { name: 'Şirket Piknikleri', path: '/alx-4-you/sirket-piknikleri' }
          ]
        }
      ]
    },
    {
      id: 'alx-digi',
      title: 'Alx Digi',
      path: '/alx-digi',
      submenus: [
        {
          name: 'Dijital Çözümler',
          children: [
            { name: 'Online Sağlık Danışmanlık (Doktorum Yanımda)', path: '/alx-digi/online-saglik-danismanlik' },
            { name: 'Online Sağlık Asistan (Beynex)', path: '/alx-digi/online-saglik-asistan' },
            { name: 'AI Sağlık Hizmetleri (Niceye)', path: '/alx-digi/ai-saglik-hizmetleri' },
            { name: 'Online Canlı Yayın (Niceye)', path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin' }
          ]
        }
      ]
    },
    {
      id: 'alx-need',
      title: 'Alx Need',
      path: '/alx-need',
      submenus: [
        {
          name: 'Medikal & İletişim',
          children: [
            { name: 'Medikal & Bilimsel (Gama CRO)', path: '/alx-need/medikal-bilimsel' },
            { name: 'İstatistik & Çeviri (Gama CRO)', path: '/alx-need/istatistik-ceviri' },
            { name: 'Omnichannel (Niceye)', path: '/alx-need/omnichannel' }
          ]
        }
      ]
    }
  ],
  hero: {
    slides: [
      {
        id: 1,
        image: '/slide1.png',
        badge: '🤖 Yapay Zeka & MICE Teknolojileri',
        title: 'Geleceğin AI Destekli Etkinlik & Kongre Yönetimi',
        desc: 'Yapay zeka algoritmaları, akıllı dijital katılımcı deneyimleri ve hibrit platformlarla organizasyonlarınızı kusursuz bir yolculuğa dönüştürüyoruz.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Hizmetleri Keşfet',
        primaryCtaLink: '#services',
        secondaryCta: 'Bize Ulaşın',
        secondaryCtaLink: '/iletisim'
      },
      {
        id: 2,
        image: '/slide2.png',
        badge: '💡 Alx Digi & Medikal Teknoloji',
        title: 'Tele-Sağlık & Sanal Gerçeklik (VR) Çözümleri',
        desc: 'Giyilebilir teknolojiler, yapay zeka destekli klinik eğitim simülasyonları ve interaktif sağlık platformları ile sınırları kaldırın.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Dijital Çözümler',
        primaryCtaLink: '/alx-digi',
        secondaryCta: 'İletişime Geçin',
        secondaryCtaLink: '/iletisim'
      },
      {
        id: 3,
        image: '/slide3.png',
        badge: '🌐 Omnichannel & Kurumsal Strateji',
        title: 'Uçtan Uca Akıllı Veri & Canlı Yayın Yönetimi',
        desc: '360° medikal iletişim, canlı dijital yayınlar ve yapay zeka destekli çeviri çözümleriyle her adımda yenilikçi iş ortağınızız.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Sürecimizi İnceleyin',
        primaryCtaLink: '#journey',
        secondaryCta: 'Bizimle Görüşün',
        secondaryCtaLink: '/iletisim'
      }
    ]
  },
  about: {
    subtitle: 'Biz Kimiz?',
    title: 'Geleceğin Çözümlerini Bugünden Tasarlıyoruz',
    desc1: 'İhtiyaçlarınıza özel, bilimsel temelli ve özgün yaklaşımlarla, ulusal ve uluslararası çerçevede 360 derece stratejik çözümler üreten güvenilir ve sürdürülebilir bir iş ortağıyız.',
    desc2: 'Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden "stratejik birer yolculuk" olduğuna inanıyoruz.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    ctaText: 'Hakkımızda Daha Fazla',
    ctaLink: '/kurumsal/hakkimizda'
  },
  services: {
    title: 'Hizmetlerimiz',
    items: [
      {
        id: 1,
        title: 'Alx MICE',
        subtitle: 'Etkinlik, Kongre & Sempozyum',
        desc: 'Yurt içi ve yurt dışı kongre, toplantı, sempozyum hizmetleri (Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
        link: '/alx-mice',
        bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 2,
        title: 'Alx 4 You',
        subtitle: 'Butik & Kurumsal Çözümler',
        desc: 'Size özel planlanan yurt içi ve yurt dışı toplantı, preceptorship, kurs ve seminer, incentive hizmetleri (Tanıtım yönetmeliğine uygun program, kurum iletişimi, toplantı altyapı hizmeti, Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
        link: '/alx-4-you',
        bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 3,
        title: 'Alx Digi',
        subtitle: 'Dijital & AI Sağlık Teknolojileri',
        desc: 'Doktorum Yanımda, Beynex ve Niceye altyapılarıyla online sağlık danışmanlık, AI asistan, giyilebilir teknoloji ve canlı yayın platformları.',
        link: '/alx-digi',
        bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 4,
        title: 'Alx Need',
        subtitle: 'Medikal & Omnichannel Yönetimi',
        desc: 'Gama CRO ve Niceye altyapılarıyla medikal & bilimsel hizmetler, biyo-istatistik, tıbbi çeviri ve omnichannel marka yönetimi.',
        link: '/alx-need',
        bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  journey: {
    title: 'Alx 360° Hizmet Süreci',
    subtitle: 'Projelerinizi başarıya ulaştıran uçtan uca yöntemimiz',
    steps: [
      { id: 1, title: 'İhtiyaç Analizi', desc: 'Gereksinimleri anlama', icon: 'Search' },
      { id: 2, title: 'Strateji', desc: 'Omnichannel planlama', icon: 'Target' },
      { id: 3, title: 'İçerik & Tasarım', desc: 'Platform & görsel üretimi', icon: 'PenTool' },
      { id: 4, title: 'Uygulama', desc: 'Etkinlik & canlı yayın', icon: 'Rocket' },
      { id: 5, title: 'Ölçümleme', desc: 'Analiz ve sürdürülebilirlik', icon: 'BarChart2' }
    ]
  },
  testimonials: {
    title: 'Müşteri Yorumları',
    items: [
      {
        id: 1,
        name: 'Ahmet Yılmaz',
        role: 'Pazarlama Direktörü, MedTech A.Ş.',
        content: 'Alx ile gerçekleştirdiğimiz ürün lansmanı beklentilerimizin çok ötesindeydi. Özellikle dijital entegrasyonlar katılımcılarımızı büyüledi.',
        image: 'https://i.pravatar.cc/150?img=11'
      },
      {
        id: 2,
        name: 'Ayşe Demir',
        role: 'Klinik Araştırmalar Yöneticisi',
        content: 'Medikal çeviri ve canlı yayın hizmetlerindeki profesyonellikleri sayesinde uluslararası kongremizi sıfır hata ile tamamladık.',
        image: 'https://i.pravatar.cc/150?img=5'
      },
      {
        id: 3,
        name: 'Dr. Can Kaya',
        role: 'Başhekim, Özel Sağlık Grubu',
        content: 'Tele-sağlık ve AI destekli eğitim çözümlerinde Türkiye\'deki en yenilikçi vizyona sahipler. İletişimimiz çok güçlendi.',
        image: 'https://i.pravatar.cc/150?img=8'
      },
      {
        id: 4,
        name: 'Elif Şahin',
        role: 'Etkinlik Yöneticisi',
        content: 'Tüm organizasyon sürecinde yanımızda olmaları ve proaktif çözümleri, kriz anlarını bile sorunsuz atlatmamızı sağladı.',
        image: 'https://i.pravatar.cc/150?img=9'
      }
    ]
  },
  references: {
    title: 'Çözüm Ortaklarımız',
    items: [
      { id: 1, name: 'GSK', logo: '' },
      { id: 2, name: 'Kyowa Kirin', logo: '' },
      { id: 3, name: 'Teva', logo: '' },
      { id: 4, name: 'Novo Nordisk', logo: '' },
      { id: 5, name: 'Janssen', logo: '' },
      { id: 6, name: 'Bristol-Myers', logo: '' },
      { id: 7, name: 'Lilly', logo: '' },
      { id: 8, name: 'Johnson & Johnson', logo: '' }
    ]
  },
  contact: {
    title: 'Bizimle İletişime Geçin',
    subtitle: 'İletişim & Destek',
    desc: 'Etkinlik, kongre, medikal çeviri ve yapay zeka dijital çözümlerimiz için bize dilediğiniz kanaldan ulaşabilirsiniz.',
    phone: '+90 (212) 555 01 23',
    whatsapp: '+90 (555) 012 34 56',
    whatsappText: 'Merhaba, Alexander Troy hizmetleri hakkında bilgi almak istiyorum.',
    email: 'info@alx.com.tr',
    address: 'Levent, Büyükdere Cd. No:195, Şişli / İstanbul',
    instagram: 'https://instagram.com',
    wechat: '#',
    copyright: 'Alexander Troy Corporate. Tüm hakları saklıdır. — Enjoy Your Journey'
  },
  security: {
    adminPassword: 'admin'
  },

  // ==========================================
  // TÜM SAYFALARIN DİNAMİK İÇERİK ŞEMASI (PAGES)
  // ==========================================
  pages: {
    // 1. Kurumsal Alt Sayfaları (Hakkımızda, Vizyon, Misyon)
    corporate: {
      about: {
        title: 'Hakkımızda',
        lead: 'Alx Troy olarak; kurumsal etkinliklerin sadece bir organizasyon olmanın ötesinde, şirket kültürünüzü besleyen ve hedeflerinize hizmet eden "stratejik birer yolculuk" olduğuna inanıyoruz.',
        desc1: 'Biz; her kurumun kendine özgü dinamiklerine odaklanan, projelere bilimsel ve butik-kreatif çözümlerle yaklaşan yeni nesil bir MICE partneriyiz.',
        mottoQuote: 'Enjoy Your Journey',
        mottoDesc: 'mottomuzla, planlama aşamasından etkinlik sonrasına kadar tüm süreci sizin için keyifli bir deneyime dönüştürüyoruz. Ve sadece bir tedarikçi değil, taleplerinize katma değer sağlayan stratejik bir ortak vizyonuyla yaklaşıyoruz.',
        statsTitle: 'Peki Biz Kim miyiz?',
        statsBullets: [
          '25 yıldır,',
          'Ulusal ve Uluslararası çerçevede,',
          'Güvenilir & Sürdürülebilir iş paydaşı sorumluluğuyla hareket eden,',
          'Amerika merkezli bir organizasyon...'
        ],
        capabilitiesTitle: 'Sizin için neler mi yapabiliriz?',
        capabilities: [
          { icon: '💻', title: 'MICE & Kongre Hizmetleri', desc: 'Ulaşım (Uçak bileti), konaklama, VIP transfer, salon & teknik altyapı, gala ve profesyonel rehberlik.' },
          { icon: '✈️', title: 'Own Event & Özel Destinasyonlar', desc: 'Yurt içi (Kapadokya, Kars vb.) ve yurt dışı (İtalya, İspanya vb.) butik seyahat ve organizasyonlar.' },
          { icon: '🩺', title: 'Preceptorship & Klinik Eğitimler', desc: 'Bronkoskopi, TAVİ, Bifürkasyon alanlarında klinik gözlem programları ve uygulamalı kurslar.' },
          { icon: '🤖', title: 'AI Destekli Sağlık & Yayın', desc: 'Online sağlık danışmanlığı, tele-tıp, giyilebilir teknoloji ve canlı yayın platformları.' },
          { icon: '📊', title: 'Medikal & Omnichannel Yönetimi', desc: 'Medikal yazım, biyo-istatistik, tıbbi çeviri ve omnichannel iletişim stratejileri.' }
        ]
      },
      vision: {
        title: 'Stratejik Vizyonumuz',
        quote: 'Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten & fark yaratan stratejik iş ortağı olmak',
        desc: 'Alx Troy olarak, sağlık ve kurumsal etkinlik sektörlerinde yenilikçi, dinamik ve geleceğe yön veren bir vizyon benimsiyoruz. Yalnızca mevcut talepleri karşılamakla kalmayıp, sektörün henüz fark edilmemiş ihtiyaçlarını önceden tespit ederek proaktif çözümler geliştiriyoruz.',
        bullets: [
          'Geleceğin sağlık & MICE teknolojilerini bugünden kurgulama',
          'Stratejik vizyon ile katma değer yaratan ortaklık anlayışı',
          'Bilimsel ve yenilikçi metotlarla sektöre öncülük etme'
        ]
      },
      mission: {
        title: 'Misyonumuz',
        quote: 'Lokal & global çerçevede sunduğu bilimsel temelli butik çözümleriyle, sürdürülebilir & güvenilir bir paydaştır.',
        desc: 'Her kurumun ve projenin özgün dinamiklerini merkeze alarak, ulusal ve uluslararası ölçekte bilimsel, sürdürülebilir ve yüksek kalite standartlarında hizmet sunmayı misyon ediniyoruz.',
        bullets: [
          'Lokal ve global pazarlarda sürdürülebilir iş paydaşlığı',
          'Her projeye özel butik ve bilimsel temelli yaklaşım',
          'Güvenilirlik ve operasyonel mükemmellik'
        ]
      }
    },

    // 2. Kategori Genel Sayfaları (Overview Pages: /kurumsal, /alx-mice, /alx-4-you, /alx-digi, /alx-need)
    categoryOverviews: {
      'kurumsal': {
        title: 'Kurumsal',
        badge: 'Alexander Troy Kurumsal',
        tagline: 'Enjoy Your Journey',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
        description: 'Alexander Troy; kurumsal etkinliklerin ötesinde şirket kültürünüzü besleyen ve hedeflerinize hizmet eden stratejik bir yol arkadaşıdır. 25 yılı aşkın tecrübemiz ve Amerika merkezli uluslararası gücümüzle yanınızdayız.',
        stats: [
          { value: '25+', label: 'Yıllık Deneyim' },
          { value: 'USA', label: 'Merkezli Ağ' },
          { value: '%100', label: 'Müşteri Odaklı' },
          { value: '360°', label: 'Stratejik Ortaklık' }
        ],
        groups: [
          {
            groupTitle: 'Kurumsal Yapımız & Değerlerimiz',
            groupDesc: 'Geleceğin kurumsal etkinlik ve iletişim standartlarını kurgulayan temel taşlarımız.',
            items: [
              {
                name: 'Hakkımızda',
                path: '/kurumsal/hakkimizda',
                tag: 'Kurumsal Kimlik',
                shortDesc: 'Biz kimiz? 25 yıldır ulusal ve uluslararası çerçevede güvenilir ve sürdürülebilir iş paydaşı sorumluluğuyla hareket eden Amerika merkezli organizasyonel yapımız.',
                highlights: ['25 yıllık sektörel birikim', 'Amerika merkezli global yapı', 'Stratejik partnerlik anlayışı']
              },
              {
                name: 'Vizyon',
                path: '/kurumsal/vizyon',
                tag: 'Stratejik Vizyon',
                shortDesc: 'Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten & fark yaratan lider stratejik iş ortağı olmak.',
                highlights: ['Öngörülü ve proaktif yaklaşım', 'Sektörel ihtiyaçları kurgulama', 'Bilimsel temelli metodoloji']
              },
              {
                name: 'Misyon',
                path: '/kurumsal/misyon',
                tag: 'Temel Misyon',
                shortDesc: 'Lokal & global çerçevede sunduğumuz bilimsel temelli butik çözümlerle sürdürülebilir & güvenilir bir paydaş olma misyonu.',
                highlights: ['Butik ve özgün çözümler', 'Lokal & global standartlar', 'Sürdürülebilir paydaşlık']
              }
            ]
          }
        ],
        features: [
          { title: 'Güvenilir İş Paydaşı', desc: 'Uçtan uca şeffaf ve sürdürülebilir operasyonel yaklaşım.' },
          { title: 'Global Vizyon', desc: 'Amerika merkezli altyapı ve uluslararası erişim gücü.' },
          { title: 'Butik Çözümler', desc: 'Kurumunuzun özgün dinamiklerine özel kurgulanan stratejiler.' }
        ]
      },

      'alx-mice': {
        title: 'Alx MICE',
        badge: 'Etkinlik, Kongre & Sempozyum',
        tagline: 'Kusursuz Kongre & Etkinlik Yönetimi',
        heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920',
        description: 'Yurt içi ve yurt dışı kongre, toplantı ve sempozyum süreçlerinizi; uçak bileti transferinden konaklamaya, gala organizasyonundan rehberlik hizmetlerine kadar 360° yönetiyoruz.',
        stats: [
          { value: '500+', label: 'Kongre & Etkinlik' },
          { value: '50+', label: 'Ülke Ağı' },
          { value: '7/24', label: 'Operasyon Destek' },
          { value: '360°', label: 'Uçtan Uca Hizmet' }
        ],
        groups: [
          {
            groupTitle: 'Kongre & Toplantı Çözümleri',
            groupDesc: 'Ulusal ve uluslararası tıbbi, bilimsel ve kurumsal kongre organizasyonları.',
            items: [
              {
                name: 'Yurtiçi Kongre',
                path: '/alx-mice/yurtici-kongre',
                tag: 'Ulusal Kongreler',
                shortDesc: 'Türkiye genelinde kardiyoloji, tıp ve medikal branşlarda gerçekleşen ulusal kongrelerin organizasyonu ve delegasyon yönetimi.',
                highlights: ['Lokal konaklama & transfer', 'Kayıt ve karşılama altyapısı', 'Bütçe & mevzuat yönetimi']
              },
              {
                name: 'Yurtdışı Kongre',
                path: '/alx-mice/yurtdisi-kongre',
                tag: 'Uluslararası Etkinlik',
                shortDesc: 'ESC Congress gibi dünya çapındaki prestijli tıp ve kardiyoloji kongrelerine eksiksiz katılım ve operasyon desteği.',
                highlights: ['Uluslararası uçak & konaklama', 'Vize & lojistik takibi', 'Profesyonel rehberlik']
              },
              {
                name: 'Toplantı',
                path: '/alx-mice/toplanti',
                tag: 'Kurumsal Toplantı',
                shortDesc: 'Şirket içi strateji toplantıları, Danışma Kurulu (Advisory Board) ve özel lansman buluşmalarının butik planlaması.',
                highlights: ['VIP transfer & ağırlama', 'Teknik ses/ışık & yayın altyapısı', 'Özel konsept mekan seçimi']
              }
            ]
          },
          {
            groupTitle: 'Sempozyum Yönetimi',
            groupDesc: 'Uzmanlık alanlarına özel bilimsel ve akademik sempozyum organizasyonları.',
            items: [
              {
                name: 'Yurtiçi Sempozyum',
                path: '/alx-mice/yurtici-sempozyum',
                tag: 'Bilimsel Sempozyum',
                shortDesc: 'Nörobilim, Solunum ve bölgesel tıbbi uzmanlık zirvelerinin yurt içindeki kusursuz planlanması ve yönetimi.',
                highlights: ['Akademik içerik ve konuşmacı yönetimi', 'Afiş & dijital bildiriler', 'Özel gala organizasyonları']
              },
              {
                name: 'Yurtdışı Sempozyum',
                path: '/alx-mice/yurtdisi-sempozyum',
                tag: 'Global Zirveler',
                shortDesc: 'Dünya ölçeğindeki Akciğer Sağlığı ve tıp sempozyumlarına katılım, konaklama ve 360° grup operasyonu.',
                highlights: ['Global koordinasyon', 'Tur & kültür programları', '7/24 rehber ve saha ekibi']
              }
            ]
          }
        ],
        features: [
          { title: 'Uçtan Uca Lojistik', desc: 'Uçak bileti, konaklama, VIP transfer ve otel yönetimi.' },
          { title: 'Zamanında Operasyon', desc: 'Dakik ve hatasız akış yönetimi ile tam zamanında hizmet.' },
          { title: 'Rehberlik & Tur', desc: 'Organizasyon boyunca uzman kokartlı rehberlik ve özel geziler.' }
        ]
      },

      'alx-4-you': {
        title: 'Alx 4 You',
        badge: 'Butik Etkinlik, Eğitim & Incentive',
        tagline: 'Size Özel Deneyimsel Çözümler',
        heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920',
        description: 'Kurumunuza özel hazırlanan yurt içi ve yurt dışı Own Event konseptleri, Preceptorship gözlem programları, AI/VR destekli uygulamalı kurslar ve motivasyonel organizasyonlar.',
        stats: [
          { value: 'Butik', label: 'İhtiyaca Özel' },
          { value: 'Mevzuat', label: 'Tam Uyumluluk' },
          { value: 'AI/VR', label: 'Gelişmiş Teknolojiler' },
          { value: 'Global', label: 'Destinasyon Ağı' }
        ],
        groups: [
          {
            groupTitle: 'Own Event (Özel Destinasyon Organizasyonları)',
            groupDesc: 'Bölgeye özgü simge ikonları ve kültürel konseptleriyle tasarlanan kurumsal seyahatler.',
            items: [
              {
                name: 'Yurt İçi Seyahat ve Organizasyonlar',
                path: '/alx-4-you/own-event-yurtici',
                tag: 'Yurt İçi Destinasyon',
                shortDesc: 'Kurumsal firmaların yurt içindeki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını uçtan uca planlıyor ve yönetiyoruz.',
                highlights: ['Kurumsal toplantı & lansmanlar', 'Eğitim, bayi & motivasyon gezileri', 'Konaklama, ulaşım & transfer organizasyonları']
              },
              {
                name: 'Yurtdışı Seyahat ve Organizasyonlar',
                path: '/alx-4-you/own-event-yurtdisi',
                tag: 'Yurtdışı Destinasyon',
                shortDesc: 'Kurumsal firmaların yurt dışındaki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını dünyanın her noktasında planlıyor ve yönetiyoruz.',
                highlights: ['Dünya genelinde organizasyon & seyahat', 'Uluslararası toplantı, kongre & incentive', 'Lokasyondan bağımsız tek merkezden yönetim']
              },
              {
                name: 'Uluslararası Misafir Hizmetleri',
                path: '/alx-4-you/uluslararasi-misafir-hizmetleri',
                tag: 'VIP Misafir & Ağırlama',
                shortDesc: 'Yurt dışından gelen iş ortaklarınız, müşterileriniz ve VIP misafirleriniz için Türkiye’de konaklama, VIP transfer ve organizasyon yönetimi.',
                highlights: ['Havalimanı VIP karşılama & transfer', 'Lüks konaklama, restoran & davet organizasyonu', 'Kurumunuza özel 360° misafir ağırlama']
              }
            ]
          },
          {
            groupTitle: 'Preceptorship (Klinik Gözlem Programları)',
            groupDesc: 'Hekimler ve tıbbi uzmanlar için uygulamalı ve uluslararası klinik gözlem imkanları.',
            items: [
              {
                name: 'Yurtiçi Preceptorship',
                path: '/alx-4-you/preceptorship-yurtici',
                tag: 'Yurtiçi Gözlem',
                shortDesc: 'Bronkoskopi, TAVİ, Bifürkasyon ve Parkinson Pil Cerrahisi alanlarında Türkiye’nin öncü kliniklerinde gözlem ve pratik.',
                highlights: ['Canlı vaka takibi', 'Uzman hocalar ile workshop', 'Mevzuata uygun altyapı']
              },
              {
                name: 'Yurtdışı Preceptorship',
                path: '/alx-4-you/preceptorship-yurtdisi',
                tag: 'Global Preceptorship',
                shortDesc: 'Uluslararası tıp merkezlerinde Bronkoskopi, EBUS, TAVİ ve Bifürkasyon deneyim ve klinik gözlem programları.',
                highlights: ['Global hastane iş birlikleri', 'İleri cerrahi gözlemleri', 'Sertifikalı katılım']
              }
            ]
          },
          {
            groupTitle: 'Kurs & Eğitim Modülleri',
            groupDesc: 'Interaktif ve yeni nesil teknolojilerle desteklenmiş yetkinlik artırıcı eğitimler.',
            items: [
              {
                name: 'Uygulamalı Kurslar',
                path: '/alx-4-you/uygulamali-kurslar',
                tag: 'Interaktif Atölye',
                shortDesc: 'Paydaşların gelişimini fiziksel maketler, simülatörler ve vaka çalışmalarıyla pratik hale getiren kurslar.',
                highlights: ['Birebir pratik yapma imkanı', 'Uzman eğitmen kadrosu', 'Interaktif grup dinamikleri']
              },
              {
                name: 'AI Destekli Kurslar',
                path: '/alx-4-you/ai-destekli-kurslar',
                tag: 'Yapay Zeka',
                shortDesc: 'Kişiselleştirilmiş öğrenme patikaları ve yapay zeka senaryoları ile zenginleştirilmiş içerikler.',
                highlights: ['Akıllı senaryo simülasyonu', 'Veri odaklı başarı takibi', 'Yeni nesil eğitim materyalleri']
              },
              {
                name: 'VR Destekli Öğrenme',
                path: '/alx-4-you/vr-destekli-ogrenme',
                tag: 'Sanal Gerçeklik',
                shortDesc: 'VR gözlükleri ile klinik ortamı, ameliyathaneyi ve kompleks prosedürleri sanal ortamda deneyimleme.',
                highlights: ['3D Ameliyathane deneyimi', 'Sanal ortamda vaka pratikleri', 'Yüksek akılda kalıcılık']
              }
            ]
          },
          {
            groupTitle: 'Incentive & Kurumsal Motivasyon',
            groupDesc: 'Takım ruhunu pekiştiren ve şirket bağlarını güçlendiren özel etkinlikler.',
            items: [
              {
                name: 'Motivasyonel Faaliyetler',
                path: '/alx-4-you/motivasyonel-faaliyetler',
                tag: 'Takım Ruhu',
                shortDesc: 'Indoor ve Outdoor dinamik aktiviteler, takım oyunları ve yaratıcı atölyeler.',
                highlights: ['Takım iletişimi güçlendirme', 'Stres azaltıcı eğlenceli kurgular', 'Farklı mekan seçenekleri']
              },
              {
                name: 'Lansman Toplantıları',
                path: '/alx-4-you/lansman-toplantilari',
                tag: 'Ürün & Marka',
                shortDesc: 'Yeni ürün, hizmet veya stratejilerin paydaşlara etkileyici şekilde tanıtıldığı özel lansmanlar.',
                highlights: ['Sahne ve görsel şovlar', 'Basın & davetli koordinasyonu', 'Yüksek prestijli prodüksiyon']
              },
              {
                name: 'Şirket Piknikleri',
                path: '/alx-4-you/sirket-piknikleri',
                tag: 'Açık Hava',
                shortDesc: 'Çalışanların ve ailelerinin doğayla buluştuğu zengin açık hava aktiviteleri ve barbekü konseptleri.',
                highlights: ['Doğal açık hava alanları', 'Çocuk ve yetişkin aktiviteleri', 'Gurme catering hizmeti']
              }
            ]
          }
        ],
        features: [
          { title: 'Kişiye & Kuruma Özel', desc: 'Her kuruma özgü butik ve esnek planlama.' },
          { title: 'Yasal Mevzuat Uyumu', desc: 'Sağlık ve tanıtım yönetmeliklerine tam uyumluluk.' },
          { title: 'AI & VR Deneyimi', desc: 'En yeni dijital simülasyon teknolojileri.' }
        ]
      },

      'alx-digi': {
        title: 'Alx Digi',
        badge: 'Dijital Sağlık & AI Teknolojileri',
        tagline: 'Sağlık Teknolojilerinde Dijital Dönüşüm',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920',
        description: 'Online sağlık danışmanlık platformları, AI destekli klinik asistanlar, yapay zeka tabanlı tanı araçları ve giyilebilir teknolojilerle canlı yayın altyapıları.',
        stats: [
          { value: 'AI', label: 'Yapay Zeka Destekli' },
          { value: '7/24', label: 'Online Danışmanlık' },
          { value: 'IoT', label: 'Giyilebilir Teknoloji' },
          { value: '%99.9', label: 'Erişilebilirlik' }
        ],
        groups: [
          {
            groupTitle: 'Dijital Sağlık & Tele-Tıp Ekosistemi',
            groupDesc: 'Niceye, Doktorum Yanımda ve Beynex iş birliğiyle sunulan yeni nesil teknolojik sağlık çözümleri.',
            items: [
              {
                name: 'Online Sağlık Danışmanlık',
                path: '/alx-digi/online-saglik-danismanlik',
                tag: 'Doktorum Yanımda',
                shortDesc: 'Hastaların hekimlerle 7/24 görüntülü görüşme yapabildiği güvenli tele-sağlık platformu.',
                highlights: ['Uçtan uca şifreli görüntülü görüşme', 'E-Reçete & rapor paylaşımı', '7/24 hekim erişimi']
              },
              {
                name: 'Online Sağlık Asistan',
                path: '/alx-digi/online-saglik-asistan',
                tag: 'Beynex',
                shortDesc: 'Yapay zeka tabanlı bilişsel sağlık takip sistemi ve kişiselleştirilmiş zihin egzersizleri.',
                highlights: ['Beyin sağlığı ve bellek takibi', 'Klinik ölçekli bilişsel testler', 'Mobil asistan desteği']
              },
              {
                name: 'AI Sağlık Hizmetleri',
                path: '/alx-digi/ai-saglik-hizmetleri',
                tag: 'Niceye Vidizayn',
                shortDesc: 'Yapay zeka ile medikal görselleştirme, tanı destek araçları ve akıllı sağlık algoritmaları.',
                highlights: ['Yapay zeka destekli video/görsel üretimi', 'Otomatik tanı öneri modülleri', 'Medikal içerik optimizasyonu']
              },
              {
                name: 'Giyilebilir Teknoloji & Canlı Yayın',
                path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin',
                tag: 'Niceye Vistream',
                shortDesc: 'Giyilebilir akıllı gözlükler ve kameralarla ameliyathaneden ve sahadan kesintisiz canlı yayın.',
                highlights: ['Düşük gecikmeli 4K cerrahi yayın', 'Giyilebilir medikal sensör entegrasyonu', 'İnteraktif uzaktan soru-cevap']
              }
            ]
          }
        ],
        features: [
          { title: 'Güvenli Altyapı', desc: 'KVKK ve HIPAA uyumlu şifrelenmiş veri iletimi.' },
          { title: 'Akıllı Yapay Zeka', desc: 'Klinik süreçleri hızlandıran akıllı algoritmalar.' },
          { title: 'Kesintisiz Canlı Yayın', desc: 'Ameliyathane ve kongreler için düşük gecikmeli yayın.' }
        ]
      },

      'alx-need': {
        title: 'Alx Need',
        badge: 'Medikal İletişim, Çeviri & Omnichannel',
        tagline: 'Stratejik İletişim & Medikal Uzmanlık',
        heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920',
        description: 'Gama CRO ve Niceye altyapısıyla medikal yazım, biyo-istatistik, tıbbi çeviri ve omnichannel marka yönetimi ile sağlık sektöründe 360° stratejik iş ortaklığı.',
        stats: [
          { value: '360°', label: 'Omnichannel Strateji' },
          { value: 'PhD/MD', label: 'Uzman Bilimsel Kadro' },
          { value: '%100', label: 'Medikal Hassasiyet' },
          { value: 'Global', label: 'Yayın Standartları' }
        ],
        groups: [
          {
            groupTitle: 'Medikal & Bilimsel Çözümler',
            groupDesc: 'Bilimsel araştırmalar, klinik çalışma raporlamaları ve omnichannel sağlık iletişimi.',
            items: [
              {
                name: 'Medikal & Bilimsel Danışmanlık',
                path: '/alx-need/medikal-bilimsel',
                tag: 'Gama CRO',
                shortDesc: 'Klinik çalışma protokolleri, medikal yazım ve bilimsel danışma kurulu (Advisory Board) yönetimi.',
                highlights: ['Klinik araştırma raporları', 'Makale ve poster hazırlığı', 'Regülasyon uyumlu medikal yazım']
              },
              {
                name: 'İstatistik & Tıbbi Çeviri',
                path: '/alx-need/istatistik-ceviri',
                tag: 'Gama CRO Bioinformatics',
                shortDesc: 'Biyo-istatistiksel veri analizleri, klinik veri madenciliği ve hekim onaylı medikal çeviri.',
                highlights: ['İleri biyo-istatistik modelleme', 'Noter/Yeminli tıbbi çeviri', 'Terminolojiye tam uyum']
              },
              {
                name: 'Omnichannel Marka Yönetimi',
                path: '/alx-need/omnichannel',
                tag: 'Niceye IT',
                shortDesc: 'Hekimlere, eczacılara ve hastalara yönelik çok kanallı (Omnichannel) dijital iletişim stratejileri.',
                highlights: ['360° Dijital pazarlama', 'CRM ve e-posta otomasyonu', 'Ölçülebilir marka büyümesi']
              }
            ]
          }
        ],
        features: [
          { title: 'Bilimsel Güvenilirlik', desc: 'Akademik hekim ve uzman biyo-istatistikçi denetimi.' },
          { title: 'Çok Kanallı Entegrasyon', desc: 'Dijital, basılı ve etkinlik kanallarının senkronize yönetimi.' },
          { title: 'Uluslararası Standartlar', desc: 'ICH-GCP ve global sağlık kılavuzlarına uygunluk.' }
        ]
      }
    },

    // 3. İletişim Sayfası İçerikleri
    contactPage: {
      heroBadge: 'Bize Ulaşın',
      heroTitle: 'Geleceğin Çözümleri İçin İletişime Geçin',
      heroLead: 'Alexander Troy; MICE, 4 You, Digi ve Need çözümleri ile iş ortaklarına uçtan uca hizmet sunar. Sorularınız ve proje talepleriniz için bize ulaşın.',
      quickBadges: [
        { label: 'Hızlı Destek' },
        { label: 'Levent / İstanbul Headquarters' },
        { label: 'Gizlilik & Kalite Garantisi' }
      ],
      faqs: [
        {
          q: "Alexander Troy temsilcisiyle ne zaman iletişime geçebilirim?",
          a: "Hafta içi 09:00 - 18:00 saatleri arasında telefon ve e-posta kanallarımız aktiftir. WhatsApp canlı destek hattımız üzerinden 7/24 mesaj iletebilirsiniz."
        },
        {
          q: "MICE ve Etkinlik organizasyonu talepleri için ne kadar önceden başvurmalıyız?",
          a: "Ulusal ve uluslararası kongre veya incentive etkinlik planlamaları için organizasyon tarihinden en az 2-4 hafta önce iletişime geçmeniz önerilir."
        },
        {
          q: "Medikal çeviri ve dijital teknoloji projeleri nasıl yürütülür?",
          a: "Talebinizi ilettikten sonra uzman medikal & teknik ekibimiz 24 saat içerisinde tarafınızla iletişime geçerek gereksinim analizi ve projelendirme sürecini başlatır."
        },
        {
          q: "Ofisinizi ziyaret etmek için randevu almak gerekli midir?",
          a: "Evet, sizleri en iyi şekilde ağırlayabilmek ve ilgili departman sorumlularımızla buluşturabilmek için önceden randevu oluşturmanızı rica ederiz."
        }
      ]
    }
  }
};
