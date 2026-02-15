import { useRef, useState } from 'react';

export default function TrajectoryGame() {
  const canvasRef = useRef(null);
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(50);
  const [score, setScore] = useState(0);
  const [launching, setLaunching] = useState(false);
  const animRef = useRef(null);

  const launch = () => {
    const canvas = canvasRef.current;
    if (!canvas || launching) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    setLaunching(true);

    const rad = (angle * Math.PI) / 180;
    const vx = velocity * Math.cos(rad);
    const vy = -velocity * Math.sin(rad);
    const g = 20;

    let t = 0;
    const target = { x: w * 0.75, y: h * 0.8, r: 30 };

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      // Draw target
      ctx.fillStyle = '#e8a714';
      ctx.beginPath();
      ctx.arc(target.x, target.y, target.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.font = '14px Rajdhani';
      ctx.textAlign = 'center';
      ctx.fillText('TARGET', target.x, target.y + 4);

      // Calculate rocket position
      const x = 50 + vx * t;
      const y = h - 50 + vy * t + 0.5 * g * t * t;

      // Draw trajectory trail
      ctx.strokeStyle = 'rgba(255, 153, 51, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < t; i += 0.1) {
        const tx = 50 + vx * i;
        const ty = h - 50 + vy * i + 0.5 * g * i * i;
        if (i === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.stroke();

      // Draw rocket
      if (y < h && x < w) {
        ctx.fillStyle = '#FF9933';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Check if hit target
        const dist = Math.sqrt((x - target.x) ** 2 + (y - target.y) ** 2);
        if (dist < target.r) {
          ctx.fillStyle = '#22c55e';
          ctx.font = '32px Rajdhani';
          ctx.textAlign = 'center';
          ctx.fillText('TARGET HIT! +100', w / 2, h / 2);
          setScore(s => s + 100);
          setTimeout(() => {
            setLaunching(false);
            drawInitial();
          }, 1500);
          return;
        }

        t += 0.03;
        animRef.current = requestAnimationFrame(animate);
      } else {
        ctx.fillStyle = '#ef4444';
        ctx.font = '28px Rajdhani';
        ctx.textAlign = 'center';
        ctx.fillText('❌ MISS', w / 2, h / 2);
        setTimeout(() => {
          setLaunching(false);
          drawInitial();
        }, 1500);
      }
    };

    animate();
  };

  const drawInitial = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    // Draw target
    ctx.fillStyle = '#e8a714';
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.8, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = '14px Rajdhani';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET', w * 0.75, h * 0.8 + 4);

    // Draw launch pad
    ctx.fillStyle = '#FF9933';
    ctx.fillRect(40, h - 60, 20, 10);
  };

  // Initialize canvas
  useState(() => {
    setTimeout(drawInitial, 100);
  });

  return (
    <div className="game-container">
      <h2 className="game-title">Trajectory Calculator</h2>
      <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '1.5rem' }}>
        Adjust angle and velocity to hit the target!
      </p>

      <canvas
        ref={canvasRef}
        width={700}
        height={400}
        className="game-canvas"
      />

      <div className="trajectory-controls">
        <div className="trajectory-control">
          <label className="trajectory-label">
            Launch Angle: {angle}°
          </label>
          <input
            type="range"
            min="15"
            max="85"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            disabled={launching}
            className="trajectory-slider"
          />
        </div>

        <div className="trajectory-control">
          <label className="trajectory-label">
            Velocity: {velocity} m/s
          </label>
          <input
            type="range"
            min="20"
            max="100"
            value={velocity}
            onChange={(e) => setVelocity(Number(e.target.value))}
            disabled={launching}
            className="trajectory-slider"
          />
        </div>
      </div>

      <div className="game-info">
        <div className="game-stat">
          <div className="game-stat-label">Score</div>
          <div className="game-stat-value">{score}</div>
        </div>
        <div className="game-stat">
          <div className="game-stat-label">Status</div>
          <div className="game-stat-value">{launching ? 'Launching...' : 'Ready'}</div>
        </div>
      </div>

      <div className="game-controls">
        <button className="game-button" onClick={launch} disabled={launching}>
          {launching ? 'LAUNCHING...' : 'LAUNCH'}
        </button>
      </div>
    </div>
  );
}
