import React from 'react';
import { Globe, Plane, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, DollarSign, FileCheck } from 'lucide-react';
import TitleBanner from '../components/TitleBanner';
import BlockTransition from '../components/BlockTransition';

export default function AmazonGlobalExpansion() {
  const regions = [
    { name: 'Amazon North America (USA, Canada, Mexico)', stat: '$350B+ Market', flag: '🇺🇸', desc: 'Direct access to high-spending US Prime consumers with FBA export.' },
    { name: 'Amazon Europe & UK', stat: '500M+ Consumers', flag: '🇬🇧', desc: 'VAT registration, PAN-EU FBA warehousing, and localized marketplace listings.' },
    { name: 'Amazon Middle East (UAE & Saudi Arabia)', stat: '+65% YoY Growth', flag: '🇦🇪', desc: 'Booming Gulf eCommerce hub with zero customs duties for select categories.' },
    { name: 'Amazon Asia-Pacific (Australia, Japan, Singapore)', stat: 'High Margin', flag: '🇦🇺', desc: 'Less competitive, high purchasing power markets ideal for premium D2C brands.' }
  ];

  const deliverables = [
    'International Seller Central account setup and identity verification',
    'Overseas tax compliance (US State Sales Tax, UK/EU VAT & EORI)',
    'Global logistics, sea/air freight forwarding, and international FBA prep',
    'Multi-currency banking setup with automated INR repatriation',
    'Localized keyword research & SEO translated into target languages',
    'International trademark protection and Amazon Global Brand Registry',
    'Cross-border Sponsored Ads (PPC) and localized promotional campaigns',
    'Customer return processing and international customer support'
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner 
        title="Amazon Global Expansion" 
        subtitle="Scale your Indian brand to Amazon US, UK, UAE, Europe, and Australia with complete cross-border logistics, tax compliance, and listing localization."
      />

      {/* Overview */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Unlock Global Dollar & Pound Revenue
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Exporting via Amazon Global Selling allows Indian manufacturers and brands to sell directly to over 300 million active international customers. We manage your international operational pipeline from end to end—from US/UK tax setup to international FBA shipping and multi-currency payouts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Currency Risk (Direct INR Bank Transfer)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Amazon FBA Global Prime Badging</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>US LLC & UK VAT Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>3x to 5x Higher Margins in Foreign Currencies</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-white/15 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-white/10 pb-2">
              Global Market Reach
            </div>
            {regions.map((reg) => (
              <div key={reg.name} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{reg.flag}</span>
                    <span>{reg.name}</span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-400">{reg.stat}</span>
                </div>
                <p className="text-[11px] text-slate-400">{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* Scope & Deliverables */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
            Turnkey Global Selling Protocol
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Everything required to launch, rank, and dominate international Amazon marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                {idx + 1}
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact-us"
            className="btn-pressable inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-xl"
          >
            <span>Schedule Global Expansion Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
