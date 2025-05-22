import React from 'react';
import { NavLink, useNavigate } from 'react-router';

const Cards = ({items}) => {
  const navigate=useNavigate()
    
     const { _id,photoUrl,description,location,rent, roomType,title,subtitle, phoneNumber}=items
     
     
    return (
        

    <div className="card  w-full shadow-sm">
  <figure className=''>
    <img className='h-[350px] w-[450px] rounded-2xl'
      src={photoUrl}
      alt="HomePhoto" />
  </figure>
  <div className="p-6 space-y-6 flex-grow">
    
     <div className='flex justify-between items-center'>
        <h3 class="text-xl md:text-2xl text-white font-bold my-2">{title}</h3>
      <div class="text-xl md:text-2xl text-white font-bold my-2"> $ <span class="">{rent}/ mo</span></div>
     </div>
     
     <div className=''>
      <h3 className='text-[18px] mb-3 font-semibold text-[#a4b3fb]'>{subtitle}</h3>
      <h4 className='text-[18px] my-6 text-[#c5cfdb]'>{description.slice(0,200)}</h4>
      
      <div className='flex justify-between  text-white items-center my-2'>
        <p class="text-xl text-white mt-1">{location.slice(0,25)}</p>
        <p className='text-xl font-bold'>Available</p>
      </div>
     </div>

     
      <div class="flex flex-wrap  justify-between items-center text-sm text-white mt-4 gap-y-2">
        <div class="flex  items-center gap-1"><span>🛏</span> <span>3 Beds</span></div>
        <div class="flex items-center gap-1"><span>🛁</span> <span>2 Baths</span></div>
        <div class="flex items-center gap-1"><span>📐</span> <span>600 sqft</span></div>
      </div>
    </div>
    <div className='text-center pb-6'>
      <button onClick={()=>navigate(`/details/${_id}`)} className='btn bg-gradient-to-r outline-0  from-[#483bd9] text-white font-bold text-xl to-[#d52881] w-[200px] rounded-4xl' > 
      ViewDetails</button>
    </div>
    </div>
 

    
    );
};

export default Cards;