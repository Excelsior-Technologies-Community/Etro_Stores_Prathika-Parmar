import React from 'react';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const Category = () => {
    const collections = [{
            id: 1,
            name: "ELECTRONIC",
            count: 16,
            image: "https://ss-etrostores.myshopify.com/cdn/shop/collections/electronic_large.png?v=1508127134", // Retro electronics/cameras
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        },
        {
            id: 2,
            name: "FURNICOM",
            count: 5,
            image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop", // Modern chairs/decor
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        },
        {
            id: 3,
            name: "HITECH",
            count: 16,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop", // Headphones/Tech
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        },
        {
            id: 4,
            name: "SHOES",
            count: 7,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", // Sneakers
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        },
        {
            id: 5,
            name: "FASHION",
            count: 5,
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop", // Fashion model
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        },
        {
            id: 6,
            name: "FRESH FRUIT",
            count: 7,
            image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=600&auto=format&fit=crop", // Cherries/Fruit
            desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt..."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            {/* Main Content Layout Container */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-12 lg:py-16 box-border" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '40px', paddingBottom: '40px' }}>
                
                {/* 3-Column Grid for Collections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-center">
                    
                    {collections.map((collection) => (
                        <div key={collection.id} className="flex flex-col items-center group cursor-pointer">
                            
                            {/* 1. Image Container with Hover Overlay */}
                            <div className="w-full h-[280px] relative overflow-hidden bg-gray-100 mb-6">
                                {/* Base Image with Zoom Transition */}
                                <img 
                                    src={collection.image} 
                                    alt={collection.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Dark Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    {/* Shop Now Action Button */}
                                    <button className="bg-[#222222] text-white text-[12px] font-bold uppercase tracking-wider px-8 py-3.5 hover:bg-[#ff5a33] transition-colors duration-300" style= {{padding: '5px'}}>
                                        Shop Now !
                                    </button>
                                </div>
                            </div>

                            {/* 2. Category Title */}
                            <h2 className="text-[18px] font-bold text-[#222222] tracking-wide uppercase hover:text-[#ff5a33] transition-colors" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                {collection.name}
                            </h2>

                            {/* 3. Product Count Indicator */}
                            <p className="text-[13px] text-[#ff5a33] font-medium my-2">
                                -- {collection.count} Products --
                            </p>

                            {/* 4. Category Description */}
                            <p className="text-[13.5px] text-gray-500 leading-relaxed px-4 max-w-sm">
                                {collection.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Category;