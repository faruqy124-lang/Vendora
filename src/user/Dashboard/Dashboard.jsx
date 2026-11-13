
import "./Dashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/SideBar/Sidebar ";


const Dashboard = () => {
//   const location = useLocation();
//   const naviagte = useNavigate();

//   const userData =  location.state?.userData || JSON.parse(localStorage.getItem("user"));
//   const user = userData?.data || userData?.user;

//   if (!user) {
//     naviagte("/login");
//     return null;
//   }

//   const displayName = user.firstName || "Guest";
//   const initials = user.firstName ? user.firstName[0].toUpperCase() : "G";


//   console.log(user);

//   const handelLogout = () => {
//     localStorage.clear();
//     naviagte("/login");
//   };

  return (
    <>
      <title>VENDORA — Dashboard</title>

      
    {<Header/>}

     {<Sidebar />}

      <section className="content-section">
        <main className="main-wrapper">
          <div
            className="container"
            style={{
              padding: "0",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              gap: "1.7rem",
            }}
          >
            {/* <!-- Hero Banner --> */}
            <section className="hero-banner">
              <div className="hero-content">
                <span className="hero-tag">NIGERIA'S NO.1 MARKETPLACE</span>
                <h1
                  className="hero-title"
                  style={{ color: "white", fontSize: "40px" }}
                >
                  Exclusive Marketplace Deals in Naira (₦)
                </h1>
                <p style={{ fontSize: "17px" }}>
                  Discover high-quality electronics, authentic local Ankara
                  prints, solar energy systems & daily groceries delivered fast
                  nationwide.
                </p>
                <button className="hero-btn" onclick="scrollToProducts()">
                  Explore Nationwide Market
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>
            </section>

            {/* <!-- Category Filter Bar --> */}
            <section className="filter-section">
              <div className="category-pills" id="categoryPills">
                <button className="pill active" data-category="All">
                  All Items
                </button>
                <button className="pill" data-category="Electronics">
                  Electronics
                </button>
                <button className="pill" data-category="Fashion">
                  Fashion
                </button>
                <button className="pill" data-category="Home">
                  Home & Kitchen
                </button>
                <button className="pill" data-category="Groceries">
                  Groceries
                </button>
              </div>

              <div className="sort-container">
                <label for="sortSelect">Sort By:</label>
                <select id="sortSelect" className="sort-select">
                  <option value="featured">Featured Deals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </section>

            {/* <!-- Product Grid --> */}
            <section>
              <div className="product-grid" id="productGrid">
                {/* <!-- Dynamic Products Rendered Here by JS --> */}
              </div>
            </section>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
