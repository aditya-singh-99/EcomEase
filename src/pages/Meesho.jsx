import React from 'react';
import TitleBanner from "../components/TitleBanner";
import BasicPage from "../components/BasicPage";
import PriceCards from "../components/PriceCards";
import { 
  Percent, 
  ShieldCheck, 
  Clock, 
  Truck, 
  CheckCircle2, 
  RefreshCcw, 
  Coins 
} from 'lucide-react';

export default function Meesho() {
  const meeshoPillars = [
    {
      title: "0% Commission Rate",
      desc: "Meesho charges 0% commission across all product categories. You retain 100% of the sale price on every single transaction.",
      icon: Percent,
      highlight: "100% Earnings Retained",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    },
    {
      title: "No Registration or Listing Fee",
      desc: "Creating your seller account, getting vetted, and publishing your catalog on Meesho is 100% free with zero hidden platform charges.",
      icon: CheckCircle2,
      highlight: "Free Account Setup",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    },
    {
      title: "No Payment Collection Fee",
      desc: "Zero payment gateway fees on prepaid transactions and zero processing deduction on Cash on Delivery (COD) orders.",
      icon: Coins,
      highlight: "Zero Payment Fees",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    },
    {
      title: "Zero Cancellation Penalty",
      desc: "Never fear harsh financial fines. Meesho levies ₹0 penalties for supplier cancellations or automated system cancellations.",
      icon: ShieldCheck,
      highlight: "No Penalty Fear",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    },
    {
      title: "7-Day Fast Settlement Cycle",
      desc: "Funds are securely deposited directly into your verified bank account on a strict 7-day cycle from order delivery (including COD).",
      icon: Clock,
      highlight: "Fast Cash Flow",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    },
    {
      title: "Free Return to Origin (RTO)",
      desc: "Couriers attempt delivery 3 times. If the customer does not accept, Meesho returns the parcel to you with ₹0 return shipping fee.",
      icon: RefreshCcw,
      highlight: "0 RTO Shipping Cost",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    },
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Meesho"
        subtitle="Dominate India's fastest-growing social commerce marketplace with 0% commission, 7-day payouts, and automated zero-penalty logistics."
      />

      <BasicPage
        heading="Meesho Account Management Services"
        image="Meesho_Logo.png"
        className="w-56"
        content="Meesho is a dynamic marketplace that need careful planning and committed account management to navigate. In order to help you reach your sales targets and successfully expand your company, our knowledgeable Account Management staff is available to optimize your Meesho seller account. We prioritize optimizing the well-being of your account, resolving operational obstacles, and guaranteeing a smooth experience to avert any disturbances that can affect your earnings and expansion. We customize our services to meet the particular needs of Meesho vendors. From routine business operations to well-thought-out promotions, aggressive pricing, and efficient listing optimization, we handle it all. We take a proactive stance, keeping an eye on things constantly and taking care of problems quickly so you can focus on creating and marketing your goods. Join together with us to optimize Meesho operations and realize the full potential of your company. We offer the know-how and assistance you want to differentiate yourself in the crowded industry, guaranteeing the growth of your brand and explosive sales. Give your Meesho account administration to us so you can concentrate on what you do best, which is expanding your clientele and winning over new clients."
      />

      {/* =========================================================================
          MEESHO OFFICIAL PRICING & SELLER CHARGES (FROM MEESHO PRICING SCHEDULE)
          ========================================================================= */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>Official Meesho Pricing Schedule</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            0% Commission & Stress-Free Unit Economics
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Sell directly to crores of Tier-2, Tier-3 and Bharat shoppers with <strong className="text-white">zero platform commission</strong>, no payment fees, and guaranteed 7-day bank deposits.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {meeshoPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${p.color}`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {p.highlight}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping & Return Details Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-white/10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold">
                <Truck className="w-3.5 h-3.5" />
                <span>Pan-India Logistics & Delivery</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                How Meesho Shipping & RTO Protection Works
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Meesho&apos;s automated shipping service connects your warehouse to tens of thousands of pin codes across India with only 18% GST applicable on the courier charges.
              </p>
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>3 Delivery Attempts:</strong> The courier partner attempts 3 deliveries before classifying any parcel as RTO.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Return Shipping on RTO:</strong> If buyer refuses delivery, Meesho returns the parcel to your doorstep for ₹0.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Real-time Supplier Panel Tracking:</strong> Automated dashboard visibility to file claims on wrongful customer returns.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3 text-xs">
              <div className="font-bold text-white text-sm pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Meesho Settlement Snapshot</span>
                <span className="text-emerald-400 font-mono">7 Days SLA</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Commission Fee:</span>
                <span className="font-bold text-emerald-400">0%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Registration & Onboarding:</span>
                <span className="font-bold text-emerald-400">₹0 (Free)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Payment Gateway / COD:</span>
                <span className="font-bold text-emerald-400">0%</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Order Cancellation Penalty:</span>
                <span className="font-bold text-emerald-400">₹0 (None)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>RTO Return Shipping Fee:</span>
                <span className="font-bold text-emerald-400">₹0 (Free)</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-white font-extrabold">
                <span>Payout Timeline:</span>
                <span className="text-cyan-300">Every 7 Days Direct to Bank</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Pricing Cards */}
      <PriceCards
        plan1={{
          planName: "Standard",
          monthlyPrice: "2999",
          quaterlyPrice: "7999",
          services: [
            "Full Account Management",
            "Listings Addition (up to 60)",
            "Safe-T Claim Filing (up to 20)",
            "Product Promotion & Ranking",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 AHM Protection",
            "Growth Suggestions",
            "Notice Board Compliance",
          ],
        }}
        plan2={{
          planName: "Advance",
          monthlyPrice: "3999",
          quaterlyPrice: "11499",
          services: [
            "Full Account Management",
            "Listings Addition (up to 100)",
            "Safe-T Claim Filing (up to 85)",
            "Sales Boost Service",
            "Infographics Images (up to 5)",
            "Product Promotion & Ranking",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 AHM Protection",
            "Growth Suggestions",
            "Notice Board Compliance",
          ],
        }}
        plan3={{
          planName: "Premium",
          monthlyPrice: "7999",
          quaterlyPrice: "15999",
          services: [
            "Full Account Management",
            "Listings Addition (up to 150)",
            "Safe-T Claim Filing (up to 100)",
            "Sales Boost Services",
            "Infographics Images (up to 15)",
            "Store Promotion",
            "Next-day Dispatch Enrollment",
            "Strengthening Case Follow Ups",
            "Advertisement Quality Dashboard Management",
            "Product Promotion & Ranking",
            "Pricing Optimization",
            "Monetary/Non-monetary Promotions",
            "Advertisement Optimization",
            "Product Recommendations",
            "360 AHM Protection",
            "Growth Suggestions",
            "Notice Board Compliance",
          ],
        }}
      />
    </div>
  );
}