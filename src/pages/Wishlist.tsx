import { useWishlist } from '../context/WishlistContext';
import { getProductById, type Product } from '../services/products';
import ProductCard from '../components/product/ProductCard';
import '../styles/WishList.css';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useWishlist();
  
  const wishlistProducts = wishlist
    .map(id => getProductById(id))
    .filter(Boolean) as Product[];

  return (
    <div className="container py-5">
      <h1>Your Wishlist</h1>
      {wishlistProducts.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
          <Link to="/" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;