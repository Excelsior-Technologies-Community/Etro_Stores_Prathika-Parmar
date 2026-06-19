import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FiHome, 
    FiBox, 
    FiUsers, 
    FiShoppingBag, 
    FiSettings, 
    FiLogOut,
    FiTrendingUp,
    FiDollarSign
} from 'react-icons/fi';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');
    const [adminData, setAdminData] = useState(null);

    // Security Check: Make sure only logged-in users (ideally admins) can see this
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/login');
        } else {
            setAdminData(user);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    // --- SUB-VIEWS FOR EACH TAB ---

    const renderOverview = () => (
        <div className="space-y-6" style={{padding: '10px'}}>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">Dashboard Overview</h2>
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{padding: '10px'}}>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '5px'}}>
                    <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Total Revenue</p>
                        <h3 className="text-2xl font-extrabold text-gray-800 mt-1">$24,590.00</h3>
                    </div>
                    <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-full text-xl">
                        <FiDollarSign />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '5px'}}>
                    <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Total Orders</p>
                        <h3 className="text-2xl font-extrabold text-gray-800 mt-1">1,245</h3>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full text-xl">
                        <FiShoppingBag />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '5px'}}>
                    <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Total Products</p>
                        <h3 className="text-2xl font-extrabold text-gray-800 mt-1">342</h3>
                    </div>
                    <div className="w-12 h-12 bg-orange-50 text-[#ff5a33] flex items-center justify-center rounded-full text-xl">
                        <FiBox />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between" style={{padding: '5px'}}>
                    <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wide">Active Users</p>
                        <h3 className="text-2xl font-extrabold text-gray-800 mt-1">892</h3>
                    </div>
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 flex items-center justify-center rounded-full text-xl">
                        <FiUsers />
                    </div>
                </div>
            </div>

            {/* Recent Orders Placeholder */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 mt-8" style={{padding: '10px'}}>
                <h3 className="text-[16px] font-bold text-gray-800 border-b border-gray-100 pb-4 mb-4">Recent Orders</h3>
                <div className="text-center py-8 text-gray-500 text-sm" style={{padding: '10px'}}>
                    Order data will populate here once connected to the database.
                </div>
            </div>
        </div>
    );

    const renderProducts = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4" style={{padding: '10px'}}>
                <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">Manage Products</h2>
                <button className="bg-[#ff5a33] hover:bg-[#e64d29] text-white px-4 py-2 rounded-sm text-[13px] font-bold transition-colors" style={{padding: '5px'}}>
                    + Add New Product
                </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center py-12 text-gray-500 text-sm" style={{padding: '10px'}}>
                Product table will render here.
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-4" style={{padding: '10px'}}>
                Registered Users
            </h2>
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center py-12 text-gray-500 text-sm" style={{padding: '10px'}}>
                User list table will render here.
            </div>
        </div>
    );

    // --- MAIN RENDER ---
    return (
        <div className="flex h-screen bg-[#f9fafb] font-sans">
            
            {/* SIDEBAR */}
            <aside className="w-[260px] bg-[#0b212f] text-gray-300 flex flex-col h-full flex-shrink-0" style={{padding: '10px'}}>
                <div className="p-6 border-b border-[#1c384c] flex items-center justify-center" style={{padding: '10px'}}>
                    <h1 className="text-white text-xl font-extrabold tracking-widest uppercase">
                        Admin <span className="text-[#ff5a33]">Panel</span>
                    </h1>
                </div>

                <div className="p-6 flex items-center gap-3 border-b border-[#1c384c]" style={{padding: '10px'}}>
                    <div className="w-10 h-10 rounded-full bg-[#1c384c] flex items-center justify-center text-white font-bold">
                        {adminData ? adminData.name.charAt(0) : 'A'}
                    </div>
                    <div>
                        <p className="text-[13px] font-bold text-white">{adminData ? adminData.name : 'Loading...'}</p>
                        <p className="text-[11px] text-[#ff5a33] uppercase tracking-wider">Super Admin</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4" style={{padding: '10px'}}>
                    {[
                        { name: 'Overview', icon: <FiHome /> },
                        { name: 'Products', icon: <FiBox /> },
                        { name: 'Orders', icon: <FiShoppingBag /> },
                        { name: 'Users', icon: <FiUsers /> },
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[14px] font-medium transition-all ${
                                activeTab === item.name 
                                ? 'bg-[#ff5a33] text-white shadow-md' 
                                : 'hover:bg-[#1c384c] hover:text-white'
                            }`}
                            style={{padding: '10px'}}
                        >
                            <span className="text-lg">{item.icon}</span> {item.name}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-[#1c384c]">
                    <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-gray-400 hover:text-red-400 hover:bg-[#1c384c] rounded-sm transition-all"
                    >
                        <FiLogOut className="text-lg" /> Logout
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 overflow-y-auto p-8 lg:p-12" style={{padding: '10px'}}>
                {activeTab === 'Overview' && renderOverview()}
                {activeTab === 'Products' && renderProducts()}
                {activeTab === 'Users' && renderUsers()}
                {activeTab === 'Orders' && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-4">Order Management</h2>
                    </div>
                )}
            </main>

        </div>
    );
};

export default AdminDashboard;