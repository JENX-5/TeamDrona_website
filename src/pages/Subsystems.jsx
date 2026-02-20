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
        
        <div className="subsystems-grid">
          {SUBSYSTEMS.map((sys, i) => (
            <div 
              key={sys.id} 
              className="subsystem-card reveal"
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="subsystem-header">
                <div className="subsystem-title-section">
                  <span className="subsystem-subtitle">{sys.subtitle}</span>
                  <h3 className="subsystem-title">{sys.title}</h3>
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

      <style jsx>{`
        .subsystems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .subsystem-card {
          background: linear-gradient(135deg, rgba(20, 15, 10, 0.6), rgba(30, 20, 10, 0.4));
          border: 2px solid rgba(255, 215, 0, 0.1);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .subsystem-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 25px 50px rgba(255, 215, 0, 0.15);
        }

        .subsystem-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
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

        .subsystem-content-section {
          padding: 2rem;
        }

        .subsystem-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        @media (max-width: 768px) {
          .subsystems-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(6, 1fr);
            gap: 1rem;
            margin-top: 2rem;
          }
          
          .subsystem-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            padding: 1.5rem;
          }
          
          .subsystem-title {
            font-size: 1.5rem;
          }
          
          .subsystem-content-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
