import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" style={{ marginBottom: '14px' }}>
              <div className="brand-icon">
                <img src="/logo-white.png" alt="TechNest" className="brand-logo-img" />
              </div>
              <span className="brand-name">TechNest</span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', maxWidth: '320px', lineHeight: 1.6 }}>
              Crafted for digital minimalists, sound purists, and computational power users. Every piece engineered to elevate the human workspace.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Ecosystem</h4>
            <ul className="footer-links-list">
              <li><a href="#catalog-section" className="footer-link-item">Studio Headphones</a></li>
              <li><a href="#catalog-section" className="footer-link-item">UltraBook Workstations</a></li>
              <li><a href="#catalog-section" className="footer-link-item">Mobile Flagships</a></li>
              <li><a href="#catalog-section" className="footer-link-item">Qi2 MagStands & Cables</a></li>
              <li><a href="#about-section" className="footer-link-item">About & Philosophy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Client Support</h4>
            <ul className="footer-links-list">
              <li><a href="#order-lookup" onClick={(e) => { e.preventDefault(); alert('Order Tracking Lookup'); }} className="footer-link-item">Track Order</a></li>
              <li><a href="#warranty" onClick={(e) => { e.preventDefault(); alert('2-Year Comprehensive TechNest Warranty Details'); }} className="footer-link-item">Warranty Claim</a></li>
              <li><a href="#returns" onClick={(e) => { e.preventDefault(); alert('30-Day Hassle-Free Returns'); }} className="footer-link-item">Return Center</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); alert('TechNest Concierge FAQ'); }} className="footer-link-item">Help & FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">TechNest Direct</h4>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
              Receive invitations to private studio drops and firmware hardware previews.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter creator email" 
                className="footer-email-input"
              />
              <button 
                className="footer-join-btn" 
                onClick={() => alert('Thank you for subscribing to TechNest Studio updates!')}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar from Video Frame 08 */}
        <div className="footer-bottom-bar">
          <div>
            Copyright © 2026 TechNest Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#privacy" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
            <a href="#security" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)' }}>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
