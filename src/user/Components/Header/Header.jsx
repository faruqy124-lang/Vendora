import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./HeaderUser.css";
import logo from '../../../assets/logo2.png';

const Header = () => {
  return (
    <header className="header-dashboard">
      <div className="nav-container-set">
        <div className="header-search">
          <div className=" logoDash" >
            <img src={logo} alt="Vendora Logo" className="logo" />
          </div>
          <div className="input-setting">
            <FaSearch className="icon-search" />
            <input
              className="header-dashboard-input"
              type="text"
              id="searchInput"
              placeholder="Search products, brands and categories in Nigeria..."
              aria-label="Search products"
            />
          </div>
        </div>

        <div className="header-actions">
          <button className="cart-btn" aria-label="View Wishlist">
            <FaHeart className="icon" />
            <span className="cart-count">0</span>
          </button>

          <button className="cart-btn" aria-label="View Cart">
            <FaShoppingCart className="icon" />
            <span className="cart-count">0</span>
          </button>

          <div className="user-profile">
            <div className="user-info">
              <span className="user-role">Lagos, NG</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;