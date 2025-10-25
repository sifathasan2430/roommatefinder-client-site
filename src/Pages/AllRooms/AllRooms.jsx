

import { FaMapMarkerAlt, FaStar, FaFilter, FaSearch } from "react-icons/fa";

import { motion } from "framer-motion";
import {RoomCardSkeleton,RoomCategories,RoomFilters,NoDataFound,RoomCard} from './allPageComponets/index' 
import { useQuery } from "@tanstack/react-query";


import { useDispatch, useSelector } from "react-redux";
import getFilteredRooms from "../../customApi/customApi";
import { Button, Input } from "../../components/Navbar";
import { useState } from "react";
import { setLocation as findLocation } from "../../features/filters/filterSlice";


const AllRooms = () => {
    
  const filters=useSelector((state)=>state.filters)
  
  const dispatch=useDispatch()
  const [location,setLocation]=useState('')

  const { data: rooms, isLoading } = useQuery({
    queryKey: ["rooms",filters], 
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
               <div className="flex gap-2">
                 <Input  onChange={(e)=>setLocation(e.target.value)}   placeholder='location'  />
                 <Button onClick={()=>dispatch(findLocation(location))}>Search</Button>
               </div>
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
