import { useState, useEffect } from 'react';

export default function Team() {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.json())
      .then(data => setTeamData(data))
      .catch(err => console.error('Error loading team:', err));
  }, []);

  if (!teamData) {
    return (
      <div className="page-container">
        <section id="team" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--gold)' }}>Loading team...</span>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section id="team" style={{ padding: '4rem 2rem 6rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="reveal">
          <span className="section-label">The Crew</span>
          <h2 className="section-title">
            Engineers of the <em>Sky</em>
            <div className="title-line" />
          </h2>
        </div>
        <div className="team-grid">
          {teamData.members.map((m, i) => (
            <div key={m.id} className="team-card reveal enhanced" style={{ transitionDelay: `${0.08 + i * 0.09}s` }}>
              <div className="team-year-badge">Since {m.year}</div>
              <div className="team-avatar">{m.initials}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-bio">{m.bio}</div>
              <div className="team-contact">
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">💼</a>
                <a href={`mailto:${m.email}`} className="contact-icon" title="Email">✉️</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
