import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  Truck, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Sparkles,
  RefreshCw,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function ShiprocketIntegration() {
  const steps = [
    {
      title: "1. Unified Multi-Carrier Routing",
      desc: "Connect 25+ top couriers (Delhivery, Bluedart, Shadowfax, Xpressbees, DTDC) with automated AI courier allocation based on delivery speed and lowest pin code rate.",
      icon: Truck
    },
    {
      title: "2. Real-Time Order & Inventory Sync",
      desc: "Instant multi-channel inventory locking across Shopify, Amazon, WooCommerce, and offline storefronts to prevent overselling.",
      icon: RefreshCw
    },
    {
      title: "3. Automated NDR & RTO Reduction",
      desc: "Instant WhatsApp customer address verification and proactive non-delivery report (NDR) follow-ups to slash return rates by up to 30%.",
      icon: Zap
    },
    {
      title: "4. Custom Branded Tracking Experience",
      desc: "Elevate your customer journey with customized SMS/WhatsApp tracking pages showing order ETA, brand banners, and cross-sell recommendations.",
      icon: Clock
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Shiprocket Multi-Channel Logistics Integration"
        subtitle="Automate pan-India shipping, smart courier allocation, and AI-driven RTO reduction across all sales channels."
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Automated Shipping Engine
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scale Order Fulfillment to 29,000+ Indian Pincodes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Shipping independently on multiple couriers is slow, expensive, and uncoordinated. EcomEase integrates your storefronts directly into Shiprocket's automation pipeline to dispatch orders faster, negotiate bulk freight tariffs, and eliminate manual dispatch errors.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">29,000+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Pin Codes Covered</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">-30%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">NDR & RTO Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">25+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Pre-Integrated Couriers</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">1-Click</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Bulk AWB Generation</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Core Integration Deliverables
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Seamless operational setup connected directly to your warehouse order workflow.
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
            Ready to Automate Your Shipping Operations?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact us today to integrate Shiprocket and start saving on every single outgoing shipment.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Shiprocket Setup Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
