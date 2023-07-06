import React from 'react';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {

    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/login');
    }
  return (
    <section className="bg-blue-500 text-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-lg mb-8">Start your journey with us today!</p>
        <button onClick={handleClick} className="bg-white text-blue-500 font-bold py-2 px-6 rounded hover:bg-blue-100">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
