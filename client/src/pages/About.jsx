import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const About = () => {

    const teamMembers = [
        { name: 'Jennifer lawrence', role: 'Tech LeaderTech Leader', description: 'Pellentesque dictumst nibh nulla dui at urna leo wisi dui', image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cl-image-1.jpg?v=1613701278" },
        { name: 'Jennifer lawrence', role: 'Manager', description: 'Pellentesque dictumst nibh nulla dui at urna leo wisi dui', image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cl-image-2.jpg?v=1613701278" },
        { name: 'Jennifer lawrence', role: 'Art Director', description: 'Pellentesque dictumst nibh nulla dui at urna leo wisi dui', image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cl-image-3.jpg?v=1613701278" },
        { name: 'Jennifer lawrence', role: 'Design Leader', description: 'Pellentesque dictumst nibh nulla dui at urna leo wisi dui', image: "https://ss-etrostores.myshopify.com/cdn/shop/files/cl-image-4.jpg?v=1613701278" },

    ];

    const features = [
        "Shippng & Returns", "Secure Shopping", "International Shipping", "Affiliates", "Group Sales"
    ];

    return(
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            {/* Navigation Bar Header */}
            <Header />

            {/* Main Content Body Container */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 box-border" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                
                {/* 1. Page Title Header Section */}
                <div className="border-b border-gray-200 pb-4 mb-10">
                    <h1 className="text-2xl font-bold text-[#222222] relative inline-block border-b border-[#ff5a33] bold" style={{ paddingBottom: '7px', paddingTop: '20px' }}>
                        About Us
                    </h1>
                </div>

                {/* 2. Welcome to Shop & Why Choose Us Block Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-16">
                    
                    {/* Welcome to Shop Left Text Column */}
                    <div className="lg:col-span-2 space-y-5" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <h2 className="text-2xl font-semibold text-[#222222] mb-4">Welcome To Shop</h2>
                        <div className="flex flex-col md:flex-row gap-6" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <img 
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop" 
                                alt="Business analytics desk" 
                                className="w-full md:w-[260px] h-[180px] object-cover border border-gray-200 rounded-sm"
                            />
                            <p className="text-[14px] leading-relaxed text-gray-500 flex-1">
                                Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor vel, vel posuere mauris.                                Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor vel, vel posuere mauris.
                                Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor vel, vel posuere mauris.

                            </p>
                        </div>
                        <p className="text-[14px] leading-relaxed text-gray-500 flex-1">
                            Pellentesque semper congue sodales. In consequat, metus eget consequat ornare, augue dolor blandit purus, vitae lacinia nisi tellus in erat. Nulla ac justo eget massa aliquet sodales. Maecenas mattis male suada sem, in fringilla massa dapibus quis. Suspendisse aliquam leo id neque auctor molestie. Etiam ut nulla tellus.
                        </p>
                        <p className="text-[14px] leading-relaxed text-gray-500">
                            Nulla auctor mauris ut dui luctus semper. In hac habitasse platea dictumst. Duis pellentesque ligula a risus suscipit dignissim.
                        </p>
                    </div>

                    {/* Why Choose Us Right List Column */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#222222] mb-6" style={{paddingTop: '20px', paddingBottom: '20px'}}>Why Choose Us</h2>
                        <ul className="space-y-1 border-t border-gray-100">
                            {features.map((feature, idx) => (
                                <li 
                                    key={idx} 
                                    className="flex items-center justify-between py-3 border-b border-gray-100 hover:text-[#ff5a33] cursor-pointer group transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[9px] text-gray-400 group-hover:bg-[#ff5a33] group-hover:text-white transition-colors">
                                            <FaCheck />
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-600 group-hover:text-[#ff5a33] transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                    <FiChevronRight className="text-gray-400 group-hover:text-[#ff5a33] text-[16px]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. Our Team Showcase Component */}
<div className="mb-16">
    {/* Centered Section Header Container */}
    <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center justify-center max-w-[1440px]" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <h2 className="text-2xl font-semibold text-[#222222] mb-3">Our Member</h2>
        <p className="text-[13px] text-gray-400 leading-relaxed">
            Consectetur adipiscing elit. Donec pellentesque venenatis eros, quis aliquet mauris malesuada vel. Donec vitae libero dolor, eget dapibus justo. Aenean facilisis aliquet feugiat. Suspendisse lacinia congue ac sem ut semper.
        </p>
    </div>

    {/* Member Profile Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{paddingBottom: '20px' }}>
        {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
                {/* Image Wrapper */}
                <div className="w-full h-[280px] overflow-hidden bg-gray-50 border border-gray-100 rounded-sm mb-4">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-102"
                    />
                </div>
                
                {/* Member Name */}
                <h3 className="text-[16px] font-bold text-[#222222] hover:text-[#ff5a33] cursor-pointer transition-colors capitalize" style={{ paddingTop: '20px', paddingBottom: '5px' }}>
                    {member.name}
                </h3>
                
                {/* DISTINCT ROLE STYLE: Subtle text tint background, bold, uppercase pill label */}
                <span className="mt-2 mb-3 px-3 py-0.5 bg-gray-100 text-gray-600 rounded-full font-semibold uppercase tracking-wider text-[10px]">
                    {member.role}
                </span>
                
                {/* DISTINCT DESCRIPTION STYLE: Smaller, muted font size with restricted text width layout */}
                <p className="text-[12px] text-gray-400 italic max-w-[200px] leading-relaxed">
                    {member.description}
                </p>
            </div>
        ))}
    </div>
</div>

                {/* 4. Customer Testimonial Statement Quote */}
                <div className="border-t border-gray-100" >
                    <div className="max-w-[1440px] mx-auto text-center">
                        <h2 className="text-xl font-semibold text-[#222222] mb-6 " >Happy customer says</h2>
                        <blockquote className="text-[14px] text-gray-500 italic leading-relaxed relative px-8" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <span className="absolute left-0 top-[-10px] text-4xl text-gray-300 font-serif">“</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, justo non cursus adipiscing, dui nibh scelerisque justo, quis pretium turpis neque eget nulla. Curabitur dictum consectetur metus nec dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, justo non cursus adipiscing, dui nibh scelerisque justo, quis pretium turpis neque eget nulla.
                            <span className="absolute right-0 bottom-[-20px] text-4xl text-gray-300 font-serif">”</span>
                        </blockquote>
                        <div className="mt-6">
                            <span className="text-[14px] font-bold text-[#222222]">— Mama Duo</span>
                            <span className="text-[13px] text-gray-400 ml-2">— Social Media Strategist</span>
                        </div>
                    </div>
                </div>
            </main>
            <div className=" mx-auto w-full box-border" style={{paddingTop: '20px'}}>
                <Footer />
            </div>
        </div>
    );
};

export default About;
