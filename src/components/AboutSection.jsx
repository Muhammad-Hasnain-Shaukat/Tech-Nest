import React from 'react';
import { Cpu, Volume2, Sparkles, Leaf, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function AboutSection({ onScrollToCatalog }) {
  return (
    <section className="about-section" id="about-section">
      <div className="container">
        {/* Top Philosophy Tag & Main Headline */}
        <div className="about-header">
          <div className="about-badge">
            <Sparkles size={14} className="about-badge-icon" />
            <span>The TechNest Philosophy</span>
          </div>
          
          <h2 className="about-main-title">
            Engineered with obsession.<br />
            Designed for human potential.
          </h2>
          
          <p className="about-lead-text">
            At TechNest, we believe technology should dissolve into the background—quietly elevating your workflow, 
            focus, and acoustic immersion. Every curvature is milled from aerospace-grade alloys, every transducer 
            calibrated for acoustic honesty, and every interface crafted for timeless clarity.
          </p>
        </div>

        {/* Apple-Style Bento Grid Showcase */}
        <div className="about-bento-grid">
          {/* Bento Card 1: Metallurgy */}
          <div className="about-card about-card-large">
            <div className="about-card-content">
              <div className="about-icon-pill">
                <Cpu size={22} />
              </div>
              <span className="about-card-tag">Precision Engineering</span>
              <h3 className="about-card-title">Aerospace Metallurgy & Billet Unibody</h3>
              <p className="about-card-desc">
                Sculpted from Grade 5 titanium and recycled aerospace-grade aluminum. Milled to microscopic 
                0.01mm tolerances, integrating passive thermal cooling chambers directly into the chassis.
              </p>
            </div>
            <div className="about-card-metric-badge">
              <span className="metric-num">0.01mm</span>
              <span className="metric-label">CNC Milling Tolerance</span>
            </div>
          </div>

          {/* Bento Card 2: Acoustic Architecture */}
          <div className="about-card about-card-medium">
            <div className="about-card-content">
              <div className="about-icon-pill">
                <Volume2 size={22} />
              </div>
              <span className="about-card-tag">Acoustic Mastery</span>
              <h3 className="about-card-title">Lossless Spatial Fidelity</h3>
              <p className="about-card-desc">
                Custom 40mm titanium dynamic diaphragms paired with dual acoustic chambers render studio-master 
                spatial sound with ultra-low 0.05% total harmonic distortion.
              </p>
            </div>
            <div className="about-card-metric-badge">
              <span className="metric-num">24-Bit / 96kHz</span>
              <span className="metric-label">High-Resolution Audio</span>
            </div>
          </div>

          {/* Bento Card 3: Ecosystem Continuity */}
          <div className="about-card about-card-medium">
            <div className="about-card-content">
              <div className="about-icon-pill">
                <Zap size={22} />
              </div>
              <span className="about-card-tag">Zero Latency</span>
              <h3 className="about-card-title">Unified Ecosystem Handoff</h3>
              <p className="about-card-desc">
                Seamless multi-point streaming across your UltraBook workstation, Phone 16 Pro, and Pad Ultra canvas. 
                Experience instant audio and cursor switching with zero perceptible delay.
              </p>
            </div>
            <div className="about-card-metric-badge">
              <span className="metric-num">&lt; 15ms</span>
              <span className="metric-label">Ultra-Low Latency</span>
            </div>
          </div>

          {/* Bento Card 4: Circular Sustainability */}
          <div className="about-card about-card-large">
            <div className="about-card-content">
              <div className="about-icon-pill">
                <Leaf size={22} />
              </div>
              <span className="about-card-tag">Circular Craft</span>
              <h3 className="about-card-title">100% Recycled & Built to Last</h3>
              <p className="about-card-desc">
                We design with permanence in mind. Featuring 100% recycled rare earth elements, zero virgin plastics in 
                fiber packaging, and modular architectural repairability that honors our planet.
              </p>
            </div>
            <div className="about-card-metric-badge">
              <span className="metric-num">100%</span>
              <span className="metric-label">Recycled Rare Earths</span>
            </div>
          </div>
        </div>

        {/* Keynote Statistics Strip */}
        <div className="about-stats-strip">
          <div className="stat-col">
            <h4 className="stat-number">99.8%</h4>
            <p className="stat-desc">Customer Satisfaction Rating</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <h4 className="stat-number">40h+</h4>
            <p className="stat-desc">Continuous ANC Battery Life</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <h4 className="stat-number">2-Year</h4>
            <p className="stat-desc">Comprehensive Global Warranty</p>
          </div>
          <div className="stat-divider" />
          <div className="stat-col">
            <h4 className="stat-number">24/7</h4>
            <p className="stat-desc">Dedicated Concierge Support</p>
          </div>
        </div>

        {/* Bottom Action / Discover Link */}
        <div className="about-cta-footer">
          <button 
            className="about-cta-btn"
            onClick={onScrollToCatalog}
          >
            <span>Explore The Collection</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
