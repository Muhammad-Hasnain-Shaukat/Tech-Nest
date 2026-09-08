import React from 'react';
import { Heart, Check } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onAddToCart, 
  isFavorite, 
  onToggleFavorite, 
  isInCart 
}) {
  const themeClass = product.theme || 'theme-light';

  return (
    <div 
      className={`apple-product-card ${themeClass}`}
      onClick={() => onSelectProduct(product)}
      role="button"
      tabIndex={0}
      aria-label={`${product.headline || product.name} presentation card`}
    >
      {/* Top Header Information (Headline, Tagline, Availability, Dual Buttons) */}
      <div className="apple-card-header">
        <h3 className="apple-card-headline">{product.headline || product.name}</h3>
        <p className="apple-card-tagline">{product.tagline || product.subtitle}</p>
        
        <span className="apple-card-availability">
          {product.availability || `Available now • From $${product.price.toFixed(2)}`}
        </span>

        {/* Apple Dual Pill Buttons */}
        <div className="apple-card-actions">
          <button 
            className="apple-btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
          >
            Learn more
          </button>

          <button 
            className="apple-btn-secondary"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            {isInCart ? (
              <>
                <Check size={14} style={{ marginRight: '4px' }} />
                <span>Added</span>
              </>
            ) : (
              <span>Buy</span>
            )}
          </button>
        </div>
      </div>

      {/* Top-right Wishlist Action */}
      <button 
        className={`apple-card-fav-btn ${isFavorite ? 'is-favorite' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
        title={isFavorite ? "Remove from wishlist" : "Save to wishlist"}
      >
        <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      {/* Bottom Hero Product Image */}
      <div className="apple-card-image-wrapper">
        <img 
          src={product.image} 
          alt={product.headline || product.name} 
          className="apple-card-image"
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
