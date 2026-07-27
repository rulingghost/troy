import React from 'react';
import { Search, Target, PenTool, Rocket, BarChart2 } from 'lucide-react';
import './Journey.css';

const steps = [
  { id: 1, title: 'İhtiyaç Analizi', desc: 'Gereksinimleri anlama', icon: <Search size={28} /> },
  { id: 2, title: 'Strateji', desc: 'Omnichannel planlama', icon: <Target size={28} /> },
  { id: 3, title: 'İçerik & Tasarım', desc: 'Platform & görsel üretimi', icon: <PenTool size={28} /> },
  { id: 4, title: 'Uygulama', desc: 'Etkinlik & canlı yayın', icon: <Rocket size={28} /> },
  { id: 5, title: 'Ölçümleme', desc: 'Analiz ve sürdürülebilirlik', icon: <BarChart2 size={28} /> }
];

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="journey-header">
          <h2 className="journey-title">Alx 360° Hizmet Süreci</h2>
          <p className="journey-subtitle">Projelerinizi başarıya ulaştıran uçtan uca yöntemimiz</p>
        </div>
        
        <div className="journey-flow-wrapper">
          <div className="journey-flow">
            <div className="journey-line">
              <div className="journey-line-progress"></div>
            </div>
            {steps.map((step, index) => (
              <div key={step.id} className={`journey-node ${index % 2 === 0 ? 'node-top' : 'node-bottom'}`}>
                <div className="node-content-box">
                  <span className="step-number">0{step.id}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                
                <div className="node-circle-wrapper">
                  <div className="node-circle">
                    {step.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
