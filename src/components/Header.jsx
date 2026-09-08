import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  X
} from 'lucide-react';

export default function Header({ 
  cartCount, 
  onOpenCart, 
  favoritesCount, 
  searchQuery, 
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onResetToHome
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled visible' : 'floating-hero'}`} id="main-header">
      <div className="header-frame-container">
        <div className="header-inner">
          {/* Brand Logo */}
          <div className="brand-logo" onClick={onResetToHome} title="TechNest Home">
            <div className="brand-icon">
              <img src="/logo-white.png" alt="TechNest" className="brand-logo-img" />
            </div>
            <span className="brand-name">TechNest</span>
          </div>

          {/* Search Box */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <Search size={16} className="search-icon" />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search products, laptops, audio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="search-clear-btn" onClick={() => setSearchQuery('')} title="Clear">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Desktop Nav Categories */}
          <nav className="desktop-nav">
            <button 
              className={`nav-link ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
            >
              All
            </button>
            <button 
              className={`nav-link ${selectedCategory === 'laptops' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('laptops')}
            >
              Laptops
            </button>
            <button 
              className={`nav-link ${selectedCategory === 'mobile' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('mobile')}
            >
              Mobile
            </button>
            <button 
              className={`nav-link ${selectedCategory === 'audio' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('audio')}
            >
              Audio
            </button>
            <button 
              className={`nav-link ${selectedCategory === 'accessories' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('accessories')}
            >
              Accessories
            </button>
          </nav>

          {/* Header Action Icons */}
          <div className="header-actions">
            <button 
              className="action-icon-btn" 
              title="Wishlist"
              onClick={() => alert(`You have ${favoritesCount} saved items in your wishlist.`)}
            >
              <Heart size={18} />
              {favoritesCount > 0 && (
                <span className="badge-counter">{favoritesCount}</span>
              )}
            </button>

            <button 
              className="action-icon-btn" 
              title="Account"
              onClick={() => alert('TechNest Member VIP Portal')}
            >
              <User size={18} />
            </button>

            <button 
              className="action-icon-btn cart-btn-highlight" 
              onClick={onOpenCart}
              title="Open Bag"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="badge-counter">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
