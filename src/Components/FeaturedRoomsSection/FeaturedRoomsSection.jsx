import React from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaWifi } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeaturedRoomsSection = ({featuredRooms}) => {
    const navigate=useNavigate()
   
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Rooms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredRooms.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={room.photos[0]}
                alt={room.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className='flex flex-col gap-3'>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{room.title}</h3>
                  

                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <FaMapMarkerAlt className="mr-1 text-[#f48c00]" />
                    {room.location.city}, {room.location.state}
                  </div>

                  

                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                    {room.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center text-lg font-semibold text-[#f48c00]">
                    <FaDollarSign className="mr-1" />
                    {room.rent}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      /month
                    </span>
                  </div>
                  <button onClick={()=>navigate(`/room/${room._id}`)} className="text-sm px-3 py-1.5 bg-[#f48c00] text-white rounded-md hover:bg-[#e07f00] transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoomsSection;