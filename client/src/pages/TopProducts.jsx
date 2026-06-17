import React, { useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";
import { FiGrid, FiList, FiHeart, FiSearch, FiShoppingCart, FiChevronDown, FiChevronRight, FiTruck, FiHeadphones, FiRefreshCcw, FiCreditCard } from "react-icons/fi";

const TopBrands = () => {
    // Layout and UI States
    const [viewMode, setViewMode] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const [openCategory, setOpenCategory] = useState('Hitech');
    const productsPerPage = 8; // 8 products per page as seen in the 4-page pagination

    // Filter & Sort Engine States
    const [selectedCategory, setSelectedCategory] = useState('Hitech');
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [selectedColor, setSelectedColor] = useState('All');
    const [sortOption, setSortOption] = useState('Featured');

    // Data mapped precisely to match the Hitech collection layout
    const products = [
        { id: 1, name: 'Lacinia Rhoncus Velit', price: 55.00, oldPrice: 65.00, discount: '-15%', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/39_f677b41b-723c-42c7-88c7-d0eeab48dc1f_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 2, name: 'Viverra Nec Purus', price: 111.00, oldPrice: 150.00, discount: '-3%', badge: 'NEW', category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/29_3a04b8b2-aa89-486d-b94c-9354c806ef7a_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 3, name: 'Officia Picanha', price: 68.00, oldPrice: 70.00, category: 'Hitech', color: '#3b82f6', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/05_0cb88184-3779-497b-89d2-8d887a15c61e_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 4, name: 'Porchetta Ribsbee', price: 154.00, oldPrice: 167.00, discount: '-8%', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/55_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 5, name: 'Nonelit Estbacon', price: 212.00, oldPrice: 242.00, discount: '-12%', badge: 'NEW', category: 'Hitech', color: '#e11d48', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/11_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 6, name: 'Rosciutto Frankfur', price: 290.00, category: 'Hitech', color: '#9ca3af', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_abaad866-1d35-48e7-a3ee-76647f386187_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 7, name: 'Eiusmod Mollit', price: 323.00, category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_0d3e1fbd-eefe-404f-8ebf-856c3fd9d787_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 8, name: 'Labore Auted', price: 345.00, oldPrice: 360.00, discount: '-4%', badge: 'BEST BUY', category: 'Hitech', color: '#60a5fa', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_d1fe52ce-c4bb-4356-89d3-986220df9dd9_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 9, name: 'Horem Porche', price: 111.00, oldPrice: 150.00, category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/39_f677b41b-723c-42c7-88c7-d0eeab48dc1f_345x345.jpg?v=1571713028', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 10, name: 'Cupidatat Consec', price: 231.00, oldPrice: 262.00, discount: '-12%', category: 'Hitech', color: '#e11d48', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/38_eda164b8-b341-4403-899a-7d7fcc8dfeaa_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 11, name: 'Picanha Chicken', price: 412.00, oldPrice: 423.00, discount: '-3%', badge: 'BEST BUY', category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_8387b149-0a4b-4f50-bde0-62272572f0a7_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 12, name: 'Yastrami Quiscup', price: 55.00, category: 'Hitech', color: '#3b82f6', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/37_58813091-17ba-48c3-8c50-68dcf19b9936_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 13, name: 'Zugiat Susirloin', price: 374.00, oldPrice: 390.00, discount: '-4%', badge: 'PRE ORDER', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_ef1b79b0-2403-42f1-b2b7-cd8436e6eebf_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 14, name: 'Wireless Dual', price: 250.00, oldPrice: 280.00, discount: '-11%', category: 'Hitech', color: '#9ca3af', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_f6c6e4b5-39f7-4811-ae9c-ca5b7b9e3ab5_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 15, name: 'Acer Aspire AIO', price: 311.00, oldPrice: 331.00, discount: '-6%', category: 'Hitech', color: '#ffffff', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_0114104a-df54-495b-9010-fa1dffab82ba_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
        { id: 16, name: 'CyberpowerPC Gamer', price: 355.00, oldPrice: 358.00, badge: 'BEST BUY', category: 'Hitech', color: '#black', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/4_96da3d8c-1d2a-4fbb-af46-15e09a58067e_345x345.jpg?v=1571713027', desc: 'Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis...' },
    ];

    const toggleCategoryDropdown = (catName) => {
        setOpenCategory(openCategory === catName ? '' : catName)
    };

    // 1. FILTER ENGINE
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
        if (sortOption === 'Price, low to high') return a.price - b.price;
        if (sortOption === 'Price, high to low') return b.price - a.price;
        if (sortOption === 'Alphabetically, A-Z') return a.name.localeCompare(b.name);
        if (sortOption === 'Alphabetically, Z-A') return b.name.localeCompare(a.name);
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
        setCurrentPage(1); 
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 box-border flex flex-col lg:flex-row gap-8" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px' }}>
                
                {/* ================= LEFT SIDEBAR ================= */}
                <aside className="w-full lg:w-[280px] flex-shrink-0">
                    <div className="border border-gray-200 p-5 rounded-xs space-y-8">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <h2 className="text-[14px] font-bold text-[#222222] uppercase tracking-wider" style={{padding: '7px'}}>Shop By</h2>
                            <button onClick={() => { setSelectedCategory('All'); setSelectedPriceRanges([]); setSelectedColor('All'); setSortOption('Featured'); setCurrentPage(1); }} className="text-[11px] text-[#ff5a33] font-bold hover:underline" style={{padding: '5px'}}>Clear</button>
                        </div>
                        
                        {/* Categories List */}
                        <div className="space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide" style={{padding: '5px', PaddingTop: '5px'}}>Categories</h3>
                            
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Electronic'); toggleCategoryDropdown('Electronic'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Electronic' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Electronic</span>
                                    {openCategory === 'Electronic' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Furnicom'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Furnicom' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Furnicom (5)</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Hitech'); toggleCategoryDropdown('Hitech'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Hitech' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Hitech</span>
                                    {openCategory === 'Hitech' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Fresh fruit'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Fresh fruit' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Fresh fruit</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Shoes'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Shoes' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Shoes (7)</span>
                                </div>
                            </div>
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                <div onClick={() => { setSelectedCategory('Fashion'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Fashion' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
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

                        {/* Color Filters */}
                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4" style={{padding: '5px'}}>Color</h3>
                            <div className="flex flex-wrap gap-3 pt-1" style={{paddingLeft:'5px', paddingBottom: '5px' }}>
                                {['#black', '#ffffff', '#e11d48', '#3b82f6', '#9ca3af', '#60a5fa'].map((color, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => { setSelectedColor(selectedColor === color ? 'All' : color); setCurrentPage(1); }}
                                        className={`w-6 h-6 rounded-xs border transition-transform ${selectedColor === color ? 'border-[#ff5a33] scale-110 shadow-md' : 'border-gray-300 hover:scale-110'}`}
                                        style={{ backgroundColor: color === '#black' ? '#222' : color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Best Sellers Side Block */}
                    <div className="border border-gray-200 p-5 rounded-xs text-left mt-8" style={{padding: '5px'}}>
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">Best Sellers</h2>
                        <div className="space-y-4" style={{paddingTop: '5px',paddingBottom: '5px'}}>
                            {[
                                { name: "Doggen Esseon", price: "$423.00", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900" },
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
                        </div>
                    </div>
                </aside>

                {/* ================= RIGHT WORKSPACE ================= */}
                <div className="flex-1 flex flex-col">
                    
                    {/* Hero Banner Promo */}
                    <div className="w-full h-[240px] bg-[#fdf2d6] rounded-sm flex items-center justify-between px-8 md:px-16 mb-8 overflow-hidden relative border border-amber-100">
                        <div className="max-w-[60%] text-left space-y-3 z-10" style={{padding: '30px'}}>
                            <span className="bg-[#ff5a33] text-white font-bold text-[11px] tracking-widest uppercase px-3 py-1 rounded-xs" style={{padding: '5px'}}>Sale 50% Off</span>
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#222222] leading-tight" style={{paddingTop: '20px', paddingBottom: '10px'}}>MODERN $ STYLE NEW TELEVISION</h1>
                            <p className="text-[13px] text-amber-800 font-medium">Be quick! Only 100 products available at this sale price</p>
                        </div>
                        <img 
                            src="https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900" 
                            alt="Featured TV" 
                            className="w-[200px] md:w-[260px] h-full object-contain transform translate-y-4"
                        />
                    </div>

                    <p className="text-[13px] text-gray-500 leading-relaxed mb-6 border-b border-gray-200 pb-6" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                    </p>

                    {/* Hitech Sub-Category Circular Boxes */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8" style={{paddingTop: '10px'}}>
                        {[
                            { name: "Camera Social", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/04.jpg?v=1613701900" },
                            { name: "Computer & Access", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/05.jpg?v=1613701900" },
                            { name: "Head Phone", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/03.jpg?v=1613701900" },
                            { name: "Smart Watch", img: "https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900" },
                        ].map((cat, i) => (
                            <div key={i} className="flex flex-col items-center hover:shadow-xs transition-shadow cursor-pointer group p-4 border border-gray-100 rounded-sm bg-gray-50/50">
                                <img src={cat.img} alt={cat.name} className="w-24 h-24 object-contain mb-3 group-hover:scale-105 transition-transform duration-500" />
                                <span className="text-[14px] font-bold text-[#222222] group-hover:text-[#ff5a33]">{cat.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Filter Sorting Toolbar */}
                    <div className="w-full py-3 mb-6 flex justify-between items-center px-4 bg-[#fafafa] border border-gray-200 rounded-xs" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setViewMode('grid')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'grid' ? 'bg-[#ff5a33] text-white border-[#ff5a33]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}` }>
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
                                <option value="Date, new to old">Date, new to old</option>
                                <option value="Date, old to new">Date, old to new</option>
                            </select>

                            <span className="text-[13px] text-gray-500 font-medium pl-2">{filteredProducts.length} products</span>
                        </div>
                    </div>

                    {/* Empty State Message */}
                    {filteredProducts.length === 0 && (
                        <div className="w-full py-12 text-center text-gray-500 font-medium border border-dashed border-gray-300">
                            No products match your selected filters. Try clearing them!
                        </div>
                    )}

                    {/* Main Catalog Card Render Loop */}
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left" style={{paddingBottom: '15px'}}>
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = Math.floor(index / productsPerPage) + 1 === currentPage;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-100 rounded-xs bg-white flex-col relative group overflow-hidden shadow-xs hover:shadow-md transition-all`}>
                                        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1 items-start">
                                            {product.discount && <span className="bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: ' 2px'}}>{product.discount}</span>}
                                            {product.badge && <span className="bg-[#8cc14c] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full" style={{padding: ' 5px'}}>{product.badge}</span>}
                                        </div>
                                        <div className="w-full h-[220px] bg-white p-4 relative overflow-hidden flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute right-[-50px] group-hover:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiShoppingCart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiHeart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiSearch /></button>
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
                                const isVisibleOnCurrentPage = Math.floor(index / productsPerPage) + 1 === currentPage;
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
                                            <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-2xl" style={{paddingBottom: '5px'}}>{product.desc}</p>
                                            <div className="pt-2">
                                                <button className="bg-[#ff5a33] text-white text-[12px] uppercase font-bold px-6 py-2.5 rounded-xs hover:bg-[#1c2e3a] transition-colors tracking-wider flex items-center gap-2" style={{padding: '5px'}}>
                                                    <FiShoppingCart /> Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination - dynamically calculated */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-8 mb-6">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="w-9 h-9 flex items-center justify-center rounded-sm text-[13px] font-bold border transition-all bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                &lt;
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-9 h-9 rounded-sm text-[13px] font-bold border transition-all flex items-center justify-center ${
                                        currentPage === page 
                                        ? 'bg-[#ff5a33] text-white border-[#ff5a33]' 
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="w-9 h-9 flex items-center justify-center rounded-sm text-[13px] font-bold border transition-all bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                &gt;
                            </button>
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TopBrands;