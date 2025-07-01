import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaStar, FaFilter, FaSearch } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import RoomCard from '../../Components/RoomCard/RoomCard';

// Category data
const categories = [
  {
    id: 'private',
    name: 'Private Rooms',
    icon: '🔒',
    description: 'Enjoy complete privacy with your own space',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'shared',
    name: 'Shared Rooms',
    icon: '👥',
    description: 'Affordable options with shared living spaces',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'apartment',
    name: 'Entire Apartments',
    icon: '🏠',
    description: 'Your own fully-equipped private apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'luxury',
    name: 'Luxury Spaces',
    icon: '✨',
    description: 'Premium accommodations with top amenities',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filters, setFilters] = useState({ 
    category: '', 
    location: '',
    minPrice: '',
    maxPrice: '',
    amenities: []
  });
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();
  

  // Set initial category filter if coming from category page
  // useEffect(() => {
  //   if (category) {
  //     setFilters(prev => ({ ...prev, category }));
  //   }
  // }, [category]);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://roommatefinder-server-site.vercel.app/rooms', {
        params: filters,
      });
      setRooms(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const toggleAmenity = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-800 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Rooms"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Find Your Perfect Space
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg md:text-xl mb-8"
            >
              Discover rooms and apartments that match your lifestyle
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-2 rounded-lg shadow-lg max-w-2xl mx-auto"
            >
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search by location..."
                  className="flex-grow px-4 py-2 border-none focus:outline-none"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                />
                <button 
                  className="bg-[#f48c00] text-white px-6 py-2 rounded-lg flex items-center"
                  onClick={fetchRooms}
                >
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -5 }}
                
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{cat.icon}</span>
                    <h3 className="text-lg font-bold">{cat.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{cat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md w-full"
            >
              <FaFilter />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-xl shadow-sm h-fit lg:sticky lg:top-4`}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaFilter /> Filters
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Room Type</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option value="">All Types</option>
                  <option value="Private Room">Private Room</option>
                  <option value="Shared Room">Shared Room</option>
                  <option value="Entire Apartment">Entire Apartment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Amenities</label>
                <div className="space-y-2">
                  {['WiFi', 'Kitchen', 'Washer', 'AC', 'Parking'].map(amenity => (
                    <label key={amenity} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => toggleAmenity(amenity)}
                        className="rounded text-[#f48c00]"
                      />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={fetchRooms}
                className="w-full bg-[#f48c00] text-white py-2 rounded-lg hover:bg-[#e07f00] transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Rooms List */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {filters.category ? `${filters.category}s` : 'All Rooms'} 
                {filters.location && ` in ${filters.location}`}
              </h2>
              <p className="text-gray-600">{rooms.length} properties found</p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/3 w-full h-48 bg-gray-200 rounded-lg">heii</div>
                      <div className="md:w-2/3 space-y-3">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-16 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : rooms.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h3 className="text-xl font-bold mb-2">No rooms found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search in a different location</p>
                <button
                  onClick={() => setFilters({ category: '', location: '' })}
                  className="text-[#f48c00] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {rooms.map((room) => (
                  <RoomCard key={room._id} room={room} navigate={navigate} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};




export default AllRooms;