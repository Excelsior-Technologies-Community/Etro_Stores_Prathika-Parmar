import React, { useState, useEffect } from "react";
import Header from "../components/navbar/Header"; // Adjust path if needed
import Footer from "../components/Footer/Footer"; // Adjust path if needed
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/wishlist/1'); // Fetching for user 1
                const data = await response.json();
                setWishlistItems(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch wishlist", error);
                setLoading(false);
            }
        };
        fetchWishlist();
    }, []);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12">
                <h1 className="text-2xl font-bold text-[#222222] border-b border-gray-200 pb-4 mb-8 uppercase tracking-wider" style={{padding: '20px'}}>
                    My Wishlist
                </h1>

                {loading ? (
                    <div className="text-center py-12 text-gray-500">Loading your wishlist...</div>
                ) : wishlistItems.length === 0 ? (
                    <div className="text-center py-16 border border-dashed border-gray-300 rounded-sm" style={{padding: '100px'}}>
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Your wishlist is empty</h3>
                        <p className="text-sm text-gray-500">Save items you love here to buy them later!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{padding: '20px'}}>
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="border border-gray-100 rounded-xs bg-white p-4 flex flex-col relative group hover:shadow-md transition-all">
                                <div className="w-full h-[200px] flex items-center justify-center mb-4">
                                    <img src={item.image} alt={item.product_name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <h3 className="text-[14px] font-bold text-gray-700 truncate" style={{paddingLeft: '10px'}}>{item.product_name}</h3>
                                <p className="text-[#ff5a33] font-extrabold text-[15px] mt-1" style={{paddingLeft: '10px'}}>${Number(item.price).toFixed(2)}</p>
                                
                                {/* Quick Action Buttons */}
                                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50" style={{paddingTop: ' 10px'}}>
                                    <button className="flex-1 bg-[#ff5a33] text-white text-[12px] uppercase font-bold py-2 rounded-xs hover:bg-[#1c2e3a] transition-colors flex items-center justify-center gap-2" style={{padding: '5px'}}>
                                        <FiShoppingCart /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default WishlistPage;