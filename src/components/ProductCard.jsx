import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        bg-white 
        rounded-xl 
        shadow-md 
        overflow-hidden 
        flex flex-col 
        transition-all 
        duration-300 
        hover:shadow-2xl 
        hover:-translate-y-2
        group
      "
    >
      {/* ✅ IMAGE ZOOM ON HOVER (FULL IMAGE, NO CUTTING) */}
      <div className="overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-52 
            w-full 
            object-contain
            transition-transform 
            duration-500 
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">

        {/* ✅ PRODUCT NAME (BIGGER + SLIGHT COLOR ON HOVER) */}
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition">
          {product.name}
        </h3>

        {/* ✅ CATEGORY */}
        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        {/* ✅ PRICE (BIG & GREEN) */}
        <p className="text-xl font-bold text-green-600">
          ₹{product.price}
        </p>

        {/* ✅ BUTTONS */}
        <div className="mt-auto flex gap-3 pt-3">
          <Link
            to={`/product/${product.id}`}
            className="
              text-sm 
              flex-1 
              border 
              border-gray-300 
              rounded-md 
              py-2 
              text-center 
              hover:bg-gray-100 
              transition
            "
          >
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="
              text-sm 
              flex-1 
              bg-blue-600 
              text-white 
              rounded-md 
              py-2 
              hover:bg-blue-700 
              transition
            "
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
