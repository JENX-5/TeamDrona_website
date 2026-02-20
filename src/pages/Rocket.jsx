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
    { label: 'Height', val: '2.9', unit: 'm' },
    { label: 'Diameter', val: '15', unit: 'cm' },
    { label: 'Propulsion', val: 'N-class SRAD', unit: '' },
    { label: 'Target Altitude', val: '10,000', unit: 'ft' },
    { label: 'Payload Mass', val: '3.5', unit: 'kg' },
  ];

  const PAYLOAD_SPECS = [
    { label: 'Form Factor', val: '3U CubeSat', unit: '' },
    { label: 'Mass', val: '3.5', unit: 'kg' },
    { label: 'Control', val: '2-DOF Ball Platform', unit: '' },
    { label: 'Actuation', val: 'Teensy Touchscreen', unit: '' },
    { label: 'Vision', val: 'Raspberry Pi Tracking', unit: '' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="rocket-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">ARJUNA</h1>
            <p className="hero-subtitle">Sounding Rocket</p>
            <p className="hero-description">
              Every component designed, manufactured, and tested in-house.
              From CFD simulations to structural analysis, from propulsion
              testing to flight software—complete vertical integration.
            </p>
          </div>
          <div className="hero-image">
            <img src="/rocket.png" alt="Arjuna Rocket" className="rocket-hero-image" />
          </div>
        </div>
      </section>

      {/* Logos Showcase Section */}
      <section className="rocket-section">
        <div className="section-container">
          <div className="logos-showcase">
            <h2 className="section-title">Our Systems</h2>
            <div className="logos-grid">
              <div className="logo-card">
                <img src="/rocket/arjuna_logo.png" alt="Arjuna Logo" className="logo-image" />
                <h3 className="logo-title">ARJUNA</h3>
                <p className="logo-subtitle">Main Rocket Vehicle</p>
              </div>
              <div className="logo-card">
                <img src="/rocket/payload_patch.png" alt="Gandiva Payload" className="logo-image" />
                <h3 className="logo-title">GANDIVA</h3>
                <p className="logo-subtitle">Payload System</p>
              </div>
              <div className="logo-card">
                <img src="/rocket/SANJAY.png" alt="Sanjaya Avionics" className="logo-image" />
                <h3 className="logo-title">SANJAY</h3>
                <p className="logo-subtitle">Avionics Suite</p>
              </div>
            </div>
          </div>
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
                Arjuna is a 2.9&nbsp;m tall rocket with a 15&nbsp;cm diameter, designed to house a 3U CubeSat payload
                weighing approximately 3.5&nbsp;kg. This single-stage sounding rocket targets 10,000&nbsp;ft altitude,
                serving as the main flight platform for our subsystems and Gandiva payload experiments.
              </p>
              <p className="section-text">
                Powered by a student-researched-and-developed N-class motor using KNSB propellant, with Aluminium 6061
                hardware and a Stainless Steel 310 nozzle insert, Arjuna balances performance with safety and
                manufacturability.
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
                Gandiva is our 3U CubeSat payload, a compact testbed named after Arjuna&apos;s bow that rides inside the main vehicle.
                It houses stacked electronics and mechanisms that let us run tightly controlled guidance experiments.
              </p>
              <p className="section-text">
                At its core is a 2‑DOF ball control platform driven by a Teensy-powered resistive touchscreen, while a Raspberry Pi
                performs vision-based tracking. By comparing touch sensing and camera feedback, Gandiva explores control strategies
                for space-constrained autonomous payloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsystems Overview Section - 2 per row */}
      <section className="rocket-section">
        <div className="section-container">
          <div className="subsystems-overview">
            <h2 className="section-title">Subsystems Overview</h2>
            
            <div className="subsystems-grid">
              {/* Aerostructures & Recovery */}
              <div className="subsystem-card aerostructures">
                <div className="subsystem-header">
                  <img src="/rocket/arjuna_logo.png" alt="Arjuna Logo" className="subsystem-logo" />
                  <h3 className="subsystem-title">Aerostructures & Recovery</h3>
                </div>
                <div className="subsystem-content">
                  <p className="subsystem-desc">
                    The Arjuna rocket stands 2.9 meters tall with a 15 cm diameter.
                  </p>
                  <div className="subsystem-details">
                    <div className="detail-section">
                      <h4 className="detail-title">Design</h4>
                      <p className="detail-text">
                        Glass fiber composite fuselage with Aluminium 6061 components. Tangent Ogive nosecone with 3.2 fineness ratio.
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4 className="detail-title">Recovery</h4>
                      <p className="detail-text">
                        Dual-event parachute: 36-inch drogue at apogee, 72-inch main at 1,500 feet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Propulsion */}
              <div className="subsystem-card propulsion">
                <div className="subsystem-header">
                  <img src="/rocket/arjuna_logo.png" alt="Arjuna Logo" className="subsystem-logo" />
                  <h3 className="subsystem-title">Propulsion</h3>
                </div>
                <div className="subsystem-content">
                  <p className="subsystem-desc">
                    N3316 solid propellant SRAD motor.
                  </p>
                  <div className="subsystem-details">
                    <div className="detail-section">
                      <h4 className="detail-title">Performance</h4>
                      <p className="detail-text">
                        KNSB propellant ratio 65:35. Average thrust 3316.1 N, total impulse 13,642.2 Ns.
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4 className="detail-title">Specifications</h4>
                      <p className="detail-text">
                        Burn time 4.11 seconds, MEOP 5.43 MPa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avionics */}
              <div className="subsystem-card avionics">
                <div className="subsystem-header">
                  <img src="/rocket/SANJAY.png" alt="Sanjay Logo" className="subsystem-logo" />
                  <h3 className="subsystem-title">Avionics ("Sanjaya")</h3>
                </div>
                <div className="subsystem-content">
                  <p className="subsystem-desc">
                    Redundant flight control and telemetry system.
                  </p>
                  <div className="subsystem-details">
                    <div className="detail-section">
                      <h4 className="detail-title">Hardware</h4>
                      <p className="detail-text">
                        Custom SMT PCB with Raspberry Pi RP2354B microcontroller.
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4 className="detail-title">Key Features</h4>
                      <p className="detail-text">
                        EKF apogee detection, active airbrakes for 10,000-foot target altitude.
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4 className="detail-title">Telemetry</h4>
                      <p className="detail-text">
                        Live video transmission and real-time data logging via LoRa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payload */}
              <div className="subsystem-card payload">
                <div className="subsystem-header">
                  <img src="/rocket/payload_patch.png" alt="Payload Patch" className="subsystem-logo" />
                  <h3 className="subsystem-title">Payload</h3>
                </div>
                <div className="subsystem-content">
                  <p className="subsystem-desc">
                    Non-deployable 3U CubeSat, approximately 3.5 kg.
                  </p>
                  <div className="subsystem-details">
                    <div className="detail-section">
                      <h4 className="detail-title">Mission</h4>
                      <p className="detail-text">
                        Demonstrates precise ball control on movable platform during flight.
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4 className="detail-title">Objective</h4>
                      <p className="detail-text">
                        Tests visual sensor reliability in high-vibration environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style >{`
        .rocket-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #000000 0%, #0a0705 50%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          z-index: 2;
          position: relative;
        }

        .hero-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .hero-content {
          text-align: center;
          max-width: 600px;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: 4rem;
          font-weight: 900;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .hero-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.8rem;
          color: var(--gold-bright);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
          margin: 0 auto;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rocket-hero-image {
          max-width: 100%;
          height: auto;
          max-height: 450px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .rocket-section {
          padding: 2rem 2rem;
          background: var(--black);
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .section-grid.reverse {
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .section-content {
          padding: 1.5rem;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.2rem;
          color: var(--gold-bright);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .section-text {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .specs-panel {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .specs-header {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--saffron);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }

        .spec-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .spec-value {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold-bright);
        }

        .spec-unit {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-left: 0.5rem;
        }

        .logos-showcase {
          text-align: center;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .logo-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
        }

        .logo-image {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 1rem;
          border-radius: 8px;
        }

        .logo-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .logo-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          color: var(--gold-bright);
          margin: 0;
        }

        .subsystems-overview {
          text-align: center;
        }

        .subsystems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-top: 0.8rem;
        }

        .subsystem-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          text-align: left;
        }

        .subsystem-card.aerostructures {
          background: linear-gradient(135deg, rgba(255, 153, 51, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(255, 153, 51, 0.3);
        }

        .subsystem-card.propulsion {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(255, 215, 0, 0.3);
        }

        .subsystem-card.avionics {
          background: linear-gradient(135deg, rgba(100, 149, 237, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(100, 149, 237, 0.3);
        }

        .subsystem-card.payload {
          background: linear-gradient(135deg, rgba(50, 205, 50, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(50, 205, 50, 0.3);
        }

        .subsystem-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .subsystem-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          border-radius: 8px;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-content {
          color: rgba(255, 255, 255, 0.8);
        }

        .subsystem-desc {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .subsystem-details {
          display: grid;
          gap: 1rem;
        }

        .detail-section {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
        }

        .detail-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: var(--gold-bright);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .detail-text {
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .hero-content {
            text-align: center;
          }
          
          .section-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .subsystems-grid {
            grid-template-columns: 1fr;
          }
          
          .logos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
