'use client';

import { useState } from 'react';
import Link from 'next/link';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    // Add your cart logic here
    console.log('Added to cart:', product);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.id}`} className="product-link">
        {/* Image Container */}
        <div className="image-container">
          {!imageLoaded && (
            <div className="image-skeleton"></div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`product-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="discount-badge">
              -{product.discount}%
            </div>
          )}

          {/* Quick Actions */}
          <div className={`quick-actions ${isHovered ? 'visible' : ''}`}>
            <button className="quick-btn" title="Quick View">
              👁️
            </button>
            <button className="quick-btn" title="Add to Wishlist">
              ❤️
            </button>
          </div>

          {/* Overlay */}
          <div className={`image-overlay ${isHovered ? 'visible' : ''}`}></div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-name">{product.name}</h3>
          
          {/* Rating */}
          {product.rating && (
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-value">({product.rating})</span>
            </div>
          )}

          {/* Price Section */}
          <div className="price-section">
            <div className="price-container">
              <span className="current-price">₹{product.price}</span>
              {product.originalPrice && (
                <span className="original-price">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions">
          <button className="view-btn">
            View Details
          </button>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <span className="btn-icon">🛒</span>
            <span className="btn-text">Add to Cart</span>
          </button>
        </div>
      </Link>

      <style jsx>{`
        .product-card {
          position: relative;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid #f1f5f9;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          border-color: #ec4899;
        }

        .product-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* Image Container */
        .image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          overflow: hidden;
        }

        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #f1f5f9 0%,
            #e2e8f0 50%,
            #f1f5f9 100%
          );
          background-size: 200% 100%;
          animation: shimmerSkeleton 1.5s infinite;
        }

        @keyframes shimmerSkeleton {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .product-image.loaded {
          opacity: 1;
        }

        .product-card:hover .product-image {
          transform: scale(1.08);
        }

        .discount-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
          z-index: 2;
        }

        .quick-actions {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          gap: 0.5rem;
          z-index: 2;
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.3s ease;
        }

        .quick-actions.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .quick-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .quick-btn:hover {
          transform: scale(1.1);
          background: white;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-overlay.visible {
          opacity: 1;
        }

        /* Product Info */
        .product-info {
          padding: 1.25rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .product-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #ec4899;
          margin-bottom: 0.25rem;
        }

        .product-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .stars {
          color: #fbbf24;
          font-size: 0.875rem;
          letter-spacing: 2px;
        }

        .rating-value {
          color: #64748b;
          font-weight: 500;
        }

        .price-section {
          margin-top: auto;
          padding-top: 0.75rem;
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .current-price {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          font-family: 'Outfit', sans-serif;
        }

        .original-price {
          font-size: 1rem;
          color: #94a3b8;
          text-decoration: line-through;
          font-weight: 500;
        }

        /* Action Buttons */
        .card-actions {
          padding: 0 1.25rem 1.25rem;
          display: flex;
          gap: 0.75rem;
        }

        .view-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.9375rem;
          color: #475569;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .add-to-cart-btn {
          flex: 2;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
        }

        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4);
        }

        .btn-icon {
          font-size: 1rem;
        }

        .btn-text {
          font-size: 0.9375rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .product-info {
            padding: 1rem;
          }

          .product-name {
            font-size: 1rem;
          }

          .current-price {
            font-size: 1.25rem;
          }

          .card-actions {
            padding: 0 1rem 1rem;
            flex-direction: column;
          }

          .view-btn,
          .add-to-cart-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .quick-actions {
            display: none;
          }

          .discount-badge {
            font-size: 0.625rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductCard;