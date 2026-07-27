import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Lokal & Global',
    desc: 'Yerel ve küresel alanda kapsamlı çözümler sunuyoruz.',
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'İhtiyaç Odaklı',
    desc: 'Mevcut ve henüz ortaya çıkmamış ihtiyaçlara yanıt veriyoruz.',
    bgImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Butik & Kreatif',
    desc: 'İhtiyaca özel, yaratıcı ve özgün yaklaşımlar geliştiriyoruz.',
    bgImage: 'https://images.unsplash.com/photo-1512758684849-57777fa09ce2?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Bilimsel',
    desc: 'Her çözümümüz sağlam bilimsel temellere dayanmaktadır.',
    bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Sürdürülebilir & Güvenilir',
    desc: 'Uzun vadeli, güvenilir bir iş ortağı olarak yanınızdayız.',
    bgImage: 'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=800'
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
              <div 
                key={index} 
                className="service-feature-card"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="card-overlay"></div>
                <div className="card-corner-shape"></div>
                <div className="service-feature-content">
                  <h4 className="service-feature-title">{service.title}</h4>
                  <p className="service-feature-desc">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
