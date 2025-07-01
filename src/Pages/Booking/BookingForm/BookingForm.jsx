import { useState } from 'react';
import axios from 'axios';
import { Await, NavLink, useParams } from 'react-router-dom';

const SimplifiedBookingForm = () => {
   
   const {id}=useParams()
   console.log(id)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    moveInDate: '',
    moveOutDate: '',
    agreeTerms: false,
   apartmentId:id
   // Pass this as prop from parent component
  });

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
      // Replace with your actual API endpoint
      const response = await axios.post(`http://localhost:3000/bookings/${id}`, formData);
      
      if (response.data.success) {
        setSubmitted(true);
        // Optional: You might want to update local state or trigger a refresh
      } else {
        console.log(response.data?.message || 'Booking failed');
      }
    } catch (err) {
       setError(err.response?.data?.message || 'Failed to submit booking. Please try again.');
      console.error('Booking this is  error:',err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 border border-gray-200">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-[#f89200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="mt-3 text-xl font-semibold text-gray-800">Booking Confirmed!</h2>
          <p className="mt-2 text-gray-600">Your apartment has been successfully booked.</p>
          <button 
              onClick={()=>setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-[#f89200] disabled text-white rounded-md hover:bg-[#e08300] transition"
          >
             Booked
          </button>
          <button className='mt-4 px-4 py-2 bg-[#f89200] disabled text-white rounded-md hover:bg-[#e08300] transition'> 
            <NavLink to={'/'}>Back Home</NavLink>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md h-[80vh] mx-auto p-2 bg-white rounded-lg shadow-md my-8 border border-gray-200">
        <div className="p-3  overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Apartment Booking Request</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form className='max-h-[70vh]' onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="md:col-span-2">
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

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="moveInDate">
              Move-In Date *
            </label>
            <input
              type="date"
              id="moveInDate"
              name="moveInDate"
              value={formData.moveInDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="moveOutDate">
              Move-Out Date *
            </label>
            <input
              type="date"
              id="moveOutDate"
              name="moveOutDate"
              value={formData.moveOutDate}
              onChange={handleChange}
              min={formData.moveInDate || new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f89200]"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="h-4 w-4 text-[#f89200] focus:ring-[#f89200] border-gray-300 rounded mt-1"
              required
            />
            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
              I agree to the terms and conditions *
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? 'bg-[#f8b267]' : 'bg-[#f89200]'} text-white py-2 px-4 rounded-md hover:bg-[#e08300] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f89200] focus:ring-offset-2 font-medium`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Submit Booking Request'
          )}
        </button>
      </form>
      </div>
    </div>
  );
};

export default SimplifiedBookingForm;