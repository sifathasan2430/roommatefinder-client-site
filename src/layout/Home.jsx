import React, { Suspense, useEffect, useState } from "react";
import Herobanner from "../components/Herobanner";

import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

import RoomCarousel from "../components/Slider/HeroBanner";
import RoomCategories from "../components/Category/RoomCategories";
import FeaturedRoomsSection from "../components/FeaturedRoomsSection/FeaturedRoomsSection";
import WhyChooseUs from "../components/WhyChooseSection/WhyChooseUs";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import PaymentSlider from "../components/PaymentSlider/PaymentSlider";
import axios from "axios";
import Loader from "../components/Loader";
import HeroBanner from "../components/Slider/HeroBanner";


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
