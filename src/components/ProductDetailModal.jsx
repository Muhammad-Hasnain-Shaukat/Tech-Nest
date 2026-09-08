import React, { useState, useEffect } from 'react';
import { X, Star, Check, Shield, Truck, RotateCcw, ShoppingBag } from 'lucide-react';

export default function ProductDetailModal({ 
  product, 
  isOpen, 
  onClose, 
  onAddToCartAndOpenCart 
}) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.gallery?.[0] || product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setActiveImage(product.gallery?.[0] || product.image);
      setSelectedColor(product.colors?.[0] || null);
      setQuantity(1);
    }
  }, [product]);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToBag = () => {
    onAddToCartAndOpenCart(product, quantity, selectedColor);
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="product-detail-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} title="Close">
          <X size={18} />
        </button>

        <div className="product-detail-grid">
          {/* Gallery Column */}
          <div className="gallery-container">
            <div className="main-preview-box">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="main-preview-img" 
              />
            </div>

            {/* Thumbnail Pickers (Matching Video Frame 03) */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="thumbnails-row">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${activeImage === img ? 'active' : ''}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={img} alt={`${product.name} angle ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Ordering Column */}
          <div className="product-info-col">
            <div className="detail-breadcrumbs">
              <span>Home</span>
              <span>/</span>
              <span>Creators</span>
              <span>/</span>
              <span>Premium</span>
              <span>/</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.name}</span>
            </div>

            <h1 className="detail-title">{product.name}</h1>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>{product.subtitle}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <div style={{ display: 'flex', color: '#EAB308' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#EAB308" />
                ))}
              </div>
              <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {product.rating} ({product.reviewsCount} verified reviews)
              </span>
            </div>

            <div className="detail-price-row">
              <span className="detail-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span style={{ fontSize: '16px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span style={{ fontSize: '12px', background: '#DCFCE7', color: '#166534', padding: '3px 8px', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
                In Stock • {product.leadTime}
              </span>
            </div>

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="swatch-group">
                <div className="swatch-label">
                  Finish: <span style={{ color: 'var(--text-primary)' }}>{selectedColor?.name}</span>
                </div>
                <div className="swatches-list">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      className={`swatch-item ${selectedColor?.name === color.name ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                    >
                      <div className="swatch-color" style={{ backgroundColor: color.hex }}></div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add to Bag (As shown in video) */}
            <div className="detail-quantity-row">
              <div className="detail-qty-picker">
                <button onClick={handleDecrement}>-</button>
                <span className="detail-qty-val">{quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>

              <button className="detail-add-bag-btn" onClick={handleAddToBag}>
                <ShoppingBag size={17} />
                <span>Add to Bag • ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Feature Highlights from Video */}
            <ul className="detail-bullets">
              {product.features?.map((feat, i) => (
                <li key={i}>
                  <Check size={15} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Spec Highlights */}
            {product.specs && (
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '10px' }}>Key Specifications:</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
                  {product.specs.slice(0, 4).map((spec, i) => (
                    <div key={i} style={{ background: 'var(--bg-secondary)', padding: '6px 10px', borderRadius: 'var(--radius-sm)' }}>
                      <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{spec.label}</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
