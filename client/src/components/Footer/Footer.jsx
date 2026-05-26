import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi'; // Imported arrow icon for the scroll button

const Footer = () => {
    // State to track if the scroll-to-top button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // Monitor window scroll coordinates to toggle visibility state
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Smoothly scroll the window context view back to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Data array for the 6 columns of links
    const footerColumns = [
        {
            title: "TECHNOLOGY",
            links: ["Mobiles", "Tablets", "Accessories", "Power Banks", "Phone Cases", "Tablet Accessories"]
        },
        {
            title: "WOMEN'S FASHION",
            links: ["Dresses", "Tops", "Cheongsams", "Back to Black", "5 Stars Rating!", "Fabulous Floral up To 70%"]
        },
        {
            title: "HOME LIVING",
            links: ["Air Conditioners", "Air Purifiers", "Fans", "Freezers", "Microwave & Oven", "Refrigerators"]
        },
        {
            title: "HEALTH & BEAUTY",
            links: ["Treatments & Serum", "Moisturizers & Cream", "Toners", "Face Cleansers", "Face Masks", "Gifts & Value Sets"]
        },
        {
            title: "BABY & TODDLER",
            links: ["Diapering & Potty", "Disposable Diapers", "Diaper Bags", "Cloth Diapers", "Baby Gear"]
        },
        {
            title: "SPORTS & OUTDOORS",
            links: ["Exercise & Fitness", "Cardio Equipment", "Strength Equipment", "Fitness Accessories", "Weight", "Yoga"]
        }
    ];

    const utilityLinks = ["ABOUT US", "CUSTOMER SERVICE", "PRIVACY POLICY", "SITE MAP", "ORDERS AND RETURNS", "CONTACT US"];

    return (
        <footer className="w-full bg-[#f9fafb] font-sans pt-12 border-t border-gray-200 relative">
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px' }}>
                
                {/* --- 1. TOP SECTION: 6-Column Links Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-10 border-b border-gray-200">
                    {footerColumns.map((col, index) => (
                        <div key={index} className="flex flex-col">
                            <h4 className="text-[#333] text-[14px] font-extrabold uppercase mb-4 tracking-wide">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2 m-0 p-0" style={{ paddingTop: '20px'}}>
                                {col.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-gray-500 text-[13px] hover:text-[#ff5a33] transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- 2. MIDDLE SECTION: Trust Badges, Links, Disclaimer, Payments --- */}
                <div className="flex flex-col items-center py-8 text-center" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
                    
                    {/* Trust Badges */}
                    <div className="flex items-center justify-center mb-6">
                        <img 
                            src="https://ss-etrostores.myshopify.com/cdn/shop/files/icon-security_024eeb15-f2cf-4d48-a6e0-04ad4b8b825f.png?v=1613701216" 
                            alt="Security Badges" 
                            className="h-8 object-contain opacity-80" 
                        />
                    </div>

                    {/* Utility Links */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-[12px] font-bold text-[#333] uppercase"  style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        {utilityLinks.map((link, idx) => (
                            <span key={idx} className="flex items-center">
                                <a href="#" className="hover:text-[#ff5a33] transition-colors">{link}</a>
                                {idx !== utilityLinks.length - 1 && <span className="text-gray-300 pl-3 pr-1" style={{paddingLeft: '10px'}}>|</span>}
                            </span>
                        ))}
                    </div>

                    {/* Disclaimer Text */}
                    <p className="text-gray-500 text-[12px] max-w-4xl leading-relaxed mb-6">
                        $50 off orders $350+ with the code BOO50. $75 off orders $500+ with the code BOO75. $150 off orders $1000+ with the code BOO150. Valid from October 28, 2015 to October 31, 2018. Offer may not be combined with any other offers or promotions, is non-exchangeable and non-refundable. Offer valid within the US only.
                    </p>

                    {/* Payment Methods */}
                    <div className="flex items-center justify-center gap-2" style={{ paddingTop: '20px' }}>
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-800 shadow-sm" style={{ padding: '2px' }}>PayPal</div>
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-600 shadow-sm" style={{ padding: '2px' }}>VISA</div>
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-red-500 shadow-sm" style={{ padding: '2px' }}>Master</div>
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-400 shadow-sm" style={{ padding: '2px' }}>Amex</div>
                        <div className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-orange-500 shadow-sm" style={{ padding: '2px' }}>Discover</div>
                    </div>
                </div>

            </div>

            {/* --- 3. BOTTOM COPYRIGHT BAR --- */}
            <div className="w-full bg-[#222222] py-4" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <div className="max-w-[1440px] mx-auto w-full box-border text-center">
                    <p className="text-gray-400 text-[12px] m-0">
                        Etrostore © 2017 Demo Store. All Rights Reserved. Designed by <span className="text-[#ff5a33] cursor-pointer hover:underline">MagenTech.com</span>
                    </p>
                </div>
            </div>

            {/* --- 4. FLOATING BACK TO TOP BUTTON SECTION --- */}
            <div className="fixed bottom-6 right-6 z-[250]">
                <button
                    type="button"
                    onClick={scrollToTop}
                    className={`
                        flex items-center justify-center h-10 w-10
                        bg-[#1c2e3a] hover:bg-[#ff5a33] text-white 
                        shadow-md rounded-xs transition-all duration-300 ease-in-out
                        focus:outline-none transform hover:-translate-y-1 text-lg
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}
                    `}
                    title="Scroll to top"
                >
                    <FiChevronUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;