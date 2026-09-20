import React from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight, FileText, AlertOctagon, Scale, Clock, ShieldCheck } from 'lucide-react';
import TitleBanner from '../components/TitleBanner';
import BlockTransition from '../components/BlockTransition';

export default function AccountReinstatement() {
  const issuesCovered = [
    { title: 'Amazon Section 3 Code of Conduct Suspensions', desc: 'Comprehensive root cause identification, corrective measure drafting, and customized Plan of Action (POA) submission.' },
    { title: 'Intellectual Property (IP) & Trademark Complaints', desc: 'Retraction coordination with rights owners, invoice verification, and counter-notification filings.' },
    { title: 'Order Defect Rate (ODR) & Policy Violations', desc: 'Overcoming negative customer feedback spikes, A-to-Z guarantee claim appeals, and fulfillment workflow overhauls.' },
    { title: 'Restricted Products & Inauthentic Inventory Claims', desc: 'Supply chain provenance validation, distributor authorization vetting, and category gate approvals.' }
  ];

  const steps = [
    { step: '01', title: 'Forensic Account & Notification Audit', desc: 'Our directors review your suspension notice, performance notifications, customer metrics, and Seller Central health logs.' },
    { step: '02', title: 'Root Cause & Preventative Strategy', desc: 'We pinpoint the exact algorithm trigger or policy clause that caused the deactivation and map out permanent corrective procedures.' },
    { step: '03', title: 'Custom Plan of Action (POA) Writing', desc: 'We author a bespoke, multi-part POA tailored to platform review guidelines without generic copy-paste templates.' },
    { step: '04', title: 'Platform Escalation & Restoration', desc: 'We guide submission through official escalation channels and handle follow-up correspondence until reinstatement is granted.' }
  ];

  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner 
        title="Account Reinstatement" 
        subtitle="Fast, authoritative reinstatement protocols for suspended Amazon, Flipkart, and Meesho seller accounts. Custom Plans of Action (POA) and escalation defense."
      />

      {/* Main Feature */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rapid Account Defense & Suspension Recovery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide professional e-commerce account reinstatement services, guiding you through the challenges of restoring your account to good standing. To address suspensions and deactivations, our team specializes in troubleshooting, writing thorough appeal letters, and corresponding with platform support. You can minimize downtime, recoup lost sales, and resume operations swiftly and effectively with our expert reinstatement service.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-tabular">94.6%</div>
                <div className="text-xs text-slate-400 mt-1">Reinstatement Success Rate</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/10">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-tabular">24-48 Hrs</div>
                <div className="text-xs text-slate-400 mt-1">Typical POA Turnaround</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/80 border border-white/15 flex flex-col items-center text-center">
            <img 
              src="/Services/Reinstatement.png" 
              alt="Account Reinstatement" 
              className="w-32 h-32 object-contain mb-4 drop-shadow-xl"
            />
            <h3 className="text-lg font-bold text-white mb-2">Zero Template Appeals</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Amazon and Flipkart algorithms instantly reject copy-pasted online templates. Every Plan of Action we draft is 100% custom-written by seasoned marketplace policy specialists.
            </p>
          </div>
        </div>
      </section>

      <BlockTransition variant="beam" />

      {/* Issues Covered */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">Suspensions We Resolve</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Expert resolution across all major seller policy enforcement categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issuesCovered.map((issue) => (
            <div key={issue.title} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertOctagon className="w-4 h-4" />
                <span>{issue.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{issue.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <BlockTransition variant="horizon" />

      {/* Protocol Steps */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white">The Reinstatement Protocol</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2 flex flex-col justify-between">
              <div>
                <div className="text-2xl font-black text-blue-400 font-mono mb-2">{s.step}</div>
                <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact-us"
            className="btn-pressable inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-xl"
          >
            <span>Submit Notice for Urgent Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
