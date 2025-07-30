import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCategory, setPriceRange } from '../../features/filters/filterSlice';
import { debounce } from 'lodash';

const RoomFilters = ({
    showFilters=false,
    rooms,

}) => {
         const dispatch=useDispatch()
         const [min,setMin]=useState('')
         const [max,setMax]=useState('') 
         const filterFunctuion=()=>{
           dispatch(setPriceRange({max,min}))
         }

         useEffect(()=>{
          
          filterFunctuion()

         },[min,max])
       
        
    return (
        <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-xl shadow-sm h-fit lg:sticky lg:top-4`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaFilter/> Filters
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Room Type</label>
                <select
                  name="category"
                 onChange={(e)=>dispatch(setCategory(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="">All Types</option>
                 {
                    rooms &&  [...new Set(rooms.map((room) => room.category?.name))].map(category=>(<option  key={category} value={category}>{category}</option>))
                 }
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    name="minPrice"
                    value={min}
                    onChange={(e)=>setMin(e.target.value) }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    name="maxPrice"
                    value={max}
                   onChange={(e)=>setMax(e.target.value) }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amenities</label>
                <div className="space-y-2">
                  {rooms &&  ([...new Set (rooms.map(items=>items.amenities))].flat().slice(0,6)).map((amenity,index )=> (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                       
                        className="rounded text-[#f48c00]"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                
                className="w-full bg-[#f48c00] text-white py-2 rounded-lg hover:bg-[#e07f00] transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
    );
};

export default RoomFilters;