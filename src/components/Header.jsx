import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Truck, 
  ShieldAlert, 
  Layers
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketplacesOpen, setMarketplacesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMarketplacesOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const marketplaces = [
    { 
      name: 'Amazon Management', 
      path: '/amazon-management-services', 
      desc: 'FBA, Buy Box & Sponsored Ads',
      logo: '/header-img/Amazon-logo.webp'
    },
    { 
      name: 'Flipkart Growth', 
      path: '/flipkart-management-services', 
      desc: 'FBF, PLA ads & BBD scale',
      logo: '/header-img/Flipkart-logo.jpg'
    },
    { 
      name: 'Meesho Optimization', 
      path: '/meesho-management-services', 
      desc: 'Catalog ranking & zero penalty',
      logo: '/header-img/Meesho Logo.webp'
    },
    { 
      name: 'JioMart Management', 
      path: '/jiomart-management-services', 
      desc: 'Retail & grocery marketplace sync',
      logo: '/JioMart_Logo.png'
    },
    { 
      name: 'FirstCry Management', 
      path: '/firstcry-management-services', 
      desc: 'Baby & kids vertical category dominance',
      logo: '/FirstCry_Logo.png'
    },
    { 
      name: 'Myntra Fashion', 
      path: '/myntra-management-services', 
      desc: 'Apparel & lifestyle onboarding',
      logo: '/header-img/Myntra-logo.png'
    },
    { 
      name: 'eBay Global Export', 
      path: '/ebay-management-services', 
      desc: 'Cross-border sales to 190+ countries',
      logo: '/partner-logos/ebay-partner-network.jpg'
    },
    { 
      name: 'Amazon Global Expansion', 
      path: '/amazon-global-expansion', 
      desc: 'Scale to US, UK, UAE & Europe',
      logo: '/header-img/Amazon-logo.webp'
    },
  ];

  const supportiveServices = [
    { name: 'Performance Marketing (PPC)', path: '/advertisement-services', desc: 'Amazon PPC, Meta & Google campaigns', logo: '/header-img/meta-ads-logo.png' },
    { name: 'Amazon Global Expansion', path: '/amazon-global-expansion', desc: 'Scale to US, UK, UAE & Europe', logo: '/header-img/Amazon-logo.webp' },
    { name: 'Brand Store & EBC Content', path: '/brand-store-ebc-services', desc: 'Custom storefronts & A+ modules', logo: '/header-img/website_degin_logo.png' },
    { name: 'Account Reinstatement', path: '/account-reinstatement-services', desc: 'POA drafting & suspension appeals', icon: ShieldAlert },
    { name: 'Dropshipping & Social', path: '/dropshipping-social-commerce', desc: 'Automated catalog sync & Meta shops', logo: '/header-img/shopify_logo.png' },
    { name: 'Amazon FBA Enrollment', path: '/amazon-fba-enrollment', desc: 'Prime badge & multi-state FC allocation', logo: '/header-img/Amazon-logo.webp' },
    { name: 'Flipkart FBF Fulfillment', path: '/flipkart-fbf-enrollment', desc: 'F-Assured badge & dock compliance', logo: '/header-img/Flipkart-logo.jpg' },
    { name: 'IXD Inbound Cross-Dock', path: '/ixd-enrollment', desc: 'Pan-India inventory distribution', icon: Truck },
    { name: 'Reconciliation & Recovery', path: '/reconcilation-services', desc: 'Recover 2-5% lost revenue from fee leaks', icon: ShieldAlert },
    { name: 'Shiprocket Integration', path: '/shiprocket-integration', desc: 'Automate multi-carrier parcel routing', icon: Truck },
    { name: '3PL Logistics Integration', path: '/3pl-logistics-integration', desc: 'Grade-A warehousing & B2B/B2C fulfillment', icon: Layers },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Banner Bar (Authentic Operating Details & Direct Contacts) */}
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Clock className="w-3 h-3 text-cyan-400 flex-shrink-0" />
            <span>Mon - Fri 10:30 AM - 6:30 PM, Sat 11:00 AM - 5:30 PM, Sun - Closed</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
            <a href="mailto:help@ecomeasebusiness.in" className="hover:text-cyan-400 flex items-center gap-1 text-slate-300 transition-colors">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="hidden md:inline">help@ecomeasebusiness.in</span>
            </a>
            <a href="tel:+919119885533" className="text-white font-semibold hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>+91 91198 85533</span>
            </a>
            <a href="tel:+919984788952" className="text-white font-semibold hover:text-emerald-400 hidden sm:flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 99847 88952</span>
            </a>

            {/* Social Media Links beside phone numbers */}
            <div className="flex items-center gap-1.5 sm:gap-2 pl-2 sm:pl-3 border-l border-white/20">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61565944503907&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EcomEase on Facebook"
                aria-label="Facebook"
                className="w-5 h-5 rounded-md bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/50 text-slate-300 hover:text-[#1877F2] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/ecomeasebusinesssolution/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow EcomEase on Instagram"
                aria-label="Instagram"
                className="w-5 h-5 rounded-md bg-white/5 hover:bg-[#E4405F]/20 border border-white/10 hover:border-[#E4405F]/50 text-slate-300 hover:text-[#E4405F] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/ecomease-business-solution-9a8266352/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with EcomEase on LinkedIn"
                aria-label="LinkedIn"
                className="w-5 h-5 rounded-md bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 text-slate-300 hover:text-[#0A66C2] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Google My Business */}
              <a 
                href="https://www.google.com/search?q=ecomease+business+solution"
                target="_blank"
                rel="noopener noreferrer"
                title="EcomEase Business Solution on Google"
                aria-label="Google My Business"
                className="w-5 h-5 rounded-md bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24">
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

      {/* Floating Glass Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-white/15 py-2.5 shadow-2xl shadow-black/50' 
            : 'bg-slate-900/50 backdrop-blur-xl border-b border-white/10 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo (Bigger enterprise size) */}
          <Link to="/" className="flex items-center gap-3 group py-0.5">
            <img 
              src="/com_white.png" 
              alt="EcomEase Business Solution" 
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Navigation Links with Bigger Font */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-8 text-[15px] font-semibold">
            <Link 
              to="/" 
              className={`transition-colors hover:text-cyan-400 ${
                location.pathname === '/' ? 'text-cyan-400 font-bold' : 'text-white/90'
              }`}
            >
              Home
            </Link>

            {/* Marketplaces Dropdown (With Official Company Logos) */}
            <div 
              className="relative"
              onMouseEnter={() => setMarketplacesOpen(true)}
              onMouseLeave={() => setMarketplacesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-white/90 hover:text-cyan-400 transition-colors py-2"
              >
                <span>Marketplaces</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${marketplacesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {marketplacesOpen && (
                <div className="absolute top-full -left-6 sm:-left-12 w-[540px] sm:w-[580px] pt-2 menu-enter z-50">
                  <div className="rounded-3xl p-4 bg-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                    <div className="flex items-center justify-between px-3 pt-1 pb-3 mb-2 border-b border-white/10">
                      <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                        Channels & Marketplaces
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        8 Marketplace Channels
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {marketplaces.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
                            <img 
                              src={item.logo} 
                              alt={item.name} 
                              className="w-full h-full object-contain rounded" 
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-xs sm:text-sm group-hover:text-cyan-400 transition-colors truncate">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 leading-tight truncate">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Status Strip */}
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-xs">
                      <span className="text-slate-400 text-[11px]">Need multi-channel catalog syncing?</span>
                      <Link to="/contact-us" className="text-cyan-400 hover:text-cyan-300 font-bold text-[11px] flex items-center gap-1">
                        <span>Get Free Proposal →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Growth Services Mega-Menu (With Authentic Company Logos) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-white/90 hover:text-cyan-400 transition-colors py-2"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${servicesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-80 sm:-left-96 w-[880px] xl:w-[940px] pt-2 menu-enter z-50">
                  <div className="rounded-3xl p-6 bg-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
                    <div className="grid grid-cols-3 gap-6">
                      
                      {/* Column 1: Fulfillment & Logistics */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                          <span>Fulfillment & Logistics</span>
                          <span className="text-emerald-400 font-normal">Pan-India</span>
                        </div>
                        <div className="space-y-1">
                          {/* Amazon FBA */}
                          <Link
                            to="/amazon-fba-enrollment"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/Amazon-logo.webp" alt="Amazon" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Amazon FBA Enrollment
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Prime badge & multi-state FC setup</div>
                            </div>
                          </Link>

                          {/* Flipkart FBF */}
                          <Link
                            to="/flipkart-fbf-enrollment"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#FFE500] p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-yellow-300">
                              <img src="/header-img/Flipkart-logo.jpg" alt="Flipkart" className="w-full h-full object-contain rounded" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Flipkart FBF Fulfillment
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">F-Assured badge & dock slots</div>
                            </div>
                          </Link>

                          {/* IXD Cross-Dock */}
                          <Link
                            to="/ixd-enrollment"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Truck className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                IXD Inbound Cross-Dock
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">APOB/VPOB multi-state distribution</div>
                            </div>
                          </Link>

                          {/* Shiprocket */}
                          <Link
                            to="/shiprocket-integration"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Truck className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Shiprocket Integration
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Automate multi-carrier parcel dispatch</div>
                            </div>
                          </Link>

                          {/* 3PL Logistics */}
                          <Link
                            to="/3pl-logistics-integration"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Layers className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                3PL Logistics Integration
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Grade-A warehousing & B2B/B2C fulfillment</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Performance & Advertising */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                          <span>Performance & Ads</span>
                          <span className="text-blue-400 font-normal">Max ROAS</span>
                        </div>
                        <div className="space-y-1">
                          {/* Google & Meta Ads */}
                          <Link
                            to="/advertisement-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/meta-ads-logo.png" alt="Meta" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Google & Meta Ads
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">PMax, Advantage+ & targeted funnels</div>
                            </div>
                          </Link>

                          {/* PPC */}
                          <Link
                            to="/advertisement-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/Arvian_Performance_marketing_Logo.png" alt="PPC" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Digital Advertising (PPC)
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Sponsored Products, Brands & ACOS control</div>
                            </div>
                          </Link>

                          {/* Amazon Global Expansion */}
                          <Link
                            to="/amazon-global-expansion"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/Amazon-logo.webp" alt="Amazon" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Amazon Global Expansion
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Scale to US, UK, UAE & Europe marketplaces</div>
                            </div>
                          </Link>

                          {/* Dropshipping */}
                          <Link
                            to="/dropshipping-social-commerce"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Dropshipping Services
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Automated catalog sync & zero inventory</div>
                            </div>
                          </Link>

                          {/* Social Commerce */}
                          <Link
                            to="/dropshipping-social-commerce"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/SMO_logo.jpg" alt="Social" className="w-full h-full object-contain rounded" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Social Media Commerce
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Instagram & Facebook shops management</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Brand & Account Protection */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                          <span>Brand & Account Safety</span>
                          <span className="text-cyan-400 font-normal">Protection</span>
                        </div>
                        <div className="space-y-1">
                          {/* Brand Stores */}
                          <Link
                            to="/brand-store-ebc-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/website_degin_logo.png" alt="Storefronts" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Creation of Brand Stores
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Custom multi-page immersive storefronts</div>
                            </div>
                          </Link>

                          {/* EBC & A+ */}
                          <Link
                            to="/brand-store-ebc-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white p-0.5 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-slate-200">
                              <img src="/header-img/graphics-logo.webp" alt="EBC" className="w-full h-full object-contain" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                EBC & A+ Content Services
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">High-converting visual brand storytelling</div>
                            </div>
                          </Link>

                          {/* Account Reinstatement */}
                          <Link
                            to="/account-reinstatement-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ShieldAlert className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Account Reinstatement
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">POA drafting, suspension appeals & policy fix</div>
                            </div>
                          </Link>

                          {/* Reconciliation */}
                          <Link
                            to="/reconcilation-services"
                            className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.06] transition-all group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ShieldAlert className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                                Reconciliation Services
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Recover 2-5% lost revenue from fee leaks</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Featured Highlight Strip */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Across Amazon, Flipkart, Meesho, JioMart, FirstCry, Myntra & eBay</span>
                      </div>
                      <a
                        href="#audit-form"
                        className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
                      >
                        <span>Claim 24-Hr Growth Audit</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#services" 
              className="text-white/90 hover:text-cyan-400 transition-colors"
            >
              Services
            </a>

            <a 
              href="#why-ecomease" 
              className="text-white/90 hover:text-cyan-400 transition-colors"
            >
              Why EcomEase
            </a>

            <Link 
              to="/contact-us" 
              className={`transition-colors hover:text-cyan-400 ${
                location.pathname === '/contact-us' ? 'text-cyan-400 font-bold' : 'text-white/90'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://wa.me/919984788952?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="btn-pressable px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-400/30 shadow-lg shadow-emerald-950/50 transition-all"
            >
              WhatsApp Us
            </a>

            <Link 
              to="/contact-us"
              className="btn-pressable px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 border border-white shadow-lg transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-8 bg-slate-950/95 backdrop-blur-2xl border-b border-white/15 space-y-4 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="block text-base font-semibold text-white">Home</Link>
            
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Marketplaces</div>
              <div className="grid grid-cols-2 gap-2">
                {marketplaces.map((m) => (
                  <Link key={m.path} to={m.path} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 text-xs text-white">
                    <img src={m.logo} alt={m.name} className="w-4 h-4 object-contain rounded" />
                    <span className="truncate">{m.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Growth Solutions</div>
              <div className="space-y-1.5">
                {supportiveServices.map((s) => (
                  <Link key={s.path} to={s.path} className="flex items-center gap-2 text-xs text-slate-300 py-1 hover:text-white">
                    {s.logo ? (
                      <img src={s.logo} alt={s.name} className="w-3.5 h-3.5 object-contain" />
                    ) : (
                      <s.icon className="w-3.5 h-3.5 text-blue-400" />
                    )}
                    <span>{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media Links in Mobile Menu */}
            <div className="pt-3 border-t border-white/10">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Connect With Us</div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61565944503907&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-[11px]">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ecomeasebusinesssolution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-[11px]">Insta</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ecomease-business-solution-9a8266352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-[11px]">LinkedIn</span>
                </a>
                <a
                  href="https://www.google.com/search?q=ecomease+business+solution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  <span className="text-[11px]">Google</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-2">
              <a 
                href="https://wa.me/919984788952?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                target="_blank"
                rel="noreferrer"
                className="btn-pressable flex-1 py-3 text-center rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-lg"
              >
                WhatsApp Us
              </a>
              <Link 
                to="/contact-us" 
                className="btn-pressable flex-1 py-3 text-center rounded-xl bg-white text-slate-950 text-xs font-bold shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
