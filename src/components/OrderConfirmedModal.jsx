import React, { useEffect } from 'react';
import { Check, ArrowRight, Package, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderConfirmedModal({
  orderData,
  isOpen,
  onClose
}) {
  if (!isOpen || !orderData) return null;

  useEffect(() => {
    // Subtle, elegant gold/monochrome confetti burst
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#111111', '#D4AF37', '#9CA3AF', '#F3F4F6']
    });
  }, []);

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="order-confirmed-card" onClick={(e) => e.stopPropagation()}>
        {/* Animated Check Circle from Video Frame 09 */}
        <div className="check-circle-wrapper">
          <Check size={40} strokeWidth={2.5} />
        </div>

        {/* Title from Video Frame 09 */}
        <h2 className="confirmed-title">Order Confirmed</h2>

        <p className="confirmed-desc">
          Your precision tech order has been confirmed and dispatched to our climate-controlled fulfillment hub.
        </p>

        {/* Order Reference Number */}
        <div className="order-code-badge">
          Order ID: {orderData.orderId}
        </div>

        <div style={{ width: '100%', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', textAlign: 'left', fontSize: '13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: 700 }}>
            <Calendar size={15} />
            <span>Estimated Delivery: 2 Business Days</span>
          </div>
          <div style={{ color: 'var(--text-muted)' }}>
            Tracking updates will be sent to: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{orderData.formData?.email || 'customer@technest.com'}</span>
          </div>
        </div>

        <button 
          className="btn-primary" 
          onClick={onClose}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <span>Continue Shopping</span>
          <ArrowRight size={16} />
        </button>

        {/* TechNest Branding Footer matching Video Frame 09 */}
        <div className="confirmed-brand-row">
          <div className="brand-icon" style={{ width: '24px', height: '24px', padding: '4px', borderRadius: '5px' }}>
            <img src="/logo-white.png" alt="TechNest" className="brand-logo-img" />
          </div>
          <span style={{ fontSize: '16px', letterSpacing: '-0.03em' }}>TechNest</span>
        </div>
      </div>
    </div>
  );
}
