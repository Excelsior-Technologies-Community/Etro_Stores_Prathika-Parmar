import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        emial: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send data to a server
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            emial: '',
            phone: '',
            message: ''
        });
    };

    const branches = [
        {
            title: "MAIN OFFICE",
            address: "Sed ut perspiciatis unde omnis 123456 Street Name, Los Angeles",
            emails: ["Support1@shopname.com", "Support2@shopname.com"],
            phones: ["0123-4567-8910", "0123-4567-8910"]
        },
        {
            title: "BRANCH 01",
            address: "Sed ut perspiciatis unde omnis 123456 Street Name, Los Angeles",
            emails: ["Support1@shopname.com", "Support2@shopname.com"],
            phones: ["0123-4567-8910", "0123-4567-8910"]
        },
        {
            title: "BRANCH 02",
            address: "Sed ut perspiciatis unde omnis 123456 Street Name, Los Angeles",
            emails: ["Support1@shopname.com", "Support2@shopname.com"],
            phones: ["0123-4567-8910", "0123-4567-8910"]
        },
        {
            title: "BRANCH 03",
            address: "Sed ut perspiciatis unde omnis 123456 Street Name, Los Angeles",
            emails: ["Support1@shopname.com", "Support2@shopname.com"],
            phones: ["0123-4567-8910", "0123-4567-8910"]
        },
    ];
     return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            {/* Header Component */}
            <Header />

            {/* Main Content Body Container Layout */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 box-border" style={{ paddingTop: '10px',paddingLeft: '40px', paddingRight: '40px' }}>
                
                {/* 1. Page Title Header Section */}
                <div className="border-b border-gray-200 pb-4 mb-10">
                    <h1 className="text-2xl font-bold text-[#222222] relative inline-block border-b border-[#ff5a33] bold" style={{ paddingBottom: '7px', paddingTop: '20px' }}>
                        Contact Us
                    </h1>
                </div>

                {/* 1. Page Map & Form Grid Layout Block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    
                   {/* Left Frame Box: Updated with Fresh Google Maps Embed Link */}
<div className="w-full h-[380px] bg-gray-100 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
    <iframe 
        title="Office Map Location"
        /* PASTE YOUR FRESH EMBED URL IN THE SRC PROPERTY BELOW */
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093647!2d-122.41941548468112!3d37.77492957975932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807bedb4d3b5%3A0x7df6efce9d3dae37!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1622000000000!5m2!1sen!2sus"
        className="w-full h-full border-0"
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

                    {/* Right Form Box: Exact Video Layout Match */}
<form onSubmit={handleSubmit} className="w-full space-y-6">
    
    {/* Row 1: Name and Email Side-by-Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
            <label className="text-[12px] text-gray-400 mb-1">Your Name...</label>
            <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 text-[14px] outline-none focus:border-[#ff5a33] text-gray-700 transition-colors bg-transparent"
                required
            />
        </div>
        <div className="flex flex-col">
            <label className="text-[12px] text-gray-400 mb-1">Your Email...</label>
            <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 pb-2 text-[14px] outline-none focus:border-[#ff5a33] text-gray-700 transition-colors bg-transparent"
                required
            />
        </div>
    </div>

    {/* Row 2: Phone Number */}
    <div className="flex flex-col" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <label className="text-[12px] text-gray-400 mb-1">Your Phone Number...</label>
        <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-gray-300 pb-2 text-[14px] outline-none focus:border-[#ff5a33] text-gray-700 transition-colors bg-transparent"
        />
    </div>

    {/* Row 3: Message Textarea */}
    <div className="flex flex-col pt-2">
        <label className="text-[13px] text-gray-400 mb-1 font-medium">Message</label>
        <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-200 p-3 text-[14px] outline-none focus:border-[#ff5a33] text-gray-700 transition-colors bg-transparent resize-none h-[120px]"
            required
        ></textarea>
    </div>
    
    {/* Submit Button Section */}
    <div className="pt-2" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <button 
            type="submit"
            className="bg-[#1c2e3a] hover:bg-[#ff5a33] text-white font-bold uppercase text-[12px] tracking-wider px-8 py-3.5 transition-colors duration-300 rounded-xs shadow-sm" style={{ padding: '5px'}}
        >
            Send Email
        </button>
    </div>
</form>
                </div>

                {/* 2. Introductory Text Blocks Description Content */}
                <div className="w-full max-w-[662px] mb-16 text-left" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    <p className="text-[13.5px] leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non erat libero vulputate adipiscing cursus eu, suscipit id nulla. Donec gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
                    </p>
                </div>

                {/* 3. Four Column Locations Grid Deck Block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-12" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                    {branches.map((branch, idx) => (
                        <div key={idx} className="space-y-5 text-left">
                            
                            {/* Branch Title Row */}
                            <div className="flex items-start gap-3">
                                <FiMapPin className="text-gray-400 text-[18px] mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-[13.5px] font-bold text-[#222222] tracking-wide uppercase mb-1">
                                        {branch.title}
                                    </h3>
                                    <p className="text-[12.5px] text-gray-400 leading-relaxed">
                                        {branch.address}
                                    </p>
                                </div>
                            </div>

                            {/* Emails Sub-Row */}
                            <div className="flex items-start gap-3" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                <FiMail className="text-gray-400 text-[16px] mt-0.5 flex-shrink-0" />
                                <div className="text-[12.5px] text-gray-400 space-y-0.5">
                                    <p className="font-medium text-gray-500">EMAIL</p>
                                    {branch.emails.map((email, eIdx) => (
                                        <p key={eIdx} className="hover:text-[#ff5a33] cursor-pointer transition-colors">
                                            {email}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Phones Sub-Row */}
                            <div className="flex items-start gap-3">
                                <FiPhone className="text-gray-400 text-[16px] mt-0.5 flex-shrink-0" />
                                <div className="text-[12.5px] text-gray-400 space-y-0.5">
                                    <p className="font-medium text-gray-500">PHONE</p>
                                    {branch.phones.map((phone, pIdx) => (
                                        <p key={pIdx}>{phone}</p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </main>

            <div className=" mx-auto w-full box-border" style={{paddingTop: '20px'}}>
                <Footer/>
                </div>
        </div>
     );

};

export default Contact;