import { useState, useMemo } from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import PriceCards from "../components/PriceCards";
import { 
  Percent, 
  Search, 
  Calculator,
  Sparkles,
  CheckCircle2,
  Info,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Globe,
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { amazonCategories } from '../data/amazonFeeData';
import { amazonUsRates } from '../data/amazonGlobalFeeData';

export default function Amazon() {
  const [amazonScope, setAmazonScope] = useState('india'); // 'india' | 'global'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All Departments');
  const [calcCategoryName, setCalcCategoryName] = useState('Home & Kitchen Decor');
  const [calcPrice, setCalcPrice] = useState(850);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Amazon Global States
  const [globalSearch, setGlobalSearch] = useState('');
  const [calcUsPrice, setCalcUsPrice] = useState(45);
  const [calcUsCategory, setCalcUsCategory] = useState('Home and Kitchen');

  // Table 1. Closing Fee for Easy Ship, Self-Ship and Seller Flex
  const closingFeesTable1 = [
    { slab: '₹0 - ₹300', easyShip: '₹2', selfShip: '₹20', sellerFlex: '₹7' },
    { slab: '₹301 - ₹500', easyShip: '₹23', selfShip: '₹26', sellerFlex: '₹13' },
    { slab: '₹501 - ₹1,000', easyShip: '₹48', selfShip: '₹51', sellerFlex: '₹38' },
    { slab: 'Above ₹1,000', easyShip: '₹79', selfShip: '₹101', sellerFlex: '₹69' },
  ];

  // Table 2. Closing Fee for fulfilment centre (excluding Seller Flex)
  const closingFeesTable2 = [
    { slab: '₹0 - ₹300', standard: '₹27', groupA: '₹21 (A)', groupB: '₹14 (B)' },
    { slab: '₹301 - ₹500', standard: '₹23', groupA: '₹19 (C)', groupB: '₹15 (D)' },
    { slab: '₹501 - ₹1,000', standard: '₹30', groupA: '₹30', groupB: '₹30' },
    { slab: 'Above ₹1,000', standard: '₹55 / ₹75*', groupA: '₹55', groupB: '₹55' },
  ];

  const groups = [
    'All Departments',
    'Media',
    'Consumables',
    'Softline',
    'Other Hardline',
    'CE/PC/Wireless'
  ];

  // Filter categories
  const filteredCategories = useMemo(() => {
    return amazonCategories.filter(item => {
      const matchesGroup = selectedGroup === 'All Departments' || item.group === selectedGroup;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        item.category.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.slabs.some(s => s.toLowerCase().includes(q));
      return matchesGroup && matchesQuery;
    });
  }, [searchQuery, selectedGroup]);

  // Pagination
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage) || 1;
  const paginatedCategories = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCategories.slice(start, start + itemsPerPage);
  }, [filteredCategories, currentPage]);

  // Helper for live rate calculator
  const activeCalcCategory = amazonCategories.find(c => c.category === calcCategoryName) || amazonCategories[0];
  
  const calcResult = useMemo(() => {
    const price = Number(calcPrice) || 0;
    if (!activeCalcCategory || !activeCalcCategory.slabs || activeCalcCategory.slabs.length === 0) {
      return { rateText: '5.00%', fee: Math.round(price * 0.05), isZero: false };
    }

    // Try to find matching slab
    for (const slab of activeCalcCategory.slabs) {
      if (slab.includes('<= 1,000') && price <= 1000) {
        if (slab.startsWith('0.00%') || slab.startsWith('0%')) {
          return { rateText: '0.00% (Sub-₹1k Zero Fee)', fee: 0, isZero: true };
        }
      }
      if (slab.includes('<= 500') && price <= 500) {
        if (slab.startsWith('0.00%') || slab.startsWith('0%')) {
          return { rateText: '0.00% (Sub-₹500 Zero Fee)', fee: 0, isZero: true };
        }
      }
      if (slab.includes('<= 300') && price <= 300) {
        if (slab.startsWith('0.00%') || slab.startsWith('0%')) {
          return { rateText: '0.00% (Sub-₹300 Zero Fee)', fee: 0, isZero: true };
        }
      }
      if (slab.includes('<= 250') && price <= 250) {
        if (slab.startsWith('0.00%') || slab.startsWith('0%')) {
          return { rateText: '0.00% (Sub-₹250 Zero Fee)', fee: 0, isZero: true };
        }
      }
    }

    // Default rate detection from last slab or flat rate
    const lastSlab = activeCalcCategory.slabs[activeCalcCategory.slabs.length - 1];
    const match = lastSlab.match(/(\d+(?:\.\d+)?)%/);
    const ratePercent = match ? parseFloat(match[1]) : 10;
    const fee = Math.round(price * (ratePercent / 100));
    return {
      rateText: `${ratePercent.toFixed(2)}%`,
      fee: fee,
      isZero: fee === 0
    };
  }, [activeCalcCategory, calcPrice]);

  const netRetained = (Number(calcPrice) || 0) - calcResult.fee;

  // Amazon Global Calculations & Search Filters
  const filteredGlobalRates = useMemo(() => {
    const q = globalSearch.toLowerCase().trim();
    if (!q) return amazonUsRates;
    return amazonUsRates.filter(r => 
      r.category.toLowerCase().includes(q) || 
      r.rate.toLowerCase().includes(q)
    );
  }, [globalSearch]);

  const activeUsCategory = useMemo(() => {
    return amazonUsRates.find(c => c.category === calcUsCategory) || amazonUsRates[0];
  }, [calcUsCategory]);

  const calcUsResult = useMemo(() => {
    const p = Number(calcUsPrice) || 0;
    if (!activeUsCategory || !activeUsCategory.calc) {
      return { rateText: '15.00%', fee: +(p * 0.15).toFixed(2) };
    }
    return activeUsCategory.calc(p);
  }, [activeUsCategory, calcUsPrice]);

  const netUsRetained = ((Number(calcUsPrice) || 0) - calcUsResult.fee).toFixed(2);

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Amazon"
        subtitle="Dominate Seller Central with official SPN expertise, FBA warehouse allocation, Buy Box algorithm mastery, and automated fee recovery."
      />

      <BasicPage
        heading="Amazon Account Management Services"
        image="Amazon_Logo.gif"
        className="w-[90%]"
        content="It takes skill and a calculated approach to negotiate the vast and cutthroat Amazon marketplace. Our committed staff of account managers is here to improve your Amazon seller account, assisting you in hitting your sales goals and expanding your company. To optimize your revenue and growth potential, we concentrate on addressing operational difficulties, maintaining uninterrupted operations, and enhancing the health of your account. We offer all-inclusive services that address every facet of managing your Amazon account. We handle everything, from optimizing product listings with content that is optimized for search engines to maintaining inventory, launching focused advertising campaigns, and putting dynamic pricing strategies into place. We monitor your account proactively to ensure that any difficulties are resolved quickly and that it remains in good condition. When you work with us, you can concentrate on locating and producing top-notch products, and we'll take care of the intricate Amazon platform operations. Our experience guarantees that your brand sticks out in the congested industry, drawing in more clients and increasing revenue. Give us control of your Amazon account so you can focus on growing your company and hitting new milestones."
      />

      {/* =========================================================================
          SELLING ON AMAZON: OFFICIAL FEE SCHEDULE & CLOSING FEE TABLES
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Official Amazon Fee Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Amazon Referral & Closing Fee Rate Cards
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparent breakdown of Amazon India&apos;s official referral commissions across all 234 categories, closing fees across Easy Ship, Self-Ship, Seller Flex, and Fulfillment Center (FBA) channels.
          </p>
        </div>

        {/* How to Find Fee Category Step-by-Step Guide */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-white/10 mb-12 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              How to Find the Fee Category of a Product in Seller Central
            </h4>
          </div>
          <p className="text-xs text-slate-300 mb-3">
            To verify the exact fee category assigned to your product, open <a href="https://sellercentral.amazon.in/inventory" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline inline-flex items-center gap-1 font-semibold">Manage Inventory <ExternalLink className="w-3 h-3" /></a> and follow these 3 steps:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-cyan-400 font-bold font-mono">Step 1</div>
              <div className="text-slate-200 font-medium">Enter the SKU or ASIN of the product into the Search box.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-cyan-400 font-bold font-mono">Step 2</div>
              <div className="text-slate-200 font-medium">Click the value in the &ldquo;Estimated fees per unit sold&rdquo; column.</div>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="text-cyan-400 font-bold font-mono">Step 3</div>
              <div className="text-slate-200 font-medium">Click the info icon next to the Referral fee value to view the category.</div>
            </div>
          </div>
        </div>

        {/* Table 1: Closing Fee for Easy Ship, Self-Ship, and Seller Flex */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10 overflow-x-auto">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">
                Table 1. Closing Fee for Easy Ship, Self-Ship and Seller Flex
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Fixed closing fee based on the item price paid by the buyer, including shipping or gift-wrap charges.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit">
              Table 1 Schedule
            </span>
          </div>

          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="pb-3 font-semibold">Item Price Slab (INR)</th>
                <th className="pb-3 font-semibold text-cyan-400">Easy Ship / Easy Ship Prime</th>
                <th className="pb-3 font-semibold text-slate-300">Self-Ship</th>
                <th className="pb-3 font-semibold text-emerald-400">Seller Flex</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {closingFeesTable1.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-bold text-white">{row.slab}</td>
                  <td className="py-3.5 text-cyan-400 font-mono font-bold bg-cyan-500/5 px-2 rounded-lg">{row.easyShip}</td>
                  <td className="py-3.5 text-slate-300 font-mono">{row.selfShip}</td>
                  <td className="py-3.5 text-emerald-400 font-mono font-bold">{row.sellerFlex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2: Closing Fee for Fulfilment Centre (FBA) */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12 overflow-x-auto">
          <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">
                Table 2. Closing Fee for fulfilment centre (excluding Seller Flex)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Standard FBA fulfillment center fees and select fee category incentives.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 w-fit">
              Table 2 Schedule
            </span>
          </div>

          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="pb-3 font-semibold">Item Price Slab (INR)</th>
                <th className="pb-3 font-semibold text-amber-400">Standard Fee</th>
                <th className="pb-3 font-semibold text-slate-300">Select Fee categories (Group A/C)</th>
                <th className="pb-3 font-semibold text-slate-300">Select Fee categories (Group B/D)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {closingFeesTable2.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 font-bold text-white">{row.slab}</td>
                  <td className="py-3.5 text-amber-400 font-mono font-bold bg-amber-500/5 px-2 rounded-lg">{row.standard}</td>
                  <td className="py-3.5 text-slate-300 font-mono">{row.groupA}</td>
                  <td className="py-3.5 text-slate-300 font-mono">{row.groupB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =========================================================================
            LIVE AMAZON REFERRAL FEE CALCULATOR WIDGET
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Fee Estimator</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Amazon Referral Fee & Net Retained Calculator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Select any category from all 234 official categories and calculate your exact deduction and net proceeds.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Product Category ({amazonCategories.length} available)
                  </label>
                  <select
                    value={calcCategoryName}
                    onChange={(e) => setCalcCategoryName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-medium"
                  >
                    {amazonCategories.map((item, idx) => (
                      <option key={idx} value={item.category} className="bg-slate-950 text-white">
                        {item.category} ({item.group})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Item Selling Price (INR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-xs">₹</span>
                    <input
                      type="number"
                      min="50"
                      max="100000"
                      step="50"
                      value={calcPrice}
                      onChange={(e) => setCalcPrice(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-7 pr-3 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Slider for quick testing */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={calcPrice > 5000 ? 5000 : calcPrice}
                  onChange={(e) => setCalcPrice(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹100</span>
                  <span>₹1,000 (0% Threshold)</span>
                  <span>₹2,500</span>
                  <span>₹5,000+</span>
                </div>
              </div>

              {/* Incentive Badge Notification */}
              {calcResult.isZero ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    <strong>Zero Commission Active:</strong> Under Amazon&apos;s latest fee schedule, your item price qualifies for <strong>₹0 Referral Fee</strong>!
                  </span>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-slate-300 text-xs flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>
                    Referral fee of <strong>{calcResult.rateText}</strong> applies to {activeCalcCategory.category} for this price bracket.
                  </span>
                </div>
              )}
            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/70 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Fee Breakdown</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Live Preview
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Selected Category:</span>
                  <span className="font-bold text-white text-right max-w-[200px] truncate">{activeCalcCategory.category}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Product Listing Price:</span>
                  <span className="font-bold text-white font-mono">₹{Number(calcPrice).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Referral Fee Rate:</span>
                  <span className={`font-mono font-bold ${calcResult.isZero ? 'text-emerald-400' : 'text-cyan-400'}`}>
                    {calcResult.rateText}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Amazon Referral Deduction:</span>
                  <span className={`font-mono font-bold ${calcResult.isZero ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {calcResult.isZero ? '₹0.00 (Zero Fee)' : `-₹${calcResult.fee.toLocaleString('en-IN')}`}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-[11px] text-slate-400 font-medium">Estimated Net Before Logistics:</div>
                <div className="flex items-baseline justify-between mt-1">
                  <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                    ₹{netRetained.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-300/80">
                    {Math.round((netRetained / (Number(calcPrice) || 1)) * 100)}% Retained
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            STRUCTURED EXECUTIVE RATE CARD TABLE (ALL 234 CATEGORIES)
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Complete Official Rate Card ({amazonCategories.length} Categories)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Category-Wise Amazon Referral Fee Rates
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Full commission schedule across all categories, subcategories, and price slabs from the official Amazon rate schedule.
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search across 234 categories or rates..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
              />
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {groups.map((group, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedGroup(group);
                  setCurrentPage(1);
                }}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedGroup === group
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Rate Card Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Category & Department</th>
                  <th className="py-3.5 px-4 font-semibold text-slate-200">Standard Rate & Price Slabs</th>
                  <th className="py-3.5 px-4 font-semibold text-right text-slate-300">Zero Fee Slab</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {paginatedCategories.length > 0 ? (
                  paginatedCategories.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                      
                      {/* Category Name & Dept */}
                      <td className="py-4 px-4 align-top w-1/3">
                        <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {item.category}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          <span>{item.group}</span>
                        </div>
                      </td>

                      {/* Slabs rendered as distinct badges */}
                      <td className="py-4 px-4 align-top">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.slabs.map((slab, sIdx) => {
                            const isZero = slab.includes('0.00%') || slab.includes('0%');
                            return (
                              <span
                                key={sIdx}
                                className={`inline-flex items-center px-2.5 py-1 rounded-lg font-mono text-[11px] border ${
                                  isZero
                                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 font-bold'
                                    : 'bg-slate-800/80 border-white/10 text-cyan-300 font-medium'
                                }`}
                              >
                                {slab}
                              </span>
                            );
                          })}
                        </div>
                      </td>

                      {/* Sub-₹1,000 Zero Fee Status */}
                      <td className="py-4 px-4 text-right align-top whitespace-nowrap">
                        {item.hasZero ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>0% Qualified</span>
                          </span>
                        ) : (
                          <span className="inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[11px]">
                            Standard
                          </span>
                        )}
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-slate-400 text-xs">
                      No categories found matching &ldquo;{searchQuery}&rdquo;.
                      <button
                        onClick={() => { setSearchQuery(''); setSelectedGroup('All Departments'); }}
                        className="block mx-auto mt-2 text-cyan-400 hover:underline font-semibold"
                      >
                        Reset filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
              <span className="text-slate-400">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredCategories.length)} of {filteredCategories.length} categories
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 text-cyan-400 font-mono font-bold">
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 transition-all"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* =========================================================================
          MARKETPLACE SCOPE TOGGLE: AMAZON INDIA VS AMAZON GLOBAL SELLING
          (Just above the monthly billing cards)
          ========================================================================= */}
      <section className="pt-14 pb-6 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Select Management Scope</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Choose Your Operational Plans & Rate Cards
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
            Toggle between domestic Amazon India management and cross-border Amazon Global Selling export tables & pricing.
          </p>
        </div>

        {/* High-Impact Segmented Scope Toggle */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setAmazonScope('india')}
            className={`btn-pressable px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              amazonScope === 'india'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-base sm:text-lg">🇮🇳</span>
            <span>Amazon India Marketplace</span>
          </button>
          <button
            type="button"
            onClick={() => setAmazonScope('global')}
            className={`btn-pressable px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
              amazonScope === 'global'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-base sm:text-lg">🌐</span>
            <span>Amazon Global Selling (US / UK / UAE)</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          AMAZON GLOBAL TABLES & CALCULATOR (Displayed when Global is toggled)
          ========================================================================= */}
      {amazonScope === 'global' && (
        <section className="pb-12 max-w-6xl mx-auto px-4 sm:px-6 space-y-10 animate-fade-scale">
          
          {/* Global Target Regions Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇺🇸</span> Amazon North America
              </div>
              <div className="text-[11px] text-cyan-400 font-mono mt-1">$350B+ Market</div>
              <p className="text-xs text-slate-400 mt-1">Direct access to high-spending US & Canada Prime consumers with FBA export.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇬🇧</span> Amazon Europe & UK
              </div>
              <div className="text-[11px] text-emerald-400 font-mono mt-1">500M+ Consumers</div>
              <p className="text-xs text-slate-400 mt-1">VAT compliance, PAN-EU FBA warehousing, and localized marketplace listings.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <span className="text-lg">🇦🇪</span> Amazon Middle East
              </div>
              <div className="text-[11px] text-amber-400 font-mono mt-1">+65% YoY Growth</div>
              <p className="text-xs text-slate-400 mt-1">Gulf eCommerce hub in UAE & Saudi Arabia with zero customs duties for select categories.</p>
            </div>
          </div>

          {/* Interactive Live US Fee Calculator */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-cyan-950/30 border border-cyan-500/20 shadow-xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive Amazon US Fee Calculator (USD $)</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Estimate Your US Marketplace Payout & Referral Fees
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4">
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Select Product Category (37 US Categories)
                </label>
                <select
                  value={calcUsCategory}
                  onChange={(e) => setCalcUsCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  {amazonUsRates.map((c, idx) => (
                    <option key={idx} value={c.category}>{c.category}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Target Selling Price ($ USD)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">$</span>
                  <input
                    type="number"
                    min="1"
                    value={calcUsPrice}
                    onChange={(e) => setCalcUsPrice(e.target.value)}
                    className="w-full pl-7 pr-3 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-sm font-bold text-white focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-black/40 border border-white/10">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Referral Deduction</div>
                  <div className="text-lg font-bold text-rose-400 font-mono mt-0.5">
                    -${calcUsResult.fee}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">{calcUsResult.rateText}</div>
                </div>
                <div className="border-l border-white/10 pl-3">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Net Estimated Retained</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">
                    ${netUsRetained}
                  </div>
                  <div className="text-[10px] text-emerald-500/80 font-mono">Before FBA fulfillment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Amazon US Referral Fee Rates Table (37 Categories) */}
          <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Amazon US Official Referral Fee Schedule</span>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    37 Categories
                  </span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Amazon deducts the greater of the applicable referral fee percentage or the per-item minimum referral fee.
                </p>
              </div>

              {/* Search Category */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search US category or rate..."
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-medium"
                />
              </div>
            </div>

            <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="sticky top-0 bg-slate-950 z-10">
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4 font-semibold w-1/2">Fee Categories</th>
                    <th className="py-3 px-4 font-semibold text-cyan-400">Referral Fee Percentage</th>
                    <th className="py-3 px-4 font-semibold text-right text-slate-300">Minimum Per-Item Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-black/40">
                  {filteredGlobalRates.length > 0 ? (
                    filteredGlobalRates.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-3 px-4 font-bold text-white">{row.category}</td>
                        <td className="py-3 px-4 text-cyan-300 font-mono font-medium">{row.rate}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono text-right font-bold">{row.minFee}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-slate-400 text-xs">
                        No category found matching &ldquo;{globalSearch}&rdquo;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Managed Global Deliverables */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              EcomEase Turnkey International Export Scope Included
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Global Brand Registry & International Trademark Authorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Harmonized System (HS Code) customs tariff categorization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>US/UK Target Country FBA Inbound Shipment & Pallet Creation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>USD, GBP, EUR & AED Foreign Exchange wire remittance audits</span>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* =========================================================================
          MONTHLY BILLING CARDS (Amazon India vs Amazon Global Selling)
          ========================================================================= */}
      {amazonScope === 'india' ? (
        <PriceCards
          plan1={{
            planName: "Standard",
            monthlyPrice: "3999",
            quaterlyPrice: "10999",
            services: [
              "Buyer Seller Message Response",
              "Listings Addition (up to 50)",
              "Safe-T Claim Filing (up to 45)",
              "Monetary/Non-monetary Promotions",
              "Advertisement Optimization",
              "Category Approval",
              "Filing Selling Application",
              "FBA Registration & Management",
              "Growth Suggestions",
            ],
          }}
          plan2={{
            planName: "Advance",
            monthlyPrice: "5599",
            quaterlyPrice: "15999",
            services: [
              "Buyer Seller Message Response",
              "Listings Addition (up to 100)",
              "Safe-T Claim Filing (up to 85)",
              "Prime Enrollment",
              "A+ Content Addition (up to 6)",
              "Infographics Images (up to 6)",
              "Monetary/Non-monetary Promotions",
              "Advertisement Optimization",
              "Category Approval",
              "Filing Selling Application",
              "FBA Registration & Management",
              "Growth Suggestions",
            ],
          }}
          plan3={{
            planName: "Premium",
            monthlyPrice: "9499",
            quaterlyPrice: "24449",
            services: [
              "Buyer Seller Message Response",
              "Listings Addition (up to 150)",
              "Safe-T Claim Filing (up to 100)",
              "Prime Enrollment",
              "A+ Content Addition (up to 10)",
              "Infographics Images (up to 15)",
              "Promotions and Deals",
              "Brand Store Creation",
              "Brand Registry/Protection",
              "Audit Reports (every 10th Day)",
              "Reconciliation Report Monthly",
              "Strengthening Case Follow Ups",
              "Monetary/Non-monetary Promotions",
              "Advertisement Optimization",
              "Category Approval",
              "Filing Selling Application",
              "FBA Registration & Management",
              "Growth Suggestions",
            ],
          }}
        />
      ) : (
        <PriceCards
          plan1={{
            planName: "Global Launch",
            monthlyPrice: "6999",
            quaterlyPrice: "18999",
            services: [
              "US / UK / UAE Seller Central Setup",
              "Global Product Listings (up to 50)",
              "HS Code & Customs Duty Categorization",
              "FBA Export & Inbound Shipment Creation",
              "USD to INR Direct Wire Remittance Audits",
              "Category Approval & Selling Applications",
              "Buyer-Seller Message Response (Global)",
              "Safe-T & Return Claim Filing (Global)",
              "International Growth Suggestions",
            ],
          }}
          plan2={{
            planName: "Global Growth",
            monthlyPrice: "10999",
            quaterlyPrice: "29999",
            services: [
              "US / UK / UAE Seller Central Management",
              "Global Product Listings (up to 120)",
              "International Prime Badge Enrollment",
              "Global A+ Content Addition (up to 6)",
              "Infographics & Localization (up to 6)",
              "Sponsored Products & Video PPC Ads",
              "Multi-Country VAT / Tax Documentation",
              "FBA Pallet & Cross-Border Logistics",
              "Safe-T & Export Dispute Claim Filings",
              "USD/GBP Forex Remittance Reconciliations",
              "Bi-Weekly Account Performance Audits",
              "Category & Brand Authorization Support",
            ],
          }}
          plan3={{
            planName: "Global Enterprise",
            monthlyPrice: "16999",
            quaterlyPrice: "45999",
            services: [
              "Full International Multi-Region Operations",
              "Global Product Listings (up to 250)",
              "International Prime Badge Enrollment",
              "Global A+ Content Addition (up to 12)",
              "Infographics & Localization (up to 15)",
              "International Brand Store Creation",
              "Global Brand Registry & Trademark Protection",
              "Algorithmic International Sponsored PPC",
              "Sea / Air Freight 3PL Inbound Warehousing",
              "Multi-Currency (USD/GBP/EUR/AED) Wire Audits",
              "Global Deals, Coupons & Lightning Promos",
              "Dedicated Senior Global Account Manager",
              "Weekly Performance Audits & 24/7 Escalation",
              "FBA Global Pallet & Customs Compliance",
            ],
          }}
        />
      )}
    </div>
  );
}