import { useMemo } from 'react';

function seeded(s) {
  let x = s;
  return () => { x = (x * 16807) % 2147483647; return (x - 1) / 2147483646; };
}

export default function NebulaBg() {
  const stars = useMemo(() => {
    const r = seeded(77);
    return Array.from({ length: 110 }, (_, i) => {
      const bright = r() < 0.18; // ~18% are bright with halos
      return {
        id: i,
        left: r() * 100,
        top: r() * 100,
        size: bright ? r() * 2 + 1.8 : r() * 1.6 + 0.5,
        dur: r() * 3.5 + 2,
        delay: r() * 5,
        bright,
      };
    });
  }, []);

  const motes = useMemo(() => {
    const r = seeded(211);
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: r() * 100,
      size: r() * 2.2 + 1.2,
      dur: r() * 16 + 18,
      delay: r() * 24,
    }));
  }, []);

  return (
    <>
      {/* Nebula gradient layers */}
      <div className="nebula-bg">
        <div className="nebula-layer neb-light" />
        <div className="nebula-layer neb-cloud-1" />
        <div className="nebula-layer neb-cloud-2" />
        <div className="nebula-layer neb-cloud-3" />
        <div className="nebula-layer neb-pocket" />
        <div className="nebula-layer neb-void-1" />
        <div className="nebula-layer neb-void-2" />
      </div>

      {/* Stars */}
      <div className="stars-layer">
        {stars.map(s => (
          <div
            key={s.id}
            className={`star${s.bright ? ' bright' : ''}`}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Golden motes */}
      <div className="particles-layer">
        {motes.map(m => (
          <div
            key={m.id}
            className="mote"
            style={{
              left: `${m.left}%`,
              width: m.size,
              height: m.size,
              animationDuration: `${m.dur}s`,
              animationDelay: `${m.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
