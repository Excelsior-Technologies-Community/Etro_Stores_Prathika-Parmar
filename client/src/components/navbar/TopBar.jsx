import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = ({ label, options, icon }) => (
    <div className="relative group flex items-center gap-1 cursor-pointer py-2 px-2 h-full">
        <div className="flex items-center gap-1 group-hover:text-white transition-colors">
            {icon && <span className="text-sm">{icon}</span>}
            <span className="text-[12px]">{label}</span>
            <IoIosArrowDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
        </div>

        <div className="absolute top-[100%] left-0 w-24 bg-white text-[#333] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
            <ul className="py-2 border-l-4 border-gray-100">
                {options.map((option, index) => (
                    <li key={index} className="px-4 py-1.5 hover:text-[#ff5a33] cursor-pointer transition-colors text-[12px] font-normal">
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const TopBar = () => {
    return (
        <div className="w-full bg-[#0b212f] text-gray-300 border-b border-[#1c384c] h-10 flex items-center font-sans m-0 p-0">
            {/* INLINE STYLE ADDED: padding: '0 40px' forces the space regardless of Tailwind issues */}
            <div 
                className="max-w-[1440px] mx-auto w-full flex justify-between items-center h-full box-border"
                style={{ paddingLeft: '40px', paddingRight: '40px' }}
            >
                
                {/* Left Section */}
                <div className="flex items-center gap-3 sm:gap-5 h-full">
                    <span className="hidden lg:flex items-center text-[12px] tracking-wide  border-[#1c384c] pr-5 h-full">
                        CALL US NOW: 0123-444-666
                    </span>

                    {/* Language Dropdown */}
                    <div className="flex items-center gap-1 cursor-pointer group py-2 px-2 relative h-full">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" 
                            alt="UK Flag" 
                            className="w-4 h-3 mr-1"
                        />
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
                    <Dropdown label="My Account" options={['Login', 'Register']} />
                    
                    <span className="text-[#1c384c] hidden sm:block">|</span>
                    
                    <a href="#" className="hover:text-white transition-colors text-[12px] hidden sm:block">
                        My Wishlist
                    </a>
                    
                    <span className="text-[#1c384c] hidden sm:block">|</span>
                    
                    <a href="#" className="hover:text-white transition-colors text-[12px]">
                        Checkout
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;