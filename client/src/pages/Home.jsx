import React from 'react';
import Header from '../components/navbar/Header';
import Hero from '../components/Home/Hero';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      <Header />
      <Hero />
      
    </div>
  );
};

export default Home;