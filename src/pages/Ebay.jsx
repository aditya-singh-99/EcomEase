import { useState, useMemo } from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import SinglePriceCard from "../components/SinglePriceCard";
import { 
  Percent, 
  Tag, 
  ShieldCheck, 
  Truck, 
  Coins, 
  HelpCircle, 
  CheckCircle2, 
  Search, 
  DollarSign, 
  ArrowRight,
  TrendingUp,
  Globe2,
  Box,
  Layers,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Official eBay Fee Categories & Slabs from Document
export const ebayFeeCategories = [
  {
    category: "Most categories",
    subtext: "Including eBay Motors > Parts & Accessories, Automotive Tools & Supplies, and Safety & Security Accessories. (For vehicles, see Motors fees).",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "13.6% on total amount up to $7,500 calculated per item • 2.35% on the portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $7,500", rate: "13.6%" },
      { slab: "Portion over $7,500", rate: "2.35%" }
    ],
    calc: (p) => {
      if (p <= 7500) {
        const fee = p * 0.136;
        return { rateText: "13.6%", fee: +fee.toFixed(2), effectiveRate: "13.60%" };
      } else {
        const fee = 7500 * 0.136 + (p - 7500) * 0.0235;
        return { rateText: "13.6% up to $7.5k + 2.35% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Books & Magazines, Movies & TV, Music",
    subtext: "Books & Magazines, Movies & TV (except Movie NFTs), Music (except Vinyl Records and Music NFTs categories)",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "15.3% on total amount up to $7,500 calculated per item • 2.35% on the portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $7,500", rate: "15.3%" },
      { slab: "Portion over $7,500", rate: "2.35%" }
    ],
    calc: (p) => {
      if (p <= 7500) {
        const fee = p * 0.153;
        return { rateText: "15.3%", fee: +fee.toFixed(2), effectiveRate: "15.30%" };
      } else {
        const fee = 7500 * 0.153 + (p - 7500) * 0.0235;
        return { rateText: "15.3% up to $7.5k + 2.35% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Coins & Paper Money (except Bullion)",
    subtext: "Numismatic collections, paper currency, graded notes, and rare coins (excluding bullion bars/ingots)",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "13.25% on total amount up to $7,500 calculated per item • 2.35% on the portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $7,500", rate: "13.25%" },
      { slab: "Portion over $7,500", rate: "2.35%" }
    ],
    calc: (p) => {
      if (p <= 7500) {
        const fee = p * 0.1325;
        return { rateText: "13.25%", fee: +fee.toFixed(2), effectiveRate: "13.25%" };
      } else {
        const fee = 7500 * 0.1325 + (p - 7500) * 0.0235;
        return { rateText: "13.25% up to $7.5k + 2.35% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Coins & Paper Money > Bullion",
    subtext: "Gold, silver, platinum bars, coins, and bullion ingots",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "13.6% if sale is $7,500 or less • 7.0% if sale is over $7,500",
    tierBreakdown: [
      { slab: "Total sale $7,500 or less", rate: "13.6%" },
      { slab: "Total sale over $7,500", rate: "7.0%" }
    ],
    calc: (p) => {
      const rate = p <= 7500 ? 0.136 : 0.07;
      const fee = p * rate;
      return { rateText: p <= 7500 ? "13.6%" : "7.0%", fee: +fee.toFixed(2), effectiveRate: (rate * 100).toFixed(2) + "%" };
    }
  },
  {
    category: "Clothing, Shoes & Accessories > Women's Bags & Handbags",
    subtext: "Women > Women's Bags & Handbags (Designer purses, leather totes, clutches, crossbody bags)",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "15% if sale is $2,000 or less • 9% if sale is over $2,000",
    tierBreakdown: [
      { slab: "Total sale $2,000 or less", rate: "15.0%" },
      { slab: "Total sale over $2,000", rate: "9.0%" }
    ],
    calc: (p) => {
      const rate = p <= 2000 ? 0.15 : 0.09;
      const fee = p * rate;
      return { rateText: p <= 2000 ? "15.0%" : "9.0%", fee: +fee.toFixed(2), effectiveRate: (rate * 100).toFixed(2) + "%" };
    }
  },
  {
    category: "Select Collectibles categories",
    subtext: "Comic Books & Memorabilia, Non-Sport Trading Cards, Sports Mem, Cards & Fan Shop > Sports Trading Cards, Toys & Hobbies > Collectible Card Games",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "13.25% on total amount up to $7,500 calculated per item • 2.35% on the portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $7,500", rate: "13.25%" },
      { slab: "Portion over $7,500", rate: "2.35%" }
    ],
    calc: (p) => {
      if (p <= 7500) {
        const fee = p * 0.1325;
        return { rateText: "13.25%", fee: +fee.toFixed(2), effectiveRate: "13.25%" };
      } else {
        const fee = 7500 * 0.1325 + (p - 7500) * 0.0235;
        return { rateText: "13.25% up to $7.5k + 2.35% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Jewelry & Watches (except Watches, Parts & Accessories)",
    subtext: "Fine jewelry, precious metals, gemstone rings, fashion jewelry, pendants (excluding watches and parts)",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "15% if sale is $5,000 or less • 9% if sale is over $5,000",
    tierBreakdown: [
      { slab: "Total sale $5,000 or less", rate: "15.0%" },
      { slab: "Total sale over $5,000", rate: "9.0%" }
    ],
    calc: (p) => {
      const rate = p <= 5000 ? 0.15 : 0.09;
      const fee = p * rate;
      return { rateText: p <= 5000 ? "15.0%" : "9.0%", fee: +fee.toFixed(2), effectiveRate: (rate * 100).toFixed(2) + "%" };
    }
  },
  {
    category: "Jewelry & Watches > Watches, Parts & Accessories",
    subtext: "Luxury watches, automatic & mechanical timepieces, watch bands, movements, cases, and horology accessories",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "15% up to $1,000 • 6.5% on portion over $1,000 up to $7,500 • 3% on portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $1,000", rate: "15.0%" },
      { slab: "Portion over $1,000 to $7,500", rate: "6.5%" },
      { slab: "Portion over $7,500", rate: "3.0%" }
    ],
    calc: (p) => {
      if (p <= 1000) {
        const fee = p * 0.15;
        return { rateText: "15.0%", fee: +fee.toFixed(2), effectiveRate: "15.00%" };
      } else if (p <= 7500) {
        const fee = 1000 * 0.15 + (p - 1000) * 0.065;
        return { rateText: "15% up to $1k + 6.5% ($1k-$7.5k)", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      } else {
        const fee = 1000 * 0.15 + (6500 * 0.065) + (p - 7500) * 0.03;
        return { rateText: "15% / 6.5% / 3% over $7.5k", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "The following NFT categories",
    subtext: "Art NFTs, CCG NFTs, Emerging NFTs, Movie NFTs, Music NFTs, Non-Sport Trading Card NFTs, Sport Trading Card NFTs",
    insertionFee: "First 250 listings free per month, then $0.35 per listing",
    finalValueFee: "5% on total amount of the sale",
    tierBreakdown: [
      { slab: "Total amount of the sale", rate: "5.0% flat" }
    ],
    calc: (p) => {
      const fee = p * 0.05;
      return { rateText: "5.0% flat", fee: +fee.toFixed(2), effectiveRate: "5.00%" };
    }
  },
  {
    category: "Select Business & Industrial categories",
    subtext: "Heavy Equipment Parts & Attachments > Heavy Equipment, Printing & Graphic Arts > Commercial Printing Presses, Restaurant & Food Service > Food Trucks, Trailers & Carts",
    insertionFee: "$20.00 insertion fee",
    finalValueFee: "3% on total amount up to $15,000 • 0.5% on the portion of the sale over $15,000",
    tierBreakdown: [
      { slab: "Portion up to $15,000", rate: "3.0%" },
      { slab: "Portion over $15,000", rate: "0.5%" }
    ],
    calc: (p) => {
      if (p <= 15000) {
        const fee = p * 0.03;
        return { rateText: "3.0%", fee: +fee.toFixed(2), effectiveRate: "3.00%" };
      } else {
        const fee = 15000 * 0.03 + (p - 15000) * 0.005;
        return { rateText: "3.0% up to $15k + 0.5% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Musical Instruments & Gear > Guitars & Basses",
    subtext: "Electric guitars, acoustic guitars, bass guitars, amplifiers, and gear",
    insertionFee: "Free (Zero insertion fee)",
    finalValueFee: "6.7% on total amount up to $7,500 calculated per item • 2.35% on the portion over $7,500",
    tierBreakdown: [
      { slab: "Portion up to $7,500", rate: "6.7%" },
      { slab: "Portion over $7,500", rate: "2.35%" }
    ],
    calc: (p) => {
      if (p <= 7500) {
        const fee = p * 0.067;
        return { rateText: "6.7%", fee: +fee.toFixed(2), effectiveRate: "6.70%" };
      } else {
        const fee = 7500 * 0.067 + (p - 7500) * 0.0235;
        return { rateText: "6.7% up to $7.5k + 2.35% over", fee: +fee.toFixed(2), effectiveRate: ((fee / p) * 100).toFixed(2) + "%" };
      }
    }
  },
  {
    category: "Select Clothing, Shoes & Accessories > Athletic Shoes",
    subtext: "Men > Men's Shoes > Athletic Shoes, Women > Women's Shoes > Athletic Shoes (Sneakers, Performance Footwear)",
    insertionFee: "Free if starting price is $150 or more* (standard otherwise)",
    finalValueFee: "8% if total amount is $150 or more (per order fee not charged) • 13.6% if total amount is less than $150",
    tierBreakdown: [
      { slab: "Sale price $150 or more", rate: "8.0% (Zero per-order fee)" },
      { slab: "Sale price less than $150", rate: "13.6%" }
    ],
    calc: (p) => {
      const rate = p >= 150 ? 0.08 : 0.136;
      const fee = p * rate;
      return { 
        rateText: p >= 150 ? "8.0% (Zero per-order fee)" : "13.6%", 
        fee: +fee.toFixed(2), 
        effectiveRate: (rate * 100).toFixed(2) + "%" 
      };
    }
  }
];

export default function Ebay() {
  const [searchQuery, setSearchQuery] = useState('');
  const [calcCategory, setCalcCategory] = useState('Most categories');
  const [calcPrice, setCalcPrice] = useState(120);
  const inrConversionRate = 86.5; // Approximate INR per USD for Indian export sellers

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return ebayFeeCategories;
    return ebayFeeCategories.filter(item => 
      item.category.toLowerCase().includes(q) || 
      item.subtext.toLowerCase().includes(q) ||
      item.finalValueFee.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const activeCalcItem = ebayFeeCategories.find(c => c.category === calcCategory) || ebayFeeCategories[0];
  const priceNum = Math.max(0, Number(calcPrice) || 0);
  const calcResult = activeCalcItem.calc(priceNum);
  const netUsdPayout = Math.max(0, +(priceNum - calcResult.fee).toFixed(2));
  const estimatedInrPayout = Math.round(netUsdPayout * inrConversionRate);

  const deliverables = [
    'Official eBay Partner Network integration & account onboarding',
    'International cross-border KYC and Payoneer INR bank linkage',
    'Cassini Search Algorithm listing title & item specifics SEO',
    'Zero-insertion fee allocation management (250 free listings optimization)',
    'Global shipping policy setup (eIS, DHL Express, India Post Tracked)',
    'eBay Promoted Listings campaigns (Standard Rev-Share & Advanced CPC)',
    'VeRO (Verified Rights Owner) policy & intellectual property defense',
    'Multi-variation product uploads with high-resolution image galleries',
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="eBay Global Management"
        subtitle="Expand your eCommerce exports to 190+ countries with official eBay Partner Network accreditation, 250 free monthly listings, and optimized cross-border payouts."
      />

      <BasicPage
        heading="eBay Cross-Border Seller Growth Services"
        image="/partner-logos/ebay-partner-network.jpg"
        className="w-56"
        content="As an accredited eBay Partner Network agency, EcomEase empowers Indian manufacturers, D2C brands, and multi-category exporters to capture high-ticket international buyer demand across the United States, United Kingdom, Germany, Australia, and 190+ markets worldwide. Selling cross-border on eBay offers significant margin advantages: 250 free insertion listings each month, lower fee thresholds on high-value transactions, direct USD-to-INR wire transfers via Payoneer, and zero domestic return liabilities through the eBay International Shipping (eIS) program. From setting up your multi-currency store and optimizing listings for eBay's Cassini search algorithm to managing Promoted Listings and international customs documentation, our dedicated export account managers ensure rapid international traction and sustainable profitability."
      />

      {/* =========================================================================
          OFFICIAL EBAY BASIC FEE SCHEDULE (FROM EBAY SELLER SCHEDULE)
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Coins className="w-3.5 h-3.5" />
            <span>Official eBay Fee Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Basic Fees for Most Categories
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            In the table below, you will find the basic fees for items listed in most categories and the number of zero insertion fee listings you receive each month.
          </p>
        </div>

        {/* Global Export Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
              <Tag className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">250 Listings Free</div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-1">
              Zero Insertion Fee Allowance
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Every seller gets 250 free monthly listings across most categories before the $0.35 per listing fee kicks in.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Percent className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">2.35% Tier Drop</div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1">
              High-Ticket Sales Advantage
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Portions of sales over $7,500 drop dramatically from 13.6% down to just 2.35% FVF, boosting your margins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">190+ Countries</div>
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
              Direct Cross-Border Payouts
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Automated daily or weekly USD payouts deposited directly into your Indian bank account via Payoneer.
            </p>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE EBAY FINAL VALUE FEE (FVF) CALCULATOR
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/60 border border-white/15 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold mb-2">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Live Fee Simulator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Interactive eBay Final Value Fee (FVF) & Net Payout Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Estimate your exact eBay fees, net USD payout, and converted INR earnings per unit sold.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1.5 rounded-xl bg-slate-800 border border-white/10 text-slate-300 w-fit">
              1 USD ≈ ₹{inrConversionRate}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Product Category
                </label>
                <select
                  value={calcCategory}
                  onChange={(e) => setCalcCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 font-medium"
                >
                  {ebayFeeCategories.map((cat, idx) => (
                    <option key={idx} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2">
                  {activeCalcItem.subtext}
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Item Selling Price (USD $)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-base font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl pl-9 pr-4 py-3 text-base text-white font-mono font-bold focus:outline-none focus:border-cyan-400"
                    placeholder="120"
                  />
                </div>
              </div>

              {/* Category-Specific Rules Badge */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-2 text-xs">
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Applied Rate Formula
                </div>
                <div className="text-cyan-300 font-mono font-semibold">
                  {calcResult.rateText}
                </div>
                <div className="text-[11px] text-slate-400">
                  Insertion Fee: <span className="text-slate-200">{activeCalcItem.insertionFee}</span>
                </div>
              </div>
            </div>

            {/* Right Output Card */}
            <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 pb-3 border-b border-white/10 flex items-center justify-between">
                  <span>Unit Economics Breakdown</span>
                  <span className="text-emerald-400 font-mono">Gross: ${priceNum.toFixed(2)}</span>
                </div>

                <div className="space-y-3.5 mt-4 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Effective Final Value Fee Rate:</span>
                    <span className="font-mono text-cyan-400 font-bold">{calcResult.effectiveRate}</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>Estimated Final Value Fee:</span>
                    <span className="font-mono text-rose-400 font-bold">-${calcResult.fee.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>Insertion Fee (Within 250 free):</span>
                    <span className="font-mono text-emerald-400 font-bold">$0.00</span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-center text-sm font-bold text-white">
                    <span>Net USD Payout:</span>
                    <span className="font-mono text-lg text-emerald-400">${netUsdPayout.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Repatriation in INR */}
              <div className="mt-6 pt-4 border-t border-dashed border-white/15">
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                      Estimated INR Inward Wire
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Deposited to Indian Current Account
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300 font-mono">
                    ₹{estimatedInrPayout.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            OFFICIAL FEE TABLE WITH SEARCH & CATEGORY FILTER
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Complete Category Fee & Insertion Rate Schedule
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Showing all 12 official category schedules from the official eBay Seller rates documentation.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search category or fee..."
                className="w-full bg-slate-950 border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold w-1/3">Category & Sub-groups</th>
                  <th className="py-3 px-4 font-semibold text-slate-300 w-1/4">Insertion Fee</th>
                  <th className="py-3 px-4 font-semibold text-amber-400 text-right">Final Value Fee (FVF) % + Per Order Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold text-white text-xs sm:text-sm">{row.category}</div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">{row.subtext}</div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                          {row.insertionFee}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <div className="text-amber-300 font-mono font-semibold text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                          {row.finalValueFee}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-400 text-xs">
                      No categories found matching &quot;{searchQuery}&quot;. Clear search to view all.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Official Document Footnote */}
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Notes for Basic fees:</strong> * Starting price is the starting price (auction-style listings) or Buy It Now price (fixed price listings) of your listing, and doesn&apos;t include shipping, handling, taxes, or fees. For vehicles, specific eBay Motors fee tables apply.
            </p>
          </div>
        </div>

        {/* =========================================================================
            KEY STRATEGIC ADVANTAGES OF SELLING ON EBAY WITH ECOMEASE
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Why Indian Brands & Exporters Win on eBay
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Leverage eBay&apos;s mature buyer base in North America and Western Europe with proven high-converting export operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Zero Domestic Return Hassles</div>
                <p className="text-xs text-slate-300 mt-1">
                  eBay International Shipping (eIS) protects international sellers against return fraud, handling customer refunds and domestic return transit automatically.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">High Average Order Values (AOV)</div>
                <p className="text-xs text-slate-300 mt-1">
                  Collectibles, handicrafts, ethnic apparel, auto parts, and precision instruments command 3x - 5x higher margins than domestic Indian marketplaces.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Cassini Search Optimization</div>
                <p className="text-xs text-slate-300 mt-1">
                  We structure your titles, mandatory item specifics, and high-DPI image galleries to secure Top 10 organic placements on high-intent buyer searches.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-white">Top Rated Seller (TRS) Status</div>
                <p className="text-xs text-slate-300 mt-1">
                  Achieving TRS and TRS Plus unlocks exclusive 10% Final Value Fee discounts and the coveted Top Rated badge, drastically boosting conversion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Cross-Link Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Expanding to Amazon US, UK & Europe as well?</div>
              <div className="text-xs text-slate-300">Explore our Amazon Global Expansion program with all 37 US referral categories.</div>
            </div>
          </div>
          <Link
            to="/amazon-global-expansion"
            className="btn-pressable inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs whitespace-nowrap shadow-lg shadow-blue-500/25"
          >
            <span>View Amazon Global</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

      {/* =========================================================================
          PRICING PACKAGE
          ========================================================================= */}
      <SinglePriceCard
        planName="eBay Global Export Growth"
        planPrice="19999"
        services={deliverables}
      />
    </div>
  );
}
