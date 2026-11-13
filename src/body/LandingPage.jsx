import { FaStore, FaMotorcycle } from "react-icons/fa";
import "./LandingPage.css";
import photo from '../assets/photo.png';
export const BodyContent = () => {
  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="section-label">
                Your Marketplace, Reimagined
              </span>
              <h1>
                Everything You Need, <span>In One Place.</span>
              </h1>
              <p>
                Discover thousands of items from top-verified independent
                vendors. Convenient online ordering, instant updates, and swift
                doorstep delivery.
              </p>

              <div className="hero-ctas">
                <a href="#shop" className="btn btn-primary">
                  Start Shopping
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <button className="btn btn-secondary">Become a Vendor</button>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Verified Sellers</span>
                </div>
                <div className="trust-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span>Fast Delivery</span>
                </div>
                <div className="trust-item">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Secure Orders</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-stack">
                <div className="main-hero-card">
                  <img src={photo} alt="VENDORA Shopping Experience" />
                </div>

                <div className="floating-card floating-card-1">
                  <div className="fc-icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="fc-text">
                    <h4>Top Merchants</h4>
                    <p>Direct from store</p>
                  </div>
                </div>

                <div className="floating-card floating-card-2">
                  <div
                    className="fc-icon"
                    style={{ background: "#e6fcf5", color: "#0ca678" }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="fc-text">
                    <h4>Order Dispatch</h4>
                    <p>Riders assigned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <div className="text-center">
              <span className="section-label">Why Choose Vendora</span>
              <h2 className="section-title">Designed for Modern Commerce</h2>
              <p className="section-desc">
                Connecting customers, vendors, and riders into one seamless
                ecosystem built for speed and security.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h3>Wide Product Selection</h3>
                <p>
                  Explore thousands of authentic products across tech, fashion,
                  living, and lifestyle categories.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Trusted Vendors</h3>
                <p>
                  Every store on VENDORA undergoes strict verification to ensure
                  quality and original goods.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <h3>Convenient Ordering</h3>
                <p>
                  Smooth checkout process with clear tracking, flexible payment,
                  and simple order history.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3>Delivery Support</h3>
                <p>
                  Our dedicated rider network delivers your purchases straight
                  to your doorstep efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="categories" id="categories">
          <div className="container">
            <div className="text-center">
              <span className="section-label">Explore Marketplace</span>
              <h2 className="section-title">Shop By Category</h2>
              <p className="section-desc">
                Browse through top curated categories tailored to your daily
                needs.
              </p>
            </div>

            <div className="category-grid">
              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=200&q=80"
                    alt="Electronics"
                  />
                </div>
                <h4>Electronics</h4>
                <span>120+ Items</span>
              </div>

              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=200&q=80"
                    alt="Fashion"
                  />
                </div>
                <h4>Fashion</h4>
                <span>250+ Items</span>
              </div>

              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80"
                    alt="Shoes"
                  />
                </div>
                <h4>Shoes</h4>
                <span>90+ Items</span>
              </div>

              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80"
                    alt="Home & Living"
                  />
                </div>
                <h4>Home & Living</h4>
                <span>180+ Items</span>
              </div>

              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80"
                    alt="Beauty"
                  />
                </div>
                <h4>Beauty</h4>
                <span>140+ Items</span>
              </div>

              <div className="category-card">
                <div className="category-img-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80"
                    alt="Accessories"
                  />
                </div>
                <h4>Accessories</h4>
                <span>210+ Items</span>
              </div>
            </div>
          </div>
        </section>

        <section className="products" id="shop">
          <div className="container">
            <div className="text-center">
              <span className="section-label">Handpicked For You</span>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-desc">
                Discover outstanding products supplied directly by trusted
                sellers on VENDORA.
              </p>
            </div>

            {/* <!-- Category Filter Tabs --> */}
            <div className="filter-tabs">
              <button className="tab-btn active">All Products</button>
              <button className="tab-btn">Electronics</button>
              <button className="tab-btn">Fashion</button>
              <button className="tab-btn">Shoes</button>
              <button className="tab-btn">Home & Living</button>
            </div>

            {/* <!-- Rendered JS Grid --> */}
            {/* <div className="product-grid" id="productGrid"></div> */}
          </div>
        </section>

        {/* <!-- ==========================================
         HOW VENDORA WORKS
         ========================================== --> */}
        <section className="how-it-works" id="how-it-works">
          <div className="container">
            <div className="text-center">
              <span className="section-label">Simple Process</span>
              <h2 className="section-title">How VENDORA Works</h2>
              <p className="section-desc">
                Shopping from multiple independent vendors made easy in three
                smooth steps.
              </p>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>Discover Products</h3>
                <p>
                  Browse through hundreds of items from verified sellers and add
                  your choices to the cart.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <h3>Place Your Order</h3>
                <p>
                  Complete your checkout safely. Orders are routed directly to
                  the respective vendors.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3>Receive Delivery</h3>
                <p>
                  Assigned riders pick up your orders from vendors and bring
                  them directly to your door.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
         BECOME A VENDOR / RIDER PROMOS
         ==========================================  */}
        <section className="vendor-promo" id="vendor">
          <div className="container vendor-grid">
            <div className="vendor-content">
              <span className="badge">FOR SELLERS</span>
              <h2>
                Turn Your Products Into <span>Opportunities.</span>
              </h2>
              <p>
                Join VENDORA as a vendor and showcase your products to a wide
                audience. Manage orders, track sales, and grow your business —
                all from one dashboard.
              </p>
              <button className="btn btn-primary">Become a Vendor</button>
            </div>
            <div className="vendor-visual">
              <FaStore color=" var(--primary)" size={100} />
            </div>
          </div>
        </section>

        <section
          className="vendor-promo"
          id="vendor"
          style={{ background: "var(--navy)", color: "white", padding: " 80px 0" }}
        >
          <div className="container vendor-grid">
            <div className="vendor-content">
              <h2 style={{ color: "white" }}>
                Delivery Riders, <span>Join the VENDORA Network.</span>
              </h2>
              <p>
                Riders help transport orders from vendors to customers. If
                you're looking for flexible delivery opportunities, join our
                rider network.
              </p>
              <button
                className="btn btn-primary"
                style={{ background: "white", color: "var(--primary)" }}
              >
                Join as Rider
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaMotorcycle color=" var(--primary)" size={150} />
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <h2>Ready to Experience VENDORA?</h2>
            <p>Start shopping or join as a vendor — your marketplace awaits.</p>
            <div className="final-buttons">
              <a
                href="#shop"
                className="btn btn-primary"
                style={{
                  backgroundColor: "white",
                  color: " var(--primary)",
                  borderColor: " rgba(255, 255, 255, 0.4);",
                }}
              >
                Start Shopping
              </a>
              <a
                href="#become-vendor"
                className="btn btn-primary"
                style={{
                  backgroundColor: "transparent",
                  color:'white',
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                Become a Vendor
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
