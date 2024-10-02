// src/pages/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on id
    // For now, we'll use a mock product
    setProduct({
      id: id,
      name: 'Sample Product',
      price: 9.99,
      description: 'This is a sample product description.',
      image: 'sample.jpg'
    });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    // Add to cart logic here
    // Then navigate to cart
    navigate('/cart');
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details__image" />
      <div className="product-details__info">
        <h1 className="product-details__name">{product.name}</h1>
        <p className="product-details__price">${product.price.toFixed(2)}</p>
        <p className="product-details__description">{product.description}</p>
        <button onClick={handleAddToCart} className="product-details__add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;