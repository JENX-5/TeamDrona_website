import React, { useRef, useEffect, useState } from 'react';
import DualVideoHeader from '../components/DualVideoHeader';
import TerminalAsteroidGame from '../components/TerminalAsteroidGame';

function RocketSVG({ size = 90 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className="rocket-icon">
      <path d="M45 8 C38 22 30 55 30 65 L60 65 C60 55 52 22 45 8Z" fill="#FF9933" opacity="0.92" />
      <path d="M45 8 C42 14 40 20 40 25 L50 25 C50 20 48 14 45 8Z" fill="#FFD700" opacity="0.55" />
      <circle cx="45" cy="40" r="7" fill="#0b0f1a" stroke="#FFD700" strokeWidth="1.5" />
      <circle cx="45" cy="40" r="3" fill="#FFD700" opacity="0.55" />
      <path d="M30 60 L18 72 L30 68Z" fill="#FF9933" opacity="0.7" />
      <path d="M60 60 L72 72 L60 68Z" fill="#FF9933" opacity="0.7" />
      <ellipse cx="45" cy="69" rx="5" ry="8" fill="#FF9933" opacity="0.25" />
      <ellipse cx="45" cy="71" rx="3" ry="5" fill="#FFD700" opacity="0.35" />
    </svg>
  );
}

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatCard({ target, label }) {
  const { value, ref } = useCounter(target, 1100);
  return (
    <div className="stat-card">
      <div className="stat-num" ref={ref}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Dual Video Header */}
      <DualVideoHeader />

      {/* About Section - Scrollable */}
      <section id="about" className="scroll-section">
        <div className="about-container">
          <div className="about-text">
            <div className="reveal">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">
                Defying Limits, <em>Reaching New Heights</em>
                <div className="title-line" />
              </h2>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <p>
                We are <strong style={{ color: '#e8a714' }}>DRONA</strong>, a student-led rocketry team
                forging the future of Indian aerospace engineering. Inspired by the legendary archer's
                mentor, our mission is to train the next generation of space pioneers through hands-on
                design, rigorous testing, and daring launches.
              </p>
              <p>
                From concept to liftoff, every component is student-built. Our flagship vehicle,
                <strong style={{ color: '#e8a714' }}> ARJUNA</strong>, carries the autonomous
                <strong style={{ color: '#e8a714' }}> GANDIVA</strong> payload to altitudes
                exceeding 10 kilometers — proving that ambition knows no bounds.
              </p>
            </div>
            <div className="stats-row reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="reveal" style={{ transitionDelay: '0.35s' }}><StatCard target={10} label="Successful Launches" /></div>
              <div className="reveal" style={{ transitionDelay: '0.4s' }}><StatCard target={3} label="National Awards" /></div>
              <div className="reveal" style={{ transitionDelay: '0.45s' }}><StatCard target={1} label="Payload Deployed" /></div>
            </div>
          </div>

          <div className="about-visual reveal-scale" style={{ transitionDelay: '0.2s' }}>
            <div className="orb-ring" />
            <div className="orb-ring" />
            <div className="orb-ring" />
            <div className="orb-dot" />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <RocketSVG size={120} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="scroll-section compact">
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Pushing <em>Boundaries</em>
              <div className="title-line" />
            </h2>
          </div>
          
          <div className="rocket-cards">
            <div className="rocket-card reveal-left">
              <div className="card-icon">🚀</div>
              <div className="card-title">Design</div>
              <p className="card-desc">
                From CAD to CFD, we design every component using cutting-edge aerospace engineering principles.
              </p>
            </div>
            
            <div className="rocket-card reveal">
              <div className="card-icon">🔧</div>
              <div className="card-title">Build</div>
              <p className="card-desc">
                Our workshop transforms designs into reality with precision machining and composite fabrication.
              </p>
            </div>
            
            <div className="rocket-card reveal-right">
              <div className="card-icon">🎯</div>
              <div className="card-title">Launch</div>
              <p className="card-desc">
                Test flights validate our work, pushing us to new altitudes and gathering crucial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="scroll-section compact" style={{ background: 'rgba(10, 7, 5, 0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Latest Updates</span>
            <h2 className="section-title">
              Recent <em>Achievements</em>
              <div className="title-line" />
            </h2>
          </div>
          
          <div className="news-grid">
            <div className="news-card reveal">
              <div className="news-date">Jan 28, 2025</div>
              <div className="news-title">ARJUNA Reaches 10km Milestone</div>
              <div className="news-excerpt">
                Our latest test flight achieved a record altitude of 10.2 kilometers, successfully deploying 
                the GANDIVA payload and executing a controlled dual-chute recovery.
              </div>
            </div>
            
            <div className="news-card reveal" style={{ transitionDelay: '0.12s' }}>
              <div className="news-date">Dec 15, 2024</div>
              <div className="news-title">New Hybrid Motor Design</div>
              <div className="news-excerpt">
                After 6 months of development, our third-generation hybrid propulsion system demonstrated 
                18% increased efficiency with cleaner combustion characteristics.
              </div>
            </div>
            
            <div className="news-card reveal" style={{ transitionDelay: '0.24s' }}>
              <div className="news-date">Nov 02, 2024</div>
              <div className="news-title">DRONA Wins National Competition</div>
              <div className="news-excerpt">
                Team DRONA secured first place at the National Rocketry Challenge, earning funding for 
                our next-generation launch vehicle development.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Game Section */}
      <section className="scroll-section compact">
        <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Interactive Demo</span>
            <h2 className="section-title">
              Test Your <em>Reflexes</em>
              <div className="title-line" />
            </h2>
          </div>
          
          <div className="reveal">
            <TerminalAsteroidGame />
          </div>
        </div>
      </section>

      {/* Mini Sponsors */}
      <section className="scroll-section compact home-sponsors" style={{ background: 'rgba(10, 7, 5, 0.25)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <div className="reveal">
            <span className="section-label">Supported By</span>
            <div className="home-sponsors-list">
              {['ISRO', 'DRDO', 'MEITY', 'AICTE', 'SERB-DST', 'IIST'].map((s) => (
                <span key={s} className="home-sponsor-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
