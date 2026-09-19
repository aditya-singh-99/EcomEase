import React, { useState } from 'react';
import { ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GrowthCalculator() {
  const [monthlyGmvLakhs, setMonthlyGmvLakhs] = useState(25);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState(['Amazon', 'Flipkart']);

  const gmvRupees = monthlyGmvLakhs * 100000;
  // Estimated fee leakage recovery: 2.8% of GMV
  const estimatedRecovery = Math.round(gmvRupees * 0.028);
  // Estimated ad spend savings from ACOS optimization: ~15% spend * 28% waste reduction
  const adBudgetSavings = Math.round(gmvRupees * 0.15 * 0.28);
  // Target 6-month scaled monthly GMV
  const projected6MonthGmv = Math.round(monthlyGmvLakhs * 2.85);

  const toggleMarketplace = (mp) => {
    if (selectedMarketplaces.includes(mp)) {
      if (selectedMarketplaces.length > 1) {
        setSelectedMarketplaces(selectedMarketplaces.filter((item) => item !== mp));
      }
    } else {
      setSelectedMarketplaces([...selectedMarketplaces, mp]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/90 border border-slate-800 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Step 1: Current Monthly GMV
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  ₹{monthlyGmvLakhs} Lakhs
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  (₹{(monthlyGmvLakhs * 100000).toLocaleString('en-IN')})
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="150"
                step="1"
                value={monthlyGmvLakhs}
                onChange={(e) => setMonthlyGmvLakhs(Number(e.target.value))}
                className="w-full h-2 mt-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹3L</span>
                <span>₹50L</span>
                <span>₹1Cr</span>
                <span>₹1.5Cr+</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Step 2: Active Channels
              </div>
              <div className="flex flex-wrap gap-2">
                {['Amazon', 'Flipkart', 'Meesho', 'Myntra', 'JioMart', 'FirstCry'].map((mp) => {
                  const active = selectedMarketplaces.includes(mp);
                  return (
                    <button
                      key={mp}
                      type="button"
                      onClick={() => toggleMarketplace(mp)}
                      className={`btn-pressable px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        active
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {mp}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <div className="text-xs text-slate-400 font-medium">Estimated Recoverable Value</div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                ₹{(estimatedRecovery + adBudgetSavings).toLocaleString('en-IN')}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-slate-400 mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fee Leakage</span>
                </div>
                <div className="font-bold text-white text-sm">
                  ₹{estimatedRecovery.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-slate-400 mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ad Savings</span>
                </div>
                <div className="font-bold text-white text-sm">
                  ₹{adBudgetSavings.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/20 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400">Target 6-Month Scale: </span>
                <span className="font-bold text-white">₹{projected6MonthGmv} Lakhs/mo</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                +185%
              </span>
            </div>

            <a
              href="#audit-form"
              className="btn-pressable w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Audit Your Storefront For Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
