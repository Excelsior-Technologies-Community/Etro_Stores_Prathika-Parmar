import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const MidHeader = () => {
    // --- 1. CART STATE ---
    const [cartCount, setCartCount] = useState(0);

    // --- 2. SEARCH STATES ---
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

    const navigate = useNavigate();

    // --- Fetch Cart Data ---
    useEffect(() => {
        const fetchCartCount = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cart/1');
                const data = await response.json();
                setCartCount(data.length);
            } catch (error) {
                console.error("failed to fetch cart items ", error);
            }
        };
        fetchCartCount();
    }, []);

    // --- Live Search Debounce Engine ---
    useEffect(() => {
        // Don't trigger search for single letters or empty boxes
        if (searchQuery.length < 2) {
            setSearchResults([]);
            setIsDropdownOpen(false);
            return;
        }

        const delaySearch = setTimeout(async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/search?q=${searchQuery}`);
                const data = await response.json();
                setSearchResults(data);
                setIsDropdownOpen(true);
            } catch (error) {
                console.error("Failed to fetch live search results:", error);
            }
        }, 300); // Waits 300ms before asking the database

        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    // --- Click-Away Listener (Closes dropdown if you click outside) ---
    useEffect(() => {
        const handleOutsideClick = () => setIsDropdownOpen(false);
        window.addEventListener('click', handleOutsideClick);
        return () => window.removeEventListener('click', handleOutsideClick);
    }, []);

    // --- Full Page Search Submit ---
    const handleSearch = (e) => {
        e.preventDefault(); 
        if (searchQuery.trim()) { 
            setIsDropdownOpen(false); // Close dropdown when submitting
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div className="w-full bg-[#0b212f] border-b border-[#1c384c] py-6 m-0 p-0 font-sans">
            {/* Inner Wrapper */}
            <div 
                className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-6 box-border"
                style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px' }}
            >
                {/* 1. Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <img src="https://ss-etrostores.myshopify.com/cdn/shop/files/logo_252x.png?v=1613701263" alt="Etro Stores" />                    
                </div>

                {/* 2. Live Search Bar */}
                {/* Added 'relative' and 'onClick' to stop the click-away listener from firing when clicking the input */}
                <form 
                    onSubmit={handleSearch} 
                    className="flex-1 w-full max-w-[650px] flex h-11 shadow-sm relative"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <input 
                        type="text" 
                        placeholder="Enter keywords here..." 
                        className="w-full h-full px-4 text-[13px] text-gray-700 bg-white focus:outline-none rounded-l-sm"
                        style={{ paddingLeft: '20px' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => searchQuery.length >= 2 && setIsDropdownOpen(true)}
                    />
                    
                    <button 
                        type="submit" 
                        className="h-full flex items-center justify-center bg-[#ff5a33] hover:bg-[#e64d29] text-white px-6 sm:px-8 font-semibold text-[14px] transition-colors rounded-r-sm"
                        style={{
                            backgroundColor: '#ff5a33', 
                            color: 'white',
                            display: 'flex',            
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 24px',             
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            cursor: 'pointer'
                        }}
                    >
                        Search
                    </button>

                    {/* LIVE DROPDOWN CONTAINER */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl rounded-b-sm z-50 overflow-hidden max-h-[350px] overflow-y-auto mt-1">
                            {searchResults.length > 0 ? (
                                searchResults.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-none text-left transition-colors"
                                        onClick={() => {
                                            setIsDropdownOpen(false);
                                            // Optional: Navigate directly to product page
                                            // navigate(`/product/${item.id}`);
                                        }}
                                    >
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-10 h-10 object-contain bg-white flex-shrink-0" 
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-[13px] font-bold text-gray-800 truncate">{item.name}</h4>
                                            <p className="text-[11px] text-gray-400 capitalize">{item.category}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#ff5a33] font-extrabold text-[14px]" style={{padding: '10px'}}>${Number(item.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-4 text-center text-[13px] text-gray-500 bg-white font-medium">
                                    No products found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    )}
                </form>

                {/* 3. Cart & User Section */}
                <div className="flex items-center gap-6">
                    
                    {/* Cart Icon */}
                    <div className="relative cursor-pointer flex items-center group" onClick={() => navigate('/cart')} role="button" tabIndex={0}>
                        <FiShoppingBag className="text-white text-3xl group-hover:text-[#ff5a33] transition-colors" />
    
                        <span className="absolute -top-2 -right-2 bg-[#ff5a33] text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md">
                            {cartCount}
                        </span>
                    </div>

                    {/* User Auth */}
                    <div className="flex items-center gap-2">
                        <FiUser className="text-gray-400 text-3xl" />
                        <div className="flex flex-col justify-center">
                            <p className="text-white text-[12px] font-bold leading-none mb-1">
                                <a href="/login" className="hover:text-[#ff5a33] transition-colors">Sign in</a>
                                <span className="text-gray-400 font-normal mx-1">/</span>
                                <a href="/register" className="hover:text-[#ff5a33] transition-colors">Join Free</a>
                            </p>
                            <p className="text-gray-400 text-[11px] leading-none">
                                Welcome Guest
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MidHeader;