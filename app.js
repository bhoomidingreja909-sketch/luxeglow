/**
 * LUXE GLOW - Luxury Makeup E-commerce App
 * This file handles all interactive functionality including product rendering, 
 * cart management, filtering, search, and dynamic UI updates.
 */

// --- 1. Product Data ---
const products = [
  {
    id: 'p1',
    name: 'Velvet Matte Lipstick',
    category: 'lips',
    price: 28.00,
    rating: 4.8,
    image: 'images/lipstick.jpg',
    description: 'Experience intense color with our Velvet Matte Lipstick. This highly pigmented formula glides on smoothly, delivering a weightless, long-lasting finish that never dries out your lips. Enriched with hydrating oils to keep your pout perfect all day.',
    shades: [
      { name: 'Crimson Desire', color: '#8b0000' },
      { name: 'Dusty Rose', color: '#dcaeb2' },
      { name: 'Nude Illusion', color: '#d2b48c' },
      { name: 'Berry Crush', color: '#682860' }
    ],
    bestseller: true
  },
  {
    id: 'p2',
    name: 'Crystal Lip Gloss',
    category: 'lips',
    price: 22.00,
    rating: 4.5,
    image: 'images/lip_gloss.jpg',
    description: 'Get an unparalleled glass-like shine with our Crystal Lip Gloss. Formulated with light-reflecting pearls, it creates a voluminous, high-impact look without the stickiness. Wear it alone or layer it over your favorite lipstick.',
    shades: [
      { name: 'Clear Diamond', color: '#ffffff' },
      { name: 'Peach Glaze', color: '#ffdab9' },
      { name: 'Pink Champagne', color: '#ffb6c1' }
    ],
    bestseller: true
  },
  {
    id: 'p3',
    name: 'Satin Lip Liner',
    category: 'lips',
    price: 16.00,
    rating: 4.6,
    image: 'images/lipstick.jpg',
    description: 'Define and sculpt your lips with precision using our Satin Lip Liner. The creamy texture allows for seamless blending and prevents color bleeding. Perfectly matches our Velvet Matte Lipstick shades.',
    shades: [
      { name: 'Deep Red', color: '#7e181e' },
      { name: 'Warm Nude', color: '#cda59c' },
      { name: 'Plum', color: '#56253c' }
    ],
    bestseller: false
  },
  {
    id: 'p4',
    name: 'Liquid Lip Stain',
    category: 'lips',
    price: 24.00,
    rating: 4.3,
    image: 'images/lip_gloss.jpg',
    description: 'A kiss-proof, water-based lip stain that provides a natural wash of color. Its lightweight formula absorbs instantly, leaving a soft, matte tint that lasts for hours without transferring.',
    shades: [
      { name: 'Cherry Pop', color: '#c8102e' },
      { name: 'Coral Reef', color: '#ff7f50' },
      { name: 'Magenta Magic', color: '#8b008b' }
    ],
    bestseller: false
  },
  {
    id: 'p5',
    name: 'Sunset Eyeshadow Palette',
    category: 'eyes',
    price: 52.00,
    rating: 4.9,
    image: 'images/eyeshadow.jpg',
    description: 'Capture the magic of golden hour with our 12-pan Sunset Eyeshadow Palette. Featuring a mix of buttery mattes and dazzling metallics in warm neutral and fiery sunset tones. Highly blendable and universally flattering.',
    shades: [
      { name: 'Golden Hour (Metallic)', color: '#ffd700' },
      { name: 'Terracotta (Matte)', color: '#e2725b' },
      { name: 'Dusk (Matte)', color: '#4a3c31' },
      { name: 'Copper Glow (Metallic)', color: '#b87333' }
    ],
    bestseller: true
  },
  {
    id: 'p6',
    name: 'Volumizing Mascara',
    category: 'eyes',
    price: 26.00,
    rating: 4.7,
    image: 'images/mascara.jpg',
    description: 'Achieve dramatic, fanned-out lashes with one coat. Our specially designed hourglass brush coats every single lash from root to tip. Flake-free, smudge-proof, and easily removable.',
    shades: [
      { name: 'Carbon Black', color: '#000000' },
      { name: 'Deep Espresso', color: '#3b2f2f' }
    ],
    bestseller: true
  },
  {
    id: 'p7',
    name: 'Precision Liquid Eyeliner',
    category: 'eyes',
    price: 20.00,
    rating: 4.4,
    image: 'images/eyeliner.jpg',
    description: 'Master the perfect wing with our Precision Liquid Eyeliner. The ultra-fine brush tip provides complete control for creating thin lines or bold graphic shapes. Waterproof and fast-drying formula.',
    shades: [
      { name: 'Onyx', color: '#0f0f0f' },
      { name: 'Navy Blue', color: '#000080' }
    ],
    bestseller: false
  },
  {
    id: 'p8',
    name: 'Brow Sculpting Pencil',
    category: 'eyes',
    price: 18.00,
    rating: 4.5,
    image: 'images/mascara.jpg',
    description: 'Shape, fill, and define your brows with this dual-ended tool. The micro-fine tip mimics the look of real hair, while the spoolie brush blends the product for a natural finish. Long-wearing and sweat-resistant.',
    shades: [
      { name: 'Taupe', color: '#b3a092' },
      { name: 'Soft Brown', color: '#8b4513' },
      { name: 'Dark Brown', color: '#5c4033' },
      { name: 'Ebony', color: '#2f2f2f' }
    ],
    bestseller: false
  },
  {
    id: 'p9',
    name: 'Luminous Silk Foundation',
    category: 'face',
    price: 48.00,
    rating: 4.9,
    image: 'images/foundation.jpg',
    description: 'Our award-winning liquid foundation delivers flawless, medium-to-full coverage with a radiant, skin-like finish. Micro-fil technology sculpts and brightens the complexion while blurring imperfections. Suitable for all skin types.',
    shades: [
      { name: 'Fair Cool', color: '#fcebe3' },
      { name: 'Light Neutral', color: '#f2dac7' },
      { name: 'Medium Warm', color: '#d8aa7e' },
      { name: 'Tan Olive', color: '#b58455' },
      { name: 'Deep Cool', color: '#56351b' }
    ],
    bestseller: true
  },
  {
    id: 'p10',
    name: 'Petal Soft Blush',
    category: 'face',
    price: 32.00,
    rating: 4.6,
    image: 'images/blush.jpg',
    description: 'A finely milled powder blush that blends effortlessly for a healthy, natural-looking flush. Buildable coverage lets you go from a subtle hint of color to a vibrant pop. Infused with squalane for a silky texture.',
    shades: [
      { name: 'Soft Peach', color: '#ffcba4' },
      { name: 'Rose Petal', color: '#e6a8d7' },
      { name: 'Vibrant Coral', color: '#ff6f61' }
    ],
    bestseller: false
  },
  {
    id: 'p11',
    name: 'Radiance Highlighter',
    category: 'face',
    price: 36.00,
    rating: 4.8,
    image: 'images/highlighter.jpg',
    description: 'Achieve a blinding glow with our Radiance Highlighter. This creamy powder melts into the skin for a seamless, glass-like finish. Perfect for the cheekbones, brow bone, and cupid\'s bow.',
    shades: [
      { name: 'Champagne Glow', color: '#fad6a5' },
      { name: 'Icy Pink', color: '#f7cac9' },
      { name: 'Liquid Bronze', color: '#cd7f32' }
    ],
    bestseller: true
  },
  {
    id: 'p12',
    name: 'Setting Mist Spray',
    category: 'face',
    price: 28.00,
    rating: 4.7,
    image: 'images/setting_spray.jpg',
    description: 'Lock in your look for up to 16 hours with this weightless setting spray. It prevents makeup from melting, fading, or settling into fine lines while leaving a soft, dewy finish. Refreshes the skin instantly.',
    shades: [
      { name: 'Translucent', color: '#ffffff' } // Just a placeholder shade for consistency if needed, though spray has no shade
    ],
    bestseller: false
  },
  {
    id: 'p13',
    name: 'Midnight Repair Serum',
    category: 'skincare',
    price: 68.00,
    rating: 4.9,
    image: 'images/serum.jpg',
    description: 'Wake up to rejuvenated skin with our potent nighttime serum. Formulated with a blend of peptides, hyaluronic acid, and botanical extracts to accelerate cell turnover and repair daily environmental damage. Visibly reduces fine lines.',
    shades: [
      { name: 'Standard', color: '#f8f8ff' }
    ],
    bestseller: true
  },
  {
    id: 'p14',
    name: 'Hydra Glow Moisturizer',
    category: 'skincare',
    price: 54.00,
    rating: 4.5,
    image: 'images/moisturizer.jpg',
    description: 'A deeply hydrating, cloud-like cream that provides 24-hour moisture without feeling heavy. Enriched with ceramides and niacinamide to strengthen the skin barrier and promote a naturally luminous complexion. Excellent makeup primer.',
    shades: [
      { name: 'Standard', color: '#ffffff' }
    ],
    bestseller: false
  },
  {
    id: 'p15',
    name: 'Rose Petal Face Oil',
    category: 'skincare',
    price: 62.00,
    rating: 4.6,
    image: 'images/serum.jpg',
    description: 'A luxurious, lightweight facial oil infused with real rose petals. This nourishing blend of cold-pressed seed oils restores elasticity, soothes inflammation, and leaves skin with a radiant, youthful glow. Fast-absorbing and non-comedogenic.',
    shades: [
      { name: 'Standard', color: '#ffb6c1' }
    ],
    bestseller: false
  },
  {
    id: 'p16',
    name: 'Youth Restore Eye Cream',
    category: 'skincare',
    price: 46.00,
    rating: 4.4,
    image: 'images/moisturizer.jpg',
    description: 'Target dark circles, puffiness, and crow\'s feet with this rich, restorative eye cream. Contains caffeine to depuff and stabilized vitamin C to brighten the delicate under-eye area. Gentle enough for sensitive eyes.',
    shades: [
      { name: 'Standard', color: '#fdf5e6' }
    ],
    bestseller: false
  }
];

// --- 2. Global State & DOM Elements ---
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

const DOM = {
  // Navbar
  navbar: document.getElementById('navbar'),
  menuToggle: document.querySelector('.menu-toggle'),
  navLinks: document.querySelector('.nav-links'),
  cartIcon: document.querySelector('.cart-icon'),
  cartBadge: document.getElementById('cart-badge'),
  navSearch: document.querySelector('.nav-search input'),
  
  // Product Sections
  productGrid: document.getElementById('product-grid'),
  bestsellersTrack: document.querySelector('.bestsellers-track'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  
  // Cart Sidebar
  cartSidebar: document.getElementById('cartSidebar'),
  cartOverlay: document.querySelector('.cart-overlay'),
  cartItems: document.getElementById('cartItems'),
  cartSubtotal: document.getElementById('cartSubtotal'),
  cartCount: document.getElementById('cartCount'),
  
  // Quick View Modal
  modalOverlay: document.querySelector('.modal-overlay'),
  quickViewModal: document.getElementById('quickViewModal'),
  modalClose: document.querySelector('.modal-close'),
  
  // Newsletter
  newsletterForm: document.querySelector('.newsletter-form')
};

// --- 3. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderProducts(products, DOM.productGrid);
  
  if (DOM.bestsellersTrack) {
    const bestsellers = products.filter(p => p.bestseller);
    renderProducts(bestsellers, DOM.bestsellersTrack);
  }
  
  setupEventListeners();
  initScrollReveal();
  updateCartUI();
});

// --- 4. Product Rendering ---
/**
 * Renders an array of products into a specified container
 * @param {Array} productsToRender - Array of product objects
 * @param {HTMLElement} container - DOM element to render into
 */
function renderProducts(productsToRender, container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  if (productsToRender.length === 0) {
    container.innerHTML = `<p class="no-results">No products found. Please try another search or category.</p>`;
    return;
  }
  
  const fragment = document.createDocumentFragment();
  
  productsToRender.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.id = product.id;
    // Stagger transition based on index (cap at 10 to avoid too long delays)
    card.style.transitionDelay = `${Math.min(index * 0.1, 1)}s`;
    
    card.innerHTML = `
      <div class="product-image-wrapper">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
      </div>
      <div class="product-info">
        <span class="product-category">${capitalize(product.category)}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars" aria-label="${product.rating} out of 5 stars">${generateStars(product.rating)}</span>
          <span class="rating-text">${product.rating}</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
        </div>
        <button class="add-to-cart-btn" data-id="${product.id}">Add to Bag</button>
      </div>
    `;
    
    fragment.appendChild(card);
  });
  
  container.appendChild(fragment);
  // Re-trigger observer for newly added reveal elements
  setTimeout(initScrollReveal, 100);
}

// Utility: Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Utility: Generate Star HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  
  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) starsHTML += '★';
  for (let i = 0; i < halfStar; i++) starsHTML += '⯪'; // Using half star character roughly or full if preferred. Sticking to simple request:
  // Since request just said ★ for full, ☆ for empty:
  // We will just do rounding to nearest for visual simplicity, or full and empty
  let rounded = Math.round(rating);
  let simpleStars = '';
  for(let i=0; i<5; i++) {
    simpleStars += (i < rounded) ? '★' : '☆';
  }
  return simpleStars;
}


// --- 5. Filtering & Search ---
function filterProducts() {
  let filtered = products;
  
  // Apply Category Filter
  if (currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }
  
  // Apply Search Query
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q));
  }
  
  renderProducts(filtered, DOM.productGrid);
}

// Debounce helper for search
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = debounce((e) => {
  searchQuery = e.target.value;
  filterProducts();
  // Scroll to products if user is searching
  if (searchQuery.trim() !== '' && window.scrollY < 300) {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
  }
}, 300);

// --- 6. Shopping Cart Management ---

function loadCart() {
  const savedCart = localStorage.getItem('luxeGlowCart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      console.error("Error parsing cart data", e);
      cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem('luxeGlowCart', JSON.stringify(cart));
}

function addToCart(productId, shade = null, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Default to first shade if none provided
  const selectedShade = shade || (product.shades && product.shades.length > 0 ? product.shades[0].name : 'Standard');
  
  // Check if item already in cart with same shade
  const existingItemIndex = cart.findIndex(item => item.productId === productId && item.selectedShade === selectedShade);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      productId,
      selectedShade,
      quantity
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`Added ${product.name} to your bag`);
  
  // Optionally open sidebar automatically
  // openCartSidebar();
}

function removeFromCart(productId, shade) {
  cart = cart.filter(item => !(item.productId === productId && item.selectedShade === shade));
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, shade, newQty) {
  const numQty = parseInt(newQty);
  
  if (numQty <= 0) {
    removeFromCart(productId, shade);
    return;
  }
  
  const item = cart.find(i => i.productId === productId && i.selectedShade === shade);
  if (item) {
    item.quantity = numQty;
    saveCart();
    updateCartUI();
  }
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      return total + (product.price * item.quantity);
    }
    return total;
  }, 0);
}

function getCartCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartUI() {
  // Update badges
  const count = getCartCount();
  if (DOM.cartBadge) {
    DOM.cartBadge.textContent = count;
    DOM.cartBadge.style.display = count > 0 ? 'flex' : 'none';
  }
  if (DOM.cartCount) {
    DOM.cartCount.textContent = `(${count} items)`;
  }
  
  // Render Cart Items
  if (DOM.cartItems) {
    DOM.cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      DOM.cartItems.innerHTML = `
        <div class="empty-cart-message">
          <p>Your bag is currently empty.</p>
          <button class="btn btn-primary close-cart-btn" style="margin-top: 20px;">Continue Shopping</button>
        </div>
      `;
      // Attach listener to close button
      const closeBtn = DOM.cartItems.querySelector('.close-cart-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeCartSidebar);
      }
    } else {
      cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return;
        
        const shadeObj = product.shades.find(s => s.name === item.selectedShade) || product.shades[0];
        
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
          <div class="cart-item-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="cart-item-details">
            <h4 class="cart-item-title">${product.name}</h4>
            <p class="cart-item-shade">
              <span class="shade-dot" style="background-color: ${shadeObj.color}; display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin-right: 5px; border: 1px solid #ccc;"></span>
              ${item.selectedShade}
            </p>
            <div class="cart-item-actions">
              <div class="qty-selector">
                <button class="qty-btn minus" data-id="${product.id}" data-shade="${item.selectedShade}">-</button>
                <input type="number" class="qty-input" value="${item.quantity}" min="1" max="99" data-id="${product.id}" data-shade="${item.selectedShade}">
                <button class="qty-btn plus" data-id="${product.id}" data-shade="${item.selectedShade}">+</button>
              </div>
              <span class="cart-item-price">$${(product.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${product.id}" data-shade="${item.selectedShade}" aria-label="Remove item">✕</button>
        `;
        DOM.cartItems.appendChild(cartItemEl);
      });
    }
  }
  
  // Update subtotal
  if (DOM.cartSubtotal) {
    DOM.cartSubtotal.textContent = `$${getCartTotal().toFixed(2)}`;
  }
}

// --- 7. Sidebar & Modal Toggles ---

function openCartSidebar() {
  if (DOM.cartSidebar) DOM.cartSidebar.classList.add('open');
  if (DOM.cartOverlay) DOM.cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent body scroll
}

function closeCartSidebar() {
  if (DOM.cartSidebar) DOM.cartSidebar.classList.remove('open');
  if (DOM.cartOverlay) DOM.cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || !DOM.quickViewModal) return;
  
  // Populate modal content
  const modalContent = DOM.quickViewModal.querySelector('.modal-content') || DOM.quickViewModal;
  
  // Create shades HTML
  let shadesHTML = '';
  if (product.shades && product.shades.length > 0) {
    shadesHTML = `
      <div class="modal-shades">
        <label>Shade: <span id="modalSelectedShadeText">${product.shades[0].name}</span></label>
        <div class="shade-options">
          ${product.shades.map((shade, i) => `
            <button class="shade-circle ${i === 0 ? 'active' : ''}" 
                    style="background-color: ${shade.color};" 
                    title="${shade.name}"
                    data-shade="${shade.name}"
                    aria-label="Select shade ${shade.name}"></button>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  modalContent.innerHTML = `
    <button class="modal-close" aria-label="Close modal">✕</button>
    <div class="modal-grid">
      <div class="modal-image-col">
        <img src="${product.image}" alt="${product.name}" class="modal-main-img">
      </div>
      <div class="modal-info-col">
        <span class="product-category">${capitalize(product.category)}</span>
        <h2>${product.name}</h2>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <span class="stars" style="margin-left: 15px;">${generateStars(product.rating)} (${product.rating})</span>
        </div>
        <p class="modal-description">${product.description}</p>
        
        ${shadesHTML}
        
        <div class="modal-actions">
          <div class="qty-selector modal-qty">
            <button class="qty-btn minus" id="modalQtyMinus">-</button>
            <input type="number" id="modalQtyInput" value="1" min="1" max="10">
            <button class="qty-btn plus" id="modalQtyPlus">+</button>
          </div>
          <button class="add-to-cart-btn btn-primary" id="modalAddToCart" data-id="${product.id}">Add to Bag</button>
        </div>
      </div>
    </div>
  `;
  
  // Re-attach close listener
  modalContent.querySelector('.modal-close').addEventListener('click', closeQuickView);
  
  // Attach shade selector logic
  let currentSelectedShade = product.shades && product.shades.length > 0 ? product.shades[0].name : null;
  const shadeBtns = modalContent.querySelectorAll('.shade-circle');
  const shadeText = modalContent.querySelector('#modalSelectedShadeText');
  
  shadeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      shadeBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentSelectedShade = e.target.dataset.shade;
      if (shadeText) shadeText.textContent = currentSelectedShade;
    });
  });
  
  // Attach Qty logic
  const qtyInput = modalContent.querySelector('#modalQtyInput');
  modalContent.querySelector('#modalQtyMinus').addEventListener('click', () => {
    if (qtyInput.value > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
  });
  modalContent.querySelector('#modalQtyPlus').addEventListener('click', () => {
    if (qtyInput.value < 10) qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  
  // Attach Add to Cart logic
  modalContent.querySelector('#modalAddToCart').addEventListener('click', () => {
    addToCart(product.id, currentSelectedShade, parseInt(qtyInput.value));
    closeQuickView();
  });
  
  // Show Modal (quickViewModal IS the modal-overlay element)
  DOM.quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  if (DOM.quickViewModal) DOM.quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

// --- 8. UI Interactions & Event Listeners ---

function setupEventListeners() {
  
  // Navbar Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      if (DOM.navbar) DOM.navbar.classList.add('scrolled');
    } else {
      if (DOM.navbar) DOM.navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile Menu Toggle
  if (DOM.menuToggle && DOM.navLinks) {
    DOM.menuToggle.addEventListener('click', () => {
      DOM.navLinks.classList.toggle('active');
      DOM.menuToggle.classList.toggle('active');
    });
  }
  
  // Search Input
  if (DOM.navSearch) {
    DOM.navSearch.addEventListener('input', handleSearch);
  }
  
  // Category Filters
  if (DOM.filterBtns) {
    DOM.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Remove active class from all
        DOM.filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        e.target.classList.add('active');
        
        currentFilter = e.target.dataset.filter || 'all';
        filterProducts();
      });
    });
  }
  
  // Event Delegation for dynamically rendered product grids
  document.body.addEventListener('click', (e) => {
    // Add to Cart from grid
    if (e.target.classList.contains('add-to-cart-btn') && !e.target.id.includes('modal')) {
      const productId = e.target.dataset.id;
      addToCart(productId);
    }
    
    // Quick View from grid
    if (e.target.classList.contains('quick-view-btn')) {
      const productId = e.target.dataset.id;
      openQuickView(productId);
    }
    
    // Category card click — filter products by that category
    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
      const cat = categoryCard.dataset.category;
      if (cat) {
        currentFilter = cat;
        // Update filter buttons
        DOM.filterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.filter === cat);
        });
        filterProducts();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  
  // Cart Interactions
  if (DOM.cartIcon) {
    DOM.cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      openCartSidebar();
    });
  }
  
  if (DOM.cartOverlay) {
    DOM.cartOverlay.addEventListener('click', () => {
      closeCartSidebar();
    });
  }
  
  // Close buttons in sidebar
  const closeSidebarBtn = document.getElementById('cartClose');
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeCartSidebar);
  }
  
  // Cart Item Delegation (Qty +/- and Remove)
  if (DOM.cartItems) {
    DOM.cartItems.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList.contains('qty-btn') || target.classList.contains('cart-item-remove')) {
        const productId = target.dataset.id;
        const shade = target.dataset.shade;
        
        if (target.classList.contains('cart-item-remove')) {
          removeFromCart(productId, shade);
        } else if (target.classList.contains('plus')) {
          const input = target.previousElementSibling;
          updateQuantity(productId, shade, parseInt(input.value) + 1);
        } else if (target.classList.contains('minus')) {
          const input = target.nextElementSibling;
          updateQuantity(productId, shade, parseInt(input.value) - 1);
        }
      }
    });
    
    // Direct input change
    DOM.cartItems.addEventListener('change', (e) => {
      if (e.target.classList.contains('qty-input')) {
        const productId = e.target.dataset.id;
        const shade = e.target.dataset.shade;
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        updateQuantity(productId, shade, val);
      }
    });
  }
  
  // Modal Overlays - close when clicking outside the modal content
  if (DOM.quickViewModal) {
    DOM.quickViewModal.addEventListener('click', (e) => {
      if (e.target === DOM.quickViewModal) closeQuickView();
    });
  }
  
  // Escape key for overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (DOM.cartSidebar && DOM.cartSidebar.classList.contains('open')) {
        closeCartSidebar();
      }
      if (DOM.quickViewModal && DOM.quickViewModal.classList.contains('active')) {
        closeQuickView();
      }
    }
  });
  
  // Newsletter Form
  if (DOM.newsletterForm) {
    DOM.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = e.target.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('Thank you for subscribing to Luxe Glow!');
        input.value = '';
      }
    });
  }
  
  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (DOM.navLinks && DOM.navLinks.classList.contains('active')) {
          DOM.navLinks.classList.remove('active');
          DOM.menuToggle.classList.remove('active');
        }
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// --- 9. Scroll Reveal (Intersection Observer) ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }
  
  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, revealOptions);
  
  revealElements.forEach(el => {
    // Only observe elements that haven't been activated yet
    if (!el.classList.contains('active')) {
      revealObserver.observe(el);
    }
  });
}

// --- 10. Toast Notifications ---
function showToast(message, type = 'success') {
  // Check if toast container exists, if not create one
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    `;
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
    <div class="toast-content"><p>${message}</p></div>
  `;
  if (type !== 'success') toast.style.borderLeftColor = '#FF6B6B';
  
  toastContainer.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// --- 11. Razorpay & Checkout Modal Integration ---
const RAZORPAY_KEY_ID = "rzp_test_Sm1DACtZ2hsm5t";

const CheckoutDOM = {
  overlay: document.getElementById('checkoutOverlay'),
  modal: document.querySelector('.checkout-modal'),
  closeBtn: document.getElementById('checkoutClose'),
  summary: document.getElementById('checkoutSummary'),
  form: document.getElementById('checkoutForm'),
  subtotal: document.getElementById('checkoutSubtotal'),
  grandTotal: document.getElementById('checkoutGrandTotal'),
  payBtn: document.getElementById('checkoutPayBtn'),
  checkoutBtn: document.getElementById('checkoutBtn')
};

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  // Populate summary items
  if (CheckoutDOM.summary) {
    CheckoutDOM.summary.innerHTML = cart.map(item => {
      const p = products.find(prod => prod.id === item.productId);
      if (!p) return '';
      return `
        <div class="checkout-summary-item">
          <img class="checkout-summary-img" src="${p.image}" alt="${p.name}">
          <div class="checkout-summary-name">
            <div>${p.name}</div>
            <div class="checkout-summary-qty">Shade: ${item.selectedShade} | Qty: ${item.quantity}</div>
          </div>
          <div class="checkout-summary-price">$${(p.price * item.quantity).toFixed(2)}</div>
        </div>
      `;
    }).join('');
  }

  // Update total
  const totalUSD = getCartTotal();
  if (CheckoutDOM.subtotal) CheckoutDOM.subtotal.textContent = `$${totalUSD.toFixed(2)}`;
  if (CheckoutDOM.grandTotal) CheckoutDOM.grandTotal.textContent = `$${totalUSD.toFixed(2)}`;

  // Close cart sidebar and open checkout overlay
  closeCartSidebar();
  if (CheckoutDOM.overlay) CheckoutDOM.overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  if (CheckoutDOM.overlay) CheckoutDOM.overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function clearErrors() {
  document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
  document.querySelectorAll('.form-group input').forEach(input => input.classList.remove('input-error'));
}

function validateForm() {
  clearErrors();
  let isValid = true;

  const name = document.getElementById('checkoutName');
  const email = document.getElementById('checkoutEmail');
  const phone = document.getElementById('checkoutPhone');
  const address = document.getElementById('checkoutAddress');
  const city = document.getElementById('checkoutCity');
  const state = document.getElementById('checkoutState');
  const pincode = document.getElementById('checkoutPincode');

  if (!name.value.trim()) {
    showInputError(name, 'nameError', 'Full name is required');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    showInputError(email, 'emailError', 'Please enter a valid email address');
    isValid = false;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
    showInputError(phone, 'phoneError', 'Enter a valid 10-digit mobile number');
    isValid = false;
  }

  if (!address.value.trim()) {
    showInputError(address, 'addressError', 'Street address is required');
    isValid = false;
  }

  if (!city.value.trim()) {
    showInputError(city, 'cityError', 'City is required');
    isValid = false;
  }

  if (!state.value.trim()) {
    showInputError(state, 'stateError', 'State is required');
    isValid = false;
  }

  const pinRegex = /^\d{6}$/;
  if (!pincode.value.trim() || !pinRegex.test(pincode.value.trim())) {
    showInputError(pincode, 'pincodeError', 'Enter a valid 6-digit PIN code');
    isValid = false;
  }

  return isValid;
}

function showInputError(inputEl, errorId, message) {
  inputEl.classList.add('input-error');
  const errEl = document.getElementById(errorId);
  if (errEl) errEl.textContent = message;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const name = document.getElementById('checkoutName').value.trim();
  const email = document.getElementById('checkoutEmail').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const city = document.getElementById('checkoutCity').value.trim();
  const state = document.getElementById('checkoutState').value.trim();
  const pincode = document.getElementById('checkoutPincode').value.trim();

  // Convert USD total to INR (approx exchange 1 USD = 83 INR) for Razorpay display
  const totalAmountUSD = getCartTotal();
  const amountInPaise = Math.round(totalAmountUSD * 83 * 100);

  if (typeof Razorpay === 'undefined') {
    showToast('Razorpay SDK failed to load. Check your internet connection.', 'error');
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amountInPaise,
    currency: "INR",
    name: "LUXE GLOW",
    description: "Luxury Makeup & Skincare Purchase",
    image: "images/lipstick.jpg",
    prefill: {
      name: name,
      email: email,
      contact: phone
    },
    notes: {
      address: `${address}, ${city}, ${state} - ${pincode}`
    },
    theme: {
      color: "#C9A96E"
    },
    handler: async function (response) {
      // Prepare Order Record for Supabase
      const orderRecord = {
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        amount_usd: totalAmountUSD,
        amount_inr: amountInPaise / 100,
        payment_id: response.razorpay_payment_id || 'pay_simulated_' + Date.now(),
        status: 'completed',
        items: cart.map(item => {
          const p = products.find(prod => prod.id === item.productId);
          return {
            id: item.productId,
            name: p ? p.name : 'Makeup Item',
            shade: item.selectedShade,
            quantity: item.quantity,
            price: p ? p.price : 0
          };
        })
      };

      // Save Order to Supabase & Local Fallback
      await saveOrderToSupabase(orderRecord);

      // Payment Successful & Cart Clear
      cart = [];
      saveCart();
      updateCartUI();

      if (CheckoutDOM.modal) {
        CheckoutDOM.modal.innerHTML = `
          <div class="checkout-success">
            <div class="checkout-success-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you <strong>${name}</strong> for your order. We've sent a confirmation email to <strong>${email}</strong>.</p>
            <p style="font-size: 0.85rem; color: #8A8A8A; margin-bottom: 20px;">Payment ID: ${response.razorpay_payment_id || orderRecord.payment_id}</p>
            <button class="btn-primary" onclick="closeCheckoutModal(); location.reload();">Continue Shopping</button>
          </div>
        `;
      }
    },
    modal: {
      ondismiss: function () {
        showToast('Payment window closed.', 'error');
      }
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

// --- 12. Supabase Integration & Admin Panel (/admin-bba) ---

// Supabase Credentials
const SUPABASE_URL = "https://cveknyzpiiouwnrtwtcy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2ZWtueXpwaWlvdXducnR3dGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwNTk0MjMsImV4cCI6MjEwMTYzNTQyM30.fMdnDIA6ChcHdbkCHTu81LY5s8HBx6z8SeMHiMvHZwA";

// Admin Credentials
const ADMIN_USERNAME = "bbaadmin";
const ADMIN_PASSWORD = "LuxeGlowAdmin@2026";

// Supabase Client instance (if SDK loaded)
let supabaseClient = null;
if (typeof window.supabase !== 'undefined') {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Local Orders Cache fallback if table not yet created on Supabase
let allOrders = [];

// Save Order to Supabase (and local storage backup)
async function saveOrderToSupabase(orderData) {
  // Save to localStorage as backup
  let localOrders = JSON.parse(localStorage.getItem('luxeGlowOrders') || '[]');
  const orderWithTimestamp = { ...orderData, created_at: new Date().toISOString() };
  localOrders.unshift(orderWithTimestamp);
  localStorage.setItem('luxeGlowOrders', JSON.stringify(localOrders));

  // If Supabase SDK client is available
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('orders')
        .insert([orderData]);

      if (error) {
        console.warn('Supabase Insert Warning (table may need schema creation):', error.message);
      } else {
        console.log('✓ Order recorded to Supabase:', data);
      }
    } catch (e) {
      console.warn('Supabase request exception:', e);
    }
  }
}

// Admin DOM Elements
const AdminDOM = {
  overlay: document.getElementById('adminOverlay'),
  closeBtn: document.getElementById('adminClose'),
  loginView: document.getElementById('adminLoginView'),
  dashView: document.getElementById('adminDashboardView'),
  loginForm: document.getElementById('adminLoginForm'),
  usernameInput: document.getElementById('adminUsername'),
  passwordInput: document.getElementById('adminPassword'),
  loginError: document.getElementById('adminLoginError'),
  logoutBtn: document.getElementById('adminLogoutBtn'),
  refreshBtn: document.getElementById('adminRefreshBtn'),
  searchInput: document.getElementById('adminSearchOrders'),
  tableBody: document.getElementById('adminOrdersTableBody'),
  statRevenue: document.getElementById('statRevenue'),
  statOrders: document.getElementById('statOrders'),
  statPaid: document.getElementById('statPaid')
};

// Check URL Hash or Path for /admin-bba
function checkAdminRoute() {
  const hash = window.location.hash;
  const path = window.location.pathname;

  if (hash === '#/admin-bba' || hash === '#admin-bba' || path.endsWith('/admin-bba')) {
    openAdminModal();
  }
}

function openAdminModal() {
  if (AdminDOM.overlay) {
    AdminDOM.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Check if logged in already
    if (sessionStorage.getItem('luxeGlowAdminAuth') === 'true') {
      showAdminDashboard();
    } else {
      showAdminLogin();
    }
  }
}

function closeAdminModal() {
  if (AdminDOM.overlay) {
    AdminDOM.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  // Clear route hash if opened via hash
  if (window.location.hash.includes('admin-bba')) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function showAdminLogin() {
  if (AdminDOM.loginView) AdminDOM.loginView.style.display = 'block';
  if (AdminDOM.dashView) AdminDOM.dashView.style.display = 'none';
  if (AdminDOM.loginError) AdminDOM.loginError.textContent = '';
}

function showAdminDashboard() {
  if (AdminDOM.loginView) AdminDOM.loginView.style.display = 'none';
  if (AdminDOM.dashView) AdminDOM.dashView.style.display = 'block';
  fetchAdminOrders();
}

function handleAdminLogin(e) {
  e.preventDefault();
  const user = AdminDOM.usernameInput.value.trim();
  const pass = AdminDOM.passwordInput.value.trim();

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
    sessionStorage.setItem('luxeGlowAdminAuth', 'true');
    showAdminDashboard();
    showToast('Admin logged in successfully!');
  } else {
    if (AdminDOM.loginError) {
      AdminDOM.loginError.textContent = 'Invalid Username or Password. Please try again.';
    }
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem('luxeGlowAdminAuth');
  showAdminLogin();
  showToast('Logged out of Admin Portal.');
}

async function fetchAdminOrders() {
  if (AdminDOM.tableBody) {
    AdminDOM.tableBody.innerHTML = `<tr><td colspan="7" class="admin-loading">Fetching live transactions from Supabase database...</td></tr>`;
  }

  let orders = [];

  // 1. Fetch live orders from Supabase
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.warn('Supabase fetch error:', error.message);
      } else if (data) {
        orders = data;
      }
    } catch (e) {
      console.warn('Supabase fetch exception:', e);
    }
  }

  // 2. Merge local storage backup ONLY if Supabase returns nothing or offline
  if (orders.length === 0) {
    orders = JSON.parse(localStorage.getItem('luxeGlowOrders') || '[]');
  }

  allOrders = orders;
  renderAdminOrdersTable(allOrders);
}

function renderAdminOrdersTable(ordersToRender) {
  if (!AdminDOM.tableBody) return;

  // Calculate statistics
  const totalRev = ordersToRender.reduce((sum, o) => sum + (o.amount_inr || (o.amount_usd ? o.amount_usd * 83 : 0)), 0);
  const totalCount = ordersToRender.length;
  const paidCount = ordersToRender.filter(o => o.status === 'completed' || o.status === 'PAID').length;

  if (AdminDOM.statRevenue) AdminDOM.statRevenue.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
  if (AdminDOM.statOrders) AdminDOM.statOrders.textContent = totalCount;
  if (AdminDOM.statPaid) AdminDOM.statPaid.textContent = paidCount;

  if (ordersToRender.length === 0) {
    AdminDOM.tableBody.innerHTML = `<tr><td colspan="7" class="admin-loading">No live transactions found in your Supabase database yet. Place an order via checkout to see real-time data!</td></tr>`;
    return;
  }

  AdminDOM.tableBody.innerHTML = ordersToRender.map(o => {
    const dateStr = o.created_at ? new Date(o.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }) : 'Just now';
    
    let itemsList = [];
    if (Array.isArray(o.items)) {
      itemsList = o.items;
    } else if (typeof o.items === 'string') {
      try { itemsList = JSON.parse(o.items); } catch(e) {}
    }

    const itemsSummary = itemsList.length > 0 
      ? itemsList.map(item => {
          const i = (typeof item === 'string') ? JSON.parse(item) : item;
          return `• ${i.name || 'Item'} (${i.shade || 'Standard'}) ×${i.quantity || 1}`;
        }).join('<br>')
      : 'Makeup Items';

    return `
      <tr>
        <td><span style="font-size: 0.82rem; color: #8A8A8A;">${dateStr}</span></td>
        <td>
          <div class="admin-cust-name">${o.customer_name || 'Guest'}</div>
          <div class="admin-cust-sub">📧 ${o.customer_email || 'N/A'}</div>
          <div class="admin-cust-sub">📞 ${o.customer_phone || 'N/A'}</div>
        </td>
        <td>
          <div style="font-size: 0.83rem; max-width: 180px;">${o.address || ''}, ${o.city || ''}, ${o.state || ''} ${o.pincode || ''}</div>
        </td>
        <td style="font-size: 0.82rem; color: #F5F0EB;">${itemsSummary}</td>
        <td>
          <div style="font-weight: 700; color: #C9A96E;">₹${o.amount_inr ? Number(o.amount_inr).toLocaleString('en-IN') : (o.amount_usd ? (o.amount_usd * 83).toLocaleString('en-IN') : 0)}</div>
          <div style="font-size: 0.75rem; color: #8A8A8A;">($${o.amount_usd ? Number(o.amount_usd).toFixed(2) : 0})</div>
        </td>
        <td><span class="admin-pay-id">${o.payment_id || 'N/A'}</span></td>
        <td><span class="admin-status-tag admin-status-completed">Completed</span></td>
      </tr>
    `;
  }).join('');
}

// Search filter in admin panel
function handleAdminSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    renderAdminOrdersTable(allOrders);
    return;
  }

  const filtered = allOrders.filter(o => 
    (o.customer_name && o.customer_name.toLowerCase().includes(query)) ||
    (o.customer_email && o.customer_email.toLowerCase().includes(query)) ||
    (o.customer_phone && o.customer_phone.toLowerCase().includes(query)) ||
    (o.payment_id && o.payment_id.toLowerCase().includes(query)) ||
    (o.city && o.city.toLowerCase().includes(query))
  );

  renderAdminOrdersTable(filtered);
}

// Event Listeners for Admin & Route Detection
document.addEventListener('DOMContentLoaded', () => {
  if (CheckoutDOM.checkoutBtn) {
    CheckoutDOM.checkoutBtn.addEventListener('click', openCheckoutModal);
  }

  if (CheckoutDOM.closeBtn) {
    CheckoutDOM.closeBtn.addEventListener('click', closeCheckoutModal);
  }

  if (CheckoutDOM.overlay) {
    CheckoutDOM.overlay.addEventListener('click', (e) => {
      if (e.target === CheckoutDOM.overlay) closeCheckoutModal();
    });
  }

  if (CheckoutDOM.form) {
    CheckoutDOM.form.addEventListener('submit', handleCheckoutSubmit);
  }

  // Admin Event Listeners
  if (AdminDOM.closeBtn) AdminDOM.closeBtn.addEventListener('click', closeAdminModal);
  if (AdminDOM.loginForm) AdminDOM.loginForm.addEventListener('submit', handleAdminLogin);
  if (AdminDOM.logoutBtn) AdminDOM.logoutBtn.addEventListener('click', handleAdminLogout);
  if (AdminDOM.refreshBtn) AdminDOM.refreshBtn.addEventListener('click', fetchAdminOrders);
  if (AdminDOM.searchInput) AdminDOM.searchInput.addEventListener('input', handleAdminSearch);
  if (AdminDOM.overlay) {
    AdminDOM.overlay.addEventListener('click', (e) => {
      if (e.target === AdminDOM.overlay) closeAdminModal();
    });
  }

  // Detect /admin-bba in URL or Hash
  checkAdminRoute();
  window.addEventListener('hashchange', checkAdminRoute);
});

