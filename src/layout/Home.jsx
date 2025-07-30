import React, { Suspense, useEffect, useState } from "react";
import Herobanner from "../Components/Herobanner";

import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

import RoomCarousel from "../Components/Slider/HeroBanner";
import RoomCategories from "../Components/Category/RoomCategories";
import FeaturedRoomsSection from "../Components/FeaturedRoomsSection/FeaturedRoomsSection";
import WhyChooseUs from "../Components/WhyChooseSection/WhyChooseUs";
import ReviewSection from "../Components/ReviewSection/ReviewSection";
import PaymentSlider from "../Components/PaymentSlider/PaymentSlider";
import axios from "axios";
import Loader from "../Components/Loader";
import HeroBanner from "../Components/Slider/HeroBanner";


const Home = () => {
 
  
  const [featuredRooms, setFeaturedRooms] = useState([]);

  useEffect(() => {
       axios
      .get("https://roommatefinder-server-site.vercel.app/rooms/featured")
      .then((res) => setFeaturedRooms(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    
    <>
      <HeroBanner/>
      <RoomCategories/>
      <FeaturedRoomsSection
        featuredRooms={featuredRooms}
      />
      <WhyChooseUs/>
      <ReviewSection/>
      <PaymentSlider/>
     
     
    </>
  );
};

export default Home;
