import { useCart } from "../context/CartContext.jsx";

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Add some products!</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold mb-2">Your Cart</h1>
      <ul className="space-y-3">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-lg shadow-sm p-3 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-gray-500">
                Qty: {item.qty} × ₹{item.price}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-bold">
                ₹{item.price * item.qty}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold">Total: ₹{totalPrice}</p>
        <div className="flex gap-2">
          <button
            onClick={clearCart}
            className="text-xs border border-gray-300 rounded-md px-3 py-1"
          >
            Clear Cart
          </button>
          <button className="text-xs bg-green-600 text-white rounded-md px-3 py-1">
            Checkout (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
