import React from 'react';
import ProductCard from './ProductCard';
import { categories } from '../data/products';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ProductCatalog({ 
  products, 
  selectedCategory, 
  setSelectedCategory, 
  onSelectProduct, 
  onAddToCart,
  favorites,
  onToggleFavorite,
  cartItems,
  searchQuery
}) {
  const filteredProducts = products.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="category-section" id="catalog-section">
      <div className="container">
        {/* Category Header & Filter Pills */}
        <div className="category-header">
          <div>
            <h2 className="section-title">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Precision Engineered Catalog'}
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              Showing {filteredProducts.length} curated device{filteredProducts.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="category-pills-row">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredProducts.length > 0 ? (
          <div className="catalog-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={onToggleFavorite}
                isInCart={cartItems.some(i => i.id === product.id)}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-medium)', margin: '20px 0 60px' }}>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '8px' }}>
              No items found matching your criteria.
            </p>
            <button 
              className="btn-secondary" 
              onClick={() => { setSelectedCategory('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
