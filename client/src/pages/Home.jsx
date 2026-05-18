import React from 'react';
import Header from '../components/navbar/Header';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#f9fafb]">
      <Header />
      
      {/* Rest of the Home Page will go here later */}
      <main className="w-full flex justify-center items-center h-[50vh]">
        <h1 className="text-3xl text-gray-500">Main Content Area</h1>
      </main>
    </div>
  );
};

export default Home;