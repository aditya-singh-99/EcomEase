// All 37 Official Amazon US Global Referral Fee Categories
export const amazonUsRates = [
  {
    category: 'Amazon Device Accessories',
    rate: '45.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '45.00%', fee: Math.max(0.30, +(p * 0.45).toFixed(2)) })
  },
  {
    category: 'Automotive and Powersports',
    rate: '12.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
  },
  {
    category: 'Baby Products',
    rate: '8% for price ≤ $10.00 • 15% for price > $10.00',
    minFee: '$0.30',
    calc: (p) => p <= 10 ? ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) }) : ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Backpacks, Handbags, and Luggage',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Base Equipment Power Tools',
    rate: '12.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
  },
  {
    category: 'Beauty, Health and Personal Care',
    rate: '8% for price ≤ $10.00 • 15% for price > $10.00',
    minFee: '$0.30',
    calc: (p) => p <= 10 ? ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) }) : ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Business, Industrial, and Scientific Supplies',
    rate: '12.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '12.00%', fee: Math.max(0.30, +(p * 0.12).toFixed(2)) })
  },
  {
    category: 'Clothing and Accessories',
    rate: '5% for price ≤ $15.00 • 10% for $15.01 - $20.00 • 17% for price > $20.00',
    minFee: '$0.30',
    calc: (p) => p <= 15 ? ({ rateText: '5.00%', fee: Math.max(0.30, +(p * 0.05).toFixed(2)) }) : p <= 20 ? ({ rateText: '10.00%', fee: Math.max(0.30, +(p * 0.10).toFixed(2)) }) : ({ rateText: '17.00%', fee: Math.max(0.30, +(p * 0.17).toFixed(2)) })
  },
  {
    category: 'Compact Appliances',
    rate: '15% for portion up to $300.00 • 8% for portion > $300.00',
    minFee: '$0.30',
    calc: (p) => p <= 300 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $300 + 8% over', fee: Math.max(0.30, +(45 + (p - 300) * 0.08).toFixed(2)) })
  },
  {
    category: 'Computers',
    rate: '8.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
  },
  {
    category: 'Consumer Electronics',
    rate: '8.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
  },
  {
    category: 'Electronics Accessories',
    rate: '15% for portion up to $100.00 • 8% for portion > $100.00',
    minFee: '$0.30',
    calc: (p) => p <= 100 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $100 + 8% over', fee: Math.max(0.30, +(15 + (p - 100) * 0.08).toFixed(2)) })
  },
  {
    category: 'Everything Else',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Eyewear',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Fine Art',
    rate: '20% up to $100 • 15% ($100-$1,000) • 10% ($1k-$5k) • 5% (> $5k)',
    minFee: '--',
    calc: (p) => ({ rateText: 'Tiered 5% - 20%', fee: +(p * 0.15).toFixed(2) })
  },
  {
    category: 'Footwear',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Full-Size Appliances',
    rate: '8.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
  },
  {
    category: 'Furniture',
    rate: '15% for portion up to $200.00 • 10% for portion > $200.00',
    minFee: '$0.30',
    calc: (p) => p <= 200 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '15% up to $200 + 10% over', fee: Math.max(0.30, +(30 + (p - 200) * 0.10).toFixed(2)) })
  },
  {
    category: 'Gift Cards',
    rate: '20.00%',
    minFee: '--',
    calc: (p) => ({ rateText: '20.00%', fee: +(p * 0.20).toFixed(2) })
  },
  {
    category: 'Grocery and Gourmet',
    rate: '8% for price ≤ $15.00 • 15% for price > $15.00',
    minFee: '--',
    calc: (p) => p <= 15 ? ({ rateText: '8.00%', fee: +(p * 0.08).toFixed(2) }) : ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
  },
  {
    category: 'Home and Kitchen',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Jewelry',
    rate: '20% for portion up to $250.00 • 5% for portion > $250.00',
    minFee: '$0.30',
    calc: (p) => p <= 250 ? ({ rateText: '20.00%', fee: Math.max(0.30, +(p * 0.20).toFixed(2)) }) : ({ rateText: '20% up to $250 + 5% over', fee: Math.max(0.30, +(50 + (p - 250) * 0.05).toFixed(2)) })
  },
  {
    category: 'Lawn and Garden',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Lawn Mowers and Snow Throwers',
    rate: '15% for price up to $500.00 • 8% for price > $500.00',
    minFee: '$0.30',
    calc: (p) => p <= 500 ? ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) }) : ({ rateText: '8.00%', fee: Math.max(0.30, +(p * 0.08).toFixed(2)) })
  },
  {
    category: 'Mattresses',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Media - Books, DVD, Music, Software, Video',
    rate: '15.00%',
    minFee: '--',
    calc: (p) => ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
  },
  {
    category: 'Merchant Fulfilled Services',
    rate: '20.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '20.00%', fee: Math.max(0.30, +(p * 0.20).toFixed(2)) })
  },
  {
    category: 'Musical Instruments and AV Production',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Office Products',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Pet Products',
    rate: '15.00% (except 22.00% for veterinary diets)',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Sports and Outdoors',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Tires',
    rate: '10.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '10.00%', fee: Math.max(0.30, +(p * 0.10).toFixed(2)) })
  },
  {
    category: 'Tools and Home Improvement',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Toys and Games',
    rate: '15.00%',
    minFee: '$0.30',
    calc: (p) => ({ rateText: '15.00%', fee: Math.max(0.30, +(p * 0.15).toFixed(2)) })
  },
  {
    category: 'Video Game Consoles',
    rate: '8.00%',
    minFee: '--',
    calc: (p) => ({ rateText: '8.00%', fee: +(p * 0.08).toFixed(2) })
  },
  {
    category: 'Video Games and Gaming Accessories',
    rate: '15.00%',
    minFee: '--',
    calc: (p) => ({ rateText: '15.00%', fee: +(p * 0.15).toFixed(2) })
  },
  {
    category: 'Watches',
    rate: '16% for portion up to $1,500.00 • 3% for portion > $1,500.00',
    minFee: '$0.30',
    calc: (p) => p <= 1500 ? ({ rateText: '16.00%', fee: Math.max(0.30, +(p * 0.16).toFixed(2)) }) : ({ rateText: '16% up to $1,500 + 3% over', fee: Math.max(0.30, +(240 + (p - 1500) * 0.03).toFixed(2)) })
  }
];
