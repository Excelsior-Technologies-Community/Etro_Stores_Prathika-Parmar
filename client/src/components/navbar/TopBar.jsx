import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate, Link } from 'react-router-dom';

// Added an 'onSelect' prop so the dropdown knows what you clicked
const Dropdown = ({ label, options, icon, onSelect }) => (
    <div className="relative group flex items-center gap-1 cursor-pointer py-2 px-2 h-full">
        <div className="flex items-center gap-1 group-hover:text-white transition-colors">
            {icon && <span className="text-sm">{icon}</span>}
            <span className="text-[12px] whitespace-nowrap">{label}</span>
            <IoIosArrowDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
        </div>

        <div className="absolute top-[100%] left-0 w-28 bg-white text-[#333] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
            <ul className="py-2 border-l-4 border-gray-100">
                {options.map((option, index) => (
                    <li 
                        key={index} 
                        onClick={() => onSelect && onSelect(option)}
                        className="px-4 py-1.5 hover:text-[#ff5a33] cursor-pointer transition-colors text-[12px] font-normal"
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const TopBar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Check if a user is logged in when the component loads
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    // The traffic controller for the Account dropdown
    const handleAccountAction = (action) => {
        if (action === 'Login') navigate('/login');
        if (action === 'Register') navigate('/register');
        if (action === 'Logout') {
            localStorage.removeItem('user'); // Erase session
            setUser(null);
            navigate('/login'); // Send them back to login
        }
    };

    return (
        <div className="w-full bg-[#0b212f] text-gray-300 border-b border-[#1c384c] h-10 flex items-center font-sans m-0 p-0">
            <div 
                className="max-w-[1440px] mx-auto w-full flex justify-between items-center h-full box-border"
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
            >
                {/* Left Section */}
                <div className="flex items-center gap-3 sm:gap-5 h-full">
                    <span className="hidden lg:flex items-center text-[12px] tracking-wide border-r border-[#1c384c] pr-5 h-full">
                        CALL US NOW: 0123-444-666
                    </span>

                    <div className="flex items-center gap-1 cursor-pointer group py-2 px-2 relative h-full">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK Flag" className="w-4 h-3 mr-1" />
                        <span className="text-[12px] group-hover:text-white transition-colors">English</span>
                        <IoIosArrowDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300 group-hover:text-white" />
                        <div className="absolute top-[100%] left-0 w-24 bg-white text-[#333] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                             <ul className="py-2 border-l-4 border-gray-100">
                                <li className="px-4 py-1.5 hover:text-[#ff5a33] cursor-pointer transition-colors text-[12px] font-normal">English</li>
                                <li className="px-4 py-1.5 hover:text-[#ff5a33] cursor-pointer transition-colors text-[12px] font-normal">French</li>
                            </ul>
                        </div>
                    </div>
                    
                    <span className="text-[#1c384c]">|</span>
                    
                    <Dropdown label="USD" options={['USD', 'EUR', 'GBP', 'INR']} />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 sm:gap-4 h-full">
                    
                    {/* DYNAMIC ACCOUNT DROPDOWN */}
                    {user ? (
                        <Dropdown 
                            label={`Hi, ${user.name.split(' ')[0]}`} // Shows first name
                            options={['My Profile', 'Logout']} 
                            onSelect={handleAccountAction}
                        />
                    ) : (
                        <Dropdown 
                            label="My Account" 
                            options={['Login', 'Register']} 
                            onSelect={handleAccountAction}
                        />
                    )}
                    
                    <span className="text-[#1c384c] hidden sm:block">|</span>
                    
                    <Link to="/wishlist" className="hover:text-white transition-colors text-[12px] hidden sm:block">
                        My Wishlist
                    </Link>
                    
                    <span className="text-[#1c384c] hidden sm:block">|</span>
                    
                    <Link to="/checkout" className="hover:text-white transition-colors text-[12px]">
                        Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;