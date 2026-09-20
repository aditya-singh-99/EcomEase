import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Sliders
} from 'lucide-react';
import { useTilt3D } from '../hooks/useTilt3D';

/**
 * BuyBoxSimulator: Interactive algorithmic Buy Box & listing velocity simulator.
 * Allows visitors to toggle fulfillment, catalog quality, and repricing to see live simulated win-rate gains.
 */
export default function BuyBoxSimulator() {
  const [fulfillment, setFulfillment] = useState('fba'); // 'merchant' | 'fba'
  const [catalogQuality, setCatalogQuality] = useState('optimized'); // 'basic' | 'optimized'
  const [repricing, setRepricing] = useState('algorithmic'); // 'manual' | 'algorithmic'

  const { ref, style, glare, handleMouseMove, handleMouseLeave } = useTilt3D(4, 1.01);

  // Compute algorithmic score and win rate
  let winRate = 42;
  let revenueMultiplier = 1.0;
  let estimatedLift = 85000;

  if (fulfillment === 'fba') {
    winRate += 32;
    revenueMultiplier += 1.2;
    estimatedLift += 240000;
  }
  if (catalogQuality === 'optimized') {
    winRate += 16;
    revenueMultiplier += 0.7;
    estimatedLift += 160000;
  }
  if (repricing === 'algorithmic') {
    winRate += 9.4;
    revenueMultiplier += 0.5;
    estimatedLift += 115000;
  }

  winRate = Math.min(99.4, winRate);

  const isOptimal = winRate >= 95;

  return (
    <section className="relative py-24 bg-[#080C16] text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Buy Box & Conversion Simulator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Simulate how Prime fulfillment, A+ catalog indexing, and sub-minute repricing impact your sales velocity.
          </p>
        </div>

        {/* 3D Tilted Glass Interactive Console */}
        <div
          ref={ref}
          style={style}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-3xl p-6 sm:p-10 bg-slate-900/80 backdrop-blur-2xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Specular glare overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Simulation Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Control 1: Fulfillment Route */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-blue-400" />
                    <span>Fulfillment & Delivery SLA</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Prime & Assured Weight</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFulfillment('merchant')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      fulfillment === 'merchant'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Self-Ship (Merchant)</div>
                    <div className="text-[10px] text-slate-400">3-5 days delivery, higher RTO</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillment('fba')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      fulfillment === 'fba'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white flex items-center justify-between mb-0.5">
                      <span>Amazon FBA / FBF</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-normal">Next Day</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Prime Badging, 18+ State FCs</div>
                  </button>
                </div>
              </div>

              {/* Control 2: Catalog Quality */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Catalog Optimization & A+ Content</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Algorithmic Indexing</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setCatalogQuality('basic')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      catalogQuality === 'basic'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Basic Supplier Listing</div>
                    <div className="text-[10px] text-slate-400">Standard bullet points, no EBC</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCatalogQuality('optimized')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      catalogQuality === 'optimized'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white flex items-center justify-between mb-0.5">
                      <span>EcomEase A+ Design</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-normal">Indexed</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Brand Storefront + Backend SEO</div>
                  </button>
                </div>
              </div>

              {/* Control 3: Repricing & Defense */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    <span>Repricing & Buy Box Defense</span>
                  </span>
                  <span className="text-[11px] text-slate-400">Price Wars & Hijackers</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRepricing('manual')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      repricing === 'manual'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">Manual Pricing</div>
                    <div className="text-[10px] text-slate-400">Static prices, slow response</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRepricing('algorithmic')}
                    className={`btn-pressable p-3.5 rounded-xl text-left border text-xs transition-all ${
                      repricing === 'algorithmic'
                        ? 'bg-blue-600/20 border-blue-500 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="font-bold text-white flex items-center justify-between mb-0.5">
                      <span>Dynamic Algorithmic</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-normal">&lt; 60 Secs</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Automated Buy Box protection</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Simulated Outcome Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-white/15 space-y-6 text-center">
              
              {/* Status Header */}
              <div className="flex items-center justify-center gap-2">
                {isOptimal ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Buy Box Dominated</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Revenue Leakage Detected</span>
                  </span>
                )}
              </div>

              {/* Central Win Rate Metric */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Simulated Buy Box Win Rate
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white font-tabular tracking-tight">
                  {winRate.toFixed(1)}%
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 rounded-full ${
                      isOptimal ? 'bg-gradient-to-r from-blue-500 to-emerald-400' : 'bg-gradient-to-r from-amber-500 to-blue-500'
                    }`}
                    style={{ width: `${winRate}%` }}
                  />
                </div>
              </div>

              {/* Stats Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                  <div className="text-[10px] text-slate-400 font-medium">Conversion Lift</div>
                  <div className="text-xl font-bold text-emerald-400 font-tabular mt-0.5">
                    +{((revenueMultiplier - 1) * 100).toFixed(0)}%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left">
                  <div className="text-[10px] text-slate-400 font-medium">Est. Monthly Gain</div>
                  <div className="text-xl font-bold text-blue-400 font-tabular mt-0.5">
                    +₹{Number(estimatedLift).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <a
                  href="#audit-form"
                  className="btn-pressable w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <span>Audit My ASINs For Free</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
