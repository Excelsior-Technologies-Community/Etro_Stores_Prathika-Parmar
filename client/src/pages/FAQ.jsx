import React, { useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";

const FAQ = () => {
    // State to track which accordion index is currently expanded (-1 means all closed)
    const [activeIndex, setActiveIndex] = useState(0); // Sets the first item open by default 

    const toggleAccordion = (index) => {
        // FIXED: Corrected spelling to match state setter function
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: 'I placed anorder, but never received a confirmation email?',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/01.jpg?v=1613701900',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'How long after I place my order will it ship?',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/02.jpg?v=1613701900',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'How long does it take to ship internationally',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/03.jpg?v=1613701900',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'Do you refund shipping -fees?',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/05.jpg?v=1613701900', // Fixed broken placeholder image string
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'How long does it take to ship internationally?',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/05.jpg?v=1613701900',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            question: 'How do I change or cancel my order?',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/06.jpg?v=1613701900',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ];

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            {/* Navigation Header */}
            <Header />

            {/* Main Content Layout Container */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 box-border" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                
                {/* 1. Page Header Breadcrumb Section */}
                <div className="border-b border-gray-200 pb-4 mb-10">
                    <h1 className="text-2xl font-bold text-[#222222] relative inline-block border-b border-[#ff5a33] bold" style={{ paddingBottom: '7px', paddingTop: '5px' }}>
                        Page Lookbook
                    </h1>
                </div>

                {/* 2. Accordion Container Stack */}
                <div className="w-full space-y-4 mb-16" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    {faqData.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div 
                                key={index} 
                                className="w-full border border-gray-200 rounded-sm overflow-hidden bg-white"
                            >
                                {/* Accordion Header Trigger Row */}
                                <div
                                    onMouseEnter={() => setActiveIndex(index)} // FIXED: Smoothly sets panel active without stuttering on hover
                                    onClick={() => toggleAccordion(index)}       // FIXED: Keeping click fallback healthy
                                    className="w-full flex items-center gap-4 px-5 py-4 text-left outline-none transition-colors duration-200 select-none hover:bg-gray-50 cursor-pointer"
                                >
                                    {/* Plus / Minus Indicator Icon */}
                                    <span className="text-[18px] font-bold text-gray-500 w-4 flex-shrink-0">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                    <span className={`text-[14px] font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-[#ff5a33]' : 'text-[#333333]'}`}>
                                        {faq.question}
                                    </span>
                                </div>

                                {/* Accordion Dropdown Content Panel */}
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-[800px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'
                                    }`} style={{paddingTop: '5px', paddingBottom: '5px'}}
                                >
                                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start bg-white">
                                        
                                        {/* Left Column: Context Graphic Frame */}
                                        <div className="md:col-span-1 h-[200px] w-full bg-gray-50 border border-gray-100 overflow-hidden rounded-xs">
                                            <img 
                                                src={faq.image} 
                                                alt="Faq illustration" 
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Right Column: Detailed Explanation & Points List */}
                                        <div className="md:col-span-2 space-y-4">
                                            <p className="text-[13px] text-gray-500 leading-relaxed">
                                                {faq.text}
                                            </p>
                                            
                                            {/* Sub Bulleted Points Layout List */}
                                            <ul className="list-disc pl-5 text-[13px] text-gray-500 space-y-2">
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default FAQ;