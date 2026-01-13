import { useState, useEffect } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sparkles, ArrowRight, Zap, Clock } from 'lucide-react';

function NewArrivals() {
    const [mounted, setMounted] = useState(false);

    // Filter for 'new' products - in a real app this might be by date
    // For now, we'll take a subset or check a 'isNew' flag
    const newProducts = products.slice(0, 8); // Showing first 8 as "new"

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafafa] pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-zinc-900">
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover opacity-40"
                        alt="New Arrivals"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">The Fresh Drop</span>
                    </div>
                    <h1 className={`text-6xl md:text-8xl font-black tracking-tighter text-white mb-6 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        NEW <span className="text-red-600">ARRIVALS</span>
                    </h1>

                    {/* Countdown Timer Styling */}
                    <div className={`flex items-center justify-center gap-4 md:gap-8 mb-10 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        {[
                            { label: 'Days', value: '04' },
                            { label: 'Hours', value: '12' },
                            { label: 'Mins', value: '45' },
                            { label: 'Secs', value: '22' },
                        ].map((unit, i) => (
                            <div key={unit.label} className="flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black text-white shadow-2xl">
                                    {unit.value}
                                </div>
                                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-2">{unit.label}</span>
                            </div>
                        ))}
                    </div>

                    <p className={`max-w-2xl mx-auto text-zinc-300 font-medium text-lg leading-relaxed transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Explore our latest drop. Experimental designs, premium manufacturing,
                        and the season's most anticipated essentials.
                    </p>
                </div>
            </section>

            {/* Exclusive Offer Banner */}
            <section className="max-w-7xl mx-auto px-4 mt-20">
                <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-yellow-500 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="relative z-10 text-center md:text-left">
                        <span className="bg-black/20 backdrop-blur-sm text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">Limited Time Bonus</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tighter">CLAIM YOUR NEW ARRIVAL <br />WELCOME VOUCHER</h2>
                        <p className="text-white/80 font-medium mt-4 max-w-lg">Get an extra 15% off on your first order from the New Arrivals collection. Use code at checkout.</p>
                    </div>
                    <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl flex flex-col items-center min-w-[200px]">
                        <span className="text-zinc-400 text-[10px] font-bold uppercase mb-1">PROMO CODE</span>
                        <span className="text-2xl font-black text-zinc-900 tracking-tighter">NEWSEASON15</span>
                        <button className="mt-4 w-full py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                            Copy Code
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats / Info Bar */}
            <div className="max-w-7xl mx-auto px-4 mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-black text-zinc-900 uppercase text-xs tracking-widest">Limited Drops</h3>
                            <p className="text-zinc-500 text-xs font-medium">Resetting every Friday</p>
                        </div>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-[2rem] shadow-xl shadow-zinc-900/20 flex items-center gap-4 text-white">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-yellow-400">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-black uppercase text-xs tracking-widest">Just In</h3>
                            <p className="text-zinc-400 text-xs font-medium">Added 2 hours ago</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-200 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="font-black text-zinc-900 uppercase text-xs tracking-widest">Growing Interest</h3>
                            <p className="text-zinc-500 text-xs font-medium">400+ people viewing now</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl font-black tracking-tighter text-zinc-900 uppercase">CURATED DROPS</h2>
                        <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full animate-pulse">LIVE</span>
                    </div>
                    <div className="h-[2px] flex-1 bg-zinc-100 mx-10 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-zinc-500 font-bold text-xs uppercase tracking-widest">
                        Sort by: <span className="text-zinc-900 border-b border-zinc-900 cursor-pointer">Newest</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {newProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`transition-all duration-700 delay-[${index * 100}ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        >
                            <ProductCard product={{ ...product, badge: 'New' }} />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="group relative px-10 py-5 bg-zinc-900 text-white rounded-[2rem] font-black uppercase tracking-widest flex items-center gap-4 mx-auto hover:bg-red-600 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                        View All New Items
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </button>
                </div>
            </section>

            {/* Lookbook Section */}
            <section className="py-24 bg-zinc-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden group border border-zinc-200">
                            <img
                                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                alt="Lookbook"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <span className="text-xs font-black uppercase tracking-[0.3em] mb-2 block">Vanguard Style</span>
                                <h3 className="text-4xl font-black tracking-tighter">THE WINTER <br />EDITORIAL '26</h3>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">Behind the Design</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-tight">CRAFTED FOR THE <br /><span className="text-zinc-400 italic font-serif">Unconventional.</span></h2>
                            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                                Our latest collection explores the intersection of raw textures and digital aesthetics.
                                Each piece is engineered for durability while maintaining a silhouette that
                                challenges traditional luxury standards.
                            </p>
                            <div className="flex items-center gap-10 py-6 border-y border-zinc-200">
                                <div>
                                    <div className="text-2xl font-black text-zinc-900">100%</div>
                                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">GOTS Organic</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-zinc-900">Handmade</div>
                                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">In Milan</div>
                                </div>
                            </div>
                            <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-900 group">
                                Read the Brand Story
                                <span className="w-10 h-[1px] bg-zinc-900 group-hover:w-16 transition-all duration-300"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Invite Only Newsletter */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="w-20 h-20 bg-zinc-900 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl text-white">
                        <Sparkles className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 mb-6">DON'T MISS THE <br /><span className="text-red-600">NEXT DROP.</span></h2>
                    <p className="text-zinc-500 text-xl font-medium mb-12">Get exclusive early access to limited releases and founding member pricing.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto p-2 bg-[#fafafa] rounded-[2.5rem] border border-zinc-100 shadow-xl">
                        <input
                            type="email"
                            placeholder="YOUR EMAIL ADRESS"
                            className="flex-1 bg-transparent px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none"
                        />
                        <button className="px-10 py-4 bg-zinc-900 text-white rounded-[2rem] text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-zinc-200">
                            Join the List
                        </button>
                    </div>
                    <p className="mt-8 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">🔒 Exclusive Invites only. No spam.</p>
                </div>
            </section>

            {/* Floating Aesthetic Notification */}
            <div className={`fixed bottom-10 right-10 z-[100] bg-white rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100" alt="Product" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-[10px] font-black text-zinc-900 leading-none mb-1">RECENTLY PURCHASED</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none">Someone in Mumbai just bought this.</p>
                </div>
                <button className="p-2 text-zinc-300 hover:text-red-600 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default NewArrivals;
