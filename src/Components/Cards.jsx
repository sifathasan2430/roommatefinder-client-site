import React from 'react';
import { NavLink } from 'react-router';

const Cards = ({items}) => {
    console.log(items)
     const { _id,photoUrl,description,location, roomType,title,subtitle, phoneNumber}=items
     const price=phoneNumber;
     
    return (
        

    <div className="card bg-base-100 w-full shadow-sm">
  <figure className='p-6'>
    <img className='h-[350px] w-[450px] rounded-2xl'
      src={photoUrl}
      alt="HomePhoto" />
  </figure>
  <div className="px-6 pb-6 space-y-3 flex-grow">
    
     <div className='flex justify-between items-center'>
        <h3 class="text-xl md:text-xl font-semibold mt-1">{title}</h3>
      <div class="text-sm text-gray-900 font-medium"> $ <span class="text-sm text-gray-900 font-bold">{price}/ mo</span></div>
     </div>
     
     <div>
      <h3>{subtitle}</h3>
      <h4>{description.slice(0,250)}</h4>
      
      <div className='flex justify-between items-center my-2'>
        <p class="text-xl text-gray-700 mt-1">{location.slice(0,25)}</p>
        <p className='text-xl font-bold'>Available</p>
      </div>
     </div>

     
      <div class="flex flex-wrap justify-between items-center text-sm text-slate-600 mt-4 gap-y-2">
        <div class="flex items-center gap-1"><span>🛏</span> <span>3 Beds</span></div>
        <div class="flex items-center gap-1"><span>🛁</span> <span>2 Baths</span></div>
        <div class="flex items-center gap-1"><span>📐</span> <span>600 sqft</span></div>
      </div>
    </div>
    <div className='p-6'>
      <button className='btn w-full' > <NavLink to={`/details/${_id}`}>
      ViewDetails</NavLink></button>
    </div>
    </div>
 

    
    );
};

export default Cards;