import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ShoppingBag, 
  CheckCircle2, 
  Package, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Truck, 
  ArrowRight,
  Zap,
  Globe,
  DollarSign
} from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';

export default function BigCommerceHeroShowcase() {
  const [selectedChannel, setSelectedChannel] = useState('Amazon');
  const { ref, style, glare, handleMouseMove, handleMouseLeave, isTouch } = useTilt3D(5, 1.012);

  const channels = [
    {
      id: 'Amazon',
      name: 'Amazon India & Global',
      logo: '/Amazon_Logo.png',
      badge: 'FBA & Sponsored Ads',
      highlights: [
        'A+ EBC & Brand Store',
        'Listings ranking SEO',
        'ACOS Optimized PPC',
        'Complete Global launched'
      ],
      action: 'Listings, Pricing, Inventory & Promotions'
    },
    {
      id: 'Flipkart',
      name: 'Flipkart & Shopsy',
      logo: '/Flipkart_Logo.png',
      badge: 'FBF & Smart Fulfillment',
      highlights: [
        'F-Assured Badge Activation',
        'Sales days boost preparation',
        'PLA,PCA and Flipkart Google ads setup',
        'Listing quality SEO'
      ],
      action: 'Dock Scheduling & Order Processing'
    },
    {
      id: 'Meesho',
      name: 'Meesho India Marketplace',
      logo: '/Meesho_Logo.png',
      badge: 'Zero Commission Dominance',
      highlights: ['Tier-2/3 Catalog Discovery', 'RTO Mitigation Protocols', 'Next-Day Dispatch Setup', '360° Account Health Monitoring'],
      action: 'Catalog Ranking & Pricing Optimization'
    },
    {
      id: 'JioMart',
      name: 'JioMart Retail',
      logo: '/JioMart_Logo.png',
      badge: 'Reliance Retail Sync',
      highlights: ['Category & Brand Approvals', 'FMCG & Grocery Sync', 'Local Hyperlocal Logistics', 'Seller Account Health Protection'],
      action: 'Everyday Operations & Promotions'
    },
    {
      id: 'FirstCry',
      name: 'FirstCry Kids',
      logo: '/FirstCry_Logo.png',
      badge: 'Baby & Infant Category',
      highlights: ['Size & Age Variation Mapping', 'Brand Gateway Authorization', 'Category Approval Support', 'Safe-T Return Dispute Resolution'],
      action: 'Catalog Setup & Sponsored Ads'
    },
    {
      id: 'Myntra',
      name: 'Myntra Fashion',
      logo: '/Myntra_Logo.png',
      badge: 'Apparel & Lifestyle',
      highlights: ['High-Margin Fashion Ingestion', 'EORS Campaign Readiness', 'Lookbook & Infographics', 'Size Chart Attribute Structuring'],
      action: 'Seasonal Drop & Velocity Management'
    }
  ];

  const currentChannel = channels.find((c) => c.id === selectedChannel) || channels[0];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">
      {/* Outer Glow & Shadow Container with 3D Tilt */}
      <div 
        ref={ref}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl md:rounded-3xl p-3 sm:p-5 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden transition-all text-left"
      >
        {/* Specular glare overlay (Desktop only) */}
        {!isTouch && (
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 400px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`
            }}
          />
        )}
        
        {/* Command Center Terminal Window */}
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-slate-950 shadow-2xl border border-white/10 p-4 sm:p-8">
          
          {/* Top Bar with Channel Selector Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Multi-Channel eCommerce Operations Hub
              </span>
            </div>

            {/* Quick Marketplace Switcher */}
            <div className="flex flex-wrap gap-1.5">
              {channels.map((ch) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setSelectedChannel(ch.id)}
                  className={`btn-pressable px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedChannel === ch.id
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {ch.id}
                </button>
              ))}
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-center">
            
            {/* Left Column: Active Marketplace Channel Detail */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-28 p-2 rounded-xl bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                  <img 
                    key={currentChannel.id}
                    src={currentChannel.logo} 
                    alt={currentChannel.name} 
                    className="max-h-10 max-w-full object-contain animate-fade-scale"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {currentChannel.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {currentChannel.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We handle end-to-end seller operations: <strong className="text-white">{currentChannel.action}</strong> to maximize revenue, improve margins, and ensure 100% account policy compliance.
              </p>

              {/* Core Execution Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {currentChannel.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: All-Inclusive Scope Snapshot */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="font-bold text-white uppercase tracking-wider">Managed Operations</span>
                <span className="text-emerald-400 font-medium">All-Inclusive</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-blue-400" />
                    Product Listings & SEO
                  </span>
                  <span className="text-emerald-400 font-medium">Optimized</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    Dynamic Pricing & Promos
                  </span>
                  <span className="text-emerald-400 font-medium">Active</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-yellow-400" />
                    Sponsored PPC & Ads
                  </span>
                  <span className="text-emerald-400 font-medium">ACOS Control</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    FBA / FBF / IXD Logistics
                  </span>
                  <span className="text-emerald-400 font-medium">Multi-State</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                    Safe-T & Fee Reconciliation
                  </span>
                  <span className="text-emerald-400 font-medium">100% Audited</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <a
                  href="#why-ecomease"
                  className="btn-pressable w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-md"
                >
                  <span>Learn How We Optimize Your Store</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
