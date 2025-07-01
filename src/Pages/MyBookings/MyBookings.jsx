import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserAuthContext from '../../Context/Context';

const MyBookings = () => {
  const { user } = useContext(UserAuthContext);
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `https://roommatefinder-server-site.vercel.app/mybookings?email=${user?.email}`
      );
      setBookings(res.data || []);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          You haven’t made any bookings yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 shadow-sm p-5 bg-white hover:shadow-md transition"
            >
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-500">Booking #{index + 1}</div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {booking.fullName}
                </h2>
                <p className="text-gray-600 text-sm">{booking.email}</p>

                <div className="flex gap-4 mt-3 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Move In</span>
                    <span className="font-medium text-gray-800">
                      {booking.moveInDate}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Move Out</span>
                    <span className="font-medium text-gray-800">
                      {booking.moveOutDate}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                      booking.payment === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {booking.payment === 'paid' ? 'Paid' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
