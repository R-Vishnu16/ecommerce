import { useState, useEffect } from 'react';
import ProductCard from "../components/product/ProductCard";
import '../styles/Home.css';
import { getProductsByCategory, type Product } from '../services/products';

const Men = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const menProducts = getProductsByCategory('men');
      setProducts(menProducts);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="category-page">
      <div className="container">
        <h2 className="section-title">Men's Collection</h2>
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

export default Men;