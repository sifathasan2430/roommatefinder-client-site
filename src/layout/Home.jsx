import React from "react";
import Herobanner from "../Components/Herobanner";
import Cards from "../Components/Cards";
import { useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const members = useLoaderData();

  return (
    <div className="bg-[#060A21]">
      <Herobanner></Herobanner>
      <div className="my-2 sm:my-10">
        <div className="text-center space-x-3.5 space-y-4">
        <h1 className="text-2xl text-white py-3 sm:text-4xl font-bold">
            Meet Your Future <span className=" bg-[linear-gradient(to_right,#8389f2,#e449a4)] bg-clip-text text-transparent">Roommates</span>
          </h1> 
         <h1 className="text-2xl font-bold text-white">
      <Typewriter
        words={['Find Your Roommate', 'Welcome to Roommatefinder', 'Access all over the country']}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
          <p className="text-[16px] py-1 text-center text-white sm:text-[18px] my-4 sm:my-8 font-semibold">
            Browse profiles of people looking for roommates in your area. Connect and find your perfect match.
          </p>
        </div>
        <div className="sm:my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.slice(0, 6).map((items) => (
            <Cards items={items} key={items._id}></Cards>
          ))}
        </div>
        <div>
            <h1 className="text-2xl text-center text-white py-3 sm:text-4xl font-bold">
          Explore <span className=" bg-[linear-gradient(to_right,#8389f2,#e449a4)] bg-clip-text text-transparent">Shared Living Spaces</span>
          </h1> 
          
             <p className="text-[16px] py-1 text-center text-white sm:text-[18px] my-4 sm:my-8 font-semibold">Get a glimpse of the beautiful and comfortable homes available. Imagine yourself living her</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
