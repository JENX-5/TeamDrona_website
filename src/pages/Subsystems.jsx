import { Link } from 'react-router-dom';

const SUBSYSTEMS = [
  {
    id: 'aerodynamics',
    title: 'Aerodynamics',
    subtitle: 'Trajectory & Flow',
    desc: 'The Aerodynamics Subsystem ensures efficient trajectory control by analysing aerodynamic forces using OpenRocket, RASAero, FinSim, and ANSYS Fluent. The team focuses on optimising the nosecone, fins, airbrakes, and pitot tube for peak flight performance.',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    features: [
      'Trajectory and stability analysis',
      'Nosecone, fin, and airbrake optimisation',
      'Use of OpenRocket, RASAero, FinSim, ANSYS Fluent'
    ],
    specs: {
      focus: 'Trajectory control, drag, stability',
      tools: 'OpenRocket, RASAero, FinSim, ANSYS Fluent'
    },
    icon: 'AERO'
  },
  {
    id: 'structures',
    title: 'Structures',
    subtitle: 'Airframe & Loads',
    desc: 'The Structures team designs the rocket airframe, analyses and simulates the loads acting on each component, and specialises in mass optimisation. They select composites and lightweight metals to ensure the rocket remains efficient while safely housing all systems throughout the mission.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    features: [
      'Airframe design and load simulation',
      'Mass optimisation',
      'Composite and lightweight metal selection'
    ],
    specs: {
      focus: 'Strength vs. mass trade-offs',
      methods: 'Structural analysis and simulation'
    },
    icon: 'STRUCT'
  },
  {
    id: 'propulsion',
    title: 'Propulsion',
    subtitle: 'SRAD N-Class Motor',
    desc: 'Our propulsion team utilises a custom SRAD N-class motor, which produces an average thrust of x and a total impulse of y using KNSB propellant. The forward closure, casing, and nozzle holder are engineered from Aluminium 6061, with a durable Stainless Steel 310 nozzle insert.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    features: [
      'SRAD N-class motor with KNSB propellant',
      'Aluminium 6061 hardware',
      'Stainless Steel 310 nozzle insert'
    ],
    specs: {
      motorClass: 'N-class SRAD',
      propellant: 'KNSB',
      structure: 'Al 6061, SS 310 insert'
    },
    icon: 'PROP'
  },
  {
    id: 'avionics',
    title: 'Avionics & Controls',
    subtitle: 'Electronics & Flight Software',
    desc: 'This team manages the rocket’s flight-critical electronics and onboard computing. They design custom PCBs using both Through-Hole and Surface-Mount Technology, integrate multiple sensors for apogee detection, data logging, and real-time telemetry, and implement the recovery sequence through a robust Finite State Machine. The Controls work focuses on active control surfaces and all estimation and state-filtering algorithms within the flight computer software.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    features: [
      'Custom THT and SMT PCB design',
      'Apogee detection, logging, and telemetry',
      'FSM-based recovery logic and control algorithms'
    ],
    specs: {
      focus: 'Flight electronics and control',
      capabilities: 'Telemetry, logging, active surface control'
    },
    icon: 'AVIONICS'
  },
  {
    id: 'payload',
    title: 'Payload',
    subtitle: 'Gandiva 3U CubeSat',
    desc: 'Gandiva, our 3U CubeSat payload, demonstrates precise 2-DOF ball control on a servo-actuated platform. It features a Teensy-driven resistive touchscreen for primary actuation, while a Raspberry Pi with onboard object detection independently tracks the ball. By comparing touch sensing with vision-based tracking, the team evaluates camera-based control for compact, space-constrained systems.',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80',
    features: [
      '2-DOF ball control testbed',
      'Teensy-driven resistive touchscreen',
      'Raspberry Pi vision and object detection'
    ],
    specs: {
      formFactor: '3U CubeSat',
      control: 'Touchscreen and vision-based'
    },
    icon: 'PAYLOAD'
  },
  {
    id: 'management',
    title: 'Management',
    subtitle: 'Operations & Outreach',
    desc: 'Management coordinates overall operations while the finance team oversees budgets, sponsorships, and material procurement for Arjuna’s projects. The design team creates visual content to highlight initiatives and manages the team’s website and social media presence.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    features: [
      'Operations and project coordination',
      'Finance, sponsorships, and procurement',
      'Branding, design, and communications'
    ],
    specs: {
      focus: 'People, funding, communication',
      scope: 'Arjuna missions and outreach'
    },
    icon: 'MGMT'
  }
];

export default function Subsystems() {
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
          Six specialised subsystems power ARJUNA from concept to liftoff. Each card highlights how a team contributes to the vehicle.
        </p>
        
        <div className="subsystems-vertical">
          {SUBSYSTEMS.map((sys, i) => (
            <div 
              key={sys.id} 
              className="subsystem-vertical-card reveal"
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="subsystem-header">
                <div className="subsystem-icon-large">
                  <span className="icon-emoji">{sys.icon}</span>
                </div>
                <div className="subsystem-title-section">
                  <span className="subsystem-subtitle">{sys.subtitle}</span>
                  <h3 className="subsystem-title">{sys.title}</h3>
                </div>
              </div>
              
              <div className="subsystem-image-section">
                <div className="subsystem-image-abstract">
                  <div className="subsystem-orbit subsystem-orbit-outer" />
                  <div className="subsystem-orbit subsystem-orbit-inner" />
                  <div className="subsystem-orbit-dot" />
                  <div className="subsystem-image-label">{sys.subtitle}</div>
                </div>
              </div>
              
              <div className="subsystem-content-section">
                <p className="subsystem-desc">{sys.desc}</p>
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
          height: 260px;
          overflow: hidden;
          padding: 1.5rem 2rem 2rem 2rem;
        }

        .subsystem-image-abstract {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: radial-gradient(circle at top left, rgba(255,215,0,0.25), transparent 55%),
                      radial-gradient(circle at bottom right, rgba(255,153,51,0.2), transparent 55%),
                      rgba(5,5,10,0.9);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subsystem-orbit {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(255, 215, 0, 0.4);
        }

        .subsystem-orbit-outer {
          width: 70%;
          height: 60%;
          transform: rotate(-18deg);
          opacity: 0.75;
        }

        .subsystem-orbit-inner {
          width: 45%;
          height: 38%;
          transform: rotate(12deg);
          opacity: 0.9;
        }

        .subsystem-orbit-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold-bright);
          box-shadow: 0 0 14px rgba(255,215,0,0.9);
          top: 28%;
          left: 62%;
        }

        .subsystem-image-label {
          position: relative;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 215, 0, 0.6);
          background: rgba(0, 0, 0, 0.7);
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold-bright);
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
            height: 220px;
            padding: 1.25rem 1.5rem 1.75rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
