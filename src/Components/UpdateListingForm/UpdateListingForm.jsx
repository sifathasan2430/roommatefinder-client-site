import axios from 'axios';
import { useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import UserAuthContext from '../../Context/Context';
import { useParams } from 'react-router-dom';

const UpdateListingForm = () => {
    const {id}=useParams()
    const {user}=useContext(UserAuthContext)
  const [formData, setFormData] = useState({
    
  });

  useEffect(() => {
    if (!user?.email) return; 

    axios.get(`https://roommatefinder-server-site.vercel.app/room/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching apartments:', error);
      });

  }, [user])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent] || {}),
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleAmenityChange = (amenity) => {
    setFormData(prev => {
      const amenities = prev.amenities || [];
      if (amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: amenities.filter(a => a !== amenity)
        };
      } else {
        return {
          ...prev,
          amenities: [...amenities, amenity]
        };
      }
    });
  };

  const handlePhotoChange = (index, value) => {
    const newPhotos = [...(formData.photos || [])];
    newPhotos[index] = value;
    setFormData(prev => ({
      ...prev,
      photos: newPhotos
    }));
  };

  const addPhotoField = () => {
    setFormData(prev => ({
      ...prev,
      photos: [...(prev.photos || []), '']
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/admin/update-listing/${id}`, formData);
     if (response.data?.result?.modifiedCount > 0) {
  Swal.fire({
    title: "Success!",
    text: "Listing updated successfully!",
    icon: "success"
  });

 

} else {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Failed to update listing. Please try again.",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
}

    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
  <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Add Rental Listing</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Basic Information</h2>

            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title*" className="w-full p-2 border rounded" required />
            <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="Subtitle" className="w-full p-2 border rounded" />
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} placeholder="Description*" className="w-full p-2 border rounded" required />
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="location.street" value={formData?.location?.street || ''} onChange={handleChange} placeholder="Street*" className="w-full p-2 border rounded" required />
              <input type="text" name="location.city" value={formData?.location?.city || ''} onChange={handleChange} placeholder="City*" className="w-full p-2 border rounded" required />
              <input type="text" name="location.state" value={formData?.location?.state || ''} onChange={handleChange} placeholder="State*" className="w-full p-2 border rounded" required />
              <input type="text" name="location.zip" value={formData?.location?.zip || ''} onChange={handleChange} placeholder="Zip Code*" className="w-full p-2 border rounded" required />
            </div>
          </div>

          {/* Rental Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Rental Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="Private Room">Private Room</option>
                <option value="Shared Room">Shared Room</option>
                <option value="Entire Apartment">Entire Apartment</option>
              </select>
              <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
              </select>
              <input type="text" name="lifestyle" value={formData.lifestyle} onChange={handleChange} placeholder="Lifestyle" className="w-full p-2 border rounded" />
              <input type="number" name="rent" value={formData.rent} onChange={handleChange} placeholder="Rent ($)*" className="w-full p-2 border rounded" required />
            </div>

            {/* Amenities */}
            <div>
              <label className="block text-sm font-medium mb-1">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['WiFi', 'Parking', 'Shared Kitchen', 'Laundry', 'Air Conditioning', 'Heating', 'TV', 'Workspace'].map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      checked={formData?.amenities?.includes(amenity) || false}
                      onChange={() => handleAmenityChange(amenity)}
                      className="mr-2"
                    />
                    <label htmlFor={`amenity-${amenity}`}>{amenity}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Availability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                name="availability.status"
                value={formData?.availability?.status || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
              <input
                type="date"
                name="availability.fromDate"
                value={formData?.availability?.fromDate || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Photos</h2>
            {formData?.photos?.map((photo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="url"
                  value={photo}
                  onChange={(e) => handlePhotoChange(index, e.target.value)}
                  className="flex-1 p-2 border rounded"
                  placeholder="Enter image URL"
                />
              </div>
            ))}
            <button type="button" onClick={addPhotoField} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Add Another Photo
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="postedBy.name" value={formData?.postedBy?.name || ''} onChange={handleChange} placeholder="Your Name*" className="w-full p-2 border rounded" required />
              <input type="email" name="postedBy.email" value={formData?.postedBy?.email || ''} onChange={handleChange} placeholder="Email*" className="w-full p-2 border rounded" required />
              <input type="tel" name="postedBy.phone" value={formData?.postedBy?.phone || ''} onChange={handleChange} placeholder="Phone*" className="w-full p-2 border rounded" required />
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="mr-2" />
            <label>Feature this listing?</label>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-2 bg-[#ff8c00] text-white rounded hover:bg-orange-700 transition">
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    
  );
};

export default UpdateListingForm;
