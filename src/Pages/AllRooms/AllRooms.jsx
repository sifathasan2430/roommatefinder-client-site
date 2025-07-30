import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaStar, FaFilter, FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import RoomCard from "../../Components/RoomCard/RoomCard";
import { useQuery } from "@tanstack/react-query";
import getFilteredRooms from "../../customApi/customApi";
import NoDataFound from "../../Components/allPageComponets/NoDataFound";
import RoomCardSkeleton from "../../Components/allPageComponets/RoomCardSkeleton";
import RoomFilters from "../../Components/allPageComponets/RoomFilters";
import { useSelector } from "react-redux";


const AllRooms = () => {
  const navigate = useNavigate();
  const filters=useSelector((state)=>state.filters)
  const { data: rooms, isLoading } = useQuery({
    queryKey: ["rooms",filters], // safer to use array for queryKey
    queryFn: () => getFilteredRooms(filters),
  });
  
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}

      {/* Category Section */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md w-full">
              <FaFilter />
            </button>
          </div>

          {/* Filters Sidebar */}
          
               <RoomFilters rooms={rooms}/>
          {/* Rooms List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">All Rooms</h2>
              {/* <p className="text-gray-600">{rooms.length} properties found</p> */}
            </div>

            {isLoading && <RoomCardSkeleton />}

            { rooms && rooms.length>0 ? (
              <div className="grid grid-cols-1 gap-6">
                {rooms.map((room) => (
                  <RoomCard key={room._id} room={room} />
                ))}
              </div>
            ):(<NoDataFound/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
