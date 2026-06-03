import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // FIX: Removed 'relative' from this outer div
        <div className="w-full bg-[#0b212f] border-t border-[#1c384c] font-sans m-0 p-0 pl-4px">
            {/* FIX: Added 'relative' to this inner max-width container */}
            <div className="max-w-[1440px] mx-auto w-full box-border relative" style={{paddingLeft: "40px", paddingRight: "40px"}}>
                
                {/* --- MOBILE VIEW: Hamburger Toggle --- */}
                <div className="lg:hidden flex items-center justify-between py-4">
                    <span className="text-white font-bold tracking-wider">MENU</span>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        <FiMenu />
                    </button>
                </div>

                {/* --- DESKTOP VIEW & MOBILE MENU WRAPPER --- */}
                <div className={`lg:flex items-center justify-between transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    
                    <ul 
                        className="flex flex-col lg:flex-row w-full lg:w-auto"
                        style={{ gap: '40px', padding: '0', margin: '0' }}
                    >
                        
                        {/* 1. Standard Link */}
                        <li className="relative group flex items-center h-14">
                            <a href="/" className="text-white text-[13px] font-bold uppercase transition-colors hover:text-[#ff5a33]">
                                Home
                            </a>
                        </li>

                        {/* 2. Mega Menu Example (Collections) */}
                        <li className="relative group flex items-center h-14">
                            <div className="flex items-center gap-1 cursor-pointer text-white text-[13px] font-bold uppercase transition-colors hover:text-[#ff5a33]">
                                Collections <IoIosArrowDown className="text-[10px]" />
                                <span 
                                    className="absolute animate-pulse shadow-md"
                                    style={{ 
                                        top: '6px', 
                                        right: '-24px', 
                                        backgroundColor: '#ff5a33', 
                                        color: 'white', 
                                        fontSize: '9px', 
                                        padding: '2px 4px', 
                                        borderRadius: '2px' 
                                    }}
                                >
                                    HOT
                                </span>
                            </div>

                            <div className="lg:absolute left-0 top-full w-full lg:w-[600px] bg-white text-[#333] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] hidden lg:grid grid-cols-3 gap-6" style={{ borderTop: '2px solid #ff5a33', padding: '24px' }}>
                                <div>
                                    <h3 className="font-bold border-b pb-2 mb-3">CATEGORY STYLE 1</h3>
                                    <ul className="space-y-2 text-[12px] text-gray-500">
                                        <li className="hover:text-[#ff5a33] cursor-pointer">Men's Fashion</li>
                                        <li className="hover:text-[#ff5a33] cursor-pointer">Women's Clothing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold border-b pb-2 mb-3">CATEGORY STYLE 2</h3>
                                    <ul className="space-y-2 text-[12px] text-gray-500">
                                        <li className="hover:text-[#ff5a33] cursor-pointer">Winter Collection</li>
                                        <li className="hover:text-[#ff5a33] cursor-pointer">Summer Deals</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-100 h-32 flex items-center justify-center text-gray-400 font-bold border">
                                    Promo Image
                                </div>
                            </div>
                        </li>

                        {/* 3. Mega Menu (Smartphone & Tablet) */}
                        <li className="relative group flex items-center h-14" style={{ position: 'static' }}> 
                            <div className="flex items-center gap-1 cursor-pointer text-white text-[13px] font-bold uppercase transition-colors hover:text-[#ff5a33]">
                                Smartphone & Tablet <IoIosArrowDown className="text-[10px]" />
                            </div>

                            {/* The Mega Dropdown Box */}
                            <div 
                                className="absolute left-0 top-full w-full bg-white text-[#333] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] hidden lg:block" 
                                style={{ borderTop: '2px solid #ff5a33', padding: '30px 40px' }}
                            >
                                <div className="grid grid-cols-4 gap-8 mb-8">
                                    <div>
                                        <h3 className="font-bold text-[13px] border-b pb-2 mb-4">ELECTRONICS</h3>
                                        <ul className="space-y-3 text-[13px] text-gray-500">
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Networking & Wireless</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Storage & External Drives</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Laptop & Accessories</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Mainboards, CPU</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[13px] border-b pb-2 mb-4">SMARTPHONE</h3>
                                        <ul className="space-y-3 text-[13px] text-gray-500">
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Mobile Accessories</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Headphones/Headsets</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Cases & Covers</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Watches & Accessories</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[13px] border-b pb-2 mb-4">TABLET & ACCESORIES</h3>
                                        <ul className="space-y-3 text-[13px] text-gray-500">
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Power Banks</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Memory Cards</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Cases & Covers</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Destop & Sicurity</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[13px] border-b pb-2 mb-4">COMPUTERS</h3>
                                        <ul className="space-y-3 text-[13px] text-gray-500">
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Macbooks & iMacs</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Computers & Desktops</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Networking & Wireless</li>
                                            <li className="hover:text-[#ff5a33] cursor-pointer transition-colors">Printers, Scanners, & Faxs</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* BOTTOM ROW: 2 Promotional Banners */}
                                <div className="grid grid-cols-2 gap-6" style={{paddingTop:'10px'}}>
                                    <div className="relative h-[200px] bg-[#43c6e2] rounded-sm overflow-hidden flex flex-col justify-center p-8 cursor-pointer group/banner">
                                        <div className="absolute right-[-20px] top-4 w-40 h-40 bg-white/20 rounded-md rotate-12 group-hover/banner:rotate-6 transition-transform duration-500"></div>
                                        <div className="relative z-10 text-white" style={{padding: '100px'}}>
                                            <h2 className="text-4xl font-serif italic mb-1">Color E!</h2>
                                            <p className="text-[10px] tracking-[0.2em] uppercase mb-4 opacity-90">We Are Shining</p>
                                            <button className="bg-white text-gray-800 text-[12px] font-bold px-6 py-2 rounded-sm hover:bg-gray-100 transition-colors shadow-sm" style={{padding:'2px'}}>
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative h-[200px] bg-[#f4f2ec] rounded-sm overflow-hidden flex flex-col justify-center p-8 cursor-pointer group/banner">
                                        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-red-400/20 to-transparent group-hover/banner:scale-105 transition-transform duration-500"></div>
                                        <div className="relative z-10 text-[#333]" style={{padding: '100px'}}>
                                            <h2 className="text-2xl font-extrabold mb-1 max-w-[200px] leading-tight">Trend With The MultiPad</h2>
                                            <p className="text-[10px] tracking-[0.2em] uppercase mb-4 text-gray-500">We Are Shining</p>
                                            <button className="bg-[#ff5a33] text-white text-[12px] font-bold px-6 py-2 rounded-sm hover:bg-[#e64d29] transition-colors shadow-sm" style={{padding:'2px'}}>
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* 4. Standard Links */}
                        {[
                            { path: '/furnicom', name: 'Furnicom'},
                            { path: '/fresh fruit', name: 'Fresh Fruit'},
                            { path: '/accessories', name: 'Accessories'},
                            { path: '/blogs', name: 'Blogs'}
                        ].map((item) => (
                            <li key={item.path} className="relative group flex items-center h-14">
                               <Link to={item.path}
                               className='text-white text-[13px] font-bold uppercase transition-colors hover:text-[#ff5a33]'>
                               
                               {item.name}
                               </Link>
                            </li>
                        ))}

                        {/* 5. Simple Dropdown (Pages) */}
                        <li className="relative group flex items-center h-14">
                            <div className="flex items-center gap-1 cursor-pointer text-white text-[13px] font-bold uppercase transition-colors hover:text-[#ff5a33]">
                                Pages <IoIosArrowDown className="text-[10px]" />
                                <span 
                                    className="absolute shadow-md"
                                    style={{ 
                                        top: '6px', 
                                        right: '-24px', 
                                        backgroundColor: '#00a8ff', 
                                        color: 'white', 
                                        fontSize: '9px', 
                                        padding: '2px 4px', 
                                        borderRadius: '2px' 
                                    }}
                                >
                                    NEW
                                </span>
                            </div>
                            
                            <div className="lg:absolute left-0 top-full w-full lg:w-48 bg-white text-[#333] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] hidden lg:block" style={{ borderTop: '2px solid #ff5a33' }}>
                                <ul style={{ padding: '8px', margin: 0 }}>
                                    {[
                                        { path: '/about', name: 'About Us' }, 
                                        { path: '/contact', name: 'Contact Us' }, 
                                        { path: '/lookbook', name: 'Lookbook' }, 
                                        { path: '/faqs', name: 'Faqs' },
                                        { path: '/pricing', name: 'Pricing' }
                                    ].map((page) => (
                                        <li key={page.path} className="border-b border-gray-100 last:border-none">
                                            {/* Changed item wrapper here to Router Link */}
                                            <Link 
                                                to={page.path} 
                                                className="block px-5 py-2 hover:text-[#ff5a33] text-[12px] font-medium transition-colors text-gray-700"
                                            >
                                                {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>

                    {/* Right Side "Special Offers" Section */}
                    <div className="hidden lg:flex items-center h-14" style={{ gap: '30px' }}>
                        <a href="#" className="text-white text-[12px] font-bold uppercase transition-colors hover:text-[#ffc107]">
                            Special Offer
                        </a>
                        <a href="#" className="text-[#ffc107] text-[12px] font-bold uppercase relative flex items-center">
                            Black Friday
                            <span 
                                className="absolute animate-pulse shadow-md"
                                style={{ 
                                    top: '-10px', 
                                    right: '-24px', 
                                    backgroundColor: '#ff5a33', 
                                    color: 'white', 
                                    fontSize: '9px', 
                                    padding: '2px 4px', 
                                    borderRadius: '2px' 
                                }}
                            >
                                HOT
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;