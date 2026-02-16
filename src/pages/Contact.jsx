import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="page-container">
      <section className="contact-page">
        <div className="contact-header">
          <div className="reveal">
            <span className="section-label">Get In Touch</span>
            <h1 className="section-title">
              Contact <em>DRONA</em>
              <div className="title-line" />
            </h1>
            <p className="contact-lead">
              For inquiries, collaborations, or sponsorship opportunities, we'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info reveal">
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:drona@gmail.com" className="contact-email">drona@gmail.com</a>
              <p>For general inquiries and partnerships</p>
            </div>

            <div className="contact-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>X</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>IG</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>LI</span>
                </a>
              </div>
              <p>Stay updated with our journey</p>
            </div>

            <div className="contact-card">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for mission updates and achievements</p>
              <Link to="/newsletter" className="newsletter-link">Subscribe Now</Link>
            </div>
          </div>

          <div className="contact-form-wrapper reveal">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">SUCCESS</div>
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows="5"
                      className="form-textarea"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <footer className="contact-footer">
          <p>© 2025 DRONA Rocket Team | Reaching for the Stars</p>
        </footer>
      </section>

      <style>{`
        .contact-page {
          padding: 6rem 1rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-lead {
          max-width: 600px;
          margin: 1.5rem auto 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-card {
          background: rgba(20, 15, 10, 0.4);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .contact-card h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-email {
          font-size: 1.1rem;
          color: var(--gold-bright);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }

        .contact-email:hover {
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--saffron);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--saffron);
          color: var(--bg-primary);
          transform: scale(1.1);
        }

        .newsletter-link {
          color: var(--gold-bright);
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .newsletter-link:hover {
          text-decoration: underline;
        }

        .contact-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .contact-form-wrapper {
          background: rgba(20, 15, 10, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 12px;
          padding: 2.5rem;
          backdrop-filter: blur(8px);
        }

        .contact-form-card h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 2rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--saffron);
          background: rgba(0, 0, 0, 0.5);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          border: none;
          border-radius: 8px;
          color: var(--bg-primary);
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background: var(--saffron);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          color: var(--bg-primary);
        }

        .contact-footer {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-page {
            padding: 4rem 1rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}
