import React from 'react';
import { Search, Target, PenTool, Rocket, BarChart2, Sparkles, Cpu, Globe, CheckCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Journey.css';

const iconMap = {
  Search: <Search size={28} />,
  Target: <Target size={28} />,
  PenTool: <PenTool size={28} />,
  Rocket: <Rocket size={28} />,
  BarChart2: <BarChart2 size={28} />,
  Sparkles: <Sparkles size={28} />,
  Cpu: <Cpu size={28} />,
  Globe: <Globe size={28} />
};

const Journey = () => {
  const { content, lang } = useContent();
  const isEn = lang === 'EN';
  const journey = content?.journey || {};
  const steps = journey.steps || [];
  const title = journey.title || (isEn ? 'Alx 360° Service Journey' : 'Alx 360° Hizmet Süreci');
  const subtitle = journey.subtitle || (isEn ? 'Our end-to-end process taking your events to success' : 'Projelerinizi başarıya ulaştıran uçtan uca yöntemimiz');

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="journey-header">
          <h2 className="journey-title">{title}</h2>
          <p className="journey-subtitle">{subtitle}</p>
        </div>
        
        <div className="journey-flow-wrapper">
          <div className="journey-flow">
            <div className="journey-line">
              <div className="journey-line-progress"></div>
            </div>
            {steps.map((step, index) => (
              <div key={step.id || index} className={`journey-node ${index % 2 === 0 ? 'node-top' : 'node-bottom'}`}>
                <div className="node-content-box">
                  <span className="step-number">0{index + 1}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                
                <div className="node-circle-wrapper">
                  <div className="node-circle">
                    {iconMap[step.icon] || <CheckCircle size={28} />}
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
