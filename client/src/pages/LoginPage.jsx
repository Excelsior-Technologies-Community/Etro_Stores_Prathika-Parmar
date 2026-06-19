import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // SUCCESS! Save the user object to the browser's local memory
                localStorage.setItem('user', JSON.stringify(data.user));
                
                // Force a hard redirect to the home page so the TopBar updates
                window.location.href = '/'; 
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Server connection failed. Is the backend running?');
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f9fafb]">
            <Header />
            <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" >
                <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-sm shadow-sm" style={{padding:'40px'}}>
                    <h2 className="text-center text-3xl font-extrabold text-[#222222] mb-6 uppercase tracking-wider">
                        Login
                    </h2>
                    
                    {error && <div className="bg-red-50 text-red-500 p-3 mb-4 text-sm rounded-sm border border-red-100 text-center">{error}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit} style={{paddingTop:'20px'}}>
                        <div>
                            <label className="text-[13px] font-bold text-gray-700 uppercase">Email Address</label>
                            <input 
                                type="email" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5a33] text-[14px]" 
                                placeholder="you@example.com"
                            />
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <label className="text-[13px] font-bold text-gray-700 uppercase">Password</label>
                            <input 
                                type="password" 
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5a33] text-[14px]" 
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <div className="flex items-center justify-between" style={{marginTop:'10px'}}>
                            <label className="flex items-center gap-1">
                                <input type="checkbox" className="h-4 w-4 accent-[#ff5a33] border-gray-300 rounded" />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm font-bold text-[#ff5a33] hover:underline">Forgot password?</a>
                        </div>

                        <button type="submit" className="w-full bg-[#1c2e3a] hover:bg-[#ff5a33] text-white font-bold py-3 px-4 rounded-xs transition-colors uppercase tracking-widest text-[13px]" style={{marginTop:'20px', padding: '5px'}}>
                            Sign In
                        </button>
                    </form>
                    
                    <p className="mt-6 text-center text-sm text-gray-500" style={{marginTop:'20px'}}>
                        Don't have an account? <Link to="/register" className="font-bold text-[#ff5a33] hover:underline">Create One</Link>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;