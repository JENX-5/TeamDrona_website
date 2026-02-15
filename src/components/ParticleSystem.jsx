import { useEffect, useRef } from 'react';

export default function ParticleSystem() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const colors = [
      '#FFD700', // Gold
      '#FF9933', // Saffron
      '#e8a714', // Gold bright
      '#ffcb2f', // Light gold
      '#c8860a', // Dark gold
    ];

    const particles = [];
    const numParticles = 8;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 10 + 15;
      const delay = Math.random() * 10;
      const drift = Math.random() * 200 - 100;
      
      particle.style.setProperty('--size', `${size}px`);
      particle.style.setProperty('--color', color);
      particle.style.setProperty('--duration', `${duration}s`);
      particle.style.setProperty('--delay', `${delay}s`);
      particle.style.setProperty('--drift', `${drift}px`);
      particle.style.left = `${Math.random() * 100}%`;
      
      containerRef.current.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 3 }} />;
}
