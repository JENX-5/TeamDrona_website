import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import IntroScreen from './components/IntroScreen';
import NebulaBg from './components/NebulaBg';
import ParticleSystem from './components/ParticleSystem';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Rocket from './pages/Rocket';
import Team from './pages/Team';
import Contact from './pages/Contact';
import About from './pages/About';
import Subsystems from './pages/Subsystems';
import Newsletter from './pages/Newsletter';
import './pages/EasterEggLauncher';

function AppContent() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  // Reveal on scroll animation — re-run on route change
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05, rootMargin: '20px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <div className="app-shell">
        {/* Nebula Background */}
        <NebulaBg />
        <ParticleSystem />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/subsystems" element={<Subsystems />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <AppContent />
      {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
    </Router>
  );
}



