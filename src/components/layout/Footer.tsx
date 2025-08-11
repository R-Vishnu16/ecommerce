import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-3">Shopizo</h5>
            <p className="text-muted">
              Your one-stop fashion destination. Quality products at affordable prices.
            </p>
            <div className="mt-3">
              <p className="mb-1"><i className="bi bi-geo-alt me-2"></i> 123 Fashion St, Style City</p>
              <p className="mb-1"><i className="bi bi-envelope me-2"></i> support@shopizo.com</p>
              <p><i className="bi bi-telephone me-2"></i> +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/about" className="text-muted">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="text-muted">Contact</a></li>
              <li className="mb-2"><a href="/privacy" className="text-muted">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="text-muted">Terms & Conditions</a></li>
              <li><a href="/returns" className="text-muted">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="/track-order" className="text-muted">Track Order</a></li>
              <li className="mb-2"><a href="/shipping" className="text-muted">Shipping Info</a></li>
              <li className="mb-2"><a href="/size-guide" className="text-muted">Size Guide</a></li>
              <li className="mb-2"><a href="/faqs" className="text-muted">FAQs</a></li>
              <li><a href="/payment" className="text-muted">Payment Methods</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="text-muted">Subscribe for 10% off your first order!</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
            <div className="social-icons d-flex gap-3 mt-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaPinterest size={20} /></a>
            </div>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="row mt-5 pt-3 border-top">
          <div className="col-md-6">
            <div className="payment-methods d-flex gap-2">
              <SiVisa size={30} className="text-muted" />
              <SiMastercard size={30} className="text-muted" />
              <SiPaypal size={30} className="text-muted" />
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()} Shopizo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;