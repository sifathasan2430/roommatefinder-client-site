import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate=useNavigate()
  return (
    <div className="relative h-[85vh] w-full bg-gray-800">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
            Find Affordable Rooms & Apartments for Rent
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            Browse verified listings from trusted hosts. Whether you're a student, traveler, or working professional — discover the perfect room for your stay and book instantly.
          </p>

          
          <div className="flex justify-center">
            
            <button onClick={()=>navigate('/allrooms')} className="bg-[#f48c00] hover:bg-[#e07f00] text-white px-6 py-3 font-semibold flex items-center gap-2 transition-colors">
              
              All rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
