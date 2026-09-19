import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  Layers, 
  CheckCircle2, 
  Truck, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  TrendingDown,
  Building2
} from "lucide-react";

export default function IXDEnrollment() {
  const steps = [
    {
      title: "1. Multi-Region Cross-Dock Strategy",
      desc: "Send bulk inventory to a single centralized Amazon IXD hub instead of paying expensive freight to 10+ individual regional warehouses.",
      icon: Layers
    },
    {
      title: "2. Automatic Nationwide Distribution",
      desc: "Amazon automatically redistributes your inventory across North, West, East, and South fulfillment centers at discounted internal freight rates.",
      icon: Truck
    },
    {
      title: "3. APOB / VPOB GST Compliance",
      desc: "Seamless legal and tax documentation to secure Virtual Place of Business (VPOB) GST registrations across high-volume states.",
      icon: Building2
    },
    {
      title: "4. Freight Cost & Transit Reduction",
      desc: "Slash logistics expenses by up to 35% while slashing customer delivery times down to under 24 hours.",
      icon: TrendingDown
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Amazon IXD Placement Program Enrollment"
        subtitle="Inbound Cross-Docking: cut long-haul transport costs and unlock pan-India Prime speed effortlessly."
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Smart Inbound Cross-Dock
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Single-Point Inbound. Pan-India Same-Day Availability.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Managing individual shipments to warehouses in Delhi, Bangalore, Mumbai, and Kolkata drains margins. The Amazon Inbound Cross-Dock (IXD) program lets you dispatch full truckloads to one staging facility, letting Amazon route stock closest to buyer demand.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">-35%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Inbound Freight Savings</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">92%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Next-Day Delivery Reach</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">1 Hub</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Single Dispatch Location</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Tax & VPOB Compliant</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            How EcomEase Manages Your IXD Enrollment
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            From state tax filing to Amazon algorithm allocation setup.
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
            Ready to Cut Logistics Costs and Expand National Reach?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact our supply chain strategists to verify IXD eligibility for your brand's catalog.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Apply for IXD Program Enrollment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
