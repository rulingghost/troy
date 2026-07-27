import React from 'react';
import './References.css';

const logos = [
  'GSK',
  'Kyowa Kirin',
  'Teva',
  'Novo Nordisk',
  'Janssen',
  'Bristol-Myers',
  'Lilly',
  'Johnson & Johnson'
];

const References = () => {
  return (
    <section className="references-section">
      <div className="container">
        <h2 className="references-title">Çözüm Ortaklarımız</h2>
        <div className="references-marquee">
          <div className="marquee-content">
            {logos.map((logo, index) => (
              <div key={index} className="reference-logo">
                {logo}
              </div>
            ))}
            {/* Duplicate for infinite scroll effect */}
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="reference-logo">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
