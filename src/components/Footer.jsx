import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060910] text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pre-footer Callout */}
        <div className="rounded-2xl p-8 bg-slate-900 border border-slate-800 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Ready to stop leaving marketplace revenue on the table?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Get a full 360° listing health, Buy Box, and payment reconciliation audit in 24 hours.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="btn-pressable whitespace-nowrap px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                E
              </div>
              <span className="text-base font-bold text-white">EcomEase</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              India's specialized marketplace growth agency for Amazon, Flipkart, Meesho, Myntra, JioMart & FirstCry.
            </p>
          </div>

          {/* Marketplaces */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Marketplaces</div>
            <ul className="space-y-1.5">
              <li><Link to="/amazon-management-services" className="hover:text-white transition-colors">Amazon SPN</Link></li>
              <li><Link to="/flipkart-management-services" className="hover:text-white transition-colors">Flipkart Growth</Link></li>
              <li><Link to="/meesho-management-services" className="hover:text-white transition-colors">Meesho Optimization</Link></li>
              <li><Link to="/jiomart-management-services" className="hover:text-white transition-colors">JioMart Retail</Link></li>
              <li><Link to="/firstcry-management-services" className="hover:text-white transition-colors">FirstCry Kids</Link></li>
              <li><Link to="/myntra-management-services" className="hover:text-white transition-colors">Myntra Fashion</Link></li>
            </ul>
          </div>

          {/* Growth Services */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Growth Services</div>
            <ul className="space-y-1.5">
              <li><Link to="/advertisement-services" className="hover:text-white transition-colors">Performance PPC & Meta Ads</Link></li>
              <li><Link to="/amazon-fba-enrollment" className="hover:text-white transition-colors">Amazon FBA Enrollment</Link></li>
              <li><Link to="/flipkart-fbf-enrollment" className="hover:text-white transition-colors">Flipkart FBF Fulfillment</Link></li>
              <li><Link to="/ixd-enrollment" className="hover:text-white transition-colors">IXD Inbound Cross-Dock</Link></li>
              <li><Link to="/reconcilation-services" className="hover:text-white transition-colors">Payment Reconciliation</Link></li>
              <li><Link to="/shiprocket-integration" className="hover:text-white transition-colors">Shiprocket Logistics</Link></li>
              <li><Link to="/3pl-logistics-integration" className="hover:text-white transition-colors">3PL Warehousing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Direct Operations</div>
            <ul className="space-y-1.5">
              <li>
                <a href="tel:+919119885533" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" /> +91 91198 85533
                </a>
              </li>
              <li>
                <a href="mailto:help@ecomeasebusiness.in" className="hover:text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> help@ecomeasebusiness.in
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>Varanasi, UP & Pan-India Client Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} EcomEase. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact-us" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/contact-us" className="hover:text-slate-300">Terms of Service</Link>
            <Link to="/contact-us" className="hover:text-slate-300">Seller Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
