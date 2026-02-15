import { useState } from 'react';
import AsteroidGame from '../components/AsteroidGame';
import TrajectoryGame from '../components/TrajectoryGame';
import RocketQuiz from '../components/RocketQuiz';

export default function Games() {
  const [activeGame, setActiveGame] = useState('asteroid');

  return (
    <div className="page-container">
      <div className="content-section">
        <div className="section-header">
          <span className="section-label">Interactive Experience</span>
          <h2 className="section-title">
            Mission <em>Control</em>
            <div className="title-line"></div>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            Test your skills with our interactive simulations. Learn rocketry concepts while having fun!
          </p>
        </div>

        {/* Game Selector Tabs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveGame('asteroid')}
            style={{
              padding: '1rem 2rem',
              background: activeGame === 'asteroid' ? 'linear-gradient(135deg, rgba(232, 167, 20, 0.3), rgba(212, 148, 26, 0.3))' : 'rgba(13, 17, 30, 0.7)',
              border: `2px solid ${activeGame === 'asteroid' ? '#e8a714' : 'rgba(232, 167, 20, 0.3)'}`,
              borderRadius: '10px',
              color: activeGame === 'asteroid' ? '#e8a714' : '#9ca3af',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)',
              boxShadow: activeGame === 'asteroid' ? '0 0 20px rgba(232, 167, 20, 0.3)' : 'none'
            }}
          >
            🎮 Asteroid Defense
          </button>
          <button
            onClick={() => setActiveGame('trajectory')}
            style={{
              padding: '1rem 2rem',
              background: activeGame === 'trajectory' ? 'linear-gradient(135deg, rgba(232, 167, 20, 0.3), rgba(212, 148, 26, 0.3))' : 'rgba(13, 17, 30, 0.7)',
              border: `2px solid ${activeGame === 'trajectory' ? '#e8a714' : 'rgba(232, 167, 20, 0.3)'}`,
              borderRadius: '10px',
              color: activeGame === 'trajectory' ? '#e8a714' : '#9ca3af',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)',
              boxShadow: activeGame === 'trajectory' ? '0 0 20px rgba(232, 167, 20, 0.3)' : 'none'
            }}
          >
            Trajectory Sim
          </button>
          <button
            onClick={() => setActiveGame('quiz')}
            style={{
              padding: '1rem 2rem',
              background: activeGame === 'quiz' ? 'linear-gradient(135deg, rgba(232, 167, 20, 0.3), rgba(212, 148, 26, 0.3))' : 'rgba(13, 17, 30, 0.7)',
              border: `2px solid ${activeGame === 'quiz' ? '#e8a714' : 'rgba(232, 167, 20, 0.3)'}`,
              borderRadius: '10px',
              color: activeGame === 'quiz' ? '#e8a714' : '#9ca3af',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backdropFilter: 'blur(10px)',
              boxShadow: activeGame === 'quiz' ? '0 0 20px rgba(232, 167, 20, 0.3)' : 'none'
            }}
          >
            🧪 Knowledge Quiz
          </button>
        </div>

        {/* Game Display */}
        <div>
          {activeGame === 'asteroid' && <AsteroidGame />}
          {activeGame === 'trajectory' && <TrajectoryGame />}
          {activeGame === 'quiz' && <RocketQuiz />}
        </div>
      </div>
    </div>
  );
}
