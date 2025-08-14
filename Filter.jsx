import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Await } from 'react-router-dom';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
const Filter = () => {
    const [rooms,setRooms]=useState([])
    const [filter,setFilters]=useState({
        category: '', 
      location: '',
      minPrice: '',
      maxPrice: '',
      amenities: []
    })
    const [loading,setLoading]=useState(false)
   const fetchData=async()=>{
    setLoading(true)
 const response=await axios.get('https://roommatefinder-server-site.vercel.app/rooms', {
        params: filter,
      })
      setRooms(response.data)
      setLoading(false)
   }
   useEffect(()=>{
    
  
   fetchData()

   },[])
   const handleFilterChange=(e)=>{

    const{ name,value}=e.target
  
    setFilters({...filter,[name]:value})
    
   
   }

   const  toggleAmenity=(amenity)=>{
    setFilters({
        ...filter,amenities:  filter.amenities.includes(amenity) ? filter.amenities.filter(a=>a!==amenity):
        [...filter.amenities,amenity]
    }
  ) }
  

    return (
        <div className=' w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between  gap-4'>
               <div className='w-1/4 mx-auto'>
                  <h1 className='text-3xl font-bold text-center mb-4'>filter</h1>
            <div className=''>
                <Select  >
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="All Rooms" />
  </SelectTrigger>
  <SelectContent>
  
    <SelectItem   value="light">Single</SelectItem>
    <SelectItem value="dark">Shared</SelectItem>
    <SelectItem value="system">Studio</SelectItem>
  </SelectContent>
</Select>
            </div>
         <div className="space-y-2">
                  {['WiFi', 'Kitchen', 'Washer', 'AC', 'Parking'].map(amenity => (
                    <label key={amenity} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filter.amenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="rounded text-[#f48c00]"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
               </div>
               <div className='w-3/4 '>
               {  loading ? <div>loading...</div>
               :  rooms.length===0 ?   <div>Not found </div> 
                
                 :
               
                rooms.map((room)=>( <div className="flex flex-col md:flex-row">
                   <div className="md:w-1/3 h-64 md:h-auto relative">
                       <img 
                         src={room.photos[0]} 
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
                  ))
               }
               
                </div>    
        </div>
    );
};

export default Filter;