import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiHeart, FiShare2, FiChevronLeft } from 'react-icons/fi';
import { useWishlist } from '../context/WishlistContext';
import { getProductById } from '../services/products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { wishlist, toggleWishlist } = useWishlist();

  const product = getProductById(Number(id));
  const isWishlisted = wishlist.includes(Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleWishlistClick = () => {
    toggleWishlist(product.id);
  };

  return (
    <div className="product-detail-page">
      <div className="container py-4">
        <button 
          onClick={() => navigate(-1)}
          className="back-button mb-4"
        >
          <FiChevronLeft className="me-2" />
          Back to Products
        </button>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="main-image mb-3">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="img-fluid rounded-3"
              />
            </div>
            <div className="thumbnail-grid">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Thumbnail ${i+1}`}
                  className={`thumbnail ${selectedImage === i ? 'active' : ''}`}
                  onClick={() => setSelectedImage(i)}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <h1 className="mb-3">{product.name}</h1>
            
            <div className="d-flex align-items-center mb-3">
              <div className="rating me-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? 'text-warning' : 'text-muted'}>★</span>
                ))}
              </div>
              <span className="text-muted">({product.reviews} reviews)</span>
            </div>

            <div className="price mb-4">
              {product.originalPrice && (
                <span className="text-decoration-line-through text-muted me-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="h4 text-danger">${product.price.toFixed(2)}</span>
              {product.discount && (
                <span className="badge bg-danger ms-2">Save {product.discount}%</span>
              )}
            </div>

            <div className="size-selector mb-4">
              <h6 className="mb-3">Size</h6>
              <div className="size-options">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-selector mb-4">
              <h6 className="mb-3">Quantity</h6>
              <div className="quantity-control">
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="action-buttons mb-5">
              <button className="btn-add-to-cart">
                Add to Cart
              </button>
              <button 
                className={`btn-wishlist ${isWishlisted ? 'active' : ''}`}
                onClick={handleWishlistClick}
              >
                <FiHeart />
              </button>
              <button className="btn-share">
                <FiShare2 />
              </button>
            </div>

            <div className="product-description">
              <h5>Description</h5>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;