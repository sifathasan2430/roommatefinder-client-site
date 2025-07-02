import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    _id: "c1",
    name: "Private Room",
    slug: "private-room",
    iconUrl:
      "https://img.freepik.com/premium-vector/user-privacy-icon-vector-image_707519-2537.jpg",
    description:
      "Entire room with privacy, often with its own bathroom, furnished space, and no sharing.",
  },
  {
    _id: "c2",
    name: "Shared Room",
    slug: "shared-room",
    iconUrl:
      "https://icons.iconarchive.com/icons/icons8/android/256/Household-Room-icon.png",
    description:
      "A budget-friendly room shared with others — great for students, travelers, or anyone looking to save and meet new people.",
  },
  {
    _id: "c3",
    name: "Entire Apartment",
    slug: "Entire Apartment",
    iconUrl:
      "https://icons.iconarchive.com/icons/apathae/chakram-2/256/Home-icon.png",
    description:
      "Get the entire room for yourself — private, secure, and ideal for individuals or couples looking for full privacy.",
  },
];


const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hoverVariants = {
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const RoomCategories = () => {
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Choose Your Room Type
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Select the perfect accommodation that fits your needs and preferences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category._id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col items-center"
            >
              <motion.div
                variants={hoverVariants}
                className="hover:scale-105 hover:bg-amber-500 transition-transform duration-300 cursor-pointer relative  rounded-xl shadow-lg overflow-hidden w-full h-full flex flex-col"
              >
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="bg-amber-100 p-4 rounded-full mb-4">
                    <img
                      src={category.iconUrl}
                      alt={category.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {category.description}
                  </p>
                  <button   className="px-6 py-2 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 hover:border-amber-600 hover:border-2 transition-colors">
                    <Link to={`/allrooms`}>View rooms</Link>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;