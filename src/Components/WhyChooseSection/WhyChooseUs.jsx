import React from 'react';
import { FaCheckCircle, FaLock, FaHeadset, FaTags } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle className="text-[#f48c00] text-4xl mb-4" />,
    title: 'Verified Listings',
    description: 'Every room is checked and verified by our team to ensure safety and comfort.',
  },
  {
    icon: <FaLock className="text-[#f48c00] text-4xl mb-4" />,
    title: 'Secure Payment',
    description: 'Make payments confidently with our trusted and encrypted system.',
  },
  {
    icon: <FaHeadset className="text-[#f48c00] text-4xl mb-4" />,
    title: '24/7 Support',
    description: 'Our friendly support team is available anytime you need help.',
  },
  {
    icon: <FaTags className="text-[#f48c00] text-4xl mb-4" />,
    title: 'Best Price Guarantee',
    description: 'We offer the best value with no hidden fees or overcharges.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
