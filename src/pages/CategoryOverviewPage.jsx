import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Target, 
  Award, 
  Globe, 
  Calendar, 
  Users, 
  Cpu, 
  Stethoscope, 
  HeartHandshake, 
  Zap, 
  BarChart3,
  MapPin,
  GraduationCap,
  Tv,
  ExternalLink
} from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './CategoryOverviewPage.css';

const categoryOverviewData = {
  'kurumsal': {
    id: 'kurumsal',
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
            icon: Building2,
            tag: 'Kurumsal Kimlik',
            shortDesc: 'Biz kimiz? 25 yıldır ulusal ve uluslararası çerçevede güvenilir ve sürdürülebilir iş paydaşı sorumluluğuyla hareket eden Amerika merkezli organizasyonel yapımız.',
            highlights: ['25 yıllık sektörel birikim', 'Amerika merkezli global yapı', 'Stratejik partnerlik anlayışı']
          },
          {
            name: 'Vizyon',
            path: '/kurumsal/vizyon',
            icon: Target,
            tag: 'Stratejik Vizyon',
            shortDesc: 'Sağlık sektörünün var olan veya farkında olmadığı ihtiyaçlarını öngörerek çözüm üreten & fark yaratan lider stratejik iş ortağı olmak.',
            highlights: ['Öngörülü ve proaktif yaklaşım', 'Sektörel ihtiyaçları kurgulama', 'Bilimsel temelli metodoloji']
          },
          {
            name: 'Misyon',
            path: '/kurumsal/misyon',
            icon: Award,
            tag: 'Temel Misyon',
            shortDesc: 'Lokal & global çerçevede sunduğumuz bilimsel temelli butik çözümlerle sürdürülebilir & güvenilir bir paydaş olma misyonu.',
            highlights: ['Butik ve özgün çözümler', 'Lokal & global standartlar', 'Sürdürülebilir paydaşlık']
          }
        ]
      }
    ],
    features: [
      { icon: HeartHandshake, title: 'Güvenilir İş Paydaşı', desc: 'Uçtan uca şeffaf ve sürdürülebilir operasyonel yaklaşım.' },
      { icon: Globe, title: 'Global Vizyon', desc: 'Amerika merkezli altyapı ve uluslararası erişim gücü.' },
      { icon: Sparkles, title: 'Butik Çözümler', desc: 'Kurumunuzun özgün dinamiklerine özel kurgulanan stratejiler.' }
    ]
  },

  'alx-mice': {
    id: 'alx-mice',
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
            icon: Building2,
            tag: 'Ulusal Kongreler',
            shortDesc: 'Türkiye genelinde kardiyoloji, tıp ve medikal branşlarda gerçekleşen ulusal kongrelerin organizasyonu ve delegasyon yönetimi.',
            highlights: ['Lokal konaklama & transfer', 'Kayıt ve karşılama altyapısı', 'Bütçe & mevzuat yönetimi']
          },
          {
            name: 'Yurtdışı Kongre',
            path: '/alx-mice/yurtdisi-kongre',
            icon: Globe,
            tag: 'Uluslararası Etkinlik',
            shortDesc: 'ESC Congress gibi dünya çapındaki prestijli tıp ve kardiyoloji kongrelerine eksiksiz katılım ve operasyon desteği.',
            highlights: ['Uluslararası uçak & konaklama', 'Vize & lojistik takibi', 'Profesyonel rehberlik']
          },
          {
            name: 'Toplantı',
            path: '/alx-mice/toplanti',
            icon: Users,
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
            icon: Calendar,
            tag: 'Bilimsel Sempozyum',
            shortDesc: 'Nörobilim, Solunum ve bölgesel tıbbi uzmanlık zirvelerinin yurt içindeki kusursuz planlanması ve yönetimi.',
            highlights: ['Akademik içerik ve konuşmacı yönetimi', 'Afiş & dijital bildiriler', 'Özel gala organizasyonları']
          },
          {
            name: 'Yurtdışı Sempozyum',
            path: '/alx-mice/yurtdisi-sempozyum',
            icon: Globe,
            tag: 'Global Zirveler',
            shortDesc: 'Dünya ölçeğindeki Akciğer Sağlığı ve tıp sempozyumlarına katılım, konaklama ve 360° grup operasyonu.',
            highlights: ['Global koordinasyon', 'Tur & kültür programları', '7/24 rehber ve saha ekibi']
          }
        ]
      }
    ],
    features: [
      { icon: Globe, title: 'Uçtan Uca Lojistik', desc: 'Uçak bileti, konaklama, VIP transfer ve otel yönetimi.' },
      { icon: Calendar, title: 'Zamanında Operasyon', desc: 'Dakik ve hatasız akış yönetimi ile tam zamanında hizmet.' },
      { icon: Users, title: 'Rehberlik & Tur', desc: 'Organizasyon boyunca uzman kokartlı rehberlik ve özel geziler.' }
    ]
  },

  'alx-4-you': {
    id: 'alx-4-you',
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
            icon: MapPin,
            tag: 'Yurt İçi Destinasyon',
            shortDesc: 'Kurumsal firmaların yurt içindeki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını uçtan uca planlıyor ve yönetiyoruz.',
            highlights: ['Kurumsal toplantı & lansmanlar', 'Eğitim, bayi & motivasyon gezileri', 'Konaklama, ulaşım & transfer organizasyonları']
          },
          {
            name: 'Yurtdışı Seyahat ve Organizasyonlar',
            path: '/alx-4-you/own-event-yurtdisi',
            icon: Globe,
            tag: 'Yurtdışı Destinasyon',
            shortDesc: 'Kurumsal firmaların yurt dışındaki toplantı, etkinlik, seyahat ve organizasyon ihtiyaçlarını dünyanın her noktasında planlıyor ve yönetiyoruz.',
            highlights: ['Dünya genelinde organizasyon & seyahat', 'Uluslararası toplantı, kongre & incentive', 'Lokasyondan bağımsız tek merkezden yönetim']
          },
          {
            name: 'Uluslararası Misafir Hizmetleri',
            path: '/alx-4-you/uluslararasi-misafir-hizmetleri',
            icon: HeartHandshake,
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
            icon: Stethoscope,
            tag: 'Yurtiçi Gözlem',
            shortDesc: 'Bronkoskopi, TAVİ, Bifürkasyon ve Parkinson Pil Cerrahisi alanlarında Türkiye’nin öncü kliniklerinde gözlem ve pratik.',
            highlights: ['Canlı vaka takibi', 'Uzman hocalar ile workshop', 'Mevzuata uygun altyapı']
          },
          {
            name: 'Yurtdışı Preceptorship',
            path: '/alx-4-you/preceptorship-yurtdisi',
            icon: Globe,
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
            icon: GraduationCap,
            tag: 'Interaktif Atölye',
            shortDesc: 'Paydaşların gelişimini fiziksel maketler, simülatörler ve vaka çalışmalarıyla pratik hale getiren kurslar.',
            highlights: ['Birebir pratik yapma imkanı', 'Uzman eğitmen kadrosu', 'Interaktif grup dinamikleri']
          },
          {
            name: 'AI Destekli Kurslar',
            path: '/alx-4-you/ai-destekli-kurslar',
            icon: Cpu,
            tag: 'Yapay Zeka',
            shortDesc: 'Kişiselleştirilmiş öğrenme patikaları ve yapay zeka senaryoları ile zenginleştirilmiş içerikler.',
            highlights: ['Akıllı senaryo simülasyonu', 'Veri odaklı başarı takibi', 'Yeni nesil eğitim materyalleri']
          },
          {
            name: 'VR Destekli Öğrenme',
            path: '/alx-4-you/vr-destekli-ogrenme',
            icon: Zap,
            tag: 'Sanal Gerçeklik',
            shortDesc: 'VR gözlükleri ile klinik ortamı, ameliyathaneyi ve kompleks prosedürleri sanal ortamda deneyimleme.',
            highlights: ['3D Ameliyathane deneyimi', 'Sanal ortamda vaka pratikleri', 'Yüksek akılda kalıcılık']
          }
        ]
      },
      {
        groupTitle: 'Incentive & Kurumsal Motivasyon',
        groupDesc: 'Kurum kültürünü pekiştiren, sadakati ve enerjiyi artıran konsept etkinlikler.',
        items: [
          {
            name: 'Motivasyonel Faaliyetler',
            path: '/alx-4-you/motivasyonel-faaliyetler',
            icon: Zap,
            tag: 'Takım Ruhu',
            shortDesc: 'Indoor ve outdoor takım oyunları, macera turları ve motivasyon atölyeleri.',
            highlights: ['Ekip içi iletişimi güçlendirme', 'Açık hava ve kapalı alan oyunları', 'Enerji artıran kurgular']
          },
          {
            name: 'Lansman Toplantıları',
            path: '/alx-4-you/lansman-toplantilari',
            icon: Sparkles,
            tag: 'Ürün Lansmanı',
            shortDesc: 'İç ve dış paydaşlara yönelik vizyoner sahne tasarımları ve büyüleyici ürün tanıtım organizasyonları.',
            highlights: ['Kreatif konsept tasarımı', 'Show & prodüksiyon altyapısı', 'Etkileyici marka deneyimi']
          },
          {
            name: 'Şirket Piknikleri',
            path: '/alx-4-you/sirket-piknikleri',
            icon: Users,
            tag: 'Kurumsal Şenlik',
            shortDesc: 'Çalışanlar ve aileleri için açık havada eğlenceli, lezzetli ve unutulmaz piknik organizasyonları.',
            highlights: ['Aile katılımına uygun kurgu', 'Çocuk atölyeleri & sahneler', 'Gurme ikramlar']
          }
        ]
      }
    ],
    features: [
      { icon: Sparkles, title: 'Mevzuata Uyum', desc: 'Sağlık ve tanıtım yönetmeliklerine %100 uyumlu program takibi.' },
      { icon: GraduationCap, title: 'Deneyimsel Öğrenim', desc: 'Teoriden pratik alana aktarılan VR ve AI destekli metotlar.' },
      { icon: MapPin, title: 'Özgün Destinasyonlar', desc: 'Dünyanın ve Türkiye’nin en özel rotalarında unutulmaz anlar.' }
    ]
  },

  'alx-digi': {
    id: 'alx-digi',
    title: 'Alx Digi',
    badge: 'Dijital Sağlık, AI & Canlı Yayın',
    tagline: 'Sağlık Teknolojilerinde Dijital Dönüşüm',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920',
    description: 'Yapay zeka destekli sağlık aplikasyonları, 7/24 dijital danışmanlık, giyilebilir teknoloji entegrasyonu ve yüksek çözünürlüklü online canlı yayın platformu.',
    stats: [
      { value: 'AI', label: 'Destekli Altyapı' },
      { value: 'Live', label: 'Kesintisiz Yayın' },
      { value: 'IoT', label: 'Giyilebilir Cihazlar' },
      { value: '%99.9', label: 'Erişilebilirlik' }
    ],
    groups: [
      {
        groupTitle: 'Dijital Sağlık Çözümleri',
        groupDesc: 'Geleceğin medikal teknolojilerini bugünden hizmetinize sunan dijital çözümler.',
        items: [
          {
            name: 'Online Sağlık Danışmanlık',
            path: '/alx-digi/online-saglik-danismanlik',
            icon: Stethoscope,
            tag: 'Dijital Danışmanlık',
            brand: 'Doktorum Yanımda',
            externalUrl: 'https://doktorumyanimda.net/',
            shortDesc: 'Doktorum Yanımda altyapısıyla hekimler ve hastalar arasında güvenli, KVKK uyumlu ve yüksek kaliteli online görüntülü görüşme hizmetleri.',
            highlights: ['Doktorum Yanımda çözümü', 'Şifreli veri güvenliği', 'Görüntülü görüşme & randevu altyapısı']
          },
          {
            name: 'Online Sağlık Asistan',
            path: '/alx-digi/online-saglik-asistan',
            icon: Cpu,
            tag: 'Akıllı Asistan',
            brand: 'Beynex',
            externalUrl: 'https://www.beynex.com/tr/',
            shortDesc: 'Beynex platformu ile 7/24 erişilebilir, kullanıcı dostu ve akıllı algoritmalarla desteklenen dijital asistan sistemleri.',
            highlights: ['Beynex dijital asistan', '7/24 Kesintisiz destek', 'Otomatik hatırlatma & takip']
          },
          {
            name: 'AI Sağlık Hizmetleri',
            path: '/alx-digi/ai-saglik-hizmetleri',
            icon: Sparkles,
            tag: 'Yapay Zeka AI',
            brand: 'Niceye',
            externalUrl: 'https://niceye.com/vidizayn',
            shortDesc: 'Niceye (Vidizayn) teknolojisiyle yapay zeka destekli veri analizi, tanı yardımcı araçları ve kişiselleştirilmiş sağlık içerikleri.',
            highlights: ['Niceye Vidizayn altyapısı', 'Derin öğrenme algoritmaları', 'Kişiselleştirilmiş öneriler']
          },
          {
            name: 'Giyilebilir Teknoloji & Canlı Yayın',
            path: '/alx-digi/giyilebilir-teknoloji-online-canli-yayin',
            icon: Tv,
            tag: 'IoT & Live Stream',
            brand: 'Niceye',
            externalUrl: 'https://niceye.com/vistream',
            shortDesc: 'Niceye (Vistream) altyapısıyla sağlıkta giyilebilir sensör verilerinin entegrasyonu ve HD kalitesinde ameliyathane canlı yayını.',
            highlights: ['Niceye Vistream canlı yayın', 'Ameliyathane HD yayın altyapısı', 'Giyilebilir sensör entegrasyonu']
          }
        ]
      }
    ],
    features: [
      { icon: Cpu, title: 'Yapay Zeka Gücü', desc: 'Medikal süreçleri hızlandıran gelişmiş yapay zeka algoritmaları.' },
      { icon: Tv, title: 'Kesintisiz Canlı Yayın', desc: 'Uluslararası standartlarda gecikmesiz medikal canlı yayın.' },
      { icon: Stethoscope, title: 'KVKK & Veri Güvenliği', desc: 'Sağlık verileri için uçtan uca şifrelenmiş altyapı.' }
    ]
  },

  'alx-need': {
    id: 'alx-need',
    title: 'Alx Need',
    badge: 'Medikal & Omnichannel Strateji',
    tagline: 'Stratejik İletişim & Medikal Uzmanlık',
    heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1920',
    description: 'Medikal ve bilimsel metin yazımı, biyo-istatistiksel analizler, nitelikli tıbbi çeviri hizmetleri ve bütünsel omnichannel marka yönetimi.',
    stats: [
      { value: '360°', label: 'Omnichannel Strateji' },
      { value: 'Medikal', label: 'Uzman Kadro' },
      { value: 'Hassas', label: 'Biyo-İstatistik' },
      { value: 'Global', label: 'Tıbbi Çeviri' }
    ],
    groups: [
      {
        groupTitle: 'Stratejik & Bilimsel Çözümler',
        groupDesc: 'Sağlık sektörüne yönelik bilimsel doğruluk ve stratejik derinlik sunan hizmetler.',
        items: [
          {
            name: 'Medikal & Bilimsel',
            path: '/alx-need/medikal-bilimsel',
            icon: Stethoscope,
            tag: 'Medikal İçerik',
            brand: 'Gama CRO',
            externalUrl: 'https://gamacro.com/medical-writing/',
            shortDesc: 'Gama CRO medikal yazım (Medical Writing) uzmanlığı ile bilimsel makale yazımı, literatür özetleri ve hekim iletişimi içerikleri.',
            highlights: ['Gama CRO Medical Writing', 'Literatür & derleme hazırlığı', 'Bilimsel danışmanlık']
          },
          {
            name: 'İstatistik & Çeviri',
            path: '/alx-need/istatistik-ceviri',
            icon: BarChart3,
            tag: 'Biyo-İstatistik',
            brand: 'Gama CRO',
            externalUrl: 'https://gamacro.com/bioinformatics-and-data-analysis/',
            shortDesc: 'Gama CRO biyo-enformatik ve veri analizi (Bioinformatics & Data Analysis) ile biyo-istatistiksel raporlama ve nitelikli tıbbi çeviri.',
            highlights: ['Gama CRO Bio-informatics & Data Analysis', 'Biyo-istatistiksel analiz', 'Medikal & akademik çeviri']
          },
          {
            name: 'Omnichannel',
            path: '/alx-need/omnichannel',
            icon: Globe,
            tag: 'Entegre Marka',
            brand: 'Niceye',
            externalUrl: 'https://niceye.com/niceyeit',
            shortDesc: 'Niceye (Niceye IT) altyapısıyla tüm fiziksel ve dijital temas noktalarında markanızın mesajını entegre kılan pazarlama.',
            highlights: ['Niceye IT omnichannel çözümü', 'Fiziksel & dijital kanal entegrasyonu', 'Ölçülebilir marka büyütme']
          }
        ]
      }
    ],
    features: [
      { icon: BarChart3, title: 'Bilimsel Hassasiyet', desc: 'Biyo-istatistik ve medikal içeriklerde sıfır hata prensibi.' },
      { icon: Globe, title: 'Omnichannel Erişim', desc: 'Markanızın tüm kanallarda senkronize ve güçlü temsili.' },
      { icon: HeartHandshake, title: 'Uzman Kadro', desc: 'Doktor, istatistikçi ve medikal yazarlardan oluşan uzman ekip.' }
    ]
  }
};

const CategoryOverviewPage = () => {
  const { category } = useParams();
  const { content } = useContent();
  const catKey = (category || '').toLowerCase();
  const dynamicOverviews = content?.pages?.categoryOverviews || {};
  const defaultData = categoryOverviewData[catKey] || categoryOverviewData['kurumsal'];
  const catData = {
    ...defaultData,
    ...(dynamicOverviews[catKey] || {}),
    stats: dynamicOverviews[catKey]?.stats || defaultData.stats,
    groups: dynamicOverviews[catKey]?.groups || defaultData.groups,
    features: dynamicOverviews[catKey]?.features || defaultData.features
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="cat-overview-wrapper">
      {/* 1. Category Hero Banner */}
      <section className="cat-hero-section" style={{ backgroundImage: `url(${catData.heroImage})` }}>
        <div className="cat-hero-overlay"></div>
        <div className="container">
          <div className="cat-hero-content">
            <div className="cat-breadcrumb">
              <Link to="/">Anasayfa</Link>
              <ChevronRight size={14} className="bread-icon" />
              <span className="bread-active">{catData.title}</span>
            </div>
            
            <div className="cat-badge-container">
              <div className="cat-badge-tag">
                <Sparkles size={15} className="sparkle-icon" />
                <span>{catData.badge}</span>
              </div>
            </div>

            <h1 className="cat-hero-title">{catData.title}</h1>
            <p className="cat-hero-tagline">&ldquo;{catData.tagline}&rdquo;</p>
            <p className="cat-hero-desc">{catData.description}</p>

            <div className="cat-hero-actions">
              <a href="#sub-items-section" className="btn btn-primary cat-primary-btn">
                Alt Başlıkları İncele <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
              <Link to="/iletisim" className="btn btn-outline cat-outline-btn">
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="cat-stats-bar">
          <div className="container">
            <div className="cat-stats-grid">
              {catData.stats.map((stat, index) => (
                <div key={index} className="cat-stat-card">
                  <div className="cat-stat-top-bar"></div>
                  <span className="cat-stat-val">{stat.value}</span>
                  <span className="cat-stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sub-headings & Pages Showcase */}
      <section id="sub-items-section" className="cat-showcase-section">
        <div className="container">
          <div className="cat-section-header">
            <span className="section-subtitle-tag">{catData.title} Sayfa Rehberi</span>
            <h2 className="cat-main-heading">Özel Sayfalar &amp; Alt Başlıklar</h2>
            <p className="cat-heading-desc">
              Aşağıdaki kartlardan dilediğiniz başlığa tıklayarak detayı sayfalara geçiş yapabilirsiniz.
            </p>
          </div>

          {catData.groups.map((group, gIdx) => (
            <div key={gIdx} className="cat-group-block">
              <div className="cat-group-header">
                <h3 className="cat-group-title">{group.groupTitle}</h3>
                <p className="cat-group-desc">{group.groupDesc}</p>
              </div>

              <div className="cat-items-grid">
                {group.items.map((item, itemIdx) => {
                  const ItemIcon = typeof item.icon === 'function' ? item.icon : Building2;
                  return (
                    <div key={itemIdx} className="cat-item-card">
                      <div className="cat-card-top">
                        <div className="cat-icon-box">
                          <ItemIcon size={24} />
                        </div>
                        <span className="cat-item-tag">{item.tag}</span>
                      </div>

                      <h4 className="cat-item-name">{item.name}</h4>

                      {item.brand && (
                        <div className="cat-brand-pill">
                          <span className="cat-brand-label">Çözüm Platformu: <strong>{item.brand}</strong></span>
                        </div>
                      )}

                      <p className="cat-item-short">{item.shortDesc}</p>

                      <ul className="cat-item-highlights">
                        {(item.highlights || []).map((high, hIdx) => (
                          <li key={hIdx}>
                            <CheckCircle2 size={15} className="high-check" />
                            <span>{high}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="cat-card-footer">
                        <Link to={item.path} className="cat-detail-link">
                          <span>Sayfayı İncele</span>
                          <ArrowRight size={18} className="link-arrow" />
                        </Link>
                        {item.externalUrl && (
                          <a 
                            href={item.externalUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cat-ext-link-btn"
                            title={`${item.brand} web sitesine git (${item.externalUrl})`}
                          >
                            <span>{item.brand} Web Sitesi</span>
                            <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Features & Pillars */}
      <section className="cat-features-section">
        <div className="container">
          <div className="cat-features-grid">
            {(catData.features || []).map((feat, fIdx) => {
              const FeatIcon = typeof feat.icon === 'function' ? feat.icon : Sparkles;
              return (
                <div key={fIdx} className="cat-feature-card">
                  <div className="feat-icon-wrapper">
                    <FeatIcon size={28} />
                  </div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Contact CTA Footer Banner */}
      <section className="cat-cta-section">
        <div className="container">
          <div className="cat-cta-box glass-panel">
            <div className="cat-cta-text">
              <h2>{catData.title} Hizmetlerimiz Hakkında Sorularınız mı Var?</h2>
              <p>
                Projenize özel çözümler, kongre organizasyonları ve medikal teknoloji süreçleri için uzman ekibimizle anında iletişime geçin.
              </p>
            </div>
            <div className="cat-cta-button">
              <Link to="/iletisim" className="btn btn-primary cta-action-btn">
                Bize Ulaşın <ArrowRight size={20} style={{ marginLeft: '10px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryOverviewPage;
