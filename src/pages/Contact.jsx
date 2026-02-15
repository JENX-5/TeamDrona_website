/**
 * Premium Contact Page
 * Clean, minimal, and intentional design
 * 
 * Features:
 * - Perfect alignment and spacing
 * - Balanced whitespace
 * - Smooth focus states
 * - Refined input styling
 * - Fully responsive
 */
export default function Contact() {
  const SPONSORS = ['ISRO', 'DRDO', 'MEITY', 'AICTE', 'SERB-DST', 'IIST'];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <span className="header-label">Get In Touch</span>
          <h1 className="header-title">
            Ready to <em>Launch?</em>
          </h1>
          <p className="header-subtitle">
            Whether you're a fellow engineer, a prospective sponsor, or simply inspired —
            we'd love to hear from you. The sky isn't the limit. It's just the beginning.
          </p>
        </header>

        {/* Contact Methods */}
        <div className="contact-methods">
          <a href="mailto:drona@iit.edu" className="contact-link primary">
            <span className="link-icon">✉</span>
            <span className="link-text">drona@iit.edu</span>
          </a>
          <div className="social-links">
            <a href="#" className="contact-link secondary">
              <span className="link-icon">𝕏</span>
              <span className="link-text">Twitter</span>
            </a>
            <a href="#" className="contact-link secondary">
              <span className="link-icon">📷</span>
              <span className="link-text">Instagram</span>
            </a>
            <a href="#" className="contact-link secondary">
              <span className="link-icon">💼</span>
              <span className="link-text">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="newsletter-section">
          <div className="section-content">
            <h2 className="section-title">Stay Updated</h2>
            <p className="section-description">
              Get launch updates, technical insights, and behind-the-scenes stories delivered 
              straight to your inbox. Be the first to know when we breach the next altitude milestone.
            </p>
            
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert('Thanks for subscribing! 🚀'); 
              }} 
              className="newsletter-form"
            >
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="form-input"
                />
                <button type="submit" className="form-button">
                  Subscribe
                </button>
              </div>
            </form>

            <div className="feature-tags">
              <span className="feature-tag">Launch notifications</span>
              <span className="feature-tag">Technical deep-dives</span>
              <span className="feature-tag">Team updates</span>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="sponsors-section">
          <h3 className="sponsors-title">Supported By</h3>
          <div className="sponsors-grid">
            {SPONSORS.map((sponsor, idx) => (
              <div key={idx} className="sponsor-badge">
                {sponsor}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="contact-footer">
          © 2025 <span className="footer-brand">DRONA</span> Rocket Team · All rights reserved
        </footer>
      </div>

      <style>{`
        /* Page Container */
        .contact-page {
          min-height: 100vh;
          padding: 120px 24px 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-container {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Header Section */
        .contact-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .header-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #888;
          margin-bottom: 16px;
        }

        .header-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 24px 0;
          line-height: 1.2;
        }

        .header-title em {
          color: #FFD700;
          font-style: normal;
          display: inline-block;
          background: linear-gradient(135deg, #FFD700, #FF9933);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-subtitle {
          font-size: 18px;
          line-height: 1.8;
          color: #999;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Contact Methods */
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 80px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 32px;
          background: rgba(255, 215, 0, 0.05);
          border: 1.5px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          color: #FFD700;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-link:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.1);
        }

        .contact-link.primary {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .contact-link.primary:hover {
          background: rgba(255, 215, 0, 0.15);
          border-color: rgba(255, 215, 0, 0.5);
        }

        .link-icon {
          font-size: 20px;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }

        .contact-link.secondary {
          font-size: 14px;
          padding: 16px 24px;
        }

        /* Newsletter Section */
        .newsletter-section {
          background: rgba(13, 13, 13, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.15);
          border-radius: 16px;
          padding: 48px 40px;
          margin-bottom: 80px;
          backdrop-filter: blur(10px);
        }

        .section-content {
          text-align: center;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFD700;
          margin: 0 0 16px 0;
        }

        .section-description {
          font-size: 15px;
          line-height: 1.8;
          color: #999;
          margin: 0 0 32px 0;
          max-width: 550px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Form */
        .newsletter-form {
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto;
        }

        .form-input {
          flex: 1;
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.4);
          border: 1.5px solid rgba(255, 215, 0, 0.2);
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .form-input::placeholder {
          color: #666;
        }

        .form-input:focus {
          border-color: rgba(255, 215, 0, 0.5);
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.05);
        }

        .form-button {
          padding: 16px 32px;
          background: linear-gradient(135deg, #FFD700, #FF9933);
          border: none;
          border-radius: 10px;
          color: #000;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
        }

        .form-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
        }

        .form-button:active {
          transform: translateY(0);
        }

        /* Feature Tags */
        .feature-tags {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .feature-tag {
          font-size: 13px;
          color: #888;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .feature-tag::before {
          content: '✓';
          color: #4ade80;
          font-weight: 700;
        }

        /* Sponsors Section */
        .sponsors-section {
          text-align: center;
          margin-bottom: 64px;
        }

        .sponsors-title {
          font-size: 18px;
          font-weight: 600;
          color: #FFD700;
          margin: 0 0 32px 0;
          letter-spacing: 1px;
        }

        .sponsors-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .sponsor-badge {
          padding: 14px 24px;
          background: rgba(13, 13, 13, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 8px;
          color: #888;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sponsor-badge:hover {
          border-color: #FFD700;
          color: #FFD700;
          transform: translateY(-3px);
          box-shadow: 0 4px 16px rgba(255, 215, 0, 0.15);
        }

        /* Footer */
        .contact-footer {
          text-align: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 215, 0, 0.1);
          color: #666;
          font-size: 13px;
          letter-spacing: 0.5px;
        }

        .footer-brand {
          color: #FFD700;
          font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-page {
            padding: 100px 20px 60px;
          }

          .newsletter-section {
            padding: 32px 24px;
          }

          .form-group {
            flex-direction: column;
          }

          .form-button {
            width: 100%;
          }

          .contact-header {
            margin-bottom: 48px;
          }

          .contact-methods {
            margin-bottom: 60px;
          }

          .header-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
