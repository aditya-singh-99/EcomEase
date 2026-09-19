import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  BarChart3, 
  TrendingDown, 
  Search, 
  Video, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Target
} from "lucide-react";

export default function AdvertisementServices() {
  const adServices = [
    {
      title: "1. Performance Campaign Optimization",
      icon: Target,
      tag: "Conversion Lift",
      desc: "Granular dayparting, algorithmic bid modulations, and deep negative keyword mining to cut wasted clicks.",
      bullets: [
        "Hourly bid adjustments aligned with peak buyer checkout windows",
        "A/B creative testing of hero product angles and lifestyle badges",
        "Dynamic budget reallocation to top 15% revenue generating ASINs"
      ]
    },
    {
      title: "2. Rigorous ACOS & TACOS Control",
      icon: TrendingDown,
      tag: "Margin Shield",
      desc: "Protecting profit margins by ensuring total advertising cost of sale remains strictly within target thresholds.",
      bullets: [
        "Breakeven ACOS modeling per category SKU margin",
        "Elimination of bleeding search terms consuming >₹2,000 with zero sales",
        "Organic halo tracking: boost organic search velocity alongside paid ads"
      ]
    },
    {
      title: "3. Pay-Per-Click (Amazon & Flipkart PPC)",
      icon: Search,
      tag: "Search Dominance",
      desc: "Sponsored Products, Sponsored Brands, and Sponsored Display full-funnel coverage.",
      bullets: [
        "High-intent longtail keyword harvesting",
        "Competitor product page conquesting (ASIN & category targeting)",
        "Automated placement bid modifiers (Top of Search vs Product Pages)"
      ]
    },
    {
      title: "4. High-Converting Video Ads",
      icon: Video,
      tag: "Engagement",
      desc: "Auto-playing in-feed video ads that capture shopper attention on search result pages.",
      bullets: [
        "Scriptwriting and rendering of 15-30 second benefit-driven demo clips",
        "Mobile-optimized captions and zero-sound value messaging",
        "Category benchmark 3.2x higher click-through rate (CTR)"
      ]
    },
    {
      title: "5. Sponsored Brand Store & Banner Campaigns",
      icon: Layers,
      tag: "Brand Equity",
      desc: "Immersive multi-product header banners and dedicated brand store navigation.",
      bullets: [
        "High-end visual branding tailored to festival & holiday shopping surges",
        "Shoppable collection pages categorized by price point and usage",
        "Remarketing campaigns to recapture browse abandoners"
      ]
    },
    {
      title: "6. Listing SEO & Search Term Indexing",
      icon: Zap,
      tag: "Organic Traction",
      desc: "Synchronizing paid search keywords with backend search terms and A+ content copy.",
      bullets: [
        "Algorithmic keyword density balancing in product title, bullets & backend",
        "Indexing audit for invisible high-volume search queries",
        "Compelling copywriting that converts clicks into verified orders"
      ]
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Performance Advertisement"
        subtitle="Scale paid marketplace customer acquisition with disciplined ACOS control and industry-leading ROAS."
      />

      {/* Overview & Core Metrics */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Amazon SPN & Flipkart Preferred Ad Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turn Paid Ads Into a Predictable Profit Engine
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Most sellers waste 25% to 40% of their ad budget on broad match bleeders, out-of-stock ASIN clicks, and mispriced bids. EcomEase deploys quantitative bid algorithms and full-funnel ad architectures to drive category dominance while preserving net margins.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">4.8x</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Avg Portfolio ROAS</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">-28%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Average ACOS Reduction</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">₹45Cr+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Managed Ad Spend</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Transparent Live Dashboards</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Comprehensive Advertisement Framework
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Every dollar is measured, audited, and optimized against your gross margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="rounded-3xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {srv.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {srv.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 border-t border-slate-800 pt-4">
                    {srv.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-16 bg-[#0B0F19] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Slash Your ACOS & Accelerate Marketplace Scale?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get an instant audit of your live campaigns. We will identify negative keyword bleeders, misplaced bids, and ROAS opportunities within 24 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Request Free PPC & Ad Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919119885533"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
            >
              Direct Strategist Call: +91 91198 85533
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}