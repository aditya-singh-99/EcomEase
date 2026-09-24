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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Brand */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/com_white.png" 
                alt="EcomEase Business Solution" 
                className="h-7 w-auto object-contain" 
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-xs">
              Across Amazon, Flipkart, Meesho, JioMart, FirstCry, and Myntra, we optimize listings, pricing, inventory, and promotions as part of our all-inclusive eCommerce management services.
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
              <li><Link to="/ebay-management-services" className="hover:text-white transition-colors">eBay Global Export</Link></li>
            </ul>
          </div>

          {/* Fulfillment & Logistics */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Logistics & Supply</div>
            <ul className="space-y-1.5">
              <li><Link to="/amazon-fba-enrollment" className="hover:text-white transition-colors">Amazon FBA Enrollment</Link></li>
              <li><Link to="/flipkart-fbf-enrollment" className="hover:text-white transition-colors">Flipkart FBF Fulfillment</Link></li>
              <li><Link to="/ixd-enrollment" className="hover:text-white transition-colors">IXD Inbound Cross-Dock</Link></li>
              <li><Link to="/shiprocket-integration" className="hover:text-white transition-colors">Shiprocket Logistics</Link></li>
              <li><Link to="/3pl-logistics-integration" className="hover:text-white transition-colors">3PL Warehousing</Link></li>
              <li><Link to="/dropshipping-social-commerce" className="hover:text-white transition-colors">Dropshipping Services</Link></li>
            </ul>
          </div>

          {/* Brand & Performance Services */}
          <div className="space-y-2">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">Growth & Brand</div>
            <ul className="space-y-1.5">
              <li><Link to="/advertisement-services" className="hover:text-white transition-colors">Google & Meta Ads</Link></li>
              <li><Link to="/advertisement-services" className="hover:text-white transition-colors">Digital Advertising (PPC)</Link></li>
              <li><Link to="/amazon-global-expansion" className="hover:text-white transition-colors">Amazon Global Expansion</Link></li>
              <li><Link to="/brand-store-ebc-services" className="hover:text-white transition-colors">Brand Store Creation</Link></li>
              <li><Link to="/brand-store-ebc-services" className="hover:text-white transition-colors">EBC & A+ Content</Link></li>
              <li><Link to="/account-reinstatement-services" className="hover:text-white transition-colors">Account Reinstatement</Link></li>
              <li><Link to="/reconcilation-services" className="hover:text-white transition-colors">Payment Reconciliation</Link></li>
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
                <a href="tel:+919984788952" className="hover:text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 99847 88952
                </a>
              </li>
              <li>
                <a href="mailto:help@ecomeasebusiness.in" className="hover:text-white flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> help@ecomeasebusiness.in
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>C27/222, Jagatganj, Chetganj, Varanasi, UP 221002</span>
              </li>
            </ul>

            {/* Social Profiles */}
            <div className="pt-2">
              <div className="font-semibold text-white uppercase tracking-wider text-[10px] mb-2">Connect With Us</div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.facebook.com/profile.php?id=61565944503907&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-[#1877F2]/20 border border-slate-700 hover:border-[#1877F2]/50 text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/ecomeasebusinesssolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-[#E4405F]/20 border border-slate-700 hover:border-[#E4405F]/50 text-slate-400 hover:text-[#E4405F] flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ecomease-business-solution-9a8266352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-[#0A66C2]/20 border border-slate-700 hover:border-[#0A66C2]/50 text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.google.com/search?q=ecomease+business+solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google My Business"
                  className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-white/10 border border-slate-700 hover:border-slate-500 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </a>
              </div>
            </div>
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
