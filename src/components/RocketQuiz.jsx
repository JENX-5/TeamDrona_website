import { useState } from 'react';

const QUESTIONS = [
  {
    question: "What type of propulsion does ARJUNA use?",
    options: ["Solid Fuel", "Hybrid Motor", "Liquid Fuel", "Ion Drive"],
    correct: 1
  },
  {
    question: "What is the target altitude for ARJUNA?",
    options: ["5 km", "10 km", "15 km", "20 km"],
    correct: 1
  },
  {
    question: "What does GANDIVA's recovery system use?",
    options: ["Single Parachute", "Dual Chute", "Airbag", "Water Landing"],
    correct: 1
  },
  {
    question: "What is ARJUNA's diameter?",
    options: ["100 mm", "152 mm", "200 mm", "250 mm"],
    correct: 1
  },
  {
    question: "What is the payload mass of GANDIVA?",
    options: ["1.2 kg", "2.4 kg", "3.6 kg", "4.8 kg"],
    correct: 1
  }
];

export default function RocketQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx) => {
    if (answered) return;
    
    setSelected(idx);
    setAnswered(true);
    
    if (idx === QUESTIONS[currentQ].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="game-container">
        <h2 className="game-title">🧪 Rocket Knowledge Quiz</h2>
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            {score === QUESTIONS.length ? '🏆' : score >= QUESTIONS.length * 0.6 ? '🎉' : '📚'}
          </div>
          <h3 style={{ fontSize: '2rem', color: '#e8a714', marginBottom: '1rem' }}>
            Quiz Complete!
          </h3>
          <p style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '2rem' }}>
            Your Score: <span style={{ color: '#FF9933', fontWeight: 'bold' }}>{score}</span> / {QUESTIONS.length}
          </p>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
            {score === QUESTIONS.length ? 'Perfect score! You really know your rockets!' :
             score >= QUESTIONS.length * 0.6 ? 'Great job! Keep learning!' :
             'Keep studying and try again!'}
          </p>
          <button className="game-button" onClick={restart}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[currentQ];

  return (
    <div className="game-container">
      <h2 className="game-title">🧪 Rocket Knowledge Quiz</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ color: '#e8a714', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Question {currentQ + 1} of {QUESTIONS.length}
        </div>
        <div style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
          Score: {score} / {QUESTIONS.length}
        </div>
      </div>

      <div className="quiz-question">
        {q.question}
      </div>

      <div className="quiz-options">
        {q.options.map((option, idx) => {
          let className = 'quiz-option';
          if (answered) {
            if (idx === q.correct) className += ' correct';
            else if (idx === selected) className += ' incorrect';
          }

          return (
            <button
              key={idx}
              className={className}
              onClick={() => handleAnswer(idx)}
              disabled={answered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="game-controls">
          <button className="game-button" onClick={nextQuestion}>
            {currentQ < QUESTIONS.length - 1 ? 'Next Question →' : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
}
