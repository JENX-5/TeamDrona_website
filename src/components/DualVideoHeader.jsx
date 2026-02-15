import { useEffect, useRef } from 'react';

/**
 * Circular Mask Reveal Video Hero
 * TRUE circular mask that follows cursor - NOT opacity fade
 * 
 * Implementation:
 * - Two perfectly stacked videos
 * - Top video uses radial-gradient mask
 * - Mask follows cursor position with lerp smoothing
 * - Circle radius: 150px with soft edges
 * - GPU-accelerated via CSS mask-image
 * - RAF loop for smooth 60fps tracking
 */
export default function DualVideoHeader() {
  const containerRef = useRef(null);
  const topVideoRef = useRef(null);
  const rafRef = useRef(null);
  
  // Cursor tracking with lerp
  const cursorPos = useRef({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const currentRadius = useRef(150);
  const targetRadius = useRef(150);
  const hoverTimer = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const topVideo = topVideoRef.current;
    if (!container || !topVideo) return;

    // Check if mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    let isInside = false;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;
      isInside = true;

      // Start hover timer for expanding mask
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        targetRadius.current = 300; // Expand to 300px radius
      }, 800); // After 800ms of hover
    };

    const handleMouseLeave = () => {
      isInside = false;
      // Move mask off-screen and reset radius
      targetPos.current.x = -500;
      targetPos.current.y = -500;
      targetRadius.current = 150;
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
        hoverTimer.current = null;
      }
    };

    // Smooth lerp animation loop
    const animate = () => {
      // Lerp factor: 0.12 for smooth trailing
      const dx = targetPos.current.x - cursorPos.current.x;
      const dy = targetPos.current.y - cursorPos.current.y;
      
      cursorPos.current.x += dx * 0.12;
      cursorPos.current.y += dy * 0.12;

      // Smooth radius transition
      const radiusDiff = targetRadius.current - currentRadius.current;
      currentRadius.current += radiusDiff * 0.08;

      // Update mask position
      const x = cursorPos.current.x;
      const y = cursorPos.current.y;
      const radius = currentRadius.current;
      
      // Create radial gradient mask at cursor position with dynamic radius
      topVideo.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, transparent 100%, black 100%)`;
      topVideo.style.webkitMaskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, transparent 0%, transparent 100%, black 100%)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (hoverTimer.current) {
        clearTimeout(hoverTimer.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="circular-reveal-hero">
      {/* Bottom video - always visible */}
      <div className="video-layer video-bottom">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src="/videos/right-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top video - revealed through circular mask */}
      <div ref={topVideoRef} className="video-layer video-top">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src="/videos/left-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content overlay — team name only */}
      <div className="hero-overlay">
        <div className="hero-title">DRONA</div>
        <span className="hero-subtitle">Rocket Team</span>
      </div>

      <style>{`
        .circular-reveal-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }

        .video-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .video-layer video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.7);
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
        }

        .video-bottom {
          z-index: 1;
        }

        .video-top {
          z-index: 2;
          /* Initial mask off-screen */
          mask-image: radial-gradient(circle 150px at -500px -500px, transparent 0%, transparent 100%, black 100%);
          -webkit-mask-image: radial-gradient(circle 150px at -500px -500px, transparent 0%, transparent 100%, black 100%);
          will-change: mask-image, -webkit-mask-image;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6));
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          color: var(--saffron);
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          from {
            text-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
          }
          to {
            text-shadow: 0 0 60px rgba(255, 215, 0, 0.8);
          }
        }

        .hero-subtitle {
          font-size: clamp(0.9rem, 2.5vw, 1.5rem);
          font-weight: 400;
          color: rgba(255, 215, 0, 0.85);
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .circular-reveal-hero { height: 60vh; min-height: 500px; }
          .video-top { display: none; }
          .hero-title { font-size: clamp(2rem, 6vw, 4rem); }
          .hero-subtitle { font-size: clamp(0.75rem, 3vw, 1rem); }
        }
      `}</style>
    </div>
  );
}
