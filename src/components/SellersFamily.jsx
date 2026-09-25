import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * SellersFamily Component
 * Continuous carousel showcase displaying 150+ authentic seller brands.
 */
export default function SellersFamily() {
  // Complete list of authentic seller brands with their respective logos
  const sellerBrands = [
    {
      name: 'Sujata Appliances',
      category: 'Home & Kitchen Appliances',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/sujata-appliances.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Market Leader',
    },
    {
      name: 'Kudos Laboratories India',
      category: 'Ayurveda & Healthcare',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/kudos-laboratories.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Ayurvedic Scale',
    },
    {
      name: 'Rasasi Cosmetics',
      category: 'Luxury Perfumes & Fragrance',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/rasasi-cosmetics.png',
      platforms: ['Amazon', 'Nykaa', 'Flipkart'],
      highlight: 'Global Luxury',
    },
    {
      name: 'Lattafa Perfumes',
      category: 'Niche Arabian Fragrances',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/lattafa-perfumes.png',
      platforms: ['Amazon Global', 'Flipkart'],
      highlight: 'Top Seller',
    },
    {
      name: 'Afnan Perfumes',
      category: 'Luxury Perfume & EDP',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/afnan-perfumes.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'High Demand',
    },
    {
      name: 'Lomani Paris',
      category: 'French Perfumes & Body Spray',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/lomani-paris.png',
      platforms: ['Amazon', 'Myntra'],
      highlight: 'International',
    },
    {
      name: 'YOU Skincare',
      category: 'Skincare & Cosmetics',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/you-skincare.png',
      platforms: ['Amazon', 'Nykaa'],
      highlight: 'Trending D2C',
    },
    {
      name: 'Beauty Basket',
      category: 'Beauty & Personal Care',
      categoryGroup: 'Beauty & Perfumes',
      logo: '/sellers/beauty-basket.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Beauty Hub',
    },
    {
      name: 'Medexlogy',
      category: 'Health & Medical Wellness',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/medexlogy.png',
      platforms: ['Amazon FBA', 'Flipkart'],
      highlight: 'Health Tech',
    },
    {
      name: 'Helium Healthcare',
      category: 'Premium Sanitary & Hygiene',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/helium-healthcare.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Hygiene Scale',
    },
    {
      name: 'Chesta Formulation',
      category: 'Pharmaceutical Formulations',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/chesta-formulation.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Certified Pharma',
    },
    {
      name: 'Akshobhya',
      category: 'Organic Ayurvedic Wellness',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/akshobhya.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Pure Organics',
    },
    {
      name: 'Kashivardan',
      category: 'Pooja, Spiritual & Wellness',
      categoryGroup: 'Health & Wellness',
      logo: '/sellers/kashivardan.png',
      platforms: ['Amazon', 'Meesho'],
      highlight: 'Spiritual Decor',
    },
    {
      name: 'Cruxfab',
      category: 'Fashion Textiles & Apparel',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/cruxfab.png',
      platforms: ['Myntra', 'Flipkart', 'Meesho'],
      highlight: 'Fashion Scale',
    },
    {
      name: 'Modaji',
      category: 'Ethnic Wear & Fashion',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/modaji.png',
      platforms: ['Myntra', 'Flipkart'],
      highlight: 'Apparel Focus',
    },
    {
      name: 'Tera 13',
      category: 'Lifestyle & Accessories',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/tera-13.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'High Velocity',
    },
    {
      name: 'Fancy Forever (FFH)',
      category: 'Fashion Accessories & Beauty',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/fancy-forever.png',
      platforms: ['Amazon', 'Meesho'],
      highlight: 'Accessories',
    },
    {
      name: 'Zukah Kitchen Essentials',
      category: 'Cookware & Kitchenware',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/zukah-kitchen.png',
      platforms: ['Amazon FBA', 'Flipkart'],
      highlight: 'Kitchen Core',
    },
    {
      name: 'Harvior',
      category: 'Tableware & Fine Dining',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/harvior.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Dining Scale',
    },
    {
      name: 'H2O Floss',
      category: 'Oral Health & Electronics',
      categoryGroup: 'Kids, Toys & Gadgets',
      logo: '/sellers/h2o-floss.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Oral Care',
    },
    {
      name: 'Saintimo',
      category: 'Smart Tech & Wearables',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/saintimo.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Tech Lifestyle',
    },
    {
      name: 'Implemental',
      category: 'Tools, DIY & Hardware',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/implemental.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Hardware Pro',
    },
    {
      name: 'Jagan Tools',
      category: 'Industrial Tools Since 1962',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/jagan-tools.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: '60+ Yr Legacy',
    },
    {
      name: 'AR Play',
      category: 'Kids Toys & Educational Games',
      categoryGroup: 'Kids, Toys & Gadgets',
      logo: '/sellers/ar-play.png',
      platforms: ['FirstCry', 'Amazon', 'Flipkart'],
      highlight: 'Kids Favorite',
    },
    {
      name: 'Toyxiity Mall',
      category: 'Baby Care, Toys & Games',
      categoryGroup: 'Kids, Toys & Gadgets',
      logo: '/sellers/toyxiity-mall.png',
      platforms: ['FirstCry', 'Amazon'],
      highlight: 'Baby & Kids',
    },
    {
      name: 'Glitreeprops',
      category: 'Party Decor & Photo Props',
      categoryGroup: 'Kids, Toys & Gadgets',
      logo: '/sellers/glitreeprops.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Party Decor',
    },
    {
      name: 'Rumi',
      category: 'Home & Living Essentials',
      categoryGroup: 'Home, Kitchen & Tools',
      logo: '/sellers/rumi.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Home Comfort',
    },
    {
      name: 'Sarumam',
      category: 'Ethnic Decor & Lifestyle',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/sarumam.png',
      platforms: ['Amazon', 'Meesho'],
      highlight: 'Crafted Goods',
    },
    {
      name: 'Neelgagan',
      category: 'Daily Living & Personal Essentials',
      categoryGroup: 'Fashion & Lifestyle',
      logo: '/sellers/neel.png',
      platforms: ['Amazon', 'Flipkart'],
      highlight: 'Daily Essentials',
    },
  ];

  // Split brands into two balanced groups for smooth dual-row continuous marquee
  const row1Brands = sellerBrands.slice(0, 15);
  const row2Brands = sellerBrands.slice(15);

  // Exactly 2 duplicates for mathematically seamless 50% translateX infinite looping
  const marqueeRow1 = [...row1Brands, ...row1Brands];
  const marqueeRow2 = [...row2Brands, ...row2Brands];

  return (
    <section id="sellers-family" className="relative py-20 bg-gradient-to-b from-[#090D16] via-[#0B101D] to-[#090D16] border-b border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Marketplace Momentum</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            EcomEase <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Seller's Family</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Proudly managing, scaling, and accelerating growth for over <strong className="text-white">150+ visionary brands, manufacturers & sellers</strong> across Amazon, Flipkart, Myntra, FirstCry, Nykaa & Quick Commerce.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">150+</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Visionary Brands Scaled</div>
            </div>
            <div className="text-center p-2 border-l border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">₹180Cr+</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Cumulative GMV</div>
            </div>
            <div className="text-center p-2 border-l border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">99.4%</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Account Health Score</div>
            </div>
            <div className="text-center p-2 border-l border-white/10">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">4.8★</div>
              <div className="text-[11px] text-slate-400 mt-0.5 font-medium">Client Rating</div>
            </div>
          </div>
        </div>

      </div>

      {/* Infinite Carousel Showcase (1.6x Bigger boxes, Lower Speed, Dual-Direction) */}
      <div className="relative w-full py-6 space-y-6">
        {/* Edge Blur Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-r from-[#090D16] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-48 bg-gradient-to-l from-[#090D16] to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Smooth Marquee Left */}
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeRow1.map((brand, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 mx-3 sm:mx-4 p-3.5 sm:p-4 rounded-3xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/60 hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4 sm:gap-5 shadow-xl group"
            >
              {/* 1.6x Bigger Brand Logo Showcase Box */}
              <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-2xl bg-white p-2.5 sm:p-3 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-200 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="pr-3">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {brand.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {brand.platforms.slice(0, 2).map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Smooth Marquee Reverse */}
        <div className="flex w-max animate-marquee-reverse-slow hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeRow2.map((brand, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 mx-3 sm:mx-4 p-3.5 sm:p-4 rounded-3xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/60 hover:bg-slate-800/90 transition-all duration-300 flex items-center gap-4 sm:gap-5 shadow-xl group"
            >
              {/* 1.6x Bigger Brand Logo Showcase Box */}
              <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-2xl bg-white p-2.5 sm:p-3 flex items-center justify-center flex-shrink-0 shadow-md border border-slate-200 group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="pr-3">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                  {brand.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-1.5">
                  {brand.platforms.slice(0, 2).map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-8">
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/50 via-slate-900/80 to-cyan-950/50 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Want to join the EcomEase Seller's Family?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                We manage cataloging, Sponsored Ads, Buy Box retention, and logistics for your brand.
              </p>
            </div>
          </div>

          <Link
            to="/contact-us"
            className="btn-pressable whitespace-nowrap px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
