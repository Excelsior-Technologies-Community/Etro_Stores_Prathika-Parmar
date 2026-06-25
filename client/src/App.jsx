import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Conatct from './pages/Contact';
import LookBook from './pages/LookBook';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Collections from './pages/Collections';
import FreshFruits from './pages/FreshFruits';
import Furnicom from './pages/Furnicom';
import Blog from './pages/Blog';
import TopDeals from './pages/TopDeals';
import Category from './pages/Category';
import BestSelling from './pages/BestSelling';
import Recom from './pages/Recom';
import TopBrands from './pages/TopProducts';
import WishlistPage from './pages/wishlistpage';
import CartPage from './pages/cartpage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/adminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Conatct />} />
        <Route path="/lookbook" element={<LookBook />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/accessories" element={<Collections />} />
        <Route path="/fresh fruit" element={< FreshFruits/>} />
        <Route path="/furnicom" element={< Furnicom/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/top-deals" element={<TopDeals/>} />
        <Route path="/categories" element={<Category/>} />
        <Route path="/best-selling" element={<BestSelling/>} />
        <Route path="/recommended" element={<Recom/>} />
        <Route path="/top-brands" element={<TopBrands/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/cart" element={<CartPage/>} />

        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/admindashboard" element={<AdminDashboard />} />

        
      </Routes>

    </Router>
  );
}

export default App;