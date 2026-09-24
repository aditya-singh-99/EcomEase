import { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Search, 
  Calculator, 
  Info, 
  Globe 
} from 'lucide-react';
import TitleBanner from '../components/TitleBanner';
import { Link } from 'react-router-dom';

  const regions = [
    { name: 'Amazon North America (USA, Canada, Mexico)', stat: '$350B+ Market', flag: '🇺🇸', desc: 'Direct access to high-spending US Prime consumers with FBA export.' },
    { name: 'Amazon Europe & UK', stat: '500M+ Consumers', flag: '🇬🇧', desc: 'VAT registration, PAN-EU FBA warehousing, and localized marketplace listings.' },
    { name: 'Amazon Middle East (UAE & Saudi Arabia)', stat: '+65% YoY Growth', flag: '🇦🇪', desc: 'Booming Gulf eCommerce hub with zero customs duties for select categories.' },
    { name: 'eBay Global Export (US, UK, Germany, Australia)', stat: '190+ Countries', flag: '🌐', desc: 'Zero insertion fee on first 250 listings and discounted FVF on luxury & sneakers.' }
  ];

  // All 37 Official Amazon US Global Referral Fee Categories from Document
  const amazonUsRates = [
    {
      category: 'Amazon Device Accessories',
      rate: '45.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '45.00%', fee: Math.max(0.30, +(p * 0.45).toFixed(2)) })
    },
    {
      category: 'Automotive and Powersports',
      rate: '12.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
    },
    {
      category: 'Baby Products',
      rate: '8% for price ≤ $10.00 • 15% for price > $10.00',
      minFee: '$0.30',
      calc: (p) => p <= 10 ? ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) }) : ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Backpacks, Handbags, and Luggage',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Base Equipment Power Tools',
      rate: '12.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
    },
    {
      category: 'Beauty, Health and Personal Care',
      rate: '8% for price ≤ $10.00 • 15% for price > $10.00',
      minFee: '$0.30',
      calc: (p) => p <= 10 ? ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) }) : ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Business, Industrial, and Scientific Supplies',
      rate: '12.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
    },
    {
      category: 'Clothing and Accessories',
      rate: '5% for price ≤ $15.00 • 10% for $15.01 - $20.00 • 17% for price > $20.00',
      minFee: '$0.30',
      calc: (p) => p <= 15 ? ({ rateText: '5.00%', fee: Math.max(0.30, +(p * 0.05).toFixed(2)) }) : p <= 20 ? ({ rateText: '10.00%', fee: Math.max(0.30, +(p * 0.10).toFixed(2)) }) : ({ rateText: '17.00%', fee: Math.max(0.30, +(p * 0.17).toFixed(2)) })
    },
    {
      category: 'Compact Appliances',
      rate: '15% for portion up to $300.00 • 8% for portion > $300.00',
      minFee: '$0.30',
      calc: (p) => p <= 300 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $300 + 8% over', fee: Math.max(0.30, +(45 + (p - 300) * 0.08).toFixed(2)) })
    },
    {
      category: 'Computers',
      rate: '8.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
    },
    {
      category: 'Consumer Electronics',
      rate: '8.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
    },
    {
      category: 'Electronics Accessories',
      rate: '15% for portion up to $100.00 • 8% for portion > $100.00',
      minFee: '$0.30',
      calc: (p) => p <= 100 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $100 + 8% over', fee: Math.max(0.30, +(15 + (p - 100) * 0.08).toFixed(2)) })
    },
    {
      category: 'Everything Else',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Eyewear',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Fine Art',
      rate: '20% up to $100 • 15% ($100-$1,000) • 10% ($1k-$5k) • 5% (> $5k)',
      minFee: '--',
      calc: (p) => ({ rateText: 'Tiered 5% - 20%', fee: +(p * 0.15).toFixed(2) })
    },
    {
      category: 'Footwear',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Full-Size Appliances',
      rate: '8.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
    },
    {
      category: 'Furniture',
      rate: '15% for portion up to $200.00 • 10% for portion > $200.00',
      minFee: '$0.30',
      calc: (p) => p <= 200 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $200 + 10% over', fee: Math.max(0.30, +(30 + (p - 200) * 0.10).toFixed(2)) })
    },
    {
      category: 'Gift Cards',
      rate: '20.00%',
      minFee: '--',
      calc: (p) => ({ rateText: '20.00%', fee: +(p * 0.20).toFixed(2) })
    },
    {
      category: 'Grocery and Gourmet',
      rate: '8% for price ≤ $15.00 • 15% for price > $15.00',
      minFee: '--',
      calc: (p) => p <= 15 ? ({ rateText: '8.00%', fee: +(p * 0.08).toFixed(2) }) : ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
    },
    {
      category: 'Home and Kitchen',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Jewelry',
      rate: '20% for portion up to $250.00 • 5% for portion > $250.00',
      minFee: '$0.30',
      calc: (p) => p <= 250 ? ({ rateText: '20.00%', fee: Math.max(0.30, +(p * 0.20).toFixed(2)) }) : ({ rateText: '20% up to $250 + 5% over', fee: Math.max(0.30, +(50 + (p - 250) * 0.05).toFixed(2)) })
    },
    {
      category: 'Lawn and Garden',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Lawn Mowers and Snow Throwers',
      rate: '15% for price up to $500.00 • 8% for price > $500.00',
      minFee: '$0.30',
      calc: (p) => p <= 500 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
    },
    {
      category: 'Mattresses',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Media - Books, DVD, Music, Software, Video',
      rate: '15.00%',
      minFee: '--',
      calc: (p) => ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
    },
    {
      category: 'Merchant Fulfilled Services',
      rate: '20.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '20.00%', fee: Math.max(0.30, +(p * 0.20).toFixed(2)) })
    },
    {
      category: 'Musical Instruments and AV Production',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Office Products',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Pet Products',
      rate: '15.00% (except 22.00% for veterinary diets)',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Sports and Outdoors',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Tires',
      rate: '10.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '10.00%', fee: Math.max(0.30, +(p * 0.10).toFixed(2)) })
    },
    {
      category: 'Tools and Home Improvement',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Toys and Games',
      rate: '15.00%',
      minFee: '$0.30',
      calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
    },
    {
      category: 'Video Game Consoles',
      rate: '8.00%',
      minFee: '--',
      calc: (p) => ({ rateText: '8.00%', fee: +(p * 0.08).toFixed(2) })
    },
    {
      category: 'Video Games and Gaming Accessories',
      rate: '15.00%',
      minFee: '--',
      calc: (p) => ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
    },
    {
      category: 'Watches',
      rate: '16% for portion up to $1,500.00 • 3% for portion > $1,500.00',
      minFee: '$0.30',
      calc: (p) => p <= 1500 ? ({ rateText: '16.00%', fee: Math.max(0.30, +(p * 0.16).toFixed(2)) }) : ({ rateText: '16% up to $1,500 + 3% over', fee: Math.max(0.30, +(240 + (p - 1500) * 0.03).toFixed(2)) })
    }
  ];

  // All Official Categories from Ebay seller.docx
  const ebayRates = [
    { 
      category: 'Most categories (eBay Motors Parts, Automotive Tools, Home & General)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '13.6% on total amount up to $7,500 • 2.35% on portion over $7,500' 
    },
    { 
      category: 'Books & Magazines, Movies & TV (except Movie NFTs), Music (except Vinyl & NFTs)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '15.3% on total amount up to $7,500 • 2.35% on portion over $7,500' 
    },
    { 
      category: 'Coins & Paper Money (except Bullion)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '13.25% on total amount up to $7,500 • 2.35% on portion over $7,500' 
    },
    { 
      category: 'Coins & Paper Money > Bullion', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '13.6% on total amount up to $7,500 • 7.00% on portion over $7,500' 
    },
    { 
      category: 'Clothing, Shoes & Accessories > Women > Women\'s Bags & Handbags', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '15.0% if sale is $2,000 or less • 9.0% on portion over $2,000' 
    },
    { 
      category: 'Select Collectibles (Comic Books, Trading Cards, Sports Cards, Collectible Cards)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '13.25% on total amount up to $7,500 • 2.35% on portion over $7,500' 
    },
    { 
      category: 'Jewelry & Watches (except Watches, Parts & Accessories)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '15.0% if sale is $5,000 or less • 9.0% on portion over $5,000' 
    },
    { 
      category: 'Jewelry & Watches > Watches, Parts & Accessories', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '15.0% up to $1,000 • 6.5% ($1,000 to $7,500) • 3.0% over $7,500' 
    },
    { 
      category: 'NFT Categories (Art, CCG, Emerging, Movie, Music, Sports NFTs)', 
      insertion: 'First 250 listings free per month, then $0.35 per listing', 
      fvf: '5.00% flat on total amount of sale' 
    },
    { 
      category: 'Select Business & Industrial (Heavy Equipment, Printing Presses, Food Trucks)', 
      insertion: '$20.00 flat insertion fee', 
      fvf: '3.00% on total amount up to $15,000 • 0.50% on portion over $15,000' 
    },
    { 
      category: 'Musical Instruments & Gear > Guitars & Basses', 
      insertion: '100% Free Insertion Fee', 
      fvf: '6.70% on total amount up to $7,500 • 2.35% on portion over $7,500' 
    },
    { 
      category: 'Select Athletic Shoes (Men\'s & Women\'s Athletic Shoes)', 
      insertion: 'Free if starting price is $150 or more', 
      fvf: '8.00% if sale ≥ $150 (No per-order fee) • 13.60% if < $150' 
    },
  ];

  const deliverables = [
    'International Seller Central & eBay account registration with KYC',
    'Overseas tax compliance (US State Sales Tax, UK/EU VAT & EORI)',
    'Global logistics, sea/air freight forwarding, and international FBA prep',
    'Multi-currency banking setup with automated INR repatriation to Indian banks',
    'Localized keyword research & SEO translated into target languages',
    'International trademark protection and Amazon Global Brand Registry',
    'Cross-border Sponsored Ads (PPC) and localized promotional campaigns',
  ];

export default function AmazonGlobalExpansion() {
  const [activeGlobalTab, setActiveGlobalTab] = useState('amazon');
  const [searchQuery, setSearchQuery] = useState('');
  const [calcCategory, setCalcCategory] = useState('Clothing and Accessories');
  const [calcPrice, setCalcPrice] = useState(25);

  const filteredAmazonRates = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return amazonUsRates;
    return amazonUsRates.filter(r => r.category.toLowerCase().includes(q) || r.rate.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredEbayRates = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return ebayRates;
    return ebayRates.filter(r => r.category.toLowerCase().includes(q) || r.fvf.toLowerCase().includes(q));
  }, [searchQuery]);

  const activeCalcItem = amazonUsRates.find(c => c.category === calcCategory) || amazonUsRates[7];
  const calcResult = activeCalcItem.calc(Number(calcPrice) || 0);
  const netRetained = Math.max(0, +((Number(calcPrice) || 0) - calcResult.fee).toFixed(2));

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner 
        title="Amazon & Global Marketplace Expansion" 
        subtitle="Scale your Indian brand to Amazon US, UK, UAE, Europe, and eBay Global with complete cross-border logistics, tax compliance, and official rate cards."
      />

      {/* Overview */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Unlock Global Dollar & Pound Revenue
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Exporting via Amazon Global Selling and eBay Global Export allows Indian manufacturers and brands to sell directly to over 300 million active international customers. We manage your international operational pipeline from end to end—from US/UK tax setup to international FBA shipping and multi-currency payouts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Currency Risk (Direct INR Bank Transfer)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Amazon FBA Global Prime Badging</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>US LLC & UK VAT Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>3x to 5x Higher Margins in Foreign Currencies</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {regions.map((r, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-3.5">
                <div className="text-2xl p-2 rounded-lg bg-white/5 border border-white/10">{r.flag}</div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">{r.name}</span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{r.stat}</div>
                  <p className="text-[11px] text-slate-400 mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OFFICIAL CROSS-BORDER RATE CARDS: AMAZON GLOBAL & EBAY SELLER SCHEDULES
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Official Cross-Border Fee Schedules</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Amazon Global Selling & eBay Export Fee Rates
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Amazon deducts the greater of the applicable referral fee percentage or applicable per-item minimum referral fee ($0.30 per-unit standard).
          </p>

          {/* Toggle Tabs */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => { setActiveGlobalTab('amazon'); setSearchQuery(''); }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeGlobalTab === 'amazon'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Amazon US Global Rates (37 Categories)</span>
            </button>
            <button
              onClick={() => { setActiveGlobalTab('ebay'); setSearchQuery(''); }}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeGlobalTab === 'ebay'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              <span>eBay Global Seller Rates</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            AMAZON US CALCULATOR
            ========================================================================= */}
        {activeGlobalTab === 'amazon' && (
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Amazon US Fee Estimator</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Estimate Your US Dollar ($) Referral Fee & Proceeds
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculate applicable commission percentages, tiered price discounts, and the $0.30 per-unit minimum fee.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Select US Category ({amazonUsRates.length} available)
                    </label>
                    <select
                      value={calcCategory}
                      onChange={(e) => setCalcCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-medium"
                    >
                      {amazonUsRates.map((item, idx) => (
                        <option key={idx} value={item.category} className="bg-slate-950 text-white">
                          {item.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Product Selling Price (USD $)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">$</span>
                      <input
                        type="number"
                        min="1"
                        max="5000"
                        step="1"
                        value={calcPrice}
                        onChange={(e) => setCalcPrice(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-7 pr-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-slate-300 text-xs flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>
                    Minimum per-unit referral fee for this category: <strong className="text-white">{activeCalcItem.minFee}</strong>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/70 border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">USD Earnings Breakdown</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Live USD ($)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Listing Price:</span>
                    <span className="font-bold text-white font-mono">${Number(calcPrice).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Referral Rate Formula:</span>
                    <span className="font-mono text-cyan-400 font-bold">{calcResult.rateText}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Referral Deduction:</span>
                    <span className="font-mono text-rose-400 font-bold">-${calcResult.fee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Applicable Minimum Fee:</span>
                    <span className="text-slate-400 font-mono">{activeCalcItem.minFee}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-[11px] text-slate-400 font-medium">Estimated Net Before Freight:</div>
                  <div className="flex items-baseline justify-between mt-1">
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                      ${netRetained.toFixed(2)}
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-300/80">
                      ~₹{(netRetained * 86).toFixed(0)} INR
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            {activeGlobalTab === 'amazon' 
              ? `Showing ${filteredAmazonRates.length} of ${amazonUsRates.length} Amazon US categories`
              : `Showing ${filteredEbayRates.length} of ${ebayRates.length} eBay category groups`
            }
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search category or fee rate..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
            />
          </div>
        </div>

        {/* Tab 1: Amazon Global Rates Table */}
        {activeGlobalTab === 'amazon' && (
          <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-x-auto">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Amazon US Referral Fee Rates by Category
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Amazon deducts greater of applicable percentage or applicable per-item minimum referral fee.
                </p>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit">
                USD ($) Currency
              </span>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold w-1/3">Fee Categories</th>
                  <th className="py-3 px-4 font-semibold text-cyan-400">Referral Fee Percentages</th>
                  <th className="py-3 px-4 font-semibold text-right text-slate-300">Applicable Minimum Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {filteredAmazonRates.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.category}</td>
                    <td className="py-3.5 px-4 text-cyan-300 font-mono font-medium">{row.rate}</td>
                    <td className="py-3.5 px-4 text-slate-400 font-mono text-right font-bold">{row.minFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: eBay Seller Rates Table */}
        {activeGlobalTab === 'ebay' && (
          <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-x-auto">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">
                  eBay Basic Insertion & Final Value Fees (FVF)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  First 250 listings per month are 100% free of insertion charges across most categories.
                </p>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 w-fit">
                Global Export Slabs
              </span>
            </div>

            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold w-1/3">Category</th>
                  <th className="py-3 px-4 font-semibold text-slate-300">Insertion Fee</th>
                  <th className="py-3 px-4 font-semibold text-amber-400 text-right">Final Value Fee (FVF) %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {filteredEbayRates.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.category}</td>
                    <td className="py-3.5 px-4 text-slate-300 font-mono text-xs">{row.insertion}</td>
                    <td className="py-3.5 px-4 text-amber-300 font-mono font-medium text-right">{row.fvf}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-amber-200">
                Looking for the full interactive eBay Payout Calculator, INR currency repatriation, and store launch roadmap?
              </div>
              <Link
                to="/ebay-management-services"
                className="btn-pressable px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap shadow-md transition-all"
              >
                Go to Dedicated eBay Services Page →
              </Link>
            </div>
          </div>
        )}

      </section>

      {/* Deliverables Checklist */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What EcomEase Manages For Your Global Account
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Complete turnkey international operations so you can focus strictly on manufacturing and domestic dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Ready to Take Your Brand to International Markets?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Get an international catalog viability analysis and estimated profit margin breakdown in 24 hours.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact-us"
              className="btn-pressable inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/20"
            >
              <span>Schedule Free Global Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
