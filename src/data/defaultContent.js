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
          name: 'Stratejik Çözümler',
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
  }
};

