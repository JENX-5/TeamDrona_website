const ARTICLES = [
  { 
    date: 'June 2026', 
    title: 'ARJUNA 10,000ft Mission', 
    excerpt: 'Team Drona targets a 10,000 ft apogee in the IREC sub-scale category using a custom N3316 solid motor.' 
  },
  { 
    date: 'Active', 
    title: 'Sanjaya Avionics Suite', 
    excerpt: 'The SRAD avionics system integrates active airbrakes and an EKF algorithm for precise altitude regulation.' 
  },
];

export default function Newsletter() {
  return (
    <div className="page-container">
      <section id="newsletter-page" className="scroll-section">
        <div className="newsletter-page-inner">
          <div className="reveal">
            <span className="section-label">Stay Updated</span>
            <h2 className="section-title">
              Our <em>Newsletter</em>
              <div className="title-line" />
            </h2>
          </div>
          <p className="newsletter-page-desc reveal" style={{ transitionDelay: '0.1s' }}>
            Launch updates and technical insights — coming soon.
          </p>
          <div className="newsletter-articles reveal" style={{ transitionDelay: '0.2s' }}>
            {ARTICLES.map((a, i) => (
              <div key={i} className="newsletter-article">
                <span className="newsletter-date">{a.date}</span>
                <h3 className="newsletter-title">{a.title}</h3>
                <p className="newsletter-excerpt">{a.excerpt}</p>
              </div>
            ))}
          </div>
          <p className="newsletter-soon reveal" style={{ transitionDelay: '0.3s' }}>Coming soon</p>
        </div>
      </section>
    </div>
  );
}
