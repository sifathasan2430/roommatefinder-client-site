import React from 'react';

const HeroBanner = () => {
    return (
         <div className="relative h-96 bg-gray-800 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Rooms"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Find Your Perfect Space
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg md:text-xl mb-8"
            >
              Discover rooms and apartments that match your lifestyle
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-2 rounded-lg shadow-lg max-w-2xl mx-auto"
            >
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="flex-grow px-4 py-2 border-none focus:outline-none"
                  name="location"
                
                 
                />
                <button 
                  className="bg-[#f48c00] text-white px-6 py-2 rounded-lg flex items-center"
               
                >
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default HeroBanner;