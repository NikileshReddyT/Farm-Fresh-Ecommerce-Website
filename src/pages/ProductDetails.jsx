import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import product_list from '../components/ProductList'; // Importing the product list

function ProductDetails() {
  const { id } = useParams();  // Getting product id from the URL params
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find product by id from the product list
    const foundProduct = product_list.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading message until the product is set
  }

  const handleAddToCart = () => {
    // Add to cart logic here (you can implement state management or global cart)
    // For now, we'll just navigate to the cart page
    navigate('/cart');
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details__image" />
      <div className="product-details__info">
        <h1 className="product-details__name">{product.name}</h1>
        <p className="product-details__price">${product.price.toFixed(2)}</p>
        <p className="product-details__description">{product.description}</p>
        <button onClick={handleAddToCart} className="product-details__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
