import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';

// --- SUB-COMPONENT: Accepts the new onAddToCart and onAddToWishlist props ---
const CategoryBlock = ({ data, onAddToCart, onAddToWishlist }) => {
    const isRightAligned = data.align === 'right';

    return (
        <div className="w-full mb-12" style={{ paddingTop: '40px' }}>
            
            {/* --- HEADER ROW --- */}
            {isRightAligned ? (
                /* =========================================
                   TECHNOLOGY LAYOUT (RIGHT ALIGNED TAB)
                   ========================================= */
                <div className="flex flex-col md:flex-row items-center border-b-[2px] border-gray-200 mb-6 w-full">
                    
                    {/* 1. Category Links (FAR LEFT) */}
                    <div className="hidden lg:flex items-center gap-4 text-[13px] font-medium text-gray-500">
                        {data.links.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <a href="#" className="hover:text-[#ff5a33] transition-colors">{link}</a>
                                {idx !== data.links.length - 1 && <span className="text-gray-300">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                    
                    {/* 2. Middle Spacer (Pushes everything else to the right) */}
                    <div className="flex-1"></div>
                    
                    {/* 3. See All Link */}
                    <div className={`flex-1 flex items-center px-6 ml-6 ${isRightAligned ? 'justify-end' : 'justify-start'}`}>
                        <a href="#" className="text-gray-500 text-[12px] hover:text-[#ff5a33] transition-colors flex items-center gap-1 font-bold uppercase" style={{paddingRight:'20px'}}>
                            See All <span className="text-[10px]">▶</span>
                        </a>
                    </div>

                    {/* 4. Colored Title Tab */}
                    <div 
                        className="text-white px-8 py-3 text-[16px] font-extrabold uppercase tracking-wide flex-shrink-0 relative flex items-center"
                        style={{ backgroundColor: data.color, padding:'10px 20px' }}
                    >
                        {data.title}
                        
                        <svg 
                            className={`absolute top-0 h-full w-4 ${isRightAligned ? '-left-4' : '-right-4'}`} 
                            viewBox="0 0 16 48" 
                            preserveAspectRatio="none"
                        >
                            <path 
                                d={isRightAligned ? "M16 0 L0 48 L16 48 Z" : "M0 0 L16 48 L0 48 Z"} 
                                fill={data.color} 
                            />
                        </svg>
                    </div>
                </div>
            ) : (
                /* =========================================
                   FASHION / FURNITURE LAYOUT (LEFT ALIGNED)
                   ========================================= */
                <div className="flex flex-col md:flex-row items-center border-b-[2px] border-gray-200 mb-6 w-full">
                    
                    {/* 1. Colored Title Tab (FAR LEFT) */}
                    <div 
                        className="text-white px-8 py-[10px] text-[16px] font-extrabold uppercase tracking-wide flex-shrink-0 relative"
                        style={{ backgroundColor: data.color, padding:'10px 20px' }}
                    >
                        {data.title}
                        {/* Slant Effect */}
                        <div 
                            className="absolute top-0 w-4 h-full -right-4"
                            style={{ backgroundColor: data.color, clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                        ></div>
                    </div>

                    {/* 2. See All (LEFT SIDE, next to Tab) */}
                    <div className="flex items-center pl-6">
                        <a href="#" className="text-gray-500 text-[12px] hover:text-[#ff5a33] transition-colors flex items-center gap-1 font-bold uppercase" style={{paddingLeft:'20px'}}>
                            See All <span className="text-[10px]">▶</span>
                        </a>
                    </div>

                    {/* 3. Middle Spacer (Pushes Links to the right) */}
                    <div className="flex-1"></div>

                    {/* 4. Category Links (FAR RIGHT) */}
                    <div className="hidden lg:flex items-center gap-4 text-[13px] font-medium text-gray-500">
                        {data.links.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <a href="#" className="hover:text-[#ff5a33] transition-colors">{link}</a>
                                {idx !== data.links.length - 1 && <span className="text-gray-300">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}

            {/* --- PRODUCT GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[340px]">
                {data.products.map((product) => (
                    <div 
                        key={product.id} 
                        className="w-full bg-white border border-gray-100 rounded-sm shadow-sm flex flex-col relative group h-full transition-all hover:shadow-md overflow-hidden"
                        style={{ backgroundColor: product.customBg || '#ffffff' }}
                    >
                        {/* Discount / Status Badges */}
                        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                            {product.badge && (
                                <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-sm shadow-sm" style={{padding: '5px'}}>
                                    {product.badge}
                                </span>
                            )}
                            {product.status && (
                                <span className="bg-[#8bc34a] text-white text-[9px] font-bold uppercase px-2 py-1 rounded-sm shadow-sm" style={{padding: '3px'}}>
                                    {product.status}
                                </span>
                            )}
                        </div>

                        {/* Top: Product Image */}
                        <div className="flex-1 p-6 flex items-center justify-center relative z-10">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="max-w-full max-h-[200px] object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                            />

                            {/* Hover Action Buttons - NOW WIRED UP */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                <button 
                                    onClick={() => onAddToCart(product)}
                                    className="w-8 h-8 bg-white border border-gray-200 hover:bg-black hover:border-black hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer shadow-sm"
                                    title="Add to Cart"
                                >
                                    <FaShoppingCart className="text-[12px]" />
                                </button>
                                <button 
                                    onClick={() => onAddToWishlist(product)}
                                    className="w-8 h-8 bg-white border border-gray-200 hover:bg-[#ff5a33] hover:border-[#ff5a33] hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer shadow-sm"
                                    title="Add to Wishlist"
                                >
                                    <FaHeart className="text-[12px]" />
                                </button>
                                <button className="w-8 h-8 bg-white border border-gray-200 hover:bg-[#00a8ff] hover:border-[#00a8ff] hover:text-white text-gray-600 flex items-center justify-center rounded-sm transition-colors cursor-pointer shadow-sm">
                                    <FaSearch className="text-[12px]" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom: Product Details */}
                        <div className="p-5 flex flex-col items-center text-center z-10 bg-white border-t border-gray-50 mt-auto" style={{paddingBottom: '20px'}}>
                            <h4 className="text-[#333] text-[13px] font-bold mb-2 hover:text-[#ff5a33] cursor-pointer transition-colors leading-snug line-clamp-2 min-h-[38px]">
                                {product.title}
                            </h4>
                            
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[#333] text-[16px] font-extrabold">{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 text-[12px] line-through">{product.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const CategoryShowcase = () => {
    const navigate = useNavigate();
    
    const showcaseData = [
        {
            id: 'fashion',
            title: 'FASHION & BEAUTY',
            color: '#e67e22', 
            align: 'left',
            links: ['Women', 'Watches', 'Men', 'Accessories', 'Bags'],
            products: [
                { id: 1, badge: '-10%', title: 'Alcatra Turducken', price: '$88.00', oldPrice: '$98.00', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/8_8ee56149-6c62-470c-b685-65d774be71a2_large.jpg?v=1571713026', status: 'BEST BUY', featuredCircleColor: '#e67e22' },
                { id: 2, badge: '-0%', title: 'Sirloin Sausage', price: '$72.00', oldPrice: '$82.00', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/9_a29a29dc-fc34-4cbb-9465-7d9a44bfef47_large.jpg?v=1571713026', hasColors: true },
                { id: 3, badge: '-15%', title: 'Ribeye Andouille', price: '$150.00', oldPrice: '$176.00', image: 'https://ss-etrostores.myshopify.com/cdn/shop/products/6_c882e308-4ea3-4586-a3f3-7c725ad65d65_large.jpg?v=1571713026' },
                { id: 4, title: 'Venison Bacon', price: '$90.00', image: 'https://th.bing.com/th/id/OIP.fHZ6ZPuDw1OR0pvCZkpMdwHaJD?w=135&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', status: 'PRE-ORDER' }
            ]
        },
        {
            id: 'tech',
            title: 'TECHNOLOGY',
            color: '#4751c2', 
            align: 'right', 
            links: ['Electronics', 'Television', 'Conditional', 'Laptop', 'Smartphone'],
            products: [
                { id: 5, badge: '-3%', title: 'Officia Picanha', price: '$68.00', oldPrice: '$70.00', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop' },
                { id: 6, badge: '-8%', title: 'Porchetta Ribsibee', price: '$154.00', oldPrice: '$167.00', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop' },
                { id: 7, badge: '-12%', title: 'Nonelit Estbacon', price: '$212.00', oldPrice: '$242.00', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400&auto=format&fit=crop' },
                { id: 8, title: 'Rosciutto Frankfurt', price: '$290.00', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=400&auto=format&fit=crop', featuredCircleColor: '#1abc9c' }
            ]
        },
        {
            id: 'furniture',
            title: 'FURNITURE & DECOR',
            color: '#2ecc71', 
            align: 'left',
            links: ['Chair', 'Wardrobe', 'Coffee Tables', 'Work Place', 'Angene Mafin'],
            products: [
                { id: 9, badge: '-20%', title: 'Andjaeger Eiusmo', price: '$161.00', oldPrice: '$200.00', image: 'https://th.bing.com/th/id/OIP.pc9F6-DlBbDdxTr63oSwhAHaFj?w=268&h=201&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3', customBg: '#e8f5e9' },
                { id: 10, title: 'Incididunt Picanha', price: '$66.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&auto=format&fit=crop', status: 'NEW' },
                { id: 11, badge: '-12%', title: 'Ipsum Ribeye', price: '$132.00', oldPrice: '$150.00', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop', status: 'PRE-ORDER' },
                { id: 12, badge: '-11%', title: 'Boudin Tenderloin', price: '$85.00', oldPrice: '$96.00', image: ' https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=400&auto=format&fit=crop' }
            ]
        }
    ];

    // --- FULL-STACK CART FUNCTION ---
    const handleAddToCart = async (product) => {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            alert("Please log in to add items to your cart!");
            navigate('/login'); 
            return;
        }
        
        const loggedInUser = JSON.parse(userStr);
        const numericPrice = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;

        try {
            const response = await fetch('http://localhost:5000/api/cart/add', {
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({
                    userId: loggedInUser.id, 
                    productId: product.id,
                    name: product.title, 
                    price: numericPrice,
                    image: product.image
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Success: ${product.title} added to your cart!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Failed to connect to backend:", error);
        }
    };

    // --- FULL-STACK WISHLIST FUNCTION ---
    const handleAddToWishlist = async (product) => {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            alert("Please log in to save items to your wishlist!");
            navigate('/login');
            return;
        }

        const loggedInUser = JSON.parse(userStr);
        const numericPrice = typeof product.price === 'string' ? parseFloat(product.price.replace('$', '')) : product.price;

        try {
            const response = await fetch('http://localhost:5000/api/wishlist/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: loggedInUser.id, 
                    productId: product.id,
                    name: product.title, 
                    price: numericPrice,
                    image: product.image
                })
            });
            const data = await response.json();
            if (response.ok) {
                alert(`Success: ${product.title} added to your wishlist!`);
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Failed to connect to backend:", error);
        }
    };

    return (
        <div className="w-full bg-[#f9fafb] py-8 font-sans">
            <div className="max-w-[1440px] mx-auto w-full box-border" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                {showcaseData.map((category) => (
                    <CategoryBlock 
                        key={category.id} 
                        data={category} 
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryShowcase;