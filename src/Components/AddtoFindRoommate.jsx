import React, { useContext, useState } from 'react';
import UserAuthContext from '../Context/Context';
import Swal from 'sweetalert2';

const AddToFindRoommate = () => {
    const {user}=useContext(UserAuthContext)

    const inputDataHandler=(e)=>{
        e.preventDefault()
        const form=e.target
        const formDataColl=new FormData(form)
        const inputData=Object.fromEntries(formDataColl.entries())


fetch('http://localhost:3000/addmember',{
    method:"POST",
    headers:{
           "Content-Type": "application/json"
    },
    body:JSON.stringify(inputData)
}).then(res=>res.json()).then(data=>{
  if (data.insertedId){
    Swal.fire({
  title: "Congratulation Your Post Added",
  icon: "success",
  draggable: true
});
  }

})

    }
    return (
        <div class="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
  <h2 class="text-2xl font-bold mb-6 text-gray-800">Roommate Finder Form</h2>
  <form onSubmit={inputDataHandler} class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Title</label>
      <input type="text" placeholder="e.g., Looking for a roommate in NYC" name='title' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
     <div>
      <label class="block text-sm font-medium text-gray-700">SubTitle</label>
      <input type="text" placeholder="e.g., Looking for a roommate in NYC" name='subtitle' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Location</label>
      <input type="text" name='location' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Rent Amount</label>
      <input type="number" name='rent' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />

    </div>
        <div>
      <label class="block text-sm font-medium text-gray-700">Security deposit</label>
      <input type="number" name='securityrent' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
      
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Room Type</label>
      <select name='roomType' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200">
        <option>Single</option>
        <option>Shared</option>
        <option>Studio</option>
        <option>Private</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Lifestyle Preferences</label>
      <input type="text" name='lifeStyle' placeholder="e.g., Pets allowed, Non-smoker, Night owl" class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Description</label>
      <textarea rows="4" name='description' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"></textarea>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Contact Info</label>
      <input type="text" name='contactNumber' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">PhotoUrl</label>
      <input type="text" name='photoUrl' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Availability</label>
      <select name='availablity' class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200">
        <option>Available</option>
        <option>Not Available</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">User Email</label>
      <input name='email' type="email" defaultValue={user.email} readonly class="w-full mt-1 p-2 border bg-gray-100 rounded-lg text-gray-500 cursor-not-allowed" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">User Name</label>
      <input name='name' type="text" value={user.displayName} readonly class="w-full mt-1 p-2 border bg-gray-100 rounded-lg text-gray-500 cursor-not-allowed" />
    </div>
    <div class="pt-4">
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
        Add
      </button>
    </div>
  </form>
</div>
    );
};

export default AddToFindRoommate;
