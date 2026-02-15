import { useEffect, useRef, useState } from 'react';

/**
 * Premium Terminal Asteroid Game
 * Elite interactive console with professional styling
 * 
 * Features:
 * - Deep matte black background with subtle glow
 * - High-end monospace typography
 * - Smooth animations
 * - Clean command formatting
 * - Fully responsive
 */
export default function TerminalAsteroidGame() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    rocket: { x: 300, y: 450, width: 25, height: 35 },
    bullets: [],
    asteroids: [],
    keys: {},
    lastAsteroid: Date.now()
  });

  useEffect(() => {
    if (!started || gameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = gameStateRef.current;

    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', ' ', 'a', 'd'].includes(e.key)) {
        e.preventDefault();
        state.keys[e.key] = true;
        if ((e.key === ' ') && !gameOver) {
          state.bullets.push({
            x: state.rocket.x + state.rocket.width / 2 - 2,
            y: state.rocket.y,
            width: 3,
            height: 10
          });
        }
      }
    };

    const handleKeyUp = (e) => {
      state.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    let animationId;
    const gameLoop = () => {
      // Clear with smooth fade
      ctx.fillStyle = '#0d0d0d';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Move rocket
      if ((state.keys['ArrowLeft'] || state.keys['a']) && state.rocket.x > 0) {
        state.rocket.x -= 6;
      }
      if ((state.keys['ArrowRight'] || state.keys['d']) && state.rocket.x < canvas.width - state.rocket.width) {
        state.rocket.x += 6;
      }

      // Draw rocket (enhanced design)
      ctx.save();
      ctx.shadowColor = 'rgba(255, 153, 51, 0.6)';
      ctx.shadowBlur = 15;
      
      // Rocket body
      ctx.fillStyle = '#FF9933';
      ctx.beginPath();
      ctx.moveTo(state.rocket.x + state.rocket.width / 2, state.rocket.y);
      ctx.lineTo(state.rocket.x, state.rocket.y + state.rocket.height);
      ctx.lineTo(state.rocket.x + state.rocket.width, state.rocket.y + state.rocket.height);
      ctx.closePath();
      ctx.fill();
      
      // Rocket highlight
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(state.rocket.x + state.rocket.width / 2, state.rocket.y);
      ctx.lineTo(state.rocket.x + state.rocket.width * 0.3, state.rocket.y + state.rocket.height * 0.6);
      ctx.lineTo(state.rocket.x + state.rocket.width * 0.7, state.rocket.y + state.rocket.height * 0.6);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();

      // Bullets
      state.bullets = state.bullets.filter(b => {
        b.y -= 8;
        if (b.y < 0) return false;
        
        ctx.save();
        ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(b.x, b.y, b.width, b.height);
        ctx.restore();
        
        return true;
      });

      // Spawn asteroids
      if (Date.now() - state.lastAsteroid > 900) {
        state.asteroids.push({
          x: Math.random() * (canvas.width - 35),
          y: -35,
          width: 25 + Math.random() * 15,
          height: 25 + Math.random() * 15,
          speed: 2 + Math.random() * 1.5,
          rotation: Math.random() * Math.PI * 2
        });
        state.lastAsteroid = Date.now();
      }

      // Asteroids
      let hitRocket = false;
      state.asteroids = state.asteroids.filter(a => {
        a.y += a.speed;
        a.rotation += 0.02;
        
        if (a.y > canvas.height) return false;

        // Check collision with rocket
        if (
          a.x < state.rocket.x + state.rocket.width &&
          a.x + a.width > state.rocket.x &&
          a.y < state.rocket.y + state.rocket.height &&
          a.y + a.height > state.rocket.y
        ) {
          hitRocket = true;
          return false;
        }

        // Check collision with bullets
        const hit = state.bullets.some((b, idx) => {
          if (
            b.x < a.x + a.width &&
            b.x + b.width > a.x &&
            b.y < a.y + a.height &&
            b.y + b.height > a.y
          ) {
            state.bullets.splice(idx, 1);
            setScore(s => s + 10);
            
            // Explosion effect
            ctx.save();
            ctx.globalAlpha = 0.8;
            ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(a.x + a.width/2, a.y + a.height/2, a.width/2 + 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            
            return true;
          }
          return false;
        });

        if (!hit) {
          // Draw asteroid with rotation
          ctx.save();
          ctx.translate(a.x + a.width/2, a.y + a.height/2);
          ctx.rotate(a.rotation);
          
          // Asteroid shadow
          ctx.shadowColor = 'rgba(139, 69, 19, 0.5)';
          ctx.shadowBlur = 8;
          
          // Main asteroid body
          ctx.fillStyle = '#8B4513';
          ctx.fillRect(-a.width/2, -a.height/2, a.width, a.height);
          
          // Asteroid detail
          ctx.strokeStyle = '#654321';
          ctx.lineWidth = 2;
          ctx.strokeRect(-a.width/2, -a.height/2, a.width, a.height);
          
          // Surface detail
          ctx.fillStyle = '#654321';
          ctx.fillRect(-a.width/4, -a.height/4, a.width/3, a.height/3);
          
          ctx.restore();
          return true;
        }
        return false;
      });

      if (hitRocket) {
        setGameOver(true);
        setStarted(false);
      } else {
        animationId = requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [started, gameOver]);

  const startGame = () => {
    const state = gameStateRef.current;
    state.rocket = { x: 300, y: 450, width: 25, height: 35 };
    state.bullets = [];
    state.asteroids = [];
    state.lastAsteroid = Date.now();
    setScore(0);
    setGameOver(false);
    setStarted(true);
  };

  return (
    <div className="elite-terminal">
      <div className="terminal-window">
        {/* Terminal Header */}
        <div className="terminal-titlebar">
          <div className="terminal-controls">
            <span className="control-dot close"></span>
            <span className="control-dot minimize"></span>
            <span className="control-dot maximize"></span>
          </div>
          <div className="terminal-title">asteroid-defense.sh</div>
        </div>

        {/* Terminal Prompt */}
        <div className="terminal-prompt-line">
          <span className="prompt-user">root@drona</span>
          <span className="prompt-separator">:</span>
          <span className="prompt-path">~</span>
          <span className="prompt-symbol">$</span>
          <span className="prompt-command">./asteroid-defense</span>
          <span className="prompt-caret">_</span>
        </div>

        {/* Game Canvas */}
        <div className="terminal-display">
          <canvas 
            ref={canvasRef}
            width={600}
            height={500}
            className="game-canvas-elite"
          />
        </div>

        {/* Stats Display */}
        <div className="terminal-stats-panel">
          <div className="stat-group">
            <span className="stat-label">SCORE</span>
            <span className="stat-separator">:</span>
            <span className="stat-value">{score.toString().padStart(6, '0')}</span>
          </div>
          <div className="stat-divider">|</div>
          <div className="stat-group">
            <span className="stat-label">STATUS</span>
            <span className="stat-separator">:</span>
            <span className={`stat-value status-${gameOver ? 'destroyed' : started ? 'active' : 'ready'}`}>
              {gameOver ? 'DESTROYED' : started ? 'ACTIVE' : 'READY'}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="terminal-controls-panel">
          <button onClick={startGame} className="terminal-button">
            <span className="btn-bracket">[</span>
            <span className="btn-text">{gameOver ? 'RESTART' : started ? 'ABORT' : 'START'}</span>
            <span className="btn-bracket">]</span>
          </button>
          <div className="terminal-help-text">
            <span className="help-key">←</span>
            <span className="help-key">→</span>
            <span className="help-or">or</span>
            <span className="help-key">A</span>
            <span className="help-key">D</span>
            <span className="help-text">to move</span>
            <span className="help-divider">•</span>
            <span className="help-key">SPACE</span>
            <span className="help-text">to fire</span>
          </div>
        </div>
      </div>

      <style>{`
        /* === PREMIUM TERMINAL CONTAINER === */
        .elite-terminal {
          max-width: 700px;
          margin: 0 auto;
          font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
          font-size: 13px;
          -webkit-font-smoothing: antialiased;
        }

        .terminal-window {
          background: #0d0d0d;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.06),
            0 24px 48px rgba(0, 0, 0, 0.7);
        }

        /* === TERMINAL TITLE BAR === */
        .terminal-titlebar {
          background: linear-gradient(180deg, #1a1a1a 0%, #141414 100%);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .terminal-controls {
          display: flex;
          gap: 6px;
        }

        .control-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          opacity: 0.9;
        }

        .control-dot.close {
          background: #ff5f56;
        }

        .control-dot.minimize {
          background: #ffbd2e;
        }

        .control-dot.maximize {
          background: #27c93f;
        }

        .terminal-title {
          flex: 1;
          text-align: center;
          color: #666;
          font-size: 11px;
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        /* === PROMPT LINE (Clean, no gimmicks) === */
        .terminal-prompt-line {
          padding: 14px 18px;
          background: #0d0d0d;
          font-size: 13px;
          letter-spacing: 0.3px;
          line-height: 1.5;
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .prompt-user {
          color: #4ade80;
          font-weight: 500;
        }

        .prompt-separator {
          color: #444;
          margin: 0 3px;
        }

        .prompt-path {
          color: #60a5fa;
        }

        .prompt-symbol {
          color: #666;
          margin: 0 6px 0 3px;
        }

        .prompt-command {
          color: #FFD700;
        }

        /* === BLINKING CARET (CSS animation) === */
        .prompt-caret {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: #FFD700;
          margin-left: 3px;
          animation: caret-blink 1.1s step-end infinite;
        }

        @keyframes caret-blink {
          0%, 50% {
            opacity: 1;
          }
          50.1%, 100% {
            opacity: 0;
          }
        }

        /* === CANVAS DISPLAY (Minimal borders) === */
        .terminal-display {
          padding: 18px;
          background: #0d0d0d;
          display: flex;
          justify-content: center;
        }

        .game-canvas-elite {
          width: 100%;
          max-width: 600px;
          height: auto;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2px;
          background: #000;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);
        }

        /* === STATS PANEL (Clean minimal) === */
        .terminal-stats-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 14px 18px;
          background: #0d0d0d;
          border-top: 1px solid rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        }

        .stat-group {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
        }

        .stat-label {
          color: #666;
          letter-spacing: 0.8px;
          font-weight: 500;
        }

        .stat-separator {
          color: #333;
        }

        .stat-value {
          color: #4ade80;
          font-weight: 600;
          letter-spacing: 0.3px;
          font-variant-numeric: tabular-nums;
        }

        .stat-value.status-ready {
          color: #60a5fa;
        }

        .stat-value.status-active {
          color: #4ade80;
        }

        .stat-value.status-destroyed {
          color: #ff5f56;
        }

        .stat-divider {
          color: #222;
          font-weight: 300;
        }

        /* === CONTROLS PANEL (Minimal) === */
        .terminal-controls-panel {
          padding: 18px;
          background: #0d0d0d;
          text-align: center;
        }

        .terminal-button {
          background: rgba(255, 215, 0, 0.06);
          border: 1px solid rgba(255, 215, 0, 0.25);
          color: #FFD700;
          padding: 10px 28px;
          border-radius: 4px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          margin-bottom: 14px;
          display: inline-block;
        }

        .terminal-button:hover {
          background: rgba(255, 215, 0, 0.12);
          border-color: rgba(255, 215, 0, 0.4);
          transform: translateY(-1px);
        }

        .terminal-button:active {
          transform: translateY(0);
        }

        .btn-bracket {
          color: rgba(255, 215, 0, 0.4);
          margin: 0 5px;
        }

        /* === HELP TEXT (Subtle) === */
        .terminal-help-text {
          color: #555;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          flex-wrap: wrap;
        }

        .help-key {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #777;
          padding: 3px 7px;
          border-radius: 3px;
          font-size: 10px;
          font-weight: 600;
        }

        .help-or {
          color: #444;
          font-style: italic;
        }

        .help-text {
          color: #555;
        }

        .help-divider {
          color: #333;
        }

        /* === RESPONSIVE === */
        @media (max-width: 768px) {
          .elite-terminal {
            font-size: 12px;
          }

          .game-canvas-elite {
            max-height: 400px;
          }

          .terminal-stats-panel {
            flex-direction: column;
            gap: 10px;
          }

          .stat-divider {
            display: none;
          }

          .terminal-help-text {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
