import React from 'react';
import { Check, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SinglePriceCard({ planName, planPrice, services }) {
  const phoneNumber = '919119885533';
  const message = encodeURIComponent(`Hello EcomEase team! I would like to get started with the ${planName} package.`);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative py-16 bg-[#070A12] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-700/80 shadow-2xl shadow-black/80 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Left info */}
          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turnkey Managed Package</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {planName}
            </h3>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white">
                ₹{Number(planPrice).toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400">/ month (Billed Monthly)</span>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Dedicated SPN certified account lead + weekly reporting.</span>
            </div>
          </div>

          {/* Right deliverables */}
          <div className="w-full md:w-auto flex-1 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
              Deliverables & Scope
            </div>

            <div className="space-y-2.5">
              {services.map((service, ind) => (
                <div key={ind} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Started with {planName}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}