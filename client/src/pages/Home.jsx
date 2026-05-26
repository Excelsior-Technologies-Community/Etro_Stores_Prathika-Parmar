import React from 'react';
import Header from '../components/navbar/Header';
import Hero from '../components/Home/Hero';
import HashtagsTrends from '../components/Home/HashtagsTrends';
import FlashSaler from '../components/Home/FlashSaler';
import CategoryShowcase from '../components/Home/CategoryShowcase';
import BrandCarousel from '../components/Home/BrandCarousel';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      <Header />
      <Hero />
      <HashtagsTrends />
      <FlashSaler />
      <CategoryShowcase />
      <BrandCarousel />
      <Footer />
    </div>
  );
};

export default Home;