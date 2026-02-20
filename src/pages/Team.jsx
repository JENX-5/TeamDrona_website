import { useState, useEffect } from 'react';
import { TEAM_FALLBACK } from '../data/teamFallback';

export default function Team() {
  const [team, setTeam] = useState(TEAM_FALLBACK);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => data?.subsystems && setTeam(data))
      .catch(() => {});
  }, []);

  const subsystems = team?.subsystems || {
    mechanical: { name: "Mechanical", members: [] },
    electrical: { name: "Electrical", members: [] },
    software: { name: "Software", members: [] },
    management: { name: "Management", members: [] }
  };

  return (
    <div className="page-container">
      <style>{`
        .team-hero {
          min-height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--black);
          margin-bottom: 2rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.9) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          font-family: 'Cinzel', serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--saffron);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .badge-subtitle {
          font-size: 0.8rem;
          color: var(--gold-bright);
          opacity: 0.8;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title .highlight {
          color: var(--saffron);
          position: relative;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--saffron);
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.4);
        }

        .stat-number {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--saffron);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .team-members {
          padding: 2rem;
        }

        .members-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .members-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          color: var(--saffron);
          text-align: center;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-section {
          margin-bottom: 4rem;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--gold-bright);
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
        }

        .subsystem-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--saffron), transparent);
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .member-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .member-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.15);
        }

        .member-photo {
          width: 350px;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          margin-bottom: 1.5rem;
          border: 3px solid rgba(255, 215, 0, 0.3);
        }

        .member-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .member-photo .member-initials {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          color: var(--bg-primary);
          font-family: 'Cinzel', serif;
          font-size: 3rem;
          font-weight: 700;
        }

        .member-name {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .member-role {
          font-size: 1.3rem;
          color: var(--gold-bright);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .member-subsystem {
          font-size: 1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .member-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background: rgba(20, 15, 10, 0.95);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-btn:hover {
          color: var(--saffron);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .modal-photo {
          width: 100px;
          height: 100px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .modal-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-photo .modal-initials {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          color: var(--bg-primary);
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .modal-info h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-role {
          font-size: 1.1rem;
          color: var(--gold-bright);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .modal-subsystem {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modal-photo-large {
          width: 200px;
          height: 200px;
          border-radius: 20px;
          position: relative;
          margin: 0 auto;
        }

        .modal-photo-large img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-name-large {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          color: var(--bg-primary);
          font-family: 'Cinzel', serif;
          font-size: 1.2rem;
          font-weight: 700;
          text-align: center;
          padding: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-2px);
          background: rgba(255, 215, 0, 0.2);
        }

        .social-icon svg {
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .social-icon:hover svg {
          color: var(--saffron);
        }

        .modal-body p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-stats {
            gap: 1rem;
          }
          
          .members-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 400px;
          }
          
          .member-photo {
            width: 300px;
            height: 300px;
          }
          
          .member-name {
            font-size: 1.5rem;
          }
          
          .member-role {
            font-size: 1.1rem;
          }
          
          .modal-header {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 1024px) {
          .members-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 500px;
          }
          
          .member-photo {
            width: 320px;
            height: 320px;
          }
        }
      `}</style>

      <section className="team-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">DRONA</span>
            <span className="badge-subtitle">Team</span>
          </div>
          <h1 className="hero-title">
            Meet Our <span className="highlight">Team</span>
          </h1>
          <p className="hero-description">
            Meet the brilliant minds behind DRONA's aerospace innovation. Our diverse team 
            of engineers, designers, and visionaries work together to push the boundaries 
            of student rocketry.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{Object.values(subsystems).reduce((total, sub) => total + sub.members.length, 0)}+</span>
              <span className="stat-label">Team Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{Object.keys(subsystems).length}</span>
              <span className="stat-label">Subsystems</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Student Built</span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="members-container">
          <h2 className="members-title">Our Team</h2>
          
          {Object.entries(subsystems).map(([key, subsystem]) => (
            <div key={key} className="subsystem-section">
              <h3 className="subsystem-title">{subsystem.name}</h3>
              <div className="members-grid">
                {subsystem.members.map((member, index) => (
                  <div 
                    key={member.id}
                    className="member-card"
                    onClick={() => setSelectedMember(member)}
                  >
                    <div className="member-photo">
                      <img 
                        src={`/team/${member.image}`} 
                        alt={member.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="member-initials">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.designation}</p>
                      <p className="member-subsystem">{subsystem.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div className="member-modal" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>×</button>
            <div className="modal-photo-large">
              <img 
                src={`/team/${selectedMember.image}`} 
                alt={selectedMember.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="modal-name-large">
                {selectedMember.name}
              </div>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon github" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
