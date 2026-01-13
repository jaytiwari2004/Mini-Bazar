import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  Heart,
  LayoutGrid,
  Zap,
  Package,
  ArrowRight
} from "lucide-react";

const Navbar = () => {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Limited Edition", path: "/limited" },
  ];

  const categories = [
    { name: "Men's Luxury", icon: <Zap className="w-5 h-5 text-amber-500" />, desc: "Premium tailoring and essentials" },
    { name: "Women's Couture", icon: <Heart className="w-5 h-5 text-rose-500" />, desc: "Designer collections and accessories" },
    { name: "Home & Living", icon: <LayoutGrid className="w-5 h-5 text-indigo-500" />, desc: "Aesthetic furniture and decor" },
    { name: "Tech & Gadgets", icon: <Package className="w-5 h-5 text-blue-500" />, desc: "High-performance electronics" },
  ];

  const newArrivalsContent = {
    title: "Fresh Drops",
    subtitle: "Just landed in our store",
    sections: [
      {
        title: "By Department",
        links: ["Men's Fashion", "Women's Collection", "Smart Tech", "Luxury Accessories"]
      },
      {
        title: "Trending Now",
        links: ["Weekly Best Sellers", "Limited Drops", "Eco-Friendly Line", "Minimalist Basics"]
      }
    ],
    featured: {
      title: "Winter Fusion '26",
      desc: "Our latest experimental collection is now live.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400",
      buttonText: "Explore Collection"
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${scrolled
          ? "bg-white/95 backdrop-blur-md border-zinc-200/60 py-2 shadow-sm"
          : "bg-white border-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between gap-10">

            {/* Logo */}
            <Link to="/" className="relative flex items-center group">
              <span className="text-2xl font-black tracking-tighter text-yellow-400 hover:text-red-600 transition-colors duration-300 cursor-pointer">MINI</span>
              <span className="text-2xl font-black tracking-tighter text-red-600 hover:text-yellow-400 ml-1 transition-colors duration-300 cursor-pointer">BAZAR</span>
              <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-10">
              <div className="relative" onMouseEnter={() => setActiveDropdown('categories')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-zinc-500 hover:text-red-600 transition-colors">
                  Explore
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'categories' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[600px] bg-white rounded-3xl shadow-2xl border border-zinc-100 p-8 grid grid-cols-2 gap-6"
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={`/category/${cat.name.toLowerCase()}`}
                          className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-50 transition-colors"
                        >
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {cat.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-zinc-900 group-hover:text-red-600 flex items-center gap-2">
                              {cat.name}
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </p>
                            <p className="text-xs text-zinc-500 mt-1">{cat.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-red-600 ${isActive ? "text-red-600" : "text-zinc-500"
                    }`
                  }
                >
                  {link.name}
                  {link.name === "New Arrivals" && (
                    <span className="absolute -top-3 -right-6 px-1.5 py-0.5 bg-yellow-400 text-[8px] text-zinc-900 rounded-full flex items-center gap-1 shadow-sm border border-yellow-200 animate-bounce-slow">
                      <Zap className="w-2 h-2" />
                      HOT
                    </span>
                  )}
                  {link.name === "Limited Edition" && (
                    <span className="absolute -top-1 -right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Search, Cart, User */}
            <div className="flex-1 max-w-sm hidden lg:block">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Searching for high-end fashion..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-zinc-100/80 border-none rounded-2xl pl-11 pr-4 py-2.5 text-sm font-medium placeholder:text-zinc-400 focus:ring-2 focus:ring-red-100 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-5">
              <button className="p-2 text-zinc-500 hover:text-red-600 transition-colors relative group">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-900 text-[10px] text-white flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform font-bold">0</span>
              </button>

              <Link to="/cart" className="p-2 text-zinc-500 hover:text-red-600 transition-colors relative">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-[10px] text-white flex items-center justify-center rounded-full font-bold shadow-lg shadow-red-200">
                    {cartCount}
                  </span>
                )}
              </Link>

              <div className="relative group hidden md:block">
                <button className="p-1 border-2 border-transparent hover:border-red-600 rounded-full transition-all duration-300">
                  <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-600 overflow-hidden">
                    <User className="w-5 h-5" />
                  </div>
                </button>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-xl transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full max-w-[400px] bg-white z-[201] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <span className="text-xl font-black text-yellow-400 hover:text-red-600 transition-colors duration-300">MINI</span>
                  <span className="text-xl font-black text-red-600 ml-1 hover:text-yellow-400 transition-colors duration-300">BAZAR</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-4 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-4xl font-bold tracking-tighter text-zinc-900 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-8 border-t border-zinc-100 mt-8 space-y-6">
                  {categories.map((cat) => (
                    <Link key={cat.name} to={`/category/${cat.name.toLowerCase()}`} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center">{cat.icon}</div>
                      <span className="font-bold text-zinc-600 group-hover:text-red-600 transition-colors">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="mt-auto pt-8 border-t border-zinc-100">
                <button className="w-full h-14 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-xl shadow-zinc-200">
                  Account Luxury Member
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-[74px] md:h-[88px]"></div>
    </>
  );
};

export default Navbar;
