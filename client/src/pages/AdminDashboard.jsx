import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FiHome, FiBox, FiUsers, FiShoppingBag, FiDollarSign, FiLogOut, FiTrash2, FiEdit
} from 'react-icons/fi';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');
    const [adminData, setAdminData] = useState(null);

    // --- LIVE DATABASE STATE ---
    const [productsList, setProductsList] = useState([]);
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // 🧮 LIVE MATH ENGINE 1: Total Value
    const totalInventoryValue = productsList.reduce((sum, item) => sum + (Number(item.price) || 0), 0);

    // 📊 MATH ENGINE 2: Category Breakdown
    // 📊 SUPER CATEGORY ENGINE: Calculates both Unit Count and Net Dollar Sum per category!
    const categoryStats = productsList.reduce((acc, item) => {
        const cat = item.category || 'Uncategorized';
        if (!acc[cat]) acc[cat] = { count: 0, totalValue: 0 };
        acc[cat].count += 1;
        acc[cat].totalValue += (Number(item.price) || 0);
        return acc;
    }, {});

    // 💎 MATH ENGINE 3: The Crown Jewels (Top 3 most expensive items)
    const crownJewels = [...productsList]
        .sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0))
        .slice(0, 3);

    // 🏷️ MATH ENGINE 4: Price Tier Classifier
    const priceTiers = productsList.reduce((acc, item) => {
        const p = Number(item.price) || 0;
        if (p <= 50) acc.budget.count++;
        else if (p <= 250) acc.standard.count++;
        else acc.flagship.count++;
        return acc;
    }, { 
        budget: { count: 0, label: 'Budget (< $50)', color: 'bg-emerald-500' }, 
        standard: { count: 0, label: 'Standard ($51 - $250)', color: 'bg-blue-500' }, 
        flagship: { count: 0, label: 'Flagship (> $250)', color: 'bg-purple-500' } 
    });

    // 🚨 MATH ENGINE 5: LOW STOCK DETECTOR (Sirf wo items jinka stock 3 ya usse kam hai)
    const criticalStockItems = productsList.filter(item => item.stock !== undefined && Number(item.stock) <= 3);

    // Form state (No Desc Column)
    const [newProduct, setNewProduct] = useState({
        name: '', price: '', category: 'Electronic', image: ''
    });
    const [formStatus, setFormStatus] = useState('');
    const [editingId, setEditingId] = useState(null);
    // 🔘 TRACKER TOGGLE STATE ('count' = Unit volume | 'value' = Dollar worth)
    const [catMetric, setCatMetric] = useState('count');

    // 1. SECURITY CHECK
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) navigate('/login');
        else setAdminData(user);
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    // --- 2. SMART BACKEND FETCHERS ---
    useEffect(() => {
        fetchProducts();
        fetchUsers();
    }, []);

    useEffect(() => {
        if (activeTab === 'Products') fetchProducts();
        if (activeTab === 'Users') fetchUsers();
    }, [activeTab]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/products');
            const data = await res.json();
            setProductsList(data);
        } catch (err) { console.error(err); } finally { setLoading(false); }
    };

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/api/users'); 
            const data = await res.json();
            setUsersList(data);
        } catch (err) { console.error(err); } finally { setLoading(false); }
    };

    // --- 3. SAVE / UPDATE PRODUCT ---
    const handleSaveProduct = async (e) => {
        e.preventDefault();
        setFormStatus(editingId ? 'Updating MySQL row...' : 'Publishing to MySQL...');

        const url = editingId 
            ? `http://localhost:5000/api/products/${editingId}` 
            : 'http://localhost:5000/api/products/add';

        const method = editingId ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });

            if (response.ok) {
                setFormStatus(editingId ? 'Success! Item updated.' : 'Success! Product published.');
                setNewProduct({ name: '', price: '', category: 'Electronic', image: '' });
                setEditingId(null); 
                
                fetchProducts(); 
                setTimeout(() => setFormStatus(''), 3000);
            } else { setFormStatus('Database action failed.'); }
        } catch (error) { setFormStatus('Server error.'); }
    };

    const handleStartEdit = (product) => {
        setNewProduct({
            name: product.name, price: product.price, category: product.category, image: product.image
        });
        setEditingId(product.id);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const handleDeleteProduct = async (id, name) => {
        if (!window.confirm(`Are you 100% sure you want to delete "${name}"?`)) return;
        try {
            const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
            if (res.ok) fetchProducts();
            else alert("Failed to delete product.");
        } catch (err) { console.error(err); }
    };

    // ==========================================
    //                 SUB-VIEWS
    // ==========================================

    const renderOverview = () => (
        <div className="space-y-6 max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider" style={{padding: '10px'}}>Dashboard Overview</h2>
            
            {/* 🚨 THE EMERGENCY RESTOCK BANNER (Blinks only when stock drops <= 3) */}
            {criticalStockItems.length > 0 && (
                <div className="bg-gradient-to-r from-red-600 to-[#ff5a33] text-white p-4 rounded-sm shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 " style={{margin: '10px 10px 20px 10px', padding: '10px'}} >
                    <div className="flex items-center gap-3">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                        <div>
                            <p className="text-xs font-black tracking-widest uppercase text-red-100">Warehouse Alert</p>
                            <p className="text-sm font-bold mt-0.5">
                                <span className="underline font-extrabold">{criticalStockItems.length} Products</span> are critically low on stock and require immediate re-ordering.
                            </p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setActiveTab('Products')}
                        className="bg-[#0b212f] hover:bg-white hover:text-[#ff5a33] text-white text-xs font-black px-5 py-2.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer flex-shrink-0 shadow-sm"
                        style={{padding: '5px'}}
                    >
                        Review Inventory →
                    </button>
                </div>
            )}

            {/* 1. SKYLINE: 4 CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{padding: '10px'}}>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '10px'}}>
                    <div><p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Total Stock Value</p><h3 className="text-2xl font-extrabold text-gray-800 mt-1">${totalInventoryValue.toFixed(2)}</h3></div>
                    <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-full text-xl"><FiDollarSign /></div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '10px'}}>
                    <div><p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Total Orders (Demo)</p><h3 className="text-2xl font-extrabold text-gray-800 mt-1">1,245</h3></div>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full text-xl"><FiShoppingBag /></div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '10px'}}>
                    <div><p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Store Inventory</p><h3 className="text-2xl font-extrabold text-gray-800 mt-1">{productsList.length}</h3></div>
                    <div className="w-12 h-12 bg-orange-50 text-[#ff5a33] flex items-center justify-center rounded-full text-xl"><FiBox /></div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '10px'}}>
                    <div><p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Registered Users</p><h3 className="text-2xl font-extrabold text-gray-800 mt-1">{usersList.length}</h3></div>
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 flex items-center justify-center rounded-full text-xl"><FiUsers /></div>
                </div>
            </div>

        
            {/* 2. HORIZON: INTERACTIVE WIDESCREEN CATEGORY TRACKER */}
            <div className="pt-2" style={{padding: '10px'}}>
                <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-4 mb-6 gap-4" style={{padding: '10px'}}>
                        <div>
                            <h3 className="text-[14px] font-extrabold text-gray-800 uppercase tracking-wider">
                                Warehouse Category Breakdown
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                                Showing catalog share by <span className="font-black text-[#ff5a33] uppercase">{catMetric === 'count' ? 'Physical Stock Volume' : 'Monetary Net Worth'}</span>
                            </p>
                        </div>
                        
                        {/* 🔘 THE SILICON VALLEY DUAL-SWITCH */}
                        <div className="flex bg-gray-100 p-1 rounded-xs border border-gray-200 shadow-inner gap-1" style={{padding: '10px'}}>
                            <button 
                                onClick={() => setCatMetric('count')}
                                className={`text-xs font-black px-4 py-1.5 rounded-xs uppercase transition-all duration-300 cursor-pointer ${catMetric === 'count' ? 'bg-[#0b212f] text-white shadow-sm' : 'text-gray-500 hover:text-black'}`} 
                                style={{padding: '5px'}}
                            >
                                📦 Units Count
                            </button>
                            <button 
                                onClick={() => setCatMetric('value')}
                                className={`text-xs font-black px-4 py-1.5 rounded-xs uppercase transition-all duration-300 cursor-pointer ${catMetric === 'value' ? 'bg-[#ff5a33] text-white shadow-sm' : 'text-gray-500 hover:text-black'}`}
                                style={{padding: '5px'}}
                            >
                                💰 Net Dollar Worth
                            </button>
                        </div>
                    </div>
                    
                    {productsList.length === 0 ? (
                        <p className="text-xs text-gray-400 italic py-8 text-center">Add products to generate live distribution...</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6" style={{padding: '10px'}}>
                            {Object.entries(categoryStats).map(([catName, stats]) => {
                                const isCount = catMetric === 'count';
                                const shareValue = isCount ? stats.count : stats.totalValue;
                                const grandTotal = isCount ? productsList.length : totalInventoryValue;
                                const percentage = grandTotal > 0 ? Math.round((shareValue / grandTotal) * 100) : 0;

                                return (
                                    <div key={catName} className="bg-gray-50/50 p-3 rounded border border-gray-100 transition-all">
                                        <div className="flex justify-between text-xs font-bold mb-2" style={{padding: '10px'}}>
                                            <span className="text-gray-800 uppercase">{catName}</span>
                                            <span className="text-gray-400 font-mono">
                                                {isCount 
                                                    ? `${stats.count} units` 
                                                    : `$${stats.totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
                                                } 
                                                <span className={`font-black ml-1.5 ${isCount ? 'text-[#0b212f]' : 'text-[#ff5a33]'}`}>
                                                    ({percentage}%)
                                                </span>
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all duration-700 ${isCount ? 'bg-[#0b212f]' : 'bg-[#ff5a33]'}`} 
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* 3. FOUNDATION: THE FLAGSHIP MATRIX & CROWN JEWELS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2" style={{padding: '10px'}}>
                
                {/* Left (2 cols): Price Tier Segmentation */}
                <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6" style={{padding: '10px'}}>
                            <h3 className="text-[14px] font-extrabold text-gray-800 uppercase tracking-wider">
                                Inventory Price Brackets
                            </h3>
                            <span className="text-xs font-bold text-gray-400 uppercase">Automated Segmentation</span>
                        </div>

                        {productsList.length === 0 ? (
                            <p className="text-xs text-gray-400 italic py-8 text-center" style={{padding: '10px'}}>
                                Awaiting product catalog...
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2" style={{padding: '10px'}}>
                                {Object.entries(priceTiers).map(([key, tier]) => (
                                    <div key={key} className="bg-gray-50/80 p-5 rounded border border-gray-100 flex flex-col justify-between" style={{padding: '10px'}}>
                                        <div>
                                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">{tier.label}</span>
                                            <h4 className="text-3xl font-extrabold text-gray-800 mt-2">{tier.count} <span className="text-xs font-medium text-gray-400">units</span></h4>
                                        </div>
                                        <div className="mt-6">
                                            <div className={`h-1.5 w-full rounded-full ${tier.color}`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right (1 col): The Crown Jewels Leaderboard */}
                <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm flex flex-col justify-between" style={{padding: '10px'}}>
                    <div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
                            <h3 className="text-[14px] font-extrabold text-gray-800 uppercase tracking-wider">
                                Crown Jewels
                            </h3>
                            <span className="text-[9px] bg-amber-50 text-[#ff5a33] font-black px-2 py-0.5 rounded border border-amber-200/50" style={{padding: '5px'}}>TOP VALUE</span>
                        </div>

                        <div className="space-y-4">
                            {crownJewels.length === 0 ? (
                                <p className="text-xs text-gray-400 italic py-6 text-center">No catalog data...</p>
                            ) : (
                                crownJewels.map((item, idx) => (
                                    <div key={item.id} className="flex items-center gap-3.5 p-2 rounded hover:bg-orange-50/30 transition-colors border border-transparent hover:border-orange-100" style={{paddingTop: '10px'}}>
                                        <span className={`font-mono text-xs font-black w-4 text-center ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-gray-400' : 'text-amber-700'}`}>
                                            #{idx+1}
                                        </span>
                                        <div className="w-10 h-10 rounded bg-gray-50 border border-gray-100 flex items-center justify-center p-1 flex-shrink-0">
                                            <img src={item.image} alt="" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-gray-900 truncate">{item.name}</p>
                                            <p className="text-[9px] text-gray-400 uppercase font-black tracking-wider mt-0.5">{item.category}</p>
                                        </div>
                                        <span className="text-xs font-black text-[#1c2e3a]" >
                                            ${Number(item.price).toLocaleString('en-US', {minimumFractionDigits: 2})}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-50 text-[10px] text-gray-400 text-center italic" style={{paddingTop: '10px'}}>
                        Real-time luxury valuation engine
                    </div>
                </div>

            </div>
        </div>
    );

    const renderProducts = () => (
        <div className="space-y-10 max-w-6xl">
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8" style={{padding: '10px'}}>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider border-b border-gray-100 pb-4 mb-6">
                    {editingId ? `Editing Product #${editingId}` : 'Publish New Product'}
                </h2>
                
                {formStatus && (
                    <div className={`p-3 mb-6 text-sm text-center rounded-sm font-bold ${formStatus.includes('Success') ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>{formStatus}</div>
                )}

                <form onSubmit={handleSaveProduct} className="space-y-5" style={{paddingTop: '10px'}}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div><label className="text-[12px] font-bold text-gray-700 uppercase">Product Name</label><input type="text" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm text-[13px] outline-none focus:border-[#ff5a33]" style={{padding: '10px'}} placeholder="e.g. Ergonomic Chair" /></div>
                        <div><label className="text-[12px] font-bold text-gray-700 uppercase">Price ($)</label><input type="number" step="0.01" required value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm text-[13px] outline-none focus:border-[#ff5a33]" style={{padding: '10px'}} placeholder="299.99" /></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-[12px] font-bold text-gray-700 uppercase">Category</label>
                            <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm text-[13px] bg-white" style={{padding: '10px'}}>
                                <option value="Electronic">Electronic</option><option value="Furnicom">Furnicom</option><option value="Sofa">Sofa</option><option value="Chair">Chair</option><option value="Fresh fruit">Fresh fruit</option>
                            </select>
                        </div>
                        <div><label className="text-[12px] font-bold text-gray-700 uppercase">Image URL</label><input type="url" required value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm text-[13px] outline-none focus:border-[#ff5a33]" style={{padding: '10px'}} placeholder="https://..." /></div>
                    </div>
                    
                    <div className="flex gap-4" style={{paddingTop: '10px'}}>
                        <button type="submit" className="bg-[#1c2e3a] hover:bg-[#ff5a33] text-white font-bold py-2.5 px-8 rounded-xs uppercase text-[12px] cursor-pointer" style={{padding: '5px'}}>{editingId ? `Save Changes to #${editingId}` : 'Publish Item'}</button>
                        {editingId && (<button type="button" onClick={() => { setNewProduct({name:'', price:'', category:'Electronic', image:''}); setEditingId(null); }} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2.5 px-6 rounded-xs uppercase text-[12px] cursor-pointer" style={{padding: '5px'}}>Cancel Edit</button>)}
                    </div>
                </form>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]" style={{padding: '10px'}}><h3 className="text-[14px] font-extrabold text-gray-800 uppercase tracking-wider" style={{padding: '10px'}}>Live Inventory ({productsList.length})</h3><button onClick={fetchProducts} className="text-xs text-[#ff5a33] font-bold hover:underline cursor-pointer">Refresh Table</button></div>
                {loading ? (<div className="p-12 text-center text-gray-400 font-medium">Fetching database records...</div>) : productsList.length === 0 ? (<div className="p-12 text-center text-gray-400 font-medium">No products found in MySQL table `products`.</div>) : (
                    <table className="w-full text-left border-collapse">
                        <thead><tr className="bg-gray-50 text-[11px] font-extrabold text-gray-500 uppercase border-b border-gray-200" style={{padding: '10px'}}><th className="p-3 w-12 text-center">ID</th><th className="p-3 w-16 text-center">Img</th><th className="p-3">Name</th><th className="p-3">Category</th><th className="p-3">Price</th><th className="p-3 text-right">Actions</th></tr></thead>
                        <tbody className="divide-y divide-gray-100 text-[13px] text-gray-700" style={{padding: '10px'}}>
                            {productsList.map(item => (
                                <tr key={item.id} className="hover:bg-orange-50/40">
                                    <td className="p-3 text-center font-bold text-gray-400">#{item.id}</td><td className="p-3"><img src={item.image} alt="" className="w-8 h-8 object-contain mx-auto" /></td><td className="p-3 font-bold text-gray-900">{item.name}</td><td className="p-3"><span className="bg-gray-100 text-gray-600 text-[10px] font-extrabold px-2 py-0.5 rounded-xs uppercase">{item.category}</span></td><td className="p-3 font-extrabold text-[#ff5a33]">${Number(item.price).toFixed(2)}</td>
                                    <td className="p-3 text-right space-x-3" style={{padding: '5px'}}><button onClick={() => handleStartEdit(item)} className="text-blue-500 hover:text-blue-700 cursor-pointer p-1" title="Edit Product"><FiEdit /></button><button onClick={() => handleDeleteProduct(item.id, item.name)} className="text-red-500 hover:text-red-700 cursor-pointer p-1" title="Delete Product"><FiTrash2 /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="space-y-6 max-w-5xl">
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]" style={{padding: '10px'}}><h3 className="text-[14px] font-extrabold text-gray-800 uppercase tracking-wider">Customer Accounts ({usersList.length})</h3><button onClick={fetchUsers} className="text-xs text-[#ff5a33] font-bold hover:underline cursor-pointer">Refresh Table</button></div>
                {loading ? (<div className="p-12 text-center text-gray-400 font-medium">Fetching users...</div>) : usersList.length === 0 ? (<div className="p-12 text-center text-gray-400 font-medium">No users found.</div>) : (
                    <table className="w-full text-left border-collapse" style={{padding: '10px'}}>
                        <thead><tr className="bg-gray-50 text-[11px] font-extrabold text-gray-500 uppercase border-b border-gray-200"><th className="p-3 w-12 text-center">ID</th><th className="p-3">Full Name</th><th className="p-3">Email Address</th><th className="p-3">Security Hash</th></tr></thead>
                        <tbody className="divide-y divide-gray-100 text-[13px] text-gray-700" style={{padding: '10px'}}>
                            {usersList.map(u => (<tr key={u.id} className="hover:bg-gray-50"><td className="p-3 text-center font-bold text-gray-400">#{u.id}</td><td className="p-3 font-bold text-gray-900">{u.name}</td><td className="p-3 text-gray-600">{u.email}</td><td className="p-3 font-mono text-[11px] text-gray-400 truncate max-w-xs">••••••••</td></tr>))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-[#f9fafb] font-sans">
            <aside className="w-[240px] bg-[#0b212f] text-gray-300 flex flex-col h-full flex-shrink-0" style={{minHeight: '100vh'}}>
                <div className="p-6 border-b border-[#1c384c] text-center"><h1 className="text-white text-xl font-extrabold tracking-widest uppercase" style={{padding: '10px'}}>Admin <span className="text-[#ff5a33]">Panel</span></h1></div>
                <div className="p-5 flex items-center gap-3 border-b border-[#1c384c]" style={{padding: '10px'}}><div className="w-9 h-9 rounded-full bg-[#1c384c] flex items-center justify-center text-white font-bold">{adminData?.name?.charAt(0) || 'A'}</div><div><p className="text-[12.5px] font-bold text-white">{adminData?.name || 'Admin'}</p><p className="text-[10px] text-[#ff5a33] uppercase tracking-wider">Superuser</p></div></div>
                <nav className="flex-1 p-4 space-y-1.5 mt-2" style={{padding: '10px'}}>
                    {[{ name: 'Overview', icon: <FiHome /> }, { name: 'Products', icon: <FiBox /> }, { name: 'Users', icon: <FiUsers /> }].map(item => (<button key={item.name} onClick={() => setActiveTab(item.name)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13.5px] font-medium transition-all ${activeTab === item.name ? 'bg-[#ff5a33] text-white shadow-md font-bold' : 'hover:bg-[#1c384c] hover:text-white'}`} style={{padding: '10px'}}><span className="text-lg">{item.icon}</span> {item.name}</button>))}
                </nav>
                <div className="p-4 border-t border-[#1c384c]"><button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[13.5px] font-medium text-gray-400 hover:text-red-400 hover:bg-[#1c384c] rounded-sm transition-all" style={{padding: '10px'}}><FiLogOut className="text-lg" /> Logout</button></div>
            </aside>
            <main className="flex-1 overflow-y-auto p-10">{activeTab === 'Overview' && renderOverview()}{activeTab === 'Products' && renderProducts()}{activeTab === 'Users' && renderUsers()}</main>
        </div>
    );
};

export default AdminDashboard;