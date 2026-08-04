import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: 'Alx MICE',
    subtitle: 'Etkinlik, Kongre & Sempozyum',
    desc: 'Yurt içi ve yurt dışı kongre, toplantı, sempozyum hizmetleri (Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
    link: '/alx-mice/kongre',
    bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Alx 4 You',
    subtitle: 'Butik & Kurumsal Çözümler',
    desc: 'Size özel planlanan yurt içi ve yurt dışı toplantı, preceptorship, kurs ve seminer, incentive hizmetleri (Tanıtım yönetmeliğine uygun program, kurum iletişimi, toplantı altyapı hizmeti, Ulaşım (Uçak bileti), konaklama, organizasyon süresince alınacak yemekler, tur programları, profesyonel rehberlik hizmetleri).',
    link: '/alx-4-you/own-event',
    bgImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Alx Digi',
    subtitle: 'Dijital & AI Sağlık Teknolojileri',
    desc: 'Online sağlık danışmanlık ve asistan uygulamaları, AI destekli sağlık hizmetleri ve aplikasyonlar, sağlıkta giyilebilir teknoloji, online canlı yayın platformu.',
    link: '/alx-digi/online-saglik-danismanlik',
    bgImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Alx Need',
    subtitle: 'Medikal & Omnichannel Yönetimi',
    desc: 'Medikal ve bilimsel hizmetler, istatistik ve çeviri hizmetleri, omnichannel marka yönetimi.',
    link: '/alx-need/medikal-bilimsel',
    bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
  }
];

const Services = () => {
  return (
    <section id="services" className="brands-section">
      <div className="container">
        <h2 className="brands-title">Hizmetlerimiz</h2>
        <div className="brands-grid-wrapper">
          <div className="brands-grid new-layout">
            {servicesData.map((service, index) => (
              <Link 
                to={service.link}
                key={index} 
                className="service-feature-card"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="card-overlay"></div>
                <div className="card-corner-shape">
                  <ArrowUpRight className="corner-icon" size={20} />
                </div>
                <div className="service-feature-content">
                  <span className="service-feature-badge">{service.subtitle}</span>
                  <h4 className="service-feature-title">{service.title}</h4>
                  <p className="service-feature-desc">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
