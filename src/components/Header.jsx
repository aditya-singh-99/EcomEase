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
  BarChart3, 
  Truck, 
  ShieldAlert, 
  Layers, 
  PackageCheck,
  Search,
  Globe,
  Sparkles
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
    { name: 'Amazon Management', path: '/amazon-management-services', desc: 'FBA, Buy Box & Sponsored Ads' },
    { name: 'Flipkart Growth', path: '/flipkart-management-services', desc: 'FBF, PLA ads & BBD scale' },
    { name: 'Meesho Optimization', path: '/meesho-management-services', desc: 'Catalog ranking & zero penalty' },
    { name: 'JioMart Management', path: '/jiomart-management-services', desc: 'Retail & grocery marketplace sync' },
    { name: 'FirstCry Management', path: '/firstcry-management-services', desc: 'Baby & kids vertical category dominance' },
    { name: 'Myntra Fashion', path: '/myntra-management-services', desc: 'Apparel & lifestyle onboarding' },
  ];

  const supportiveServices = [
    { name: 'Performance Marketing (Ads)', path: '/advertisement-services', desc: 'Amazon PPC, Meta & Google campaigns', icon: BarChart3 },
    { name: 'Amazon FBA Enrollment', path: '/amazon-fba-enrollment', desc: 'Prime badge & multi-state FC allocation', icon: PackageCheck },
    { name: 'Flipkart FBF Fulfillment', path: '/flipkart-fbf-enrollment', desc: 'F-Assured badge & dock compliance', icon: Layers },
    { name: 'IXD Inbound Cross-Dock', path: '/ixd-enrollment', desc: 'Pan-India inventory distribution', icon: Truck },
    { name: 'Reconciliation & Recovery', path: '/reconcilation-services', desc: 'Recover 2-5% lost revenue from fee leaks', icon: ShieldAlert },
    { name: 'Shiprocket Integration', path: '/shiprocket-integration', desc: 'Automate multi-carrier parcel routing', icon: Truck },
    { name: '3PL Logistics Integration', path: '/3pl-logistics-integration', desc: 'Grade-A warehousing & B2B/B2C fulfillment', icon: Layers },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Banner Bar */}
      <div className="bg-black/60 backdrop-blur-md border-b border-white/10 py-1.5 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-white font-medium">BigCommerce Partner Ecosystem:</span>
            <span className="hidden sm:inline text-slate-300">Scale without limits across India's top marketplaces</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="tel:+919119885533" className="text-white font-semibold hover:text-cyan-400 flex items-center gap-1">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>+91 91198 85533</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3" />
              <span>Mon - Sat 10:30 AM - 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glass Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/15 py-3 shadow-2xl shadow-black/40' 
            : 'bg-slate-900/40 backdrop-blur-xl border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/com_white.png" 
              alt="EcomEase Business Solution" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link 
              to="/" 
              className={`transition-colors hover:text-white ${
                location.pathname === '/' ? 'text-cyan-400 font-semibold' : 'text-white/90'
              }`}
            >
              Home
            </Link>

            {/* Marketplaces Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMarketplacesOpen(true)}
              onMouseLeave={() => setMarketplacesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors py-2"
              >
                <span>Marketplaces</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${marketplacesOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {marketplacesOpen && (
                <div className="absolute top-full -left-6 w-80 pt-2 menu-enter">
                  <div className="rounded-3xl p-3 bg-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Channels & Marketplaces
                    </div>
                    {marketplaces.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block p-3 rounded-2xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="font-bold text-white text-xs sm:text-sm group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Growth Services Mega-Menu (Generous 2-Column Architecture) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors py-2"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180 text-blue-400' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full -left-64 sm:-left-72 w-[680px] lg:w-[740px] pt-2 menu-enter">
                  <div className="rounded-3xl p-6 bg-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Column 1: Fulfillment & Logistics */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                          <span>Fulfillment & Logistics</span>
                          <span className="text-emerald-400 font-normal">Pan-India Reach</span>
                        </div>
                        <div className="space-y-1.5">
                          {supportiveServices.filter((s) => ['/amazon-fba-enrollment', '/flipkart-fbf-enrollment', '/ixd-enrollment', '/3pl-logistics-integration'].includes(s.path)).map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/[0.06] transition-all group"
                              >
                                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2: Revenue & Financial Ops */}
                      <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pb-2 mb-2 border-b border-white/10 flex items-center justify-between">
                          <span>Revenue & Financial Ops</span>
                          <span className="text-blue-400 font-normal">Guaranteed ROI</span>
                        </div>
                        <div className="space-y-1.5">
                          {supportiveServices.filter((s) => ['/advertisement-services', '/reconcilation-services', '/shiprocket-integration'].includes(s.path)).map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-white/[0.06] transition-all group"
                              >
                                <div className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Featured Highlight Strip */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>Turnkey account protection & monthly fee leakage recovery</span>
                      </div>
                      <a
                        href="#audit-form"
                        className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group"
                      >
                        <span>Claim 24-Hr Audit</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#calculator" 
              className="text-white/90 hover:text-white transition-colors"
            >
              ROI Calculator
            </a>

            <Link 
              to="/contact-us" 
              className={`transition-colors hover:text-white ${
                location.pathname === '/contact-us' ? 'text-cyan-400 font-semibold' : 'text-white/90'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action Buttons (The exact BigCommerce Buttons: Solid Black 'Try for free' & White 'See in action') */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="#audit-form"
              className="btn-pressable px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-black hover:bg-slate-900 border border-white/20 shadow-lg transition-all"
            >
              Try for free
            </a>

            <a 
              href="#showcase"
              className="btn-pressable px-5 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-white shadow-lg transition-all"
            >
              See in action
            </a>
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
          <div className="lg:hidden px-4 pt-4 pb-8 bg-slate-950/95 backdrop-blur-2xl border-b border-white/15 space-y-4">
            <Link to="/" className="block text-base font-semibold text-white">Home</Link>
            
            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Marketplaces</div>
              <div className="grid grid-cols-2 gap-2">
                {marketplaces.map((m) => (
                  <Link key={m.path} to={m.path} className="p-2.5 rounded-xl bg-white/5 text-xs text-white">
                    {m.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Growth Solutions</div>
              <div className="space-y-1.5">
                {supportiveServices.map((s) => (
                  <Link key={s.path} to={s.path} className="block text-xs text-slate-300 py-1 hover:text-white">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-2">
              <a href="#audit-form" className="btn-pressable flex-1 py-3 text-center rounded-xl bg-black text-white text-xs font-bold border border-white/20">
                Try for free
              </a>
              <a href="#showcase" className="btn-pressable flex-1 py-3 text-center rounded-xl bg-white text-slate-950 text-xs font-bold">
                See in action
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
