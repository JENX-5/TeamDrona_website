import { Link } from 'react-router-dom';

const SUBSYSTEMS = [
  { id: 'payload', title: 'Payload', subtitle: 'GANDIVA', desc: 'Autonomous payload module with IMU, barometer, and LoRa telemetry. Dual-chute recovery ensures safe return.', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80' },
  { id: 'avionics', title: 'Avionics', subtitle: 'Flight Computers', desc: 'Onboard MCU, sensor fusion, and real-time telemetry. 915 MHz LoRa link maintains connection throughout flight.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80' },
  { id: 'mech', title: 'Mechanical', subtitle: 'Structures & Propulsion', desc: 'Composite airframe, hybrid motor design, and precision machining. Structural FEA and thermal analysis in-house.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id: 'management', title: 'Management', subtitle: 'Operations & Strategy', desc: 'Mission planning, timeline coordination, and outreach. Ensures the team runs like clockwork from design to launch.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80' },
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
          Four core teams power ARJUNA from concept to liftoff.
        </p>
        {SUBSYSTEMS.map((sys, i) => (
          <div key={sys.id} className={`subsystem-row reveal ${i % 2 === 1 ? 'reverse' : ''}`} style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
            <div className="subsystem-img">
              <img src={sys.img} alt={sys.title} loading="lazy" />
            </div>
            <div className="subsystem-content">
              <span className="subsystem-subtitle">{sys.subtitle}</span>
              <h3 className="subsystem-title">{sys.title}</h3>
              <p className="subsystem-desc">{sys.desc}</p>
            </div>
          </div>
        ))}
        <div className="subsystems-cta reveal" style={{ transitionDelay: '0.55s' }}>
          <Link to="/rocket" className="cta-button">Explore the Rocket</Link>
        </div>
      </section>
    </div>
  );
}
