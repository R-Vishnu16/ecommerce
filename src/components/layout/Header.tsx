import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Header = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  return (
    <header className="bg-light shadow-sm sticky-top">
      <nav className="container navbar navbar-expand-lg py-3">
        <Link to="/" className="navbar-brand fs-3 fw-bold text-primary">
          Shopizo
        </Link>

        <div className="mx-auto d-none d-lg-flex gap-4">
          <Link to="/" className="text-dark text-decoration-none position-relative nav-link">
            Home
          </Link>
          <Link to="/men" className="text-dark text-decoration-none position-relative nav-link">
            Men
          </Link>
          <Link to="/women" className="text-dark text-decoration-none position-relative nav-link">
            Women
          </Link>
          <Link to="/kids" className="text-dark text-decoration-none position-relative nav-link">
            Kids
          </Link>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div className="position-relative d-none d-md-block">
            <input 
              type="text" 
              className="form-control ps-5 rounded-pill border-0 bg-light" 
              placeholder="Search products..." 
            />
            <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
          </div>

          <div className="d-flex gap-4">
            <Link to="/login" className="text-dark fs-5 icon-link">
              <FiUser />
            </Link>
            <Link to="/wishlist" className="text-dark fs-5 icon-link position-relative">
              <FiHeart />
              {wishlistCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="text-dark fs-5 icon-link position-relative">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;