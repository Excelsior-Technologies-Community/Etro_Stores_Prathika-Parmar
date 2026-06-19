import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/navbar/Header';
import Footer from '../components/Footer/Footer';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Please log in.');
                navigate('/login');
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
            <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-sm shadow-sm" style={{padding:'40px'}}>
                    <h2 className="text-center text-3xl font-extrabold text-[#222222] mb-6 uppercase tracking-wider">
                        Create Account
                    </h2>
                    
                    {error && <div className="bg-red-50 text-red-500 p-3 mb-4 text-sm rounded-sm border border-red-100 text-center">{error}</div>}

                    <form className="space-y-6" onSubmit={handleSubmit}  style={{paddingTop:'20px'}}>
                        <div>
                            <label className="text-[13px] font-bold text-gray-700 uppercase">Full Name</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#ff5a33] text-[14px]" 
                                placeholder="John Doe"
                            />
                        </div>
                        <div style={{marginTop:'5px'}}>
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
                        <div style={{marginTop:'5px'}}>
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
                        <button type="submit" className="w-full bg-[#1c2e3a] hover:bg-[#ff5a33] text-white font-bold py-3 px-4 rounded-xs transition-colors uppercase tracking-widest text-[13px]" style={{marginTop:'20px', padding: '5px'}}>
                            Register
                        </button>
                    </form>
                    
                    <p className="mt-6 text-center text-sm text-gray-500" style={{marginTop:'20px'}}>
                        Already have an account? <Link to="/login" className="font-bold text-[#ff5a33] hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default RegisterPage;