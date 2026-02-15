import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DualVideoHeader from '../components/DualVideoHeader';
import MediaGallery from '../components/MediaGallery';
import RotatingMissionPatch from '../components/RotatingMissionPatch';

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

      {/* About Section */}
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

      {/* Mission Patch Section */}
      <section className="scroll-section compact" style={{ background: 'rgba(10, 7, 5, 0.2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
          <div className="reveal" style={{ marginBottom: '2rem' }}>
            <span className="section-label">Our Identity</span>
            <h2 className="section-title">
              Mission <em>Patch</em>
              <div className="title-line" />
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              The DRONA mission patch represents our journey to the stars, embodying the spirit of innovation and excellence.
            </p>
          </div>
          <div className="reveal">
            <RotatingMissionPatch />
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
              <div className="card-title">Design</div>
              <p className="card-desc">
                From CAD to CFD, we design every component using cutting-edge aerospace engineering principles.
              </p>
            </div>
            
            <div className="rocket-card reveal">
              <div className="card-title">Build</div>
              <p className="card-desc">
                Our workshop transforms designs into reality with precision machining and composite fabrication.
              </p>
            </div>
            
            <div className="rocket-card reveal-right">
              <div className="card-title">Launch</div>
              <p className="card-desc">
                Test flights validate our work, pushing us to new altitudes and gathering crucial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo / Video Gallery */}
      <section className="scroll-section compact gallery-section" style={{ background: 'rgba(10, 7, 5, 0.3)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">Gallery</span>
            <h2 className="section-title">
              Photos <em>&amp; Videos</em>
              <div className="title-line" />
            </h2>
          </div>
          <div className="reveal">
            <MediaGallery />
          </div>
        </div>
      </section>

      {/* Subsystems Brief Section */}
      <section className="scroll-section compact" style={{ background: 'rgba(10, 7, 5, 0.25)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">
              Engineering <em>Subsystems</em>
              <div className="title-line" />
            </h2>
          </div>
          
          <div className="subsystems-brief-grid">
            <div className="subsystem-brief-card reveal">
              <div className="brief-icon">ARJUNA</div>
              <div className="brief-content">
                <h3 className="brief-title">Payload Systems</h3>
                <p className="brief-desc">
                  Autonomous payload module with IMU navigation, LoRa telemetry, and dual-chute recovery system for safe return.
                </p>
              </div>
            </div>
            
            <div className="subsystem-brief-card reveal" style={{ transitionDelay: '0.12s' }}>
              <div className="brief-icon">AVIONICS</div>
              <div className="brief-content">
                <h3 className="brief-title">Flight Computers</h3>
                <p className="brief-desc">
                  Real-time sensor fusion, 915MHz telemetry link, and flight control systems maintaining connection throughout flight.
                </p>
              </div>
            </div>
            
            <div className="subsystem-brief-card reveal" style={{ transitionDelay: '0.24s' }}>
              <div className="brief-icon">MECHANICAL</div>
              <div className="brief-content">
                <h3 className="brief-title">Structures & Propulsion</h3>
                <p className="brief-desc">
                  Composite airframe design, hybrid motor development, and precision machining with structural FEA analysis.
                </p>
              </div>
            </div>
            
            <div className="subsystem-brief-card reveal" style={{ transitionDelay: '0.36s' }}>
              <div className="brief-icon">MGMT</div>
              <div className="brief-content">
                <h3 className="brief-title">Management</h3>
                <p className="brief-desc">
                  Project coordination, resource management, and strategic planning ensuring successful mission execution and team operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
