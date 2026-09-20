import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  Layers,
  BarChart2,
  DollarSign
} from 'lucide-react';
import BigCommerceHeroShowcase from '../components/BigCommerceHeroShowcase';
import InfiniteCarousel from '../components/InfiniteCarousel';
import GrowthCalculator from '../components/GrowthCalculator';
import BlockTransition from '../components/BlockTransition';
import AmbientCursorGlow from '../components/AmbientCursorGlow';
import BuyBoxSimulator from '../components/BuyBoxSimulator';
import TiltCard from '../components/TiltCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    fullName: '',
    email: '',
    phone: '',
    monthlyGmv: '15-50 Lakhs',
    marketplaces: ['Amazon', 'Flipkart'],
    notes: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAuditSubmitted(true);
  };

  const toggleMarketplace = (mp) => {
    if (formData.marketplaces.includes(mp)) {
      if (formData.marketplaces.length > 1) {
        setFormData({
          ...formData,
          marketplaces: formData.marketplaces.filter((m) => m !== mp)
        });
      }
    } else {
      setFormData({
        ...formData,
        marketplaces: [...formData.marketplaces, mp]
      });
    }
  };

  const solutions = [
    {
      id: 'marketplaces',
      label: 'Marketplace Operations',
      title: 'Full-Funnel Marketplace Account Management',
      subtitle: 'From Buy Box protection to catalog indexing, we manage your day-to-day Seller Central operations.',
      metrics: [
        { label: 'Buy Box Win Rate', value: '99.4%' },
        { label: 'Listing Indexing Speed', value: '< 24 Hours' },
        { label: 'Catalog Accuracy', value: '99.9%' }
      ],
      points: [
        'A+ Content (EBC) & high-conversion brand storefront design',
        'Algorithmic backend keyword harvesting & competitor conquesting',
        'Stockout risk prevention with automated replenishment alerts',
        'Safe-T and seller performance protection against account suspensions'
      ],
      link: '/amazon-management-services',
      cta: 'Explore Marketplace Services'
    },
    {
      id: 'ads',
      label: 'Performance Advertising',
      title: 'High-ROAS Sponsored Campaigns & Off-Amazon Traffic',
      subtitle: 'Eliminate wasted ad spend with granular dayparting, placement modifiers, and negative keyword mining.',
      metrics: [
        { label: 'Average ROAS', value: '4.8x' },
        { label: 'Target ACOS Reduction', value: '-28%' },
        { label: 'Ad Spend Managed', value: '₹45Cr+' }
      ],
      points: [
        'Sponsored Products, Sponsored Brands & Sponsored Display mastery',
        'Hourly bid adjustments aligned to peak consumer purchasing hours',
        'Targeted ASIN conquesting on competitor product detail pages',
        'Meta D2C catalog & Google Performance Max integration'
      ],
      link: '/advertisement-services',
      cta: 'Explore Performance Ads'
    },
    {
      id: 'fulfillment',
      label: 'Fulfillment & Logistics',
      title: 'Prime & Assured Badging via Multi-State Warehousing',
      subtitle: 'Place stock closest to buyers across India to cut transit times and eliminate return cancellations.',
      metrics: [
        { label: 'Next-Day Delivery Reach', value: '92%' },
        { label: 'RTO Rate Reduction', value: '-34%' },
        { label: 'Covered FC Locations', value: '18+ States' }
      ],
      points: [
        'Amazon FBA & Flipkart FBF multi-city enrollment',
        'Amazon Inbound Cross-Dock (IXD) centralized single-hub dispatch',
        'Virtual Place of Business (VPOB) GST tax documentation support',
        'Shiprocket & 3PL automated courier allocation and NDR follow-ups'
      ],
      link: '/amazon-fba-enrollment',
      cta: 'Explore Fulfillment Solutions'
    },
    {
      id: 'reconciliation',
      label: 'Fee Reconciliation',
      title: 'Recover 2% to 5% of GMV Trapped in Fee Leakages',
      subtitle: 'Automated auditing across lost FBA stock, incorrect weight volumetric charges, and customer switch fraud.',
      metrics: [
        { label: 'Average Recovery', value: '3.2% GMV' },
        { label: 'Claim Success Rate', value: '96.8%' },
        { label: 'Historical Lookback', value: '540 Days' }
      ],
      points: [
        'Automated detection of wrong dimensional weight bracket overcharges',
        'Missing inbound shipment inventory reimbursement claims',
        'Customer return inspection and Safe-T dispute claim management',
        'Monthly reconciliation statement matching remittances to bank deposits'
      ],
      link: '/reconcilation-services',
      cta: 'Explore Fee Recovery'
    }
  ];

  const platforms = [
    {
      name: 'Amazon India & Global',
      badge: 'Tier-1 Partner',
      stat: '+240% YoY',
      description: 'End-to-end Seller Central management, A+ Content, Brand Stores, FBA logistics, and Sponsored PPC.',
      link: '/amazon-management-services'
    },
    {
      name: 'Flipkart Growth',
      badge: 'F-Assured Focus',
      stat: '+190% YoY',
      description: 'FBF fulfillment onboarding, PLA ad campaigns, and seasonal Big Billion Days catalog preparation.',
      link: '/flipkart-management-services'
    },
    {
      name: 'Meesho Scale',
      badge: 'Zero Commission',
      stat: '+310% YoY',
      description: 'Tier-2 and Tier-3 Bharat market penetration, catalog ranking, and return-to-origin reduction.',
      link: '/meesho-management-services'
    },
    {
      name: 'Myntra Fashion',
      badge: 'Fashion Vertical',
      stat: '+175% YoY',
      description: 'High-margin apparel & lifestyle brand onboarding, lookbook cataloging, and seasonal drops.',
      link: '/myntra-management-services'
    },
    {
      name: 'JioMart Retail',
      badge: 'Omnichannel',
      stat: '+220% YoY',
      description: 'Reliance retail ecosystem integration for FMCG, packaged goods, and grocery marketplaces.',
      link: '/jiomart-management-services'
    },
    {
      name: 'FirstCry',
      badge: 'Baby & Kids',
      stat: '+160% YoY',
      description: 'Category dominance in infant, maternity, and kids products with targeted parent demographics.',
      link: '/firstcry-management-services'
    }
  ];

  return (
    <div className="w-full bg-[#090D16] text-slate-100 relative">
      <AmbientCursorGlow />
      
      {/* =========================================================================
          HERO SECTION: BigCommerce Sky Blue & Violet Atmospheric Horizon
          (Directly inspired by the user's reference screenshot)
          ========================================================================= */}
      <section className="relative pt-36 sm:pt-48 pb-20 overflow-hidden bg-gradient-to-b from-[#2563EB] via-[#3B82F6] via-60% to-[#7C3AED]/90 text-white">
        
        {/* Subtle cloud and mountain atmospheric layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_70%)] pointer-events-none"></div>
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#090D16] via-[#090D16]/60 to-transparent pointer-events-none z-10"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs text-white font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>Commerce built for momentum</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-md">
            Power modern buying experiences across India's largest marketplaces.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow">
            All-in-one growth architecture for Amazon, Flipkart, Meesho, Myntra, JioMart & FirstCry. From high-converting listings to automated payment reconciliation.
          </p>

          {/* Centered BigCommerce Dual Action Buttons */}
          <div className="mt-8 mb-14 flex items-center justify-center gap-3">
            <a
              href="#audit-form"
              className="btn-pressable px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-black hover:bg-slate-900 border border-white/20 shadow-xl"
            >
              Try for free
            </a>

            <a
              href="#showcase"
              className="btn-pressable px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl"
            >
              See in action
            </a>
          </div>

          {/* Centerpiece: The Luxury Storefront Window Mockup from Screenshot */}
          <div id="showcase" className="relative z-20">
            <BigCommerceHeroShowcase />
          </div>
        </div>
      </section>

      {/* =========================================================================
          INFINITE CAROUSEL: Continuous Marketplace & Partner Ecosystem Marquee
          ========================================================================= */}
      <InfiniteCarousel />

      {/* =========================================================================
          KEY STATS TICKER: Clean, Authoritative Enterprise Metrics
          ========================================================================= */}
      <section className="py-12 border-b border-white/5 bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">₹180Cr+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">GMV Managed</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight">4.8x</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Average Portfolio ROAS</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 tracking-tight">99.4%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Buy Box Win Rate</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-blue-400 tracking-tight">₹3.8Cr+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Reconciled Cash Recovered</div>
          </div>
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* =========================================================================
          SECTION 2: MULTI-MARKETPLACE ECOSYSTEM
          ========================================================================= */}
      <section className="py-20 border-b border-white/5 bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              One Unified Engine. Six Dominant Marketplaces.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Each channel operates with distinct algorithms, buyer behaviors, and logistics models. We optimize catalog visibility and unit velocity across each channel.
            </p>
          </div>

          {/* Tier 1 Flagship Spotlight (Amazon & Flipkart) with 3D Tilt */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {platforms.slice(0, 2).map((p) => (
              <TiltCard key={p.name} className="rounded-3xl h-full">
                <Link
                  to={p.link}
                  className="subtle-card rounded-3xl p-8 flex flex-col justify-between group border border-white/10 hover:border-blue-500/40 h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {p.badge}
                      </span>
                      <span className="text-sm font-bold text-emerald-400 font-tabular">
                        {p.stat}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {p.name}
                    </h3>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-400 group-hover:text-white">
                    <span>Explore channel roadmap & SLAs</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-blue-400" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>

          {/* Specialized Growth Channels (Meesho, Myntra, JioMart, FirstCry) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.slice(2).map((p) => (
              <Link
                key={p.name}
                to={p.link}
                className="subtle-card rounded-2xl p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {p.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 font-tabular">
                      {p.stat}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white">
                  <span>View playbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* =========================================================================
          INTERACTIVE BUY BOX & ALGORITHMIC WIN-RATE SIMULATOR (Direction 1)
          ========================================================================= */}
      <BuyBoxSimulator />

      <BlockTransition variant="beam" />

      {/* =========================================================================
          SECTION 3: INTERACTIVE GROWTH & FEE RECOVERY CALCULATOR
          ========================================================================= */}
      <section id="calculator" className="py-20 border-b border-white/5 bg-[#0B0F1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 text-center max-w-xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Trapped Revenue in Seconds
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Slide your monthly GMV to project recovered reconciliation cash and ad efficiency gains.
          </p>
        </div>

        <GrowthCalculator />
      </section>

      <BlockTransition variant="horizon" />

      {/* =========================================================================
          SECTION 4: CORE CAPABILITIES (Clean Interactive Tabs)
          ========================================================================= */}
      <section id="solutions" className="py-20 border-b border-white/5 bg-[#090D16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Solutions Engineered for Scale
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Select an operational discipline to see our execution deliverables and guaranteed SLAs.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-3">
            {solutions.map((sol, index) => (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`btn-pressable px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === index
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {sol.label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/60 border border-white/10 shadow-2xl transition-opacity duration-150">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  {solutions[activeTab].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {solutions[activeTab].subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {solutions[activeTab].points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    to={solutions[activeTab].link}
                    className="btn-pressable inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md"
                  >
                    <span>{solutions[activeTab].cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2">
                  Performance Benchmarks
                </div>
                {solutions[activeTab].metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-xs text-slate-300">{m.label}</span>
                    <span className="text-lg font-bold text-white font-mono font-tabular">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="beam" />

      {/* =========================================================================
          SECTION 5: AUDIT BOOKING FORM
          ========================================================================= */}
      <section id="audit-form" className="py-20 bg-[#090D16]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/90 border border-white/15 shadow-2xl">
            <div className="text-center max-w-lg mx-auto mb-8">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Claim Your 24-Hour Free Growth Audit
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Our directors will audit your catalog health, Buy Box rate, and fee overcharges.
              </p>
            </div>

            {auditSubmitted ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Audit Request Submitted</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. We will review your catalog and reach out via Call/WhatsApp at <strong>{formData.phone}</strong> within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setAuditSubmitted(false)}
                  className="btn-pressable px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:text-white mt-2"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Brand / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Forma Living"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suryansh Garg"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="suryansh@forma.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 91198 85533"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Approximate Current Monthly GMV
                  </label>
                  <select
                    value={formData.monthlyGmv}
                    onChange={(e) => setFormData({ ...formData, monthlyGmv: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Under 5 Lakhs">Under ₹5 Lakhs / month (New Launch)</option>
                    <option value="5-15 Lakhs">₹5 Lakhs - ₹15 Lakhs / month</option>
                    <option value="15-50 Lakhs">₹15 Lakhs - ₹50 Lakhs / month</option>
                    <option value="50 Lakhs - 1.5 Crore">₹50 Lakhs - ₹1.5 Crore / month</option>
                    <option value="1.5 Crore+">₹1.5 Crore+ / month (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Channels to Audit:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'JioMart', 'FirstCry'].map((mp) => {
                      const active = formData.marketplaces.includes(mp);
                      return (
                        <button
                          key={mp}
                          type="button"
                          onClick={() => toggleMarketplace(mp)}
                          className={`btn-pressable px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            active
                              ? 'bg-blue-600 text-white font-semibold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {mp}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="btn-pressable w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>Submit Free Growth Audit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}