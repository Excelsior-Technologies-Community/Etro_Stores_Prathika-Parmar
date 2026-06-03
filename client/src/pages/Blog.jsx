import {React, useState } from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer/Footer";
import { FiChevronLeft, FiChevronRight  } from "react-icons/fi";

const Blog = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const postsPerPage = 4;

    const blogPosts = [

        {
            id: 1,
            title: "Thurmond's 1948 Presidential Ipsum",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/1_345x@2x.jpg?v=1508315774",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 2,
            title: "Opposed using 'Conte Ipsum",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/3_345x@2x.jpg?v=1508316031",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 3,
            title: "Classical Vanden Nieuwendijk Ipsum",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/12_345x@2x.jpg?v=1508315996",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 4,
            title: "Blurring With The Mass Media Ipsum",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/10_345x@2x.jpg?v=1508315956",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 5,
            title: "Vanden Jordy Nieuwendijk",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/9.jpg?v=1508315931",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 6,
            title: "Vivamus Quis Ornare Nisl",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/5.jpg?v=1508315903",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 7,
            title: "Lore Mase Poka",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/6.jpg?v=1508315870",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        },
        {
            id: 8,
            title: "Combine Your Favorite Fashion",
            author: "STORE ETRO",
            date: "OCTOBER 18, 2017",
            image: "https://ss-etrostores.myshopify.com/cdn/shop/articles/Blog.jpg?v=1508315809",
            excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using..."
        }
    ];

    const recentBlogs = [
        "Thurmond's 1948 Presidential Ipsum",
        "Opposed using 'Conte Ipsum",
        "Classical Vanden Nieuwendijk Ipsum",
        "Blurring With The Mass Media Ipsum",
        "Vanden Jordy Nieuwendijk",
        "Vivamus Quis Ornare Nisl"
    ];

    const bestSellers = [

        {name: 'Lacinia Rhoncus Velit' , price: 55.00, oldPrice: 65.00, img: 'https://ss-etrostores.myshopify.com/cdn/shop/products/40_486d0933-6796-4dfd-a6d8-4dca2fb5192a_85x110.jpg?v=1571713028' },
        {name: 'Viverra Nec Purus' , price: 111.00, oldPrice: 160.00, img: 'https://ss-etrostores.myshopify.com/cdn/shop/products/32_4faf1578-88c8-4897-8144-ac438ec9b7cb_85x110.jpg?v=1571713028'},
        {name: 'Officia Picanha' , price: 68.00, oldPrice: 70.00, img: 'https://ss-etrostores.myshopify.com/cdn/shop/products/7_804ae7f0-f081-47a8-8584-10ae14862479_85x110.jpg?v=1571713028'}
    ];
     
    const popularTags = [

        "Cluom Pic", "Electronic", "Lampasar", "Oringama", "Summer"
    ];

    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            {/* Breadcrumb Section */}
            <div className="w-full bg-[#f9fafb] border-b border-gray-200 py-4" style={{paddingTop: '20px', paddingLeft: '40px'}}>
                <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-[#222222] uppercase tracking-wide">News - Electronic</h1>
                    <div className="text-[13px] text-gray-500 font-medium" style={{paddingRight: '40px'}}>
                        <span className="hover:text-[#ff5a33] cursor-pointer transition-colors">Home</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-[#ff5a33] cursor-pointer transition-colors">News</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-800">Electronic</span>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-10 lg:px-10 box-border flex flex-col lg:flex-row gap-10" style={{paddingLeft: '40px', paddingRight: '40px', paddingTop: ' 20px', paddingBottom: '20px'}}>
                
                {/* ================= LEFT SIDEBAR ================= */}
                <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-10">
                    
                    {/* 1. Recent Blogs */}
                    <div className="text-left">
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">Recent Blogs</h2>
                        <ul className="space-y-3" style={{paddingTop: '10px'}}>
                            {recentBlogs.map((title, idx) => (
                                <li key={idx}>
                                    <a href="#" className="text-[13.5px] text-gray-500 border-b border-gray-200 hover:text-[#ff5a33] transition-colors leading-snug block" style={{paddingTop: '2px'}}>
                                        {title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 2. Best Sellers */}
                    <div className="text-left" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">Best Sellers</h2>
                        <div className="space-y-4">
                            {bestSellers.map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-center border-b border-gray-50 pb-3 last:border-none last:pb-0">
                                    <div className="w-16 h-16 border border-gray-100 flex items-center justify-center p-1 bg-white">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-gray-700 hover:text-[#ff5a33] cursor-pointer transition-colors truncate w-32">{item.name}</h4>
                                        <div className="flex gap-2 items-center text-[13px] mt-1">
                                            <span className="text-[#ff5a33] font-bold">${item.price.toFixed(2)}</span>
                                            {item.oldPrice && <span className="text-gray-400 line-through text-[11.5px]">${item.oldPrice.toFixed(2)}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. Banner Ad Placeholder */}
                    <div className="w-full bg-gray-100 border border-gray-200 flex flex-col items-center justify-center h-[370px] text-center p-6 group cursor-pointer overflow-hidden relative">
                        <div className="z-10 bg-white/40 p-4 rounded shadow-sm">
                            <h3 className="text-lg font-bold text-[#222222]">BANNER ADS</h3>
                            <p className="text-gray-500 text-sm mt-1">270 x 370</p>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" 
                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
                            alt="Ad Banner"
                        />
                    </div>

                    {/* 4. Popular Tags */}
                    <div className="text-left" style={{paddingTop: '20px'}}>
                        <h2 className="text-[14px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">Popular Tags</h2>
                        <div className="flex flex-wrap gap-2" style={{paddingTop: '5px'}}>
                            {popularTags.map((tag, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-3 py-1.5 border border-gray-200 text-[12px] text-gray-600 hover:text-[#ff5a33] hover:border-[#ff5a33] cursor-pointer transition-all rounded-xs font-medium" style={{padding: '2px'}}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 flex flex-col">
                    
                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {currentPosts.map((post) => (
                            <article key={post.id} className="flex flex-col text-left group">
                                {/* Image Container */}
                                <div className="w-full h-[280px] overflow-hidden mb-5 rounded-xs relative bg-gray-100">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Hover Overlay Icon (Optional nice touch for blogs)
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white text-[#222] rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                        </div>
                                    </div> */}
                                </div>

                                {/* Meta Data */}
                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider mb-2" style={{paddingTop: '5px'}}>
                                    <span className="text-gray-500">BY</span>
                                    <span className="text-[#ff5a33] hover:underline cursor-pointer">{post.author}</span>
                                    <span className="text-gray-300 mx-1">/</span>
                                    <span className="text-gray-500">{post.date}</span>
                                </div>

                                {/* Title */}
                                <h2 className="text-xl lg:text-2xl font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#ff5a33] transition-colors cursor-pointer">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-[13.5px] text-gray-500 leading-relaxed font-light">
                                    {post.excerpt}
                                </p>
                            </article>
                        ))}
                    </div>

                    {/* Pagination Footer */}
                    {totalPages > 1 && (
                        <div className="w-full flex items-center justify-center gap-4 mt-16 pt-8" style={{paddingTop: '20px'}}> 
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded hover:bg-[#ff5a33] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-gray-100 disabled:hover:text-gray-600"
                            >
                                <FiChevronLeft />
                            </button>

                            <span className="text-[13px] text-gray-500 font-medium">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded hover:bg-[#ff5a33] hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-gray-100 disabled:hover:text-gray-600"
                            >
                                <FiChevronRight />
                            </button>
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
