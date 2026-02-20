import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-container">
      <section id="about-page" className="scroll-section">
        <div className="about-page-container">
          <div className="reveal">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Who We <em>Are</em>
              <div className="title-line" />
            </h2>
          </div>
          <div className="about-page-content reveal" style={{ transitionDelay: '0.15s' }}>
            <p>
              <strong style={{ color: 'var(--gold-bright)' }}>DRONA</strong> is a student-led rocketry team
              forging the future of engineering. Named after the legendary archer's mentor,
              our mission is to train the next generation of space pioneers through hands-on design,
              rigorous testing, and daring launches.
            </p>
            <p>
              From concept to liftoff, every component is student-built. Our flagship vehicle,{' '}
              <strong style={{ color: 'var(--gold-bright)' }}>ARJUNA</strong>, carries the autonomous{' '}
              <strong style={{ color: 'var(--gold-bright)' }}>GANDIVA</strong> payload to altitudes
              exceeding 10,000 ft — proving that ambition knows no bounds.
            </p>
            <p>
              We combine design, build, and launch in a complete development cycle — CFD to fabrication,
              avionics to telemetry. Every subsystem is engineered in-house, from hybrid propulsion
              to dual-chute recovery.
            </p>
          </div>
          <div className="about-page-actions reveal" style={{ transitionDelay: '0.3s' }}>
            <Link to="/subsystems" className="cta-button">Explore Subsystems</Link>
            <Link to="/rocket" className="cta-button secondary">View Rocket</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
