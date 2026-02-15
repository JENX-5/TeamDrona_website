/**
 * Rockets Page - Aerospace Engineering Theme
 * Complete redesign with deep space aesthetic
 * 
 * Design principles:
 * - Large typography for impact
 * - Minimal color (single gold accent)
 * - Generous whitespace
 * - Section-based storytelling
 * - Glassy matte panels
 * - Subtle noise texture
 * - Fade-up scroll reveals
 */

export default function Rocket() {
  const ROCKET_SPECS = [
    { label: 'Height', val: '3.2 m', unit: 'meters' },
    { label: 'Diameter', val: '152', unit: 'mm' },
    { label: 'Propulsion', val: 'Hybrid Motor', unit: '' },
    { label: 'Target Altitude', val: '10', unit: 'km' },
    { label: 'Payload Mass', val: '2.4', unit: 'kg' },
  ];

  const PAYLOAD_SPECS = [
    { label: 'Sensors', val: 'IMU + Barometer', unit: '' },
    { label: 'Recovery', val: 'Dual Chute', unit: '' },
    { label: 'Telemetry', val: 'LoRa 915 MHz', unit: '' },
    { label: 'Autonomy', val: 'Onboard MCU', unit: '' },
    { label: 'Mass', val: '2.4', unit: 'kg' },
  ];

  return (
    <div className="rockets-page">
      {/* Hero Section */}
      <section className="rockets-hero">
        <div className="hero-content">
          <span className="overline">Hardware</span>
          <h1 className="hero-title">
            ENGINEERING
            <span className="title-accent">PRECISION</span>
          </h1>
          <p className="hero-description">
            Every component designed, manufactured, and tested in-house.
            From CFD simulations to structural analysis, from propulsion
            testing to flight software—complete vertical integration.
          </p>
        </div>
      </section>

      {/* ARJUNA Section */}
      <section className="rocket-section">
        <div className="section-container">
          <div className="section-grid">
            <div className="section-content">
              <h2 className="section-title">ARJUNA</h2>
              <span className="section-subtitle">Sounding Rocket</span>
              <p className="section-text">
                Single-stage sounding rocket engineered for high-altitude
                atmospheric research. ARJUNA delivers payloads skyward with
                precision thrust vectoring and aerodynamic stability.
              </p>
              <p className="section-text">
                Hybrid propulsion system combines solid fuel grain with
                liquid oxidizer, offering throttle control and safety
                advantages over traditional solid motors.
              </p>
            </div>
            <div className="specs-panel">
              <div className="specs-header">Technical Specifications</div>
              <div className="specs-grid">
                {ROCKET_SPECS.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">
                      {spec.val}
                      {spec.unit && <span className="spec-unit">{spec.unit}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GANDIVA Section */}
      <section className="rocket-section">
        <div className="section-container">
          <div className="section-grid reverse">
            <div className="specs-panel">
              <div className="specs-header">System Specifications</div>
              <div className="specs-grid">
                {PAYLOAD_SPECS.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">
                      {spec.val}
                      {spec.unit && <span className="spec-unit">{spec.unit}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-content">
              <h2 className="section-title">GANDIVA</h2>
              <span className="section-subtitle">Payload System</span>
              <p className="section-text">
                Autonomous payload module named after Arjuna's divine bow.
                Onboard sensors capture atmospheric data across multiple
                altitudes while maintaining telemetry link throughout flight.
              </p>
              <p className="section-text">
                Dual-chute recovery system ensures safe payload return.
                Primary drogue deploys at apogee, main chute at lower
                altitude for controlled descent and minimal impact velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Statement */}
      <section className="excellence-section">
        <div className="excellence-content">
          <h3 className="excellence-title">
            Complete Development Cycle
          </h3>
          <p className="excellence-text">
            From initial CAD models through CFD validation, from structural
            FEA to thermal analysis, from propulsion hot-fire tests to
            flight software validation—every stage handled internally.
            This approach ensures not just successful launches, but deep
            engineering knowledge and continuous innovation.
          </p>
        </div>
      </section>

      <style>{`
        /* === PAGE CONTAINER === */
        .rockets-page {
          position: relative;
          min-height: 100vh;
          background: 
            radial-gradient(ellipse at top, rgba(20, 20, 30, 0.9) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(10, 10, 15, 0.9) 0%, transparent 50%),
            #050508;
          overflow-x: hidden;
        }

        /* Subtle noise texture */
        .rockets-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        /* === HERO SECTION === */
        .rockets-hero {
          position: relative;
          z-index: 10;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 32px 80px;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
        }

        .overline {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255, 215, 0, 0.7);
          margin-bottom: 24px;
          border: 1px solid rgba(255, 215, 0, 0.2);
          padding: 8px 20px;
          border-radius: 20px;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 16px 0;
          line-height: 0.95;
          letter-spacing: -0.02em;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .title-accent {
          color: #FFD700;
          font-size: 0.9em;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.6);
          max-width: 700px;
          margin: 0 auto;
        }

        /* === ROCKET SECTIONS === */
        .rocket-section {
          position: relative;
          z-index: 10;
          padding: 80px 32px;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .section-grid.reverse {
          direction: rtl;
        }

        .section-grid.reverse > * {
          direction: ltr;
        }

        .section-content {
          padding: 24px 0;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          letter-spacing: 0.02em;
        }

        .section-subtitle {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 215, 0, 0.7);
          margin-bottom: 32px;
        }

        .section-text {
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 24px 0;
        }

        /* === SPECS PANEL (Glassy matte) === */
        .specs-panel {
          background: rgba(15, 15, 20, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .specs-header {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 215, 0, 0.8);
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .specs-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .spec-item:last-child {
          border-bottom: none;
        }

        .spec-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.5px;
        }

        .spec-value {
          font-size: 18px;
          font-weight: 600;
          color: #FFD700;
          font-variant-numeric: tabular-nums;
        }

        .spec-unit {
          font-size: 13px;
          font-weight: 400;
          color: rgba(255, 215, 0, 0.6);
          margin-left: 4px;
        }

        /* === EXCELLENCE SECTION === */
        .excellence-section {
          position: relative;
          z-index: 10;
          padding: 100px 32px;
          margin: 80px 0;
        }

        .excellence-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .excellence-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: #FFD700;
          margin: 0 0 32px 0;
          letter-spacing: 0.02em;
        }

        .excellence-text {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 2;
          color: rgba(255, 255, 255, 0.65);
        }

        /* === RESPONSIVE === */
        @media (max-width: 968px) {
          .section-grid,
          .section-grid.reverse {
            grid-template-columns: 1fr;
            gap: 48px;
            direction: ltr;
          }

          .rockets-hero {
            padding: 100px 24px 60px;
          }

          .rocket-section {
            padding: 60px 24px;
          }

          .specs-panel {
            padding: 32px 24px;
          }

          .excellence-section {
            padding: 80px 24px;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }

          .section-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .specs-panel {
            padding: 24px 20px;
          }

          .spec-value {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
