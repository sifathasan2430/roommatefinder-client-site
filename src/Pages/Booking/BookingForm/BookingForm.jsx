import { useRef, useState } from 'react';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const SimplifiedBookingForm = () => {
  const { id } = useParams();
  const moveInRef = useRef();
const moveOutRef = useRef();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    moveInDate: '',
    moveOutDate: '',
    agreeTerms: false,
    apartmentId: id
  });
console.log(id)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`https://roommatefinder-server-site.vercel.app/bookings/${id}`, formData);
      
      if (response.data.success) {
        setSubmitted(true);
      } else {
        console.log(response.data?.message || 'Booking failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit booking. Please try again.');
      console.error('Booking error:', err);
    } finally {
      setLoading(false);
    }
  };
   console.log(formData);
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="mt-3 text-xl font-semibold text-gray-800">Booking Confirmed!</h2>
            <p className="mt-2 text-gray-600">Your apartment has been successfully booked.</p>
            <div className="mt-6 flex justify-center gap-4">
              <NavLink 
                to={'/'}
                className="px-4 py-2 bg-[#f89200] text-white rounded-md hover:bg-[#e08300] transition"
              >
                Back Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Apartment Booking Request</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
  <label className="block text-gray-700 mb-2" htmlFor="moveInDate">
    Move-In Date *
  </label>
  <div className="relative">
    <input
      ref={moveInRef}
      type="date"
      id="moveInDate"
      name="moveInDate"
      value={formData.moveInDate}
      onChange={handleChange}
      min={new Date().toISOString().split('T')[0]}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200] pl-10"
      required
    />
    <Calendar
      onClick={() => moveInRef.current?.showPicker()}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 cursor-pointer"
    />
  </div>
</div>

{/* Move-Out Date */}
<div className="relative">
  <label className="block text-gray-700 mb-2" htmlFor="moveOutDate">
    Move-Out Date *
  </label>
  <div className="relative">
    <input
      ref={moveOutRef}
      type="date"
      id="moveOutDate"
      name="moveOutDate"
      value={formData.moveOutDate}
      onChange={handleChange}
      min={formData.moveInDate || new Date().toISOString().split('T')[0]}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200] pl-10"
      required
    />
    <Calendar
      onClick={() => moveOutRef.current?.showPicker()}
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 cursor-pointer"
    />
  </div>
</div>
            </div>

            <div className="flex items-start pt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#f89200] focus:ring-[#f89200] border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                  I agree to the terms and conditions *
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-6 ${loading ? 'bg-[#f8b267]' : 'bg-[#f89200]'} text-white py-3 px-4 rounded-md hover:bg-[#e08300] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f89200] focus:ring-offset-2 font-medium flex items-center justify-center`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Submit Booking Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedBookingForm;