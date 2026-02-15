import { useEffect, useRef, useState } from 'react';

/**
 * Advanced Custom Cursor System
 * Two-layer design with proper trailing and states
 * 
 * Layers:
 * 1. Inner dot - small, fast tracking (lerp 0.2)
 * 2. Outer ring - larger, delayed trailing (lerp 0.08)
 * 
 * States:
 * - Default: minimal dot + thin ring
 * - Hover: ring expands, subtle blur glow
 * - Video section: larger transparent ring
 * - Magnetic pull on buttons (distance-based)
 * 
 * Performance:
 * - Single RAF loop for both layers
 * - transform: translate3d for GPU
 * - will-change hints
 * - Disabled on mobile/touch
 */
export default function CustomCursor() {
  const [cursorState, setCursorState] = useState('default'); // default, hover, video
  const [isPressed, setIsPressed] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rafRef = useRef(null);
  
  // Separate positions for two-layer system
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const magnetTarget = useRef(null);

  useEffect(() => {
    // Mobile/touch detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isMobile || isTouchDevice || window.innerWidth <= 768) {
      return;
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    // Mouse down/up
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    // Hover detection
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable')
      ) {
        setCursorState('hover');
        magnetTarget.current = target.closest('a') || target.closest('button') || target;
      }
      // Video section
      else if (target.closest('.circular-reveal-hero') || target.closest('.video-hero')) {
        setCursorState('video');
        magnetTarget.current = null;
      }
      // Default
      else {
        setCursorState('default');
        magnetTarget.current = null;
      }
    };

    // Animation loop - handles both layers
    const animate = () => {
      // Calculate magnetic pull if hovering interactive element
      let magnetX = targetPos.current.x;
      let magnetY = targetPos.current.y;
      
      if (magnetTarget.current && cursorState === 'hover') {
        const rect = magnetTarget.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Distance-based magnetic pull (max 20px)
        const dx = centerX - targetPos.current.x;
        const dy = centerY - targetPos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const pullStrength = Math.min(20, (100 - distance) / 5);
          magnetX += (dx / distance) * pullStrength;
          magnetY += (dy / distance) * pullStrength;
        }
      }

      // Dot - fast tracking (lerp 0.2)
      const dotDx = magnetX - dotPos.current.x;
      const dotDy = magnetY - dotPos.current.y;
      dotPos.current.x += dotDx * 0.2;
      dotPos.current.y += dotDy * 0.2;

      // Ring - slow trailing (lerp 0.08)
      const ringDx = magnetX - ringPos.current.x;
      const ringDy = magnetY - ringPos.current.y;
      ringPos.current.x += ringDx * 0.08;
      ringPos.current.y += ringDy * 0.08;

      // Update DOM
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Start animation
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [cursorState]);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      {/* Inner dot - fast */}
      <div
        ref={dotRef}
        className={`cursor-dot ${cursorState} ${isPressed ? 'pressed' : ''}`}
      />
      
      {/* Outer ring - slow trailing */}
      <div
        ref={ringRef}
        className={`cursor-ring ${cursorState} ${isPressed ? 'pressed' : ''}`}
      />

      <style>{`
        /* === CURSOR DOT (Inner layer - fast) === */
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: #FFD700;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10002;
          will-change: transform;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* === CURSOR RING (Outer layer - slow trailing) === */
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border: 1.5px solid rgba(255, 215, 0, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          will-change: transform;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* === HOVER STATE (on interactive elements) === */
        .cursor-ring.hover {
          width: 50px;
          height: 50px;
          border-color: rgba(255, 215, 0, 0.7);
          background: radial-gradient(
            circle at center,
            transparent 40%,
            rgba(255, 215, 0, 0.06) 100%
          );
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
        }

        .cursor-dot.hover {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #FFD700, #FF9933);
        }

        /* === VIDEO STATE (on video section) === */
        .cursor-ring.video {
          width: 70px;
          height: 70px;
          border-color: rgba(255, 215, 0, 0.25);
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.02) 0%,
            transparent 70%
          );
        }

        .cursor-dot.video {
          width: 4px;
          height: 4px;
          opacity: 0.7;
        }

        /* === PRESSED STATE (on click) === */
        .cursor-ring.pressed {
          transform: translate3d(var(--x, 0), var(--y, 0), 0) translate(-50%, -50%) scale(0.85) !important;
          border-width: 2px;
        }

        .cursor-dot.pressed {
          transform: translate3d(var(--x, 0), var(--y, 0), 0) translate(-50%, -50%) scale(1.5) !important;
        }

        /* === SUBTLE BLUR GLOW ON HOVER === */
        .cursor-ring.hover::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.15) 0%,
            transparent 60%
          );
          filter: blur(10px);
          opacity: 1;
        }

        .cursor-ring::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.1) 0%,
            transparent 60%
          );
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.4s;
        }

        /* === HIDE DEFAULT CURSOR === */
        body {
          cursor: none !important;
        }

        a, button, .clickable, input, textarea {
          cursor: none !important;
        }

        /* === MOBILE: RESTORE DEFAULT CURSOR === */
        @media (max-width: 768px) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
          
          body, a, button, .clickable, input, textarea {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
