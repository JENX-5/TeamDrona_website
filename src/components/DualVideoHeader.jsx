import { useEffect, useRef } from 'react';

/**
 * Paint Smear Mask Reveal Video Hero
 * Organic, irregular paint smear effect that follows cursor
 * 
 * Implementation:
 * - Two stacked videos
 * - Top video uses SVG paint smear mask
 * - Mask follows cursor position with smooth tracking
 * - Irregular organic shape, not geometric circle
 * - GPU-accelerated via CSS mask-image
 * - Optimized for performance
 */
export default function DualVideoHeader() {
  const containerRef = useRef(null);
  const topVideoRef = useRef(null);
  const rafRef = useRef(null);
  
  // Cursor tracking with lerp
  const cursorPos = useRef({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });
  const currentScale = useRef(1);
  const targetScale = useRef(1);
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
        targetScale.current = 1.5; // Expand scale
      }, 800);
    };

    const handleMouseLeave = () => {
      isInside = false;
      targetPos.current.x = -500;
      targetPos.current.y = -500;
      targetScale.current = 1;
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };

    // Animation loop
    const animate = () => {
      // Smooth lerp for position
      cursorPos.current.x += (targetPos.current.x - cursorPos.current.x) * 0.1;
      cursorPos.current.y += (targetPos.current.y - cursorPos.current.y) * 0.1;
      
      // Smooth lerp for scale
      currentScale.current += (targetScale.current - currentScale.current) * 0.1;

      // Create paint smear mask
      const paintSmear = createPaintSmear(cursorPos.current.x, cursorPos.current.y, currentScale.current);
      
      // Apply mask
      topVideo.style.maskImage = `url(${paintSmear})`;
      topVideo.style.webkitMaskImage = `url(${paintSmear})`;
      
      rafRef.current = requestAnimationFrame(animate);
    };

    // Generate paint smear SVG
    const createPaintSmear = (x, y, scale = 1) => {
      const baseSize = 200;
      const size = baseSize * scale;
      
      // Create organic, irregular paint smear shape
      const path = `
        M ${x} ${y - size * 0.8}
        Q ${x - size * 0.6} ${y - size * 0.4} ${x - size * 0.8} ${y}
        Q ${x - size * 0.4} ${y + size * 0.3} ${x - size * 0.2} ${y + size * 0.6}
        Q ${x + size * 0.1} ${y + size * 0.8} ${x + size * 0.4} ${y + size * 0.7}
        Q ${x + size * 0.7} ${y + size * 0.4} ${x + size * 0.8} ${y}
        Q ${x + size * 0.6} ${y - size * 0.3} ${x + size * 0.3} ${y - size * 0.6}
        Q ${x} ${y - size * 0.9} ${x} ${y - size * 0.8}
        Z
      `;

      // Add texture and noise for organic feel
      const noise = generateNoise();
      
      const svg = `
        <svg width="${size * 2}" height="${size * 2}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="roughPaper">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" seed="${noise}"/>
              <feDiffuseLighting in="noise" lighting-color="white" surfaceScale="1">
                <feDistantLight azimuth="45" elevation="60"/>
              </feDiffuseLighting>
              <feComposite operator="multiply" in2="SourceGraphic"/>
            </filter>
          </defs>
          <path d="${path}" fill="white" filter="url(#roughPaper)" opacity="0.9"/>
          <path d="${path}" fill="white" opacity="0.7"/>
        </svg>
      `;

      return `data:image/svg+xml;base64,${btoa(svg)}`;
    };

    // Generate random seed for noise
    const generateNoise = () => {
      return Math.random().toString(36).substring(7);
    };

    // Start animation
    animate();

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <div className="video-hero" ref={containerRef}>
      {/* Bottom video - always visible */}
      <video
        className="video-bottom"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-bottom.mp4" type="video/mp4" />
        <source src="/videos/hero-bottom.webm" type="video/webm" />
      </video>

      {/* Top video - masked with paint smear */}
      <video
        ref={topVideoRef}
        className="video-top"
        autoPlay
        muted
        loop
        playsInline
        style={{
          maskImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJyb3VnaFBhcGVyIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNCIgbnVtT2N0YXZlcz0iNSIgcmVzdWx0PSJub2lzZSIgc2VlZD0iMSIvPjxmZURpZmZ1c2VMaWdodGluZyBpbj0ibm9pc2UiIGxpZ2h0aW5nLWNvbG9yPSJ3aGl0ZSIgc3VyZmFjZVNjYWxlPSIxIj48ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iNDUiIGVsZXZhdGlvbj0iNjAiLz48L2ZlRGlmZnVzZUxpZ2h0aW5nPjxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0ibXVsdGlwbHkiIGluMj0iU291cmNlR3JhcGhpYyIvPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNIDIwMCA0MCBRIDE2MCAxMjAgMTIwIDIwMCBRIDE2MCAyODAgMjAwIDMyMCBRIDI0MCAyODAgMjgwIDIwMCBRIDI0MCAxMjAgMjAwIDQwIFoiIGZpbGw9IndoaXRlIiBmaWx0ZXI9InVybCgjcm91Z2hQYXBlcikiIG9wYWNpdHk9IjAuOSIvPjwvc3ZnPg==)',
          WebkitMaskImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJyb3VnaFBhcGVyIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNCIgbnVtT2N0YXZlcz0iNSIgcmVzdWx0PSJub2lzZSIgc2VlZD0iMSIvPjxmZURpZmZ1c2VMaWdodGluZyBpbj0ibm9pc2UiIGxpZ2h0aW5nLWNvbG9yPSJ3aGl0ZSIgc3VyZmFjZVNjYWxlPSIxIj48ZmVEaXN0YW50TGlnaHQgYXppbXV0aD0iNDUiIGVsZXZhdGlvbj0iNjAiLz48L2ZlRGlmZnVzZUxpZ2h0aW5nPjxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0ibXVsdGlwbHkiIGluMj0iU291cmNlR3JhcGhpYyIvPjwvZmlsdGVyPjwvZGVmcz48cGF0aCBkPSJNIDIwMCA0MCBRIDE2MCAxMjAgMTIwIDIwMCBRIDE2MCAyODAgMjAwIDMyMCBRIDI0MCAyODAgMjgwIDIwMCBRIDI0MCAxMjAgMjAwIDQwIFoiIGZpbGw9IndoaXRlIiBmaWx0ZXI9InVybCgjcm91Z2hQYXBlcikiIG9wYWNpdHk9IjAuOSIvPjwvc3ZnPg==)',
          maskSize: '200px 200px',
          WebkitMaskSize: '200px 200px',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      >
        <source src="/videos/hero-top.mp4" type="video/mp4" />
        <source src="/videos/hero-top.webm" type="video/webm" />
      </video>

      {/* Fallback for no video */}
      <div className="video-fallback">
        <div className="fallback-content">
          <h1>DRONA Rocketry</h1>
          <p>Forging the future of Indian aerospace</p>
        </div>
      </div>
    </div>
  );
}
