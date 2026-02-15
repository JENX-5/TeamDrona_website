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
    specs: { weight: '2.5kg', altitude: '10km+', battery: '24hr' }
  },
  { 
    id: 'avionics', 
    title: 'Avionics', 
    subtitle: 'Flight Computers', 
    desc: 'Onboard MCU, sensor fusion, and real-time telemetry. 915 MHz LoRa link maintains connection throughout flight.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    features: ['Real-time Telemetry', 'Sensor Fusion', '915MHz Link', 'Flight Control'],
    specs: { processors: '2xMCU', memory: '512KB', range: '50km+' }
  },
  { 
    id: 'mech', 
    title: 'Mechanical', 
    subtitle: 'Structures & Propulsion', 
    desc: 'Composite airframe, hybrid motor design, and precision machining. Structural FEA and thermal analysis in-house.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    features: ['Composite Airframe', 'Hybrid Motor', 'FEA Analysis', 'Precision Machining'],
    specs: { thrust: '500N', burnTime: '15s', material: 'Carbon Fiber' }
  },
  { 
    id: 'management', 
    title: 'Management', 
    subtitle: 'Operations & Strategy', 
    desc: 'Mission planning, timeline coordination, and outreach. Ensures the team runs like clockwork from design to launch.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    features: ['Mission Planning', 'Timeline Coordination', 'Public Outreach', 'Resource Management'],
    specs: { teamSize: '15+', projects: '3', launches: '10+' }
  },
];

export default function Subsystems() {
  const [activeSubsystem, setActiveSubsystem] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

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
          Four core teams power ARJUNA from concept to liftoff. Click to explore each subsystem.
        </p>
        
        <div className="subsystems-grid">
          {SUBSYSTEMS.map((sys, i) => (
            <div 
              key={sys.id} 
              className={`subsystem-card reveal ${activeSubsystem === sys.id ? 'active' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
              onClick={() => setActiveSubsystem(activeSubsystem === sys.id ? null : sys.id)}
            >
              <div className="subsystem-card-header">
                <div className="subsystem-img-container">
                  <img src={sys.img} alt={sys.title} loading="lazy" />
                  <div className="subsystem-overlay">
                    <div className="subsystem-icon">{sys.title[0]}</div>
                  </div>
                </div>
                <div className="subsystem-card-content">
                  <span className="subsystem-subtitle">{sys.subtitle}</span>
                  <h3 className="subsystem-title">{sys.title}</h3>
                  <p className="subsystem-desc">{sys.desc}</p>
                </div>
              </div>
              
              {activeSubsystem === sys.id && (
                <div className="subsystem-details">
                  <div className="subsystem-features">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {sys.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className={`feature-item ${hoveredFeature === `${sys.id}-${idx}` ? 'hovered' : ''}`}
                          onMouseEnter={() => setHoveredFeature(`${sys.id}-${idx}`)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <span className="feature-icon">⚡</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="subsystem-specs">
                    <h4>Specifications</h4>
                    <div className="specs-grid">
                      {Object.entries(sys.specs).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="subsystem-toggle">
                <span>{activeSubsystem === sys.id ? '▲' : '▼'}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="subsystems-cta reveal" style={{ transitionDelay: '0.55s' }}>
          <Link to="/rocket" className="cta-button">Explore the Rocket</Link>
        </div>
      </section>

      <style>{`
        .subsystems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .subsystem-card {
          background: rgba(20, 15, 10, 0.4);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(8px);
          position: relative;
        }

        .subsystem-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 215, 0, 0.3);
          box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
        }

        .subsystem-card.active {
          border-color: var(--saffron);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
        }

        .subsystem-card-header {
          position: relative;
        }

        .subsystem-img-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .subsystem-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .subsystem-card:hover .subsystem-img-container img {
          transform: scale(1.1);
        }

        .subsystem-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .subsystem-card:hover .subsystem-overlay {
          opacity: 1;
        }

        .subsystem-icon {
          width: 60px;
          height: 60px;
          background: var(--saffron);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--bg-primary);
          transform: scale(0);
          transition: transform 0.3s ease;
        }

        .subsystem-card:hover .subsystem-icon {
          transform: scale(1);
        }

        .subsystem-card-content {
          padding: 1.5rem;
        }

        .subsystem-subtitle {
          font-size: 0.8rem;
          color: var(--gold-bright);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin: 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-desc {
          color: var(--text-muted);
          line-height: 1.6;
          margin: 1rem 0;
        }

        .subsystem-details {
          padding: 0 1.5rem 1.5rem;
          animation: slideDown 0.4s ease;
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

        .subsystem-features,
        .subsystem-specs {
          margin-bottom: 1.5rem;
        }

        .subsystem-features h4,
        .subsystem-specs h4 {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.8rem;
        }

        .feature-item {
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 8px;
          padding: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .feature-item:hover,
        .feature-item.hovered {
          background: rgba(255, 215, 0, 0.1);
          border-color: var(--saffron);
          transform: translateX(5px);
        }

        .feature-icon {
          font-size: 0.9rem;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }

        .spec-item {
          text-align: center;
          padding: 0.8rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .spec-item:hover {
          transform: translateY(-3px);
        }

        .spec-label {
          display: block;
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.3rem;
        }

        .spec-value {
          display: block;
          font-size: 1rem;
          color: var(--gold-bright);
          font-weight: 600;
        }

        .subsystem-toggle {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 30px;
          height: 30px;
          background: rgba(255, 215, 0, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--saffron);
          transition: all 0.3s ease;
        }

        .subsystem-card.active .subsystem-toggle {
          background: var(--saffron);
          color: var(--bg-primary);
        }

        @media (max-width: 768px) {
          .subsystems-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .features-grid {
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
