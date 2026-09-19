import React from 'react';
import { Star, TrendingUp, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function InfiniteCarousel() {
  const brands = [
    { name: 'Amazon Prime', category: 'Global & India', badge: 'Tier 1 FC', logo: '/Amazon_Logo.png' },
    { name: 'Flipkart Assured', category: 'National Reach', badge: 'BBD Ready', logo: '/Flipkart_Logo.png' },
    { name: 'Meesho Mall', category: 'Tier 2 & 3 Bharat', badge: 'Zero Penalty', logo: '/Meesho_Logo.png' },
    { name: 'Myntra Studio', category: 'Fashion & Luxury', badge: 'High Margin', logo: '/Myntra_Logo.png' },
    { name: 'JioMart Retail', category: 'Grocery & FMCG', badge: 'Hyperlocal', logo: '/JioMart_Logo.png' },
    { name: 'FirstCry', category: 'Mom & Baby', badge: 'Vertical Leader', logo: '/FirstCry_Logo.png' },
    { name: 'Shiprocket 3PL', category: 'Automated Logistics', badge: '29K Pincodes', logo: '/Company_Logo.png' },
    { name: 'Blinkit / Zepto', category: 'Quick Commerce 10m', badge: 'Dark Stores', logo: '/Amazon_Logo.png' },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full py-10 overflow-hidden bg-slate-950/60 border-y border-white/5">
      {/* Edge Blur Mask for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#090D16] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#090D16] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold uppercase tracking-widest text-[11px] text-slate-300">
          Integrated Marketplace Ecosystem
        </span>
        <span className="hidden sm:inline-block text-slate-300 font-mono">
          Continuous Real-time Channel Sync
        </span>
      </div>

      {/* The Infinite Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3 p-3 sm:p-4 px-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-blue-500/50 hover:bg-slate-800/90 transition-all flex items-center gap-3.5 shadow-lg group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center backdrop-blur-md">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.name.charAt(0)}
              </span>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <span>{item.name}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-300 font-mono border border-blue-500/20">
                  {item.badge}
                </span>
              </div>
              <div className="text-[11px] text-slate-300 font-medium">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
