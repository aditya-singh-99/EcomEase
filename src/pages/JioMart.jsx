import { useState } from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import SinglePriceCard from "../components/SinglePriceCard";
import { 
  Percent, 
  Tag, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Warehouse, 
  Info
} from 'lucide-react';

export default function JioMart() {
  const [activeFulfillmentTab, setActiveFulfillmentTab] = useState('direct');

  // Complete Commission Categories from Official Jiomart Seller rates.docx
  const commissionCategories = [
    {
      department: 'Groceries',
      category: 'Kitchenware',
      subCategory: 'Pots & Pans',
      productType: 'Cookware & Non Stick',
      upTo1000: '0% (Free)',
      tier2: '13.0%',
      above5000: '11.5%'
    },
    {
      department: 'Groceries',
      category: 'Tableware',
      subCategory: 'Cups, Mugs & More',
      productType: 'Cups, Mugs & More',
      upTo1000: '0% (Free)',
      tier2: '13.0%',
      above5000: '11.5%'
    },
    {
      department: 'Groceries',
      category: 'Home',
      subCategory: 'Furnishing & Personal Wear',
      productType: 'Curtains & Accessories',
      upTo1000: '0% (Free)',
      tier2: '17.0%',
      above5000: '15.5%'
    },
    {
      department: 'Groceries',
      category: 'Disposables',
      subCategory: 'Plates & Cutlery',
      productType: 'Disposable Plates & Glasses',
      upTo1000: '0% (Free)',
      tier2: '8.5%',
      above5000: '7.0%'
    },
    {
      department: 'Groceries',
      category: 'Home',
      subCategory: 'Games, Toys & Activities',
      productType: 'Dolls, Action Figures & Stuff Toys',
      upTo1000: '0% (Free)',
      tier2: '11.0%',
      above5000: '9.5%'
    },
    {
      department: 'Groceries',
      category: 'Kitchenware',
      subCategory: 'Kitchen Tools',
      productType: 'Essential Kitchen Tools',
      upTo1000: '0% (Free)',
      tier2: '15.5%',
      above5000: '11.5%'
    },
    {
      department: 'Groceries',
      category: 'Disposables',
      subCategory: 'Home Hygiene',
      productType: 'Kitchen & Toilet Rolls',
      upTo1000: '0% (Free)',
      tier2: '8.5%',
      above5000: '7.0%'
    },
    {
      department: 'Groceries',
      category: 'Disposables',
      subCategory: 'Tissues & Napkins',
      productType: 'Paper Tissues & Napkins',
      upTo1000: '0% (Free)',
      tier2: '8.5%',
      above5000: '7.0%'
    },
    {
      department: 'Groceries',
      category: 'Home',
      subCategory: 'Furnishing & Personal Wear',
      productType: 'Pillow & Pillow Covers',
      upTo1000: '0% (Free)',
      tier2: '10.5%',
      above5000: '7.5%'
    },
    {
      department: 'Groceries',
      category: 'Home',
      subCategory: 'Bags & Travel Luggage',
      productType: 'Trolley & Suitcases',
      upTo1000: '0% (Free)',
      tier2: '7.0%',
      above5000: '4.5%'
    },
  ];

  // Standard Shipment: Direct Fulfillment Channel
  const shippingDirect = [
    { slab: 'First 0.5kg', local: '₹38', regional: '₹48', national: '₹68' },
    { slab: 'From 0.5kg to 1kg', local: '₹13', regional: '₹16', national: '₹24' },
    { slab: 'Every 1kg upto 5kg', local: '₹15', regional: '₹20', national: '₹25' },
    { slab: 'Every 1kg after 5kg', local: '₹7', regional: '₹8', national: '₹12' },
  ];

  // Standard Shipment: JFC Channel
  const shippingJFC = [
    { slab: 'First 0.5kg', local: '₹27', regional: '₹38', national: '₹58' },
    { slab: 'From 0.5kg to 1kg', local: '₹13', regional: '₹16', national: '₹24' },
    { slab: 'Every 1kg upto 5kg', local: '₹15', regional: '₹20', national: '₹25' },
    { slab: 'Every 1kg after 5kg', local: '₹7', regional: '₹8', national: '₹12' },
  ];

  // JioMart Fulfillment Center (RFC) Specific Fees
  const rfcFees = [
    { 
      type: 'Processing Fee', 
      desc: 'This fee is charged for the picking & packing of customer orders and will be applicable at a per unit level only for successfully delivered shipment.', 
      rate: '₹9.0 /-* per unit',
      badge: 'Per Delivered Unit'
    },
    { 
      type: 'Storage Fee', 
      desc: "This is a fixed, non-transactional, per unit monthly fee based on the space consumed by the seller's inventory in the RFC. This will be applicable only on inventory stored in active shelves/pallet locations. Inventory in problem solve area or yet to inward won't be counted.", 
      rate: '₹0.6 /-* per ft³ per day',
      note: 'Promotional discount from standard ₹30',
      badge: 'Active Shelves'
    },
    { 
      type: 'Labelling Fee', 
      desc: 'This is a fixed fee charged per unit for labelling activity performed while inbounding the stock at JioMart Fulfillment Centers.', 
      rate: '₹1.5 /-* per unit',
      badge: 'Inbounding Unit'
    },
    { 
      type: 'Removal Fee', 
      desc: 'This fee will be charged if the seller wants to remove any of their goods from the RFC.', 
      rate: '₹9.0 /-* per unit',
      badge: 'Stock Recall'
    },
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="JioMart"
        subtitle="Harness Reliance's massive omnichannel retail footprint with 0% commission on orders up to ₹1,000 and automated city-level fulfillment."
      />

      <BasicPage
        heading="JioMart Account Management Services"
        image="JioMart_Logo.png"
        className="w-56"
        content="As one of the premier eCommerce platforms, JioMart offers immense opportunities, but navigating its stringent guidelines and standing out in a competitive market can be challenging. Effective account management is crucial to achieving your sales goals. Our Account Management team specializes in managing your JioMart account to help you reach your sales targets and grow your business. We assist you in maintaining a healthy seller account on Jiomart, ensuring smooth operations and preventing disruptions that can lead to lost revenue and missed opportunities. Our team streamlines processes and workflows, allowing you to focus on what you do best—running your business. We handle everyday operations, account health management, deals, promotions, and pricing strategies to help you thrive on Jiomart. Let us manage your JioMart account so you can maximize your potential and revenue."
      />

      {/* =========================================================================
          JIOMART OFFICIAL RATE CARD & FEE SCHEDULE (FROM SELLER RATES SCHEDULE)
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Official JioMart Seller Rates</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            JioMart Commission, Fixed Fees, Shipping & RFC Logistics
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Authentic documentation of JioMart&apos;s category commissions, item-level fixed fees, Direct vs JFC shipping rates, return fee policies, and Reliance Fulfillment Center operations charges.
          </p>
        </div>

        {/* =========================================================================
            1. COMMISSION FEE SECTION & CATEGORY TABLE
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Tag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Commission Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Sales-linked category commissions</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
              Up to ₹1,000 = 0% Fee
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Commission Fee is linked to sales and varies as per the product category. Under JioMart&apos;s flagship merchant incentive, all products priced <strong>Up to ₹1,000 qualify for 0% commission</strong> across core kitchen, tableware, home essentials, and lifestyle departments.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Department & Category</th>
                  <th className="py-3.5 px-4 font-semibold text-slate-300">Sub-Category & Product Type</th>
                  <th className="py-3.5 px-4 font-semibold text-emerald-400">Up to ₹1,000</th>
                  <th className="py-3.5 px-4 font-semibold text-slate-300">₹1,001 to ₹5,000</th>
                  <th className="py-3.5 px-4 font-semibold text-right text-slate-300">Above ₹5,001</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {commissionCategories.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{row.category}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{row.department}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-200 font-medium">{row.subCategory}</div>
                      <div className="text-[11px] text-slate-400">{row.productType}</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-emerald-400 font-mono bg-emerald-500/5">
                      {row.upTo1000}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">{row.tier2}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300 text-right">{row.above5000}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            2. FIXED FEE SECTION
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fixed Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Item-level sale-linked platform fee</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 w-fit">
              Up to ₹1,000 = ₹0
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Fixed fee is charged at item level and is sale linked. At present JioMart charges:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-4">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/60">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Transaction Value (Item Price + Add-ons)</th>
                  <th className="py-3.5 px-4 font-semibold text-right">Fixed Fee Charged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Up to ₹1,000</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-400 text-base">₹0</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">Above ₹1,001</td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-cyan-400 text-base">₹30</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-300 space-y-1">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>* Reversal Terms:</strong> Fixed fee is reversed only in case of RTO, Buyer cancellation, and platform cancellation (excluding platform cancellations due to seller dispatch delays).
              </span>
            </div>
            <div className="text-[11px] text-slate-400 pl-6">
              Transaction value equals product price plus gift-wrapping charges plus any other charge levied by the seller to the customer. Any applicable taxes (GST) are charged over and above.
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. SHIPPING FEE (DIRECT FULFILLMENT VS JFC CHANNEL)
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Shipping Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Forward & Reverse Logistics Rate Cards</span>
              </div>
            </div>

            {/* Toggle Channel Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-white/10 text-xs">
              <button
                onClick={() => setActiveFulfillmentTab('direct')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeFulfillmentTab === 'direct'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Direct Fulfillment Channel
              </button>
              <button
                onClick={() => setActiveFulfillmentTab('jfc')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  activeFulfillmentTab === 'jfc'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                JFC Channel (Lower Rates)
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Shipping fees is charged by JioMart logistics partner for forward and reverse logistics. Prices listed below are excluding GST.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-6">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950/70">
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-semibold">Weight Slab / Zoning</th>
                  <th className="py-3 px-4 font-semibold text-cyan-400">Local Zone</th>
                  <th className="py-3 px-4 font-semibold text-slate-300">Regional Zone</th>
                  <th className="py-3 px-4 font-semibold text-right text-rose-300">National Zone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {(activeFulfillmentTab === 'direct' ? shippingDirect : shippingJFC).map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">{row.slab}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-cyan-400 bg-cyan-500/5">{row.local}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">{row.regional}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-300 text-right">{row.national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Region Definitions Box */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1.5 font-mono">
            <div className="font-bold text-white font-sans text-xs pb-1 border-b border-white/5">
              Region Definitions & Application Rules:
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Local Rates:</strong> Apply if pickup and delivery happen within the jurisdiction of the same city.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Regional Rates:</strong> Apply if pickup and delivery are happening within the same region, but outside the same city.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>National Rates:</strong> Apply if shipment moves from one region to another.</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. RETURN FEE SECTION
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-10">
          <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Return Fee</h3>
              <span className="text-[11px] text-slate-400 font-medium">Post-delivery Customer Returns</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            A per unit shipping fee component will be charged to seller in reverse leg for post-delivery customer returns. The fee charged will be the same as the forward shipping fee. In case of partial returns, fee charged will be proportional to the weight of the returned item.
          </p>
        </div>

        {/* =========================================================================
            5. JIOMART FULFILLMENT SPECIFIC FEE (RFC LOGISTICS)
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Warehouse className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">JioMart Fulfillment Specific Fee</h3>
                <span className="text-[11px] text-slate-400 font-medium">Reliance Fulfillment Center (RFC) Operations</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 w-fit">
              Promotional RFC Slabs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rfcFees.map((fee, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-sm font-bold text-white">{fee.type}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {fee.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{fee.desc}</p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Rate:</span>
                  <span className="text-lg font-extrabold text-cyan-400 font-mono">{fee.rate}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 mt-4 text-center">
            * Promotional rates which will be revised going forward by Reliance Retail.
          </p>
        </div>

      </section>

      {/* Plan Card */}
      <div className="pb-20">
        <SinglePriceCard
          planName="Standard"
          planPrice="4000"
          services={[
            "Account Launch & Verification",
            "Brand Approval (up to 2 Brands)",
            "Category Approval (up to 3 Categories)",
            "Catalog Listing (up to 50 SKUs)",
            "JFC Warehousing & Inbound Mapping",
            "Safe-T Claim Filing & Returns Audit",
            "Promotions, Deals & Velocity Suggestions",
          ]}
        />
      </div>
    </div>
  );
}