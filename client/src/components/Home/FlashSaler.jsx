import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / 1000 / 60) % 60),
                secs: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { days: 0, hours: 0, mins: 0, secs: 0 };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex items-center gap-2 mt-2">
            <div className="flex flex-col items-center">
                <span className="text-[#333] font-bold text-[16px] leading-none">{timeLeft.days}</span>
                <span className="text-gray-500 text-[10px]">days</span>
            </div>
            <span className="text-[#333] font-bold pb-3">:</span>
            <div className="flex flex-col items-center">
                <span className="text-[#333] font-bold text-[16px] leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-gray-500 text-[10px]">hours</span>
            </div>
            <span className="text-[#333] font-bold pb-3">:</span>
            <div className="flex flex-col items-center">
                <span className="text-[#333] font-bold text-[16px] leading-none">{String(timeLeft.mins).padStart(2, '0')}</span>
                <span className="text-gray-500 text-[10px]">mins</span>
            </div>
            <span className="text-[#333] font-bold pb-3">:</span>
            <div className="flex flex-col items-center">
                <span className="text-[#333] font-bold text-[16px] leading-none">{String(timeLeft.secs).padStart(2, '0')}</span>
                <span className="text-gray-500 text-[10px]">secs</span>
            </div>
        </div>
    );
};

// --- SUB-COMPONENT: Handles the auto-swiping logic for a single block ---
// Added onAddToCart and onAddToWishlist props
const FlashSaleBlock = ({ block, onAddToCart, onAddToWishlist }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-swiper effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === block.products.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Changes slide every 4 seconds
        return () => clearInterval(timer);
    }, [block.products.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === block.products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? block.products.length - 1 : prev - 1));
    };

    return (
        <div className="flex flex-col">
            {/* 1. TOP BANNER */}
            <div 
                className="w-full min-h-[180px] rounded-sm flex items-center justify-between p-8 relative overflow-hidden shadow-sm"
                style={{ backgroundColor: block.banner.bg }}
            >
                <div className="relative z-10 text-white flex flex-col items-center gap-1 text-center" style={{paddingLeft: '60px'}}>
                    <h3 className="text-2xl font-extrabold italic leading-none m-0">{block.banner.title}</h3>
                    <h4 className="text-[15px] font-bold leading-none m-0 tracking-wide">{block.banner.subtitle}</h4>
                    <p className="text-[11px] opacity-90 tracking-widest uppercase m-0 pb-2">{block.banner.date}</p>
                    
                    <button className="bg-black hover:bg-[#ff5a33] text-white text-[10px] font-bold uppercase px-4 py-2 rounded-sm transition-colors flex items-center gap-2 border-none cursor-pointer shadow-md" style={{padding: '5px'}}>
                        SHOP NOW <span className="bg-[#00a8ff] text-white text-[7px] px-1 py-[1px] rounded-sm">▶</span>
                    </button>
                </div>
                
                <img 
                    src={block.banner.image} 
                    alt="Promo" 
                    className="absolute right-6 bottom-4 w-50 h-50 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 opacity-90" style={{paddingRight: '20px', paddingTop: '45px'}}
                />
            </div>

            {/* 2. PRODUCT CAROUSEL */}
            <div className="w-full bg-white border border-gray-200 mt-6 rounded-sm shadow-sm relative group overflow-hidden h-[220px]">
                
                {/* The Sliding Track */}
                <div 
                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {block.products.map((product) => (
                        <div key={product.id} className="w-full h-full flex-shrink-0 flex relative">
                            
                            {/* Left Side: Product Image & Badges */}
                            <div className="w-1/2 p-6 flex items-center justify-center relative border-r border-gray-100 bg-white">
                                <span className="absolute top-4 left-4 bg-[#ff5a33] text-white text-[11px] font-bold px-2 py-1 rounded-sm z-10 shadow-sm" style={{padding:'2px'}}>
                                    {product.badge}
                                </span>
                                
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Hover Action Buttons - NOW WIRED UP */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10">
                                    <button 
                                        onClick={() => onAddToCart(product)}
                                        className="w-8 h-8 bg-gray-100 hover:bg-[#ff5a33] hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer border-none shadow-sm"
                                        title="Add to Cart"
                                    >
                                        <FaShoppingCart className="text-[13px]" />
                                    </button>
                                    <button 
                                        onClick={() => onAddToWishlist(product)}
                                        className="w-8 h-8 bg-gray-100 hover:bg-[#ff5a33] hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer border-none shadow-sm"
                                        title="Add to Wishlist"
                                    >
                                        <FaHeart className="text-[13px]" />
                                    </button>
                                    <button className="w-8 h-8 bg-gray-100 hover:bg-[#ff5a33] hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer border-none shadow-sm">
                                        <FaSearch className="text-[13px]" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Side: Product Details */}
                            <div className="w-1/2 p-6 flex flex-col justify-center bg-white gap-2" style={{paddingLeft: '30px'}}>
                                <div className="mb-2">
                                    <span className="bg-[#ff5a33] text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm" style={{padding: '5px'}}>
                                        {product.category}
                                    </span>
                                </div>
                                
                                <h4 className="text-[#333] text-[14px] font-bold mb-2 hover:text-[#ff5a33] cursor-pointer transition-colors leading-tight">
                                    {product.title}
                                </h4>
                                
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[#ff5a33] text-[18px] font-extrabold">{product.price}</span>
                                    <span className="text-gray-400 text-[13px] line-through">{product.oldPrice}</span>
                                </div>

                                {/* Conditional Countdown Timer */}
                                {product.hasTimer && product.targetDate && (
                                    <CountdownTimer targetDate={product.targetDate} />
                                )}
                            </div>

                        </div>
                    ))}
                </div>

                {/* Slider Navigation Arrows */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ff5a33] z-20 cursor-pointer shadow-sm hover:w-7 transition-all"
                >
                    <IoIosArrowBack />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ff5a33] z-20 cursor-pointer shadow-sm hover:w-7 transition-all"
                >
                    <IoIosArrowForward />
                </button>

            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const FlashSaler = () => {
    
    const flashSalesData = [
        {
            id: 1,
            banner: { bg: '#8e44ad', title: 'WONDERFUL', subtitle: 'LONG WEEKEND', date: 'SAT - MON', image: 'https://th.bing.com/th/id/OIP.AxHF-ShV6jrDsINWn8NNuAHaE8?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
            products: [
                { id: 101, badge: '-19%', category: 'Shoes', title: 'Cillum dolore (Black Boot)', price: '$132.00', oldPrice: '$163.00', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop', hasTimer: false },
                { id: 102, badge: '-25%', category: 'Shoes', title: 'Aliquam Tincidunt (Sneaker)', price: '$95.00', oldPrice: '$120.00', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop', hasTimer: false }
            ]
        },
        {
            id: 2,
            banner: { bg: '#3498db', title: 'FREE DELIVERY', subtitle: 'LONG WEEKEND', date: 'SAT - MON', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop' },
            products: [
                { id: 201, badge: '-15%', category: 'Smartphone & Tablets', title: 'Lacinia moncus velit', price: '$55.00', oldPrice: '$65.00', image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?q=80&w=400&auto=format&fit=crop', hasTimer: true, targetDate: '2026-12-31T23:59:59' },
                { id: 202, badge: '-10%', category: 'Smartphone & Tablets', title: 'Proin Gravida (Smartwatch)', price: '$199.00', oldPrice: '$220.00', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop', hasTimer: true, targetDate: '2026-11-15T00:00:00' }
            ]
        },
        {
            id: 3,
            banner: { bg: '#d4af37', title: 'BEST SALE', subtitle: 'FURNICOM DESIGN', date: 'SAT - MON', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop' },
            products: [
                { id: 301, badge: '-30%', category: 'Furnicom', title: 'Vestibulum auctor (Sofa)', price: '$450.00', oldPrice: '$600.00', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop', hasTimer: false },
                { id: 302, badge: '-12%', category: 'Furnicom', title: 'Mauris placerat (Lamp)', price: '$85.00', oldPrice: '$98.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop', hasTimer: false }
            ]
        },
        {
            id: 4,
            banner: { bg: '#e74c3c', title: '20% - 40%', subtitle: 'SALE OFF', date: 'SAT - MON', image: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?q=80&w=400&auto=format&fit=crop' },
            products: [
                { id: 401, badge: '-40%', category: 'Organic', title: 'Phasellus ullamcorper (Fruit)', price: '$15.00', oldPrice: '$25.00', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop', hasTimer: true, targetDate: '2026-10-31T12:00:00' },
                { id: 402, badge: '-20%', category: 'Organic', title: 'Donec rutrum (Vegetables)', price: '$24.00', oldPrice: '$30.00', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop', hasTimer: true, targetDate: '2026-09-01T15:30:00' }
            ]
        }
    ];

    // --- FULL-STACK CART FUNCTION ---
    const handleAddToCart = async (product) => {
        // Automatically strips the '$' from the price so it calculates correctly in MySQL
        const numericPrice = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;

        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({
                    userId: 1,
                    productId: product.id,
                    name: product.title, // Maps 'title' to your DB 'name' requirement
                    price: numericPrice,
                    image: product.image
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Success: ${product.title} added to your cart!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Failed to connect to backend:", error);
            alert("Could not connect to the server. Is your Node.js backend running?");
        }
    };

    // --- FULL-STACK WISHLIST FUNCTION ---
    const handleAddToWishlist = async (product) => {
        // Automatically strips the '$' from the price
        const numericPrice = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;

        try {
            const response = await fetch('http://localhost:5000/api/wishlist/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: 1,
                    productId: product.id,
                    name: product.title, // Maps 'title' to your DB 'name' requirement
                    price: numericPrice,
                    image: product.image
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Success: ${product.title} added to your wishlist!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Failed to connect to backend:", error);
            alert("Could not connect to the server. Is your Node.js backend running?");
        }
    };

    return (
        <div className="w-full bg-[#f9fafb] py-8 font-sans">
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px' }}>
                
                {/* --- HEADER ROW --- */}
                <div className="flex justify-between items-end border-b border-gray-200 pb-3" style={{ marginBottom: '30px' }}>
                    <h2 className="text-[18px] font-extrabold text-[#333] uppercase tracking-wide m-0 leading-none relative">
                        FLASH SALER
                        <span className="absolute -bottom-[14px] left-0 w-[50px] h-[2px] bg-[#ff5a33]"></span>
                    </h2>
                    <a href="#" className="text-gray-500 text-[12px] hover:text-[#ff5a33] transition-colors flex items-center gap-1 font-bold uppercase">
                        See All <span className="text-[10px]">▶</span>
                    </a>
                </div>

                {/* --- GRID OF BLOCKS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {flashSalesData.map((block) => (
                        <FlashSaleBlock 
                            key={block.id} 
                            block={block} 
                            onAddToCart={handleAddToCart}
                            onAddToWishlist={handleAddToWishlist}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FlashSaler;