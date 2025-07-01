import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserAuthContext from '../../Context/Context';

const MyBookings = () => {
    const {user}=useContext(UserAuthContext)

const [bookings,setBookings]=useState([])
const api=async()=>{
   const response=await axios.get(`https://roommatefinder-server-site.vercel.app/mybookings?email=${user?.email}`)
   setBookings(response.data)
}

useEffect(()=>{
    api()
},[bookings])
console.log(bookings[0].email)
    return (
        <div className="overflow-x-auto">
  <table className="table text-center">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>moveInDate</th>
        <th>moveOutDate</th>
        <th>Paid</th>
      </tr>
    </thead>
    <tbody className='text-black'>
      {
  bookings.length > 0 ? bookings.map((items, ind) => (
    <tr key={ind + 1}>
        <td>{ind+1}</td>
      <td>{items.fullName}</td>
      <td>{items.email}</td>
      <td>{items.moveInDate}</td>
      <td>{items.moveOutDate}</td>
      <td>{items.payment}</td>
    </tr>
  )) : (
    <tr>
      <td colSpan="5" className="text-center py-4 text-gray-500">No bookings found.</td>
    </tr>
  )
}
   
    </tbody>
  </table>
</div>
    );
};

export default MyBookings;