import { Link } from 'react-router-dom';

const SUBSYSTEMS = [
  {
    id: 'payload',
    title: 'Payload',
    subtitle: 'GANDIVA',
    icon: '🎯',
    desc: 'Autonomous payload module with IMU, barometer, and LoRa telemetry. Dual-chute recovery ensures safe return.',
  },
  {
    id: 'avionics',
    title: 'Avionics',
    subtitle: 'Flight Computers',
    icon: '📡',
    desc: 'Onboard MCU, sensor fusion, and real-time telemetry. 915 MHz LoRa link maintains connection throughout flight.',
  },
  {
    id: 'mech',
    title: 'Mechanical',
    subtitle: 'Structures & Propulsion',
    icon: '🔧',
    desc: 'Composite airframe, hybrid motor design, and precision machining. Structural FEA and thermal analysis in-house.',
  },
  {
    id: 'management',
    title: 'Management',
    subtitle: 'Operations & Strategy',
    icon: '📋',
    desc: 'Mission planning, timeline coordination, and outreach. Ensures the team runs like clockwork from design to launch.',
  },
];

export default function Subsystems() {
  return (
    <div className="page-container">
      <section id="subsystems-page" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal">
          <span className="section-label">Technical Teams</span>
          <h2 className="section-title">
            Our <em>Subsystems</em>
            <div className="title-line" />
          </h2>
        </div>
        <p className="subsystems-intro reveal" style={{ transitionDelay: '0.1s' }}>
          Four core teams power ARJUNA from concept to liftoff.
        </p>
        <div className="subsystems-grid">
          {SUBSYSTEMS.map((sys, i) => (
            <div key={sys.id} className="subsystem-card reveal" style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
              <div className="subsystem-icon">{sys.icon}</div>
              <h3 className="subsystem-title">{sys.title}</h3>
              <span className="subsystem-subtitle">{sys.subtitle}</span>
              <p className="subsystem-desc">{sys.desc}</p>
            </div>
          ))}
        </div>
        <div className="subsystems-cta reveal" style={{ transitionDelay: '0.55s' }}>
          <Link to="/rocket" className="cta-button">Explore the Rocket</Link>
        </div>
      </section>
    </div>
  );
}
