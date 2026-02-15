import { useState, useEffect } from 'react';
import { TEAM_FALLBACK } from '../data/teamFallback';

export default function Team() {
  const [team, setTeam] = useState(TEAM_FALLBACK);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => data?.members?.length && setTeam(data))
      .catch(() => {});
  }, []);

  const members = team?.members || TEAM_FALLBACK.members;

  return (
    <div className="page-container">
      <section className="team-page">
        <h2 className="section-title team-page-title">Our Team</h2>
        <div className="team-grid-new">
          {members.map((m) => (
            <div key={m.id} className="team-member-new">
              <div className="team-member-new-photo">
                <img src={`/team/${m.image}`} alt={m.name} loading="lazy" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }} />
                <span className="team-member-new-initials">{String(m.name).replace(/\s/g, '').slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="team-member-new-name">{m.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
