import React, { useState } from 'react';
import { X, CreditCard, CheckCircle2, Truck, ShieldCheck, Lock, Loader2 } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  onOrderPlaced
}) {
  if (!isOpen) return null;

  const [activeStep, setActiveStep] = useState('details'); // 'details' | 'delivery' | 'payment'
  const [isProcessing, setIsProcessing] = useState(false);
  const [agreed, setAgreed] = useState(true);

  // Form State with realistic default values for instant seamless testing
  const [formData, setFormData] = useState({
    name: 'Alexander Wright',
    email: 'alex.wright@creator.studio',
    address: '742 Evergreen Silicon Way, Suite 400',
    city: 'San Francisco',
    zip: '94107',
    cardNumber: '•••• •••• •••• 4242',
    deliverySpeed: 'express'
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = formData.deliverySpeed === 'express' ? 0 : 0; // Free for promotion
  const tax = subtotal * 0.08;
  const total = subtotal + shippingFee + tax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const orderId = 'TN-' + Math.floor(10000 + Math.random() * 90000);
      onOrderPlaced({
        orderId,
        items: cartItems,
        total,
        formData
      });
    }, 1200);
  };

  return (
    <div className="modal-overlay open" onClick={onClose}>
      <div className="checkout-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Close">
          <X size={18} />
        </button>

        <div className="checkout-modal-grid">
          {/* Left Column matching video frame 08 */}
          <div className="checkout-left-pane">
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '4px' }}>
                TechNest Studio Checkout
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800 }}>Complete Your Order</h3>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Official warranty registered automatically to your account.
              </p>
            </div>

            <div className="checkout-step-nav">
              <button 
                className={`checkout-step-item ${activeStep === 'details' ? 'active' : ''}`}
                onClick={() => setActiveStep('details')}
              >
                <CheckCircle2 size={16} color={activeStep === 'details' ? 'var(--accent-black)' : 'var(--text-muted)'} />
                <span>1. Shipping Details</span>
              </button>

              <button 
                className={`checkout-step-item ${activeStep === 'delivery' ? 'active' : ''}`}
                onClick={() => setActiveStep('delivery')}
              >
                <Truck size={16} color={activeStep === 'delivery' ? 'var(--accent-black)' : 'var(--text-muted)'} />
                <span>2. Delivery Preferences</span>
              </button>

              <button 
                className={`checkout-step-item ${activeStep === 'payment' ? 'active' : ''}`}
                onClick={() => setActiveStep('payment')}
              >
                <CreditCard size={16} color={activeStep === 'payment' ? 'var(--accent-black)' : 'var(--text-muted)'} />
                <span>3. Payment Method</span>
              </button>
            </div>

            <div style={{ marginTop: 'auto', background: 'var(--bg-surface)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '6px' }}>Order Guarantee:</div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                • 30-Day Money-Back Trial<br />
                • Free Carbon-Neutral Shipping<br />
                • 24-Month Hardware Coverage
              </div>
            </div>
          </div>

          {/* Right Column matching video frame 08 */}
          <div className="checkout-right-pane">
            <h2 className="checkout-title">Checkout</h2>

            <form onSubmit={handlePlaceOrder}>
              {activeStep === 'details' && (
                <div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">Full Name</label>
                    <input 
                      type="text" 
                      className="checkout-input" 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-label">Email Address</label>
                    <input 
                      type="email" 
                      className="checkout-input" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="checkout-form-group">
                    <label className="checkout-label">Shipping Address</label>
                    <input 
                      type="text" 
                      className="checkout-input" 
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
                    <div className="checkout-form-group">
                      <label className="checkout-label">City</label>
                      <input 
                        type="text" 
                        className="checkout-input" 
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label className="checkout-label">Zip Code</label>
                      <input 
                        type="text" 
                        className="checkout-input" 
                        value={formData.zip}
                        onChange={e => setFormData({ ...formData, zip: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 'delivery' && (
                <div>
                  <label className="checkout-label">Select Delivery Option</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid var(--accent-black)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input 
                          type="radio" 
                          name="delivery" 
                          checked={formData.deliverySpeed === 'express'}
                          onChange={() => setFormData({ ...formData, deliverySpeed: 'express' })}
                        />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '13.5px' }}>TechNest Priority Express</div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Estimated Delivery: Next Business Day</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700, color: 'var(--accent-green)' }}>FREE</span>
                    </label>

                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-surface)', cursor: 'pointer' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input 
                          type="radio" 
                          name="delivery" 
                          checked={formData.deliverySpeed === 'standard'}
                          onChange={() => setFormData({ ...formData, deliverySpeed: 'standard' })}
                        />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '13.5px' }}>Standard Eco Delivery</div>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>2-3 Business Days</div>
                        </div>
                      </div>
                      <span style={{ fontWeight: 700 }}>FREE</span>
                    </label>
                  </div>
                </div>
              )}

              {activeStep === 'payment' && (
                <div>
                  <div className="checkout-form-group">
                    <label className="checkout-label">Card Number (Simulated Checkout)</label>
                    <input 
                      type="text" 
                      className="checkout-input" 
                      value={formData.cardNumber}
                      onChange={e => setFormData({ ...formData, cardNumber: e.target.value })}
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <div className="checkout-form-group">
                      <label className="checkout-label">Expiry</label>
                      <input type="text" className="checkout-input" defaultValue="12/28" />
                    </div>
                    <div className="checkout-form-group">
                      <label className="checkout-label">CVC</label>
                      <input type="text" className="checkout-input" defaultValue="884" />
                    </div>
                  </div>
                </div>
              )}

              {/* Price Calculation Box matching video frame 08 */}
              <div style={{ marginTop: '16px', padding: '14px', background: 'var(--bg-primary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Item Subtotal</span>
                  <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Priority Shipping</span>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>FREE</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Estimated Tax</span>
                  <span style={{ fontWeight: 600 }}>${tax.toFixed(2)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 800, borderTop: '1px solid var(--border-medium)', paddingTop: '8px' }}>
                  <span>Total Due</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Agreement Checkbox matching video */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-secondary)', marginTop: '14px', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={agreed} 
                  onChange={e => setAgreed(e.target.checked)} 
                  required
                />
                <span>Confirm order details and accept TechNest terms</span>
              </label>

              {/* Place Order CTA Button matching video */}
              <button 
                type="submit" 
                className="place-order-btn" 
                disabled={isProcessing || !agreed}
              >
                {isProcessing ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Processing Secure Transaction...</span>
                  </>
                ) : (
                  <>
                    <Lock size={15} />
                    <span>Place Order • ${total.toFixed(2)}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
