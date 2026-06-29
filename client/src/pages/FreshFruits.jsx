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

    // --- FULL-STACK ADD TO CART FUNCTION ---
    const handleAddToCart = async (product) => {
        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    userId: 1, // Hardcoded reference
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
        } catch (error) {
            console.error("Failed to connect to backend:", error);
            alert("Could not connect to the server. Is your Node.js backend running?");
        }
    };

    // --- FULL-STACK ADD TO WISHLIST FUNCTION ---
    const handleAddToWishlist = async (product) => {
        try {
            const response = await fetch('http://localhost:5000/api/wishlist/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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

                            {/* Promotional Ad Banner */}
                            <div className="col-span-1 md:col-span-2 relative h-[240px] sm:h-auto border border-gray-100 rounded-xs overflow-hidden group cursor-pointer shadow-xs hover:shadow-md bg-white">
                                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 space-y-3">
                                    <h3 className="text-xl font-bold text-[#222222] leading-tight uppercase">Going<br/>Somewhere?</h3>
                                    <button className="text-[11px] font-bold text-[#222222] flex items-center gap-1 hover:text-[#ff5a33] transition-colors">
                                        SHOP NOW <FiChevronRight />
                                    </button>
                                </div>

                                <div className="absolute top-6 right-6 z-10 bg-[#ff5a33] text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-sm">
                                    <span className="font-extrabold text-[14px] leading-none">30%</span>
                                    <span className="text-[9px] uppercase font-bold leading-none">OFF</span>
                                </div>

                                <div className="absolute inset-0 bg-white/60 z-[5] transition-colors duration-500 group-hover:bg-white/40 "></div>

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
                            { name: "Watermelon", img: "https://tse3.mm.bing.net/th/id/OIP.HdkzmeUaroVLPleyXTLTxQHaE7?pid=Api&P=0&h=180" }
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
                                                {/* WIRED ADD TO CART (GRID) */}
                                                <button 
                                                    onClick={() => handleAddToCart(product)}
                                                    className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"
                                                >
                                                    <FiShoppingCart />
                                                </button>
                                                {/* WIRED ADD TO WISHLIST (GRID) */}
                                                <button 
                                                    onClick={() => handleAddToWishlist(product)}
                                                    className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"
                                                >
                                                    <FiHeart />
                                                </button>
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
                                            
                                            {/* WIRED ACTION BUTTONS (LIST VIEW) */}
                                            <div className="pt-2 flex gap-2">
                                                <button 
                                                    onClick={() => handleAddToCart(product)}
                                                    className="bg-[#ff5a33] text-white text-[12px] uppercase font-bold px-6 py-2.5 rounded-xs hover:bg-[#1c2e3a] transition-colors tracking-wider flex items-center gap-2" 
                                                    style={{padding:'5px'}}
                                                >
                                                    <FiShoppingCart /> Add To Cart
                                                </button>
                                                <button 
                                                    onClick={() => handleAddToWishlist(product)}
                                                    className="p-2.5 border border-gray-200 rounded-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors flex items-center justify-center"
                                                >
                                                    <FiHeart />
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