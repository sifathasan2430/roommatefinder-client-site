import React, { useContext } from "react";
import UserAuthContext from "../Context/Context";
import { useLoaderData } from "react-router";

const UpdatePost = () => {
  const { user } = useContext(UserAuthContext);
  const post = useLoaderData();
  console.log(post);
  const updateDataHandler = (e) => {
    e.preventDefault()
    const form=e.target
    const FormInputData=new FormData(form)
    const updateData=Object.fromEntries(FormInputData.entries())
    console.log(post._id)
    fetch(`https://roommatefinder-server-site.vercel.app/updateData/${post._id}`,{
      method:"PUT",
      headers:{
               "Content-Type": "application/json"
      },
      body:JSON.stringify(updateData)
    }).then(res=>res.json()).then(data=>{
      if (data.modifiedCount){
        alert('dataupdate succeseefully')
      }
    })
  };

  return (
    <div className=" bg-gradient-to-br from-[#0f172a] via-[#581c87] to-[#0f172a]">
      <div className="max-w-[712px] text-center mx-auto  py-4">
        <h1 className="text-4xl  my-4 sm:my-8  sm:text-5xl font-bold text-[#bf51d8]">
          Update Your Post
        </h1>
        <p className="text-xl text-center my-4 text-gray-400 font-semibold">
          Browse through available listings and connect with potential
          roommates. Your next home is just a click away!
        </p>
      </div>
      <div class="max-w-7xl mx-auto p-6 bg-[#57317c] shadow-xl rounded-2xl ">
        <form onSubmit={updateDataHandler} class="space-y-8 ">
          <div>
            <label class="block text-2xl sm:text-3xl my-4 font-bold text-[#d8b4fe]">
              Title:
            </label>
            <input
              defaultValue={post.title}
              type="text"
              placeholder="e.g., Looking for a roommate in NYC"
              name="title"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl sm:text-3xl my-4 font-bold text-[#d8b4fe]">
              SubTitle:
            </label>
            <input
              defaultValue={post.subtitle}
              type="text"
              placeholder="e.g., Looking for a roommate in NYC"
              name="subtitle"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Location:
            </label>
            <input
              defaultValue={post.location}
              type="text"
              name="location"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Rent Amount:
            </label>
            <input
              defaultValue={post.rent}
              type="number"
              name="rent"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl my-4 sm:text-3xl font-bold text-[#d8b4fe]">
              Security deposit:
            </label>
            <input
              defaultValue={post.securityrent}
              type="number"
              name="securityrent"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Room Type:
            </label>
            <select
              name="roomType" defaultValue={post.roomType}
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            >
              <option>Single</option>
              <option>Shared</option>
              <option>Studio</option>
              <option>Private</option>
            </select>
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Lifestyle Preferences:
            </label>
            <input
              defaultValue={post.
lifeStyle}
              type="text"
              name="lifeStyle"
              placeholder="e.g., Pets allowed, Non-smoker, Night owl"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Description:
            </label>
            <textarea
              rows="4"
              name="description" defaultValue={post.description}
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            ></textarea>
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Contact Info:
            </label>
            <input
              defaultValue={post.contactNumber}
              type="text"
              name="contactNumber"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              PhotoUrl:
            </label>
            <input
              defaultValue={post.photoUrl}
              type="text"
              name="photoUrl"
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl  my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              Availability:
            </label>
            <select
              name="availablity" defaultValue={post.availablity}
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            >
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>
          <div>
            <label class="block text-2xl my-4 sm:text-3xl font-bold text-[#d8b4fe]">
              User Email:
            </label>
            <input
              
              name="email"
              type="email"
              defaultValue={user.email}
              readonly
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div>
            <label class="block text-2xl my-4 sm:text-3xl  font-bold text-[#d8b4fe]">
              User Name:
            </label>
            <input
              
              name="name"
              type="text"
              value={user.displayName}
              readonly
              class="w-full mt-1 py-2 px-4 font-semibold text-white text-2xl  bg-[#453b69] border-none rounded-lg focus:outline-none focus:ring  focus:ring-white"
            />
          </div>
          <div class="pt-4">
            <button type="submit" class="bg-gradient-to-r from-[#0f172a]  to-[#0f172a] text-white cursor-pointer px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
