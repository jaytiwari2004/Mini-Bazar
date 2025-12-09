import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { useEffect, useState } from "react";

function Navbar() {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-yellow-100/90 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-4">

        {/* ✅ LOGO (RED + YELLOW WITH HOVER SWAP + ZOOM) */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-wide transition duration-300 hover:scale-105"
        >
          <span className="text-red-600 hover:text-yellow-500 transition duration-300">
            Mini
          </span>
          <span className="ml-1 text-yellow-500 hover:text-red-600 transition duration-300">
            Bazar
          </span>
        </Link>

        {/* ✅ HOME */}
        <NavLink
          to="/"
          className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition"
        >
          Home
        </NavLink>

        {/* ✅ PRODUCTS DROPDOWN */}
        <div className="relative group">
          <span className="text-lg font-semibold text-gray-700 cursor-pointer hover:text-blue-500 transition">
            Products
          </span>

          <div className="absolute hidden group-hover:block top-10 left-0 w-56 bg-white shadow-lg rounded-md border">
            <Link className="block px-4 py-2 hover:bg-gray-100" to="#">👔 Men</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="#">👗 Women</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="#">🍳 Kitchen</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="#">📱 Electronics</Link>
            <Link className="block px-4 py-2 hover:bg-gray-100" to="#">🧴 Skin Care</Link>
          </div>
        </div>

        {/* ✅ SEARCH BAR (LIVE SEARCH CONNECTED TO HOME) */}
        <div className="flex-1">
          <div className="flex items-center bg-gray-100 rounded-full px-5 py-3">
            <svg
              className="w-6 h-6 text-gray-500 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-4.35-4.35m1.6-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none text-base w-full"
            />
          </div>
        </div>

        {/* ✅ RIGHT MENU */}
        <div className="flex items-center gap-8 text-lg font-semibold">

          {/* ✅ LOGIN */}
          <div className="relative group cursor-pointer flex items-center gap-2 text-gray-700 hover:text-blue-500 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Login</span>

            <div className="absolute hidden group-hover:block right-0 top-10 w-44 bg-white border rounded shadow-lg text-gray-700">
              <Link className="block px-4 py-2 hover:bg-gray-100" to="#">My Profile</Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="#">Orders</Link>
              <Link className="block px-4 py-2 hover:bg-gray-100" to="#">Logout</Link>
            </div>
          </div>

          {/* ✅ CART */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-gray-700 hover:text-blue-500 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M10 21a1 1 0 102 0 1 1 0 00-2 0zm7 0a1 1 0 102 0 1 1 0 00-2 0z"/>
            </svg>
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* ✅ SELLER */}
          <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-500 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3z" />
              <path d="M9 3v18M15 3v18" />
            </svg>
            <span>Become a Seller</span>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
