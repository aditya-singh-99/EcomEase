import { useState } from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import PriceCards from "../components/PriceCards";
import { 
  Percent, 
  Award, 
  RotateCcw, 
  ShieldCheck, 
  HelpCircle, 
  Coins, 
  Package, 
  Sparkles
} from 'lucide-react';

export default function Flipkart() {
  const [activeWeightFilter, setActiveWeightFilter] = useState('All Slabs');

  // 1. Commission Slabs
  const commissionSlabs = [
    { orderValue: '₹0 - ₹1,000', fee: '0%', badge: 'Zero Commission Benefit', highlight: true },
    { orderValue: '>= ₹1,001', fee: '13.5%', badge: 'Standard Marketplace Rate', highlight: false },
  ];

  // 2. Fixed Fee Slabs
  const fixedFeeSlabs = [
    { orderValue: '₹0 - ₹1,500', fee: '₹0', badge: 'Zero Fixed Fee', highlight: true },
    { orderValue: '> ₹1,501', fee: '₹31', badge: 'Standard Flat Rate', highlight: false },
  ];

  // Seller Performance Tiers
  const tierData = [
    { tier: 'Bronze Seller', fixedFee: 'Base Slab', badge: 'Entry Tier', benefit: 'Standard Marketplace Access' },
    { tier: 'Silver Seller', fixedFee: 'Discounted', badge: 'Growth Tier', benefit: 'Priority Onboarding & Support' },
    { tier: 'Gold Seller', fixedFee: 'Highly Discounted', badge: 'High Volume', benefit: 'F-Assured Fast-Track Badging' },
    { tier: 'Diamond Seller', fixedFee: 'Lowest Rate', badge: 'Enterprise Tier', benefit: 'Dedicated Account Manager & Top PLA Bids' },
  ];

  // 3. Collection Fee
  const collectionFeeData = [
    { orderValue: '> ₹0', prepaid: '₹0', postpaid: '₹0' },
  ];

  // 4. Complete Reverse Shipping Fee Matrix
  const reverseShippingData = [
    {
      slab: '0kg - 0.5kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 0kg Every +0.5kg', local: '₹119 + ₹0', zonal: '₹139 + ₹0', national: '₹175 + ₹0' },
        { price: '₹501 - ₹1000', weight: 'For 0kg Every +0.5kg', local: '₹144 + ₹0', zonal: '₹164 + ₹0', national: '₹200 + ₹0' },
        { price: '>= ₹1001', weight: 'For 0kg Every +0.5kg', local: '₹154 + ₹0', zonal: '₹174 + ₹0', national: '₹210 + ₹0' },
      ]
    },
    {
      slab: '0.5kg - 1kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 0.5kg Every +0.5kg', local: '₹154 + ₹0', zonal: '₹189 + ₹0', national: '₹230 + ₹0' },
        { price: '₹501 - ₹1000', weight: 'For 0.5kg Every +0.5kg', local: '₹179 + ₹0', zonal: '₹214 + ₹0', national: '₹255 + ₹0' },
        { price: '>= ₹1001', weight: 'For 0.5kg Every +0.5kg', local: '₹189 + ₹0', zonal: '₹224 + ₹0', national: '₹265 + ₹0' },
      ]
    },
    {
      slab: '1kg - 1.5kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 1kg Every +0.5kg', local: '₹204 + ₹0', zonal: '₹239 + ₹0', national: '₹290 + ₹0' },
        { price: '₹501 - ₹1000', weight: 'For 1kg Every +0.5kg', local: '₹229 + ₹0', zonal: '₹264 + ₹0', national: '₹315 + ₹0' },
        { price: '>= ₹1001', weight: 'For 1kg Every +0.5kg', local: '₹239 + ₹0', zonal: '₹274 + ₹0', national: '₹325 + ₹0' },
      ]
    },
    {
      slab: '1.5kg - 2kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 1.5kg Every +0.5kg', local: '₹244 + ₹0', zonal: '₹289 + ₹0', national: '₹340 + ₹0' },
        { price: '₹501 - ₹1000', weight: 'For 1.5kg Every +0.5kg', local: '₹269 + ₹0', zonal: '₹314 + ₹0', national: '₹365 + ₹0' },
        { price: '>= ₹1001', weight: 'For 1.5kg Every +0.5kg', local: '₹279 + ₹0', zonal: '₹324 + ₹0', national: '₹375 + ₹0' },
      ]
    },
    {
      slab: '2kg - 3kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 2kg Every +0.5kg', local: '₹244 + ₹38', zonal: '₹289 + ₹45', national: '₹340 + ₹50' },
        { price: '₹501 - ₹1000', weight: 'For 2kg Every +0.5kg', local: '₹269 + ₹38', zonal: '₹314 + ₹45', national: '₹365 + ₹50' },
        { price: '>= ₹1001', weight: 'For 2kg Every +0.5kg', local: '₹279 + ₹38', zonal: '₹324 + ₹45', national: '₹375 + ₹50' },
      ]
    },
    {
      slab: '3kg - 12kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 3kg Every +1kg', local: '₹320 + ₹26', zonal: '₹379 + ₹30', national: '₹440 + ₹36' },
        { price: '₹501 - ₹1000', weight: 'For 3kg Every +1kg', local: '₹345 + ₹26', zonal: '₹404 + ₹30', national: '₹465 + ₹36' },
        { price: '>= ₹1001', weight: 'For 3kg Every +1kg', local: '₹355 + ₹26', zonal: '₹414 + ₹30', national: '₹475 + ₹36' },
      ]
    },
    {
      slab: '> 12kg',
      rates: [
        { price: '₹0 - ₹500', weight: 'For 12kg Every +1kg', local: '₹554 + ₹16', zonal: '₹649 + ₹17', national: '₹764 + ₹20' },
        { price: '₹501 - ₹1000', weight: 'For 12kg Every +1kg', local: '₹579 + ₹16', zonal: '₹674 + ₹17', national: '₹789 + ₹20' },
        { price: '>= ₹1001', weight: 'For 12kg Every +1kg', local: '₹589 + ₹16', zonal: '₹684 + ₹17', national: '₹799 + ₹20' },
      ]
    }
  ];

  const weightTabs = ['All Slabs', '0kg - 0.5kg', '0.5kg - 1kg', '1kg - 1.5kg', '1.5kg - 2kg', '2kg - 3kg', '3kg - 12kg', '> 12kg'];

  const filteredReverseShipping = activeWeightFilter === 'All Slabs' 
    ? reverseShippingData 
    : reverseShippingData.filter(d => d.slab === activeWeightFilter);

  // 5. Customer Refund (Logistics Returns)
  const refundRules = [
    { feeType: 'Commission', forward: 'Charged', reverse: 'Reversed' },
    { feeType: 'Fixed Fee', forward: 'Charged', reverse: '-' },
    { feeType: 'Shipping Fee (Reverse)', forward: '-', reverse: 'Charged' },
    { feeType: 'Pick and Pack Fee', forward: 'Charged', reverse: '-' },
  ];

  // 6. Replacement Requests
  const replacementRules = [
    { feeType: 'Commission', forward: 'Charged', reverse: 'Reversed', replacement: 'Charged' },
    { feeType: 'Fixed Fee', forward: 'Charged', reverse: '-', replacement: '-' },
    { feeType: 'Shipping Fee (Reverse)', forward: '-', reverse: 'Charged', replacement: '-' },
    { feeType: 'Pick and Pack Fee', forward: 'Charged', reverse: '-', replacement: 'Charged' },
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Flipkart"
        subtitle="Scale your brand across India's largest marketplace with F-Assured badging, BBD campaign preparation, and automated fee reconciliation."
      />

      <BasicPage
        heading="Flipkart Account Management Services"
        image="Flipkart_Logo.gif"
        className="w-[80%] max-h-72"
        content="Strategic planning and professional account management are essential for success on Flipkart, one of the biggest eCommerce platforms in India. By optimizing your Flipkart seller account, our committed Account Management staff makes sure you meet your sales goals and grow your company profitably. In order to avoid any interruptions that can have an impact on your revenue and growth, we put a lot of effort into keeping your account healthy, resolving operational issues, and offering a flawless experience. We offer specialized services for managing your Flipkart account in every way. We handle every aspect, from improving product listings and inventory control to executing powerful promotions and creating aggressive price plans. Our proactive approach lets you concentrate on providing your clients with high-quality items by keeping an eye on things constantly and resolving problems quickly. Join forces with us to optimize Flipkart operations and realize the maximum potential of your company. With the help of our experience, you may increase sales, draw in more clients, and stand out in the crowded market. Give us the details of managing your Flipkart account so you may focus on expanding your business and succeeding more."
      />

      {/* =========================================================================
          FLIPKART OFFICIAL SELLER CHARGES & TIERS (OFFICIAL FLIPKART SCHEDULE)
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Official Flipkart Seller Charges</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flipkart Commission, Fixed Fees, Reverse Shipping & Returns
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Transparent and complete documentation of Flipkart&apos;s marketplace charges, tier benefits, reverse logistics rate card, and return/replacement policies.
          </p>
        </div>

        {/* =========================================================================
            1. COMMISSION SECTION
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center">
                <Percent className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Commission</h3>
                <span className="text-[11px] text-slate-400 font-medium">Platform Usage Fee</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
              ₹0 - ₹1,000 = 0% Fee
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            This fee is charged for use of Flipkart&apos;s marketplace platform. The applicable slabs are selected on Order Item Value and the fee is calculated as a percentage of the Seller Price. It excludes discounts offered by the seller and any Customer Add-ons amount recovery. Commission rates vary by sub-category and, in some cases, by FSN. <strong>Commission is not charged in case of customer or logistic returns.</strong>
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Order Item Value</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Fee Charged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {commissionSlabs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <span>{row.orderValue}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 hidden sm:inline">
                        {row.badge}
                      </span>
                    </td>
                    <td className={`py-3.5 px-4 text-right font-mono font-bold ${row.highlight ? 'text-emerald-400 text-base' : 'text-cyan-400'}`}>
                      {row.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            2. FIXED FEE & SELLER TIERS
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fixed Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Per Successful Order Fee</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 w-fit">
              ₹0 - ₹1,500 = ₹0 Fee
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            This fee is charged on every successful sale on Flipkart&apos;s marketplace platform that is any order which is not cancelled. The rate varies based on the seller tier. The fixed fee will be according to your tier on that date: <strong className="text-white">Bronze Seller, Silver Seller, Gold Seller, Diamond Seller</strong>.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Fixed Fee Slabs Table */}
            <div className="lg:col-span-5 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950/60">
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4 font-semibold">Order Item Value</th>
                    <th className="py-3 px-4 font-semibold text-right">Fee Charged</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-black/40">
                  {fixedFeeSlabs.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-bold text-white">{row.orderValue}</td>
                      <td className={`py-3 px-4 text-right font-mono font-bold ${row.highlight ? 'text-emerald-400 text-base' : 'text-yellow-400'}`}>
                        {row.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Seller Tiers Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {tierData.map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                      {t.badge}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-2 leading-tight">{t.tier}</h4>
                  </div>
                  <div className="text-[11px] font-mono text-yellow-400 font-semibold mt-2">
                    {t.fixedFee}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. COLLECTION FEE
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Coins className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Collection Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Payment Gateway Charges</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
              100% Free Payment Processing
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Payment collection charges for orders placed on Flipkart&apos;s marketplace platform and the rates can vary for Prepaid and COD orders.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Order Item Value</th>
                  <th className="py-3.5 px-4 font-semibold text-center text-emerald-400">Prepaid Orders</th>
                  <th className="py-3.5 px-4 font-semibold text-right text-emerald-400">Postpaid (COD) Orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {collectionFeeData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.orderValue}</td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-emerald-400 bg-emerald-500/5">
                      {row.prepaid}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-400 bg-emerald-500/5">
                      {row.postpaid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            4. REVERSE SHIPPING FEE (COMPLETE MATRIX)
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Reverse Shipping Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Customer Return Logistics Rate Card</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
              Official Weight Slabs
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Charged on reverse pick-up and shipping when customers return a product, and varies based on the shipment weight, order item value and shipment zone.
          </p>

          {/* Weight Slab Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {weightTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveWeightFilter(tab)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeWeightFilter === tab
                    ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/20'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Full Reverse Shipping Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-3 sm:px-4 font-semibold">Weight Slab</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold">Order Item Price</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-slate-300">Base Weight Spec</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-cyan-400">Local Zone</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-slate-300">Zonal</th>
                  <th className="py-3 px-3 sm:px-4 font-semibold text-right text-rose-400">National Zone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {filteredReverseShipping.map((group, gIdx) => (
                  group.rates.map((rate, rIdx) => (
                    <tr key={`${gIdx}-${rIdx}`} className="hover:bg-white/[0.02] transition-colors">
                      {rIdx === 0 && (
                        <td 
                          rowSpan={group.rates.length} 
                          className="py-3.5 px-3 sm:px-4 font-bold text-white align-top border-r border-white/5 bg-white/[0.01]"
                        >
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-mono text-xs">
                            {group.slab}
                          </span>
                        </td>
                      )}
                      <td className="py-3 px-3 sm:px-4 text-white font-medium">{rate.price}</td>
                      <td className="py-3 px-3 sm:px-4 text-slate-400 text-[11px] font-mono">{rate.weight}</td>
                      <td className="py-3 px-3 sm:px-4 text-cyan-400 font-mono font-semibold">{rate.local}</td>
                      <td className="py-3 px-3 sm:px-4 text-slate-300 font-mono">{rate.zonal}</td>
                      <td className="py-3 px-3 sm:px-4 text-rose-300 font-mono text-right">{rate.national}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>

          {/* Reverse Shipping Example from Document */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-blue-950/40 border border-blue-500/30 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Official Calculation Example from Flipkart Rate Card
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              You want to calculate the reverse shipping fee of a <strong className="text-white">3.0 kg product</strong> that costs <strong className="text-white">₹280</strong> in the <strong className="text-cyan-400">local zone</strong>:
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950/60 text-slate-400">
                  <tr className="border-b border-white/10">
                    <th className="py-2 px-3">Weight Slab</th>
                    <th className="py-2 px-3">Price</th>
                    <th className="py-2 px-3">Base Weight</th>
                    <th className="py-2 px-3 text-cyan-400">Local</th>
                    <th className="py-2 px-3 text-slate-300">Zonal</th>
                    <th className="py-2 px-3 text-slate-300">National</th>
                  </tr>
                </thead>
                <tbody className="bg-black/50 text-slate-300 font-mono">
                  <tr>
                    <td className="py-2 px-3 text-white font-bold">2.0 kg - 3.0 kg</td>
                    <td className="py-2 px-3">₹0 - ₹300</td>
                    <td className="py-2 px-3 text-slate-400">for 2.0 kg Every +0.5 kg</td>
                    <td className="py-2 px-3 text-cyan-400 font-bold">₹0 + ₹5</td>
                    <td className="py-2 px-3">₹0 + ₹5</td>
                    <td className="py-2 px-3">₹16 + ₹5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Base rate for 2.0 kg within the price range of ₹0 - ₹300 in local zone is <strong>₹0</strong>.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Additional charge / 0.5 kg = <strong>₹5</strong>.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Therefore, additional charge for 1.0 kg = ₹5 × 2 = <strong>₹10</strong>.</span>
              </div>
              <div className="pt-2 text-sm text-emerald-400 font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Total shipping fees → ₹0 + ₹10 = ₹10</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            5. FEE APPLICABLE FOR CUSTOMER REFUND (LOGISTICS RETURNS)
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fee Applicable for Customer Refund</h3>
                <span className="text-[11px] text-slate-400 font-medium">Logistics Returns (Unsuccessful Delivery / Cancellations)</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
              Customer Refund Policy
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Marketplace Fee is not charged to the orders that are returned due to unsuccessful delivery or customer cancellations. These returns are termed as Logistics Return. The following fee will be charged for customer return shipments.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold">Fee Type</th>
                  <th className="py-3 px-4 font-semibold text-slate-300">Forward Shipment</th>
                  <th className="py-3 px-4 font-semibold text-rose-400 text-right">Reverse Shipment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {refundRules.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.feeType}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.forward}</td>
                    <td className={`py-3.5 px-4 text-right font-semibold ${row.reverse === 'Reversed' ? 'text-emerald-400' : row.reverse === 'Charged' ? 'text-rose-400' : 'text-slate-500'}`}>
                      {row.reverse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            6. FEES APPLICABLE ON CUSTOMER RETURNS: REPLACEMENT REQUESTS
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fees Applicable on Customer Returns: Replacement Requests</h3>
                <span className="text-[11px] text-slate-400 font-medium">New Replacement Dispatches</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit">
              Replacement Policy
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            A replacement order refers to a new shipment dispatched to the customer to replace an item from their original purchase. The following fee will apply to Customer Returns: Replacement Shipments.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold">Fee Type</th>
                  <th className="py-3 px-4 font-semibold text-slate-300">Forward Shipment</th>
                  <th className="py-3 px-4 font-semibold text-rose-400">Reverse Shipment</th>
                  <th className="py-3 px-4 font-semibold text-right text-cyan-400">Replacement Shipment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {replacementRules.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.feeType}</td>
                    <td className="py-3.5 px-4 text-slate-300">{row.forward}</td>
                    <td className={`py-3.5 px-4 font-semibold ${row.reverse === 'Reversed' ? 'text-emerald-400' : row.reverse === 'Charged' ? 'text-rose-400' : 'text-slate-500'}`}>
                      {row.reverse}
                    </td>
                    <td className={`py-3.5 px-4 text-right font-semibold ${row.replacement === 'Charged' ? 'text-cyan-300' : 'text-slate-500'}`}>
                      {row.replacement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* Pricing Cards */}
      <PriceCards
        plan1={{
          planName: "Standard",
          monthlyPrice: "3299",
          quaterlyPrice: "9499",
          services: [
            "Listings Addition (Up to 50)",
            "SPF Claim Filing (Up to 45)",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Suggestion on Listings Ratings & Reviews",
            "Category Approval",
            "Filing Brand Approvals",
            "Tier Elevation Guidance",
            "Growth Suggestions",
          ],
        }}
        plan2={{
          planName: "Advance",
          monthlyPrice: "4999",
          quaterlyPrice: "12999",
          services: [
            "Listings Addition (Up to 100)",
            "SPF Claim Filing (Up to 85)",
            "Promotions and Deals Optimization",
            "Infographics Images (Up to 5)",
            "Advertisement Optimization",
            "PLA Ad Campaigns & ROAS Scaling",
            "Category Approval",
            "Filing Brand Approvals",
            "FBF Warehouse Allocation",
            "Growth Suggestions",
          ],
        }}
        plan3={{
          planName: "Premium",
          monthlyPrice: "8999",
          quaterlyPrice: "21999",
          services: [
            "Listings Addition (Up to 150)",
            "SPF Claim Filing (Up to 100)",
            "Promotions and Deals",
            "Infographics Images (Up to 15)",
            "F-Assured Badge Qualification",
            "Reconciliation Report Monthly",
            "Big Billion Days (BBD) Master Planning",
            "Advertisement Optimization (PLA + PCA)",
            "Category Approval",
            "Filing Brand Approvals",
            "Growth Suggestions",
          ],
        }}
      />
    </div>
  );
}