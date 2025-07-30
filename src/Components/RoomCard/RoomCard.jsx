import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const RoomCard = ({ room, }) => {
  const navigate=useNavigate()
  console.log(room)
    return (
       
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.01 }}
    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
  >
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 h-64 md:h-auto relative">
        <img 
          src={'https://i.ibb.co/CsQJBkvL/small-juvenile-bedroom-arrangeme.jpg'} 
          alt={room.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span>4.8</span>
        </div>
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{room.title}</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {room?.availability?.status || 'Available'}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <FaMapMarkerAlt className="mr-1 text-[#f48c00]" />
            {room.location.fullAddress}
          </div>
          <p className="text-gray-700 mb-4 line-clamp-2">{room.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {['WiFi', 'Kitchen', 'Washer'].map((amenity, i) => (
              <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end">
          <button
            onClick={() => navigate(`/room/${room._id}`)}
            className="text-[#f48c00] font-medium hover:underline"
          >
            View Details →
          </button>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Starting from</p>
            <p className="text-xl font-bold text-[#f48c00]">
              {room.currency} {room.rent} <span className="text-gray-400 text-sm">/ month</span>
            </p>
          </div>
        </div>
      
      </div>
    </div>
  </motion.div>
);
    
};

export default RoomCard;