import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const BrowserListingPage = () => {
  const posts=useLoaderData()
  const navigate=useNavigate()
  
  return (
    <div className="bg-gradient-to-r from-[#1b1839] to-[#551b83]">
    <div className="max-w-[712px] text-center mx-auto  py-4">
        <h1 className="text-4xl  my-4 sm:my-8  sm:text-5xl font-bold text-[#bf51d8]">
        Find Your Perfect Roommate
      </h1>
      <p className="text-xl text-center my-4 text-gray-400 font-semibold">
        Browse through available listings and connect with potential roommates.
        Your next home is just a click away!
      </p>
    </div>

    <div className=" py-4 sm:py-12 px-4  sm:px-10">
             <div className="overflow-x-auto">
  <table className="table   ">
    
    <thead >
      <tr className="text-[#BF51D8]   bg-slate-800/50 hover:bg-[#9692ab] text-center text-xl font-semibold">
        <th>No</th>
        <th>Name</th>
        <th>Title</th>
        <th>Location</th>
        <th>Rent</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="bg-gradient-to-r from-[#5d2e78] via-[#683097] space-x-4 to-[#4d2e74]">
      
   { posts.map((items,index)=> <tr key={items._id} className=" text-xl text-white text-center">
        <th>{index +1}</th>
        <td>{items.name}</td>
        <td>{items.title}</td>
        <td>{items.location}</td>
        <td>${items.rent}</td>
        <td><button onClick={()=>navigate(`/details/${items._id}`)} className="btn btn-secondary">ViewDetails</button></td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
    </div>
    </div>
  );
};

export default BrowserListingPage;
