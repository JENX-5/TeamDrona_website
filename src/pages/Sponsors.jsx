import { SPONSORS } from '../data/sponsors';

export default function Sponsors() {
  return (
    <div className="page-container">
      <section id="sponsors-page" style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal">
          <span className="section-label">Supported By</span>
          <h2 className="section-title">
            Our <em>Sponsors</em>
            <div className="title-line" />
          </h2>
        </div>
        <p className="sponsors-intro reveal" style={{ transitionDelay: '0.1s' }}>
          We are grateful to our partners who enable us to push the boundaries of student rocketry.
        </p>
        <div className="sponsors-grid-page">
          {SPONSORS.map((s, i) => (
            <div key={s.id} className="sponsor-card reveal" style={{ transitionDelay: `${0.15 + i * 0.08}s` }}>
              <div className="sponsor-logo-placeholder">{s.name}</div>
              <div className="sponsor-card-inner">
                <span className="sponsor-name">{s.name}</span>
                <span className="sponsor-tagline">{s.tagline}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="sponsors-cta reveal" style={{ transitionDelay: '0.6s' }}>
          <p>Interested in supporting our mission?</p>
          <a href="mailto:drona@iit.edu" className="cta-button">Get In Touch</a>
        </div>
      </section>
    </div>
  );
}
