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
      </Routes>

    </Router>
  );
}

export default App;