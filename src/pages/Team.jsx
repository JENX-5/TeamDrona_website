import { useState, useEffect } from 'react';

const FALLBACK = {
  members: Array.from({ length: 15 }, (_, i) => ({ id: i + 1, name: `Member ${i + 1}`, image: `${i + 1}.jpeg` })),
};

export default function Team() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setTeam(data?.members?.length ? data : FALLBACK))
      .catch(() => setTeam(FALLBACK));
  }, []);

  if (!team?.members?.length) {
    return (
      <div className="page-container">
        <section className="team-page"><span style={{ color: 'var(--gold)' }}>Loading...</span></section>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="team-page">
        <div className="reveal">
          <span className="section-label">The Crew</span>
          <h2 className="section-title">
            Our <em>Team</em>
            <div className="title-line" />
          </h2>
        </div>
        <div className="team-grid-new">
          {team.members.map((m) => (
            <div key={m.id} className="team-member-new reveal">
              <div className="team-member-new-photo">
                <img src={`/team/${m.image}`} alt={m.name} loading="lazy" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }} />
                <span className="team-member-new-initials">{m.name.replace(/\s/g, '').slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="team-member-new-name">{m.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
