import { React, useState, useEffect } from 'react';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';
import { FiGrid, FiMonitor, FiSmartphone, FiShoppingBag, FiBatteryCharging, FiCheckCircle, FiSearch, FiHeart, FiShoppingCart} from 'react-icons/fi';

const TopDeals = () => {

    // FIXED: Removed the accidental space before 'SHOW ALL'
    const [ activeTab, setActiveTab ] = useState('SHOW ALL');
    const [ timeLeft, setTimeLeft ] = useState({
        days: 1307,
        hours: 12,
        mins: 48,
        secs: 33
    });

    useEffect(() => {
        const timer = setInterval(() =>{
            setTimeLeft(prev => {
                let { days, hours, mins, secs } = prev;
                secs--;
                if (secs < 0) { secs = 59; mins--; }
                if (mins < 0) { mins = 59; hours--; }
                if (hours < 0) { hours = 23; days--; }
                return { days, hours, mins, secs };
            });
        }, 1000);

        return ()  => clearInterval(timer);
        
    }, []);

    const tabs = [
        // FIXED: Removed quotes around icon components and fixed FiMonitor typo
        {id: "SHOW ALL", name: " Show All", icon: FiGrid},
        {id: "ELECTRONIC", name: "Electronic", icon: FiMonitor}, 
        {id: "HITECH", name: " Hitech", icon: FiSmartphone},
        {id: "FASHION", name: "Fashion", icon: FiShoppingBag},
        {id: "FURNICOM", name: "Furnicom", icon: FiBatteryCharging},
        {id: "SHOES", name: " Shoes", icon: FiCheckCircle}
    ];

    const deals = [
        {id: 1, name: 'Acer Aspire AIO', price: 311.00 , oldPrice: 331.00 , discount: '-6%', category: 'Hitech', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/38_eda164b8-b341-4403-899a-7d7fcc8dfeaa_300x300@2x.jpg?v=1571713027'},
        {id: 2, name: 'Alcatra Turducken', price: 88.00, oldPrice: 98.00 , discount: '-10%', category: 'Fashion', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/9_9fd1e1ee-24dd-411a-b325-97790e645c2e_300x300@2x.jpg?v=1571713026'},
        {id: 3, name: 'Aliquip Bilton', price: 231.00, oldPrice: 260.00, discount: '-11%', category: 'Shoes', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/4_23d0c0c7-8257-426c-99dc-f56dbbe69af7_300x300@2x.jpg?v=1571713026'},
        {id: 4, name: 'Andjaeger Eiusmo', price: 161.00, oldPrice:200.00 , discount: '-20%', category: 'Furnicom', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/1_e7518f10-b1ae-42f5-8181-17ca8801e7d1_300x300@2x.jpg?v=1571713026'},
        {id: 5, name: 'Andouille Ribeye', price:120.00 , oldPrice:134.00 , discount: '-10%', category: 'Fashion', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/2_a9a4e0be-6dd7-4f67-a5b6-caf32bbdee60_300x300@2x.jpg?v=1571713026'},
        {id: 6, name: 'Bolore Ieserunt', price: 76.00, category: 'Shoes', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/5_9c66165b-54dd-4da2-ae3d-7bd8e192d632_300x300@2x.jpg?v=1571713028'},
        {id: 7, name: 'Boudin Tenderloin', price: 85.00, oldPrice: 96.00 , discount: '-11%', category: 'Furnicom', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/2_5d50da98-98e3-499f-9657-4db19422760e_300x300@2x.jpg?v=1571713026'},
        {id: 8, name: 'Brisket Voluptab', price: 34.00, oldPrice: 37.00 , discount: '-8%', category: 'Electronic', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/05_5f9a1061-81d1-411f-a4aa-7293f93ba6b5_300x300@2x.jpg?v=1571713028'},
        {id: 9, name: 'Burgdog Genball', price: 125.00 , oldPrice: 153.00 , discount: '-18%', category: 'Shoes', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/2_d702d993-5be5-42cd-843d-e72088ba4466_300x300@2x.jpg?v=1571713026'},
        {id: 10, name: 'Capicola Insirloin', price: 86.00, oldPrice:  98.00, discount: '-12%', category: 'Hitech', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/38_eda164b8-b341-4403-899a-7d7fcc8dfeaa_300x300@2x.jpg?v=1571713027'},
        {id: 11, name: 'CyberpowerPC Gamer', price: 355.00, oldPrice: 358.00 , discount: '-1%', category: 'Electronic', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/4_96da3d8c-1d2a-4fbb-af46-15e09a58067e_300x300@2x.jpg?v=1571713027'},
        {id: 12, name: 'Horem Porche', price: 111.00, oldPrice: 160.00, discount: '-31%', category: 'Hitech', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/30_300x300@2x.jpg?v=1571713027'},
        {id: 13, name: 'Leberkas Tenderloin', price: 77.00, oldPrice: 90.00, discount: '-14%', category: 'Shoes', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/02_300x300@2x.jpg?v=1571713028'},
        {id: 14, name: 'Nonelit Estbacon', price:212.00 , oldPrice: 242.00, discount: '-12%', category: 'Electronic', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/11_300x300@2x.jpg?v=1571713027'},
        {id: 15, name: 'Porchetta Ribsbee', price: 154.00 , oldPrice: 167.00 , discount: '-8%', category: 'Electronic', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/55_300x300@2x.jpg?v=1571713027    '},
        {id: 16, name: 'Prosciutto Porchet', price: 54.00 , oldPrice: 63.00 , discount: '-14%', category: 'Fashion', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/6_d90b489f-91ca-4a00-ba22-48d26d7516f0_300x300@2x.jpg?v=1571713026'}
    ];

    // FIXED: Changed deals.category to deal.category, and added .toUpperCase() to match the tab IDs perfectly
    const filteredDeals = activeTab === 'SHOW ALL' 
        ? deals 
        : deals.filter(deal => deal.category.toUpperCase() === activeTab);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 box-border" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop:'40px', paddingBottom:'40px' }}>
                
                {/* 1. Hero Promotional Banner */}
                <div className="w-full bg-[#fbd431] h-[180px] md:h-[220px] rounded-sm flex items-center justify-between px-8 md:px-20 mb-10 overflow-hidden relative shadow-sm">
                    <div className="z-10 flex flex-col items-start text-[#e43a36]" style={{ padding: '100px'}}>
                        <h2 className="text-4xl md:text-6xl font-extrabold italic tracking-tighter leading-none">
                            Sale <span className="text-5xl md:text-7xl">70%</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold uppercase tracking-widest mt-1 text-[#222]">
                            OFF SELECTED<br/>STYLE
                        </p>
                        
                    </div>
                    <img 
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=500&auto=format&fit=crop" 
                        alt="Promo Phone" 
                        className="w-[280px] md:w-[450px] absolute right-[-50px] md:right-10 top-1/2 transform -translate-y-1/2 object-contain mix-blend-multiply opacity-90"
                        style={{padding: '100px'}}
                    />
                </div>

                {/* 2. Horizontal Category Tabs */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 rounded-sm overflow-hidden bg-[#fafafa]" style={{paddingTop: '20px'}}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex flex-col items-center justify-center py-6 px-4 border-r border-gray-200 last:border-none transition-all duration-300 ${
                                    isActive 
                                    ? 'bg-[#ff5a33] text-white shadow-inner' 
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-[#ff5a33]'
                                }`}
                                style={{padding: '10px'}}
                            >
                                <Icon className={`text-2xl mb-2 transition-transform ${isActive ? 'scale-110' : ''}`} />
                                <span className="text-[12px] font-bold uppercase tracking-wider">{tab.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* 3. Product Deals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left" style={{paddingTop: '30px'}}>
                    {filteredDeals.map((deal) => (
                        <div key={deal.id} className="border border-gray-100 rounded-xs bg-white flex flex-col relative group overflow-hidden shadow-xs hover:shadow-md transition-all">
                            
                            {/* Discount Badge */}
                            {deal.discount && (
                                <div className="absolute right-3 top-3 z-10 bg-[#e3323e] text-white text-[11px] font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                                    {deal.discount}
                                </div>
                            )}

                            {/* Image & Countdown Overlay Container */}
                            <div className="w-full h-[260px] bg-white p-6 relative overflow-hidden flex items-center justify-center border-b border-gray-50">
                                <img 
                                    src={deal.image} 
                                    alt={deal.name} 
                                    className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105" 
                                />
                                
                                {/* Countdown Timer Row */}
                                <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-center gap-1.5 z-10">
                                    {[
                                        { label: 'DAYS', value: timeLeft.days },
                                        { label: 'HOURS', value: timeLeft.hours.toString().padStart(2, '0') },
                                        { label: 'MINS', value: timeLeft.mins.toString().padStart(2, '0') },
                                        { label: 'SECS', value: timeLeft.secs.toString().padStart(2, '0') }
                                    ].map((unit, idx) => (
                                        <div key={idx} className="bg-[#444444]/90 backdrop-blur-sm flex flex-col items-center justify-center w-[46px] py-1.5 rounded-xs shadow-sm" style={{padding: '5px'}}>
                                            <span className="text-white text-[15px] font-bold leading-none">{unit.value}</span>
                                            <span className="text-gray-300 text-[8px] font-bold tracking-widest mt-0.5">{unit.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Action Icons (Hidden until hovered) */}
                                <div className="absolute right-[-50px] group-hover:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
                                    <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiShoppingCart /></button>
                                    <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiHeart /></button>
                                    <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiSearch /></button>
                                </div>
                            </div>

                            {/* Product Info Footer */}
                            <div className="p-5 bg-white flex flex-col" style={{padding: '20px'}}>
                                <h3 className="text-[13.5px] font-bold text-gray-700 hover:text-[#ff5a33] transition-colors truncate cursor-pointer mb-1.5">
                                    {deal.name}
                                </h3>
                                <div className="flex gap-2 items-center">
                                    <span className="text-[#ff5a33] font-extrabold text-[16px]">${deal.price.toFixed(2)}</span>
                                    {deal.oldPrice && (
                                        <span className="text-gray-400 text-[13px] line-through font-medium">${deal.oldPrice.toFixed(2)}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State Fallback */}
                {filteredDeals.length === 0 && (
                    <div className="w-full py-16 text-center border border-dashed border-gray-200 text-gray-500 mt-4 rounded-sm">
                        <p className="text-[15px] font-medium">No active deals found in the <strong>{activeTab}</strong> category right now.</p>
                    </div>
                )}

            </main>
            <Footer />
        </div>
    );

};

export default TopDeals;