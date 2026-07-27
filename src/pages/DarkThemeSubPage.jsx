import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './DarkThemeSubPage.css';

const DarkThemeSubPage = ({ categoryTitle, pageTitle, category, slug }) => {
  // Dummy data for services
  const services = [
    { title: 'Full Time Onsite Support Services', icon: '💻' },
    { title: 'Onsite Dispatch Services', icon: '🚚' },
    { title: 'Professional Service Desk', icon: '🎧' },
    { title: 'Application Support', icon: '📱' },
    { title: 'DevSecOps Solutions & Services', icon: '⚙️' },
    { title: 'Hardware Technology Consulting', icon: '🖥️' },
    { title: 'IT Infrastructure Services', icon: '🏢' },
    { title: 'Information Security & Protection', icon: '🔒' }
  ];

  // Dummy stats
  const stats = [
    { value: '2000+', label: 'Data Center Physical Installation' },
    { value: '30+', label: 'Global Partnership Agreements' },
    { value: '95+%', label: 'Satisfaction Survey Feedback' },
    { value: '1M+', label: 'Service Requests and Incident Solutions' },
    { value: '99+%', label: 'Uptime success in Infrastructure Management' }
  ];

  return (
    <div className="dark-theme-wrapper">
      <div className="dark-bg-decorations">
        <div className="dark-circle circle-1"></div>
        <div className="dark-circle circle-2"></div>
        <div className="dark-circle circle-3"></div>
      </div>

      <div className="container dark-theme-container">
        {/* Section 1: Hero */}
        <section className="dark-hero-section">
          <div className="dark-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Technology" 
            />
          </div>
          <div className="dark-hero-content">
            <div className="dark-hero-brand">
              <span className="brand-dots"></span>
              <div>
                <strong>Alexander Troy</strong>
                <small>{categoryTitle}</small>
              </div>
            </div>
            <h1 className="dark-hero-title">{pageTitle}</h1>
            <p className="dark-hero-desc">
              {categoryTitle} delivers comprehensive business solutions and services, leveraging Information Technology in a collaborative partnership approach tailored for {pageTitle}.
            </p>
            <a href="#contact" className="dark-hero-link">
              VISIT WEBSITE
              <ArrowUpRight size={28} />
            </a>
          </div>
        </section>

        {/* Section 2: Products & Services */}
        <section className="dark-services-section">
          <h2 className="dark-section-title">Products & Services</h2>
          <div className="dark-services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="dark-service-card">
                <div className="dark-service-top">
                  <span className="service-emoji">{service.icon}</span>
                </div>
                <div className="dark-service-bottom">
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Hexagon Stats */}
        <section className="dark-stats-section">
          <div className="dark-stats-container">
            {stats.map((stat, idx) => (
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
          
          <div className="dark-cta-wrapper">
            <a href="#contact" className="dark-cta-btn">
              Visit {categoryTitle}'s Website <ArrowRight size={20} className="cta-arrow" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DarkThemeSubPage;
