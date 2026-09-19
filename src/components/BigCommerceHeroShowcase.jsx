import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  Clock, 
  Package, 
  Share2, 
  Palette, 
  Briefcase, 
  Tag, 
  ChevronDown,
  Globe,
  ArrowUpRight
} from 'lucide-react';

export default function BigCommerceHeroShowcase() {
  const [activeItem, setActiveItem] = useState('Channels');
  const [seoOptimized, setSeoOptimized] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Outer Glow & Shadow Container */}
      <div className="relative rounded-2xl md:rounded-3xl p-2 sm:p-4 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.35)] overflow-hidden">
        
        {/* The Mockup Storefront Window */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10">
          
          {/* Top Storefront Header Bar */}
          <div className="h-12 px-4 sm:px-6 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-xs text-white z-20 relative">
            <div className="flex items-center gap-6">
              <span className="text-base font-serif font-black tracking-widest text-white">FORMA</span>
              <div className="hidden md:flex items-center gap-5 text-xs text-slate-300 font-medium">
                <span className="hover:text-white cursor-pointer transition-colors">Shop all</span>
                <span className="hover:text-white cursor-pointer transition-colors">New arrivals</span>
                <span className="hover:text-white cursor-pointer transition-colors">Pet friendly</span>
                <span className="hover:text-white cursor-pointer transition-colors">Blog</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <Search className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-4 h-4 hover:text-white transition-colors" />
                <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center">
                  1
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">English</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Hero Storefront Background Image with Overlay */}
          <div className="relative h-[340px] sm:h-[460px] md:h-[540px] w-full overflow-hidden">
            <img 
              src="/luxury_storefront_hero.jpg" 
              alt="Luxury eCommerce Storefront" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle cinematic gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"></div>

            {/* Overlaid Headline */}
            <div className="absolute top-12 sm:top-20 left-6 sm:left-12 max-w-sm sm:max-w-md z-10 pointer-events-none">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-medium tracking-tight leading-[1.1] drop-shadow-lg">
                {seoOptimized ? "Architectural Living. Scaled for Luxury Hospitality." : "Scaled for hospitality."}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-white/80 font-light drop-shadow-md">
                Custom furnishings synchronized across Amazon, Flipkart, and global D2C channels.
              </p>
            </div>

            {/* =========================================================================
                FLOATING ELEMENT 1: Multi-Region Flags (Top Left)
                ========================================================================= */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20 flex items-center gap-2 p-1.5 px-2.5 rounded-xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg text-sm transition-transform hover:scale-105 duration-200">
              <span title="India" className="text-base sm:text-lg">🇮🇳</span>
              <span title="United States" className="text-base sm:text-lg">🇺🇸</span>
              <span title="United Kingdom" className="text-base sm:text-lg">🇬🇧</span>
              <span title="European Union" className="text-base sm:text-lg">🇮🇹</span>
            </div>

            {/* =========================================================================
                FLOATING ELEMENT 2: AI SEO Prompt Tooltip (Bottom Left)
                ========================================================================= */}
            <div 
              onClick={() => setSeoOptimized(!seoOptimized)}
              className="absolute bottom-6 left-6 sm:bottom-12 sm:left-10 z-20 cursor-pointer p-3 sm:p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center gap-3 transition-all hover:scale-[1.02] duration-200 max-w-[280px] sm:max-w-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <span>Make this headline SEO-friendly</span>
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {seoOptimized ? "✓ Title algorithmically optimized" : "Click to test AI conversion boost"}
                </div>
              </div>
            </div>

            {/* =========================================================================
                FLOATING ELEMENT 3: Dashboard Popover Menu (Right Side with Mouse Cursor)
                ========================================================================= */}
            <div className="absolute top-12 right-4 sm:top-16 sm:right-8 z-20 w-48 sm:w-56 rounded-2xl p-3 sm:p-4 bg-slate-950/60 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-semibold text-slate-300">
                <span>Forma Dashboard</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="space-y-1 text-xs">
                <div 
                  onClick={() => setActiveItem('Orders')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeItem === 'Orders' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Orders</span>
                </div>

                <div 
                  onClick={() => setActiveItem('Products')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeItem === 'Products' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Products</span>
                </div>

                {/* The "Channels" highlighted item with realistic cursor */}
                <div className="relative">
                  <div 
                    onClick={() => setActiveItem('Channels')}
                    className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeItem === 'Channels' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Channels</span>
                  </div>

                  {/* Realistic Mouse Pointer Icon hovering on Channels */}
                  {activeItem === 'Channels' && (
                    <div className="absolute -right-3 -bottom-3 pointer-events-none drop-shadow-lg">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2L9 21L12.5 13.5L20 11L4 2Z" fill="white" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div 
                  onClick={() => setActiveItem('Storefront Design')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeItem === 'Storefront Design' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Storefront Design</span>
                </div>

                <div 
                  onClick={() => setActiveItem('B2B Edition')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeItem === 'B2B Edition' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>B2B Edition</span>
                </div>

                <div 
                  onClick={() => setActiveItem('Marketing')}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    activeItem === 'Marketing' ? 'bg-white text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>Marketing</span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                FLOATING ELEMENT 4: Ecosystem Badges (Bottom Right)
                ========================================================================= */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-2 p-2 px-3 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-xl">
              {/* Google */}
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-xs text-[#4285F4] shadow-sm">
                G
              </div>
              {/* Meta */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center font-black text-xs text-white shadow-sm">
                ∞
              </div>
              {/* Pinterest */}
              <div className="w-6 h-6 rounded-full bg-[#E60023] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                P
              </div>
              {/* AI Hub */}
              <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-xs text-white shadow-sm">
                ✦
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
