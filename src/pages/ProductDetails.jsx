/**
 * ═══════════════════════════════════════════════════════════════
 * MINI BAZAR - PRODUCT DATABASE
 * ═══════════════════════════════════════════════════════════════
 * 
 * Product Structure:
 * - id: Unique identifier
 * - name: Product name
 * - category: Product category (Electronics, Men, Women, Footwear, Kitchen)
 * - price: Current selling price (₹)
 * - originalPrice: Original price before discount (₹)
 * - discount: Discount percentage
 * - rating: Product rating (out of 5)
 * - image: Product image path
 * - description: Detailed product description
 * - features: Array of key features
 * - inStock: Stock availability
 * - badge: Special badge (New, Bestseller, Limited)
 * 
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
// 📱 ELECTRONICS CATEGORY
// ═══════════════════════════════════════════════════════════════

const electronicsProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    description: 'Immerse yourself in crystal-clear audio with our premium wireless headphones featuring active noise cancellation.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Premium sound quality'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    category: 'Electronics',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    description: 'Track your fitness, monitor health, and stay connected with our feature-packed smart watch.',
    features: [
      'Heart rate monitor',
      'Sleep tracking',
      'Water resistant',
      '7-day battery life'
    ],
    inStock: true,
    badge: 'New'
  },
  {
    id: 9,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    description: 'Powerful 360° sound in a compact, waterproof design perfect for any adventure.',
    features: [
      '360° sound',
      'IPX7 waterproof',
      '12-hour playtime',
      'Bass boost mode'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 13,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    description: 'True wireless earbuds with superior sound quality and comfortable fit.',
    features: [
      'Touch controls',
      '20-hour battery',
      'IPX5 sweat resistant',
      'Noise isolation'
    ],
    inStock: true,
    badge: 'New'
  }
];

// ═══════════════════════════════════════════════════════════════
// 👔 MEN'S FASHION CATEGORY
// ═══════════════════════════════════════════════════════════════

const mensFashionProducts = [
  {
    id: 2,
    name: 'Premium Casual T-Shirt',
    category: 'Men',
    price: 499,
    originalPrice: 799,
    discount: 38,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    description: 'Comfortable cotton t-shirt perfect for everyday casual wear. Breathable fabric with modern fit.',
    features: [
      '100% premium cotton',
      'Modern slim fit',
      'Breathable fabric',
      'Machine washable'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 5,
    name: 'Classic Blue Jeans',
    category: 'Men',
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop',
    description: 'Timeless denim jeans with perfect fit and durability. A wardrobe essential for every man.',
    features: [
      'Stretch denim',
      'Classic fit',
      'Durable construction',
      'Multiple pockets'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 6,
    name: 'Athletic Track Pants',
    category: 'Men',
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop',
    description: 'Comfortable track pants ideal for workouts, jogging, or casual lounging.',
    features: [
      'Moisture-wicking',
      'Elastic waistband',
      'Side pockets',
      'Tapered fit'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 14,
    name: 'Formal Dress Shirt',
    category: 'Men',
    price: 1299,
    originalPrice: 2299,
    discount: 43,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop',
    description: 'Elegant formal shirt perfect for office wear and special occasions.',
    features: [
      'Wrinkle-free fabric',
      'Regular fit',
      'Easy care',
      'Classic collar'
    ],
    inStock: true,
    badge: 'New'
  }
];

// ═══════════════════════════════════════════════════════════════
// 👗 WOMEN'S FASHION CATEGORY
// ═══════════════════════════════════════════════════════════════

const womensFashionProducts = [
  {
    id: 7,
    name: 'Elegant Black Shirt',
    category: 'Women',
    price: 799,
    originalPrice: 1499,
    discount: 47,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&h=500&fit=crop',
    description: 'Sophisticated black shirt that transitions seamlessly from office to evening wear.',
    features: [
      'Premium fabric',
      'Versatile design',
      'Comfortable fit',
      'Easy to style'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 10,
    name: 'Designer Handbag',
    category: 'Women',
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
    description: 'Stylish and spacious handbag with multiple compartments for organized storage.',
    features: [
      'Premium vegan leather',
      'Multiple compartments',
      'Adjustable strap',
      'Elegant design'
    ],
    inStock: true,
    badge: 'Limited'
  },
  {
    id: 15,
    name: 'Summer Floral Dress',
    category: 'Women',
    price: 1499,
    originalPrice: 2799,
    discount: 46,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=500&fit=crop',
    description: 'Beautiful floral dress perfect for summer outings and special occasions.',
    features: [
      'Lightweight fabric',
      'Floral print',
      'Comfortable fit',
      'Machine washable'
    ],
    inStock: true,
    badge: 'New'
  },
  {
    id: 16,
    name: 'Leather Jacket',
    category: 'Women',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    description: 'Classic leather jacket that adds edge to any outfit.',
    features: [
      'Genuine leather',
      'Multiple pockets',
      'Durable zippers',
      'Timeless design'
    ],
    inStock: true,
    badge: 'Bestseller'
  }
];

// ═══════════════════════════════════════════════════════════════
// 👟 FOOTWEAR CATEGORY
// ═══════════════════════════════════════════════════════════════

const footwearProducts = [
  {
    id: 3,
    name: 'Performance Sports Shoes',
    category: 'Footwear',
    price: 1999,
    originalPrice: 3499,
    discount: 43,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    description: 'High-performance athletic shoes designed for maximum comfort and support during intense workouts.',
    features: [
      'Cushioned sole',
      'Breathable mesh',
      'Lightweight design',
      'Anti-slip grip'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 8,
    name: 'Stylish Pink Sneakers',
    category: 'Footwear',
    price: 1599,
    originalPrice: 2999,
    discount: 47,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=500&fit=crop',
    description: 'Trendy pink sneakers that combine style with comfort for everyday wear.',
    features: [
      'Fashionable design',
      'Comfortable insole',
      'Durable rubber sole',
      'Versatile styling'
    ],
    inStock: true,
    badge: 'New'
  },
  {
    id: 17,
    name: 'Casual Canvas Shoes',
    category: 'Footwear',
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop',
    description: 'Classic canvas shoes perfect for casual outings and everyday comfort.',
    features: [
      'Canvas upper',
      'Rubber sole',
      'Lace-up closure',
      'Lightweight'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 18,
    name: 'Running Shoes Pro',
    category: 'Footwear',
    price: 2499,
    originalPrice: 4499,
    discount: 44,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&h=500&fit=crop',
    description: 'Professional running shoes with advanced cushioning technology.',
    features: [
      'Advanced cushioning',
      'Energy return foam',
      'Breathable mesh upper',
      'Reflective details'
    ],
    inStock: true,
    badge: 'Bestseller'
  }
];

// ═══════════════════════════════════════════════════════════════
// 🍳 KITCHEN & HOME CATEGORY
// ═══════════════════════════════════════════════════════════════

const kitchenProducts = [
  {
    id: 11,
    name: 'Professional Knife Set',
    category: 'Kitchen',
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&h=500&fit=crop',
    description: 'Complete set of professional-grade kitchen knives for all your culinary needs.',
    features: [
      'Stainless steel blades',
      'Ergonomic handles',
      'Includes knife block',
      'Sharp and durable'
    ],
    inStock: true,
    badge: 'Bestseller'
  },
  {
    id: 12,
    name: 'Premium Non-Stick Pan',
    category: 'Kitchen',
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1556908153-49aae91ca47e?w=500&h=500&fit=crop',
    description: 'High-quality non-stick frying pan that makes cooking and cleaning effortless.',
    features: [
      'Non-stick coating',
      'Even heat distribution',
      'Scratch resistant',
      'Dishwasher safe'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 19,
    name: 'Electric Kettle',
    category: 'Kitchen',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=500&h=500&fit=crop',
    description: 'Fast-boiling electric kettle with automatic shut-off for safety.',
    features: [
      'Rapid boiling',
      'Auto shut-off',
      '1.5L capacity',
      'Stainless steel body'
    ],
    inStock: true,
    badge: 'New'
  },
  {
    id: 20,
    name: 'Blender Pro 3000',
    category: 'Kitchen',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop',
    description: 'Powerful blender for smoothies, soups, and more.',
    features: [
      '1000W motor',
      'Multiple speed settings',
      'Large capacity jar',
      'Pulse function'
    ],
    inStock: true,
    badge: 'Bestseller'
  }
];

// ═══════════════════════════════════════════════════════════════
// 📊 COMBINE ALL PRODUCTS
// ═══════════════════════════════════════════════════════════════

const allProducts = [
  ...electronicsProducts,
  ...mensFashionProducts,
  ...womensFashionProducts,
  ...footwearProducts,
  ...kitchenProducts
];

// ═══════════════════════════════════════════════════════════════
// 🎯 HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Filtered products
 */
export const getProductsByCategory = (category) => {
  if (category === 'all' || !category) return allProducts;
  return allProducts.filter(
    product => product.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {Object|undefined} Product object
 */
export const getProductById = (id) => {
  return allProducts.find(product => product.id === id);
};

/**
 * Search products by name
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
export const searchProducts = (query) => {
  if (!query) return allProducts;
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

/**
 * Get featured/bestseller products
 * @returns {Array} Featured products
 */
export const getFeaturedProducts = () => {
  return allProducts.filter(product => product.badge === 'Bestseller');
};

/**
 * Get new products
 * @returns {Array} New products
 */
export const getNewProducts = () => {
  return allProducts.filter(product => product.badge === 'New');
};

/**
 * Get products on sale (with discount)
 * @returns {Array} Discounted products
 */
export const getSaleProducts = () => {
  return allProducts.filter(product => product.discount >= 40);
};

/**
 * Get product statistics
 * @returns {Object} Stats object
 */
export const getProductStats = () => {
  return {
    total: allProducts.length,
    categories: {
      electronics: electronicsProducts.length,
      men: mensFashionProducts.length,
      women: womensFashionProducts.length,
      footwear: footwearProducts.length,
      kitchen: kitchenProducts.length
    },
    averageDiscount: Math.round(
      allProducts.reduce((sum, p) => sum + p.discount, 0) / allProducts.length
    ),
    inStock: allProducts.filter(p => p.inStock).length
  };
};

// ═══════════════════════════════════════════════════════════════
// 📤 EXPORTS
// ═══════════════════════════════════════════════════════════════

export {
  electronicsProducts,
  mensFashionProducts,
  womensFashionProducts,
  footwearProducts,
  kitchenProducts
};

export default allProducts;