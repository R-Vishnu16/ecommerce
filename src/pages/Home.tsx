import { useEffect, useState } from 'react';
import Announcement from "../components/common/Announcement";
import ProductCard from "../components/product/ProductCard";
import { getProducts, type Product } from '../services/products';
import '../styles/Home.css';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = getProducts();
        setProducts(allProducts.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error('Error loading products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

   const currentOffer = {
    title: "Summer Sale!",
    description: "Get 30% off on all items. Limited time offer.",
    couponCode: "SUMMER30",
    expiryDate: "July 31, 2025"
  };
  
  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      <div className="container">
        <Announcement offer={currentOffer} />

        <h2 className="section-title">Featured Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;