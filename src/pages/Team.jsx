import { useState, useEffect } from 'react';

const SUBSYSTEM_ORDER = ['payload', 'avionics', 'mech', 'management'];

const FALLBACK_TEAM = {
  subsystems: [
    { id: 'payload', name: 'Payload', subtitle: 'GANDIVA' },
    { id: 'avionics', name: 'Avionics', subtitle: 'Flight Systems' },
    { id: 'mech', name: 'Mechanical', subtitle: 'Structures & Propulsion' },
    { id: 'management', name: 'Management', subtitle: 'Operations' },
  ],
  members: [
    { id: 1, name: 'Person 1', initials: 'P1', role: 'Team Lead', subsystem: 'payload', image: 'person1.jpg', bio: 'Aerospace systems & mission architecture', year: '2022', linkedin: 'https://linkedin.com', email: 'person1@example.com' },
    { id: 2, name: 'Person 2', initials: 'P2', role: 'Propulsion Lead', subsystem: 'mech', image: 'person2.jpg', bio: 'Engine design & combustion dynamics', year: '2023', linkedin: 'https://linkedin.com', email: 'person2@example.com' },
    { id: 3, name: 'Person 3', initials: 'P3', role: 'Structures Engineer', subsystem: 'mech', image: 'person3.jpg', bio: 'Composite materials & structural analysis', year: '2023', linkedin: 'https://linkedin.com', email: 'person3@example.com' },
    { id: 4, name: 'Person 4', initials: 'P4', role: 'Avionics Lead', subsystem: 'avionics', image: 'person4.jpg', bio: 'Flight computers & sensor integration', year: '2024', linkedin: 'https://linkedin.com', email: 'person4@example.com' },
    { id: 5, name: 'Person 5', initials: 'P5', role: 'Payload Systems', subsystem: 'payload', image: 'person5.jpg', bio: 'Payload deployment & orbital mechanics', year: '2024', linkedin: 'https://linkedin.com', email: 'person5@example.com' },
    { id: 6, name: 'Person 6', initials: 'P6', role: 'Aerodynamics', subsystem: 'mech', image: 'person6.jpg', bio: 'CFD simulations & vehicle optimization', year: '2023', linkedin: 'https://linkedin.com', email: 'person6@example.com' },
    { id: 7, name: 'Person 7', initials: 'P7', role: 'Ground Systems', subsystem: 'management', image: 'person7.jpg', bio: 'Launch infrastructure & telemetry', year: '2024', linkedin: 'https://linkedin.com', email: 'person7@example.com' },
    { id: 8, name: 'Person 8', initials: 'P8', role: 'Navigation Engineer', subsystem: 'avionics', image: 'person8.jpg', bio: 'GNC algorithms & trajectory planning', year: '2025', linkedin: 'https://linkedin.com', email: 'person8@example.com' },
  ],
};

export default function Team() {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    fetch('/data/team.json')
      .then(res => res.ok ? res.json() : Promise.reject(new Error('Not ok')))
      .then(data => {
        if (data?.members?.length) {
          if (!data.subsystems?.length && SUBSYSTEM_ORDER.length) {
            data.subsystems = SUBSYSTEM_ORDER.map(id => ({ id, name: id.charAt(0).toUpperCase() + id.slice(1), subtitle: '' }));
          }
          setTeamData(data);
        } else setTeamData(FALLBACK_TEAM);
      })
      .catch(() => setTeamData(FALLBACK_TEAM));
  }, []);

  if (!teamData || !teamData.members?.length) {
    return (
      <div className="page-container">
        <section id="team" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--gold)' }}>Loading team...</span>
        </section>
      </div>
    );
  }

  const subsystems = teamData.subsystems?.length ? teamData.subsystems : SUBSYSTEM_ORDER.map(id => ({ id, name: id.charAt(0).toUpperCase() + id.slice(1), subtitle: '' }));
  const bySubsystem = {};
  subsystems.forEach(s => { bySubsystem[s.id] = []; });
  teamData.members.forEach(m => {
    const key = m.subsystem || 'management';
    if (bySubsystem[key]) bySubsystem[key].push(m);
  });

  return (
    <div className="page-container">
      <section id="team" className="team-by-subsystem">
        <div className="reveal">
          <span className="section-label">The Crew</span>
          <h2 className="section-title">
            Engineers of the <em>Sky</em>
            <div className="title-line" />
          </h2>
        </div>

        {subsystems.map((sub, idx) => {
          const members = bySubsystem[sub.id] || [];
          if (members.length === 0) return null;
          return (
            <div key={sub.id} className="team-subsystem-block reveal" style={{ transitionDelay: `${0.1 + idx * 0.06}s` }}>
              <h3 className="team-subsystem-name">{sub.name}</h3>
              {sub.subtitle && <span className="team-subsystem-subtitle">{sub.subtitle}</span>}
              <div className="team-members-row">
                {members.map((m, i) => (
                  <div key={m.id} className="team-member-card">
                    <div className="team-member-photo">
                      <img
                        src={`/team/${m.image}`}
                        alt={m.name}
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }}
                      />
                      <span className="team-member-initials">{m.initials || m.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="team-member-name">{m.name}</div>
                    <div className="team-member-role">{m.role}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
