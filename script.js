/* ============================================================
   ShopNest — Online Store JavaScript
   Features: Products data, Filters, Sort, Cart, Wishlist, Search
   ============================================================ */

'use strict';

// ===== PRODUCT DATA =====
const PRODUCTS = [
  // Electronics
  { id: 1,  name: "Apple MacBook Air M2", category: "Electronics", price: 89999, originalPrice: 109999, rating: 4.8, reviews: 2341, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },
  { id: 2,  name: "Samsung Galaxy S24 Ultra", category: "Electronics", price: 74999, originalPrice: 84999, rating: 4.7, reviews: 1876, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 3,  name: "Sony WH-1000XM5 Headphones", category: "Electronics", price: 24999, originalPrice: 34999, rating: 4.9, reviews: 3210, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 4,  name: "iPad Pro 12.9 M2", category: "Electronics", price: 99999, originalPrice: 109999, rating: 4.6, reviews: 987, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 5,  name: "Canon EOS R50 Camera", category: "Electronics", price: 59999, originalPrice: 69999, rating: 4.5, reviews: 654, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=400&fit=crop&q=80", badge: "new", inStock: false },
  { id: 6,  name: "LG 55\" 4K OLED TV", category: "Electronics", price: 79999, originalPrice: 99999, rating: 4.7, reviews: 1123, image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 7,  name: "Logitech MX Master 3 Mouse", category: "Electronics", price: 7499, originalPrice: 9999, rating: 4.8, reviews: 4521, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 8,  name: "Dell 27\" 4K Monitor", category: "Electronics", price: 39999, originalPrice: 49999, rating: 4.6, reviews: 876, image: "https://images.unsplash.com/photo-1527443224154-c4a573d5e9c6?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },

  // Fashion
  { id: 9,  name: "Nike Air Max 2024 Sneakers", category: "Fashion", price: 8999, originalPrice: 12999, rating: 4.5, reviews: 2109, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 10, name: "Levi's 501 Original Jeans", category: "Fashion", price: 3499, originalPrice: 4999, rating: 4.3, reviews: 5678, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 11, name: "Adidas Ultraboost Running Shoes", category: "Fashion", price: 11999, originalPrice: 15999, rating: 4.6, reviews: 1834, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 12, name: "Ray-Ban Aviator Sunglasses", category: "Fashion", price: 6999, originalPrice: 8999, rating: 4.7, reviews: 3421, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: false },
  { id: 13, name: "Leather Crossbody Handbag", category: "Fashion", price: 2499, originalPrice: 3999, rating: 4.4, reviews: 987, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 14, name: "Premium Silk Saree", category: "Fashion", price: 4999, originalPrice: 7999, rating: 4.8, reviews: 2210, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },
  { id: 15, name: "Men's Formal Blazer", category: "Fashion", price: 3999, originalPrice: 5999, rating: 4.3, reviews: 654, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 16, name: "Sports Running Shorts", category: "Fashion", price: 899, originalPrice: 1299, rating: 4.2, reviews: 3109, image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },

  // Home Appliances
  { id: 17, name: "Dyson V15 Cordless Vacuum", category: "Home Appliances", price: 44999, originalPrice: 55999, rating: 4.8, reviews: 1543, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },
  { id: 18, name: "Instant Pot Duo 7-in-1", category: "Home Appliances", price: 8999, originalPrice: 11999, rating: 4.7, reviews: 6789, image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 19, name: "Philips Air Fryer XXL", category: "Home Appliances", price: 12999, originalPrice: 16999, rating: 4.6, reviews: 4321, image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 20, name: "Nespresso Coffee Machine", category: "Home Appliances", price: 18999, originalPrice: 24999, rating: 4.9, reviews: 2108, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 21, name: "Samsung Side-by-Side Refrigerator", category: "Home Appliances", price: 54999, originalPrice: 69999, rating: 4.5, reviews: 876, image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: false },
  { id: 22, name: "Bosch Washing Machine 8kg", category: "Home Appliances", price: 39999, originalPrice: 49999, rating: 4.6, reviews: 1234, image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 23, name: "Dyson Pure Cool Air Purifier", category: "Home Appliances", price: 34999, originalPrice: 42999, rating: 4.7, reviews: 987, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },

  // Books
  { id: 24, name: "Atomic Habits — James Clear", category: "Books", price: 349, originalPrice: 599, rating: 4.9, reviews: 28765, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },
  { id: 25, name: "Rich Dad Poor Dad", category: "Books", price: 299, originalPrice: 499, rating: 4.7, reviews: 34567, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 26, name: "The Psychology of Money", category: "Books", price: 399, originalPrice: 599, rating: 4.8, reviews: 19876, image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 27, name: "Clean Code by Robert Martin", category: "Books", price: 699, originalPrice: 999, rating: 4.8, reviews: 8765, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 28, name: "The Alchemist — Paulo Coelho", category: "Books", price: 249, originalPrice: 399, rating: 4.6, reviews: 45678, image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 29, name: "JavaScript: The Good Parts", category: "Books", price: 549, originalPrice: 799, rating: 4.5, reviews: 6543, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },

  // Sports
  { id: 30, name: "Fitbit Charge 6 Smart Band", category: "Sports", price: 12999, originalPrice: 16999, rating: 4.5, reviews: 3456, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 31, name: "Yoga Mat Premium — 6mm", category: "Sports", price: 1499, originalPrice: 2499, rating: 4.6, reviews: 7654, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 32, name: "Wilson Tennis Racket Pro", category: "Sports", price: 4999, originalPrice: 6999, rating: 4.4, reviews: 1234, image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&h=400&fit=crop&q=80", badge: null, inStock: true },
  { id: 33, name: "Adjustable Dumbbell Set 40kg", category: "Sports", price: 8999, originalPrice: 12999, rating: 4.7, reviews: 2345, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: false },
  { id: 34, name: "Cycling Helmet Giro Radix", category: "Sports", price: 3499, originalPrice: 4999, rating: 4.3, reviews: 876, image: "https://images.unsplash.com/photo-1557803175-b3dd1a594e5c?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },

  // Beauty
  { id: 35, name: "The Ordinary Serum Set", category: "Beauty", price: 1999, originalPrice: 2999, rating: 4.7, reviews: 9876, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=400&fit=crop&q=80", badge: "featured", inStock: true },
  { id: 36, name: "Dyson Airwrap Styler", category: "Beauty", price: 36999, originalPrice: 44999, rating: 4.8, reviews: 5432, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
  { id: 37, name: "Charlotte Tilbury Lipstick", category: "Beauty", price: 3499, originalPrice: 4499, rating: 4.6, reviews: 3210, image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=500&h=400&fit=crop&q=80", badge: "new", inStock: true },
  { id: 38, name: "Cetaphil Moisturizing Cream", category: "Beauty", price: 599, originalPrice: 799, rating: 4.5, reviews: 12345, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=400&fit=crop&q=80", badge: "sale", inStock: true },
];

// ===== STATE =====
const state = {
  products: [...PRODUCTS],
  filtered: [...PRODUCTS],
  cart: [],
  wishlist: [],
  activeCategory: 'All',
  searchQuery: '',
  minPrice: 0,
  maxPrice: 100000,
  minRating: 0,
  sortBy: 'default',
  inStockOnly: false,
  onSaleOnly: false,
  view: 'grid',
  visibleCount: 12,
};

// ===== HERO SLIDER =====
let currentSlide = 0;
let slideInterval;

function goToSlide(n) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(dir) {
  goToSlide(currentSlide + dir);
  resetSlideTimer();
}

function resetSlideTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => changeSlide(1), 5000);
}

// ===== CATEGORY FILTER =====
function filterCategory(cat) {
  state.activeCategory = cat;
  state.visibleCount = 12;
  // Update tabs
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  applyFilters();
  // Scroll to products
  document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== SEARCH =====
document.getElementById('searchInput').addEventListener('input', function () {
  state.searchQuery = this.value.trim().toLowerCase();
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('visible', this.value.length > 0);
  // Sync mobile search
  document.getElementById('mobileSearchInput').value = this.value;
  state.visibleCount = 12;
  applyFilters();
});

document.getElementById('mobileSearchInput').addEventListener('input', function () {
  state.searchQuery = this.value.trim().toLowerCase();
  document.getElementById('searchInput').value = this.value;
  const clearBtn = document.getElementById('searchClear');
  clearBtn.classList.toggle('visible', this.value.length > 0);
  state.visibleCount = 12;
  applyFilters();
});

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('mobileSearchInput').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  state.searchQuery = '';
  applyFilters();
}

// ===== PRICE SLIDER =====
function updatePriceSlider(val) {
  const formatted = parseInt(val).toLocaleString('en-IN');
  document.getElementById('sliderValue').textContent = '₹' + formatted;
  document.getElementById('priceMax').value = val;
  state.maxPrice = parseInt(val);
  applyFilters();
}

function setPrice(min, max) {
  document.getElementById('priceMin').value = min || '';
  document.getElementById('priceMax').value = max || '';
  document.getElementById('priceSlider').value = max;
  document.getElementById('sliderValue').textContent = '₹' + max.toLocaleString('en-IN');
  state.minPrice = min;
  state.maxPrice = max;
  // Highlight active pill
  document.querySelectorAll('.price-pill').forEach(p => p.classList.remove('active'));
  event.target.classList.add('active');
  applyFilters();
}

// ===== SYNC SORT =====
function syncSort(val) {
  document.getElementById('sortSelect').value = val;
  state.sortBy = val;
  applyFilters();
}

// ===== APPLY ALL FILTERS =====
function applyFilters() {
  // Read current filter state
  const minPrice = parseInt(document.getElementById('priceMin').value) || 0;
  const maxPrice = parseInt(document.getElementById('priceMax').value) || 100000;
  const minRating = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
  const sortBy = document.getElementById('sortSelect').value;
  const inStockOnly = document.getElementById('inStockOnly').checked;
  const onSaleOnly = document.getElementById('onSaleOnly').checked;

  state.minPrice = minPrice;
  state.maxPrice = maxPrice;
  state.minRating = minRating;
  state.sortBy = sortBy;
  state.inStockOnly = inStockOnly;
  state.onSaleOnly = onSaleOnly;

  // Sync inline sort
  document.getElementById('sortInline').value = sortBy;

  let result = [...PRODUCTS];

  // Category
  if (state.activeCategory !== 'All') {
    result = result.filter(p => p.category === state.activeCategory);
  }

  // Search
  if (state.searchQuery) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.category.toLowerCase().includes(state.searchQuery)
    );
  }

  // Price
  result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

  // Rating
  if (minRating > 0) result = result.filter(p => p.rating >= minRating);

  // Stock
  if (inStockOnly) result = result.filter(p => p.inStock);

  // Sale
  if (onSaleOnly) result = result.filter(p => p.badge === 'sale' || p.originalPrice > p.price);

  // Sort
  switch (sortBy) {
    case 'price-low':  result.sort((a, b) => a.price - b.price); break;
    case 'price-high': result.sort((a, b) => b.price - a.price); break;
    case 'rating-high': result.sort((a, b) => b.rating - a.rating); break;
    case 'name-az':    result.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  state.filtered = result;
  renderProducts();
  renderActiveFilters();
}

// ===== CLEAR FILTERS =====
function clearAllFilters() {
  document.getElementById('priceMin').value = '';
  document.getElementById('priceMax').value = '';
  document.getElementById('priceSlider').value = 100000;
  document.getElementById('sliderValue').textContent = '₹1,00,000';
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  document.getElementById('sortSelect').value = 'default';
  document.getElementById('sortInline').value = 'default';
  document.getElementById('inStockOnly').checked = false;
  document.getElementById('onSaleOnly').checked = false;
  document.querySelectorAll('.price-pill').forEach(p => p.classList.remove('active'));
  state.minPrice = 0;
  state.maxPrice = 100000;
  state.minRating = 0;
  state.sortBy = 'default';
  state.inStockOnly = false;
  state.onSaleOnly = false;
  state.visibleCount = 12;
  applyFilters();
}

// ===== RENDER ACTIVE FILTERS =====
function renderActiveFilters() {
  const container = document.getElementById('activeFilters');
  const chips = [];

  if (state.activeCategory !== 'All') {
    chips.push({ label: state.activeCategory, clear: () => filterCategory('All') });
  }
  if (state.searchQuery) {
    chips.push({ label: `"${state.searchQuery}"`, clear: clearSearch });
  }
  if (state.minRating > 0) {
    chips.push({ label: `${state.minRating}+ Stars`, clear: () => { document.querySelector('input[name="rating"][value="0"]').checked = true; applyFilters(); } });
  }
  if (state.inStockOnly) {
    chips.push({ label: 'In Stock', clear: () => { document.getElementById('inStockOnly').checked = false; applyFilters(); } });
  }
  if (state.onSaleOnly) {
    chips.push({ label: 'On Sale', clear: () => { document.getElementById('onSaleOnly').checked = false; applyFilters(); } });
  }

  container.innerHTML = chips.map((c, i) => `
    <div class="filter-chip">
      ${c.label}
      <button onclick="(${c.clear.toString()})()">×</button>
    </div>
  `).join('');
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  const resultCount = document.getElementById('resultCount');
  const visible = state.filtered.slice(0, state.visibleCount);

  resultCount.textContent = `Showing ${Math.min(state.visibleCount, state.filtered.length)} of ${state.filtered.length} product${state.filtered.length !== 1 ? 's' : ''}`;

  if (state.filtered.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    loadMoreWrap.style.display = 'none';
    return;
  }

  noResults.style.display = 'none';

  grid.innerHTML = visible.map((p, i) => renderCard(p, i)).join('');

  loadMoreWrap.style.display = state.visibleCount < state.filtered.length ? 'block' : 'none';
}

function renderCard(p, index) {
  const discount = p.originalPrice > p.price
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : 0;

  const starsHtml = generateStars(p.rating);
  const isWishlisted = state.wishlist.includes(p.id);

  const stockClass = !p.inStock ? 'out-stock' : (p.price < 10000 ? 'in-stock' : 'in-stock');
  const stockText = !p.inStock ? '✗ Out of Stock' : '✓ In Stock';

  const badgeHtml = p.badge ? `<div class="badge-tag badge-${p.badge}">${p.badge === 'featured' ? '⭐ Featured' : p.badge === 'new' ? '🆕 New' : `${discount}% OFF`}</div>` : '';

  return `
    <div class="product-card" style="animation-delay:${index * 40}ms">
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop&q=80'"/>
        <div class="card-badges">${badgeHtml}</div>
        <div class="card-actions">
          <button class="action-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="toggleWishlist(${p.id})" title="Wishlist">
            <i class="fa${isWishlisted ? 's' : 'r'} fa-heart"></i>
          </button>
          <button class="action-btn" onclick="quickView(${p.id})" title="Quick View">
            <i class="fa fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${p.category}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-rating">
          <span class="stars-filled">${starsHtml}</span>
          <span class="rating-num">${p.rating}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="card-price-row">
          <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
          ${p.originalPrice > p.price ? `<span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          ${discount > 0 ? `<span class="price-discount">${discount}% off</span>` : ''}
        </div>
        <div class="card-stock ${stockClass}">${stockText}</div>
        <button class="add-cart-btn" onclick="addToCart(${p.id})" ${!p.inStock ? 'disabled' : ''}>
          ${p.inStock ? '<i class="fa fa-cart-plus"></i> Add to Cart' : '<i class="fa fa-ban"></i> Out of Stock'}
        </button>
      </div>
    </div>
  `;
}

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ===== LOAD MORE =====
function loadMore() {
  state.visibleCount += 8;
  renderProducts();
}

// ===== VIEW TOGGLE =====
function setView(v) {
  state.view = v;
  const grid = document.getElementById('productsGrid');
  grid.classList.toggle('list-view', v === 'list');
  document.getElementById('gridViewBtn').classList.toggle('active', v === 'grid');
  document.getElementById('listViewBtn').classList.toggle('active', v === 'list');
}

// ===== CART =====
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || !product.inStock) return;

  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`🛒 ${product.name.split(' ').slice(0,3).join(' ')} added to cart!`);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(c => c.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalQty = state.cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = totalQty;

  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:3rem;">🛒</div>
        <p>Your cart is empty</p>
        <button onclick="toggleCart()" class="hero-cta" style="margin-top:1rem;font-size:0.85rem;padding:10px 22px;">Start Shopping</button>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  `).join('');

  const total = state.cart.reduce((s, c) => s + c.price * c.qty, 0);
  document.getElementById('cartTotal').textContent = '₹' + total.toLocaleString('en-IN');
  cartFooter.style.display = 'block';
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = drawer.classList.contains('active');
  drawer.classList.toggle('active', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  const product = PRODUCTS.find(p => p.id === id);
  if (idx === -1) {
    state.wishlist.push(id);
    showToast(`❤️ ${product.name.split(' ').slice(0,3).join(' ')} added to wishlist!`);
  } else {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from wishlist`);
  }
  document.getElementById('wishlistCount').textContent = state.wishlist.length;
  // Re-render to update heart icons
  renderProducts();
}

// ===== QUICK VIEW =====
function quickView(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;
  const discount = p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
  showToast(`👁 ${p.name} — ₹${p.price.toLocaleString('en-IN')} · ${p.rating}★ · ${p.reviews.toLocaleString()} reviews`);
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== SIDEBAR TOGGLE (mobile) =====
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Close sidebar on outside click
document.addEventListener('click', function (e) {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !e.target.closest('.mobile-filter-btn')) {
    sidebar.classList.remove('open');
  }
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 20px rgba(0,0,0,0.1)'
    : '';
});

// ===== HAMBURGER =====
function toggleMobileMenu() {
  // Just toggles mobile-specific actions — simplified
  const mobileSearch = document.querySelector('.mobile-search');
  mobileSearch.style.display = mobileSearch.style.display === 'flex' ? 'none' : 'flex';
}

// ===== INIT =====
function init() {
  // Start slider
  slideInterval = setInterval(() => changeSlide(1), 5000);
  // Initial render
  applyFilters();
}

document.addEventListener('DOMContentLoaded', init);
