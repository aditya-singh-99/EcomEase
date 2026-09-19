import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import BlockTransition from './BlockTransition';

export default function BasicPage({ heading, image, className, content }) {
  return (
    <div className="relative bg-[#0B0F19] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 pointer-events-none"></div>

              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl p-4 bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-6 shadow-inner">
                {image ? (
                  <img 
                    src={image} 
                    alt={heading} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <Sparkles className="w-16 h-16 text-cyan-400" />
                )}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SPN Verified Excellence</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Dedicated category specialists with proven execution algorithms.
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {heading}
            </h2>

            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              {typeof content === 'string' ? (
                <p>{content}</p>
              ) : (
                content
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Get Customized Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919119885533"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Speak with Lead Strategist</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <BlockTransition variant="oneplus-accent-flow" />
      </div>
    </div>
  );
}
