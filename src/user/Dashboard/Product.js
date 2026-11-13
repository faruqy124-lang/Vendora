  <script>
    /* ==========================================================================
       1. DATA STRUCTURES & MOCK DATA
       ========================================================================== */
    const PRODUCTS = [
      {
        id: "p1",
        name: "5.5kVA Hybrid Solar Inverter System",
        category: "Electronics",
        price: 485000,
        rating: 4.9,
        reviews: 38,
        badge: "Popular",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z"/></svg>`
      },
      {
        id: "p2",
        name: "Authentic Supreme Hollandais Ankara (6 Yards)",
        category: "Fashion",
        price: 32000,
        rating: 4.8,
        reviews: 94,
        badge: "Top Fabric",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`
      },
      {
        id: "p3",
        name: "Royal 55-inch Ultra HD Smart TV",
        category: "Electronics",
        price: 340000,
        rating: 4.7,
        reviews: 52,
        badge: "Best Value",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>`
      },
      {
        id: "p4",
        name: "Mama Gold Royal Rice 50kg (Local)",
        category: "Groceries",
        price: 78000,
        rating: 4.9,
        reviews: 210,
        badge: "Staple Food",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L4 9v12h16V9l-8-6zm6 16H6v-9l6-4.5 6 4.5v9z"/></svg>`
      },
      {
        id: "p5",
        name: "Oraimo FreePods 4 Wireless Earbuds",
        category: "Electronics",
        price: 24500,
        rating: 4.6,
        reviews: 142,
        badge: "Hot Deal",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3e-1c-4.97 0-9 4.03-9 9v7c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V9c0-4.97-4.03-9-9-9zm-5 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2s2 .9 2 2v4c0 1.1-.9 2-2 2z"/></svg>`
      },
      {
        id: "p6",
        name: "Chef Master Double Burner Gas Cooker",
        category: "Home",
        price: 42000,
        rating: 4.5,
        reviews: 31,
        badge: "Kitchen Must",
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>`
      }
    ];

    // Application State
    let state = {
      cart: [], // items: { product, qty }
      wishlist: [], // product IDs
      activeCategory: "All",
      searchQuery: "",
      sortBy: "featured"
    };

    /* ==========================================================================
       2. UTILITY FUNCTIONS
       ========================================================================== */
    // Currency Formatter into Nigerian Naira
    const formatNaira = (amount) => {
      return "₦" + amount.toLocaleString('en-NG');
    };

    // Toast Notification Display
    const showToast = (message) => {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);

      // Animation trigger
      setTimeout(() => toast.classList.add('show'), 10);

      // Auto remove
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    };

    // Smooth Scroll Helper
    const scrollToProducts = () => {
      document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth' });
    };

    /* ==========================================================================
       3. RENDERERS
       ========================================================================== */
    // Render Products Grid with Filtering & Sorting
    const renderProducts = () => {
      const grid = document.getElementById('productGrid');
      
      // Filter Logic
      let filtered = PRODUCTS.filter(p => {
        const matchesCategory = state.activeCategory === "All" || p.category === state.activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                              p.category.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      // Sort Logic
      if (state.sortBy === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (state.sortBy === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (state.sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
      }

      // Empty State Handle
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <svg class="icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <h3>No products found</h3>
            <p>Try matching keywords or select a different category filter.</p>
          </div>
        `;
        return;
      }

      // Render Cards
      grid.innerHTML = filtered.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        return `
          <article class="product-card">
            <div class="card-thumb">
              ${product.icon}
              <span class="badge-tag">${product.badge}</span>
              <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                      aria-label="Save to Wishlist" 
                      onclick="toggleWishlist('${product.id}')">
                <svg class="icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </button>
            </div>
            <div class="card-body">
              <span class="card-category">${product.category}</span>
              <h3 class="card-title">${product.name}</h3>
              <div class="card-rating">
                ★ ${product.rating} <span class="rating-count">(${product.reviews} reviews)</span>
              </div>
              <div class="card-footer">
                <div class="card-price">
                  <span class="price-naira">${formatNaira(product.price)}</span>
                </div>
                <button class="add-cart-btn" onclick="addToCart('${product.id}')" aria-label="Add ${product.name} to Cart">
                  <svg class="icon" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                  Add
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('');
    };

    // Render Cart Contents & Totals
    const renderCart = () => {
      const cartBody = document.getElementById('cartBody');
      const cartBadge = document.getElementById('cartBadge');
      const cartSubtotal = document.getElementById('cartSubtotal');
      const cartTotal = document.getElementById('cartTotal');
      const checkoutPayAmount = document.getElementById('checkoutPayAmount');

      const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
      cartBadge.textContent = totalItems;

      if (state.cart.length === 0) {
        cartBody.innerHTML = `
          <div class="empty-state">
            <svg class="icon" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
            <p>Your cart is currently empty.</p>
          </div>
        `;
        cartSubtotal.textContent = "₦0";
        cartTotal.textContent = "₦0";
        checkoutPayAmount.textContent = "₦0";
        return;
      }

      let subtotal = 0;
      cartBody.innerHTML = state.cart.map(item => {
        const itemSubtotal = item.product.price * item.qty;
        subtotal += itemSubtotal;
        return `
          <div class="cart-item">
            <div class="cart-item-img">${item.product.icon}</div>
            <div class="cart-item-info">
              <div class="cart-item-title">${item.product.name}</div>
              <div class="cart-item-price">${formatNaira(item.product.price)}</div>
              <div class="qty-controls">
                <button class="qty-btn" onclick="updateQty('${item.product.id}', -1)" aria-label="Decrease quantity">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.product.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart('${item.product.id}')" aria-label="Remove item">
              <svg class="icon" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </button>
          </div>
        `;
      }).join('');

      const shipping = 2500;
      const total = subtotal + shipping;

      cartSubtotal.textContent = formatNaira(subtotal);
      cartTotal.textContent = formatNaira(total);
      checkoutPayAmount.textContent = formatNaira(total);
    };

    // Render Wishlist
    const renderWishlist = () => {
      const wishlistBody = document.getElementById('wishlistBody');
      const wishlistBadge = document.getElementById('wishlistBadge');

      wishlistBadge.textContent = state.wishlist.length;

      if (state.wishlist.length === 0) {
        wishlistBody.innerHTML = `
          <div class="empty-state">
            <svg class="icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <p>No saved items in your wishlist.</p>
          </div>
        `;
        return;
      }

      const wishlistedProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
      wishlistBody.innerHTML = wishlistedProducts.map(product => `
        <div class="cart-item">
          <div class="cart-item-img">${product.icon}</div>
          <div class="cart-item-info">
            <div class="cart-item-title">${product.name}</div>
            <div class="cart-item-price">${formatNaira(product.price)}</div>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${product.id}')">Move to Cart</button>
        </div>
      `).join('');
    };

    /* ==========================================================================
       4. INTERACTION & EVENT HANDLERS
       ========================================================================== */
    // Cart Actions
    const addToCart = (productId) => {
      const product = PRODUCTS.find(p => p.id === productId);
      const existing = state.cart.find(item => item.product.id === productId);

      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ product, qty: 1 });
      }

      renderCart();
      showToast(`Added "${product.name}" to cart!`);
    };

    const updateQty = (productId, delta) => {
      const item = state.cart.find(i => i.product.id === productId);
      if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
          removeFromCart(productId);
        } else {
          renderCart();
        }
      }
    };

    const removeFromCart = (productId) => {
      const item = state.cart.find(i => i.product.id === productId);
      state.cart = state.cart.filter(i => i.product.id !== productId);
      renderCart();
      if (item) showToast(`Removed "${item.product.name}" from cart.`);
    };

    // Wishlist Toggle
    const toggleWishlist = (productId) => {
      const index = state.wishlist.indexOf(productId);
      const product = PRODUCTS.find(p => p.id === productId);

      if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast(`Removed from saved items.`);
      } else {
        state.wishlist.push(productId);
        showToast(`Saved "${product.name}" to wishlist!`);
      }

      renderProducts();
      renderWishlist();
    };

    /* ==========================================================================
       5. DRAWER & MODAL CONTROLLERS (WITH ESCAPE KEY SUPPORT)
       ========================================================================== */
    const toggleSidebar = (show) => {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (show) {
        sidebar.classList.add('active');
        overlay.classList.add('active');
      } else {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    };

    const toggleCartDrawer = (show) => {
      const drawer = document.getElementById('cartDrawer');
      const backdrop = document.getElementById('cartBackdrop');
      if (show) {
        drawer.classList.add('active');
        backdrop.classList.add('active');
      } else {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
      }
    };

    const toggleWishlistDrawer = (show) => {
      const drawer = document.getElementById('wishlistDrawer');
      const backdrop = document.getElementById('wishlistBackdrop');
      if (show) {
        drawer.classList.add('active');
        backdrop.classList.add('active');
      } else {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
      }
    };

    const toggleCheckoutModal = (show) => {
      const modal = document.getElementById('checkoutModal');
      if (show) {
        if (state.cart.length === 0) {
          showToast("Add items to your cart before checking out!");
          return;
        }
        toggleCartDrawer(false);
        modal.classList.add('active');
      } else {
        modal.classList.remove('active');
      }
    };

    // Close all open overlays
    const closeAllOverlays = () => {
      toggleSidebar(false);
      toggleCartDrawer(false);
      toggleWishlistDrawer(false);
      toggleCheckoutModal(false);
    };

    /* ==========================================================================
       6. INITIALIZATION & EVENT LISTENERS
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
      // Initial Render
      renderProducts();
      renderCart();
      renderWishlist();

      // Hamburger Button
      document.getElementById('hamburgerBtn').addEventListener('click', () => toggleSidebar(true));
      document.getElementById('sidebarOverlay').addEventListener('click', () => toggleSidebar(false));

      // Header Drawer Buttons
      document.getElementById('cartToggleBtn').addEventListener('click', () => toggleCartDrawer(true));
      document.getElementById('closeCartBtn').addEventListener('click', () => toggleCartDrawer(false));
      document.getElementById('cartBackdrop').addEventListener('click', () => toggleCartDrawer(false));

      document.getElementById('wishlistToggleBtn').addEventListener('click', () => toggleWishlistDrawer(true));
      document.getElementById('closeWishlistBtn').addEventListener('click', () => toggleWishlistDrawer(false));
      document.getElementById('wishlistBackdrop').addEventListener('click', () => toggleWishlistDrawer(false));

      document.getElementById('sidebarCartBtn').addEventListener('click', () => {
        toggleSidebar(false);
        toggleCartDrawer(true);
      });

      // Checkout Modal Buttons
      document.getElementById('openCheckoutBtn').addEventListener('click', () => toggleCheckoutModal(true));
      document.getElementById('closeCheckoutBtn').addEventListener('click', () => toggleCheckoutModal(false));

      // Checkout Form Submission
      document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        state.cart = [];
        renderCart();
        toggleCheckoutModal(false);
        showToast("Order Placed Successfully! Payment Link Sent via SMS.");
      });

      // Category Pill Click Handling
      document.getElementById('categoryPills').addEventListener('click', (e) => {
        if (e.target.classList.contains('pill')) {
          document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
          e.target.classList.add('active');
          state.activeCategory = e.target.getAttribute('data-category');
          renderProducts();
        }
      });

      // Search Input Handler
      document.getElementById('searchInput').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
      });

      // Sort Select Handler
      document.getElementById('sortSelect').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });

      // Keyboard Accessibility: Escape key closes drawers & modals
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeAllOverlays();
        }
      });
    });
  </script>
