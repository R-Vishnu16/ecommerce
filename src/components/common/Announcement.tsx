import { FiChevronRight } from 'react-icons/fi';
import '/src/styles/Announcement.css';

const AnnouncementBanner = ({ offer }: { offer: any }) => {
  return (
    <div className="offer-banner">
      <div className="banner-content">
        <div className="offer-text">
          <h3 className="offer-title">{offer.title}</h3>
          <p>
            {offer.description} Use code <strong>{offer.couponCode}</strong> at checkout.
            Offer ends {offer.expiryDate}.
          </p>
        </div>
        <button className="shop-now-btn">
          Shop Now <FiChevronRight className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;