import React from 'react';
import { Home, Compass, Search, ShoppingBag, User } from 'lucide-react';

export default function MobileBottomNav({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onResetToHome
}) {
  return (
    <nav className="mobile-bottom-nav">
      <button 
        className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('home');
          onResetToHome();
        }}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button 
        className={`bottom-nav-item ${activeTab === 'catalog' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('catalog');
          const el = document.getElementById('catalog-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Compass size={20} />
        <span>Catalog</span>
      </button>

      <button 
        className={`bottom-nav-item ${activeTab === 'search' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('search');
          onOpenSearch();
        }}
      >
        <Search size={20} />
        <span>Search</span>
      </button>

      <button 
        className="bottom-nav-item"
        onClick={onOpenCart}
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={20} />
          {cartCount > 0 && (
            <span className="bottom-nav-badge">{cartCount}</span>
          )}
        </div>
        <span>Bag</span>
      </button>

      <button 
        className="bottom-nav-item"
        onClick={() => alert('TechNest Member VIP Access')}
      >
        <User size={20} />
        <span>Account</span>
      </button>
    </nav>
  );
}
