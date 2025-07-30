import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sarah Ali',
    profession: 'University Student',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    review:
      'This site helped me find a safe and affordable room within two days. The listings were well-detailed, and I could connect with the landlord directly. As a student, I appreciated the filters for student-friendly rooms.',
    rating: 5,
  },
  {
    name: 'John Smith',
    profession: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Very trustworthy platform. I was relocating for a remote job and needed a private, quiet space. The verified listings and support team gave me peace of mind. Booking was simple, and there were no hidden fees.',
    rating: 4,
  },
  {
    name: 'Maria Gomez',
    profession: 'Freelance Designer',
    photo: 'https://randomuser.me/api/portraits/women/23.jpg',
    review:
      'I found a beautiful studio apartment that matched my style and budget. The UI is clean, the support is fast, and the landlord was responsive. I’d recommend this to anyone who values quality listings and transparency.',
    rating: 5,
  },
];

const ReviewCarousel = () => {
  return (
    <section className="py-16 bg-amber-400 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...reviews,...reviews].map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col justify-between hover:shadow-xl transition duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.profession}</p>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-2 line-clamp-6">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewCarousel;
