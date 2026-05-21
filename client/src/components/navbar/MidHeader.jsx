import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const MidHeader = () => {
    const [searchQuery, setSearchQuery] = useState("");  //This creates a memory variable called searchQuery. Whenever you type in the search bar, this variable updates in real-time to store your text.
    const navigate = useNavigate(); //This is from react-router-dom. It allows React to change the page URL instantly without causing the browser to reload.

    const handleSearch = (e) => { // this function runs eact when we press search btn in midbar 
        e.preventDefault(); //By default, HTML forms reload the entire website when submitted. This line stops that from happening, keeping your React app fast and smooth.
        
        if(searchQuery.trim()){ // this checks if the user enter something in search bar or not. if user enter something then it will navigate to search page with query parameter q which is the search term. encodeURIComponent is used to make sure that any special characters in the search term are properly handled in the URI.
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
                    {/* You can replace this FaRobot with your actual image <img src="/logo.png" /> */}
                    <img src="https://ss-etrostores.myshopify.com/cdn/shop/files/logo_252x.png?v=1613701263" alt="" />                    
                    {/* <div className="flex flex-col justify-center">
                        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wider leading-none m-0">
                            ETRO STORES
                        </h1>
                        <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase mt-1">
                            Online Stores Template
                        </p>
                    </div> */}
                </div>

                {/* 2. Search Bar */}
                <form 
                    onSubmit={handleSearch} 
                    className="flex-1 w-full max-w-[650px] flex h-11 shadow-sm "
                >
                    <input 
                        type="text" 
                        placeholder="Enter keywords here..." 
                        className="w-full h-full px-4 text-[13px] text-gray-700 bg-white focus:outline-none rounded-l-sm "
                        style={{
                            paddingLeft: '20px',

                        }
                        }
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    
                    <button 
                        type="submit" 
                        className="h-full flex items-center justify-centerbg-[#ff5a33] hover:bg-[#e64d29] text-white px-6 sm:px-8 font-semibold text-[14px] transition-colors rounded-r-sm"
                        style={{
                            backgroundColor: '#ff5a33', /* BULLETPROOF FIX: Forces the orange color */
                            color: 'white',
                            display: 'flex',            /* Flex ensures the text "Search" is perfectly centered */
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0 24px',             /* Horizontal padding for the button */
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            cursor: 'pointer'
                        }}
                    >
                        Search
                    </button>
                </form>


                {/* 3. Cart & User Section */}
                <div className="flex items-center gap-6">
                    
                    {/* Cart Icon */}
                    <div className="relative cursor-pointer flex items-center group">
                        <FiShoppingBag className="text-white text-3xl group-hover:text-[#ff5a33] transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-[#ff5a33] text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md">
                            0
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