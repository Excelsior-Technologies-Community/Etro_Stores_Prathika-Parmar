import React from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";
import { FaCheck } from "react-icons/fa";


const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$19.99',
            period: 'per month',
            color: '#60ba62',
            features: ["108 Storage", "2 Clients", "5 Active projects", "5 Colors", "Free Goddies", "24/7 Email Support"],
            isFeatured: false
        },
         {
            name: 'Basic',
            price: '$19.99',
            period: 'per month',
            color: '#ff5a33',
            features: ["108 Storage", "2 Clients", "5 Active projects", "5 Colors", "Free Goddies", "24/7 Email Support"],
            isFeatured: false
        },
         {
            name: 'Primium',
            price: '$19.99',
            period: 'per month',
            color: '#7e57c2',
            features: ["108 Storage", "2 Clients", "5 Active projects", "5 Colors", "Free Goddies", "24/7 Email Support"],
            isFeatured: false
        },
         
        {
            name: 'Life Time',
            price: '$19.99',
            period: 'per month',
            color: '#4fc3f7',
            features: ["108 Storage", "2 Clients", "5 Active projects", "5 Colors", "Free Goddies", "24/7 Email Support"],
            isFeatured: true
        }
    ];

    return(
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            {/* Header Navigation */}
            <Header />

            {/* Main Content Layout Container */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-16 box-border" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                
                <div className="border-b border-gray-200 pb-4 mb-10">
                    <h1 className="text-2xl font-bold text-[#222222] relative inline-block border-b border-[#ff5a33] bold" style={{ paddingBottom: '7px', paddingTop: '2px' }}>
                        Page Pricing
                    </h1>
                </div>


                {/* 4-Column Pricing Card Grid Deck */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10" style={{paddingTop: '10px', paddingBottom: '20px'}}>
                    {plans.map((plan, index) => {
                        return (
                            <div 
                                key={index} 
                                className="border border-gray-200 rounded-sm bg-white flex flex-col shadow-xs overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                            >
                                {/* Plan Header Layer */}
                                <div 
                                    className="py-5 text-center text-white"
                                    style={{ backgroundColor: plan.isFeatured ? '#fcfcfc' : plan.color, borderBottom: plan.isFeatured ? '1px solid #e5e7eb' : 'none' }}
                                >
                                    <h3 
                                        className="text-2xl font-semibold tracking-wide"
                                        style={{ color: plan.isFeatured ? '#222222' : '#ffffff' , padding:'10px'}}
                                    >
                                        {plan.name}
                                    </h3>
                                </div>

                                {/* Features List Layer */}
                                <ul className="flex-1 px-8 py-8 space-y-8  border-b border-gray-100 bg-[#ffffff] " style={{padding:'5px'}}>
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-[13px] text-gray-500 font-medium" style={{paddingLeft: '100px'}}>
                                            <span className="text-[10px] text-gray-400 flex-shrink-0">
                                                <FaCheck />
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Price Information & Action Button Layer */}
                                <div className="p-6 text-center bg-[#fcfcfc] flex flex-col items-center justify-center" style={{paddingTop: '10px'}}>
                                    <div className="mb-5">
                                        <span className="text-4xl font-extrabold text-[#222222] tracking-tight">
                                            {plan.price}
                                        </span>
                                        <p className="text-[12px] text-gray-400 italic mt-1" style= {{paddingBottom: '5px'}}>
                                            {plan.period}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        type="button"
                                        className="w-full font-bold uppercase text-[12px] tracking-wider py-3.5 transition-colors duration-300 rounded-xs shadow-xs text-white"
                                        style={{ backgroundColor: plan.color, padding: '10px' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#1c2e3a';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = plan.color;
                                        }}
                                    >
                                        Buy Now
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Footer Layout */}
            <Footer />
        </div>
    );
};

export default Pricing;