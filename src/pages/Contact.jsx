import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="page-container">
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
            <a href="mailto:drona@iit.edu" className="contact-link primary">drona@iit.edu</a>
            <div className="social-links">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-link secondary">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link secondary">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link secondary">LinkedIn</a>
            </div>
          </div>

          <Link to="/newsletter" className="contact-newsletter-link">Newsletter</Link>

        {/* Footer */}
          <footer className="contact-footer">
            © 2025 <span className="footer-brand">DRONA</span> Rocket Team · All rights reserved
          </footer>
        </div>
      </div>

      <style>{`
        .contact-page {
          min-height: auto;
          padding: 100px 24px 60px;
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
          margin-bottom: 40px;
        }

        .header-label {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--saffron);
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
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .contact-link {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
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
        }

        .contact-link.primary {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .contact-link.primary:hover {
          background: rgba(255, 215, 0, 0.15);
          border-color: rgba(255, 215, 0, 0.5);
        }

        .social-links {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .contact-link.secondary {
          font-size: 13px;
          padding: 10px 18px;
        }

        .contact-newsletter-link {
          display: inline-block;
          margin-top: 16px;
          color: var(--saffron);
          font-size: 14px;
          text-decoration: none;
          letter-spacing: 0.1em;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s, color 0.2s;
        }

        .contact-newsletter-link:hover {
          color: var(--gold-bright);
          border-color: var(--saffron);
        }

        .contact-footer {
          text-align: center;
          margin-top: 48px;
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

        @media (max-width: 768px) {
          .contact-page { padding: 80px 16px 48px; }
          .contact-header { margin-bottom: 32px; }
          .header-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}
