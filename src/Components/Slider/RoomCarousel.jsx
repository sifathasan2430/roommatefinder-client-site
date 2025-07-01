import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

const RoomCarousel = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Stay",
      subtitle: "Discover luxury accommodations tailored to your preferences",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3",
      primaryButton: "Explore Rooms",
      secondaryButton: "View Offers"
    },
    {
      id: 2,
      title: "Exclusive City Views",
      subtitle: "Premium rooms with breathtaking cityscapes",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
      primaryButton: "Book Now",
      secondaryButton: "Virtual Tour"
    },
    {
      id: 3,
      title: "Luxury Redefined",
      subtitle: "Experience unparalleled comfort in our signature suites",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3",
      primaryButton: "View Suites",
      secondaryButton: "Contact Us"
    }
  ];

  return (
    <div className="relative w-full h-[70vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative space-y-2">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto h-full flex items-center relative z-10 px-6">
              <div className="max-w-3xl animate-fade-in">
                <h2 className="text-[#f48c00] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xs lg:text-xl mb-10 text-white/90 leading-relaxed max-w-2xl">
                  {slide.subtitle} Discover comfort, style, and convenience like never before. Whether you're moving in for a month or a year, we've got the perfect room for your lifestyle.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#f48c00] hover:bg-[#e07f00] text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-xl">
                    {slide.primaryButton} <FaArrowRight />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition duration-300">
                    <FaInfoCircle /> {slide.secondaryButton}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomCarousel;
