import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderConfirmedModal from './components/OrderConfirmedModal';
import MobileBottomNav from './components/MobileBottomNav';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import { products } from './data/products';

export default function App() {
  // Active mobile tab for bottom navigation
  const [mobileTab, setMobileTab] = useState('home');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Cart state persisted to localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'tn-headphones-01',
          name: 'TechNest Studio Wireless Headphones',
          subtitle: 'Space Audio Series • ANC 2.0',
          price: 180.00,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85',
          selectedColor: { name: 'Space Black', hex: '#1C1C1E' },
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  // Favorites state persisted to localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('technest_favs');
      return saved ? JSON.parse(saved) : ['tn-headphones-01', 'tn-laptop-pro-16'];
    } catch {
      return [];
    }
  });

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderConfirmedData, setOrderConfirmedData] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('technest_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('technest_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    if (window.location.hash === '#catalog-section' || window.location.search.includes('catalog')) {
      setTimeout(() => {
        const el = document.getElementById('catalog-section');
        if (el) el.scrollIntoView();
      }, 200);
    }
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product, quantity = 1, color = null) => {
    const itemColor = color || (product.colors ? product.colors[0] : null);
    setCartItems(prev => {
      const existingIdx = prev.findIndex(i => i.id === product.id && i.selectedColor?.name === itemColor?.name);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          image: product.image,
          selectedColor: itemColor,
          quantity: quantity
        }];
      }
    });
  };

  const handleAddToCartAndOpenCart = (product, quantity = 1, color = null) => {
    handleAddToCart(product, quantity, color);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, colorName, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId, colorName);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && (!colorName || item.selectedColor?.name === colorName)) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemoveItem = (productId, colorName) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && (!colorName || item.selectedColor?.name === colorName))));
  };

  const handleToggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const handleOrderPlaced = (orderResult) => {
    setIsCheckoutOpen(false);
    setOrderConfirmedData(orderResult);
    setCartItems([]);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenFeaturedProduct = () => {
    const featured = products.find(p => p.id === 'tn-headphones-01');
    if (featured) setSelectedProduct(featured);
  };

  return (
    <div className="app-viewport-wrapper">
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        favoritesCount={favorites.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onResetToHome={() => {
          setSelectedCategory('all');
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <Hero
        onOpenFeaturedProduct={handleOpenFeaturedProduct}
        onScrollToCatalog={scrollToCatalog}
      />

      <ProductCatalog
        products={products}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onSelectProduct={setSelectedProduct}
        onAddToCart={handleAddToCart}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
        cartItems={cartItems}
        searchQuery={searchQuery}
      />

      <AboutSection onScrollToCatalog={scrollToCatalog} />

      <Footer />

      {/* Native Mobile Bottom Navigation (Visible on mobile viewports) */}
      <MobileBottomNav
        activeTab={mobileTab}
        setActiveTab={setMobileTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const input = document.querySelector('.search-input');
          if (input) input.focus();
        }}
        onResetToHome={() => {
          setSelectedCategory('all');
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Slide-out Cart Drawer (Exact match to Video Frame 05) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Product Detail Modal (Exact match to Video Frame 03) */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCartAndOpenCart={handleAddToCartAndOpenCart}
      />

      {/* Checkout Screen (Exact match to Video Frame 08) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Order Confirmed Screen (Exact match to Video Frame 09) */}
      <OrderConfirmedModal
        orderData={orderConfirmedData}
        isOpen={!!orderConfirmedData}
        onClose={() => setOrderConfirmedData(null)}
      />
    </div>
  );
}
