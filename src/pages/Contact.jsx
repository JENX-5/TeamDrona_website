import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="page-container contact-page-wrap">
      <section className="contact-section">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-lead">
          For inquiries, collaborations, or sponsorship opportunities, please reach out.
        </p>
        <div className="contact-block">
          <p className="contact-label">Email</p>
          <a href="mailto:drona@iit.edu" className="contact-email">drona@iit.edu</a>
        </div>
        <div className="contact-block">
          <p className="contact-label">Social</p>
          <div className="contact-social">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <p className="contact-news">
          <Link to="/newsletter">Newsletter</Link>
        </p>
        <footer className="contact-foot">© 2025 DRONA Rocket Team</footer>
      </section>
      <style>{`
        .contact-page-wrap { padding-top: 5rem; }
        .contact-section {
          max-width: 520px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        .contact-heading {
          font-family: 'Cinzel', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.75rem 0;
          letter-spacing: 0.04em;
        }
        .contact-lead {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 2.5rem 0;
        }
        .contact-block {
          margin-bottom: 1.75rem;
        }
        .contact-label {
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 0.4rem 0;
        }
        .contact-email {
          font-size: 1.05rem;
          color: var(--gold-bright);
          text-decoration: none;
        }
        .contact-email:hover { text-decoration: underline; }
        .contact-social {
          display: flex;
          gap: 1.25rem;
        }
        .contact-social a {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
        }
        .contact-social a:hover { color: var(--saffron); }
        .contact-news { margin-top: 2rem; }
        .contact-news a {
          font-size: 0.9rem;
          color: var(--saffron);
          text-decoration: none;
        }
        .contact-news a:hover { text-decoration: underline; }
        .contact-foot {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
