// src/pages/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fresh Tomatoes', price: 2.99, image: 'tomato.jpg' },
    { id: 2, name: 'Organic Apples', price: 3.99, image: 'apple.jpg' },
    // Add more products as needed
  ]);

  return (
    <div className="product-list">
      <h1 className="product-list__title">Our Products</h1>
      <div className="product-list__grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-card__image" />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="product-card__link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;