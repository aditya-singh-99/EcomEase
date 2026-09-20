import React from 'react';
import { Share2, ShoppingBag, TrendingUp, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';
import TitleBanner from '../components/TitleBanner';
import BlockTransition from '../components/BlockTransition';

export default function DropshippingSocial() {
  const socialChannels = [
    { title: 'Meta Ads & Instagram Shop', desc: 'High-converting Advantage+ shopping campaigns, dynamic product catalog ads, and seamless Instagram in-app checkout.' },
    { title: 'Google Shopping & Performance Max', desc: 'Capture high-intent search traffic with automated Merchant Center feed optimization and PMax cross-channel reach.' },
    { title: 'Social Media Store Management', desc: 'End-to-end management of social commerce storefronts, creator product taggings, and WhatsApp conversational commerce funnels.' },
    { title: 'Automated Dropshipping Architecture', desc: 'Zero-inventory fulfillment integrations, automated supplier order routing, real-time inventory sync, and tracking updates.' }
  ];

  const deliverables = [
    'Meta Business Manager & Google Merchant Center setup and catalog sync',
    'Audience segmentation, lookalike modeling, and high-frequency retargeting funnels',
    'Creative ad copywriting and video/carousel asset generation optimized for TikTok/Reels',
    'Hourly bid optimization aligned to consumer peak shopping windows',
    'Integration with Shiprocket, Delhivery, and automated dropship suppliers',
    'Real-time ROAS tracking dashboards with UTM attribution modeling',
    'WhatsApp Business API integration for automated abandoned cart recovery',
    'Customer review harvesting and social proof integration on product pages'
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner 
        title="Dropshipping & Social Commerce" 
        subtitle="Scale your eCommerce brand beyond marketplaces with Meta Ads, Google Performance Max, Instagram Shops, and automated dropshipping architecture."
      />

      {/* Main Feature */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Direct-to-Consumer & Social Acquisition Power
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We are experts at providing full-service advertising solutions that will help your e-commerce company grow by utilizing Google Ads and Meta Ads. Using intelligent keyword research, creative ad development, and accurate bid management, we can create audience-specific targeted ad campaigns. You may rely on us to leverage the potential of Google and Meta platforms to improve your brand's online visibility and generate noteworthy sales development.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-tabular">4.6x</div>
                <div className="text-xs text-slate-400 mt-1">Average Social ROAS</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-tabular">-38%</div>
                <div className="text-xs text-slate-400 mt-1">Lower Customer Acquisition Cost</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-white/15 flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img src="/Services/Google_Ads.png" alt="Google Ads" className="w-20 h-20 object-contain drop-shadow-xl" />
              <img src="/Services/Meta_Ads.png" alt="Meta Ads" className="w-20 h-20 object-contain drop-shadow-xl" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Channel Growth Stack</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Connect your marketplace catalog with Meta & Google ad ecosystems to build independent, diversified brand revenue streams that protect you from single-platform dependency.
            </p>
          </div>
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* Services Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Execution Pillars</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {socialChannels.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">{c.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BlockTransition variant="beam" />

      {/* Scope */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Full Scope & Deliverables</h3>
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
            <span>Launch Social Commerce Funnel</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
