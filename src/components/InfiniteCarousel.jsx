import React from 'react';

export default function InfiniteCarousel() {
  const partnerBadges = [
    { 
      name: 'Amazon SPN', 
      role: 'Solution Provider Network', 
      logo: '/partner-logos/amazon-spn.jpg',
      highlight: 'Tier-1 Partner'
    },
    { 
      name: 'Flipkart Partner Services', 
      role: 'National Marketplace Partner', 
      logo: '/partner-logos/flipkart-partner-services.jpg',
      highlight: 'Certified'
    },
    { 
      name: 'Amazon Ads', 
      role: 'Verified Partner Agency', 
      logo: '/partner-logos/amazon-ads-verified-partner.jpg',
      highlight: 'High ROAS'
    },
    { 
      name: 'Meta Business Partner', 
      role: 'D2C & Social Commerce', 
      logo: '/partner-logos/meta-business-partner.png',
      highlight: 'Agency Tier'
    },
    { 
      name: 'Google Ads', 
      role: 'Certified Partner', 
      logo: '/partner-logos/google-ads-certified-partner.png',
      highlight: 'PMax & Search'
    },
    { 
      name: 'Shopify Partner', 
      role: 'Certified Storefront Partner', 
      logo: '/partner-logos/shopify-certified-partner.png',
      highlight: 'Certified'
    },
    { 
      name: 'Amazon Global Selling', 
      role: 'Solution Provider Network', 
      logo: '/partner-logos/amazon-global-selling-spn.jpg',
      highlight: 'Cross-Border'
    },
    { 
      name: 'JioMart Digital', 
      role: 'Reliance Retail Partner', 
      logo: '/partner-logos/jiomart-digital-partner.jpg',
      highlight: 'Grocery & FMCG'
    },
    { 
      name: 'Alibaba.com', 
      role: 'Global Service Partner', 
      logo: '/partner-logos/alibaba-global-service-partner.png',
      highlight: 'B2B Export'
    },
    { 
      name: 'AWS Partner Network', 
      role: 'Cloud Infrastructure', 
      logo: '/partner-logos/aws-partner-network.jpg',
      highlight: 'APN Network'
    },
    { 
      name: 'eBay Partner Network', 
      role: 'Cross-Border Global Trade', 
      logo: '/partner-logos/ebay-partner-network.jpg',
      highlight: 'Global Reach'
    },
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...partnerBadges, ...partnerBadges, ...partnerBadges];

  return (
    <div className="relative w-full py-8 sm:py-10 overflow-hidden bg-slate-950/80 border-y border-white/10">
      {/* Edge Blur Mask for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#070A12] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#070A12] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold uppercase tracking-widest text-[11px] text-slate-300">
            Official Channel & Accredited Partner Network
          </span>
        </div>
        <span className="hidden sm:inline-block text-cyan-400 font-mono text-[11px]">
          11+ Certified Partner Accreditations
        </span>
      </div>

      {/* The Infinite Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-2.5 sm:mx-3 py-2 px-3.5 sm:px-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/90 transition-all flex items-center gap-3.5 shadow-xl group"
          >
            {/* Authentic Partner Badge / Logo Card */}
            <div className="w-14 h-11 sm:w-16 sm:h-12 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-200 group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Clean Brand Name & Designation */}
            <div className="pr-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {item.name}
                </span>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hidden sm:inline">
                  {item.highlight}
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5 leading-tight font-medium">
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
