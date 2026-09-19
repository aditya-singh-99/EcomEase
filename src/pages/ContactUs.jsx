import React from 'react';
import TitleBanner from "../components/TitleBanner";
import Form from "../components/Form";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-[#070A12] text-white min-h-screen">
      <TitleBanner
        title="Contact Us"
        subtitle="Speak directly with our senior eCommerce directors and scale your marketplace revenue."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Connect with Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Marketplace Momentum Together
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you're struggling with high ACOS, payment reconciliation leaks, or looking to scale onto Flipkart, Meesho & Quick Commerce, we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Direct Hotline</h4>
                <div className="space-y-1 text-sm">
                  <a href="tel:+919119885533" className="block text-slate-300 hover:text-cyan-400 font-medium">
                    +91 91198 85533
                  </a>
                  <a href="tel:+919984788952" className="block text-slate-300 hover:text-cyan-400 font-medium">
                    +91 99847 88952
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email Inquiry</h4>
                <div className="space-y-1 text-sm">
                  <a href="mailto:help@ecomeasebusiness.in" className="block text-slate-300 hover:text-cyan-400 font-medium break-all">
                    help@ecomeasebusiness.in
                  </a>
                  <span className="text-xs text-slate-500">2-4 hour reply SLA</span>
                </div>
              </div>

              {/* Timing */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Business Hours</h4>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>Mon - Fri: 10:30 AM - 6:30 PM</div>
                  <div>Sat: 11:00 AM - 5:30 PM</div>
                  <div className="text-rose-400">Sun: Closed</div>
                </div>
              </div>

              {/* Office */}
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operations Office</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  C27/222, Jagatganj, Chetganj, Varanasi, UP 221002
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-500/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
              <p className="text-xs text-slate-300">
                100% Confidentiality Guaranteed. We sign mutual NDAs before reviewing proprietary seller catalog & financial data.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white">Get a Callback Same Day</h3>
              <p className="text-xs text-slate-400 mt-1">Zero signup or credit card required. Free 30-min strategy review.</p>
            </div>
            <Form />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 pt-12 border-t border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Find Our Operations Base</h3>
            <p className="text-xs text-slate-400 mt-1">Visiting in person? Schedule an appointment with our team.</p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.0683985248997!2d82.9980366746992!3d25.326137757595877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2fae4a15790f%3A0x83d99f1410e0b078!2sHotel%20Benaras%20Gharana%20Inn!5e0!3m2!1sen!2sin!4v1723119689468!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}