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
            <div className="modal-header">
              <div className="modal-photo">
                <img 
                  src={`/team/${selectedMember.image}`} 
                  alt={selectedMember.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="modal-initials">
                  {selectedMember.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="modal-info">
                <h3>{selectedMember.name}</h3>
                <p className="modal-role">{selectedMember.designation}</p>
                <div className="modal-subsystem">
                  {Object.entries(subsystems).find(([key, sub]) => 
                    sub.members.some(m => m.id === selectedMember.id)
                  )?.[1]?.name || 'Team Member'}
                </div>
              </div>
            </div>
            <div className="modal-body">
              <p>Passionate aerospace engineer contributing to DRONA's mission of advancing rocket technology and inspiring the next generation of space explorers.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
