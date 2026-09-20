import React from 'react';
import { Palette, Sparkles, CheckCircle2, ArrowRight, Layout, Eye, ShoppingCart, Image as ImageIcon } from 'lucide-react';
import TitleBanner from '../components/TitleBanner';
import BlockTransition from '../components/BlockTransition';

export default function BrandStoreEBC() {
  const modules = [
    { title: 'Custom Multi-Page Brand Storefront', icon: Layout, desc: 'Immersive brand destination with dedicated product categories, bestseller showcases, lifestyle lookbooks, and custom video headers.' },
    { title: 'A+ Content (EBC) Modules', icon: Sparkles, desc: 'High-converting comparison tables, rich narrative copy, and visual storytelling modules that replace basic plain-text descriptions.' },
    { title: 'High-Impact Infographics & Rendering', icon: ImageIcon, desc: 'Photorealistic lifestyle renders, feature callouts, dimension diagrams, and certification badges that answer buyer questions visually.' },
    { title: 'Conversion Rate Optimization (CRO)', icon: ShoppingCart, desc: 'Proven layout hierarchies engineered to boost listing conversion rates by 20% to 35% while slashing product return rates.' }
  ];

  const deliverables = [
    'Complete custom Amazon & Flipkart Brand Store design & multi-tab navigation',
    'Premium A+ Content (EBC) module design for all primary catalog ASINs',
    'Custom product infographics, lifestyle image composite rendering & packaging callouts',
    'Interactive product comparison charts to cross-sell catalog variants',
    'Mobile-first responsive asset rendering tailored for app buyers',
    'Amazon Brand Registry documentation assistance and trademark support',
    'Keyword-optimized alt-text metadata embedded into all visual modules',
    'Performance analytics tracking storefront traffic, sales, and dwell time'
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner 
        title="Brand Store & EBC Design" 
        subtitle="Transform plain product listings into immersive visual flagships with custom Amazon Brand Stores, rich A+ Content (EBC), and high-converting infographics."
      />

      {/* Main Feature */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Visual Excellence That Drives 30%+ Higher Conversions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our expertise lies in creating brand stores on eCommerce platforms, offering customized solutions to create a distinctive and captivating online identity for your company. Our services include creating unique shop designs, integrating your brand's identity seamlessly, creating product displays that are optimized, and managing inventory effectively. With our experience, we guarantee that your brand store works flawlessly, drawing and keeping clients, and increasing sales while you concentrate on your main business.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-tabular">+32%</div>
                <div className="text-xs text-slate-400 mt-1">Average Conversion Lift</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-tabular">-22%</div>
                <div className="text-xs text-slate-400 mt-1">Return Rate Reduction</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-white/15 flex flex-col items-center text-center">
            <img 
              src="/Services/Brand_Store.png" 
              alt="Brand Store Creation" 
              className="w-32 h-32 object-contain mb-4 drop-shadow-xl"
            />
            <h3 className="text-lg font-bold text-white mb-2">SPN-Certified Brand Specialists</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We design in full compliance with Amazon Brand Registry style guidelines and Flipkart quality parameters, ensuring 100% first-pass approval without rejected assets.
            </p>
          </div>
        </div>
      </section>

      <BlockTransition variant="beam" />

      {/* Modules Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Core Design Capabilities
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Every visual touchpoint meticulously engineered to build brand equity and maximize cart value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* Deliverables */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Scope & Deliverables</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {deliverables.map((d, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{d}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact-us"
            className="btn-pressable inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-xl"
          >
            <span>Request Brand Store Portfolio & Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
