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
    };

    const handleMouseLeave = () => {
      isInside = false;
      // Move mask off-screen
      targetPos.current.x = -500;
      targetPos.current.y = -500;
    };

    // Smooth lerp animation loop
    const animate = () => {
      // Lerp factor: 0.12 for smooth trailing
      const dx = targetPos.current.x - cursorPos.current.x;
      const dy = targetPos.current.y - cursorPos.current.y;
      
      cursorPos.current.x += dx * 0.12;
      cursorPos.current.y += dy * 0.12;

      // Update mask position
      const x = cursorPos.current.x;
      const y = cursorPos.current.y;
      
      // Create radial gradient mask at cursor position
      // Circle radius: 150px with soft falloff
      topVideo.style.maskImage = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, transparent 100%, black 100%)`;
      topVideo.style.webkitMaskImage = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, transparent 100%, black 100%)`;

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

      {/* Content overlay — logo + subtitle */}
      <div className="hero-overlay">
        <img src="/logo.png" alt="DRONA Rocket Team" className="hero-logo-img" />
        <span className="hero-subtitle">Engineering Legends</span>
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

        .hero-logo-img {
          max-width: min(420px, 55vw);
          height: auto;
          max-height: 180px;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.4));
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
          .hero-logo-img { max-width: 70vw; max-height: 140px; }
          .hero-subtitle { font-size: clamp(0.75rem, 3vw, 1rem); }
        }
      `}</style>
    </div>
  );
}
