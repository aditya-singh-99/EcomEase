import React from 'react';

export default function InfiniteCarousel() {
  const brands = [
    { name: 'Amazon Prime', category: 'Marketplace & FBA', logo: '/header-img/Amazon-logo.webp' },
    { name: 'Flipkart', category: 'National Reach & FBF', logo: '/header-img/Flipkart-logo.jpg' },
    { name: 'Meesho', category: 'Tier 2 & 3 Bharat Scale', logo: '/header-img/Meesho Logo.webp' },
    { name: 'Myntra', category: 'Fashion & Lifestyle', logo: '/header-img/Myntra-logo.png' },
    { name: 'Blinkit', category: 'Quick Commerce 10m', logo: '/header-img/Blinkit-logo.svg' },
    { name: 'Zepto', category: 'Dark Stores Network', logo: '/header-img/zepto-logo.webp' },
    { name: 'JioMart', category: 'Reliance Retail Ecosystem', logo: '/JioMart_Logo.png' },
    { name: 'Nykaa', category: 'Beauty & Wellness', logo: '/header-img/nykaa-logo.png' },
    { name: 'Ajio', category: 'Fashion Trends', logo: '/header-img/Ajio logo.png' },
    { name: 'Tata CliQ', category: 'Omnichannel Commerce', logo: '/header-img/Tata-Cliq.webp' },
    { name: 'FirstCry', category: 'Mom & Baby Vertical', logo: '/FirstCry_Logo.png' },
    { name: 'Shopify', category: 'D2C Storefronts', logo: '/header-img/shopify_logo.png' },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full py-8 sm:py-10 overflow-hidden bg-slate-950/70 border-y border-white/10">
      {/* Edge Blur Mask for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070A12] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070A12] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold uppercase tracking-widest text-[11px] text-slate-300">
          Integrated Marketplace Ecosystem
        </span>
        <span className="hidden sm:inline-block text-slate-300 font-mono text-[11px]">
          Continuous Real-time Channel Sync
        </span>
      </div>

      {/* The Infinite Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2.5 sm:mx-3 py-2.5 px-4 sm:px-5 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all flex items-center gap-3.5 shadow-xl group"
          >
            {/* Real Official Company Logo Tile */}
            <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-200">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain rounded-sm"
              />
            </div>

            {/* Clean Brand Name & Category (No rectangle tags) */}
            <div>
              <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                {item.name}
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-tight font-medium">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
