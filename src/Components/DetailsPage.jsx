import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy data for new features
const dummyUtilities = 150; // Dummy utilities cost per month
const dummyTaxRate = 0.08; // 8% tax
const dummyMonths = 3; // Default stay duration in months for calculation

// Dummy coordinates for Atlanta (since location is Atlanta-based)
const dummyPosition = [33.7490, -84.3880]; // Latitude and Longitude for Atlanta

// Dummy data for unique features
const dummyVirtualTourPhotos = [
 "https://a0.muscache.com/im/pictures/miso/Hosting-973934339954558939/original/06040eaa-c34a-43f7-aeae-5606864a31ba.jpeg?im_w=960",
 'https://a0.muscache.com/im/pictures/miso/Hosting-973934339954558939/original/055eada4-7e2b-478a-b591-8e81008c4d6c.jpeg?im_w=720',
 "https://a0.muscache.com/im/pictures/miso/Hosting-973934339954558939/original/05ca6492-16ce-43fd-944f-f7ca89a3316a.jpeg?im_w=720"
];

const dummyRoommateMatch = {
  score: 85,
  reasons: ['Compatible lifestyle', 'Similar interests in quiet environment', 'Proximity to workspaces'],
};

const dummyEnergyRating = {
  rating: 'A+',
  details: 'Low energy consumption with LED lighting, efficient appliances, and solar panels.',
};

const RoomDetails = () => {
  const rooms = useLoaderData();
  const [relatedRooms, setRelatedRooms] = useState([]);
  const [stayMonths, setStayMonths] = useState(dummyMonths);
  const navigate = useNavigate();

  useEffect(() => {
    if (rooms?.category?.name) {
      axios
        .get(`https://roommatefinder-server-site.vercel.app/rooms/related?category=${rooms.category.name}`)
        .then((res) => setRelatedRooms(res.data))
        .catch((err) => console.error(err));
    }
  }, [rooms]);

  if (!rooms) return <p className="text-center text-xl py-10">Loading room details...</p>;

  const {
    _id, title, subtitle, location, category, roomType, lifestyle,
    amenities, photos, rent, currency,
    availability, postedBy, postedAt, description
  } = rooms;

  // Dynamic price calculation
  const baseRent = rent * stayMonths;
  const utilities = dummyUtilities * stayMonths;
  const tax = baseRent * dummyTaxRate;
  const totalPrice = baseRent + utilities + tax;

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Photo Carousel and Info Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 px-4">
          <div className="h-[300px] md:h-full md:col-span-2">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              className="w-full h-full"
            >
              {photos.map((url, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={url}
                    alt={`Room ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="py-6 sm:p-10 flex flex-col justify-between md:col-span-1 space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
              <p className="text-gray-600 text-base mb-4">{subtitle}</p>
              <p className="text-sm text-gray-500 mb-4">{location.fullAddress}</p>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category</span>
                  <span className="text-gray-800 font-medium">{category.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Room Type</span>
                  <span className="text-gray-800 font-medium">{roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Lifestyle</span>
                  <span className="text-gray-800 font-medium">{lifestyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Rent</span>
                  <span className="text-[#f48c00] font-bold">{currency} {rent} / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Available From</span>
                  <span className="text-gray-800 font-medium">{new Date(availability.fromDate).toDateString()}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button onClick={() => navigate(`/bookingpage/${_id}`)} className="bg-[#f48c00] hover:bg-[#d97700] w-full text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105">
                Request Booking
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 sm:px-10 pt-10 pb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Discover comfort and convenience in this private room located in a peaceful residential area of Atlanta. Perfect for students, remote workers, or anyone seeking a quiet and cozy environment, this spacious room is part of a family home and offers all essential amenities for modern living.
            <br /><br />
            The room comes fully furnished with a comfortable bed, dedicated workspace, and ample natural light. High-speed WiFi, shared kitchen access, and a clean, well-maintained bathroom ensure you’ll have everything you need to feel at home.
            <br /><br />
            The neighborhood is quiet yet well-connected, with easy access to grocery stores, public transportation, and parks. Safety, cleanliness, and a respectful environment are our top priorities.
            <br /><br />
            Whether you're staying for a few months or looking for a long-term arrangement, this room offers the perfect blend of privacy and shared living in a friendly atmosphere. Utilities are included in the rent, making your stay hassle-free and budget-friendly.
          </p>
        </div>

        {/* Amenities */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {amenities.map((a, i) => (
              <span
                key={i}
                className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700 font-medium shadow-sm"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Price Calculation */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Price Calculator</h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Stay Duration (months):</label>
              <input
                type="number"
                value={stayMonths}
                onChange={(e) => setStayMonths(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-2 border rounded-lg"
                min="1"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Rent ({stayMonths} months):</span>
                <span className="text-gray-800 font-medium">{currency} {baseRent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Utilities (dummy):</span>
                <span className="text-gray-800 font-medium">{currency} {utilities}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%):</span>
                <span className="text-gray-800 font-medium">{currency} {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-800 font-bold">Total:</span>
                <span className="text-[#f48c00] font-bold">{currency} {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Integration with Leaflet */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Location Map</h3>
          <div className="h-64 w-full rounded-lg overflow-hidden shadow-sm">
            <MapContainer center={dummyPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={dummyPosition}>
                <Popup>{location.fullAddress}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Unique Feature 1: Virtual Tour */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Virtual Tour</h3>
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
            className="w-full h-64"
          >
            {dummyVirtualTourPhotos.map((url, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={url}
                  alt={`Virtual Tour ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Unique Feature 2: Roommate Matching Score */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Roommate Matching Score</h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="text-center mb-4">
              <span className="text-4xl font-bold text-[#f48c00]">{dummyRoommateMatch.score}%</span>
              <p className="text-gray-600">Match Score (based on lifestyle and preferences)</p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {dummyRoommateMatch.reasons.map((reason, idx) => (
                <li key={idx} className="text-gray-700">{reason}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unique Feature 3: Energy Efficiency Rating */}
        <div className="px-6 sm:px-10 pb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Energy Efficiency</h3>
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <div className="text-center mb-4">
              <span className="text-4xl font-bold text-green-600">{dummyEnergyRating.rating}</span>
              <p className="text-gray-600">Energy Rating</p>
            </div>
            <p className="text-gray-700">{dummyEnergyRating.details}</p>
          </div>
        </div>

        {/* Host Section */}
        <div className="bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-6 sm:px-10 py-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Host</h3>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-gray-800 text-base mb-3 font-medium">
                {postedBy.name} is a friendly and reliable host with a passion for making guests feel welcome and comfortable. With a strong emphasis on communication and cleanliness, you can expect a smooth experience from check-in to check-out.
              </p>
              <p className="text-gray-700 text-sm">This listing was posted on <strong>{new Date(postedAt).toDateString()}</strong></p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Contact Info</h4>
              <p className="text-sm text-gray-700 mb-1"><strong>Email:</strong> {postedBy.email}</p>
              <p className="text-sm text-gray-700"><strong>Phone:</strong> {postedBy.phone}</p>
            </div>
          </div>
        </div>

        {/* Related Rooms */}
        {relatedRooms.length > 0 && (
          <div className="px-6 sm:px-10 py-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {relatedRooms.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
                >
                  <img
                    src={item.photos[0]}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
                      <p className="text-[#f48c00] font-bold mt-2">
                        {item.currency} {item.rent} / month
                      </p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => navigate(`/room/${item._id}`)}
                        className="btn w-full px-3 py-1.5 bg-[#f48c00] text-white rounded-md hover:bg-[#e07f00] transition"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomDetails;