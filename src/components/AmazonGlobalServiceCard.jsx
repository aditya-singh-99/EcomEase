import React from 'react';
import { Globe, MessageCircle } from 'lucide-react';

export default function AmazonGlobalServiceCard() {
  const points = [
    "Account Launching",
    "Brand Registry (Upto 5)",
    "Buyer Messages Management",
    "Listing Addition Upto 100",
    "Runway Program Enrollment",
    "Promotions and Coupons",
    "Advertisement Optimisation (Advanced Level)",
    "Safe-t Claim Filing",
    "FBA Integration",
    "FBA Shipments Management",
    "Category Approval",
    "Account Health Appeals",
    "ASIN A+ (Upto 5)",
    "Product Suggestion",
    "Market Analysis",
    "Account Related Case Management"
  ];

  const whatsappUrl = "https://wa.me/919984788952?text=" + encodeURIComponent("Hello EcomEase! I am interested in the Amazon Global Service Plan (Monthly ₹15,000 / Quarterly ₹35,000). Please share onboarding details.");

  return (
    <div className="relative max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] p-6 sm:p-10 shadow-2xl border border-slate-300 text-slate-900 overflow-hidden font-sans">
      
      {/* Subtle World Map Background Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%231E3A8A' d='M150,120 Q180,100 220,130 T280,180 T240,240 T170,220 Z M450,100 Q500,80 550,110 T600,160 T560,220 T490,200 Z M700,130 Q760,110 820,150 T860,230 T800,280 T720,240 Z M220,300 Q260,280 300,320 T310,400 T250,420 T210,360 Z M720,330 Q770,310 820,350 T830,420 T760,430 T710,380 Z'/%3E%3C/svg%3E")`
        }}
      />

      {/* Header with Globes and EcomEase Branding */}
      <div className="relative z-10 flex items-center justify-between gap-3 pb-2 border-b border-slate-200/80">
        
        {/* Left Globe */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-200/80 border border-slate-300 flex items-center justify-center shadow-inner flex-shrink-0">
          <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-slate-500 stroke-[1.5]" />
        </div>

        {/* Center: EcomEase Logo & Text */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/com_transparent.png" 
            alt="EcomEase Logo" 
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-sm" 
          />
          <div className="text-[11px] sm:text-xs font-black tracking-[0.22em] text-[#0F172A] uppercase mt-0.5">
            COMEASE
          </div>
          <div className="text-[8px] sm:text-[9px] font-bold tracking-[0.16em] text-[#475569] uppercase -mt-0.5">
            BUSINESS SOLUTION
          </div>
        </div>

        {/* Right Globe */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-200/80 border border-slate-300 flex items-center justify-center shadow-inner flex-shrink-0">
          <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-slate-500 stroke-[1.5]" />
        </div>
      </div>

      {/* Main Title: amazon Global Service */}
      <div className="relative z-10 text-center my-6">
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          
          {/* amazon brand name with official curved smile arrow */}
          <div className="relative inline-block font-extrabold text-2xl sm:text-4xl text-black tracking-tight font-sans">
            <span>amazon</span>
            <svg 
              className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 w-[92%] h-3.5 sm:h-4 text-[#FF9900]" 
              viewBox="0 0 100 24" 
              fill="none"
            >
              <path d="M4 10 Q50 26 96 10" stroke="#FF9900" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M87 5 L98 10 L89 16 Z" fill="#FF9900" />
            </svg>
          </div>

          {/* Global Service text */}
          <span className="font-extrabold text-2xl sm:text-4xl text-[#1E3A8A] tracking-tight">
            Global Service
          </span>
        </div>
      </div>

      {/* 16 Bullet Points Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3 px-2 sm:px-6 my-6">
        {points.map((pt, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-[#1E3A8A] font-bold text-xs sm:text-[13.5px] leading-snug">
            <span className="w-2 h-2 rounded-full bg-[#1E3A8A] mt-1.5 flex-shrink-0" />
            <span>{pt}</span>
          </div>
        ))}
      </div>

      {/* Bottom -Charges- Capsule Badge */}
      <div className="relative z-10 mt-8 mx-auto max-w-sm rounded-[32px] sm:rounded-full border-2 border-black bg-white px-6 sm:px-8 py-3.5 text-center shadow-lg">
        <div className="text-black font-extrabold text-xs sm:text-sm tracking-widest flex items-center justify-center gap-1.5">
          <span className="text-amber-500 tracking-tighter">★★★★★</span>
          <span className="font-serif italic font-black text-sm sm:text-base px-1 text-black">-Charges-</span>
          <span className="text-amber-500 tracking-tighter">★★★★★</span>
        </div>
        <div className="mt-1 text-black font-black text-base sm:text-lg tracking-tight font-sans">
          Monthly: 15000/-
        </div>
        <div className="text-black font-black text-base sm:text-lg tracking-tight font-sans">
          Quarterly: 35000/-
        </div>
      </div>

      {/* WhatsApp Conversion CTA */}
      <div className="relative z-10 mt-6 text-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pressable inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-xl shadow-green-500/25 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Inquire Amazon Global Service on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
