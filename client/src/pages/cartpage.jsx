import React, { useState, useEffect } from "react";
import Header from "../components/navbar/Header"; // Adjust path if needed
import Footer from "../components/Footer/Footer"; // Adjust path if needed
import { FiTrash2, FiCreditCard } from "react-icons/fi";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cart/1');                
                const data = await response.json();
                setCartItems(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch cart", error);
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    // Calculate total price of all items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-10">
                
                {/* Left Side: Cart Items */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-[#222222] border-b border-gray-200 pb-4 mb-6 uppercase tracking-wider" style={{padding: '10px'}}>
                        Shopping Cart
                    </h1>

                    {loading ? (
                        <div className="text-center py-12 text-gray-500">Loading your cart...</div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-center py-16 border border-dashed border-gray-300 rounded-sm" style={{padding: '100px'}}>
                            <h3 className="text-lg font-bold text-gray-700 mb-2">Your cart is currently empty</h3>
                            <button className="mt-4 bg-[#ff5a33] text-white px-6 py-2 text-[13px] font-bold rounded-xs hover:bg-[#1c2e3a] transition-colors">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 border border-gray-100 p-4 rounded-xs shadow-xs bg-white">
                                    <div className="w-24 h-24 border border-gray-50 p-2 flex items-center justify-center flex-shrink-0">
                                        <img src={item.image} alt={item.product_name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    
                                    <div className="flex-1">
                                        <h3 className="text-[15px] font-bold text-gray-800">{item.product_name}</h3>
                                        <p className="text-gray-500 text-[13px] mt-1">Quantity: {item.quantity}</p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[#ff5a33] font-extrabold text-[16px]">${Number(item.price).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Order Summary */}
                {cartItems.length > 0 && (
                    <div className="w-full lg:w-[350px]" style={{paddingTop: '100px', paddingLeft: '80px'}}>
                        <div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-xs sticky top-8" style={{padding: '10px'}}>
                            <h2 className="text-[16px] font-bold text-[#222222] border-b border-gray-200 pb-3 mb-4 uppercase tracking-wider">
                                Order Summary
                            </h2>
                            
                            <div className="space-y-3 text-[14px] text-gray-600 mb-4 border-b border-gray-200 pb-4">
                                <div className="flex justify-between">
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span className="font-bold text-gray-800">${calculateTotal()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[16px] font-bold text-gray-800">Total</span>
                                <span className="text-[20px] font-extrabold text-[#ff5a33]">${calculateTotal()}</span>
                            </div>

                            <button className="w-full bg-[#1c2e3a] text-white text-[14px] uppercase font-bold py-3.5 rounded-xs hover:bg-[#ff5a33] transition-colors flex items-center justify-center gap-2" style={{padding: '5px'}}>
                                <FiCreditCard /> Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}

            </main>

            <Footer />
        </div>
    );
};

export default CartPage;