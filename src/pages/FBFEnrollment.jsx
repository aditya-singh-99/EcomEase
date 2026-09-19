import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Award,
  Zap
} from "lucide-react";

export default function FBFEnrollment() {
  const steps = [
    {
      title: "1. FBF Seller Onboarding & Warehouse Slotting",
      desc: "Get your seller account approved for Flipkart's Tier-1 fulfillment centers with expedited verification.",
      icon: Award
    },
    {
      title: "2. Flipkart Assured (F-Assured) Badge",
      desc: "Unlock the iconic F-Assured badge on your product pages, boosting click-through rates and customer trust by over 40%.",
      icon: ShieldCheck
    },
    {
      title: "3. Inbound Gate Pass & Packaging Compliance",
      desc: "Handle SKU stickering, outer carton barcodes, and e-way bill generation aligned with stringent Flipkart docking norms.",
      icon: Truck
    },
    {
      title: "4. Big Billion Days (BBD) Capacity Planning",
      desc: "Calculate peak festival inventory buffers to guarantee your bestsellers never stock out during sales spikes.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Flipkart FBF Fulfillment Enrollment"
        subtitle="Secure the coveted Flipkart Assured badge with fast-track warehouse onboarding and peak sales readiness."
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Flipkart Preferred Partner
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Unlock Flipkart Assured Status & Pan-India Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Fulfillment by Flipkart (FBF) is essential to winning premium search visibility and Big Billion Days event placements. EcomEase handles warehouse allocations, documentation, packaging checks, and dock appointments.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">+190%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Avg Order Velocity Lift</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">F-Assured Compliance</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">&lt; 5 Days</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Onboarding SLA</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">Zero</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Dock Rejection Rate</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Comprehensive FBF Execution Plan
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Seamless operational setup tailored to Flipkart's logistics ecosystem.
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
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center">
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
            Ready to Fast-Track Your Flipkart FBF Onboarding?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Speak with our Flipkart growth specialists today to secure warehouse allocations before the next major sale event.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Get FBF Enrollment Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
