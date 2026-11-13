import './Auth.css'

const LeftContent = () => {
  return (
    <>
      {/* <!-- LEFT PANEL: Dynamic Brand Showcase --> */}
          <div className="brand-panel">
            <div className="glow-1"></div>
            <div className="glow-2"></div>

            {/* <!-- Dynamic Banner Text --> */}
            <div className="banner-content">
              <h2 className="banner-title" id="bannerTitle">
                Discover Thousands of Products from{" "}
                <span id="highlightText">Verified Sellers.</span>
              </h2>
              <p className="banner-sub" id="bannerSub">
                Enjoy convenient shopping, instant order updates, and swift
                delivery across top categories on VENDORA.
              </p>

              <div className="feature-list" id="featureList">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Over 10,000+ authentic products available</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Secure payment & multi-store cart checkout</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Live doorstep tracking for every dispatch</span>
                </div>
              </div>
            </div>

            {/* <!-- Testimonial Carousel --> */}
            <div className="testimonial-box">
              <p className="quote-text" id="quoteText">
                "Shopping on VENDORA is incredibly smooth. Ordering from
                different vendors in one checkout saved me time and money."
              </p>
              <div className="author-info">
                <div className="author-profile">
                  <div className="avatar-initial" id="avatarInit">
                    AO
                  </div>
                  <div>
                    <div className="author-name" id="authorName">
                      Amina Okonkwo
                    </div>
                    <div className="author-role" id="authorRole">
                      Verified Customer
                    </div>
                  </div>
                </div>

                <div className="carousel-nav">
                  <span className="dot active" onclick="setSlide(0)"></span>
                  <span className="dot" onclick="setSlide(1)"></span>
                  <span className="dot" onclick="setSlide(2)"></span>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default LeftContent