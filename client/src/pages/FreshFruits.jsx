import React, { useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";
import { FiGrid, FiList, FiHeart, FiSearch, FiShoppingCart, FiChevronDown, FiChevronRight, FiTruck, FiHeadphones, FiRefreshCcw, FiCreditCard } from "react-icons/fi";

const FreshFruits = () => {
    // Layout and UI States
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [openCategory, setOpenCategory] = useState('Fresh fruit');

    // Filter & Sort Engine States (Fixed and properly wired)
    const [selectedCategory, setSelectedCategory] = useState('Fresh fruit');
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [sortOption, setSortOption] = useState('Featured');

    // Data mapped precisely to match the video layout (Added categories to enable filtering)
    const products = [
        { id: 1, name: 'Zignon Ribeye', price: 420.00, category: 'Fresh fruit', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/6_a1e3f513-db49-4097-a0e1-33b86981a0f0_345x345.jpg?v=1571713026', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 2, name: 'Kielbasa Sausage', price: 67.00, badge: 'NEW', category: 'Fresh fruit', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/5_7b596015-b9f0-4ea6-83b6-9e650d609ce7_345x345.jpg?v=1571713026', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 3, name: 'Vacon Tenderloin', price: 34.00, badge: 'NEW', category: 'Fresh fruit', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/7_1effc335-7121-489e-b9d4-d9a2d2af1428_345x345.jpg?v=1571713026', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 4, name: 'Boudin Cowsha', price: 230.00, oldPrice: 240.00, discount: '-4%', category: 'Fresh fruit', image: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?q=80&w=400&auto=format&fit=crop', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 5, name: 'Lork Ribeye', price: 77.00, category: 'Fresh fruit', image: 'https://cdn.shopify.com/s/files/1/2435/7365/files/fruit3_large.png?v=1508149529', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 6, name: 'Venison Alcotra', price: 164.00, badge: 'NEW', category: 'Fresh fruit', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=400&auto=format&fit=crop', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 7, name: 'Capicola Bacon', price: 412.00, oldPrice: 460.00, discount: '-10%', category: 'Fresh fruit', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=400&auto=format&fit=crop', desc: 'Curabitur egestas malesuada volutpat.' },
        // Included a few Electronics to prove the filter successfully clears the fruit out
        { id: 8, name: 'Wireless Dual', price: 250.00, category: 'Electronic', image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900', desc: 'Curabitur egestas malesuada.' },
        { id: 9, name: 'Acer Aspire', price: 311.00, category: 'Hitech', image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/02.jpg?v=1613701900', desc: 'Curabitur egestas malesuada.' }
    ];

    const toggleCategoryDropdown = (catName) => {
        setOpenCategory(openCategory === catName ? '' : catName)
    };

    // 1. FILTER ENGINE: Properly hooked to all states
    const filteredProducts = products.filter((product) => {
        // Match Category
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

        // Match Prices
        let matchesPrice = true;
        if (selectedPriceRanges.length > 0) {
            matchesPrice = selectedPriceRanges.some((range) => {
                if (range === '0 - $99') return product.price <= 99;
                if (range === '$100 - $199') return product.price >= 100 && product.price <= 199;
                if (range === '$200 - $299') return product.price >= 200 && product.price <= 299;
                if (range === '$300 - $399') return product.price >= 300 && product.price <= 399;
                if (range === 'Above $400') return product.price >= 400;
                return true;
            });
        }
        return matchesCategory && matchesPrice;

    // 2. SORT ENGINE: Explicitly handles the dropdown text values perfectly
    }).sort((a, b) => {
        if (sortOption === 'Price, low to high') return a.price - b.price;
        if (sortOption === 'Price, high to low') return b.price - a.price;
        if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
        if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
        return 0; // Featured (Default Array Order)
    });

    // Event Handlers for Filters
    const handlePriceChange = (range) => {
        if (selectedPriceRanges.includes(range)) {
            setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== range));
        } else {
            setSelectedPriceRanges([...selectedPriceRanges, range]);
        }
        setCurrentPage(1); 
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); 
    };

    const totalPages = Math.ceil(filteredProducts.length / 9);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 box-border flex flex-col lg:flex-row gap-8" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px' }}>
                
                {/* ================= LEFT SIDEBAR ================= */}
                <aside className="w-full lg:w-[280px] flex-shrink-0">
                    {/* Filter Main Block */}
                    <div className="border border-gray-200 p-5 rounded-xs space-y-8">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <h2 className="text-[14px] font-bold text-[#222222] uppercase tracking-wider" style={{padding: '7px'}}>Shop By</h2>
                            <button onClick={() => { setSelectedCategory('All'); setSelectedPriceRanges([]); setSortOption('Featured'); }} className="text-[11px] text-[#ff5a33] font-bold hover:underline" style={{padding: '5px'}}>Clear</button>
                        </div>
                        
                        {/* Categories List */}
                        <div className="space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide" style={{padding: '5px'}}>Categories</h3>
                            
                            {/* Electronic */}
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Electronic'); toggleCategoryDropdown('Electronic'); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Electronic' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Electronic</span>
                                    {openCategory === 'Electronic' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>
                            {/* Furnicom */}
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => setSelectedCategory('Furnicom')} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Furnicom' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Furnicom (5)</span>
                                </div>
                            </div>
                            {/* Hitech */}
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => setSelectedCategory('Hitech')} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Hitech' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Hitech</span>
                                    <FiChevronRight />
                                </div>
                            </div>
                            {/* Fresh fruit - ACTIVE */}
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Fresh fruit'); toggleCategoryDropdown('Fresh fruit'); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Fresh fruit' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Fresh fruit</span>
                                </div>
                            </div>
                            {/* Shoes & Fashion */}
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => setSelectedCategory('Shoes')} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Shoes' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Shoes (7)</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => setSelectedCategory('Fashion')} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Fashion' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Fashion</span>
                                </div>
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4" style={{padding: '5px'}}>Price</h3>
                            <div className="space-y-2 text-[13px] text-gray-500 font-medium">
                                {['0 - $99', '$100 - $199', '$200 - $299', '$300 - $399', 'Above $400'].map((range, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer hover:text-[#ff5a33]" style={{paddingLeft:'5px'}}>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedPriceRanges.includes(range)}
                                            onChange={() => handlePriceChange(range)}
                                            className="accent-[#ff5a33]" 
                                        />
                                        <span>{range}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Best Sellers Side Block */}
                    <div className="border border-gray-200 p-5 rounded-xs text-left mt-8" style={{padding: '5px'}}>
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">Best Sellers</h2>
                        <div className="space-y-4" style={{paddingTop: '5px',paddingBottom: '5px'}}>
                            {[
                                { name: "Doggen Eason", price: "$423.00", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900" },
                                { name: "Andpeger Eusmo", price: "$161.00", old: "$200.00", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/02.jpg?v=1613701900" },
                                { name: "Incididunt Picanha", price: "$66.00", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/03.jpg?v=1613701900" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-center border-b border-gray-50 pb-3 last:border-none last:pb-0">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 object-cover border border-gray-100 rounded-xs" />
                                    <div>
                                        <h4 className="text-[13px] font-bold text-gray-700 hover:text-[#ff5a33] cursor-pointer transition-colors">{item.name}</h4>
                                        <div className="flex gap-2 items-center text-[13px] mt-1">
                                            <span className="text-[#ff5a33] font-bold">{item.price}</span>
                                            {item.old && <span className="text-gray-400 line-through text-[11px]">{item.old}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Services Side Block */}
                    <div className="border border-gray-200 p-5 rounded-xs text-left mt-8">
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider" style={{padding: '5px'}}>Custom Services</h2>
                        <div className="space-y-6 pt-2">
                            <div className="flex gap-4 items-start" style={{paddingLeft:'5px', paddingTop: '10px'}}>
                                <FiTruck className="text-[28px] text-gray-700 mt-1" />
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#222222] uppercase tracking-wide">Free Delivery</h4>
                                    <p className="text-[12px] text-gray-500 mt-1 font-medium">From $59.89</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start" style={{paddingLeft:'5px', paddingTop: '5px'}}> 
                                <FiHeadphones className="text-[28px] text-gray-700 mt-1" />
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#222222] uppercase tracking-wide">Support 24/7</h4>
                                    <p className="text-[12px] text-gray-500 mt-1 font-medium">Online 24 hours</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start" style={{paddingLeft:'5px', paddingTop: '5px'}}>
                                <FiRefreshCcw className="text-[28px] text-gray-700 mt-1" />
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#222222] uppercase tracking-wide">Free Return</h4>
                                    <p className="text-[12px] text-gray-500 mt-1 font-medium">365 a day</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start" style={{paddingLeft:'5px', paddingTop: '5px', paddingBottom: '5px'}}>
                                <FiCreditCard className="text-[28px] text-gray-700 mt-1" />
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#222222] uppercase tracking-wide">Payment Method</h4>
                                    <p className="text-[12px] text-gray-500 mt-1 font-medium">Secure payment</p>
                                </div>
                            </div>

                             {/* Promotional Ad Banner embedded at the end of the grid logic */}
<div className="col-span-1 md:col-span-2 relative h-[240px] sm:h-auto border border-gray-100 rounded-xs overflow-hidden group cursor-pointer shadow-xs hover:shadow-md bg-white">
    
    {/* Text Overlay (z-10 keeps it above the tint) */}
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 space-y-3">
        <h3 className="text-xl font-bold text-[#222222] leading-tight uppercase">Going<br/>Somewhere?</h3>
        <button className="text-[11px] font-bold text-[#222222] flex items-center gap-1 hover:text-[#ff5a33] transition-colors">
            SHOP NOW <FiChevronRight />
        </button>
    </div>

    {/* Discount Badge */}
    <div className="absolute top-6 right-6 z-10 bg-[#ff5a33] text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-sm">
        <span className="font-extrabold text-[14px] leading-none">30%</span>
        <span className="text-[9px] uppercase font-bold leading-none">OFF</span>
    </div>

    {/* CONTROLLABLE OPACITY OVERLAY */}
    {/* Change the "60" to any number (10, 20, 50, 80) to adjust the fade amount! */}
    <div className="absolute inset-0 bg-white/60 z-[5] transition-colors duration-500 group-hover:bg-white/40   "></div>

    {/* Background Image */}
    <img 
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" 
        alt="Juicer Promo" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
    />
</div>

                        </div>
                    </div>
                </aside>

                {/* ================= RIGHT WORKSPACE ================= */}
                <div className="flex-1 flex flex-col">
                    
                    {/* Hero Banner Promo */}
                    <div className="w-full h-[240px] bg-[#fdf2d6] rounded-sm flex items-center justify-between px-8 md:px-16 mb-8 overflow-hidden relative border border-amber-100">
                        <div className="max-w-[60%] text-left space-y-3 z-10" style={{padding: '100px'}}>
                            <span className="bg-[#ff5a33] text-white font-bold text-[11px] tracking-widest uppercase px-3 py-1 rounded-xs" style={{padding: '5px'}}>Sale 50% Off</span>
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#222222] leading-tight" style={{paddingTop: '20px', paddingBottom: '10px'}}>MODERN $ STYLE NEW TELEVISION</h1>
                            <p className="text-[13px] text-amber-800 font-medium">Be quick! Only 100 products available at this sale price</p>
                        </div>
                       
                    </div>

                    <p className="text-[13px] text-gray-500 leading-relaxed mb-6 border-b border-gray-200 pb-6" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                    </p>

                    {/* Fresh Fruit Category Boxes */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8" style={{paddingTop: '10px'}}>
                        {[
                            { name: "Grapes", img: "https://images.unsplash.com/photo-1596363505729-4190a9506133?q=80&w=300&auto=format&fit=crop" },
                            { name: "Fresh apples", img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=300&auto=format&fit=crop" },
                            { name: "Ripe bananas", img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=300&auto=format&fit=crop" },
                            { name: "Watermelon", img: "data:image/jpeg;base64,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" }
                        ].map((cat, i) => (
                            <div key={i} className="flex flex-col items-start hover:shadow-xs transition-shadow cursor-pointer group">
                                <div className="border border-gray-200 rounded-xs overflow-hidden w-full h-[140px] mb-3">
                                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <span className="text-[14px] font-bold text-[#222222] group-hover:text-[#ff5a33]" style={{paddingTop:'5px'}}>{cat.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Filter Sorting Toolbar */}
                    <div className="w-full py-3 mb-6 flex justify-between items-center px-2" style={{paddingTop: '40px', paddingBottom: '10px'}}>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setViewMode('grid')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'grid' ? 'bg-[#ff5a33] text-white border-[#ff5a33]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiGrid className="text-[16px]" />
                            </button>
                            <button onClick={() => setViewMode('list')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'list' ? 'bg-[#ff5a33] text-white border-[#ff5a33]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiList className="text-[16px]" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[13px] text-gray-500 font-medium hidden sm:block">Sort By:</span>
                            
                            {/* FULLY FUNCTIONAL SORT SELECTOR */}
                            <select 
                                value={sortOption}
                                onChange={handleSortChange}
                                className="border border-gray-200 bg-white rounded-xs px-3 py-1.5 text-[13px] text-gray-600 outline-none focus:border-gray-400 cursor-pointer shadow-sm"
                            >
                                <option value="Featured">Featured</option>
                                <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                                <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                                <option value="Price, low to high">Price, low to high</option>
                                <option value="Price, high to low">Price, high to low</option>
                                <option value="Date, new to old">Date, new to old</option>
                                <option value="Date, old to new">Date, old to new</option>
                            </select>

                            <span className="text-[13px] text-gray-500 font-medium pl-2">{filteredProducts.length} products</span>
                        </div>
                    </div>

                    {/* Main Catalog Card Render Loop */}
                    {filteredProducts.length === 0 ? (
                        <div className="w-full py-12 text-center text-gray-500 font-medium border border-dashed border-gray-300">
                            No products match your selected filters. Try clearing them!
                        </div>
                    ) : viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 9 : index >= 9;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-100 rounded-xs bg-white flex-col relative group overflow-hidden shadow-xs hover:shadow-md transition-all`}>
                                        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1 items-start">
                                            {product.discount && <span className="bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.discount}</span>}
                                            {product.badge && <span className="bg-[#8cc14c] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full" style={{padding: '5px'}}>{product.badge}</span>}
                                        </div>
                                        <div className="w-full h-[240px] bg-white p-6 relative overflow-hidden flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-110" />
                                            <div className="absolute right-[-50px] group-hover:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiShoppingCart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiHeart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiSearch /></button>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#ffffff] flex-1 flex flex-col justify-start text-center" style={{padding: '10px'}}>
                                            <h3 className="text-[14px] font-medium text-gray-800 hover:text-[#ff5a33] transition-colors truncate cursor-pointer">{product.name}</h3>
                                            <div className="flex gap-2 items-center justify-center mt-2">
                                                <span className="text-[#ff5a33] font-extrabold text-[15px]">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[12px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                           
                        </div>
                    ) : (
                        <div className="space-y-4 text-left">
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 9 : index >= 9;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-200 rounded-xs bg-white p-5 flex-col sm:flex-row gap-6 items-center shadow-xs hover:shadow-sm transition-all group`}>
                                        <div className="w-full sm:w-[200px] h-[180px] flex-shrink-0 bg-white p-2 border border-gray-50 flex items-center justify-center relative">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                                            {product.discount && <span className="absolute left-2 top-2 bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs">{product.discount}</span>}
                                        </div>
                                        <div className="flex-1 space-y-2 w-full">
                                            <h3 className="text-[16px] font-bold text-gray-800 hover:text-[#ff5a33] cursor-pointer transition-colors">{product.name}</h3>
                                            <div className="flex gap-3 items-center text-lg">
                                                <span className="text-[#ff5a33] font-extrabold">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[13px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                            <p className="text-[13px] text-gray-400 font-light leading-relaxed max-w-2xl" style={{paddingBottom: '5px'}}>{product.desc}</p>
                                            <div className="pt-2">
                                                <button className="bg-[#ff5a33] text-white text-[12px] uppercase font-bold px-6 py-2.5 rounded-xs hover:bg-[#1c2e3a] transition-colors tracking-wider flex items-center gap-2" style={{padding:'5px'}}>
                                                    <FiShoppingCart /> Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FreshFruits;