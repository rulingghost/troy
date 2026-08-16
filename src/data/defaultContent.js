export const defaultContentTR = {
  general: {
    siteTitle: 'Alexander Troy Corporate',
    logo: '/logo.png',
    topBannerText: 'Enjoy Your Journey',
    topBannerEnabled: true,
    headerCtaText: 'Bize Ulaşın',
    headerCtaLink: '/iletisim',
    floatingButtons: {
      enabled: true,
      whatsapp: true,
      phone: true,
      scrollTop: true,
      bubbleText: 'Size nasıl yardımcı olabiliriz?'
    }
  },
  seo: {
    metaTitle: 'Alexander Troy | MICE, Preceptorship & Medikal Çözümler',
    metaDescription: 'Yurt içi ve yurt dışı kongre, sempozyum, kurumsal seyahat, klinik preceptorship ve yapay zeka destekli dijital sağlık çözümleri.',
    keywords: 'alexander troy, mice, kongre, sempozyum, kurumsal seyahat, preceptorship, medikal ceviri, yapay zeka',
    favicon: '/logo.png',
    ogImage: '/hero-slide-1.jpg',
    googleAnalyticsId: ''
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
  pages: {
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
    },
    subServicesData: {
      congressEvents: [
        {
          category: 'yurtici-kongre',
          title: '42. Ulusal Kardiyoloji Kongresi',
          org: 'Türk Kardiyoloji Derneği (TKD)',
          desc: 'Ulusal alanda kardiyoloji alanındaki en güncel bilimsel gelişmeler, vakalar ve uzman panelleri.',
          link: 'https://tkd.org.tr/2026kongre/',
          badge: 'Yurtiçi Kongre'
        },
        {
          category: 'yurtdisi-kongre',
          title: 'European Society of Cardiology (ESC Congress)',
          org: 'European Society of Cardiology',
          desc: 'Dünyanın en prestijli uluslararası kardiyoloji kongrelerinden biri olan ESC Congress buluşması.',
          link: 'https://www.escardio.org/events/congresses/esc-congress/',
          badge: 'Yurtdışı Kongre'
        },
        {
          category: 'yurtici-sempozyum',
          title: '3. Nörobilim Sempozyumu',
          org: 'Türkiye Nöroloji Derneği',
          desc: 'Beyin araştırmaları ve klinik nörobilim alanındaki yenilikçi çalışmalar ve akademisyen buluşmaları.',
          link: 'https://www.tndnorobilim.org/',
          badge: 'Yurtiçi Sempozyum'
        },
        {
          category: 'yurtici-sempozyum',
          title: '11. Solunum Zirvesi',
          org: 'Türkiye Solunum Araştırmaları Derneği',
          desc: 'Göğüs hastalıkları ve solunum sağlığındaki güncel yaklaşımlar ve akademik sunumlar.',
          link: 'https://www.solunumzirvesi.org/',
          badge: 'Yurtiçi Sempozyum'
        },
        {
          category: 'yurtdisi-sempozyum',
          title: 'World Conference on Lung Health',
          org: 'The Union',
          desc: 'Akciğer sağlığı ve küresel tıp alanındaki en büyük uluslararası sempozyum ve konferans.',
          link: 'https://worldlunghealth.org/symposia/',
          badge: 'Yurtdışı Sempozyum'
        }
      ],
      destinations: {
        yurtdisi: [
          { name: 'İspanya', landmark: 'Sagrada Familia & Madrid Plaza', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=600', icon: '🇪🇸' },
          { name: 'İtalya', landmark: 'Kolezyum & Venedik Kanalları', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600', icon: '🇮🇹' },
          { name: 'Cezayir', landmark: 'Şehitler Anıtı & Kasbah Sokakları', image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=600', icon: '🇩🇿' },
          { name: 'Mısır', landmark: 'Gize Piramitleri & Kahire Müzesi', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600', icon: '🇪🇬' },
          { name: 'Arnavutluk', landmark: 'Tiran İskender Bey Meydanı & Berat', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600', icon: '🇦🇱' },
          { name: 'Kosova', landmark: 'Prizren Taş Köprü & Priştine', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600', icon: '🇽🇰' },
          { name: 'Makedonya', landmark: 'Üsküp Taş Köprü & Ohrid Gölü', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=600', icon: '🇲🇰' },
          { name: 'Azerbaycan', landmark: 'Haydar Aliyev Merkezi & Bakü Kuleleri', image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&q=80&w=600', icon: '🇦🇿' }
        ],
        yurtici: [
          { name: 'Kapadokya', landmark: 'Peri Bacaları & Sıcak Hava Balonları', image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&q=80&w=600', icon: '🎈' },
          { name: 'Kars', landmark: 'Ani Harabeleri & Çıldır Gölü', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600', icon: '❄️' },
          { name: 'Trabzon - Rize', landmark: 'Uzungöl, Ayder Yaylası & Fırtına Deresi', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600', icon: '🌲' },
          { name: 'Gaziantep', landmark: 'Zeugma Mozaik Müzesi & Tarihi Çarşı', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600', icon: '🏛️' },
          { name: 'Hatay', landmark: 'Medeniyetler Şehri & Antakya Mozaik', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=600', icon: '🕌' },
          { name: 'Çanakkale', landmark: 'Truva Atı & Şehitler Abidesi', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', icon: '⚔️' }
        ]
      },
      preceptorship: {
        yurtici: [
          { title: 'Bronkoskopi Preceptorship', desc: 'Uygulamalı bronkoskopik girişimler ve vaka çalışmaları.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', badge: 'Yurtiçi Preceptorship' },
          { title: 'TAVİ Preceptorship', desc: 'Transkateter Aort Kapak İmplantasyonu prosedür eğitimi ve simülasyonu.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', badge: 'Yurtiçi Preceptorship' },
          { title: 'Bifürkasyon Preceptorship', desc: 'Kompleks koroner bifurkasyon vakalarında güncel teknikler.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600', badge: 'Yurtiçi Preceptorship' },
          { title: 'Parkinson Pil Cerrahisi', desc: 'Derin Beyin Stimülasyonu (DBS) ameliyat öncesi ve sonrası yönetimi.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600', badge: 'Yurtiçi Preceptorship' }
        ],
        yurtdisi: [
          { title: 'Bronkoskopi Preceptorship', desc: 'Uluslararası merkezlerde ileri düzey bronkoskopi eğitimi.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', badge: 'Yurtdışı Preceptorship' },
          { title: 'EBUS Preceptorship', desc: 'Endobronşiyal Ultrasonografi (EBUS) klinik gözlem programı.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', badge: 'Yurtdışı Preceptorship' },
          { title: 'TAVİ Preceptorship', desc: 'Global MICE ve sağlık merkezlerinde TAVİ uzmanlaşma eğitimi.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', badge: 'Yurtdışı Preceptorship' },
          { title: 'Bifürkasyon Preceptorship', desc: 'Uluslararası girişimsel kardiyoloji merkezlerinde vaka analizi.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600', badge: 'Yurtdışı Preceptorship' }
        ]
      },
      partnerPlatforms: {
        'alx-digi': [
          {
            title: 'Online Sağlık Danışmanlık',
            brand: 'Doktorum Yanımda',
            link: 'https://doktorumyanimda.net/',
            desc: 'Doktorum Yanımda altyapısı ile hastaların hekimlerle 7/24 online görüntülü danışmanlık yapabildiği şifreli ve güvenli sağlık platformu.',
            icon: '🩺',
            slug: 'online-saglik-danismanlik'
          },
          {
            title: 'Online Sağlık Asistan',
            brand: 'Beynex',
            link: 'https://www.beynex.com/tr/',
            desc: 'Beynex platformu ile beyin sağlığı takibi, dijital asistan çözümleri ve kişiselleştirilmiş zihinsel egzersiz modülleri.',
            icon: '🤖',
            slug: 'online-saglik-asistan'
          },
          {
            title: 'AI Sağlık Hizmetleri',
            brand: 'Niceye',
            link: 'https://niceye.com/vidizayn',
            desc: 'Niceye Vidizayn ile yapay zeka destekli medikal içerik tasarımı, tanı yardım algoritmaları ve yenilikçi sağlık aplikasyonları.',
            icon: '⚡',
            slug: 'ai-saglik-hizmetleri'
          },
          {
            title: 'Giyilebilir Teknoloji & Canlı Yayın',
            brand: 'Niceye',
            link: 'https://niceye.com/vistream',
            desc: 'Niceye Vistream altyapısı ile giyilebilir sensör entegrasyonu ve ameliyathanelerden HD kalitesinde kesintisiz canlı yayın imkanı.',
            icon: '📡',
            slug: 'giyilebilir-teknoloji-online-canli-yayin'
          }
        ],
        'alx-need': [
          {
            title: 'Medikal & Bilimsel',
            brand: 'Gama CRO',
            link: 'https://gamacro.com/medical-writing/',
            desc: 'Gama CRO Medical Writing altyapısı ile uluslararası standartlarda medikal metin yazımı, bilimsel yayınlar ve literatür özetleri.',
            icon: '🔬',
            slug: 'medikal-bilimsel'
          },
          {
            title: 'İstatistik & Çeviri',
            brand: 'Gama CRO',
            link: 'https://gamacro.com/bioinformatics-and-data-analysis/',
            desc: 'Gama CRO Bioinformatics & Data Analysis ile biyomedikal veri analizi, biyo-istatistiksel raporlama ve medikal çeviri.',
            icon: '📊',
            slug: 'istatistik-ceviri'
          },
          {
            title: 'Omnichannel Marka Yönetimi',
            brand: 'Niceye',
            link: 'https://niceye.com/niceyeit',
            desc: 'Niceye IT altyapısıyla fiziksel ve dijital tüm kanallarda bütünleşik omnichannel medikal marka yönetimi ve iletişim kurguları.',
            icon: '🔄',
            slug: 'omnichannel'
          }
        ]
      },
      courses: [
        { title: 'Uygulamalı Kurslar', desc: 'Paydaşlarınız için gelişimi interaktif, pratik ve keyifli hale getiren fiziksel & medikal atölyeler.', icon: '🩺', badge: 'Uygulamalı Eğitim' },
        { title: 'AI Destekli Kurslar', desc: 'Yapay zeka algoritmaları, kişiselleştirilmiş öğrenme modülleri ve akıllı klinik senaryolar.', icon: '🤖', badge: 'AI Destekli' },
        { title: 'VR Destekli Deneyimsel Öğrenme', desc: 'Sanal gerçeklik gözlükleri ve simülatörlerle ameliyathane ve klinik ortam deneyimi.', icon: '🥽', badge: 'VR Deneyimsel' }
      ],
      incentive: [
        { title: 'Indoor & Outdoor Motivasyonel Faaliyetler', desc: 'Takım ruhunu pekiştiren, enerjiyi yükselten iç ve dış mekan motivasyon aktiviteleri.', icon: '⚡', badge: 'Motivasyon Etkinliği' },
        { title: 'İç ve Dış Paydaş Lansman Toplantıları', desc: 'Yeni ürün, hizmet veya stratejilerinizin kurumsal lansman organizasyonları.', icon: '🎤', badge: 'Lansman Toplantısı' },
        { title: 'Şirket Piknikleri ve Özel Etkinlikler', desc: 'Çalışan aileleri ve ekibiniz için unutulmaz açık alan konsept piknik organizasyonları.', icon: '🎪', badge: 'Kurumsal Etkinlik' }
      ],
      corporateTravel: {
        guestServices: {
          motto: 'Enjoy Your Journey — Yolculuğun keyfini çıkarın, gerisini bize bırakın',
          title: 'ULUSLARARASI MİSAFİR HİZMETLERİ',
          subtitle: 'Misafirlerinizin Yolculuğu, Bizim Profesyonel Dokunuşumuzla Başlar',
          lead: 'Yurt dışından gelen iş ortaklarınız, müşterileriniz, yöneticileriniz ve özel misafirleriniz için Türkiye’de ihtiyaç duyabilecekleri tüm seyahat ve organizasyon hizmetlerini tek noktadan yönetiyoruz.',
          text1: 'Konaklama, VIP transfer, toplantı, etkinlik, restoran ve yemek organizasyonlarından sosyal ve kültürel programlara kadar her detayı kurumunuza özel olarak planlıyor ve hayata geçiriyoruz.',
          text2: 'Misafirlerinizin Türkiye’de geçirdiği zamanı konforlu, güvenli ve keyifli bir deneyime dönüştürürken, siz işinize ve iş ilişkilerinize odaklanın.',
          featureTitle: 'Gelişinizden Uğurlamanıza Kadar Her Detay Bizim Sorumluluğumuzda',
          featureNote: 'Havalimanı karşılamasından otel rezervasyonlarına, toplantı organizasyonlarından özel davetlere kadar tüm süreçleri deneyimli ekibimizle uçtan uca yönetiyoruz.',
          services: [
            'Havalimanı Karşılama & VIP Transfer',
            'Lüks Otel Rezervasyonları & Konaklama Yönetimi',
            'Özel Toplantı & Etkinlik Organizasyonları',
            'Restoran, Gurme Yemek & Özel Davet Yönetimi',
            'Sosyal & Kültürel Programlar, Şehir Turları',
            '7/24 Kesintisiz Rehberlik & Saha Destek Hizmetleri'
          ]
        },
        overseasTravel: {
          motto: 'Enjoy Your Journey — We Take Care of Every Detail',
          title: 'YURTDIŞI SEYAHAT VE ORGANİZASYONLAR',
          subtitle: 'Dünya Genelinde Organizasyon ve Seyahat Çözümleri',
          lead: 'Kurumsal firmaların yurt dışındaki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını dünyanın her noktasında planlıyor ve yönetiyoruz. Avrupa’dan Uzak Doğu’ya, Amerika’dan Orta Doğu’ya kadar farklı destinasyonlarda; kurumların hedeflerine, katılımcı profiline ve organizasyonun kapsamına uygun profesyonel çözümler sunuyoruz.',
          text: 'İster bir şehirde gerçekleştirilecek özel bir toplantı, ister farklı ülkeleri kapsayan geniş katılımlı bir organizasyon olsun; lokasyondan bağımsız olarak tüm operasyonu tek merkezden yönetiyoruz.',
          featureTitle: 'Dünyanın Her Noktasında, Tek Merkezden Organizasyon',
          featureNote: 'Yurt dışı organizasyonlarında destinasyon seçimi ve program planlamasından başlayarak tüm süreci uçtan uca yönetiyoruz.',
          services: [
            'Uluslararası şirket toplantıları ve seminerler',
            'Kongre, sempozyum ve bilimsel toplantılar',
            'Eğitim ve motivasyon organizasyonları',
            'Bayi, distribütör ve iş ortağı toplantıları',
            'Lansman ve tanıtım etkinlikleri',
            'Bölge ve saha toplantıları',
            'Kurumsal geziler ve incentive organizasyonları',
            'Fuar ve etkinlik katılım organizasyonları',
            'Konaklama, uçuş ve şehir içi ulaşım',
            'Havalimanı ve özel transfer organizasyonları',
            'Kurumsal yemek, davet ve sosyal programlar'
          ]
        },
        domesticTravel: {
          title: 'YURTİÇİ SEYAHAT VE ORGANİZASYONLAR',
          subtitle: 'Yurt İçi Organizasyon ve Seyahat Çözümleri',
          lead: 'Kurumsal firmaların yurt içindeki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını uçtan uca planlıyor ve yönetiyoruz. Farklı sektörlerde faaliyet gösteren kurumların ihtiyaçlarını anlayarak; her organizasyonun amacına, katılımcı profiline ve programına uygun, profesyonel çözümler sunuyoruz.',
          text: 'Şirket toplantıları, seminer ve eğitimler, bayi organizasyonları, motivasyon gezileri, lansmanlar, kongre ve sempozyumlar, hekim ve sağlık profesyonellerine yönelik toplantılar, bölge toplantıları ve özel kurumsal etkinlikler dahil olmak üzere her ölçekteki organizasyonu titizlikle planlıyoruz.',
          featureTitle: 'Organizasyonun Her Aşamasında Yanınızdayız',
          featureNote: 'Planlama aşamasından başlayarak ulaşım, konaklama, toplantı mekanı, transfer, teknik ihtiyaçlar, yemek ve sosyal programlar dahil olmak üzere tüm detayları tek merkezden yönetiyoruz.',
          services: [
            'Kurumsal toplantı ve seminerler',
            'Eğitim ve motivasyon organizasyonları',
            'Bayi, distribütör ve iş ortağı toplantıları',
            'Lansman ve tanıtım etkinlikleri',
            'Kongre, sempozyum ve bilimsel toplantılar',
            'Hekim ve sağlık profesyonellerine yönelik organizasyonlar',
            'Bölge ve saha toplantıları',
            'Kurumsal geziler ve özel etkinlikler',
            'Konaklama, ulaşım ve transfer organizasyonları',
            'Kurumsal yemek ve sosyal programlar'
          ]
        }
      }
    },
    sidebarConfig: {
      contactTitle: 'Sorularınız mı var?',
      contactDesc: 'Ekibimiz hizmetlerimiz ve projelerinizle ilgili tüm sorularınızı yanıtlamaktan mutluluk duyacaktır.',
      featuresTitle: 'Öne Çıkan Özellikler',
      features: [
        { icon: '✨', title: 'Kalite Garantisi', desc: 'Uluslararası kalite standartları' },
        { icon: '🚀', title: 'Hızlı Entegrasyon', desc: 'Süreçlerinize anında uyum' },
        { icon: '🌐', title: 'Global Erişilebilirlik', desc: '360° stratejik iş ortaklığı' }
      ]
    },
    legalPages: {
      privacyPolicy: {
        title: 'Gizlilik ve Kişisel Verilerin Korunması Politikası',
        lastUpdated: '2026',
        content: `Alexander Troy olarak, kullanıcılarımızın ve iş ortaklarımızın kişisel verilerinin güvenliğine en üst düzeyde önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve uluslararası veri güvenliği standartları uyarınca, tarafımızla paylaşılan her türlü bilgi yalnızca talep edilen organizasyon, MICE, dijital sağlık veya medikal danışmanlık hizmetlerinin ifası amacıyla işlenmektedir.

Kişisel verileriniz yasal zorunluluklar ve onayınız haricinde üçüncü şahıs ya da kurumlarla asla paylaşılmaz. Sistemlerimizde toplanan veriler en ileri düzey şifreleme ve güvenlik protokolleri ile korunmaktadır.`
      },
      termsOfService: {
        title: 'Kullanım Koşulları & Hizmet Şartları',
        lastUpdated: '2026',
        content: `Bu web sitesini ziyaret eden tüm kullanıcılar, belirtilen kullanım koşullarını kabul etmiş sayılır. Alexander Troy tarafından sunulan tüm içerik, görsel, logo, marka ve tasarım unsurları telif hakları ile korunmaktadır.

Yazılı izin olmaksızın site içeriğinin kopyalanması, çoğaltılması veya ticari amaçla kullanımı yasaktır. Web sitesi üzerinden iletilen teklif talepleri ve organizasyon başvuruları ön incelemeye tabidir.`
      },
      kvkk: {
        title: 'KVKK Aydınlatma Metni',
        lastUpdated: '2026',
        content: `Alexander Troy ("Şirket") olarak, veri sorumlusu sıfatıyla kişisel verilerinizi KVKK mevzuatına tam uyumlu olarak işlemekteyiz. İletişim formları, teklif alma süreçleri ve operasyonel rezervasyonlar kapsamında toplanan ad, soyad, telefon, e-posta ve kurumsal bilgileriniz sadece hizmet süreçlerimizin yürütülmesi için kullanılmaktadır.

Dilediğiniz zaman şirketimize başvurarak verilerinizin işlenme durumunu öğrenme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz.`
      }
    },
    orgFormConfig: {
      badge: 'Online Teklif & Planlama',
      title: 'Organizasyon Talep Formu',
      subtitle: 'Etkinlik ve Seyahat Planlamanız İçin Bize Ulaşın',
      desc: 'Kurumunuzun hedeflerine uygun, kusursuz bir organizasyon deneyimi için formu doldurarak teklif talebinde bulunabilirsiniz.',
      orgTypes: [
        'Toplantı / Seminer',
        'Kongre / Sempozyum',
        'Eğitim Organizasyonu',
        'Bayi / Distribütör Organizasyonu',
        'Lansman / Tanıtım',
        'Motivasyon / Incentive',
        'Kurumsal Seyahat',
        'Fuar / Etkinlik',
        'Diğer'
      ],
      servicesList: [
        'Uçak / Ulaşım',
        'Otel / Konaklama',
        'Havalimanı ve Şehir İçi Transfer',
        'Toplantı / Etkinlik Alanı',
        'Teknik Ekipman ve Organizasyon Desteği',
        'Yemek / Davet Organizasyonu',
        'Sosyal Program ve Aktivite',
        'Rehberlik Hizmetleri',
        'Diğer'
      ],
      submitBtnText: 'Teklif Talebini Gönder',
      successTitle: 'Talebiniz Başarıyla Alındı!',
      successDesc: 'Uzman operasyon ekibimiz organizasyon detaylarınızı inceleyerek en kısa sürede sizinle iletişime geçecektir.'
    }
  }
};

export const defaultContentEN = {
  general: {
    siteTitle: 'Alexander Troy Corporate',
    logo: '/logo.png',
    topBannerText: 'Enjoy Your Journey',
    topBannerEnabled: true,
    headerCtaText: 'Contact Us',
    headerCtaLink: '/iletisim',
    floatingButtons: {
      enabled: true,
      whatsapp: true,
      phone: true,
      scrollTop: true,
      bubbleText: 'How can we help you?'
    }
  },
  seo: {
    metaTitle: 'Alexander Troy | MICE, Preceptorship & Medical Solutions',
    metaDescription: 'Domestic and international congresses, symposiums, corporate travel, clinical preceptorship and AI-powered digital healthcare solutions.',
    keywords: 'alexander troy, mice, congress, symposium, corporate travel, preceptorship, medical translation, artificial intelligence',
    favicon: '/logo.png',
    ogImage: '/hero-slide-1.jpg',
    googleAnalyticsId: ''
  },
  menus: [
    {
      id: 'kurumsal',
      title: 'Corporate',
      path: '/kurumsal',
      submenus: [
        {
          name: 'Corporate',
          children: [
            { name: 'About Us', path: '/kurumsal/hakkimizda' },
            { name: 'Vision', path: '/kurumsal/vizyon' },
            { name: 'Mission', path: '/kurumsal/misyon' }
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
          name: 'Congress & Meeting',
          children: [
            { name: 'Domestic Congress', path: '/alx-mice/yurtici-kongre' },
            { name: 'International Congress', path: '/alx-mice/yurtdisi-kongre' },
            { name: 'Meeting', path: '/alx-mice/toplanti' }
          ]
        },
        {
          name: 'Symposium',
          children: [
            { name: 'Domestic Symposium', path: '/alx-mice/yurtici-sempozyum' },
            { name: 'International Symposium', path: '/alx-mice/yurtdisi-sempozyum' }
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
            { name: 'Own Event - Domestic', path: '/alx-4-you/own-event-yurtici' },
            { name: 'Own Event - International', path: '/alx-4-you/own-event-yurtdisi' },
            { name: 'International Guest Services', path: '/alx-4-you/uluslararasi-misafir-hizmetleri' }
          ]
        },
        {
          name: 'Preceptorship',
          children: [
            { name: 'Domestic Preceptorship', path: '/alx-4-you/preceptorship-yurtici' },
            { name: 'International Preceptorship', path: '/alx-4-you/preceptorship-yurtdisi' }
          ]
        },
        {
          name: 'Courses & Training',
          children: [
            { name: 'Hands-on Courses', path: '/alx-4-you/uygulamali-kurslar' },
            { name: 'AI-Supported Courses', path: '/alx-4-you/ai-destekli-kurslar' },
            { name: 'VR-Supported Learning', path: '/alx-4-you/vr-destekli-ogrenme' }
          ]
        },
        {
          name: 'Incentive',
          children: [
            { name: 'Motivational Activities', path: '/alx-4-you/motivasyonel-faaliyetler' },
            { name: 'Launch Meetings', path: '/alx-4-you/lansman-toplantilari' },
            { name: 'Company Picnics', path: '/alx-4-you/sirket-piknikleri' }
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
          name: 'Digital Solutions',
          children: [
            { name: 'Online Health Consulting (Doktorum Yanımda)', path: '/alx-digi/online-saglik-danismanlik' },
            { name: 'Online Health Assistant (Beynex)', path: '/alx-digi/online-saglik-asistan' },
            { name: 'AI Healthcare Services (Niceye)', path: '/alx-digi/ai-saglik-hizmetleri' },
            { name: 'Online Live Streaming (Niceye)', path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin' }
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
          name: 'Medical & Communication',
          children: [
            { name: 'Medical & Scientific (Gama CRO)', path: '/alx-need/medikal-bilimsel' },
            { name: 'Statistics & Translation (Gama CRO)', path: '/alx-need/istatistik-ceviri' },
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
        badge: '🤖 AI & MICE Technologies',
        title: 'Next-Gen AI-Powered Event & Congress Management',
        desc: 'We transform your organizations into seamless journeys with AI algorithms, smart digital attendee experiences, and hybrid platforms.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Explore Services',
        primaryCtaLink: '#services',
        secondaryCta: 'Contact Us',
        secondaryCtaLink: '/iletisim'
      },
      {
        id: 2,
        image: '/slide2.png',
        badge: '💡 Alx Digi & Medical Tech',
        title: 'Tele-Health & Virtual Reality (VR) Solutions',
        desc: 'Break boundaries with wearable technologies, AI-powered clinical training simulations, and interactive health platforms.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Digital Solutions',
        primaryCtaLink: '/alx-digi',
        secondaryCta: 'Get in Touch',
        secondaryCtaLink: '/iletisim'
      },
      {
        id: 3,
        image: '/slide3.png',
        badge: '🌐 Omnichannel & Corporate Strategy',
        title: 'End-to-End Smart Data & Live Broadcast Management',
        desc: 'We are your innovative partner every step of the way with 360° medical communication, live digital broadcasts, and AI-powered translations.',
        slogan: 'Enjoy Your Journey',
        primaryCta: 'Review Our Process',
        primaryCtaLink: '#journey',
        secondaryCta: 'Talk to Us',
        secondaryCtaLink: '/iletisim'
      }
    ]
  },
  about: {
    subtitle: 'Who We Are',
    title: 'Designing Tomorrow\'s Solutions Today',
    desc1: 'We are a reliable and sustainable partner producing 360-degree strategic solutions nationally and internationally with customized, science-based, and original approaches.',
    desc2: 'As Alx Troy, we believe that corporate events are "strategic journeys" that nurture company culture and serve your goals, beyond just being an organization.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    ctaText: 'More About Us',
    ctaLink: '/kurumsal/hakkimizda'
  },
  services: {
    title: 'Our Services',
    items: [
      {
        id: 1,
        title: 'Alx MICE',
        subtitle: 'Events, Congresses & Symposiums',
        desc: 'Domestic and international congress, meeting, and symposium services (Transportation, flight ticketing, accommodation, dining, curated tours, and professional guidance).',
        link: '/alx-mice',
        bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 2,
        title: 'Alx 4 You',
        subtitle: 'Boutique & Corporate Solutions',
        desc: 'Tailor-made domestic and international meetings, preceptorships, courses, seminars, and incentive services compliant with regulatory guidelines.',
        link: '/alx-4-you',
        bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 3,
        title: 'Alx Digi',
        subtitle: 'Digital & AI Health Technologies',
        desc: 'Online healthcare consulting, AI assistants, wearable technologies, and live broadcasting platforms powered by Doktorum Yanımda, Beynex, and Niceye.',
        link: '/alx-digi',
        bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 4,
        title: 'Alx Need',
        subtitle: 'Medical & Omnichannel Management',
        desc: 'Medical writing, biostatistics, scientific consulting, certified translation, and omnichannel healthcare brand management powered by Gama CRO and Niceye.',
        link: '/alx-need',
        bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  journey: {
    title: 'Alx 360° Service Process',
    subtitle: 'Our end-to-end methodology delivering project excellence',
    steps: [
      { id: 1, title: 'Needs Analysis', desc: 'Understanding requirements', icon: 'Search' },
      { id: 2, title: 'Strategy', desc: 'Omnichannel planning', icon: 'Target' },
      { id: 3, title: 'Content & Design', desc: 'Platform & visual production', icon: 'PenTool' },
      { id: 4, title: 'Execution', desc: 'Events & live broadcasting', icon: 'Rocket' },
      { id: 5, title: 'Measurement', desc: 'Analytics and sustainability', icon: 'BarChart2' }
    ]
  },
  testimonials: {
    title: 'Client Testimonials',
    items: [
      {
        id: 1,
        name: 'John Miller',
        role: 'Marketing Director, MedTech Corp',
        content: 'The product launch we executed with Alx far exceeded our expectations. The digital integrations in particular fascinated our attendees.',
        image: 'https://i.pravatar.cc/150?img=11'
      },
      {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Head of Clinical Research',
        content: 'Thanks to their professionalism in medical translation and live broadcasting, we completed our international congress with zero defects.',
        image: 'https://i.pravatar.cc/150?img=5'
      },
      {
        id: 3,
        name: 'Dr. Michael Chang',
        role: 'Chief Medical Officer',
        content: 'They possess a world-class vision in telehealth and AI-powered medical education solutions. Our communication has grown significantly stronger.',
        image: 'https://i.pravatar.cc/150?img=8'
      },
      {
        id: 4,
        name: 'Elena Rostova',
        role: 'Senior Event Manager',
        content: 'Their proactive support throughout the entire organization process enabled us to navigate unexpected challenges smoothly.',
        image: 'https://i.pravatar.cc/150?img=9'
      }
    ]
  },
  references: {
    title: 'Our Business Partners',
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
    title: 'Get in Touch With Us',
    subtitle: 'Contact & Support',
    desc: 'Reach out to us via any channel for events, congresses, medical translations, and AI-powered digital health solutions.',
    phone: '+90 (212) 555 01 23',
    whatsapp: '+90 (555) 012 34 56',
    whatsappText: 'Hello, I would like to get information about Alexander Troy services.',
    email: 'info@alx.com.tr',
    address: 'Levent, Büyükdere Cd. No:195, Şişli / Istanbul, Turkey',
    instagram: 'https://instagram.com',
    wechat: '#',
    copyright: 'Alexander Troy Corporate. All rights reserved. — Enjoy Your Journey'
  },
  pages: {
    corporate: {
      about: {
        title: 'About Us',
        lead: 'As Alx Troy, we believe that corporate events are strategic journeys that nurture company culture and serve your goals, beyond just being an organization.',
        desc1: 'We are a next-generation MICE partner focusing on each organization\'s unique dynamics, approaching projects with scientific and boutique-creative solutions.',
        mottoQuote: 'Enjoy Your Journey',
        mottoDesc: 'With our motto, we transform the entire journey from planning to post-event into a delightful experience. We approach every task not just as a vendor, but as a strategic partner adding genuine value.',
        statsTitle: 'Who Are We?',
        statsBullets: [
          '25 years of excellence,',
          'Operating on national and international scales,',
          'Acting with the responsibility of a trusted & sustainable stakeholder,',
          'A US-headquartered global organization...'
        ],
        capabilitiesTitle: 'What Can We Do For You?',
        capabilities: [
          { icon: '💻', title: 'MICE & Congress Services', desc: 'Flight ticketing, luxury accommodation, VIP transfers, technical production, gala events, and certified guides.' },
          { icon: '✈️', title: 'Own Event & Special Destinations', desc: 'Boutique travel and custom corporate events across Turkey (Cappadocia, Kars) and worldwide (Italy, Spain, etc.).' },
          { icon: '🩺', title: 'Preceptorship & Clinical Training', desc: 'Clinical observation programs and hands-on workshops in Bronchoscopy, TAVI, Bifurcation, and DBS.' },
          { icon: '🤖', title: 'AI-Powered Health & Broadcasting', desc: 'Online health consulting, telemedicine, wearable tech integrations, and 4K live streaming.' },
          { icon: '📊', title: 'Medical & Omnichannel Management', desc: 'Medical writing, biostatistics, certified medical translation, and omnichannel communication strategies.' }
        ]
      },
      vision: {
        title: 'Our Strategic Vision',
        quote: 'To be the leading strategic partner that anticipates existing or unperceived needs in the healthcare sector, creating proactive solutions and making a difference.',
        desc: 'At Alx Troy, we adopt an innovative, dynamic, and forward-looking vision in the healthcare and corporate events industry. We not only meet existing demands, but also identify emerging needs to build proactive solutions.',
        bullets: [
          'Pioneering tomorrow\'s healthcare & MICE technologies today',
          'Strategic partnership mindset delivering tangible value',
          'Leading the industry with scientific and innovative methodologies'
        ]
      },
      mission: {
        title: 'Our Mission',
        quote: 'To be a sustainable and reliable partner through science-based boutique solutions offered within local and global frameworks.',
        desc: 'Centering on the unique dynamics of each organization and project, our mission is to deliver high-quality, sustainable, and scientifically backed services worldwide.',
        bullets: [
          'Sustainable partnerships across local and global markets',
          'Tailored boutique and scientific approach for every project',
          'Uncompromising reliability and operational excellence'
        ]
      }
    },
    categoryOverviews: {
      'kurumsal': {
        title: 'Corporate',
        badge: 'Alexander Troy Corporate',
        tagline: 'Enjoy Your Journey',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
        description: 'Alexander Troy is a strategic journey partner that enriches your company culture and serves your milestones. We stand by you with over 25 years of experience and US-headquartered international strength.',
        stats: [
          { value: '25+', label: 'Years Experience' },
          { value: 'USA', label: 'Global Network' },
          { value: '100%', label: 'Client Centric' },
          { value: '360°', label: 'Strategic Partner' }
        ],
        groups: [
          {
            groupTitle: 'Our Structure & Values',
            groupDesc: 'The cornerstones shaping the future standards of corporate events and medical communications.',
            items: [
              {
                name: 'About Us',
                path: '/kurumsal/hakkimizda',
                tag: 'Corporate Identity',
                shortDesc: 'Who we are: A US-headquartered organization acting as a trusted partner in national and international arenas for 25 years.',
                highlights: ['25 years of industry heritage', 'US-headquartered global network', 'Strategic partnership approach']
              },
              {
                name: 'Vision',
                path: '/kurumsal/vizyon',
                tag: 'Strategic Vision',
                shortDesc: 'To be the leading strategic partner that anticipates healthcare needs, delivering transformative solutions.',
                highlights: ['Proactive and visionary approach', 'Anticipating industry needs', 'Science-based methodology']
              },
              {
                name: 'Mission',
                path: '/kurumsal/misyon',
                tag: 'Core Mission',
                shortDesc: 'Delivering boutique, science-based solutions to be a trusted and sustainable partner worldwide.',
                highlights: ['Boutique and tailored solutions', 'Local & global standards', 'Sustainable collaboration']
              }
            ]
          }
        ],
        features: [
          { title: 'Trusted Partner', desc: 'End-to-end transparent and sustainable operational excellence.' },
          { title: 'Global Vision', desc: 'US-based infrastructure and extensive international reach.' },
          { title: 'Boutique Solutions', desc: 'Tailored strategies designed specifically for your organization.' }
        ]
      },
      'alx-mice': {
        title: 'Alx MICE',
        badge: 'Events, Congresses & Symposiums',
        tagline: 'Flawless Congress & Event Management',
        heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920',
        description: 'We manage your domestic and international congresses, meetings, and symposiums end-to-end — from flight ticketing and transfers to accommodation, gala dinners, and professional guides.',
        stats: [
          { value: '500+', label: 'Congresses & Events' },
          { value: '50+', label: 'Country Network' },
          { value: '24/7', label: 'Operations Support' },
          { value: '360°', label: 'End-to-End Service' }
        ],
        groups: [
          {
            groupTitle: 'Congress & Meeting Solutions',
            groupDesc: 'National and international medical, scientific, and corporate congress organizations.',
            items: [
              {
                name: 'Domestic Congress',
                path: '/alx-mice/yurtici-kongre',
                tag: 'National Congresses',
                shortDesc: 'Organization and delegation management of national congresses in cardiology, medicine, and specialty branches.',
                highlights: ['Local accommodation & transfers', 'Registration & welcome desk', 'Budget & compliance oversight']
              },
              {
                name: 'International Congress',
                path: '/alx-mice/yurtdisi-kongre',
                tag: 'Global Congresses',
                shortDesc: 'Full attendance and operational support for prestigious medical congresses worldwide, such as ESC Congress.',
                highlights: ['International flights & hotels', 'Visa & logistics handling', 'Certified multilingual guides']
              },
              {
                name: 'Meeting',
                path: '/alx-mice/toplanti',
                tag: 'Corporate Meetings',
                shortDesc: 'Boutique planning for corporate strategy meetings, Advisory Boards, and private product briefings.',
                highlights: ['VIP transfer & hospitality', 'Sound/light & AV infrastructure', 'Exclusive venue selection']
              }
            ]
          },
          {
            groupTitle: 'Symposium Management',
            groupDesc: 'Scientific and academic symposiums tailored to specialized medical disciplines.',
            items: [
              {
                name: 'Domestic Symposium',
                path: '/alx-mice/yurtici-sempozyum',
                tag: 'Scientific Symposium',
                shortDesc: 'Flawless planning and execution of neuroscience, respiratory, and specialty medical summits in Turkey.',
                highlights: ['Academic speaker management', 'Digital poster & abstract portals', 'Exclusive gala arrangements']
              },
              {
                name: 'International Symposium',
                path: '/alx-mice/yurtdisi-sempozyum',
                tag: 'Global Summits',
                shortDesc: 'Full group operations, travel, and accommodation for worldwide lung health and medical symposia.',
                highlights: ['Global coordination', 'Cultural & city excursions', '24/7 on-site operations crew']
              }
            ]
          }
        ],
        features: [
          { title: 'End-to-End Logistics', desc: 'Flight tickets, luxury hotels, VIP transfers, and venue management.' },
          { title: 'On-Time Operations', desc: 'Punctual, seamless workflow management ensuring zero friction.' },
          { title: 'Guidance & Tours', desc: 'Professional licensed tour guides and customized excursion itineraries.' }
        ]
      },
      'alx-4-you': {
        title: 'Alx 4 You',
        badge: 'Boutique Events, Training & Incentive',
        tagline: 'Tailor-Made Experiential Solutions',
        heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920',
        description: 'Bespoke domestic and international Own Event concepts, clinical Preceptorship programs, AI/VR-supported hands-on workshops, and motivational incentive trips.',
        stats: [
          { value: 'Boutique', label: 'Tailor-Made' },
          { value: 'Compliance', label: '100% Compliant' },
          { value: 'AI/VR', label: 'Advanced Tech' },
          { value: 'Global', label: 'Destination Reach' }
        ],
        groups: [
          {
            groupTitle: 'Own Event (Custom Destination Experiences)',
            groupDesc: 'Corporate journeys designed with destination-specific cultural concepts and iconic landmarks.',
            items: [
              {
                name: 'Domestic Travel & Events',
                path: '/alx-4-you/own-event-yurtici',
                tag: 'Domestic Destinations',
                shortDesc: 'End-to-end planning and management of corporate meetings, events, and travel across Turkey.',
                highlights: ['Corporate launches & meetings', 'Incentive & dealer excursions', 'Full transport & lodging logistics']
              },
              {
                name: 'International Travel & Events',
                path: '/alx-4-you/own-event-yurtdisi',
                tag: 'Global Destinations',
                shortDesc: 'Managing meetings, travel, and corporate events worldwide with seamless central coordination.',
                highlights: ['Worldwide travel management', 'International congresses & incentives', 'Single-point central operation']
              },
              {
                name: 'International Guest Services',
                path: '/alx-4-you/uluslararasi-misafir-hizmetleri',
                tag: 'VIP Hospitality',
                shortDesc: 'Comprehensive hospitality, VIP airport greeting, and accommodation management in Turkey for your global guests.',
                highlights: ['VIP airport meet & greet', 'Luxury accommodation & dining', '360° dedicated concierge']
              }
            ]
          },
          {
            groupTitle: 'Preceptorship (Clinical Observation Programs)',
            groupDesc: 'Hands-on clinical observation opportunities in leading centers for physicians and medical specialists.',
            items: [
              {
                name: 'Domestic Preceptorship',
                path: '/alx-4-you/preceptorship-yurtici',
                tag: 'National Observation',
                shortDesc: 'Clinical observation in Bronchoscopy, TAVI, Bifurcation, and DBS across Turkey’s leading medical centers.',
                highlights: ['Live case observations', 'Expert faculty workshops', 'Regulatory-compliant framework']
              },
              {
                name: 'International Preceptorship',
                path: '/alx-4-you/preceptorship-yurtdisi',
                tag: 'Global Preceptorship',
                shortDesc: 'Observation programs in global centers for Bronchoscopy, EBUS, TAVI, and complex coronary procedures.',
                highlights: ['Global hospital partnerships', 'Advanced surgical observation', 'Accredited certificate']
              }
            ]
          },
          {
            groupTitle: 'Courses & Training Modules',
            groupDesc: 'Interactive competency-building trainings backed by next-generation technology.',
            items: [
              {
                name: 'Hands-on Courses',
                path: '/alx-4-you/uygulamali-kurslar',
                tag: 'Interactive Workshops',
                shortDesc: 'Courses enhancing stakeholder skills through anatomical models, simulators, and live case studies.',
                highlights: ['Hands-on practical training', 'Renowned instructor faculty', 'Interactive group dynamics']
              },
              {
                name: 'AI-Supported Courses',
                path: '/alx-4-you/ai-destekli-kurslar',
                tag: 'Artificial Intelligence',
                shortDesc: 'Enriched educational materials featuring personalized learning paths and smart AI simulations.',
                highlights: ['Intelligent case simulation', 'Data-driven progress tracking', 'Next-gen learning content']
              },
              {
                name: 'VR-Supported Learning',
                path: '/alx-4-you/vr-destekli-ogrenme',
                tag: 'Virtual Reality',
                shortDesc: 'Immerse into virtual operating rooms and complex clinical procedures using VR headsets.',
                highlights: ['3D OR simulation', 'Virtual case practice', 'High learning retention']
              }
            ]
          },
          {
            groupTitle: 'Incentive & Corporate Motivation',
            groupDesc: 'Bespoke events fostering team spirit and strengthening organizational bonds.',
            items: [
              {
                name: 'Motivational Activities',
                path: '/alx-4-you/motivasyonel-faaliyetler',
                tag: 'Team Spirit',
                shortDesc: 'Dynamic indoor and outdoor team-building games, sports activities, and creative workshops.',
                highlights: ['Strengthening communication', 'Stress-relief activities', 'Diverse venue alternatives']
              },
              {
                name: 'Launch Meetings',
                path: '/alx-4-you/lansman-toplantilari',
                tag: 'Product Launches',
                shortDesc: 'Prestigious launch events introducing new products, services, or strategies with high-impact staging.',
                highlights: ['Stunning stage & AV production', 'Media & guest coordination', 'Memorable brand experiences']
              },
              {
                name: 'Company Picnics',
                path: '/alx-4-you/sirket-piknikleri',
                tag: 'Outdoor Gatherings',
                shortDesc: 'Outdoor gatherings bringing employees and their families together with activities and gourmet catering.',
                highlights: ['Scenic outdoor venues', 'Activities for all ages', 'Gourmet catering services']
              }
            ]
          }
        ],
        features: [
          { title: 'Customized & Boutique', desc: 'Flexible planning specifically structured for your organization.' },
          { title: 'Regulatory Compliance', desc: '100% adherence to healthcare codes and promotion guidelines.' },
          { title: 'AI & VR Technology', desc: 'State-of-the-art immersive simulation and learning technologies.' }
        ]
      },
      'alx-digi': {
        title: 'Alx Digi',
        badge: 'Digital Health & AI Technologies',
        tagline: 'Digital Transformation in Healthcare',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920',
        description: 'Online healthcare consulting platforms, AI-supported clinical assistants, smart diagnostic tools, and live streaming via wearable technology.',
        stats: [
          { value: 'AI', label: 'AI-Powered Core' },
          { value: '24/7', label: 'Online Telehealth' },
          { value: 'IoT', label: 'Wearable Tech' },
          { value: '99.9%', label: 'Uptime Reliability' }
        ],
        groups: [
          {
            groupTitle: 'Digital Health & Telemedicine Ecosystem',
            groupDesc: 'Innovative technological healthcare solutions delivered in partnership with Niceye, Doktorum Yanımda, and Beynex.',
            items: [
              {
                name: 'Online Health Consulting',
                path: '/alx-digi/online-saglik-danismanlik',
                tag: 'Doktorum Yanımda',
                shortDesc: 'Encrypted telehealth platform enabling patients to conduct 24/7 video consultations with doctors.',
                highlights: ['End-to-end encrypted video calls', 'E-Prescription & report sharing', '24/7 physician availability']
              },
              {
                name: 'Online Health Assistant',
                path: '/alx-digi/online-saglik-asistan',
                tag: 'Beynex',
                shortDesc: 'AI-based cognitive health tracking system and personalized brain fitness exercises.',
                highlights: ['Brain health & memory tracking', 'Clinical-scale cognitive tests', 'Mobile digital assistant']
              },
              {
                name: 'AI Healthcare Services',
                path: '/alx-digi/ai-saglik-hizmetleri',
                tag: 'Niceye Vidizayn',
                shortDesc: 'AI medical visualization, diagnostic decision-support tools, and smart healthcare algorithms.',
                highlights: ['AI-generated medical visuals & video', 'Automated diagnostic suggestions', 'Medical content optimization']
              },
              {
                name: 'Wearable Tech & Live Streaming',
                path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin',
                tag: 'Niceye Vistream',
                shortDesc: 'Uninterrupted live streaming from operating rooms and field sites using smart glasses and cameras.',
                highlights: ['Ultra-low latency 4K surgical streams', 'Wearable sensor integration', 'Interactive remote Q&A']
              }
            ]
          }
        ],
        features: [
          { title: 'Secure Infrastructure', desc: 'KVKK and HIPAA-compliant end-to-end encrypted data exchange.' },
          { title: 'Smart Artificial Intelligence', desc: 'Algorithms accelerating clinical analysis and decision-making.' },
          { title: 'Continuous Live Streaming', desc: 'Ultra-low latency streaming tailored for surgery and congresses.' }
        ]
      },
      'alx-need': {
        title: 'Alx Need',
        badge: 'Medical Communication, Translation & Omnichannel',
        tagline: 'Strategic Communication & Medical Expertise',
        heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920',
        description: '360° strategic partnership in healthcare through medical writing, biostatistics, certified medical translation, and omnichannel brand management backed by Gama CRO and Niceye.',
        stats: [
          { value: '360°', label: 'Omnichannel Strategy' },
          { value: 'PhD/MD', label: 'Scientific Faculty' },
          { value: '100%', label: 'Medical Accuracy' },
          { value: 'Global', label: 'Publishing Standards' }
        ],
        groups: [
          {
            groupTitle: 'Medical & Scientific Solutions',
            groupDesc: 'Scientific research, clinical study reporting, and omnichannel medical brand communication.',
            items: [
              {
                name: 'Medical & Scientific Consulting',
                path: '/alx-need/medikal-bilimsel',
                tag: 'Gama CRO',
                shortDesc: 'Clinical study protocols, medical writing, and scientific Advisory Board management.',
                highlights: ['Clinical research reports', 'Manuscript & poster preparation', 'Regulatory medical writing']
              },
              {
                name: 'Statistics & Medical Translation',
                path: '/alx-need/istatistik-ceviri',
                tag: 'Gama CRO Bioinformatics',
                shortDesc: 'Biostatistical data analysis, clinical data mining, and physician-approved medical translation.',
                highlights: ['Advanced biostatistical modeling', 'Notarized medical translation', 'Strict terminological fidelity']
              },
              {
                name: 'Omnichannel Brand Management',
                path: '/alx-need/omnichannel',
                tag: 'Niceye IT',
                shortDesc: 'Multichannel digital communication strategies targeting doctors, pharmacists, and patients.',
                highlights: ['360° Digital marketing', 'CRM and email automation', 'Measurable brand equity growth']
              }
            ]
          }
        ],
        features: [
          { title: 'Scientific Reliability', desc: 'Supervision by academic physicians and experienced biostatisticians.' },
          { title: 'Multichannel Integration', desc: 'Synchronized management across digital, print, and event touchpoints.' },
          { title: 'International Standards', desc: 'Full compliance with ICH-GCP guidelines and global medical codes.' }
        ]
      }
    },
    contactPage: {
      heroBadge: 'Contact Us',
      heroTitle: 'Get in Touch for Future-Ready Solutions',
      heroLead: 'Alexander Troy provides end-to-end solutions with MICE, 4 You, Digi, and Need services. Reach out to us for project inquiries and collaboration.',
      quickBadges: [
        { label: 'Fast Response' },
        { label: 'Levent / Istanbul Headquarters' },
        { label: 'Confidentiality & Quality Guaranteed' }
      ],
      faqs: [
        {
          q: "When can I get in touch with an Alexander Troy representative?",
          a: "Our phone and email lines are active weekdays from 09:00 to 18:00 (GMT+3). You can send inquiries 24/7 via our WhatsApp live support."
        },
        {
          q: "How far in advance should we submit MICE and Event requests?",
          a: "For national and international congress or incentive event planning, we recommend reaching out at least 2-4 weeks prior to your target dates."
        },
        {
          q: "How are medical translation and digital technology projects handled?",
          a: "Upon receiving your request, our medical & technical team will contact you within 24 hours to conduct a requirements analysis and project scope."
        },
        {
          q: "Is an appointment required to visit your headquarters?",
          a: "Yes, we kindly request scheduling an appointment in advance so we can ensure the appropriate department leads are available to host you."
        }
      ]
    },
    subServicesData: {
      congressEvents: [
        {
          category: 'yurtici-kongre',
          title: '42nd National Cardiology Congress',
          org: 'Turkish Society of Cardiology (TKD)',
          desc: 'Latest scientific advances, clinical cases, and expert panels in national cardiology.',
          link: 'https://tkd.org.tr/2026kongre/',
          badge: 'Domestic Congress'
        },
        {
          category: 'yurtdisi-kongre',
          title: 'European Society of Cardiology (ESC Congress)',
          org: 'European Society of Cardiology',
          desc: 'ESC Congress, the world’s leading and most prestigious international cardiology gathering.',
          link: 'https://www.escardio.org/events/congresses/esc-congress/',
          badge: 'International Congress'
        },
        {
          category: 'yurtici-sempozyum',
          title: '3rd Neuroscience Symposium',
          org: 'Turkish Neurological Society',
          desc: 'Innovative breakthroughs in brain research and clinical neuroscience gathering top academicians.',
          link: 'https://www.tndnorobilim.org/',
          badge: 'Domestic Symposium'
        },
        {
          category: 'yurtici-sempozyum',
          title: '11th Respiratory Summit',
          org: 'Turkish Respiratory Society',
          desc: 'State-of-the-art clinical approaches and academic presentations in pulmonary health.',
          link: 'https://www.solunumzirvesi.org/',
          badge: 'Domestic Symposium'
        },
        {
          category: 'yurtdisi-sempozyum',
          title: 'World Conference on Lung Health',
          org: 'The Union',
          desc: 'The world’s largest international conference and symposium on global lung health.',
          link: 'https://worldlunghealth.org/symposia/',
          badge: 'International Symposium'
        }
      ],
      destinations: {
        yurtdisi: [
          { name: 'Spain', landmark: 'Sagrada Familia & Plaza Mayor', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=600', icon: '🇪🇸' },
          { name: 'Italy', landmark: 'Colosseum & Venice Canals', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600', icon: '🇮🇹' },
          { name: 'Algeria', landmark: 'Martyrs\' Memorial & Kasbah', image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=600', icon: '🇩🇿' },
          { name: 'Egypt', landmark: 'Pyramids of Giza & Cairo Museum', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600', icon: '🇪🇬' },
          { name: 'Albania', landmark: 'Skanderbeg Square & Berat', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600', icon: '🇦🇱' },
          { name: 'Kosovo', landmark: 'Prizren Stone Bridge & Pristina', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600', icon: '🇽🇰' },
          { name: 'North Macedonia', landmark: 'Skopje Stone Bridge & Lake Ohrid', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=600', icon: '🇲🇰' },
          { name: 'Azerbaijan', landmark: 'Heydar Aliyev Center & Flame Towers', image: 'https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?auto=format&fit=crop&q=80&w=600', icon: '🇦🇿' }
        ],
        yurtici: [
          { name: 'Cappadocia', landmark: 'Fairy Chimneys & Hot Air Balloons', image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&q=80&w=600', icon: '🎈' },
          { name: 'Kars', landmark: 'Ani Ruins & Lake Çıldır', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600', icon: '❄️' },
          { name: 'Trabzon - Rize', landmark: 'Uzungöl, Ayder Plateau & Fırtına River', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600', icon: '🌲' },
          { name: 'Gaziantep', landmark: 'Zeugma Mosaic Museum & Historic Bazaar', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600', icon: '🏛️' },
          { name: 'Hatay', landmark: 'City of Civilizations & Antakya Mosaics', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=600', icon: '🕌' },
          { name: 'Çanakkale', landmark: 'Trojan Horse & Gallipoli Memorial', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600', icon: '⚔️' }
        ]
      },
      preceptorship: {
        yurtici: [
          { title: 'Bronchoscopy Preceptorship', desc: 'Practical bronchoscopic interventional procedures and case studies.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', badge: 'Domestic Preceptorship' },
          { title: 'TAVI Preceptorship', desc: 'Transcatheter Aortic Valve Implantation procedural training & simulation.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', badge: 'Domestic Preceptorship' },
          { title: 'Bifurcation Preceptorship', desc: 'State-of-the-art techniques in complex coronary bifurcation cases.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600', badge: 'Domestic Preceptorship' },
          { title: 'DBS Parkinson Surgery', desc: 'Deep Brain Stimulation (DBS) pre- and post-operative clinical management.', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600', badge: 'Domestic Preceptorship' }
        ],
        yurtdisi: [
          { title: 'Bronchoscopy Preceptorship', desc: 'Advanced bronchoscopy training in renowned international medical centers.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', badge: 'International Preceptorship' },
          { title: 'EBUS Preceptorship', desc: 'Endobronchial Ultrasound (EBUS) clinical observation program.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', badge: 'International Preceptorship' },
          { title: 'TAVI Preceptorship', desc: 'Specialized TAVI observation in global medical centers.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600', badge: 'International Preceptorship' },
          { title: 'Bifurcation Preceptorship', desc: 'Case analysis and observation in world-class interventional cardiology suites.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600', badge: 'International Preceptorship' }
        ]
      },
      partnerPlatforms: {
        'alx-digi': [
          {
            title: 'Online Health Consulting',
            brand: 'Doktorum Yanımda',
            link: 'https://doktorumyanimda.net/',
            desc: 'Encrypted and secure healthcare platform allowing 24/7 video consultations between patients and certified doctors.',
            icon: '🩺',
            slug: 'online-saglik-danismanlik'
          },
          {
            title: 'Online Health Assistant',
            brand: 'Beynex',
            link: 'https://www.beynex.com/tr/',
            desc: 'Cognitive health tracking, digital assistant solutions, and personalized brain fitness exercises powered by Beynex.',
            icon: '🤖',
            slug: 'online-saglik-asistan'
          },
          {
            title: 'AI Healthcare Services',
            brand: 'Niceye',
            link: 'https://niceye.com/vidizayn',
            desc: 'AI-assisted medical content design, diagnostic support algorithms, and innovative health applications.',
            icon: '⚡',
            slug: 'ai-saglik-hizmetleri'
          },
          {
            title: 'Wearable Tech & Live Stream',
            brand: 'Niceye',
            link: 'https://niceye.com/vistream',
            desc: 'Wearable sensor integration and uninterrupted HD live broadcasts from operating rooms powered by Niceye Vistream.',
            icon: '📡',
            slug: 'giyilebilir-teknoloji-online-canli-yayin'
          }
        ],
        'alx-need': [
          {
            title: 'Medical & Scientific',
            brand: 'Gama CRO',
            link: 'https://gamacro.com/medical-writing/',
            desc: 'International-standard medical writing, scientific papers, and literature summaries by Gama CRO.',
            icon: '🔬',
            slug: 'medikal-bilimsel'
          },
          {
            title: 'Statistics & Translation',
            brand: 'Gama CRO',
            link: 'https://gamacro.com/bioinformatics-and-data-analysis/',
            desc: 'Biomedical data analysis, biostatistical reporting, and certified medical translation by Gama CRO Bioinformatics.',
            icon: '📊',
            slug: 'istatistik-ceviri'
          },
          {
            title: 'Omnichannel Brand Management',
            brand: 'Niceye',
            link: 'https://niceye.com/niceyeit',
            desc: 'Integrated omnichannel medical brand management and communication strategies across physical and digital touchpoints.',
            icon: '🔄',
            slug: 'omnichannel'
          }
        ]
      },
      courses: [
        { title: 'Hands-on Courses', desc: 'Interactive, practical physical and medical workshops designed for stakeholder development.', icon: '🩺', badge: 'Practical Training' },
        { title: 'AI-Supported Courses', desc: 'Artificial intelligence algorithms, personalized learning modules, and smart clinical scenarios.', icon: '🤖', badge: 'AI-Supported' },
        { title: 'VR-Supported Experiential Learning', desc: 'Immersive operating room and clinical simulations using VR headsets and interactive modules.', icon: '🥽', badge: 'VR Experiential' }
      ],
      incentive: [
        { title: 'Indoor & Outdoor Motivational Activities', desc: 'High-energy indoor and outdoor team-building activities fostering camaraderie and company spirit.', icon: '⚡', badge: 'Motivation Event' },
        { title: 'Internal & External Stakeholder Launch Events', desc: 'Corporate launch events introducing your new products, services, or strategies.', icon: '🎤', badge: 'Launch Meeting' },
        { title: 'Company Picnics & Special Gatherings', desc: 'Unforgettable open-air picnics and celebrations for your teams and their families.', icon: '🎪', badge: 'Corporate Event' }
      ],
      corporateTravel: {
        guestServices: {
          motto: 'Enjoy Your Journey — Savor every moment, leave the rest to us',
          title: 'INTERNATIONAL GUEST SERVICES',
          subtitle: 'Your Guests\' Journey Begins With Our Professional Touch',
          lead: 'We manage all travel, hospitality, and event arrangements across Turkey from a single point for your international business partners, executives, and VIP guests.',
          text1: 'From luxury accommodation and VIP airport transfers to meeting planning, private banquets, and cultural city excursions, every detail is custom designed for your organization.',
          text2: 'While we transform your guests\' time in Turkey into a comfortable, safe, and memorable journey, you can focus on building strategic business relationships.',
          featureTitle: 'Every Detail From Arrival to Farewell is Our Responsibility',
          featureNote: 'Our experienced team manages the entire process from airport greetings to bespoke gala dinners with seamless attention to detail.',
          services: [
            'Airport Meet & Greet with VIP Transfers',
            'Luxury Hotel Bookings & Accommodation Management',
            'Exclusive Meeting & Event Organizations',
            'Fine Dining, Gourmet Banquets & Private Receptions',
            'Social & Cultural City Tours',
            '24/7 Dedicated Multilingual On-Site Support'
          ]
        },
        overseasTravel: {
          motto: 'Enjoy Your Journey — We Take Care of Every Detail',
          title: 'INTERNATIONAL TRAVEL & EVENTS',
          subtitle: 'Global Event and Corporate Travel Solutions',
          lead: 'We plan and execute corporate meetings, travel, incentives, and events across the globe — from Europe to the Far East, the Americas to the Middle East.',
          text: 'Whether it is an intimate executive meeting in a single capital or a large-scale international congress across multiple destinations, we manage the entire operation centrally.',
          featureTitle: 'Anywhere in the World, Centrally Managed',
          featureNote: 'We oversee destination selection, logistics, scheduling, and on-site coordination with end-to-end expertise.',
          services: [
            'International corporate conferences and seminars',
            'Congresses, symposiums, and scientific summits',
            'Educational and incentive travel programs',
            'Dealer, distributor, and stakeholder summits',
            'Brand launches and introductory campaigns',
            'Regional field strategy meetings',
            'Incentive tours and cultural excursions',
            'Exhibition and trade fair delegations',
            'Flight, hotel, and city transportation management',
            'VIP airport and intercity transfers',
            'Corporate banquets and evening social programs'
          ]
        },
        domesticTravel: {
          title: 'DOMESTIC TRAVEL & EVENTS',
          subtitle: 'Comprehensive Event and Travel Solutions in Turkey',
          lead: 'We coordinate meetings, events, and corporate travel throughout Turkey. Understanding diverse industry demands, we deliver customized, high-standard solutions aligned with your goals.',
          text: 'From corporate strategy meetings and dealer gatherings to medical conferences, product launches, and regional team summits, we meticulously coordinate every detail.',
          featureTitle: 'By Your Side at Every Step of the Journey',
          featureNote: 'We centrally oversee venue selection, AV equipment, transfers, hospitality, catering, and social itineraries from inception to post-event wrap-up.',
          services: [
            'Corporate meetings, seminars, and workshops',
            'Training and team motivation organizations',
            'Dealer, distributor, and business partner summits',
            'Product launches and promotional campaigns',
            'Scientific congresses and medical symposiums',
            'Specialized healthcare professional gatherings',
            'Regional and field sales meetings',
            'Corporate retreats and special excursions',
            'Accommodation, flight, and transfer coordination',
            'Corporate banquets, dinners, and social events'
          ]
        }
      }
    },
    sidebarConfig: {
      contactTitle: 'Have Questions?',
      contactDesc: 'Our dedicated team will be delighted to answer any inquiries regarding our services and your upcoming projects.',
      featuresTitle: 'Key Highlights',
      features: [
        { icon: '✨', title: 'Quality Guarantee', desc: 'International quality standards' },
        { icon: '🚀', title: 'Swift Integration', desc: 'Seamless adaptation to your workflows' },
        { icon: '🌐', title: 'Global Accessibility', desc: '360° strategic business partnership' }
      ]
    },
    legalPages: {
      privacyPolicy: {
        title: 'Privacy and Personal Data Protection Policy',
        lastUpdated: '2026',
        content: `At Alexander Troy, the security and confidentiality of personal data belonging to our clients, partners, and visitors is our highest priority. In compliance with data protection laws (including KVKK and international standards), all information shared with us is processed solely for executing requested MICE events, corporate travel, digital healthcare, or medical consulting services.

Your personal data is never shared with unauthorized third parties without your explicit consent, except where required by law. All data collected in our systems is guarded by state-of-the-art encryption protocols.`
      },
      termsOfService: {
        title: 'Terms of Service & Usage Conditions',
        lastUpdated: '2026',
        content: `All visitors to this website are deemed to have accepted these terms of service. All content, visuals, trademarks, logos, and design elements presented by Alexander Troy are protected under international copyright and intellectual property laws.

Reproduction, duplication, or commercial exploitation of site content without prior written consent is strictly prohibited. RFPs and event requests submitted through the portal are subject to operational review.`
      },
      kvkk: {
        title: 'Data Protection & Privacy Notice',
        lastUpdated: '2026',
        content: `Alexander Troy ("Company") processes your personal data in full compliance with applicable data protection regulations. Personal details collected via inquiry forms, event registrations, and operational bookings are utilized solely for service fulfillment.

You have the right to inquire about your processed data, request corrections, or ask for deletion at any time by contacting our data protection officer.`
      }
    },
    orgFormConfig: {
      badge: 'Online RFP & Planning',
      title: 'Organization Request Form',
      subtitle: 'Contact Us for Event & Travel Planning',
      desc: 'Fill out the form below to receive a customized proposal for a seamless organization experience aligned with your goals.',
      orgTypes: [
        'Meeting / Seminar',
        'Congress / Symposium',
        'Training Program',
        'Dealer / Distributor Gathering',
        'Product Launch / Promotion',
        'Motivation / Incentive',
        'Corporate Travel',
        'Exhibition / Fair',
        'Other'
      ],
      servicesList: [
        'Flights / Transportation',
        'Hotel / Accommodation',
        'Airport & City Transfers',
        'Meeting / Event Venue',
        'Technical Equipment & Production',
        'Dining / Banquet Services',
        'Social Programs & Activities',
        'Tour Guiding Services',
        'Other'
      ],
      submitBtnText: 'Submit Proposal Request',
      successTitle: 'Your Request Has Been Received!',
      successDesc: 'Our operations team will review your requirements and get in touch with you shortly.'
    }
  }
};

export const defaultContent = {
  ...defaultContentTR,
  en: defaultContentEN
};
