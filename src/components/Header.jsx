import "./Header.css";
import logo from "../assets/logo.png";
import {Link} from "react-router"
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <div className="brand-logo">
            <div className="logo-container">
              <img src={logo} alt="Vendora Logo" className="logo" />
            </div>

            <div className="brand-text">
              VEND<span>ORA</span>
            </div>
          </div>

          <nav>
            <ul className="nav-menu" id="navMenu">
              <li>
                <a href="#home" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="nav-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#categories" className="nav-link">
                  Categories
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="nav-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#vendor" className="nav-link">
                  Become a Vendor
                </a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button className="cart-btn" id="cartToggle" aria-label="View Cart">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="cart-count" id="cartBadge">
                0
              </span>
            </button>

            <Link to= '/login' className="btn btn-secondary btn-sm"> Login</Link>
            <Link to = '/signup'  className="btn btn-primary btn-sm">Sign Up</Link>
          </div>
        </div>
      </header>
    </>
  );
};
