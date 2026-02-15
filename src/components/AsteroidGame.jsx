import { useEffect, useRef, useState } from 'react';

export default function AsteroidGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const gameStateRef = useRef({
    rocket: { x: 350, y: 500, width: 30, height: 40, speed: 7 },
    bullets: [],
    asteroids: [],
    keys: {},
    animationId: null,
    lastAsteroid: Date.now()
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const state = gameStateRef.current;

    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
        state.keys[e.key] = true;
        if (e.key === ' ' && started && !gameOver) {
          shoot();
        }
      }
    };

    const handleKeyUp = (e) => {
      state.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (state.animationId) cancelAnimationFrame(state.animationId);
    };
  }, [started, gameOver]);

  const shoot = () => {
    const state = gameStateRef.current;
    state.bullets.push({
      x: state.rocket.x + state.rocket.width / 2 - 2,
      y: state.rocket.y,
      width: 4,
      height: 12,
      speed: 10
    });
  };

  const startGame = () => {
    const state = gameStateRef.current;
    state.rocket = { x: 350, y: 500, width: 30, height: 40, speed: 7 };
    state.bullets = [];
    state.asteroids = [];
    state.lastAsteroid = Date.now();
    setScore(0);
    setGameOver(false);
    setStarted(true);
    gameLoop();
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const state = gameStateRef.current;

    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Move rocket
    if (state.keys['ArrowLeft'] && state.rocket.x > 0) {
      state.rocket.x -= state.rocket.speed;
    }
    if (state.keys['ArrowRight'] && state.rocket.x < canvas.width - state.rocket.width) {
      state.rocket.x += state.rocket.speed;
    }

    // Draw rocket
    ctx.fillStyle = '#FF9933';
    ctx.beginPath();
    ctx.moveTo(state.rocket.x + state.rocket.width / 2, state.rocket.y);
    ctx.lineTo(state.rocket.x, state.rocket.y + state.rocket.height);
    ctx.lineTo(state.rocket.x + state.rocket.width, state.rocket.y + state.rocket.height);
    ctx.closePath();
    ctx.fill();

    // Update and draw bullets
    state.bullets = state.bullets.filter(b => {
      b.y -= b.speed;
      if (b.y < 0) return false;
      
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(b.x, b.y, b.width, b.height);
      return true;
    });

    // Spawn asteroids
    if (Date.now() - state.lastAsteroid > 1000) {
      state.asteroids.push({
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 30 + Math.random() * 20,
        height: 30 + Math.random() * 20,
        speed: 2 + Math.random() * 2
      });
      state.lastAsteroid = Date.now();
    }

    // Update and draw asteroids
    let hitRocket = false;
    state.asteroids = state.asteroids.filter(a => {
      a.y += a.speed;
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
          return true;
        }
        return false;
      });

      if (!hit) {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(a.x, a.y, a.width, a.height);
        ctx.strokeStyle = '#654321';
        ctx.lineWidth = 2;
        ctx.strokeRect(a.x, a.y, a.width, a.height);
        return true;
      }
      return false;
    });

    if (hitRocket) {
      setGameOver(true);
      setStarted(false);
      ctx.fillStyle = '#FF0000';
      ctx.font = '48px Rajdhani';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2);
      ctx.font = '24px Rajdhani';
      ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);
      return;
    }

    state.animationId = requestAnimationFrame(gameLoop);
  };

  return (
    <div className="game-container">
      <h2 className="game-title">🎮 Asteroid Defense</h2>
      <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '1.5rem' }}>
        Use ← → arrows to move, SPACEBAR to shoot
      </p>
      
      <canvas 
        ref={canvasRef}
        width={700}
        height={550}
        className="game-canvas"
      />

      <div className="game-info">
        <div className="game-stat">
          <div className="game-stat-label">Score</div>
          <div className="game-stat-value">{score}</div>
        </div>
        <div className="game-stat">
          <div className="game-stat-label">Status</div>
          <div className="game-stat-value">{gameOver ? 'Game Over' : started ? 'Playing' : 'Ready'}</div>
        </div>
      </div>

      <div className="game-controls">
        <button className="game-button" onClick={startGame}>
          {gameOver ? 'Play Again' : started ? 'Restart' : 'Start Game'}
        </button>
      </div>
    </div>
  );
}
