import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Kids from '../pages/Kids';
import Login from '../pages/Login';
import Wishlist from '../pages/Wishlist';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Router;