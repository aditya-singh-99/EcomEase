import { useState } from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import SinglePriceCard from "../components/SinglePriceCard";
import { 
  Percent, 
  Truck, 
  CreditCard, 
  Package, 
  Sparkles, 
  HelpCircle, 
  Coins
} from 'lucide-react';

export default function Myntra() {
  const [sellingPrice, setSellingPrice] = useState(1500);

  // 1. Official Myntra Commission Rates by Category (2026) from Document
  const categoryRates = [
    { category: "Women's Western Wear", commission: "4 - 5%", fixedFee: "₹20 - 30", asp: "₹800 - 2,500" },
    { category: "Women's Ethnic Wear", commission: "4 - 5%", fixedFee: "₹20 - 30", asp: "₹1,000 - 5,000" },
    { category: "Men's Apparel", commission: "4 - 5%", fixedFee: "₹15 - 25", asp: "₹600 - 2,000" },
    { category: "Kids' Wear", commission: "4 - 5%", fixedFee: "₹15 - 20", asp: "₹400 - 1,200" },
    { category: "Footwear", commission: "4 - 5%", fixedFee: "₹20 - 35", asp: "₹800 - 3,000" },
    { category: "Accessories & Bags", commission: "3 - 4%", fixedFee: "₹15 - 25", asp: "₹500 - 2,000" },
    { category: "Jewelry", commission: "3 - 4%", fixedFee: "₹15 - 20", asp: "₹300 - 1,500" },
    { category: "Beauty & Personal Care", commission: "2 - 3%", fixedFee: "₹10 - 20", asp: "₹300 - 1,000" },
    { category: "Home & Living (Decor)", commission: "3 - 4%", fixedFee: "₹20 - 40", asp: "₹500 - 3,000" },
    { category: "Electronics (Wearables)", commission: "1 - 2%", fixedFee: "₹15 - 25", asp: "₹1,000 - 5,000" },
  ];

  // 2. Logistics & Shipping Fee Table
  const shippingFees = [
    { zone: "Local (same city)", forward: "₹35 - 45", return: "₹35 - 45" },
    { zone: "Zonal (same region)", forward: "₹50 - 60", return: "₹50 - 60" },
    { zone: "National (cross-region)", forward: "₹65 - 80", return: "₹65 - 80" },
  ];

  // 3. Real Margin Calculation (₹1,500 Women's Kurti Example from Document)
  const kurtiCommission = 75; // 5% of 1500
  const kurtiFixedFee = 25;
  const kurtiLogistics = 55;
  const kurtiPaymentCollection = 22.50; // 1.5%
  const kurtiGst = 31.95; // 18% on fees
  const kurtiNetPayout = 1290.55;
  const kurtiCogs = 525; // 35% COGS
  const kurtiNetProfit = 765.55; // 51%

  // Dynamic user simulation calculations
  const dynamicCommission = +(sellingPrice * 0.05).toFixed(2);
  const dynamicFixedFee = 25;
  const dynamicLogistics = 55;
  const dynamicPaymentCollection = +(sellingPrice * 0.015).toFixed(2);
  const dynamicTotalFees = dynamicCommission + dynamicFixedFee + dynamicLogistics + dynamicPaymentCollection;
  const dynamicGst = +(dynamicTotalFees * 0.18).toFixed(2);
  const dynamicNetPayout = +(sellingPrice - dynamicTotalFees - dynamicGst).toFixed(2);
  const dynamicCogs = +(sellingPrice * 0.35).toFixed(2);
  const dynamicNetProfit = +(dynamicNetPayout - dynamicCogs).toFixed(2);
  const dynamicMarginPercent = Math.round((dynamicNetProfit / (sellingPrice || 1)) * 100);

  // 4. Comparison Table: Myntra vs Amazon vs Flipkart
  const comparisonData = [
    { component: 'Commission', myntra: '4 - 5%', amazon: '17 - 20%', flipkart: '15 - 22%' },
    { component: 'Fixed Fee', myntra: '₹15 - 30', amazon: '₹25 - 70', flipkart: '₹15 - 40' },
    { component: 'Shipping', myntra: '₹35 - 80', amazon: '₹40 - 100', flipkart: '₹30 - 75' },
    { component: 'Return Rate', myntra: '25 - 35%', amazon: '15 - 25%', flipkart: '18 - 28%' },
    { component: 'Net Margin (₹1,500 product)', myntra: '~51%', amazon: '~35%', flipkart: '~38%' },
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Myntra"
        subtitle="Scale your fashion and lifestyle brand on India's premier fashion destination with ultra-low commission and brand gateway approvals."
      />

      <BasicPage
        heading="Myntra Account Management Services"
        image="Myntra_Logo.png"
        className="w-56"
        content="Expert account management and a calculated strategy are necessary to stand out in the cutthroat world of fashion eCommerce on Myntra. In order to help you meet your sales targets and grow your company, our professional Account Management staff is committed to improving your Myntra seller account. Our primary goals are to maintain the health of your account, manage operational difficulties, and avoid any interruptions that can lower your income. Our all-inclusive offerings encompass overseeing day-to-day operations, improving account wellness, crafting compelling offers and promotions, and formulating efficient pricing plans. By streamlining these procedures, we give you more time to concentrate on creating and selecting your line of clothing. We guarantee that your company prospers on Myntra thanks to our experience, enabling you to reach its full potential and increase sales. Let us manage your Myntra account so you can maximize your potential and revenue."
      />

      {/* =========================================================================
          MYNTRA OFFICIAL COMMISSION & FEE STRUCTURE (FROM MYNTRA 2026 SCHEDULE)
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Official 2026 Myntra Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Myntra Commission Rates by Category (2026)
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Myntra charges one of the lowest commission rates among Indian fashion marketplaces — typically <strong className="text-white">4-5%</strong> compared to 25-40% on competing platforms. Here is the complete category-wise breakdown:
          </p>
        </div>

        {/* 1. Category Rates Table */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12 overflow-x-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">
                Category-Wise Commission & Fixed Fee Slabs
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Official rates across apparel, footwear, jewelry, beauty, home decor, and wearables.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
              Ultra-Low 4-5% Rate
            </span>
          </div>

          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/70">
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-3.5 px-4 font-semibold">Category</th>
                <th className="py-3.5 px-4 font-semibold text-rose-400">Commission Rate</th>
                <th className="py-3.5 px-4 font-semibold text-slate-300">Fixed Fee (per order)</th>
                <th className="py-3.5 px-4 font-semibold text-right text-cyan-400">Typical ASP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/40">
              {categoryRates.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-white">{row.category}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-rose-400 bg-rose-500/5">{row.commission}</td>
                  <td className="py-3.5 px-4 font-mono text-slate-300">{row.fixedFee}</td>
                  <td className="py-3.5 px-4 font-mono text-cyan-300 text-right">{row.asp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2. Complete Fee Breakdown: Beyond Commission */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="mb-6 pb-4 border-b border-white/10">
            <h3 className="text-xl font-bold text-white">
              Complete Fee Breakdown: Beyond Commission
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Commission is just one component. Here is every fee Myntra charges sellers:
            </p>
          </div>

          {/* 1. Logistics & Shipping Fee Table */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-cyan-400" />
              <h4 className="text-base font-bold text-white">1. Logistics & Shipping Fee</h4>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-950/70">
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4 font-semibold">Shipping Zone</th>
                    <th className="py-3 px-4 font-semibold text-cyan-400">Forward Shipping</th>
                    <th className="py-3 px-4 font-semibold text-right text-rose-400">Return Shipping</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-black/40">
                  {shippingFees.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-medium text-white">{row.zone}</td>
                      <td className="py-3 px-4 font-mono text-cyan-300">{row.forward}</td>
                      <td className="py-3 px-4 font-mono text-rose-300 text-right">{row.return}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-slate-300 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Important Logistics Rule:</strong> For returned orders, sellers pay <strong>both forward + reverse shipping</strong>, making returns especially costly. With 25-35% return rates in fashion, this significantly impacts net margins. Our EcomEase account management team monitors sizing accuracy and descriptions to minimize avoidable return rates.
              </div>
            </div>
          </div>

          {/* 2, 3, 4 Other Fee Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">2. Payment Collection Fee</h4>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 font-mono pt-1">
                <li>• COD orders: <span className="text-white font-bold">2%</span> of order value</li>
                <li>• Prepaid (UPI/Card): <span className="text-emerald-400 font-bold">1 - 1.5%</span> of order value</li>
                <li>• Wallet payments: <span className="text-cyan-400 font-bold">1%</span> of order value</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-amber-400" />
                <h4 className="text-sm font-bold text-white">3. Packaging Charges</h4>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 font-mono pt-1">
                <li>• Seller-provided packaging: <span className="text-emerald-400 font-bold">No charge</span></li>
                <li>• Myntra-branded packaging: <span className="text-white font-bold">₹5 - 15</span> per order</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-bold text-white">4. GST on Platform Fees</h4>
              </div>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                All fees (commission, fixed fee, logistics, payment collection) attract <strong className="text-white">18% GST</strong>. This is charged on top of the base fee amount (input tax credit eligible).
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. REAL MARGIN CALCULATION: WHAT SELLERS ACTUALLY EARN
            ========================================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 p-6 sm:p-8 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Kurti Example from Document & Interactive Slider */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Real Margin Calculation (Official Kurti Example)</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  What Sellers Actually Earn on Myntra
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Let&apos;s calculate the actual net margin for a <strong className="text-white">₹1,500 women&apos;s kurti</strong> sold on Myntra based on authentic platform deductions:
                </p>
              </div>

              {/* Kurti Static Example Breakdown Box */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Selling Price (MRP after discount):</span>
                  <span className="font-bold text-white">₹1,500.00</span>
                </div>
                <div className="flex justify-between text-rose-400">
                  <span>Commission (5%):</span>
                  <span>-₹{kurtiCommission.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Fixed Fee:</span>
                  <span>-₹{kurtiFixedFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Logistics (zonal):</span>
                  <span>-₹{kurtiLogistics.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Payment Collection (1.5%):</span>
                  <span>-₹{kurtiPaymentCollection.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GST on fees (18%):</span>
                  <span>-₹{kurtiGst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-cyan-300 font-bold pt-1 border-t border-white/10">
                  <span>Net Payout from Myntra:</span>
                  <span>₹{kurtiNetPayout.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Product COGS (35%):</span>
                  <span>-₹{kurtiCogs.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-extrabold text-sm pt-1.5 border-t border-white/10">
                  <span>Net Profit (before advertising):</span>
                  <span>₹{kurtiNetProfit.toFixed(2)} (51%)</span>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Key Insight:</strong> Myntra&apos;s low 4-5% commission means sellers retain significantly more margin compared to Amazon (15-30% referral fee) or Flipkart (10-25%). However, high return rates (25-35%) and advertising costs must be factored into unit economics.
              </div>
            </div>

            {/* Right: Live Interactive Price Calculator */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-black/70 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simulate Custom Selling Price</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Interactive
                </span>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Selling Price: <span className="text-cyan-400 font-bold text-sm">₹{sellingPrice.toLocaleString('en-IN')}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>₹500</span>
                  <span>₹1,500</span>
                  <span>₹3,000</span>
                  <span>₹5,000</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono pt-2">
                <div className="flex justify-between text-slate-300">
                  <span>Selling Price:</span>
                  <span className="font-bold text-white">₹{sellingPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-rose-400">
                  <span>Commission (5%):</span>
                  <span>-₹{dynamicCommission.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Fixed Fee:</span>
                  <span>-₹{dynamicFixedFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Zonal Logistics Fee:</span>
                  <span>-₹{dynamicLogistics.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Payment Gateway (1.5%):</span>
                  <span>-₹{dynamicPaymentCollection.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GST on Fees (18%):</span>
                  <span>-₹{dynamicGst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-cyan-300 pt-2 border-t border-white/10">
                  <span>Net Payout from Myntra:</span>
                  <span>₹{dynamicNetPayout.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Est. Product COGS (35%):</span>
                  <span>-₹{dynamicCogs.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-extrabold text-sm sm:text-base text-emerald-400 pt-2 border-t border-white/10 bg-emerald-500/10 p-2.5 rounded-xl">
                  <span>Net Profit (Pre-Ad):</span>
                  <span>₹{dynamicNetProfit.toFixed(2)} ({dynamicMarginPercent}%)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. MYNTRA VS AMAZON VS FLIPKART COMPARISON TABLE
            ========================================================================= */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 shadow-2xl overflow-x-auto">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">
                Myntra vs Amazon vs Flipkart: Fee Comparison
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Head-to-head comparison of fashion and lifestyle unit economics across India&apos;s big 3 marketplaces.
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit">
              Myntra Highest Net Margin
            </span>
          </div>

          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950/70">
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-3 px-4 font-semibold">Fee Component</th>
                <th className="py-3 px-4 font-bold text-rose-400">Myntra</th>
                <th className="py-3 px-4 font-semibold text-slate-300">Amazon (Apparel)</th>
                <th className="py-3 px-4 font-semibold text-right text-slate-300">Flipkart (Apparel)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/40">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">{row.component}</td>
                  <td className="py-3.5 px-4 font-bold text-rose-400 bg-rose-500/5">{row.myntra}</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">{row.amazon}</td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono text-right">{row.flipkart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* Pricing / Plan Card */}
      <div className="pb-20">
        <SinglePriceCard
          planName="Standard"
          planPrice="3000"
          services={[
            "Fashion & Apparel Catalog Uploads (up to 50)",
            "Lookbook & Multi-Angle Image Optimization",
            "Myntra Brand Gateway Approval & Vetting",
            "End of Reason Sale (EORS) Promotions",
            "Size Chart & Fabric Attribute Structuring",
            "Return & Exchange Dispute Management",
            "Monthly Category Trend & Velocity Report",
          ]}
        />
      </div>
    </div>
  );
}