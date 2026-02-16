import { useEffect, useRef } from 'react';

/**
 * Dual Video Header with DRONA Branding and Gradient Circle
 */
export default function DualVideoHeader() {
  const containerRef = useRef(null);
  const topVideoRef = useRef(null);
  
  // Cursor tracking
  const cursorPos = useRef({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const currentRadius = useRef(150);
  const targetRadius = useRef(150);
  const hoverTimer = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const topVideo = topVideoRef.current;
    if (!container || !topVideo) return;

    // Disable on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      topVideo.style.display = 'none';
      return;
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetPos.current.x = e.clientX - rect.left;
      targetPos.current.y = e.clientY - rect.top;

      // Start hover timer for expanding circle
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      hoverTimer.current = setTimeout(() => {
        targetRadius.current = 400; // Expand to 400px radius
      }, 300); // After 300ms of staying in place
    };

    const handleMouseLeave = () => {
      targetPos.current.x = -500;
      targetPos.current.y = -500;
      targetRadius.current = 150; // Reset to normal size
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };

    // Animation loop
    const animate = () => {
      // Smooth lerp for position
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * 0.3;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * 0.3;
      
      // Smooth lerp for radius
      currentRadius.current += (targetRadius.current - currentRadius.current) * 0.1;

      // Apply circular mask with softer gradient so both videos appear brighter
      topVideo.style.maskImage = `radial-gradient(circle ${currentRadius.current}px at ${cursorPos.current.x}px ${cursorPos.current.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,1) 100%)`;
      topVideo.style.webkitMaskImage = `radial-gradient(circle ${currentRadius.current}px at ${cursorPos.current.x}px ${cursorPos.current.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,1) 100%)`;
      
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <div className="video-hero" ref={containerRef} style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: 'black'
    }}>
      {/* Bottom video - revealed through circle */}
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 1
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/left-video.mp4" type="video/mp4" />
      </video>

      {/* Top video - masked */}
      <video
        ref={topVideoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 2
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/right-video.mp4" type="video/mp4" />
      </video>

      {/* DRONA Branding Overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
        textAlign: 'center',
        pointerEvents: 'none',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255, 215, 0, 0.5)'
      }}>
        <h1 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 700,
          margin: '0 0 0.75rem 0',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
          color: '#ffffff'
        }}>
          DRONA
        </h1>
        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: 'clamp(1rem, 2.4vw, 1.6rem)',
          fontWeight: 500,
          margin: '0',
          textTransform: 'uppercase',
          letterSpacing: '0.28em',
          color: '#FFD700',
          opacity: 0.9
        }}>
          Rocketry Team
        </p>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
            color: '#FF9933',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }}>
            Arjuna Sounding Rocket
          </div>
          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
            color: '#FFD700',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase'
          }}>
            Gandiva Payload
          </div>
        </div>
      </div>
    </div>
  );
}
