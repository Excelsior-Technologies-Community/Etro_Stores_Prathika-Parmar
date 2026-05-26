import React from 'react';

const BrandCarousel = () => {
    const brands = [ 
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_1.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_2.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_3.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_4.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_5.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_6.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_7.png?v=1613701270",
        "https://ss-etrostores.myshopify.com/cdn/shop/files/brand_8.png?v=1613701270"
    ];

    const scrollingBrands = [...brands, ...brands, ...brands];
    return (
        <div className="w-full bg-white py-12 border-t border-b border-gray-100 font-sans">
            
            <style>
                {`
                    @keyframes infinite-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.3333%); }
                    }
                    .animate-brand-slider {
                        display: flex;
                        width: max-content;
                        animation: infinite-scroll 20s linear infinite;
                    }
                    .animate-brand-slider:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>

            {/* FIX 1: Added the exact same 1440px constraint and 40px padding as your product grids */}
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px' }}>
                
                {/* FIX 2: Moved overflow-hidden here! Now the logos will clip and vanish exactly at the edge of your grid */}
                <div className="relative w-full overflow-hidden">
                    
                    {/* Visual Polish: White gradient fades (now locked inside the grid width) */}
                    <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* The Moving Track */}
                    <div className="animate-brand-slider gap-16 md:gap-24">
                        {scrollingBrands.map((logo, i) => (
                            <div key={i} className="flex-shrink-0 flex items-center justify-center w-[200px]">
                                <img 
                                    src={logo} 
                                    alt={`Brand Logo ${i}`} 
                                    className="h-16 md:h-20 object-contain opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer" 
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandCarousel;