import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  Package, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Zap,
  Box,
  FileCheck
} from "lucide-react";

export default function FBAEnrollment() {
  const steps = [
    {
      title: "1. Multi-State VPOB & GST Registration",
      desc: "Unlock Amazon fulfillment centers across multiple Indian states to enable Prime same-day/next-day badges without renting physical state warehouses.",
      icon: FileCheck
    },
    {
      title: "2. Inbound Shipment & Barcode Prep",
      desc: "Flawless FNSKU barcoding, box labeling, and appointment booking to eliminate warehouse rejection penalties.",
      icon: Box
    },
    {
      title: "3. Fast-Track Inbound Dock Clearance",
      desc: "Proactive tracking of truck appointments, dock arrival status, and immediate reconciliation of received unit counts.",
      icon: Truck
    },
    {
      title: "4. Buy Box & Prime Badge Optimization",
      desc: "Capitalize on FBA speed to win 99%+ Buy Box share and convert high-intent Amazon Prime members.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Amazon FBA Enrollment & Management"
        subtitle="End-to-end fulfillment acceleration: VPOB GST registration, inbound booking, and Prime badge mastery."
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Prime Badge Accelerator
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scale Your Amazon Sales with 1-Day & 2-Day Prime Delivery
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Enrolling in Amazon Fulfillment by Amazon (FBA) instantly lifts listing conversions by up to 3x. EcomEase manages your entire onboarding journey, from multi-state APOB/VPOB registrations to inbound shipment scheduling.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">&lt; 7 Days</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Average VPOB Turnaround</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.8%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Inbound Dock Acceptance</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">18+ States</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Pan-India FC Reach</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">0 Rejections</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Barcode SLA Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Steps */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Turnkey FBA Onboarding Protocol
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Eliminate operational headaches and get stock live in Amazon warehouses faster.
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
            Ready to Unlock Amazon Prime Status for Your Catalog?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Contact our fulfillment directors today. We'll analyze your SKU dimensions and recommend the most profitable regional warehouse distribution strategy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Get FBA Enrollment Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
