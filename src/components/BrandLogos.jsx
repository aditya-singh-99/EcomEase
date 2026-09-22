import React from 'react';

// Crisp, authentic company brand tiles for dropdown navigation
export const BrandIcons = {
  // Amazon: Official mark on clean white tile
  Amazon: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 border border-slate-200/80`}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M12.6 12.2c-.3 0-.6-.1-.8-.3-.5-.4-.5-1.1-.1-1.6.4-.5 1.1-.5 1.6-.1.2.2.3.4.3.7 0 .7-.4 1.3-1 1.3zm1.6-4.5c-2.4 0-4.3 1.2-4.3 3.4 0 2.2 1.8 3.5 4.3 3.5 1.1 0 2.2-.4 3-1.1v.8c0 .2.2.4.4.4h1.5c.2 0 .4-.2.4-.4V6.5c0-.2-.2-.4-.4-.4h-1.5c-.2 0-.4.2-.4.4v.9c-.8-.8-1.9-1.2-3-1.2zm-1.8 12.1C7.2 19.8 3 17.5 1 14.8c-.3-.4-.1-.8.3-.9.4-.1.8.1 1.1.4 1.8 2.3 5.4 4.3 10 4.3 3.9 0 7.4-1.3 9.8-3.5.4-.3.9-.2 1.1.2.3.4.2.9-.2 1.2-2.7 2.4-6.6 3.9-10.7 3.9z" fill="#232F3E"/>
        <path d="M23.6 15.6c-.3-.4-1.6-.2-2.5-.1-.2 0-.3-.2-.2-.4 1.2-1 3.2-.7 3.5-.4.3.3-.1 2.4-1.2 3.5-.2.2-.4.1-.3-.1.2-.8.7-2.1.7-2.5z" fill="#FF9900"/>
      </svg>
    </div>
  ),

  // Flipkart: Official Flipkart yellow tile with blue 'f' and bag
  Flipkart: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-[#FFE500] p-1 flex items-center justify-center shadow-sm flex-shrink-0 border border-yellow-300`}>
      <svg viewBox="0 0 24 24" className="w-full h-full fill-[#2874F0]" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.833 1.333a.993.993 0 0 0-.333.061V1c0-.551.449-1 1-1h14.667c.551 0 1 .449 1 1v.333H3.833zm17.334 2.334H2.833c-.551 0-1 .449-1 1V23c0 .551.449 1 1 1h7.3l1.098-5.645h-2.24c-.051 0-5.158-.241-5.158-.241l4.639-.327-.078-.366-1.978-.285 1.882-.158-.124-.449-3.075-.467s3.341-.373 3.392-.373h3.232l.247-1.331c.289-1.616.945-2.807 1.973-3.693 1.033-.892 2.344-1.332 3.937-1.332.643 0 1.053.151 1.231.463.118.186.201.516.279.859.074.352.14.671.095.903-.057.345-.461.465-1.197.465h-.253c-1.327 0-2.134.763-2.405 2.31l-.243 1.355h1.54c.574 0 .781.402.622 1.306-.17.941-.539 1.36-1.111 1.36H14.9L13.804 24h7.362c.551 0 1-.449 1-1V4.667a1 1 0 0 0-.999-1z"/>
      </svg>
    </div>
  ),

  // Meesho: Official Meesho logo icon
  Meesho: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-0.5 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden border border-slate-200/80`}>
      <img src="/Meesho_Logo.png" alt="Meesho" className="w-full h-full object-contain rounded-md" />
    </div>
  ),

  // JioMart: Official JioMart logo
  JioMart: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-0.5 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden border border-slate-200/80`}>
      <img src="/JioMart_Logo.png" alt="JioMart" className="w-full h-full object-contain rounded-full" />
    </div>
  ),

  // Myntra: Official Myntra logo
  Myntra: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden border border-slate-200/80`}>
      <img src="/Myntra_Logo.png" alt="Myntra" className="w-full h-full object-contain" />
    </div>
  ),

  // FirstCry: Official FirstCry logo
  FirstCry: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden border border-slate-200/80`}>
      <img src="/FirstCry_Logo.png" alt="FirstCry" className="w-full h-full object-contain" />
    </div>
  ),

  // Shopify: Official Shopify green shopping bag
  Shopify: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-[#95BF47] p-1 flex items-center justify-center shadow-sm flex-shrink-0`}>
      <svg role="img" viewBox="0 0 24 24" className="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
      </svg>
    </div>
  ),

  // Meta: Official Meta blue infinity symbol on white tile
  Meta: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 border border-slate-200/80`}>
      <svg role="img" viewBox="0 0 24 24" className="w-full h-full fill-[#0668E1]" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
      </svg>
    </div>
  ),

  // Google Ads: Official 3-color icon on white tile
  GoogleAds: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-white p-1 flex items-center justify-center shadow-sm flex-shrink-0 border border-slate-200/80`}>
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M4 22.9C1.8 22.9 0 21.1 0 18.9s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#34A853"/>
        <path d="M23.5 16.9L15.5 3.1C14.4 1.2 11.9.5 10 1.6s-2.6 3.6-1.5 5.5l8 13.9c1.1 1.9 3.6 2.6 5.5 1.5 1.9-1.1 2.6-3.6 1.5-5.6z" fill="#4285F4"/>
        <path d="M7.5 4.8L1.6 15.1c1-.4 2.2-.4 3.2.2l4.2-7.3-1.5-3.2z" fill="#FBBC04"/>
      </svg>
    </div>
  ),

  // Shiprocket: Fast courier rocket tile
  Shiprocket: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-[#5E2750] flex items-center justify-center shadow-sm flex-shrink-0 border border-[#4A1F40]`}>
      <span className="text-[#00E5FF] text-[11px] font-black tracking-tight">SR</span>
    </div>
  ),

  // SEO: Clean analytics badge
  SEO: ({ className = "w-7 h-7" }) => (
    <div className={`${className} rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-sm flex-shrink-0 font-black text-[10px] tracking-wider`}>
      SEO
    </div>
  ),
};

export default BrandIcons;
