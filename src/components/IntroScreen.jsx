import { useState, useEffect, useRef } from 'react';

/*
  Phases:
    0 — blank
    1 (auto 450ms)  — bow curve stroke-draws in
    2 (auto 1200ms) — bowstring draws in
    3 (auto 2000ms) — arrow + string pull back
    4 (on click)    — arrow fires → slash flash → panels split → done
*/

export default function IntroScreen({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [showFlash, setShowFlash] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 450);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    timers.current = [t1, t2, t3];
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const handleClick = () => {
    if (phase < 3) return;
    setPhase(4);
    // Flash the slash
    setTimeout(() => setShowFlash(true), 80);
    // Then split panels and call done
    setTimeout(() => {
      setShowFlash(false);
      setPhase(5); // triggers .split on panels
    }, 340);
    setTimeout(onDone, 1100);
  };

  // ── geometry ──
  const cx = 100, topY = 28, botY = 312, midY = 170;
  const pulled = phase === 3; // pulled back but not fired
  const fired  = phase >= 4;
  const pullAmt = 30;
  const strMidX = pulled ? cx - pullAmt : cx;

  return (
    <>
      {/* Slash flash overlay */}
      <div className={`slash-flash${showFlash ? ' show' : ''}`} />

      {/* Main intro overlay */}
      <div id="intro-overlay" onClick={handleClick} style={{ pointerEvents: phase >= 5 ? 'none' : 'auto' }}>

        {/* Two split panels */}
        <div className={`intro-panel top-left${phase >= 5 ? ' split' : ''}`} />
        <div className={`intro-panel bot-right${phase >= 5 ? ' split' : ''}`} />

        {/* Center content */}
        <div className="intro-center">
          <svg viewBox="0 0 200 340" width="200" height="340" style={{ overflow: 'visible' }}>

            {/* Bow curve — draws via stroke-dashoffset */}
            <path
              className={`bow-curve${phase >= 1 ? ' drawn' : ''}`}
              d={`M ${cx} ${topY} Q ${cx - 58} ${midY} ${cx} ${botY}`}
              fill="none"
              stroke="#c8a96e"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Bowstring — top segment */}
            <line
              className={`str-line${pulled ? ' pull-anim' : ''}${fired ? ' snap-anim' : ''}`}
              x1={cx} y1={topY}
              x2={fired ? cx : strMidX} y2={midY}
              stroke="#d4c4a0" strokeWidth="1.5" strokeLinecap="round"
              opacity={phase >= 2 ? 1 : 0}
              style={{ transition: phase < 2 ? 'none' : undefined }}
            />
            {/* Bowstring — bottom segment */}
            <line
              className={`str-line${pulled ? ' pull-anim' : ''}${fired ? ' snap-anim' : ''}`}
              x1={fired ? cx : strMidX} y1={midY}
              x2={cx} y2={botY}
              stroke="#d4c4a0" strokeWidth="1.5" strokeLinecap="round"
              opacity={phase >= 2 ? 1 : 0}
              style={{ transition: phase < 2 ? 'none' : undefined }}
            />

            {/* Arrow */}
            <g className={`arrow-g${pulled ? ' pulled' : ''}${fired ? ' fired' : ''}`}>
              {/* shaft */}
              <line x1={cx - 58} y1={midY} x2={cx + 50} y2={midY}
                stroke="#c8a96e" strokeWidth="2.8" strokeLinecap="round"
                opacity={phase >= 2 ? 1 : 0}
              />
              {/* arrowhead */}
              <polygon
                points={`${cx+62},${midY} ${cx+48},${midY-6} ${cx+52},${midY} ${cx+48},${midY+6}`}
                fill="var(--saffron)"
                opacity={phase >= 2 ? 1 : 0}
              />
              {/* fletching top */}
              <polygon
                points={`${cx-58},${midY} ${cx-40},${midY-7} ${cx-44},${midY}`}
                fill="#c8a96e" opacity={phase >= 2 ? 0.7 : 0}
              />
              {/* fletching bottom */}
              <polygon
                points={`${cx-58},${midY} ${cx-40},${midY+7} ${cx-44},${midY}`}
                fill="#c8a96e" opacity={phase >= 2 ? 0.7 : 0}
              />
            </g>

            {/* Glow at arrowhead when pulled */}
            {pulled && (
              <circle cx={cx + 50 - pullAmt + 14} cy={midY} r="5"
                fill="var(--saffron)" opacity="0.3"
                style={{ filter: 'blur(4px)' }}
              />
            )}
          </svg>

          <div className={`intro-title${phase >= 1 ? ' show' : ''}`}>DRONA</div>
          <div className={`intro-sub${phase >= 1 ? ' show' : ''}`}>Rocket Team</div>
        </div>

        {/* Click hint */}
        {phase === 3 && (
          <div className="intro-hint">— Click anywhere to launch —</div>
        )}
      </div>
    </>
  );
}
