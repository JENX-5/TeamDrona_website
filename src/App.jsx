import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import IntroScreen from './components/IntroScreen';
import NebulaBg from './components/NebulaBg';
import ParticleSystem from './components/ParticleSystem';
import Home from './pages/Home';
import Rocket from './pages/Rocket';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Reveal on scroll animation
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    
    // Re-observe after route changes
    const timer = setTimeout(() => {
      const newEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      newEls.forEach(el => obs.observe(el));
    }, 300);
    
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  });

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY * 0.5;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app-shell">
        {/* Nebula Background */}
        <NebulaBg />
        
        {/* Enhanced Particle System */}
        <ParticleSystem />
        
        {/* Intro Animation */}
        {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
