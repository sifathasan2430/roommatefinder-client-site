import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsPage = () => {
  const detailPost=useLoaderData()
  console.log(detailPost)
const word=detailPost.
lifeStyle.split(" ")
const Lifestyle=word.filter(Boolean)

// console.log(word)
    return (
         <div class="max-w-6xl mx-auto p-4">
    <div class="mb-4">
     
      <div class="flex items-center space-x-2 mt-2">
        <span class="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">FEATURED</span>
        <span class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">FOR RENT</span>
      </div>
       <h1 class="text-2xl font-semibold">{detailPost.title}</h1>
      <p class="text-sm text-gray-500 mt-1">{detailPost.location}</p>
    </div>

   <div className='grid grid-cols-1 md:grid-cols-2'>
 <div class="mb-4">
      <img src={detailPost.photoUrl} alt="Main" class=" max-w-[100%] flex-grow h-auto object-contain rounded-lg"/>
     
    
    </div>

   <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow space-y-6">
  <div className='flex justify-between'>
   <div>
     <h1 class="text-2xl font-bold">{detailPost.title}</h1>
    <p class="text-gray-600">{detailPost.subtitle}</p>
   </div>
   <div>
     <button className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
   </div>
   
  </div>

  <div class="flex flex-wrap gap-4 text-yellow-600 text-sm font-medium">
    <div class="flex items-center space-x-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 20h5V10l-7-5-7 5v10h5"></path></svg>
      <span>2 roomies</span>
    </div>
    <div class="flex items-center space-x-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21V9a3 3 0 016 0v12"></path></svg>
      <span>4 bathrooms</span>
    </div>
    <div class="flex items-center space-x-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 17h16M4 11h16M4 5h16"></path></svg>
      <span>5 bedrooms</span>
    </div>
  </div>

  <div class="space-y-4 text-sm text-gray-700">
    <div class="flex justify-between">
      <span>Rent</span><span class="font-semibold">${detailPost.rent}</span>
    </div>
    <div class="flex justify-between">
      <span>Bills</span><span class="font-semibold">Included</span>
    </div>
    <div class="flex justify-between">
      <span>Security deposit</span><span class="font-semibold">${detailPost.securityrent}</span>
    </div>
    <div class="flex justify-between">
      <span>Property type</span><span class="font-semibold">House</span>
    </div>
    <div class="flex justify-between">
      <span>Room furnishing</span><span class="font-semibold">Furnished</span>
    </div>
    <div class="flex justify-between">
      <span>Preferred gender</span><span class="font-semibold">Anyone welcome</span>
    </div>
    <div class="flex justify-between">
      <span>Available on</span><span class="font-semibold">{detailPost.
availablity}</span>
    </div>
    <div class="flex justify-between">
      <span>Stay length</span><span class="font-semibold">Minimum 2 months</span>
      
    </div>
    <div className='flex justify-between'><span>roomType</span><span class="font-semibold">{detailPost.
roomType
}</span>
</div>
<div>
  <h1 className='text-xl font-bold my-2'>About the Room</h1>
<p>{detailPost.description}</p>
</div>
  </div>

  <div class="flex flex-wrap gap-2 text-xs">
   
    {
      Lifestyle.map(items=><span class="px-3 py-1 bg-gray-100 rounded">{items}</span> )
    }
    
</div>
   </div>
  </div>
  </div>
    );
};

export default DetailsPage;