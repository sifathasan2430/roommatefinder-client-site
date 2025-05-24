import React from 'react';
import Fade, { Slide } from 'react-awesome-reveal'
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { useNavigate } from 'react-router';
const Herobanner = () => {
  const navigate=useNavigate()
    return ( <>
        {/* <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
   <Fade duration={1500}>
  <h1>Welcome to Our Site</h1>
  <Fade delay={500} cascade damping={0.3}>
    <p>Discover amazing features</p>
    <button>Get Started</button>
  </Fade>
</Fade>
 <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">USA’s largest roommate finder</h1>
      <p className="mb-5">
      Free to list, search & communicate
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
 <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{delay:100}}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
  
    >
      <SwiperSlide className=''>
         <div className="bg-[url('https://cdn.britannica.com/59/94459-050-DBA42467/Skyline-Chicago.jpg')] max-w-full flex flex-col justify-center items-center h-[100vh] py-20 text-center mx-auto">
     <Slide direction='down' duration={700}> <h1 className="mb-5 text-4xl sm:text-6xl text-white font-bold"><span className='bg-gradient-to-r from-[#8884f8] to-[#E449A3] bg-clip-text text-transparent'> List </span>Your Spare Room</h1></Slide>
    <Slide direction='up' duration={700} > <p className="text-2xl font-semibold text-white my-5">
     Discover compatible roommates in your city with ease. Start your search today!
      </p></Slide> 
  <Fade  delay={700}>
     <div className='py-8'>
       <button onClick={()=>navigate("/addtofindroommate")} className="btn text-white text-xl bg-gradient-to-r from-[#8884f8] to-[#E449A3]  rounded-4xl ">Add Your Post</button>
   </div>
  </Fade>
    </div>
      </SwiperSlide>
       <SwiperSlide className=''>
         <div className="bg-[url('https://assets.princess.com/is/image/princesscruises/what-is-california-known-for-hollywood:16x9?ts=1724185201965')] bg-cover bg-no-repeat w-full flex flex-col justify-center items-center h-[100vh] py-20 text-center mx-auto">
     <Slide direction='down' duration={700}> <h1 className="mb-5 text-4xl sm:text-6xl text-white font-bold">Live Better, Together
</h1></Slide>
    <Slide direction='up' duration={700} > <p className="text-2xl font-semibold text-white my-5">
    Connect with like-minded individuals and build lasting friendships.
      </p></Slide> 
  <Fade  delay={700}>
     <div className='py-8'>
       <button onClick={()=>navigate("/addtofindroommate")} className="btn text-white text-xl bg-gradient-to-r from-[#8884f8] to-[#E449A3]  rounded-4xl ">Add Your Post</button>
   </div>
  </Fade>
    </div>
      </SwiperSlide>

      <SwiperSlide className=''>
         <div className="bg-[url('https://assets.prevu.com/blogs/images/best-beach-towns-in-california-to-buy-a-house/fe4590e2878538f755669f1695a137b0?ixlib=rb-4.0.3&w=450&fit=crop&lossless=true&auto=format&q=40&dpr=2&s=912f772fcb94c43bec27fa1b449c7bc9')] bg-no-repeat  bg-cover max-w-full flex flex-col justify-center items-center h-[100vh] py-20 text-center mx-auto">
     <Slide direction='down' duration={700}> <h1 className="mb-5 text-4xl sm:text-6xl text-white font-bold"><span className='bg-gradient-to-r from-[#8884f8] to-[#E449A3] bg-clip-text text-transparent'> List </span> Your Spare Room</h1></Slide>
    <Slide direction='up' duration={700} > <p className="text-2xl font-semibold text-white my-5">
    have an empty room? Find reliable and friendly tenants quickly and safely.

List Your Room


      </p></Slide> 
  <Fade  delay={700}>
     <div className='py-8'>
       <button onClick={()=>navigate("/addtofindroommate")} className="btn text-white text-xl bg-gradient-to-r from-[#8884f8] to-[#E449A3]  rounded-4xl ">Add Your Post</button>
   </div>
  </Fade>
    </div>
      </SwiperSlide>
      
      ...
    </Swiper>
 

</>
    );
};

export default Herobanner;