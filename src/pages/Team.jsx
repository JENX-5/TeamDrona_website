import { useState, useEffect } from 'react';
import { TEAM_FALLBACK } from '../data/teamFallback';

export default function Team() {
  const [team, setTeam] = useState(TEAM_FALLBACK);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => data?.subsystems && setTeam(data))
      .catch(() => {});
  }, []);

  const subsystems = team?.subsystems || {
    mechanical: { name: "Mechanical", members: [] },
    avionics: { name: "Avionics", members: [] },
    payload: { name: "Payload", members: [] },
    management: { name: "Management", members: [] }
  };

  return (
    <div className="page-container">
      <section className="team-page">
        <h2 className="section-title team-page-title">Our Team</h2>
        <div className="subsystems-grid">
          {Object.entries(subsystems).map(([key, subsystem]) => (
            <div key={key} className="subsystem-section">
              <h3 className="subsystem-title">{subsystem.name}</h3>
              <div className="team-grid-new">
                {subsystem.members.map((m) => (
                  <div key={m.id} className="team-member-new">
                    <div className="team-member-new-photo">
                      <img 
                        src={`/team/${m.image}`} 
                        alt={m.name} 
                        loading="lazy" 
                        onError={(e) => { 
                          e.target.style.display = 'none'; 
                          e.target.nextElementSibling?.classList.add('show'); 
                        }} 
                      />
                      <span className="team-member-new-initials">
                        {String(m.name).replace(/\s/g, '').slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="team-member-new-name">{m.name}</div>
                    <div className="team-member-new-designation">{m.designation}</div>
                    {m.optionalDesignation && (
                      <div className="team-member-new-optional">{m.optionalDesignation}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
