import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  Building2, 
  CheckCircle2, 
  Truck, 
  Layers, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function LogisticsIntegration() {
  const steps = [
    {
      title: "1. Multi-State 3PL Node Selection",
      desc: "Distribute your inventory across strategically located Grade-A fulfillment centers near key consumer clusters in Delhi NCR, Mumbai, Bengaluru, and Kolkata.",
      icon: Building2
    },
    {
      title: "2. WMS & ERP Warehouse Synchronization",
      desc: "Seamlessly integrate your ERP/WMS with marketplace seller portals for real-time stock sync, batch picking, and serial tracking.",
      icon: Layers
    },
    {
      title: "3. B2B Bulk Freight & B2C Express Delivery",
      desc: "Unified handling of both palletized B2B freight to Amazon/Flipkart FCs and individual direct-to-consumer parcel dispatches.",
      icon: Truck
    },
    {
      title: "4. Strict SLA Adherence & Damage Reduction",
      desc: "Pre-dispatch quality inspections, tamper-evident packaging, and zero-delay same-day carrier handoffs.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Enterprise 3PL Logistics & Warehousing"
        subtitle="Third-party logistics integration: Grade-A warehousing, multi-state fulfillment, and same-day dispatch."
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Turnkey Supply Chain Infrastructure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scale Order Fulfillment Without Heavy Fixed Capex
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Managing in-house warehouses requires costly leases, security, staff, and logistics management. EcomEase connects your brand with India's highest-rated 3PL warehousing networks, giving you elastic storage that expands as your sales peak.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">99.8%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Same-Day Dispatch SLA</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">-40%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Fixed Storage Overhead</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">4 Metros</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Strategic Tier 1 Hubs</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Barcode Tracked Stock</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Enterprise 3PL Solutions
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Engineered for high-volume consumer goods, apparel, cosmetics, and electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">{step.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B0F19] border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Streamline Your 3PL Fulfillment?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Speak with our logistics architects to design an elastic warehousing network customized for your catalog.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Request 3PL Network Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
