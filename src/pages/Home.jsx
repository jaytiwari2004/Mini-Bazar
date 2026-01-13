'use client';

import { useState, useEffect } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { useSearch } from '../context/SearchContext';

function Home() {
  const { searchTerm } = useSearch();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '⚡' },
    { id: 'men', name: 'Men Fashion', icon: '👔' },
    { id: 'footwear', name: 'Footwear', icon: '👟' },
    { id: 'women', name: 'Women Fashion', icon: '👗' },
    { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' ||
      product.category?.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-xl shadow-zinc-200/50 border border-zinc-100 mb-8 animate-bounce-slow">
            <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">The New Standard of Shopping</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
            EVERYTHING YOU<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 bg-[length:200%_auto] animate-shimmer">DESIRE.</span>
            <span className="text-red-600"> NOW.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 mb-12 font-medium leading-relaxed">
            Welcome to <span className="text-zinc-900 font-bold">Mini Bazar</span>. We're a next-gen collective
            bringing you premium essentials, high-end fashion, and the latest tech with a
            touch of unconventional luxury.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="group relative px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-zinc-400">
              <span className="relative z-10">Start Exploring</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-100 rounded-2xl font-bold text-lg transition-all hover:bg-zinc-50 hover:border-zinc-200">
              New Arrivals
            </button>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-zinc-100 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-zinc-900">2.5k+</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Premium Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-zinc-900">10k+</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Founding Members</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-zinc-900">24h</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">Fast delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-zinc-900">4.9/5</span>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">User Rating</span>
            </div>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-1/4 right-[10%] hidden lg:block animate-float animation-delay-1000">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center rotate-12 border border-zinc-50">
            <span className="text-2xl">⚡</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[10%] hidden lg:block animate-float">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center -rotate-12 border border-zinc-50">
            <span className="text-3xl">🛍️</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mt-2">SHOP BY CATEGORY</h2>
          </div>
          <div className="h-[2px] flex-1 bg-zinc-100 mx-8 hidden md:block mb-3"></div>
          <button className="text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase tracking-widest">View All Categories</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative p-8 rounded-3xl transition-all duration-500 ${activeCategory === category.id
                ? 'bg-zinc-900 text-white scale-105 shadow-2xl'
                : 'bg-white text-zinc-500 hover:bg-zinc-50 hover:scale-105 border border-zinc-100'
                }`}
            >
              <span className={`text-4xl mb-4 block transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12`}>
                {category.icon}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">{category.name}</span>
              {activeCategory === category.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Premium Collection</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 mt-2">
                {searchTerm
                  ? `SEARCH: "${searchTerm}"`
                  : activeCategory === 'all'
                    ? 'CHOSEN FOR YOU'
                    : `${categories.find(c => c.id === activeCategory)?.name.toUpperCase()}`}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-400">
              <span className="w-12 h-[1px] bg-zinc-200"></span>
              Curated Just Now
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-40 bg-zinc-50 rounded-[4rem] border-2 border-dashed border-zinc-100">
              <span className="text-6xl block mb-6">🏜️</span>
              <h3 className="text-2xl font-black text-zinc-900 mb-2">NOTHING HERE YET</h3>
              <p className="text-zinc-500 mb-8 max-w-sm mx-auto">We couldn't find anything matching your search. Try another term or browse our collections.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold"
              >
                BACK TO EXPLORING
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features - Premium Footer CTA */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-red-600 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📦</div>
              <h3 className="text-xl font-bold">Priority Shipping</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Fast, tracked, and insured delivery to your doorstep within 24 hours.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">💳</div>
              <h3 className="text-xl font-bold">Encrypted Checkout</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Multi-layer security protocols ensuring your data is always protected.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">🔄</div>
              <h3 className="text-xl font-bold">Seamless Returns</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Not completely satisfied? Our returns process is as simple as it gets.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">📞</div>
              <h3 className="text-xl font-bold">Dedicated Concierge</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Our support team is available around the clock for any assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Outfit', sans-serif;
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-shimmer {
          animation: shimmer 4s ease infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(18deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}

export default Home;