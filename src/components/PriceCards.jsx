import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PriceCards({ plan1, plan2, plan3 }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'quarterly'
  const phoneNumber = '919119885533';

  const getWhatsAppUrl = (planName) => {
    const msg = encodeURIComponent(`Hi EcomEase team! I'm interested in the ${planName} plan for my marketplace brand.`);
    return `https://wa.me/${phoneNumber}?text=${msg}`;
  };

  const plans = [
    {
      ...plan1,
      tag: 'Starter Foundation',
      isPopular: false,
    },
    {
      ...plan2,
      tag: 'Most Popular',
      isPopular: true,
    },
    {
      ...plan3,
      tag: 'Enterprise Domination',
      isPopular: false,
    }
  ];

  return (
    <section className="relative py-20 bg-[#070A12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Plans Engineered for ROI
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            No long-term locks. Scale or modify your plan as your marketplace monthly GMV grows.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Quarterly</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                Save ~15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => {
            const price = billingCycle === 'monthly' ? p.monthlyPrice : p.quaterlyPrice;
            const period = billingCycle === 'monthly' ? '/month' : '/quarter';

            return (
              <div
                key={p.planName}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  p.isPopular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/60 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/10 -translate-y-2'
                    : 'bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {p.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {p.planName}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {p.tag}
                    </span>
                  </div>

                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        ₹{Number(price).toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400">{period}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      + 18% GST as applicable. Dedicated account manager.
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-6 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Included Deliverables:
                    </div>
                    {p.services.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                  <a
                    href={getWhatsAppUrl(p.planName)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      p.isPopular
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Choose {p.planName} Plan</span>
                  </a>

                  <Link
                    to="/contact-us"
                    className="block text-center text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Need customized deliverables? Contact us →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
