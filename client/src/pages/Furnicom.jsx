import React, { useState, useEffect } from 'react';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';
import { FiGrid, FiList, FiShoppingCart, FiHeart, FiSearch, FiChevronDown, FiChevronRight } from 'react-icons/fi';

const Furnicom = () => {
    const [ viewMode, setViewMode ] = useState('grid');
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ openCategory, setOpenCategory ] = useState('Sofa');
    
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [ selectedPriceRanges, setSelectedPriceRanges ] = useState([]);
    const [ selectedColor, setSelectedColor ] = useState('All');
    const [ sortOption, setSortOption ] = useState('Featured');

    const products = [
        { id: 1, name: 'Lacinia Rhoncus', price: 239.00, oldPrice: 299.00, discount: '-20%', badge: 'Best', category: 'Sofa', color: '#black', image: 'https://tse4.mm.bing.net/th/id/OIP.osxfezmX5bCpcepS1BWY4wHaHa?pid=Api&P=0&h=180', desc: 'Bingo Fabric 3 Seater Sofa In Grey Colour' },
        { id: 2, name: 'Viverra Nec Purus', price: 123.90, oldPrice: 275.47, discount: '-55%', badge: 'New', category: 'Sofa', color: '#6b3232', image: 'https://ii1.pepperfry.com/media/catalog/product/e/m/494x544/emperor-synthetic-leather-1-seater-sofa-in-toffee-colour-emperor-synthetic-leather-1-seater-sofa-in--lsthyd.jpg', desc: 'Emperor Synthetic Leather 1 Seater Sofa in Toffee Colour' },
        { id: 3, name: 'Officia Picanha', price: 214.90, oldPrice: 466.44, discount: '-54%', badge: 'New', category: 'Sofa', color: '#6b3232', image: 'https://ii1.pepperfry.com/media/catalog/product/e/m/494x544/emperor-synthetic-leather-3-seater-sofa-in-toffee-colour-emperor-synthetic-leather-3-seater-sofa-in--hlaoyp.jpg', desc: 'Emperor Synthetic Leather 3 Seater Sofa in Toffee Colour' }, // FIXED: Typo 'SOfa' -> 'Sofa'
        { id: 4, name: 'Porchetta Ribsbee', price: 128.24, oldPrice: 179.99, discount: '-29%', badge: 'Best', category: 'Sofa', color: '#5e5d5d', image: 'https://ii1.pepperfry.com/media/catalog/product/k/i/494x544/kiki-fabric-2-seater-sofa-in-graphite-grey-colour-kiki-fabric-2-seater-sofa-in-graphite-grey-colour-fr5zai.jpg', desc: 'Kiki Fabric 2 Seater Sofa in Graphite Grey Colour' },
        { id: 5, name: 'Nonelit Estbacon', price: 359.99, oldPrice: 509.99, discount: '-29%', badge: 'New', category: 'Chair', color: '#6b3232', image: 'https://ii1.pepperfry.com/media/catalog/product/p/e/494x544/peshtigo-sheesham-wood-arm-chair-in-honey-oak-finish-peshtigo-sheesham-wood-arm-chair-in-honey-oak-f-hxwuvw.jpg', desc: 'Wegner Fabric Armchair in Exotic Teak & Smoked Olive Colour' },
        { id: 6, name: 'Rosciutto Frankfur', price: 124.99, oldPrice: 169.99,  discount: '-26%', category: 'Chair', color: '#fff', image: 'https://ii1.pepperfry.com/media/catalog/product/a/s/494x544/asko-leatheratte-arm-chair-off-white-colour-and-brass-antiq-finish-asko-leatheratte-arm-chair-off-wh-8o0ve5.jpg', desc: 'Asko Leatheratte Arm Chair in Beige Colour' },
        { id: 7, name: 'Eiusmod Mollit', price: 159.99, oldPrice: 229.99,  discount: '-30%', category: 'Chair', color: '#5e5d5d', image: 'https://ii1.pepperfry.com/media/catalog/product/l/o/494x544/lotus-fabric-arm-chair-in-grey-colour-lotus-fabric-arm-chair-in-grey-colour-hatzbs.jpg', desc: 'Lotus Fabric Arm Chair In Grey Colour' },
        { id: 8, name: 'Labore Auted', price: 159.99, oldPrice: 229.99, discount: '-30%', category: 'Chair', color: '#055ac1', image: 'https://ii1.pepperfry.com/media/catalog/product/n/o/494x544/noah-velvet-arm-chair-in-royal-blue-colour-noah-velvet-arm-chair-in-royal-blue-colour-cp9cop.jpg', desc: 'Lotus Fabric Arm Chair In Blue Colour' },
        { id: 9, name: 'Horem Porche', price: 34.19, oldPrice: 51.99, discount: '-34%', badge: 'Best', category: 'Mandir', color: '#fff', image: 'https://ii1.pepperfry.com/media/catalog/product/s/h/494x544/sheesham-wood-wall-mounted-mandir-in-white-by-india-home-wood-sheesham-wood-wall-mounted-mandir-in-w-4ehntp.jpg', desc: 'Sheesham Wood Wall Mounted Pooja Mandir In White' },
        { id: 10, name: 'Cupidatat Consec', price: 379.90, oldPrice: 635.00, discount: '-40%', category: 'Mandir', color: '#6b3232', image: 'https://ii1.pepperfry.com/media/catalog/product/b/r/494x544/brown-sheesham---pine-wood-temple-for-home---office-by-d-dass-brown-sheesham---pine-wood-temple-for--7fykd2.jpg', desc: 'Divine Wooden Floor Temple With Spacious Shelf Inbuilt Focus Light Brown' },
        { id: 11, name: 'Picanha Chicken', price: 146.29, oldPrice: 254.59, discount: '-43%', badge: 'Best', category: 'Mandir', color: '#fff', image: 'https://ii1.pepperfry.com/media/catalog/product/r/e/494x544/red-sheesham-wood---mdf-with-door-handicraft-temple-by-india-home-wood-red-sheesham-wood---mdf-with--o4y48i.jpg', desc: 'Glossy White and Gold MDF & Sheesham Wood Floor Rested Mandir With Door' },
        { id: 12, name: 'Yastrami Quiscup', price: 151.04, oldPrice: 262.89, discount: '-43%', category: 'Mandir', color: '#c4d414', image: 'https://ii1.pepperfry.com/media/catalog/product/y/e/494x544/yellow-sheesham-mdf-pooja-mandir-with-cabinet-yellow-sheesham-mdf-pooja-mandir-with-cabinet-vu9ih8.jpg', desc: 'Yellow Sheesham MDF Floor Rested Mandir With Door' },
        { id: 13, name: 'Zugiat Susirloin', price: 119.99, oldPrice: 169.99, discount: '-29%', badge: 'New', category: 'Table', color: '#6b3232', image: 'https://ii1.pepperfry.com/media/catalog/product/t/a/494x544/tate-mango-wood-coffee-table-in-tubbaq-finish-with-brown-tinted-glass-top-tate-mango-wood-coffee-tab-8iirfd.jpg', desc: 'Tate Mango Wood Coffee Table In Tubbaq Finish' },
        { id: 14, name: 'Wireless Dual', price: 149.99, oldPrice: 220.00, discount: '-32%', category: 'Table', color: '#9ca3af', image: 'https://ii1.pepperfry.com/media/catalog/product/s/q/494x544/square-marble-nesting-coffee-table-in-black---matt-gold-finish--set-of-2--square-marble-nesting-coff-e5rymv.jpg', desc: 'Square Marble Nesting Coffee Table In Black & Matt Gold Finish (Set of 2)' },
        { id: 15, name: 'Acer Aspire AIO', price: 414.99, oldPrice: 500.00, discount: '-28%', category: 'Table', color: '#fff', image: 'https://ii1.pepperfry.com/media/catalog/product/m/i/494x544/minimalist-marble-top-coffee-table-in-gold-colour-minimalist-marble-top-coffee-table-in-gold-colour-cy5txn.jpg', desc: 'Minimalist Marble Top Coffee Table In Gold Colour' },
    ];

    
    const toggleCategoryDropdown = (catName) => {
        setOpenCategory(openCategory === catName ? '' : catName)
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesColor = selectedColor === 'All' || product.color === selectedColor;

        let matchesPrice = true;
        if (selectedPriceRanges.length > 0) {
            matchesPrice = selectedPriceRanges.some((range) => {
                if (range === '0 - $99') return product.price <= 99;
                if (range === '$100 - $199') return product.price >= 100 && product.price <= 199;
                if (range === '$200 - $299') return product.price >= 200 && product.price <= 299;
                if (range === '$300 - $399') return product.price >= 300 && product.price <= 399;
                if (range === 'Above $400') return product.price >= 400;
                return true;
            });
        }
        return matchesCategory && matchesColor && matchesPrice;
    }).sort((a, b) => {
        if (sortOption === 'Price: Low to High') {
            return a.price - b.price;
        } else if (sortOption === 'Price: High to Low') {
            return b.price - a.price;
        }
        return 0; 
    });

    const handlePriceChange = (range) => {
        if (selectedPriceRanges.includes(range)) {
            setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== range));
        } else {
            setSelectedPriceRanges([...selectedPriceRanges, range]);
        }
        setCurrentPage(1); 
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); 
    };

    const totalPages = Math.ceil(filteredProducts.length / 9);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-[#444444] flex flex-col">
            <Header />

            <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 box-border flex flex-col lg:flex-row gap-8" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '30px' }}>
                
                <aside className="w-full lg:w-[280px] flex-shrink-0 space-y-8">
                    <div className="border border-gray-200 p-5 rounded-xs">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
                            <h2 className="text-[14px] font-bold text-[#222222] uppercase tracking-wider" style={{padding: '7px'}}>Shop By</h2>
                            {/* FIXED: Added setCurrentPage(1) to Clear button */}
                            <button onClick={() => { setSelectedCategory('All'); setSelectedColor('All'); setSelectedPriceRanges([]); setSortOption('Featured'); setCurrentPage(1); }} className="text-[11px] text-[#ff5a33] font-bold hover:underline" style={{padding: '5px'}}>Clear</button>
                        </div>
                        
                        <div className="space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide" style={{padding: '5px'}}>Categories</h3>
                            
                            <div className="border-b border-gray-100 pb-2" style={{paddingLeft:'5px'}}>
                                {/* FIXED: Corrected the selected/open checks to 'Sofa', and added setCurrentPage(1) */}
                                <div onClick={() => { setSelectedCategory('Sofa'); toggleCategoryDropdown('Sofa'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Sofa' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Sofa</span>
                                    {openCategory === 'Sofa' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-2"  style={{paddingLeft:'5px'}}>
                                {/* FIXED: Added setCurrentPage(1) */}
                                <div onClick={() => { setSelectedCategory('Chair'); toggleCategoryDropdown('Chair'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Chair' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Chair</span>
                                    {openCategory === 'Chair' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-2"  style={{paddingLeft:'5px'}}>
                                {/* FIXED: Added setCurrentPage(1) */}
                                <div onClick={() => { setSelectedCategory('Mandir'); toggleCategoryDropdown('Mandir'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Mandir' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Mandir</span>
                                    {openCategory === 'Mandir' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>

                            <div className="border-b border-gray-100 pb-2"  style={{paddingLeft:'5px'}}>
                                {/* FIXED: Added setCurrentPage(1) */}
                                <div onClick={() => { setSelectedCategory('Table'); toggleCategoryDropdown('Table'); setCurrentPage(1); }} className={`flex justify-between items-center text-[13px] cursor-pointer py-1 font-medium ${selectedCategory === 'Table' ? 'text-[#ff5a33] font-bold' : 'text-gray-600 hover:text-[#ff5a33]'}`}>
                                    <span>Table</span>
                                    {openCategory === 'Table' ? <FiChevronDown /> : <FiChevronRight />}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4"  style={{padding: '5px'}}>Price</h3>
                            <div className="space-y-2 text-[13px] text-gray-500 font-medium">
                                {['0 - $99', '$100 - $199', '$200 - $299', '$300 - $399', 'Above $400'].map((range, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer hover:text-[#ff5a33]" style={{paddingLeft:'5px'}}>
                                        <input 
                                            type="checkbox" 
                                            checked={selectedPriceRanges.includes(range)}
                                            onChange={() => handlePriceChange(range)}
                                            className="accent-[#ff5a33]" 
                                        />
                                        <span>{range}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <h3 className="text-[12px] font-bold text-gray-700 uppercase tracking-wide border-t border-gray-100 pt-4" style={{padding: '5px'}}>Color</h3>
                            <div className="flex flex-wrap gap-3 pt-1" style={{paddingLeft:'5px', paddingBottom: '5px' }}>
                                {['#black', '#fff', '#6b3232', '#5e5d5d', '#055ac1', '#c4d414'].map((color, i) => (
                                    <button 
                                        key={i}
                                        /* FIXED: Added setCurrentPage(1) so color filtering doesn't hit a blank page */
                                        onClick={() => { setSelectedColor(selectedColor === color ? 'All' : color); setCurrentPage(1); }}
                                        className={`w-6 h-6 rounded-xs border transition-transform ${selectedColor === color ? 'border-[#ff5a33] scale-110 shadow-md' : 'border-gray-300 hover:scale-110'}`}
                                        style={{ backgroundColor: color === '#black' ? '#222' : color }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col">
                    <div className="w-full h-[240px] bg-[#fdf2d6] rounded-sm flex items-center justify-between px-8 md:px-16 mb-6 overflow-hidden relative border border-amber-100">
                        <div className="max-w-[50%] text-left space-y-2 z-10" style={{padding: '100px'}}>
                            <span className="bg-[#ff5a33] text-white font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-xs" style={{padding: '5px'}}>Sale 50% Off</span>
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#222222] leading-tight"style={{paddingTop: '20px', paddingBottom: '10px'}}>Modern S Style New Television</h1>
                            <p className="text-[12px] text-amber-800 font-medium">Be quick! Only 100 products available at this price sale price</p>
                        </div>
                    </div>

                    <div className="w-full border-t border-b border-gray-200 py-3 mb-6 flex justify-between items-center bg-[#fafafa] px-4 rounded-xs" style={{paddingTop: '20px', paddingBottom: '10px'}}>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setViewMode('grid')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'grid' ? 'bg-[#1c2e3a] text-white border-[#1c2e3a]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiGrid className="text-[16px]" />
                            </button>
                            <button onClick={() => setViewMode('list')} className={`p-2 border rounded-xs transition-colors ${viewMode === 'list' ? 'bg-[#1c2e3a] text-white border-[#1c2e3a]' : 'bg-white text-gray-400 border-gray-200 hover:text-gray-700'}`}>
                                <FiList className="text-[16px]" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[13px] text-gray-400 font-medium">Sort By:</span>
                            <select 
                                value={sortOption}
                                onChange={handleSortChange}
                                className="border border-gray-200 bg-white rounded-xs px-3 py-1.5 text-[13px] text-gray-600 outline-none focus:border-gray-400 cursor-pointer"
                            >
                                <option value="Featured">Featured</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                            </select>
                            <span className="text-[13px] text-gray-400 font-medium pl-2">{filteredProducts.length} products</span>
                        </div>
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="w-full py-12 text-center text-gray-500 font-medium">
                            No products match your selected filters. Try clearing them!
                        </div>
                    )}

                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left" style={{paddingBottom: '15px'}}>
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 8 : index >= 8;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-100 rounded-xs bg-white flex-col relative group overflow-hidden shadow-xs hover:shadow-md transition-all`}>
                                        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1 items-start">
                                            {product.discount && <span className="bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.discount}</span>}
                                            {product.tag && <span className="bg-[#00a8ff] text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.tag}</span>}
                                        </div>
                                        <div className="w-full h-[220px] bg-white p-4 relative overflow-hidden flex items-center justify-center">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain transform transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute right-[-50px] group-hover:right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiShoppingCart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiHeart /></button>
                                                <button className="w-9 h-9 bg-white border border-gray-200 rounded-xs flex items-center justify-center shadow-xs text-gray-600 hover:bg-[#ff5a33] hover:text-white transition-colors"><FiSearch /></button>
                                            </div>
                                        </div>
                                        <div className="p-4 bg-[#ffffff] border-t border-gray-50 flex-1 flex flex-col justify-between" style={{padding: '10px'}}>
                                            <h3 className="text-[13.5px] font-bold text-gray-700 hover:text-[#ff5a33] transition-colors truncate cursor-pointer">{product.name}</h3>
                                            <div className="flex gap-2 items-center mt-2">
                                                <span className="text-[#ff5a33] font-extrabold text-[15px]">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[12px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="space-y-4 text-left" style={{paddingBottom: '15px'}}>
                            {filteredProducts.map((product, index) => {
                                const isVisibleOnCurrentPage = currentPage === 1 ? index < 8 : index >= 8;
                                return (
                                    <div key={product.id} className={`${isVisibleOnCurrentPage ? 'flex' : 'hidden'} border border-gray-200 rounded-xs bg-white p-5 flex-col sm:flex-row gap-6 items-center shadow-xs hover:shadow-sm transition-all group`}>
                                        <div className="w-full sm:w-[200px] h-[180px] flex-shrink-0 bg-white p-2 border border-gray-50 flex items-center justify-center relative">
                                            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                                            {product.discount && <span className="absolute left-2 top-2 bg-[#ff5a33] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-xs" style={{padding: '2px'}}>{product.discount}</span>}
                                        </div>
                                        <div className="flex-1 space-y-2 w-full">
                                            <h3 className="text-[16px] font-bold text-gray-800 hover:text-[#ff5a33] cursor-pointer transition-colors">{product.name}</h3>
                                            <div className="flex gap-3 items-center text-lg">
                                                <span className="text-[#ff5a33] font-extrabold">${product.price.toFixed(2)}</span>
                                                {product.oldPrice && <span className="text-gray-400 text-[13px] line-through">${product.oldPrice.toFixed(2)}</span>}
                                            </div>
                                            <p className="text-[13px] text-grey-400 font-light leading-relaxed max-w-2xl" style={{paddingBottom: '5px'}}>{product.desc}</p>
                                            <div className="pt-2">
                                                <button className="bg-[#ff5a33] text-white text-[12px] uppercase font-bold px-6 py-2.5 rounded-xs hover:bg-[#1c2e3a] transition-colors tracking-wider flex items-center gap-2" style={{padding: '5px'}}>
                                                    <FiShoppingCart /> Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-12 mb-6">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-9 h-9 rounded-sm text-[13px] font-bold border transition-all ${
                                        currentPage === page 
                                        ? 'bg-[#ff5a33] text-white border-[#ff5a33]' 
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Furnicom;