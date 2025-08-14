import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPriceRange,resetFilters } from '../../../features/filters/filterSlice';


const RoomFilters = ({
    showFilters=true,
    rooms,

}) => 
  {

    const minFromRedux=useSelector(state=>state.filters?.min)
    const maxFromRedux=useSelector(state=>state.filters?.max)
         const dispatch=useDispatch()
         const [min,setMin]=useState(minFromRedux)
         const [max,setMax]=useState(maxFromRedux) 
       

        useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setPriceRange({ max, min }));

    }, 500); 

    return () => clearTimeout(timer); // cleanup old timer on change
  }, [min, max, dispatch])
        
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
                  <option defaultValue="">All Types</option>
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
                    defaultValue={min}
                    onChange={(e)=>setMin(e.target.value) }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    name="maxPrice"
                    defaultValue={max}
                   onChange={(e)=>setMax(e.target.value) }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              

           <div className='flex gap-4'>
              
              <button
                     onClick={()=>dispatch(resetFilters())}
                className="w-full bg-[#f48c00] text-white py-2 rounded-lg hover:bg-[#e07f00] transition-colors"
              >
                Clear Filter
              </button>
           </div>
            </div>
          </div>
    );
};

export default RoomFilters;