import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Using Unsplash images as placeholders for the watermelons/strawberries
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1587049352847-4d4b126a51d5?q=80&w=1480&auto=format&fit=crop", 
            title: "50 YEARS EXPERIENCE",
            subtitle: "Be quick ! Only 100 products available at this sale price"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1480&auto=format&fit=crop",
            title: "50 YEARS EXPERIENCE",
            subtitle: "Be quick ! Only 100 products available at this sale price"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1480&auto=format&fit=crop",
            title: "50 YEARS EXPERIENCE",
            subtitle: "Be quick ! Only 100 products available at this sale price"
        }
    ];

    const tabs = [
        { label: 'TOP DEALS', path: '/top-deals' },
        { label: 'BEST SELLING', path: '/best-selling' },
        { label: 'CATEGORIES', path: '/categories' },
        { label: 'RECOMMENDED', path: '/recommended' },
        { label: 'TOP BRANDS', path: '/top-brands' },
        { label: 'NEW PRODUCTS', path: '/new-products' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        // Ensured pt-0 so there is no gap added by the parent container
        <div className="w-full bg-[#f9fafb] pb-10  font-sans">
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingLeft: '40px', paddingRight: '40px' }}>

                {/* --- 1. HORIZONTAL MENU BAR --- */}
                {/* BULLETPROOF FIX: Inline margins. 0px top to touch the header perfectly, 30px bottom to create the exact gap shown in the video. Added w-full so it spans correctly. */}
                <div 
                    className="flex w-full bg-white border border-gray-200 rounded-sm shadow-sm"
                    style={{ marginTop: '10px', marginBottom: '10px', paddingTop: '0px', paddingBottom: '10px' }}
                >
                    {[
                        {path: '/top-deals', label: 'TOP DEALS'},
                        {path: '/best-selling', label: 'BEST SELLING'},
                        {path: '/categories', label: 'CATEGORIES'},
                        {path: '/recommended', label: 'RECOMMENDED'},
                        {path: '/top-brands', label: 'TOP BRANDS'},
                        {path: '/new-products', label: 'NEW PRODUCTS'}
                    ].map((item) => (
                        <li 
                            key={item.path} 
                            className={`list-none flex-1 text-center py-4 text-[13px] font-bold text-[#333] cursor-pointer hover:text-[#ff5a33] border-r border-gray-100 last:border-none relative transition-colors`
                            }
                            style={{paddingBottom: '10px'}}
                            >

                                <Link to={item.path} 
                                className="absolute z-10" >

                                {item.label}

                                </Link>
                            </li>

                    
                            
        

                        
                    ))}
                </div>

                {/* --- 2. THE 3-COLUMN GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[480px]">
                    
                    {/* LEFT COLUMN (Jacket & Appliances) */}
    <div className="col-span-1 flex flex-col gap-6 h-full">
    
    {/* Packable Jacket Banner */}
    <div className="flex-[55%] relative bg-[#1a1a1a] rounded-sm overflow-hidden group cursor-pointer shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] z-0"></div>
        {/* Placeholder for the guy in the jacket */}
        {/* <img src="https://images.unsplash.com/photo-1516826957135-700ede19c6ce?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-[60%] h-full object-cover opacity-80 mix-blend-luminosity" alt="Man in jacket" /> */}
        
        {/* FIX 1: Changed items-end to items-center here 👇 */}
        <div className="relative z-10 flex flex-col justify-center items-center p-5 h-full text-center w-full">
            <h3 className="text-[#ffc107] text-[22px] font-serif italic mb-1 leading-tight">
                THE PACKABLE<br/>
                <span className="text-white font-sans not-italic font-extrabold uppercase text-2xl tracking-wide">JACKET</span>
            </h3>
            {/* FIX 2: Swapped w-[65%] to max-w-[80%] so it wraps naturally in the center */}
            <p className="text-gray-300 text-[11px] mb-4 max-w-[80%] leading-tight">
                Alight and compact jacket you can take anywhere!
            </p>
            <button className="text-white text-[10px] font-bold uppercase flex items-center gap-1 group-hover:text-[#ff5a33] transition-colors bg-transparent border-none cursor-pointer mt-4">
    SHOP NOW <span className="bg-white text-black text-[8px] px-1 ml-1 rounded-sm">▶</span>
</button>
        </div>
    </div>

    {/* Appliances Banner */}
    <div className="flex-[45%] bg-[#c2dcd6] rounded-sm overflow-hidden p-5 relative group cursor-pointer border border-gray-200 flex flex-col justify-center shadow-sm text-center">
        <h3 className="text-[#333] text-[13px] font-extrabold uppercase mb-1 z-10 relative">TOP SELLING APPLIANCES</h3>
        <p className="text-white text-[11px] font-bold italic mb-3 z-10 relative drop-shadow-md">Now Available!</p>
        <div className="mt-auto z-10 relative">
            <p className="text-gray-600 text-[9px] uppercase mb-0 font-bold tracking-wide">STARTING FROM</p>
            <p className="text-[#ff5a33] text-2xl font-extrabold m-0 leading-none tracking-tighter">$199,00</p>
        </div>
        {/* Placeholder for Blender */}
        <img src="https://images.unsplash.com/photo-1585515320310-259814833e62?q=80&w=400&auto=format&fit=crop" className="absolute right-[-20px] bottom-0 w-36 h-36 object-contain mix-blend-multiply" alt="Blenders" />
    </div>
</div>

                    {/* CENTER COLUMN (The Slider) */}
                    <div className="col-span-2 relative h-full rounded-sm overflow-hidden group shadow-sm bg-[#2e6a1c]">
                        {slides.map((slide, index) => (
                            <div 
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col justify-center items-center text-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                style={{ 
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }} 
                            >
                                <div className="bg-black/20 w-full h-full absolute inset-0"></div>
                                
                                <div className="relative z-20 flex flex-col items-center mt-[-40px]">
                                    <h2 className="text-white text-4xl lg:text-[42px] font-extrabold mb-3 uppercase tracking-tight drop-shadow-lg leading-none">
                                        {slide.title}
                                    </h2>
                                    <p className="text-white text-[14px] lg:text-[15px] mb-6 font-bold drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <button className="bg-black hover:bg-[#ff5a33] text-white text-[11px] font-bold uppercase px-6 py-3 rounded-sm transition-colors flex items-center gap-2 shadow-xl cursor-pointer border-none tracking-wide" style={{padding:"5px"}}>
                                        SHOP NOW <span className="bg-[#00a8ff] text-white text-[8px] px-1 py-[2px] rounded-sm">▶</span>
                                    </button>
                                </div>
                                
                                {/* 100% Natural Badge */}
                                <div className="absolute bottom-10 right-10 w-[110px] h-[110px] rounded-full flex items-center justify-center text-white text-[14px] font-extrabold rotate-[-15deg] z-20">
                                    <div className="w-full h-full rounded-full border-[2px] border-dashed border-white flex items-center justify-center p-2 text-center bg-transparent drop-shadow-2xl">
                                        100% NATURAL
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slider Dots */}
                        <div className="absolute bottom-5 left-0 w-full flex justify-center gap-2 z-20">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer border-2 border-white transition-colors p-0 ${index === currentSlide ? 'bg-white' : 'bg-transparent hover:bg-white/50'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN (Xiaomi & iMac) */}
<div className="col-span-1 flex flex-col gap-6 h-full">
    
    {/* Xiaomi Banner */}
{/* FIX: Changed justify-start to justify-center and removed pt-8 👇 */}
<div className="flex-[55%] bg-[#eaf4fb] rounded-sm shadow-sm overflow-hidden p-6 relative group cursor-pointer border border-gray-200 flex flex-col justify-center items-center text-center">
    <p className="text-gray-500 text-[10px] font-bold uppercase mb-1 relative z-10 tracking-wider">XIAOMI NOTE PRO</p>
    <h3 className="text-[#00a8ff] text-[22px] font-extrabold uppercase mb-4 leading-none z-10 relative tracking-tight">ACCELERATE<br/>YOUR LIFE</h3>
    <button className="text-black text-[10px] font-bold uppercase flex items-center gap-1 group-hover:text-[#ff5a33] transition-colors z-10 relative bg-transparent border-none cursor-pointer p-0">
        SHOP NOW <span className="bg-[#00a8ff] text-white text-[8px] px-1 py-[1px] rounded-sm">▶</span>
    </button>
    {/* Placeholder Phone Image */}
    <div className="absolute right-[-40px] bottom-[-40px] w-56 h-56 bg-[#63b4f6] rounded-lg rotate-12 group-hover:rotate-6 transition-transform duration-500 shadow-xl opacity-80"></div>
</div>

    {/* iMac Banner */}
    {/* FIX: Added 'items-center text-center' right after justify-center 👇 */}
    <div className="flex-[45%] bg-black rounded-sm shadow-sm overflow-hidden p-6 relative group cursor-pointer flex flex-col justify-center items-center text-center">
        <h3 className="text-white text-[15px] font-extrabold uppercase mb-1 z-10 relative tracking-wide">TOP SELLING IMAC</h3>
        <p className="text-[#ff5a33] text-[11px] font-bold italic mb-3 z-10 relative">Now Available!</p>
        
        {/* FIX: Added 'w-full flex flex-col items-center' to keep the price locked in the center */}
        <div className="mt-auto z-10 relative w-full flex flex-col items-center">
            <p className="text-gray-400 text-[9px] uppercase mb-0 font-bold tracking-wide">STARTING FROM</p>
            <p className="text-[#ffc107] text-2xl font-extrabold m-0 leading-none tracking-tighter">$399,00</p>
        </div>
        
        {/* Placeholder Dark box for iMac */}
        <div className="absolute right-[-10px] bottom-2 w-32 h-24 bg-gray-800 rounded-sm group-hover:scale-105 transition-transform duration-500 shadow-2xl border border-gray-700"></div>
    </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default Hero;