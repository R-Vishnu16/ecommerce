import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import type { Product, CartItem } from '../../types'; 
import '/src/styles/ProductCard.css';

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    };
    
    addToCart(cartItem);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name} 
            className="product-image"
          />
          
          {product.images.length > 1 && (
            <>
              <button 
                className="image-nav-btn prev-btn"
                onClick={handlePrevImage}
              >
                <FiChevronLeft />
              </button>
              <button 
                className="image-nav-btn next-btn"
                onClick={handleNextImage}
              >
                <FiChevronRight />
              </button>
            </>
          )}
          
          <button 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistClick}
          >
            <FiHeart />
          </button>
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="price-section">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={i < product.rating ? 'filled' : ''} />
              ))}
            </div>
            <span className="rating-count">({product.reviews})</span>
          </div>
          
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <FiShoppingCart className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;