import logo from '../../assets/logo.png'
import './Footer.css'


export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
               <div className="brand-logo">
                         <div className="logo-container">
                           <img src={logo} alt="Vendora Logo" className="logo" />
                         </div>
             
                         <div className="brand-text" style={{color:'white'}}>
                           VEND<span>ORA</span>
                         </div>
                       </div>
              <p>
                Your marketplace, reimagined. Discover products from multiple
                vendors and enjoy convenient delivery.
              </p>
            </div>
            <div>
              <h4>Marketplace</h4>
              <ul>
                <li>
                  <a href="#shop" onclick="showPrototypeMsg('Shop')">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#vendor">Vendors</a>
                </li>
                <li>
                  <a href="#how-it-works">How It Works</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#" onclick="showPrototypeMsg('Help Center')">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" onclick="showPrototypeMsg('Privacy Policy')">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" onclick="showPrototypeMsg('Terms')">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Partners</h4>
              <ul>
                <li>
                  <a href="#vendor">Become a Vendor</a>
                </li>
                <li>
                  <a href="#" onclick="showPrototypeMsg('Rider Onboarding')">
                    Join as a Rider
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              &copy; <span id="year"></span> VENDORA. All rights reserved.
            </span>
            <div>
              <a href="#" onclick="showPrototypeMsg('Privacy Policy')">
                Privacy
              </a>
              <a href="#" onclick="showPrototypeMsg('Terms')">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
