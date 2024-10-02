// src/components/ProductCard.js
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__description">{product.description}</p>
      <p className="product-card__price">${product.price}</p>
      <button className="product-card__add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
