import { useState } from 'react';
import { Link } from 'react-router-dom';

const SUBSYSTEMS = [
  { 
    id: 'payload', 
    title: 'Payload', 
    subtitle: 'GANDIVA', 
    desc: 'Autonomous payload module with IMU, barometer, and LoRa telemetry. Dual-chute recovery ensures safe return.',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    features: ['IMU Navigation', 'LoRa Telemetry', 'Dual-Chute Recovery', 'Autonomous Systems'],
    specs: { weight: '2.5kg', altitude: '10km+', battery: '24hr' },
    icon: 'ARJUNA'
  },
  { 
    id: 'avionics', 
    title: 'Avionics', 
    subtitle: 'Flight Computers', 
    desc: 'Onboard MCU, sensor fusion, and real-time telemetry. 915 MHz LoRa link maintains connection throughout flight.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    features: ['Real-time Telemetry', 'Sensor Fusion', '915MHz Link', 'Flight Control'],
    specs: { processors: '2xMCU', memory: '512KB', range: '50km+' },
    icon: 'AVIONICS'
  },
  { 
    id: 'mech', 
    title: 'Mechanical', 
    subtitle: 'Structures & Propulsion', 
    desc: 'Composite airframe, hybrid motor design, and precision machining. Structural FEA and thermal analysis in-house.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    features: ['Composite Airframe', 'Hybrid Motor', 'FEA Analysis', 'Precision Machining'],
    specs: { thrust: '500N', burnTime: '15s', material: 'Carbon Fiber' },
    icon: 'MECHANICAL'
  },
  { 
    id: 'management', 
    title: 'Management', 
    subtitle: 'Operations & Strategy', 
    desc: 'Mission planning, timeline coordination, and outreach. Ensures the team runs like clockwork from design to launch.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    features: ['Mission Planning', 'Timeline Coordination', 'Public Outreach', 'Resource Management'],
    specs: { teamSize: '15+', projects: '3', launches: '10+' },
    icon: 'MANAGEMENT'
  },
];

export default function Subsystems() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="page-container">
      <section id="subsystems-page" className="subsystems-page">
        <div className="reveal">
          <span className="section-label">Technical Teams</span>
          <h2 className="section-title">
            Our <em>Subsystems</em>
            <div className="title-line" />
          </h2>
        </div>
        <p className="subsystems-intro reveal" style={{ transitionDelay: '0.1s' }}>
          Four core teams power ARJUNA from concept to liftoff. Click to explore each subsystem in detail.
        </p>
        
        <div className="subsystems-vertical">
          {SUBSYSTEMS.map((sys, i) => (
            <div 
              key={sys.id} 
              className={`subsystem-vertical-card reveal ${activeIndex === i ? 'active' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className="subsystem-header">
                <div className="subsystem-icon-large">
                  <span className="icon-emoji">{sys.icon}</span>
                </div>
                <div className="subsystem-title-section">
                  <span className="subsystem-subtitle">{sys.subtitle}</span>
                  <h3 className="subsystem-title">{sys.title}</h3>
                </div>
                <div className="subsystem-toggle-indicator">
                  <span>{activeIndex === i ? '−' : '+'}</span>
                </div>
              </div>
              
              <div className="subsystem-image-section">
                <div className="subsystem-image-container">
                  <img src={sys.img} alt={sys.title} loading="lazy" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">{sys.icon}</span>
                      <span className="overlay-text">Explore {sys.title}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="subsystem-content-section">
                <p className="subsystem-desc">{sys.desc}</p>
                
                {activeIndex === i && (
                  <div className="subsystem-expanded-content">
                    <div className="features-section">
                      <h4>Key Features</h4>
                      <div className="features-list">
                        {sys.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <span className="feature-bullet">⚡</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="specs-section">
                      <h4>Technical Specifications</h4>
                      <div className="specs-grid">
                        {Object.entries(sys.specs).map(([key, value]) => (
                          <div key={key} className="spec-card">
                            <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="spec-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="subsystems-cta reveal" style={{ transitionDelay: '0.75s' }}>
          <Link to="/rocket" className="cta-button">Explore Rocket</Link>
        </div>
      </section>

      <style>{`
        .subsystems-vertical {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 4rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .subsystem-vertical-card {
          background: linear-gradient(135deg, rgba(20, 15, 10, 0.6), rgba(30, 20, 10, 0.4));
          border: 2px solid rgba(255, 215, 0, 0.1);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .subsystem-vertical-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 25px 50px rgba(255, 215, 0, 0.15);
        }

        .subsystem-vertical-card.active {
          border-color: var(--saffron);
          box-shadow: 0 0 40px rgba(255, 215, 0, 0.2);
        }

        .subsystem-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }

        .subsystem-icon-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .subsystem-vertical-card:hover .subsystem-icon-large {
          transform: rotate(10deg) scale(1.1);
        }

        .subsystem-title-section {
          flex: 1;
        }

        .subsystem-subtitle {
          font-size: 0.9rem;
          color: var(--gold-bright);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--saffron);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-toggle-indicator {
          width: 40px;
          height: 40px;
          background: rgba(255, 215, 0, 0.1);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--saffron);
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .subsystem-vertical-card.active .subsystem-toggle-indicator {
          background: var(--saffron);
          color: var(--bg-primary);
          transform: rotate(180deg);
        }

        .subsystem-image-section {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .subsystem-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .subsystem-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .subsystem-vertical-card:hover .subsystem-image-container img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .subsystem-vertical-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          color: white;
        }

        .overlay-icon {
          font-size: 1.5rem;
        }

        .overlay-text {
          font-size: 1.1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .subsystem-content-section {
          padding: 2rem;
        }

        .subsystem-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .subsystem-expanded-content {
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .features-section,
        .specs-section {
          margin-bottom: 2rem;
        }

        .features-section h4,
        .specs-section h4 {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--saffron);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature-item:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: var(--saffron);
          transform: translateX(8px);
        }

        .feature-bullet {
          font-size: 1.2rem;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .spec-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .spec-card:hover {
          transform: translateY(-5px);
          border-color: var(--saffron);
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.2);
        }

        .spec-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .spec-value {
          display: block;
          font-size: 1.3rem;
          color: var(--gold-bright);
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .subsystems-vertical {
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .subsystem-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .subsystem-icon-large {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .subsystem-title {
            font-size: 1.5rem;
          }
          
          .subsystem-image-section {
            height: 200px;
          }
          
          .features-list {
            grid-template-columns: 1fr;
          }
          
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
