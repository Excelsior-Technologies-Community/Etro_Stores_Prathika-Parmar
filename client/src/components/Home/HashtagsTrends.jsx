import React from "react";

const HashtagsTrends = () => {
    const categories = [
        { name: "SWIMSUIT",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-1.png?v=1613701269"
        },
        { name: "FURNICORM",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-2.png?v=1613701269"
        },
        { name: "ELECTRONICS",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-3.png?v=1613701269"
        },
        { name: "HITECH",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-4.png?v=1613701269"
        },
        { name: "SHOES",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-5.png?v=1613701269"
        },
        { name: "FASHION",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cate-6.png?v=1613701270"
        },
        
        
    ];

    return (
        <div className="w-full bg-[#f9fafb] py-8 font-sans">
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px' }}>
                
                {/* --- HEADER ROW --- */}
                <div className="flex justify-between items-end border-b border-gray-200 pb-3" style={{ marginBottom: '30px' }}>
                    <h2 className="text-[18px] font-extrabold text-[#333] uppercase tracking-wide m-0 leading-none relative">
                        HASHTAGS TREND
                        {/* The tiny colored accent line under the text (matches theme style) */}
                        <span className="absolute -bottom-[14px] left-0 w-[50px] h-[2px] bg-[#ff5a33]"></span>
                    </h2>
                    <a href="#" className="text-gray-500 text-[12px] hover:text-[#ff5a33] transition-colors flex items-center gap-1 font-bold uppercase">
                        See All <span className="text-[10px]">▶</span>
                    </a>
                </div>

                {/* --- CIRCLES ROW --- */}
                <div className="flex flex-wrap justify-between items-center gap-4">
                    {categories.map((item, index) => (
                        <a 
                            key={index}
                            href="#"
                            /* This replicates the tooltip shown in your video! */
                            title="EtroStore - HiTech eCommerce Multipurpose Shopify Theme"
                            className="group flex flex-col items-center cursor-pointer"
                        >
                            {/* Outer White Ring */}
                            <div className="w-[150px] h-[150px] lg:w-[180px] lg:h-[180px] rounded-full bg-white p-2 border border-gray-200 shadow-sm group-hover:border-[#ff5a33] transition-colors duration-300 relative">
                                
                                {/* Inner Image Container */}
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Dark Gradient Overlay (Forces the white text to be readable) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
                                    
                                    {/* Text Label at the bottom */}
                                    <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-[12px] font-extrabold uppercase tracking-wider z-10 w-full text-center drop-shadow-md">
                                        {item.name}
                                    </span>
                                </div>

                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HashtagsTrends