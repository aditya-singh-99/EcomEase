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

          <div className="flex items-center gap-4 text-[11px]">
            <a href="mailto:help@ecomeasebusiness.in" className="hover:text-cyan-400 flex items-center gap-1 text-slate-300 transition-colors">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">help@ecomeasebusiness.in</span>
            </a>
            <a href="tel:+919119885533" className="text-white font-semibold hover:text-cyan-400 flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>+91 91198 85533</span>
            </a>
            <a href="tel:+919984788952" className="text-white font-semibold hover:text-emerald-400 hidden sm:flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+91 99847 88952</span>
            </a>
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
                <div className="absolute top-full -left-6 w-88 pt-2 menu-enter z-50">
                  <div className="rounded-3xl p-3 bg-slate-950/95 backdrop-blur-3xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] space-y-1">
                    <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Channels & Marketplaces
                    </div>
                    {marketplaces.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-white/10 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-xl bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-200">
                          <img 
                            src={item.logo} 
                            alt={item.name} 
                            className="w-full h-full object-contain rounded" 
                          />
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs sm:text-sm group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
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
                        <span>Across Amazon, Flipkart, Meesho, JioMart, FirstCry & Myntra</span>
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
