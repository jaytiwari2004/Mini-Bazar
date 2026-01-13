import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Eye, Star } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white rounded-[2rem] border border-zinc-100 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white rounded-full text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-red-600 rounded-full text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-xl shadow-red-200"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md border border-zinc-100 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-900 shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 px-2 py-1 bg-white/90 backdrop-blur-md rounded-lg flex items-center gap-1 shadow-sm border border-zinc-100">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] font-bold text-zinc-900">{product.rating || '4.5'}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-black text-zinc-900 leading-tight mb-4 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-zinc-900 tracking-tighter">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-400 line-through font-medium">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="text-xs font-black uppercase tracking-widest text-red-600 hover:text-yellow-600 transition-colors flex items-center gap-1 group/btn"
          >
            Buy Now
            <span className="w-4 h-[1px] bg-red-600 group-hover/btn:w-6 group-hover/btn:bg-yellow-600 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
