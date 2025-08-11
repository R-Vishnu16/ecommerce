import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Router from './routes/AppRouter';
import Footer from './components/layout/Footer';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <WishlistProvider>
      <CartProvider> 
        <BrowserRouter>
          <Header />
          <main className="main-content">
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;