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
            Get launch updates, technical insights, and behind-the-scenes stories delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing! 🚀'); }}
            className="newsletter-page-form reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="cta-button">Subscribe</button>
          </form>
          <div className="newsletter-features reveal" style={{ transitionDelay: '0.3s' }}>
            <span>Launch notifications</span>
            <span>Technical deep-dives</span>
            <span>Team updates</span>
          </div>
        </div>
      </section>
    </div>
  );
}
