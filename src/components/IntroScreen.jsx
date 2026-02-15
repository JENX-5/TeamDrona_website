import { useState, useEffect, useRef } from 'react';

/*
  Phases:
    0 — blank
    1 (auto 450ms)  — bow curve stroke-draws in
    2 (auto 1200ms) — bowstring draws in
    3 (auto 2000ms) — arrow + string pull back
    4 (on click)    — arrow fires → slash slices screen → zip open → done
*/

export default function IntroScreen({ onDone }) {
  const [phase, setPhase] = useState(0);
  const [zipOpen, setZipOpen] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 600);
    const t3 = setTimeout(() => setPhase(3), 1100);
    timers.current = [t1, t2, t3];
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const handleClick = () => {
    if (phase < 3) return;
    setPhase(4); // arrow fires
    setTimeout(() => setZipOpen(true), 300); // zip opens after arrow slices
    setTimeout(onDone, 1200); // longer transition for smoother effect
  };

  const cx = 100, topY = 28, botY = 312, midY = 170;
  const pulled = phase === 3;
  const fired = phase >= 4;

  return (
    <div id="intro-overlay" onClick={handleClick} style={{ pointerEvents: zipOpen ? 'none' : 'auto' }}>
      <div className={`intro-panel intro-panel-left${zipOpen ? ' zip-open' : ''}`} />
      <div className={`intro-panel intro-panel-right${zipOpen ? ' zip-open' : ''}`} />
      <div className={`intro-slash${fired ? ' slice' : ''}`} />

      <div className={`intro-center ${fired ? 'intro-fade' : ''}`}>
        <svg viewBox="0 0 200 340" width="200" height="340" style={{ overflow: 'visible' }}>
          {/* Bow curves right; arrow sits on left, points left; pull = arrow right, release = flies left */}
          <path
            className={`bow-curve${phase >= 1 ? ' drawn' : ''}`}
            d={`M ${cx} ${topY} Q ${cx + 58} ${midY} ${cx} ${botY}`}
            fill="none"
            stroke="#c8a96e"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line x1={cx} y1={topY} x2={pulled ? cx - 30 : cx} y2={midY} stroke="#d4c4a0" strokeWidth="1.5" strokeLinecap="round" opacity={phase >= 2 ? 1 : 0} />
          <line x1={pulled ? cx - 30 : cx} y1={midY} x2={cx} y2={botY} stroke="#d4c4a0" strokeWidth="1.5" strokeLinecap="round" opacity={phase >= 2 ? 1 : 0} />
          <g className={`arrow-g${pulled ? ' pulled' : ''}${fired ? ' fired' : ''}`}>
            <line x1={cx + 58} y1={midY} x2={cx - 50} y2={midY} stroke="#c8a96e" strokeWidth="2.8" strokeLinecap="round" opacity={phase >= 2 ? 1 : 0} />
            <polygon points={`${cx-62},${midY} ${cx-48},${midY-6} ${cx-52},${midY} ${cx-48},${midY+6}`} fill="var(--saffron)" opacity={phase >= 2 ? 1 : 0} />
            <polygon points={`${cx+58},${midY} ${cx+40},${midY-7} ${cx+44},${midY}`} fill="#c8a96e" opacity={phase >= 2 ? 0.7 : 0} />
            <polygon points={`${cx+58},${midY} ${cx+40},${midY+7} ${cx+44},${midY}`} fill="#c8a96e" opacity={phase >= 2 ? 0.7 : 0} />
          </g>
          {pulled && <circle cx={cx - 36} cy={midY} r="5" fill="var(--saffron)" opacity="0.3" style={{ filter: 'blur(4px)' }} />}
        </svg>
        <div className={`intro-title${phase >= 1 ? ' show' : ''}`}>DRONA</div>
        <div className={`intro-sub${phase >= 1 ? ' show' : ''}`}>Rocket Team</div>
      </div>
      {phase === 3 && <div className="intro-hint">— Click anywhere to launch —</div>}
    </div>
  );
}
