import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Services.css';

const Services = () => {
  const { content } = useContent();
  const services = content?.services || {};
  const items = services.items || [];
  const sectionTitle = services.title || 'Hizmetlerimiz';

  return (
    <section id="services" className="brands-section">
      <div className="container">
        <h2 className="brands-title">{sectionTitle}</h2>
        <div className="brands-grid-wrapper">
          <div className="brands-grid new-layout">
            {items.map((service, index) => (
              <Link 
                to={service.link || '/'}
                key={service.id || index} 
                className="service-feature-card"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className="card-overlay"></div>
                <div className="card-corner-shape">
                  <ArrowUpRight className="corner-icon" size={20} />
                </div>
                <div className="service-feature-content">
                  {service.subtitle && <span className="service-feature-badge">{service.subtitle}</span>}
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
