import React from 'react';
import { useContent } from '../context/ContentContext';
import './References.css';

const References = () => {
  const { content } = useContent();
  const referencesData = content?.references || {};
  const items = referencesData.items || [];
  const title = referencesData.title || 'Çözüm Ortaklarımız';

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="references-section">
      <div className="container">
        <h2 className="references-title">{title}</h2>
        <div className="references-marquee">
          <div className="marquee-content">
            {items.map((item, index) => (
              <div key={item.id || index} className="reference-logo">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="reference-img" />
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {items.map((item, index) => (
              <div key={`dup-${item.id || index}`} className="reference-logo">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="reference-img" />
                ) : (
                  <span>{item.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
