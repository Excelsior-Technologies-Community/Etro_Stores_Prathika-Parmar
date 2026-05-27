import React from "react";
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const LookBook = () => {

    const collections = [
        {
            title: 'Summer Vaction',
            description: 'The Spring Summer 2018 collection is based on a road trip through Californa. Drawing on the influences of surfer culture and the vibrant colors of the streets, the collection nods to a 50s aesthetic width clean tailored lines and more fiited sillhouetes',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/lb_1.png?v=1613701899',
            link: '#'
        },
        {
            title: 'Auturm Collection',
            description: 'The Spring Summer 2018 collection is based on a road trip through Californa. Drawing on the influences of surfer culture and the vibrant colors of the streets, the collection nods to a 50s aesthetic width clean tailored lines and more fiited sillhouetes',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/lb_2.jpg?v=1613701899',
            link: '#'
        },
        {
            title: 'Flower full color',
            description: 'The Spring Summer 2018 collection is based on a road trip through Californa. Drawing on the influences of surfer culture and the vibrant colors of the streets, the collection nods to a 50s aesthetic width clean tailored lines and more fiited sillhouetes',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/lb_3.jpg?v=1613701899',
            link: '#'
        },
        {
            title: 'Last Spring Collection',
            description: 'The Spring Summer 2018 collection is based on a road trip through California. Drawing on the influences of surfer culture and the vibrant colours of the streets, the collection nods to a 50s aesthetic with clean tailored lines and more fitted silhouettes.',
            image: 'https://ss-etrostores.myshopify.com/cdn/shop/files/lb_4.jpg?v=1613701899',
            link: '#'
        },
    ];

    return(
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            {/* Navigation Header */}
            <Header />

            {/* Main Content View Body Area */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-4 box-border mb-12" style={{ paddingLeft: '40px', paddingRight: '40px',paddingTop: '40px', paddingBottom: '40px' }}>
                
                <div className="border-b border-gray-200 pb-4 mb-10">
                    <h1 className="text-2xl font-bold text-[#222222] relative inline-block border-b border-[#ff5a33] bold" style={{ paddingBottom: '7px', paddingTop: '2px' }}>
                        Page Lookbook
                    </h1>
                </div>

                {/* Lookbook Sections Stack Wrapper */}
                <div className="space-y-0" >
                    {collections.map((item, index) => {
                        // Check if the current row index is odd to toggle layout alignment alternation
                        const isEven = index % 2 === 0;

                        return (
                            <div 
                                key={index} 
                                className={`flex flex-col lg:flex-row items-center w-full min-h-[500px] border-b border-gray-100 last:border-none gap-8 py-10 lg:py-0`}
                            >
                                {/* TEXT BLOCK: Positioned left on even rows, ordered right on odd rows via Tailwind 'order' utilities */}
                                <div className={`w-full lg:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-20 text-left space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                                    <h2 className="text-4xl font-light tracking-wide text-[#222222] font-serif lg:text-5xl">
                                        {item.title}
                                    </h2>
                                    <p className="text-[14px] text-gray-400 leading-relaxed " style={{paddingTop: '20px', paddingBottom: '20px'}}>
                                        {item.description}
                                    </p>
                                    <div className="pt-4">
                                        <a 
                                            href={item.link} 
                                            className="inline-block bg-[#ff5a33] hover:bg-[#1c2e3a] text-white font-bold text-[12px] uppercase tracking-wider px-8 py-3.5 transition-colors duration-300 rounded-full shadow-sm" style={{padding: '7px'}}
                                        >
                                            View Collection
                                        </a>
                                    </div>
                                </div>

                                {/* IMAGE BLOCK: Positioned right on even rows, ordered left on odd rows */}
                                <div className={`w-full lg:w-1/2 h-[450px] lg:h-[600px] bg-gray-50 overflow-hidden ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                                        loading="lazy"
                                    />
                                </div>

                            </div>
                        );
                    })}
                </div>

            </main>
            <Footer/>
        </div>
    );

};

export default LookBook;