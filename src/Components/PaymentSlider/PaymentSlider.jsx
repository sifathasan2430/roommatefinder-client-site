import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const paymentLogos = [
   {
    name: 'Visa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
  },
  {
    name: 'MasterCard',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png',
  },
  
  {
    name: 'PayPal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
  },
  {
    name: 'Stripe',
    url: 'https://stripe.com/img/about/logos/logos/blue@2x.png',
  },
  {
    name: 'Apple Pay',
    url: 'https://i.ibb.co/PZZFC6D4/download.jpg',
  },
  {
    name: 'Google Pay',
    url: 'https://i.ibb.co/G323mfWs/download-2.jpg',
  },
  {
    name: 'bKash',
    url: 'https://upload.wikimedia.org/wikipedia/bn/thumb/a/a8/%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg/1280px-%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B6%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B.svg.png',
  },
 


  {
    name: 'Wise (TransferWise)',
    url: 'https:https://i.ibb.co/LzxKwDLK/download.png',
  },

];

const PaymentSlider = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Supported Payment Methods
        </h2>
        <Swiper
          modules={[Autoplay]}
         
          spaceBetween={30}
          loop={true}
        //   autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {paymentLogos.map((item, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                 src={item.url}
                alt={item.name}
                className="h-12 w-24 object-contain grayscale-0 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PaymentSlider;