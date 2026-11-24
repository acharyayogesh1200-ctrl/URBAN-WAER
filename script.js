/* ==================== URBANWEAR — PRODUCT DATA ==================== */
const PRODUCTS = [
  // OVERSIZED T-SHIRTS
  {
    id: 1, name: "Essential Oversized Tee", category: "Oversized T-Shirts", gender: "Male", genderLabel: "Men",
    price: 799, originalPrice: 1299, discount: 38, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"},{name:"Olive",hex:"#556b2f"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=85",
    desc: "Premium heavyweight cotton oversized tee. Boxy fit. Drop shoulders. The essential piece for every streetwear wardrobe.",
    retailer: "https://www.hm.com/en_in/men/shopbycategory/chetti/tshirts.html",
    rating: 4.7, isNew: true, featured: 1
  },
  {
    id: 2, name: "Graphic Street Tee", category: "Oversized T-Shirts", gender: "Male", genderLabel: "Men",
    price: 999, originalPrice: 1599, discount: 37, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=85",
    desc: "Statement graphic oversized tee. Bold streetwear print. 240 GSM cotton. Relaxed fit. Make a statement without saying a word.",
    retailer: "https://www.bewakoof.com/t-shirts-for-men",
    rating: 4.5, isNew: true, featured: 2
  },
  {
    id: 3, name: "Vintage Washed Tee", category: "Oversized T-Shirts", gender: "Male", genderLabel: "Men",
    price: 1199, originalPrice: 1799, discount: 33, badge: "SALE", badgeType: "sale",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Faded Blue",hex:"#4a6080"},{name:"Grey",hex:"#808080"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop&q=85",
    desc: "Vintage washed oversized tee. Pre-shrunk. Soft hand-feel. Authentic streetwear texture. Built to fade beautifully.",
    retailer: "https://www.snitch.co.in/collections/oversized-tshirts",
    rating: 4.6, isNew: false, featured: 3
  },
  {
    id: 4, name: "Heavyweight Boxy Tee", category: "Oversized T-Shirts", gender: "Male", genderLabel: "Men",
    price: 1499, originalPrice: 2199, discount: 32, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"},{name:"Navy",hex:"#1a2744"}],
    sizes: ["M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&q=85",
    desc: "Heavyweight 300 GSM boxy tee. Structured silhouette. Premium cotton. Street-ready from day one.",
    retailer: "https://www.myntra.com/heavyweight-tshirts",
    rating: 4.8, isNew: true, featured: 4
  },
  // HOODIES
  {
    id: 5, name: "Essential Oversized Hoodie", category: "Hoodies", gender: "Male", genderLabel: "Men",
    price: 1799, originalPrice: 2799, discount: 36, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Grey",hex:"#808080"},{name:"Navy",hex:"#1a2744"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=85",
    desc: "Premium oversized hoodie. 400 GSM fleece. Kangaroo pocket. Drop shoulders. The ultimate comfort piece with street cred.",
    retailer: "https://www.hm.com/en_in/men/shopbycategory/hoodies.html",
    rating: 4.9, isNew: true, featured: 5
  },
  {
    id: 6, name: "Graphic Print Hoodie", category: "Hoodies", gender: "Male", genderLabel: "Men",
    price: 1999, originalPrice: 2999, discount: 33, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=85",
    desc: "Statement graphic hoodie with bold print. Heavyweight cotton blend. Oversized fit. Street culture in every stitch.",
    retailer: "https://www.bewakoof.com/hoodies-for-men",
    rating: 4.6, isNew: true, featured: 6
  },
  {
    id: 7, name: "Zip-Up Hoodie", category: "Hoodies", gender: "Female", genderLabel: "Women",
    price: 2199, originalPrice: 3199, discount: 31, badge: "SALE", badgeType: "sale",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Grey",hex:"#808080"},{name:"Olive",hex:"#556b2f"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&q=85",
    desc: "Premium zip-up hoodie. Full zip. Oversized fit. Heavyweight fleece lining. Layer up in style.",
    retailer: "https://www.zara.com/in/en/woman/hoodies",
    rating: 4.5, isNew: false, featured: 7
  },
  {
    id: 8, name: "Premium Heavyweight Hoodie", category: "Hoodies", gender: "Male", genderLabel: "Men",
    price: 2499, originalPrice: 3499, discount: 29, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"}],
    sizes: ["M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=85",
    desc: "Ultra-premium 500 GSM heavyweight hoodie. Premium loopback cotton. Structured silhouette. The pinnacle of streetwear comfort.",
    retailer: "https://www.snitch.co.in/collections/hoodies",
    rating: 4.9, isNew: true, featured: 8
  },
  // CARGO PANTS
  {
    id: 9, name: "Classic Cargo Pants", category: "Cargo Pants", gender: "Male", genderLabel: "Men",
    price: 1499, originalPrice: 2299, discount: 35, badge: "SALE", badgeType: "sale",
    colors: [{name:"Olive",hex:"#556b2f"},{name:"Black",hex:"#1a1a1a"},{name:"Khaki",hex:"#c3b091"}],
    sizes: ["28","30","32","34","36"], availableSizes: ["28","30","32","34","36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=85",
    desc: "Classic cargo pants. Multiple utility pockets. Relaxed fit. Durable cotton twill. Built for the urban jungle.",
    retailer: "https://www.myntra.com/cargo-pants",
    rating: 4.7, isNew: false, featured: 9
  },
  {
    id: 10, name: "Baggy Utility Cargo", category: "Cargo Pants", gender: "Female", genderLabel: "Women",
    price: 1799, originalPrice: 2599, discount: 31, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Olive",hex:"#556b2f"},{name:"Grey",hex:"#808080"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1541099649105-fc1b4bac8ded?w=600&h=800&fit=crop&q=85",
    desc: "Baggy utility cargo pants. Oversized fit. Functional pockets. Cotton ripstop. Streetwear essential.",
    retailer: "https://www.ajio.com/cargo-pants",
    rating: 4.6, isNew: true, featured: 10
  },
  {
    id: 11, name: "Multi-Pocket Cargo", category: "Cargo Pants", gender: "Male", genderLabel: "Men",
    price: 1999, originalPrice: 2899, discount: 31, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Khaki",hex:"#c3b091"},{name:"Black",hex:"#1a1a1a"}],
    sizes: ["30","32","34","36"], availableSizes: ["28","30","32","34","36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=85",
    desc: "Multi-pocket cargo pants. 8 functional pockets. Premium ripstop fabric. Utility meets street style.",
    retailer: "https://www.hm.com/en_in/men/shopbycategory/cargopants.html",
    rating: 4.8, isNew: true, featured: 11
  },
  {
    id: 12, name: "Relaxed Fit Cargo", category: "Cargo Pants", gender: "Female", genderLabel: "Women",
    price: 1699, originalPrice: 2399, discount: 29, badge: "SALE", badgeType: "sale",
    colors: [{name:"Olive",hex:"#556b2f"},{name:"Black",hex:"#1a1a1a"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1541099649105-fc1b4bac8ded?w=600&h=800&fit=crop&q=85",
    desc: "Relaxed fit cargo pants. Soft washed cotton. Comfortable all-day wear. Street-ready silhouette.",
    retailer: "https://www.snitch.co.in/collections/cargo-pants",
    rating: 4.5, isNew: false, featured: 12
  },
  // BAGGY JEANS
  {
    id: 13, name: "Vintage Baggy Denim", category: "Baggy Jeans", gender: "Male", genderLabel: "Men",
    price: 1999, originalPrice: 2999, discount: 33, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Blue",hex:"#4a6080"},{name:"Black",hex:"#1a1a1a"},{name:"Light Wash",hex:"#8aa8d0"}],
    sizes: ["28","30","32","34","36"], availableSizes: ["28","30","32","34","36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=85",
    desc: "Vintage washed baggy denim. Relaxed fit. Premium denim fabric. Authentic streetwear aesthetic.",
    retailer: "https://www.myntra.com/baggy-jeans",
    rating: 4.7, isNew: true, featured: 13
  },
  {
    id: 14, name: "Washed Wide-Leg Jeans", category: "Baggy Jeans", gender: "Female", genderLabel: "Women",
    price: 2299, originalPrice: 3299, discount: 30, badge: "NEW", badgeType: "new",
    colors: [{name:"Light Wash",hex:"#8aa8d0"},{name:"Blue",hex:"#4a6080"},{name:"Black",hex:"#1a1a1a"}],
    sizes: ["24","26","28","30","32"], availableSizes: ["24","26","28","30","32"],
    image: "https://images.unsplash.com/photo-1541099649105-fc1b4bac8ded?w=600&h=800&fit=crop&q=85",
    desc: "Wide-leg washed denim. Premium cotton denim. Baggy street fit. Versatile styling essential.",
    retailer: "https://www.zara.com/in/en/woman/jeans",
    rating: 4.8, isNew: true, featured: 14
  },
  {
    id: 15, name: "Relaxed Blue Denim", category: "Baggy Jeans", gender: "Male", genderLabel: "Men",
    price: 1899, originalPrice: 2699, discount: 30, badge: "SALE", badgeType: "sale",
    colors: [{name:"Blue",hex:"#4a6080"},{name:"Dark Wash",hex:"#1e3a5f"}],
    sizes: ["30","32","34","36","38"], availableSizes: ["28","30","32","34","36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop&q=85",
    desc: "Relaxed fit blue denim. Classic 5-pocket design. Premium denim. Timeless street style.",
    retailer: "https://www.bewakoof.com/jeans-for-men",
    rating: 4.6, isNew: false, featured: 15
  },
  // JACKETS
  {
    id: 16, name: "Oversized Bomber Jacket", category: "Jackets", gender: "Male", genderLabel: "Men",
    price: 2499, originalPrice: 3799, discount: 34, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Olive",hex:"#556b2f"},{name:"Navy",hex:"#1a2744"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop&q=85",
    desc: "Oversized bomber jacket. MA-1 inspired. Ribbed cuffs and hem. Premium nylon shell. Street-ready outerwear.",
    retailer: "https://www.myntra.com/bomber-jackets",
    rating: 4.9, isNew: true, featured: 16
  },
  {
    id: 17, name: "Denim Street Jacket", category: "Jackets", gender: "Female", genderLabel: "Women",
    price: 2799, originalPrice: 3999, discount: 30, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Blue",hex:"#4a6080"},{name:"Light Wash",hex:"#8aa8d0"},{name:"Black",hex:"#1a1a1a"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop&q=85",
    desc: "Denim street jacket. Oversized fit. Premium denim. Classic trucker silhouette reimagined for the streets.",
    retailer: "https://www.zara.com/in/en/woman/jackets",
    rating: 4.7, isNew: true, featured: 17
  },
  {
    id: 18, name: "Utility Windbreaker", category: "Jackets", gender: "Male", genderLabel: "Men",
    price: 2299, originalPrice: 3299, discount: 30, badge: "SALE", badgeType: "sale",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Olive",hex:"#556b2f"},{name:"Grey",hex:"#808080"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&h=800&fit=crop&q=85",
    desc: "Utility windbreaker jacket. Water-resistant shell. Packable design. Functional street outerwear.",
    retailer: "https://www.snitch.co.in/collections/jackets",
    rating: 4.6, isNew: false, featured: 18
  },
  // SHIRTS
  {
    id: 19, name: "Oversized Flannel Shirt", category: "Shirts", gender: "Male", genderLabel: "Men",
    price: 1299, originalPrice: 1899, discount: 32, badge: "NEW", badgeType: "new",
    colors: [{name:"Red Plaid",hex:"#8b2020"},{name:"Black Plaid",hex:"#1a1a1a"},{name:"Green Plaid",hex:"#2d5a2d"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop&q=85",
    desc: "Oversized flannel shirt. Premium brushed cotton. Classic plaid. Layer it or wear it solo.",
    retailer: "https://www.hm.com/en_in/men/shopbycategory/shirts.html",
    rating: 4.7, isNew: true, featured: 19
  },
  {
    id: 20, name: "Relaxed Fit Casual Shirt", category: "Shirts", gender: "Female", genderLabel: "Women",
    price: 1499, originalPrice: 2199, discount: 32, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"White",hex:"#f0f0f0"},{name:"Black",hex:"#1a1a1a"},{name:"Blue",hex:"#4a6080"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=800&fit=crop&q=85",
    desc: "Relaxed fit casual shirt. Premium cotton. Oversized street fit. Versatile styling essential.",
    retailer: "https://www.myntra.com/shirts",
    rating: 4.5, isNew: true, featured: 20
  },
  // TRACKSUITS
  {
    id: 21, name: "Streetwear Tracksuit", category: "Tracksuits", gender: "Male", genderLabel: "Men",
    price: 2199, originalPrice: 3199, discount: 31, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Navy",hex:"#1a2744"},{name:"Grey",hex:"#808080"}],
    sizes: ["S","M","L","XL","XXL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&q=85",
    desc: "Premium streetwear tracksuit. Two-piece set. Heavyweight cotton. Oversized fit. Ultimate comfort.",
    retailer: "https://www.snitch.co.in/collections/tracksuits",
    rating: 4.8, isNew: true, featured: 21
  },
  {
    id: 22, name: "Premium Tracksuit Set", category: "Tracksuits", gender: "Female", genderLabel: "Women",
    price: 2499, originalPrice: 3599, discount: 31, badge: "SALE", badgeType: "sale",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Olive",hex:"#556b2f"}],
    sizes: ["S","M","L","XL"], availableSizes: ["S","M","L","XL","XXL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop&q=85",
    desc: "Premium tracksuit set. Heavyweight fabric. Oversized fit. Street-ready comfort meets style.",
    retailer: "https://www.ajio.com/tracksuits",
    rating: 4.6, isNew: true, featured: 22
  },
  // ACCESSORIES
  {
    id: 23, name: "Streetwear Crossbody Bag", category: "Accessories", gender: "Unisex", genderLabel: "Unisex",
    price: 1299, originalPrice: 1899, discount: 32, badge: "NEW", badgeType: "new",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"Navy",hex:"#1a2744"},{name:"Olive",hex:"#556b2f"}],
    sizes: ["One Size"], availableSizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop&q=85",
    desc: "Streetwear crossbody bag. Multiple compartments. Adjustable strap. Premium canvas. Functional accessory.",
    retailer: "https://www.myntra.com/crossbody-bags",
    rating: 4.5, isNew: true, featured: 23
  },
  {
    id: 24, name: "Premium Street Cap", category: "Accessories", gender: "Unisex", genderLabel: "Unisex",
    price: 799, originalPrice: 1199, discount: 33, badge: "TRENDING", badgeType: "trending",
    colors: [{name:"Black",hex:"#1a1a1a"},{name:"White",hex:"#f0f0f0"},{name:"Navy",hex:"#1a2744"}],
    sizes: ["One Size"], availableSizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop&q=85",
    desc: "Premium street cap. Embroidered logo. Adjustable snapback. Premium cotton. Complete your street look.",
    retailer: "https://www.bewakoof.com/caps-for-men",
    rating: 4.7, isNew: true, featured: 24
  }
];

/* ==================== STATE ==================== */
let cart = JSON.parse(localStorage.getItem('urbanwear_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('urbanwear_wishlist')) || [];
let currentFilters = { category: '', gender: '', size: '', search: '', sort: 'featured' };
let selectedSize = null;
let selectedColor = null;
let currentProductId = null;
let currentQty = 1;

/* ==================== DOM REFERENCES ==================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ==================== INITIALIZE ==================== */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNav();
  initHeroAnimations();
  renderProducts();
  renderNewArrivals();
  renderSaleProducts();
  initFilters();
  initCart();
  initWishlist();
  initModal();
  initNewsletter();
  initScrollReveal();
  updateBadges();
});

/* ==================== PRELOADER ==================== */
function initPreloader() {
  const preloader = $('#preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 1200);
  });
  // Fallback
  setTimeout(() => preloader.classList.add('hidden'), 3000);
}

/* ==================== NAVBAR ==================== */
function initNav() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  const searchToggle = $('#searchToggle');
  const searchWrapper = $('.search-wrapper');
  const navSearchInput = $('#navSearchInput');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      if (link.dataset.gender) {
        e.preventDefault();
        const g = link.dataset.gender === 'male' ? 'Male' : 'Female';
        $('#filterGender').value = g;
        currentFilters.gender = g;
        currentFilters.category = '';
        $('#filterCategory').value = '';
        renderProducts();
        document.getElementById('shop').scrollIntoView({behavior:'smooth'});
      }
    });
  });

  searchToggle.addEventListener('click', () => {
    searchWrapper.classList.toggle('open');
    if (searchWrapper.classList.contains('open')) navSearchInput.focus();
  });

  let searchTimeout;
  navSearchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      $('#productSearch').value = e.target.value;
      currentFilters.search = e.target.value.toLowerCase();
      renderProducts();
      searchWrapper.classList.remove('open');
      document.getElementById('shop').scrollIntoView({behavior:'smooth'});
    }, 400);
  });

  // Footer and other gender links
  document.querySelectorAll('a[data-gender]').forEach(link => {
    if (navLinks.contains(link)) return; // already handled
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const g = link.dataset.gender === 'male' ? 'Male' : 'Female';
      $('#filterGender').value = g;
      currentFilters.gender = g;
      currentFilters.category = '';
      $('#filterCategory').value = '';
      renderProducts();
      document.getElementById('shop').scrollIntoView({behavior:'smooth'});
    });
  });

  // Active nav on scroll
  const sections = ['hero','shop','new-arrivals','sale','collections'];
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });
}

/* ==================== HERO ANIMATIONS ==================== */
function initHeroAnimations() {
  // Already handled by CSS animations
}

/* ==================== RENDER PRODUCTS ==================== */
function renderProducts() {
  const grid = $('#productGrid');
  let products = [...PRODUCTS];

  // Apply filters
  if (currentFilters.category) products = products.filter(p => p.category === currentFilters.category);
  if (currentFilters.gender) products = products.filter(p => p.gender === currentFilters.gender || p.gender === 'Unisex');
  if (currentFilters.size) products = products.filter(p => p.availableSizes.includes(currentFilters.size));
  if (currentFilters.search) {
    const s = currentFilters.search;
    products = products.filter(p =>
      p.name.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      p.genderLabel.toLowerCase().includes(s)
    );
  }

  // Sort
  switch(currentFilters.sort) {
    case 'price-asc': products.sort((a,b) => a.price - b.price); break;
    case 'price-desc': products.sort((a,b) => b.price - a.price); break;
    case 'newest': products.sort((a,b) => b.id - a.id); break;
    case 'rated': products.sort((a,b) => b.rating - a.rating); break;
    default: products.sort((a,b) => a.featured - b.featured);
  }

  // Render
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
  attachProductEvents();

  // Results count
  const countEl = $('#resultsCount');
  const noResults = $('#noResults');
  if (products.length === 0) {
    noResults.hidden = false;
    grid.style.display = 'none';
    countEl.innerHTML = '';
  } else {
    noResults.hidden = true;
    grid.style.display = '';
    countEl.innerHTML = `Showing <span>${products.length}</span> product${products.length !== 1 ? 's' : ''}`;
  }

  // Update badges
  updateBadges();
  // Observe product cards for reveal animation
  requestAnimationFrame(() => observeProductCards());
}

function productCardHTML(p) {
  const saved = wishlist.some(w => w.id === p.id);
  return `
    <div class="product-card reveal" data-id="${p.id}">
      <div class="product-image-wrap">
        ${p.badge ? `<span class="product-badge ${p.badgeType}">${p.badge}</span>` : ''}
        <button class="wishlist-heart ${saved ? 'saved' : ''}" data-id="${p.id}" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.2 4.8 12 5.8C12.8 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </button>
        <img src="${p.image}" alt="${p.name}" loading="lazy"
          onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%231C1C1C%22/%3E%3Ctext x=%22200%22 y=%22240%22 text-anchor=%22middle%22 font-size=%2260%22 fill=%22%2300E5FF%22%3E👕%3C/text%3E%3C/svg%3E';">
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-prices">
          <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="product-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>
          <span class="product-discount">SAVE ${p.discount}%</span>
        </div>
        <div class="product-colors">
          ${p.colors.map(c => `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>
        <div class="product-sizes">Sizes: <strong>${p.availableSizes.join(' ')}</strong></div>
        <button class="product-view-btn" data-id="${p.id}">
          VIEW PRODUCT
          <svg viewBox="0 0 24 24" width="12" height="12"><path d="M7 17L17 7M7 7h10v10" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </button>
      </div>
    </div>
  `;
}

function attachProductEvents() {
  $$('.product-view-btn').forEach(btn => {
    btn.addEventListener('click', () => openProductModal(parseInt(btn.dataset.id)));
  });
  $$('.wishlist-heart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.id));
    });
  });
  $$('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.wishlist-heart') && !e.target.closest('.product-view-btn')) {
        openProductModal(parseInt(card.dataset.id));
      }
    });
  });
}

/* ==================== NEW ARRIVALS ==================== */
function renderNewArrivals() {
  const grid = $('#newArrivalsGrid');
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(0, 8);
  grid.innerHTML = newProducts.map(p => productCardHTML(p)).join('');
  attachProductEvents();
  // Re-apply reveal
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  });
}

/* ==================== SALE PRODUCTS ==================== */
function renderSaleProducts() {
  const grid = $('#saleGrid');
  const saleProducts = PRODUCTS.filter(p => p.discount >= 30).slice(0, 8);
  grid.innerHTML = saleProducts.map(p => productCardHTML(p)).join('');
  attachProductEvents();
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  });
}

/* ==================== FILTERS ==================== */
function initFilters() {
  $('#productSearch').addEventListener('input', (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    renderProducts();
  });

  $('#filterCategory').addEventListener('change', (e) => {
    currentFilters.category = e.target.value;
    renderProducts();
  });

  $('#filterGender').addEventListener('change', (e) => {
    currentFilters.gender = e.target.value;
    renderProducts();
  });

  $('#filterSize').addEventListener('change', (e) => {
    currentFilters.size = e.target.value;
    renderProducts();
  });

  $('#sortOrder').addEventListener('change', (e) => {
    currentFilters.sort = e.target.value;
    renderProducts();
  });

  $('#clearFilters').addEventListener('click', () => {
    currentFilters = { category: '', gender: '', size: '', search: '', sort: 'featured' };
    $('#productSearch').value = '';
    $('#filterCategory').value = '';
    $('#filterGender').value = '';
    $('#filterSize').value = '';
    $('#sortOrder').value = 'featured';
    renderProducts();
  });

  // Category cards
  $$('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = card.dataset.cat;
      $('#filterCategory').value = cat;
      currentFilters.category = cat;
      renderProducts();
      document.getElementById('shop').scrollIntoView({behavior:'smooth'});
    });
  });

  // Shop sale
  $('#shopSaleBtn').addEventListener('click', (e) => {
    e.preventDefault();
    $('#sortOrder').value = 'price-asc';
    currentFilters.sort = 'price-asc';
    renderProducts();
    document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  });
}

/* ==================== CART ==================== */
function initCart() {
  const cartToggle = $('#cartToggle');
  const cartClose = $('#cartClose');
  const cartOverlay = $('#cartOverlay');
  const cartDrawer = $('#cartDrawer');
  const cartShopBtn = $('#cartShopBtn');
  const checkoutBtn = $('#checkoutBtn');

  cartToggle.addEventListener('click', () => openCart());
  cartClose.addEventListener('click', () => closeCart());
  cartOverlay.addEventListener('click', () => closeCart());
  cartShopBtn.addEventListener('click', () => {
    closeCart();
    document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  });
  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      showToast('Redirecting to retailer website... Final purchase on retailer site.', 'success');
    }
  });

  renderCart();
}

function openCart() {
  $('#cartDrawer').classList.add('open');
  $('#cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('#cartDrawer').classList.remove('open');
  $('#cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId, size, color, qty) {
  const existing = cart.find(c => c.id === productId && c.size === size && c.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    cart.push({ id: productId, name: product.name, image: product.image, price: product.price, size, color, qty, retailer: product.retailer });
  }
  saveCart();
  renderCart();
  updateBadges();
  showToast(`${PRODUCTS.find(p=>p.id===productId).name} added to cart`, 'success');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
  updateBadges();
}

function updateCartQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  renderCart();
  updateBadges();
}

function saveCart() {
  localStorage.setItem('urbanwear_cart', JSON.stringify(cart));
}

function renderCart() {
  const itemsEl = $('#cartItems');
  const emptyEl = $('#cartEmpty');
  const footerEl = $('#cartFooter');
  const countEl = $('#cartDrawerCount');

  countEl.textContent = `(${cart.length})`;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    footerEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  footerEl.classList.remove('hidden');

  itemsEl.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy"
          onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%231C1C1C%22/%3E%3C/svg%3E';">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size} · ${item.color}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-item-actions">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${i}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${i}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${i})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  $('#cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  $('#cartTotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

/* ==================== WISHLIST ==================== */
function initWishlist() {
  const wishlistToggle = $('#wishlistToggle');
  const wishlistClose = $('#wishlistClose');
  const wishlistOverlay = $('#wishlistOverlay');
  const wishlistShopBtn = $('#wishlistShopBtn');

  wishlistToggle.addEventListener('click', () => openWishlist());
  wishlistClose.addEventListener('click', () => closeWishlist());
  wishlistOverlay.addEventListener('click', () => closeWishlist());
  wishlistShopBtn.addEventListener('click', () => {
    closeWishlist();
    document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  });

  renderWishlist();
}

function openWishlist() {
  $('#wishlistDrawer').classList.add('open');
  $('#wishlistOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  $('#wishlistDrawer').classList.remove('open');
  $('#wishlistOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleWishlist(productId) {
  const idx = wishlist.findIndex(w => w.id === productId);
  const heartBtn = document.querySelector(`.wishlist-heart[data-id="${productId}"]`);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    if (heartBtn) heartBtn.classList.remove('saved');
    showToast('Removed from wishlist', 'success');
  } else {
    const product = PRODUCTS.find(p => p.id === productId);
    wishlist.push({ id: productId, name: product.name, image: product.image, price: product.price });
    if (heartBtn) {
      heartBtn.classList.add('saved');
      heartBtn.style.animation = 'none';
      heartBtn.offsetHeight; // force reflow
      heartBtn.style.animation = '';
    }
    showToast(`${product.name} saved to wishlist`, 'success');
  }
  saveWishlist();
  renderWishlist();
  updateBadges();
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(w => w.id !== productId);
  saveWishlist();
  renderWishlist();
  updateBadges();
  // Update heart
  $$('.wishlist-heart').forEach(btn => {
    if (parseInt(btn.dataset.id) === productId) btn.classList.remove('saved');
  });
}

function saveWishlist() {
  localStorage.setItem('urbanwear_wishlist', JSON.stringify(wishlist));
}

function renderWishlist() {
  const itemsEl = $('#wishlistItems');
  const emptyEl = $('#wishlistEmpty');
  const countEl = $('#wishlistDrawerCount');

  countEl.textContent = `(${wishlist.length})`;

  if (wishlist.length === 0) {
    itemsEl.innerHTML = '';
    emptyEl.classList.remove('hidden');
    return;
  }

  emptyEl.classList.add('hidden');

  itemsEl.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy"
          onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%231C1C1C%22/%3E%3C/svg%3E';">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="cart-item-actions">
          <button class="cart-item-remove" onclick="removeFromWishlist(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==================== PRODUCT MODAL ==================== */
function initModal() {
  $('#modalClose').addEventListener('click', () => closeModal());
  $('#modalOverlay').addEventListener('click', () => closeModal());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); closeCart(); closeWishlist(); }
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentProductId = productId;
  selectedSize = null;
  selectedColor = product.colors[0];
  currentQty = 1;

  const saved = wishlist.some(w => w.id === productId);

  $('#modalContent').innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy"
        onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%231C1C1C%22/%3E%3C/svg%3E';">
    </div>
    <div class="modal-info">
      <span class="modal-cat">${product.category} · ${product.genderLabel}</span>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-prices">
        <span class="modal-price">₹${product.price.toLocaleString('en-IN')}</span>
        <span class="modal-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
        <span class="modal-discount">SAVE ${product.discount}%</span>
      </div>
      <p class="modal-desc">${product.desc}</p>

      <span class="modal-section-label">COLOR: <strong id="selectedColorLabel" style="color:var(--text-primary)">${selectedColor.name}</strong></span>
      <div class="modal-colors">
        ${product.colors.map((c, i) => `
          <button class="modal-color-btn ${i===0?'selected':''}" style="background:${c.hex}" data-color="${i}" title="${c.name}"></button>
        `).join('')}
      </div>

      <span class="modal-section-label">SELECT SIZE</span>
      <div class="modal-sizes">
        ${product.availableSizes.map(s => `
          <button class="modal-size-btn" data-size="${s}">${s}</button>
        `).join('')}
      </div>
      <div class="size-warning" id="sizeWarning">Please select a size to continue.</div>

      <div class="modal-qty-row">
        <span class="modal-section-label" style="margin-bottom:0">QUANTITY</span>
        <div class="modal-qty-control">
          <button class="modal-qty-btn" id="qtyMinus">−</button>
          <span class="modal-qty-val" id="qtyVal">1</span>
          <button class="modal-qty-btn" id="qtyPlus">+</button>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn btn-primary" id="modalBuyNow">VIEW RETAILER / BUY NOW ↗</button>
        <button class="btn btn-outline" id="modalWishlist">
          <svg viewBox="0 0 24 24" width="16" height="16" style="${saved?'fill:currentColor':''}"><path d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.2 4.8 12 5.8C12.8 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" fill="${saved?'currentColor':'none'}" stroke="currentColor" stroke-width="2"/></svg>
          ${saved ? 'SAVED' : 'WISHLIST'}
        </button>
      </div>
      <div class="modal-retailer-note">
        You will be redirected to an external retailer website. Final purchase and payment take place on the retailer's site. UrbanWear does not sell or own the products displayed.
      </div>
    </div>
  `;

  $('#productModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Color selection
  $$('.modal-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.modal-color-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const idx = parseInt(btn.dataset.color);
      selectedColor = product.colors[idx];
      $('#selectedColorLabel').textContent = selectedColor.name;
    });
  });

  // Size selection
  $$('.modal-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.modal-size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSize = btn.dataset.size;
      $('#sizeWarning').classList.remove('show');
    });
  });

  // Quantity
  $('#qtyMinus').addEventListener('click', () => {
    if (currentQty > 1) { currentQty--; $('#qtyVal').textContent = currentQty; }
  });
  $('#qtyPlus').addEventListener('click', () => {
    if (currentQty < 10) { currentQty++; $('#qtyVal').textContent = currentQty; }
  });

  // Buy Now
  $('#modalBuyNow').addEventListener('click', () => {
    if (!selectedSize) {
      $('#sizeWarning').classList.add('show');
      return;
    }
    addToCart(productId, selectedSize, selectedColor.name, currentQty);
    // Open retailer in new tab
    window.open(product.retailer, '_blank', 'noopener,noreferrer');
    closeModal();
  });

  // Wishlist
  $('#modalWishlist').addEventListener('click', () => {
    toggleWishlist(productId);
    // Update button
    const savedNow = wishlist.some(w => w.id === productId);
    const btn = $('#modalWishlist');
    if (savedNow) {
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" style="fill:currentColor"><path d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.2 4.8 12 5.8C12.8 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" fill="currentColor" stroke="currentColor" stroke-width="2"/></svg> SAVED`;
    } else {
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 21C12 21 4 13.5 4 8.5C4 6 6 4 8.5 4C10 4 11.2 4.8 12 5.8C12.8 4.8 14 4 15.5 4C18 4 20 6 20 8.5C20 13.5 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="2"/></svg> WISHLIST`;
    }
  });
}

function closeModal() {
  $('#productModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ==================== NEWSLETTER ==================== */
function initNewsletter() {
  const form = $('#newsletterForm');
  const email = $('#newsletterEmail');
  const msg = $('#newsletterMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = email.value.trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) {
      msg.textContent = 'Please enter a valid email address.';
      msg.className = 'newsletter-msg error';
      email.style.borderColor = '#FF6B6B';
      return;
    }
    email.style.borderColor = '';
    msg.textContent = 'You\'re in! Watch your inbox for the latest drops.';
    msg.className = 'newsletter-msg success';
    email.value = '';
    showToast('Successfully subscribed to newsletter!', 'success');
  });

  email.addEventListener('input', () => {
    msg.textContent = '';
    msg.className = 'newsletter-msg';
    email.style.borderColor = '';
  });
}

/* ==================== SCROLL REVEAL ==================== */
let productObserver = null;

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Observe section headers
  $$('.section-header, .category-card, .collection-card, .newsletter-inner').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Observe product cards as they render
  productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        productObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

  // Observe any product cards already rendered
  observeProductCards();
}

function observeProductCards() {
  if (!productObserver) {
    // Fallback: make all reveal cards visible
    $$('.product-card.reveal:not(.visible)').forEach(el => el.classList.add('visible'));
    return;
  }
  $$('.product-card.reveal:not(.visible)').forEach(el => productObserver.observe(el));
}

/* ==================== BADGES ==================== */
function updateBadges() {
  const cartCount = $('#cartCount');
  const wishlistCount = $('#wishlistCount');
  cartCount.textContent = cart.reduce((s, i) => s + i.qty, 0);
  wishlistCount.textContent = wishlist.length;
}

/* ==================== TOAST ==================== */
function showToast(message, type = 'success') {
  const container = $('#toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
      ${type === 'success'
        ? '<path d="M20 6L9 17l-5-5"/>'
        : '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>'}
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

/* ==================== GLOBAL FUNCTIONS (for inline handlers) ==================== */
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.removeFromWishlist = removeFromWishlist;