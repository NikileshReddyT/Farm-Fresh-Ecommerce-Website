// src/pages/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tomato from '../Images/tomato.jpg'
import apple from '../Images/apple.jpg'
import product_list from '../components/ProductList';

function ProductList() {
  const [products, setProducts] = useState(product_list);

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