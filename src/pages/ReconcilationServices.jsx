import React from 'react';
import { Link } from "react-router-dom";
import TitleBanner from "../components/TitleBanner";
import BlockTransition from "../components/BlockTransition";
import { 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  FileCheck2, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  PieChart
} from "lucide-react";

export default function ReconciliationServices() {
  const steps = [
    {
      title: "1. Automated Ledger Audit",
      desc: "We extract and audit all order disbursements, return-to-origin deductions, and payment remittances across your Amazon & Flipkart seller history.",
      icon: FileCheck2
    },
    {
      title: "2. Weight & Volumetric Discrepancies",
      desc: "Marketplaces regularly overcharge on dimensions. We catch incorrect cuboid measurements and claim back excess weight handling fees.",
      icon: AlertTriangle
    },
    {
      title: "3. Lost & Damaged Inventory Claims",
      desc: "Items lost or damaged in FBA/FBF fulfillment centers are systematically identified and claimed for full reimbursement at current selling price.",
      icon: DollarSign
    },
    {
      title: "4. Return Switch & Fraud Prevention",
      desc: "Customer return fraud where the wrong item or an empty box was delivered back to your warehouse is audited and filed through Safe-T claims.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Payment Reconciliation & Fee Recovery"
        subtitle="Forensic marketplace audit that recovers 2% to 5% of your gross merchandise value lost in fee overcharges."
      />

      {/* Metrics Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/70 border border-slate-800 shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Risk-Free Fee Recovery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Stop Letting Marketplaces Keep Your Hard-Earned Margins
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ecommerce marketplaces process millions of transactions per second, resulting in frequent automated billing glitches, miscalculated referral fees, and missed reimbursements for lost FBA stock. We run full retrospective audits and recover your cash.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">₹3.8Cr+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Cash Recovered to Date</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">96.8%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Dispute Approval Rate</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">540 Days</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Audit Lookback Window</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100">0% Risk</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Pay-on-Success Model Available</div>
            </div>
          </div>
        </div>
      </section>

      <BlockTransition variant="luminous-line" />

      {/* Recovery Modules */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            What We Recover For Your Brand
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Every transaction is scrutinized order-by-order against contractual marketplace fee rate cards.
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
            How Much Fee Leakage Is Your Brand Suffering?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Book a complimentary historical reconciliation sample audit. We'll identify exact leaked amounts within 48 hours.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Request Free Reconciliation Sample Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
