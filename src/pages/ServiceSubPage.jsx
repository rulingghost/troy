import React from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink, MapPin, Globe, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrganizationContactForm from '../components/OrganizationContactForm';
import './ServiceSubPage.css';

const categoryData = {
  'alx-mice': {
    title: 'Alx MICE',
    desc: 'Yurt içi ve yurt dışı kongre, toplantı, sempozyum hizmetleri (Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    subServices: [
      { title: 'Yurtiçi Kongre', desc: 'Ulusal ölçekte kardiyoloji ve medikal kongre organizasyonları.', icon: '🇹🇷', slug: 'yurtici-kongre' },
      { title: 'Yurtdışı Kongre', desc: 'Uluslararası kardioloji ve tıp kongreleri katılım ve uçtan uca yönetimi.', icon: '🌐', slug: 'yurtdisi-kongre' },
      { title: 'Toplantı', desc: 'Lokal ve global katılımcılara özel nitelikli toplantı çözümleri.', icon: '👥', slug: 'toplanti' },
      { title: 'Yurtiçi Sempozyum', desc: 'Nörobilim, solunum ve sağlık alanındaki ulusal sempozyumlar.', icon: '🏥', slug: 'yurtici-sempozyum' },
      { title: 'Yurtdışı Sempozyum', desc: 'Dünya ölçeğindeki tıbbi ve bilimsel zirve sempozyumları.', icon: '🌍', slug: 'yurtdisi-sempozyum' }
    ],
    stats: [
      { value: '25+', label: 'Yıllık Tecrübe' },
      { value: '500+', label: 'Tamamlanan Organizasyon' },
      { value: '%100', label: 'Müşteri Memnuniyeti' },
      { value: '360°', label: 'Uçtan Uca Destek' }
    ]
  },
  'alx-4-you': {
    title: 'Alx 4 You',
    desc: 'Size özel planlanan yurt içi ve yurt dışı toplantı, preceptorship, kurs ve seminer, incentive hizmetleri (Tanıtım yönetmeliğine uygun program, kurum iletişimi, toplantı altyapı hizmeti, Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    subServices: [
      { title: 'Own Event - Yurtiçi', desc: 'Kapadokya, Kars, Trabzon, Gaziantep, Hatay ve Çanakkale organizasyonları.', icon: '🇹🇷', slug: 'own-event-yurtici' },
      { title: 'Own Event - Yurtdışı', desc: 'İspanya, İtalya, Cezayir, Mısır, Arnavutluk, Kosova, Makedonya ve Azerbaycan organizasyonları.', icon: '🌐', slug: 'own-event-yurtdisi' },
      { title: 'Yurtiçi Preceptorship', desc: 'Bronkoskopi, TAVİ, Bifürkasyon, Parkinson Pil Cerrahisi deneyim programları.', icon: '🏥', slug: 'preceptorship-yurtici' },
      { title: 'Yurtdışı Preceptorship', desc: 'Bronkoskopi, EBUS, TAVİ, Bifürkasyon uluslararası gözlem programları.', icon: '🌍', slug: 'preceptorship-yurtdisi' },
      { title: 'Uygulamalı Kurslar', desc: 'Paydaşlar için gelişimi interaktif ve pratik hale getiren eğitimler.', icon: '🩺', slug: 'uygulamali-kurslar' },
      { title: 'AI Destekli Kurslar', desc: 'Yapay zeka destekli akıllı öğrenim modülleri ve içerikler.', icon: '🤖', slug: 'ai-destekli-kurslar' },
      { title: 'VR Destekli Öğrenme', desc: 'Sanal gerçeklik (VR) teknolojileriyle deneyimsel klinik öğrenme.', icon: '🥽', slug: 'vr-destekli-ogrenme' },
      { title: 'Motivasyonel Faaliyetler', desc: 'Indoor & Outdoor motivasyon ve takım ruhu etkinlikleri.', icon: '⚡', slug: 'motivasyonel-faaliyetler' },
      { title: 'Lansman Toplantıları', desc: 'İç ve dış paydaşlara özel konsept lansman organizasyonları.', icon: '🎤', slug: 'lansman-toplantilari' },
      { title: 'Şirket Piknikleri', desc: 'Kurum kültürünü besleyen şirket piknikleri ve açık alan etkinlikleri.', icon: '🎪', slug: 'sirket-piknikleri' }
    ],
    stats: [
      { value: 'Butik', label: 'İhtiyaca Özel Çözüm' },
      { value: 'Global', label: 'Uluslararası Ağ' },
      { value: 'Mevzuat', label: 'Yönetmeliğe Uygunluk' },
      { value: '7/24', label: 'Kurum İletişimi Altyapısı' }
    ]
  },
  'alx-digi': {
    title: 'Alx Digi',
    desc: 'Online sağlık danışmanlık ve asistan uygulamaları (Doktorum Yanımda, Beynex), AI destekli sağlık hizmetleri (Niceye Vidizayn), giyilebilir teknoloji ve canlı yayın platformu (Niceye Vistream).',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    subServices: [
      { title: 'Online Sağlık Danışmanlık', desc: 'Doktorum Yanımda altyapısı ile görüntülü danışmanlık.', icon: '🩺', slug: 'online-saglik-danismanlik', brand: 'Doktorum Yanımda', link: 'https://doktorumyanimda.net/' },
      { title: 'Online Sağlık Asistan', desc: 'Beynex platformu ile akıllı dijital asistan sistemleri.', icon: '🤖', slug: 'online-saglik-asistan', brand: 'Beynex', link: 'https://www.beynex.com/tr/' },
      { title: 'AI Sağlık Hizmetleri', desc: 'Niceye (Vidizayn) ile yapay zeka destekli içerik ve tanı araçları.', icon: '⚡', slug: 'ai-saglik-hizmetleri', brand: 'Niceye', link: 'https://niceye.com/vidizayn' },
      { title: 'Giyilebilir Teknoloji & Canlı Yayın', desc: 'Niceye (Vistream) ile giyilebilir teknoloji ve canlı yayın altyapısı.', icon: '📡', slug: 'giyilebilir-teknoloji-online-canli-yayin', brand: 'Niceye', link: 'https://niceye.com/vistream' }
    ],
    stats: [
      { value: 'AI', label: 'Yapay Zeka Destekli' },
      { value: 'Live', label: 'Canlı Yayın Altyapısı' },
      { value: 'IoT', label: 'Giyilebilir Teknolojiler' },
      { value: '%99.9', label: 'Platform Erişilebilirliği' }
    ]
  },
  'alx-need': {
    title: 'Alx Need',
    desc: 'Medikal ve bilimsel hizmetler (Gama CRO Medical Writing), biyo-istatistik ve çeviri hizmetleri (Gama CRO Bioinformatics), omnichannel marka yönetimi (Niceye IT).',
    heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    subServices: [
      { title: 'Medikal & Bilimsel', desc: 'Gama CRO ile medikal yazım ve bilimsel danışmanlık.', icon: '🔬', slug: 'medikal-bilimsel', brand: 'Gama CRO', link: 'https://gamacro.com/medical-writing/' },
      { title: 'İstatistik & Çeviri', desc: 'Gama CRO ile biyo-istatistiksel analizler ve tıbbi çeviri.', icon: '📊', slug: 'istatistik-ceviri', brand: 'Gama CRO', link: 'https://gamacro.com/bioinformatics-and-data-analysis/' },
      { title: 'Omnichannel Marka Yönetimi', desc: 'Niceye (Niceye IT) ile entegre omnichannel pazarlama.', icon: '🔄', slug: 'omnichannel', brand: 'Niceye', link: 'https://niceye.com/niceyeit' }
    ],
    stats: [
      { value: '360°', label: 'Omnichannel Strateji' },
      { value: 'Medikal', label: 'Uzman Bilimsel Kadro' },
      { value: 'Hassas', label: 'Biyo-istatistik & Çeviri' },
      { value: 'Sürdürülebilir', label: 'Marka Büyüme Modeli' }
    ]
  }
};

const partnerPlatforms = {
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
};

const congressEvents = [
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
];

const destinationItems = {
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
};

const preceptorshipItems = {
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
};

const coursesData = [
  { title: 'Uygulamalı Kurslar', desc: 'Paydaşlarınız için gelişimi interaktif, pratik ve keyifli hale getiren fiziksel & medikal atölyeler.', icon: '🩺', badge: 'Uygulamalı Eğitim' },
  { title: 'AI Destekli Kurslar', desc: 'Yapay zeka algoritmaları, kişiselleştirilmiş öğrenme modülleri ve akıllı klinik senaryolar.', icon: '🤖', badge: 'AI Destekli' },
  { title: 'VR Destekli Deneyimsel Öğrenme', desc: 'Sanal gerçeklik gözlükleri ve simülatörlerle ameliyathane ve klinik ortam deneyimi.', icon: '🥽', badge: 'VR Deneyimsel' }
];

const incentiveData = [
  { title: 'Indoor & Outdoor Motivasyonel Faaliyetler', desc: 'Takım ruhunu pekiştiren, enerjiyi yükselten iç ve dış mekan motivasyon aktiviteleri.', icon: '⚡', badge: 'Motivasyon Etkinliği' },
  { title: 'İç ve Dış Paydaş Lansman Toplantıları', desc: 'Yeni ürün, hizmet veya stratejilerinizin kurumsal lansman organizasyonları.', icon: '🎤', badge: 'Lansman Toplantısı' },
  { title: 'Şirket Piknikleri ve Özel Etkinlikler', desc: 'Çalışan aileleri ve ekibiniz için unutulmaz açık alan konsept piknik organizasyonları.', icon: '🎪', badge: 'Kurumsal Etkinlik' }
];

const ServiceSubPage = ({ categoryTitle, pageTitle, category, slug }) => {
  const catKey = (category || '').toLowerCase();
  const catInfo = categoryData[catKey] || categoryData['alx-mice'];
  const activeSlug = (slug || '').toLowerCase();

  // Filter congress events if applicable
  const filteredEvents = congressEvents.filter(ev => ev.category === activeSlug);
  const showEventsSection = filteredEvents.length > 0 || (catKey === 'alx-mice' && activeSlug.includes('kongre')) || activeSlug.includes('sempozyum');

  // Check destination display for Alx 4 You / Own Event
  const isOwnEventYurtici = activeSlug === 'own-event-yurtici';
  const isOwnEventYurtdisi = activeSlug === 'own-event-yurtdisi';
  const showDestinations = isOwnEventYurtici || isOwnEventYurtdisi || activeSlug.includes('own-event');

  // Check Preceptorship
  const isPrecepYurtici = activeSlug === 'preceptorship-yurtici';
  const isPrecepYurtdisi = activeSlug === 'preceptorship-yurtdisi';
  const showPreceptorship = isPrecepYurtici || isPrecepYurtdisi || activeSlug.includes('preceptorship');

  // Check Courses
  const showCourses = activeSlug.includes('kurs') || activeSlug.includes('ogrenme') || activeSlug === 'kurs-egitim';

  // Check Incentive
  const showIncentive = activeSlug.includes('motivasyon') || activeSlug.includes('lansman') || activeSlug.includes('piknik') || activeSlug === 'incentive';

  return (
    <div className="service-theme-wrapper">
      <div className="container service-theme-container">
        {/* Section 1: Hero */}
        <section className="service-hero-section">
          <div className="service-hero-image">
            <img 
              src={catInfo.heroImage} 
              alt={catInfo.title} 
            />
          </div>
          <div className="service-hero-content">
            <div className="service-breadcrumb">
              <Link to="/">Anasayfa</Link>
              <ChevronRight size={14} className="bread-icon" />
              <Link to={`/${catKey}`}>{categoryTitle}</Link>
              {pageTitle && (
                <>
                  <ChevronRight size={14} className="bread-icon" />
                  <span className="bread-active">{pageTitle}</span>
                </>
              )}
            </div>

            <div className="service-badge-container">
              <div className="service-badge-tag">
                <Sparkles size={14} className="sparkle-icon" />
                <span>Alexander Troy • {categoryTitle}</span>
              </div>
            </div>

            <h1 className="service-hero-title">{pageTitle || catInfo.title}</h1>
            <p className="service-hero-desc">
              {catInfo.desc}
            </p>
            <Link to="/iletisim" className="service-hero-link">
              BİZE ULAŞIN
              <ArrowUpRight size={28} />
            </Link>
          </div>
        </section>

        {/* Section 2: Sub-Services Menu */}
        <section className="service-services-section">
          <h2 className="service-section-title">{catInfo.title} Hizmet Başlıkları</h2>
          <div className="service-services-grid">
            {catInfo.subServices.map((sub, idx) => (
              <Link 
                to={`/${catKey}/${sub.slug}`} 
                key={idx} 
                className={`service-service-card ${activeSlug === sub.slug ? 'active-service' : ''}`}
              >
                <div className="service-service-top">
                  <span className="service-emoji">{sub.icon}</span>
                </div>
                <div className="service-service-bottom">
                  <h3>{sub.title}</h3>
                  {sub.brand && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: '700', margin: '2px 0 6px 0', display: 'block' }}>
                      {sub.brand}
                    </span>
                  )}
                  <p className="service-card-desc">{sub.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Dynamic Section: Partner Platforms (Alx Digi & Alx Need) */}
        {(catKey === 'alx-digi' || catKey === 'alx-need') && partnerPlatforms[catKey] && (
          <section className="events-links-section">
            <h2 className="service-section-title">
              {catKey === 'alx-digi' ? 'Öne Çıkan Dijital & AI Sağlık Platformları' : 'Stratejik Medikal & Bilimsel Çözüm Ortakları'}
            </h2>
            <div className="events-grid">
              {partnerPlatforms[catKey].map((plat, idx) => (
                <div key={idx} className={`event-card ${activeSlug === plat.slug ? 'active-partner-card' : ''}`}>
                  <div className="event-header">
                    <span className="event-badge">{plat.brand}</span>
                    <span style={{ fontSize: '1.8rem' }}>{plat.icon}</span>
                  </div>
                  <h3 className="event-title">{plat.title}</h3>
                  <div className="event-org">Platform / Hizmet: {plat.brand}</div>
                  <p className="event-desc">{plat.desc}</p>
                  <a 
                    href={plat.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline event-link-btn"
                  >
                    Resmi Web Sitesini Ziyaret Et ({plat.brand}) <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Section: Preceptorship Cards */}
        {showPreceptorship && (
          <section className="events-links-section">
            <h2 className="service-section-title">
              {isPrecepYurtdisi ? 'Yurtdışı Preceptorship Programları' : 'Yurtiçi Preceptorship Programları'}
            </h2>
            <p className="section-note-text">
              * Not: Görsellerinizi sisteme yüklediğinizde kartlar otomatik güncellenecektir.
            </p>
            <div className="preceptorship-grid">
              {((isPrecepYurtdisi ? preceptorshipItems.yurtdisi : preceptorshipItems.yurtici)).map((item, idx) => (
                <div key={idx} className="preceptor-card">
                  <div className="preceptor-image-wrapper">
                    <img src={item.image} alt={item.title} />
                    <span className="preceptor-badge">{item.badge}</span>
                  </div>
                  <div className="preceptor-info">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link to="/iletisim" className="btn btn-outline preceptor-btn">
                      Detaylı Bilgi &amp; Başvuru
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Section: Kurs & Eğitim Cards */}
        {showCourses && (
          <section className="events-links-section">
            <h2 className="service-section-title">Kurs &amp; Eğitim Programlarımız</h2>
            <div className="courses-grid">
              {coursesData.map((course, idx) => (
                <div key={idx} className="course-card">
                  <div className="course-top">
                    <span className="course-emoji">{course.icon}</span>
                    <span className="course-badge">{course.badge}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.desc}</p>
                  <Link to="/iletisim" className="btn btn-primary course-btn">
                    Eğitim Programına Katıl <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Section: Incentive Cards */}
        {showIncentive && (
          <section className="events-links-section">
            <h2 className="service-section-title">Incentive &amp; Motivasyon Etkinliklerimiz</h2>
            <div className="incentive-grid">
              {incentiveData.map((inc, idx) => (
                <div key={idx} className="incentive-card">
                  <div className="incentive-top">
                    <span className="incentive-emoji">{inc.icon}</span>
                    <span className="incentive-badge">{inc.badge}</span>
                  </div>
                  <h3>{inc.title}</h3>
                  <p>{inc.desc}</p>
                  <Link to="/iletisim" className="btn btn-outline incentive-btn">
                    Etkinlik Planla
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Section: Congress & Symposium External Links */}
        {showEventsSection && (
          <section className="events-links-section">
            <h2 className="service-section-title">
              {activeSlug.includes('sempozyum') ? 'Öne Çıkan Sempozyumlar' : 'Öne Çıkan Kongreler'}
            </h2>
            <div className="events-grid">
              {(filteredEvents.length > 0 ? filteredEvents : congressEvents).map((ev, idx) => (
                <div key={idx} className="event-card">
                  <div className="event-header">
                    <span className="event-badge">{ev.badge}</span>
                    <Globe size={20} className="event-icon" />
                  </div>
                  <h3 className="event-title">{ev.title}</h3>
                  <div className="event-org">{ev.org}</div>
                  <p className="event-desc">{ev.desc}</p>
                  <a 
                    href={ev.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline event-link-btn"
                  >
                    Resmi Web Sitesini Ziyaret Et <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dynamic Section: Own Event Destinations */}
        {showDestinations && (
          <section className="destinations-section">
            {!isOwnEventYurtici && (
              <div className="destination-block">
                <h2 className="service-section-title">Yurtdışı Destinasyonları &amp; Simge Yapıları</h2>
                <div className="destinations-grid">
                  {destinationItems.yurtdisi.map((dest, idx) => (
                    <div key={idx} className="destination-card">
                      <div className="dest-image-wrapper">
                        <img 
                          src={dest.image} 
                          alt={dest.name} 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600';
                          }}
                        />
                        <span className="dest-flag">{dest.icon}</span>
                      </div>
                      <div className="dest-info">
                        <h3>{dest.name}</h3>
                        <p className="dest-landmark"><MapPin size={14} /> {dest.landmark}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isOwnEventYurtdisi && (
              <div className="destination-block" style={{ marginTop: '60px' }}>
                <h2 className="service-section-title">Yurtiçi Destinasyonları &amp; Simge İkonları</h2>
                <div className="destinations-grid">
                  {destinationItems.yurtici.map((dest, idx) => (
                    <div key={idx} className="destination-card">
                      <div className="dest-image-wrapper">
                        <img 
                          src={dest.image} 
                          alt={dest.name} 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600';
                          }}
                        />
                        <span className="dest-flag">{dest.icon}</span>
                      </div>
                      <div className="dest-info">
                        <h3>{dest.name}</h3>
                        <p className="dest-landmark"><MapPin size={14} /> {dest.landmark}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Dynamic Section: Rich Corporate Travel & Organization Content (Yurtdışı & Yurtiçi) */}
        {(catKey === 'alx-4-you' || activeSlug.includes('own-event')) && (
          <section className="events-links-section org-text-showcase">
            {(!isOwnEventYurtici || catKey === 'alx-4-you') && (
              <div className="org-detail-card glass-panel">
                <div className="org-card-header">
                  <span className="org-motto">&ldquo;Enjoy Your Journey&rdquo; — We Take Care of Every Detail</span>
                  <h2 className="org-main-title">YURTDIŞI SEYAHAT VE ORGANİZASYONLAR</h2>
                  <h3 className="org-subtitle">Dünya Genelinde Organizasyon ve Seyahat Çözümleri</h3>
                </div>
                <div className="org-card-body">
                  <p className="org-lead">
                    Kurumsal firmaların yurt dışındaki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını dünyanın her noktasında planlıyor ve yönetiyoruz. Avrupa’dan Uzak Doğu’ya, Amerika’dan Orta Doğu’ya kadar farklı destinasyonlarda; kurumların hedeflerine, katılımcı profiline ve organizasyonun kapsamına uygun profesyonel çözümler sunuyoruz.
                  </p>
                  <p className="org-text">
                    İster bir şehirde gerçekleştirilecek özel bir toplantı, ister farklı ülkeleri kapsayan geniş katılımlı bir organizasyon olsun; lokasyondan bağımsız olarak tüm operasyonu tek merkezden yönetiyoruz.
                  </p>

                  <div className="org-feature-block">
                    <h4>Dünyanın Her Noktasında, Tek Merkezden Organizasyon</h4>
                    <p className="org-desc-note">Yurt dışı organizasyonlarında destinasyon seçimi ve program planlamasından başlayarak tüm süreci uçtan uca yönetiyoruz.</p>
                    <div className="org-services-grid">
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Uluslararası şirket toplantıları ve seminerler</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kongre, sempozyum ve bilimsel toplantılar</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Eğitim ve motivasyon organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Bayi, distribütör ve iş ortağı toplantıları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Lansman ve tanıtım etkinlikleri</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Bölge ve saha toplantıları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kurumsal geziler ve incentive organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Fuar ve etkinlik katılım organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Konaklama, uçuş ve şehir içi ulaşım</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Havalimanı ve özel transfer organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kurumsal yemek, davet ve sosyal programlar</div>
                    </div>
                  </div>

                  <div className="org-dual-blocks">
                    <div className="org-block-box">
                      <h4>Baştan Sona Kusursuz Planlama</h4>
                      <p>Uluslararası organizasyonların beraberinde getirdiği farklı ihtiyaçları ve operasyonel detayları biliyor, her aşamayı önceden planlıyoruz. Uçuş ve transferlerden konaklamaya, toplantı mekanlarından etkinlik programlarına ve sosyal aktivitelere kadar tüm süreci koordineli biçimde yönetiyoruz.</p>
                      <p>Farklı ülkelerdeki yerel çözüm ortaklarımız ve global organizasyon ağımız sayesinde, dünyanın neresinde olursa olsun kurumunuzun ihtiyaçlarına hızlı ve güvenilir çözümler sunuyoruz.</p>
                    </div>
                    <div className="org-block-box">
                      <h4>Dünyanın Her Yerinde, Aynı Özen</h4>
                      <p>Her destinasyonun kendine özgü koşullarını dikkate alarak, kurumunuzun beklentilerine uygun programlar oluşturuyoruz. Katılımcı deneyimini, operasyonel kusursuzluğu ve organizasyonun hedeflerini bir arada gözetiyoruz.</p>
                      <p className="org-highlight-quote">&ldquo;Siz organizasyonunuzun hedefini belirleyin, dünyanın neresinde olursa olsun tüm detaylarını biz planlayalım.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(!isOwnEventYurtdisi || catKey === 'alx-4-you') && (
              <div className="org-detail-card glass-panel" style={{ marginTop: '40px' }}>
                <div className="org-card-header">
                  <h2 className="org-main-title">YURTİÇİ SEYAHAT VE ORGANİZASYONLAR</h2>
                  <h3 className="org-subtitle">Yurt İçi Organizasyon ve Seyahat Çözümleri</h3>
                </div>
                <div className="org-card-body">
                  <p className="org-lead">
                    Kurumsal firmaların yurt içindeki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını uçtan uca planlıyor ve yönetiyoruz. Farklı sektörlerde faaliyet gösteren kurumların ihtiyaçlarını anlayarak; her organizasyonun amacına, katılımcı profiline ve programına uygun, profesyonel çözümler sunuyoruz.
                  </p>
                  <p className="org-text">
                    Şirket toplantıları, seminer ve eğitimler, bayi organizasyonları, motivasyon gezileri, lansmanlar, kongre ve sempozyumlar, hekim ve sağlık profesyonellerine yönelik toplantılar, bölge toplantıları ve özel kurumsal etkinlikler dahil olmak üzere her ölçekteki organizasyonu titizlikle planlıyoruz.
                  </p>

                  <div className="org-feature-block">
                    <h4>Organizasyonun Her Aşamasında Yanınızdayız</h4>
                    <p className="org-desc-note">Bir organizasyonun yalnızca etkinlik gününden ibaret olmadığını biliyoruz. Bu nedenle planlama aşamasından başlayarak ulaşım, konaklama, toplantı mekanı, transfer, teknik ihtiyaçlar, yemek ve sosyal programlar dahil olmak üzere tüm detayları tek merkezden yönetiyoruz.</p>
                    <div className="org-services-grid">
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kurumsal toplantı ve seminerler</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Eğitim ve motivasyon organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Bayi, distribütör ve iş ortağı toplantıları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Lansman ve tanıtım etkinlikleri</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kongre, sempozyum ve bilimsel toplantılar</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Hekim ve sağlık profesyonellerine yönelik organizasyonlar</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Bölge ve saha toplantıları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kurumsal geziler ve özel etkinlikler</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Konaklama, ulaşım ve transfer organizasyonları</div>
                      <div className="org-service-item"><CheckCircle2 size={16} className="check-icon" /> Kurumsal yemek ve sosyal programlar</div>
                    </div>
                  </div>

                  <div className="org-single-block">
                    <h4>Her Kuruma, İhtiyacına Özel Çözüm</h4>
                    <p>Her kurumun beklentisinin ve organizasyon hedefinin farklı olduğuna inanıyoruz. Bu nedenle hazır paketler yerine, kurumun ihtiyaçlarına ve organizasyonun amacına göre şekillenen çözümler geliştiriyoruz.</p>
                    <p>Katılımcıların seyahatinden konaklamasına, toplantı alanından etkinlik programına kadar tüm süreci koordineli biçimde yöneterek kurumların organizasyon yükünü üstleniyoruz.</p>
                    <p className="org-highlight-quote">&ldquo;Siz organizasyonunuzun amacına odaklanın, biz tüm detayları planlayıp yönetelim.&rdquo;</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Form Integration for Organization Pages */}
        {catKey === 'alx-4-you' && <OrganizationContactForm />}

        {/* Section 3: Hexagon Stats */}
        <section className="service-stats-section">
          <div className="service-stats-container">
            {catInfo.stats.map((stat, idx) => (
              <div key={idx} className="hexagon-wrapper">
                <div className="hexagon">
                  <div className="hexagon-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="service-cta-wrapper">
            <Link to="/iletisim" className="btn btn-primary service-cta-btn">
              {catInfo.title} İle İletişime Geçin <ArrowRight size={20} className="cta-arrow" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceSubPage;
