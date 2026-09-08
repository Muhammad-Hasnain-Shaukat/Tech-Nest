import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag size={18} />
            <h2 className="drawer-title">Your Order</h2>
          </div>
          <button className="drawer-close-btn" onClick={onClose} title="Close Bag">
            <X size={18} />
          </button>
        </div>

        <div className="drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} strokeWidth={1.2} />
              <p style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Your bag is empty</p>
              <p style={{ fontSize: '13px' }}>Explore the catalog to add premium hardware and accessories.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedColor?.name || 'default'}`} className="cart-item-row">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-thumb" 
                />
                
                <div className="cart-item-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 className="cart-item-name">{item.name}</h4>
                    <button 
                      onClick={() => onRemoveItem(item.id, item.selectedColor?.name)}
                      style={{ color: 'var(--text-muted)', padding: '2px' }}
                      title="Remove"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  {item.selectedColor && (
                    <span className="cart-item-variant">Finish: {item.selectedColor.name}</span>
                  )}

                  <div className="cart-item-controls">
                    <div className="qty-counter">
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor?.name, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button 
                        className="qty-btn" 
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor?.name, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <span className="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="drawer-summary-line">
              <span>Your Order</span>
              <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
            </div>

            <div className="drawer-summary-line">
              <span>Estimated Shipping</span>
              <span>{shipping === 0 ? <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>FREE</span> : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className="drawer-summary-line">
              <span>Estimated Sales Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="drawer-summary-line total">
              <span>Your Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button 
              className="checkout-btn-full" 
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
            >
              <span>Checkout</span>
              <ArrowRight size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
              <ShieldCheck size={14} />
              <span>Encrypted 256-Bit SSL Checkout Protection</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
