import React, { useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";
import { FiGrid, FiList, FiHeart, FiSearch, FiShoppingCart, FiChevronDown, FiChevronRight } from "react-icons/fi";

const Collections = () => {
    // Layout and filter UI States
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [openCategory, setOpenCategory] = useState('Electronic');

    // Filter & Sort Engine States
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [selectedColor, setSelectedColor] = useState('All');
    const [sortOption, setSortOption] = useState('Featured'); // Added sorting state

    const products = [
        { id: 1, name: 'Lacinia Rhoncus', price: 55.00, oldPrice: 65.00, discount: '-15%', category: 'Electronic', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/39_f677b41b-723c-42c7-88c7-d0eeab48dc1f_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 2, name: 'Viverra Nec Purus', price: 111.00, oldPrice: 160.00, discount: '-31%', badge: 'New', category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/29_3a04b8b2-aa89-486d-b94c-9354c806ef7a_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 3, name: 'Officia Picanha', price: 68.00, oldPrice: 70.00, discount: '-3%', category: 'Furnicom', color: '#3b82f6', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/05_0cb88184-3779-497b-89d2-8d887a15c61e_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 4, name: 'Porchetta Ribsbee', price: 154.00, oldPrice: 167.00, discount: '-8%', category: 'Electronic', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/55_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 5, name: 'Nonelit Estbacon', price: 212.00, oldPrice: 242.00, discount: '-12%', badge: 'New', category: 'Hitech', color: '#e11d48', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/11_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 6, name: 'Rosciutto Frankfur', price: 290.00, category: 'Electronic', color: '#9ca3af', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_abaad866-1d35-48e7-a3ee-76647f386187_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 7, name: 'Eiusmod Mollit', price: 232.00, category: 'Furnicom', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_0d3e1fbd-eefe-404f-8ebf-856c3fd9d787_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 8, name: 'Labore Auted', price: 345.00, oldPrice: 360.00, discount: '-4%', category: 'Hitech', color: '#60a5fa', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_d1fe52ce-c4bb-4356-89d3-986220df9dd9_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 9, name: 'Horem Porche', price: 111.00, oldPrice: 160.00, discount: '-31%', badge: 'New', category: 'Electronic', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/39_f677b41b-723c-42c7-88c7-d0eeab48dc1f_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 10, name: 'Cupidatat Consec', price: 231.00, oldPrice: 262.00, discount: '-15%', category: 'Furnicom', color: '#e11d48', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/38_eda164b8-b341-4403-899a-7d7fcc8dfeaa_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 11, name: 'Picanha Chicken', price: 412.00, oldPrice: 423.00, discount: '-3%', badge: 'Best-Buy', category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_8387b149-0a4b-4f50-bde0-62272572f0a7_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 12, name: 'Yastrami Quiscup', price: 55.00, category: 'Electronic', color: '#3b82f6', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_58813091-17ba-48c3-8c50-68dcf19b9936_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 13, name: 'Zugiat Susirloin', price: 374.00, oldPrice: 390.00, discount: '-4%', badge: 'Pre-Order', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_ef1b79b0-2403-42f1-b2b7-cd8436e6eebf_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 14, name: 'Wireless Dual', price: 250.00, oldPrice: 280.00, discount: '-11%', category: 'Electronic', color: '#9ca3af', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_f6c6e4b5-39f7-4811-ae9c-ca5b7b9e3ab5_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 15, name: 'Acer Aspire AIO', price: 311.00, oldPrice: 331.00, discount: '-6%', category: 'Furnicom', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_0114104a-df54-495b-9010-fa1dffab82ba_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
        { id: 16, name: 'CyberpowerPC Gamer', price: 355.00, oldPrice: 358.00, discount: '-1%', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/4_96da3d8c-1d2a-4fbb-af46-15e09a58067e_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat.' },
    ];

    const handleAddToCart = async (product) => {
        try{
        // 1. FIXED: Changed https: to http://
        const response = await fetch('http://localhost:5000/api/cart/add',{
            method: 'POST',
            headers: {
                // 2. FIXED: Changed josn to json
                "Content-Type" : 'application/json',
            },
            // 3. FIXED: Changed bosy to body
            body: JSON.stringify({
                userId: 1,
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.image
            })
        });

        const data = await response.json();
            
            if (response.ok) {
                alert(`Success: ${product.name} added to your cart!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        }catch (error) {
            console.error("Failed to connect to backend:", error);
            alert("Could not connect to the server. Is your Node.js backend running?");
        }
    };

    const handleAddToWishlist = async (product) => {
        try {
            const response = await fetch('http://localhost:5000/api/wishlist/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 1, // Hardcoded user ID for now
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                })
            });

            const data = await response.json();
            
            if (response.ok) {
                alert(`Success: ${product.name} added to your wishlist!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Failed to connect to backend:", error);
            alert("Could not connect to the server. Is your Node.js backend running?");
        }
    };

    const toggleCategoryDropdown = (catName) => {
        setOpenCategory(openCategory === catName ? '' : catName)
    };

    // 1. Core Filtering AND Sorting Engine logic
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesColor = selectedColor === 'All' || product.color === selectedColor;

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
        return matchesCategory && matchesColor && matchesPrice;
    }).sort((a, b) => {
        // ADDED: Sorting Logic chained directly after the filter
        if (sortOption === 'Price: Low to High') {
            return a.price - b.price;
        } else if (sortOption === 'Price: High to Low') {
            return b.price - a.price;
        }
        // Defaults to 'Featured' or original order
        return 0; 
    });

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
        setCurrentPage(1); // Reset to page 1 when sort order changes
    };

    const totalPages = Math.ceil(filteredProducts.length / 9);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 box-border flex flex-col lg:flex-row gap-8" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '30px' }}>
                
                {/* ================= LEFT SIDEBAR FILTER PANEL ================= */}
                <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-8">
                    <div className="border border-gray-200 p-5 rounded-xs">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                            <h2 className="text-[14px] font-bold text-[#222222] uppercase tracking-wider" style={{padding: '7px'}}>Shop By</h2>
                            {/* Clear Filters Button */}
                            <button onClick={() => { setSelectedCategory('All'); setSelectedColor('All'); setSelectedPriceRanges([]); setSortOption('Featured'); }} className="text-[11px] text-[#ff5a33] font-bold hover:underline" style={{padding: '5px'}}>Clear</button>
                        </div>
                        
                        {/* Categories */}
                        <div className="space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide" style={{padding: '5px'}}>Categories</h3>
                            
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Electronic'); toggleCategoryDropdown('Electronic'); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Electronic' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Electronic</span>
                                    {openCategory === 'Electronic' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-2"  style={{paddingLeft:'5px'}}>
                                <div onClick={() => setSelectedCategory('Furnicom')} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Furnicom' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Furnicom</span>
                                    <FiChevronRight />
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-2"  style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Hitech'); toggleCategoryDropdown('Hitech'); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Hitech' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Hitech</span>
                                    {openCategory === 'Hitech' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>
                        </div>

                        {/* Price Filters */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4"  style={{padding: '5px'}}>Price</h3>
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

                        {/* Color Filters */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4" style={{padding: '5px'}}>Color</h3>
                            <div className="flex flex-wrap gap-3 pt-1" style={{paddingLeft:'5px', paddingBottom: '5px' }}>
                                {['#black', '#ffffff', '#e11d48', '#3b82f6', '#9ca3af', '#60a5fa'].map((color, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => setSelectedColor(selectedColor === color ? 'All' : color)}
                                        className={`w-6 h-6 rounded-xs border transition-transform ${selectedColor === color ? 'border-[#ff5a33] scale-110 shadow-md' : 'border-gray-300 hover:scale-110'}`}
                                        style={{ backgroundColor: color === '#black' ? '#222' : color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* ================= RIGHT PRODUCT SHELF WORKSPACE ================= */}
                <div className="flex-1 flex flex-col">
                    
                    {/* Hero Banner Promo Header Slider Box */}
                    <div className="w-full h-[240px] bg-[#fdf2d6] rounded-sm flex items-center justify-between px-8 md:px-16 mb-6 overflow-hidden relative border border-amber-100">
                        <div className="max-w-[50%] text-left space-y-2 z-10" style={{padding: '100px'}}>
                            <span className="bg-[#ff5a33] text-white font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-xs" style={{padding: '5px'}}>Sale 50% Off</span>
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#222222] leading-tight"style={{paddingTop: '20px', paddingBottom: '10px'}}>Modern S Style New Television</h1>
                            <p className="text-[12px] text-amber-800 font-medium">Be quick! Only 100 products available at this price sale price</p>
                        </div>
                        {/* <img 
                            src="https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900" 
                            alt="Featured watch devices" 
                            className="w-[200px] md:w-[260px] h-full object-contain transform translate-y-4"
                        /> */}
                    </div>

                    {/* Filter Sorting Toolbar Controls Header Row */}
                    <div className="w-full border-t border-b border-gray-200 py-3 mb-6 flex justify-between items-center bg-[#fafafa] px-4 rounded-xs" style={{paddingTop: '20px', paddingBottom: '10px'}}>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setViewMode('grid')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'grid' ? 'bg-[#1c2e3a] text-white border-[#1c2e3a]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiGrid className="text-[16px]" />
                            </button>
                            <button onClick={() => setViewMode('list')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'list' ? 'bg-[#1c2e3a] text-white border-[#1c2e3a]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiList className="text-[16px]" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[13px] text-gray-400 font-medium">Sort By:</span>
                            
                            {/* ADDED: Connected state and onChange to the select element */}
                            <select 
                                value={sortOption}
                                onChange={handleSortChange}
                                className="border border-gray-200 bg-white rounded-xs px-3 py-1.5 text-[13px] text-gray-600 outline-none focus:border-gray-400 cursor-pointer"
                            >
                                <option value="Featured">Featured</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>

                            <span className="text-[13px] text-gray-400 font-medium pl-2">{filteredProducts.length} products</span>
                        </div>
                    </div>

                    {/* Empty State Message */}
                    {filteredProducts.length === 0 && (
                        <div className="w-full py-12 text-center text-gray-500 font-medium">
                            No products match your selected filters. Try clearing them!
                        </div>
                    )}

                    {/* Main Catalog Card Render Loop */}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left" style={{paddingBottom: '15px'}}>
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 8 : index >= 8;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-100 rounded-xs bg-white flex-col relative group overflow-hidden shadow-xs hover:shadow-md transition-all`}>
                                        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1 items-start">
                                            {product.discount && <span className="bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.discount}</span>}
                                            {product.tag && <span className="bg-[#00a8ff] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.tag}</span>}
                                        </div>
                                        <div className="w-full h-[220px] bg-white p-4 relative overflow-hidden flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute right-[-50px] group-hover:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                                    className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"
                                                >
                                                    <FiShoppingCart />
                                                </button>
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); handleAddToWishlist(product); }}
                                                    className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"
                                                >
                                                    <FiHeart />
                                                </button>                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiSearch /></button>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#ffffff] border-t border-gray-50 flex-1 flex flex-col justify-between" style={{padding: '10px'}}>
                                            <h3 className="text-[13.5px] font-bold text-gray-700 hover:text-[#ff5a33] transition-colors truncate cursor-pointer">{product.name}</h3>
                                            <div className="flex gap-2 items-center mt-2">
                                                <span className="text-[#ff5a33] font-extrabold text-[15px]">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[12px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-4 text-left" style={{paddingBottom: '15px'}}>
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 8 : index >= 8;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-200 rounded-xs bg-white p-5 flex-col sm:flex-row gap-6 items-center shadow-xs hover:shadow-sm transition-all group`}>
                                        <div className="w-full sm:w-[200px] h-[180px] flex-shrink-0 bg-white p-2 border border-gray-50 flex items-center justify-center relative">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                                            {product.discount && <span className="absolute left-2 top-2 bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.discount}</span>}
                                        </div>
                                        <div className="flex-1 space-y-2 w-full">
                                            <h3 className="text-[16px] font-bold text-gray-800 hover:text-[#ff5a33] cursor-pointer transition-colors">{product.name}</h3>
                                            <div className="flex gap-3 items-center text-lg">
                                                <span className="text-[#ff5a33] font-extrabold">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[13px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                            <p className="text-[13px] text-grey-400 font-light leading-relaxed max-w-2xl" style={{paddingBottom: '5px'}}>{product.desc}</p>
                                            <div className="pt-2">
                                                <button 
                                                                                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                                                                                    className="bg-[#ff5a33] text-white text-[12px] uppercase font-bold px-6 py-2.5 rounded-xs hover:bg-[#1c2e3a] transition-colors tracking-wider flex items-center gap-2" style={{padding: '5px'}}
                                                                                                >
                                                                                                    <FiShoppingCart /> Add To Cart
                                                                                                </button>
                                                                                                
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12 mb-6">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-9 h-9 rounded-sm text-[13px] font-bold border transition-all ${
                                        currentPage === page 
                                        ? 'bg-[#ff5a33] text-white border-[#ff5a33]' 
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Collections;