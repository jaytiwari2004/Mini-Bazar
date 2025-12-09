import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center mt-6">

      {/* ✅ FULL IMAGE VIEW (NO CUTTING) */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="
            max-h-[420px]
            w-full
            object-contain
          "
        />
      </div>

      {/* ✅ PRODUCT INFO */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-green-600">
          ₹{product.price}
        </p>

        <p className="text-gray-700">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;
