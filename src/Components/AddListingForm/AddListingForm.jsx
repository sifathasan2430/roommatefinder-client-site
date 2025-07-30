import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import axios from 'axios';
import Swal from 'sweetalert2';

const defaultValues = {
  title: '',
  subtitle: '',
  location: { street: '', city: '', state: '', zip: '' },
  category: 'Private Room',
  roomType: 'Single',
  lifestyle: '',
  description: '',
  amenities: [],
  rent: '',
  currency: 'USD',
  isFeatured: false,
  availability: { status: 'Available', fromDate: '' },
  photos: [{ url: '' }],
  postedBy: { name: '', email: '', phone: '' },
};

const amenitiesList = ['WiFi', 'Parking', 'Shared Kitchen', 'Laundry', 'Air Conditioning', 'Heating', 'TV', 'Workspace'];

const AddListingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm({ defaultValues });

  const { fields, append } = useFieldArray({
    control,
    name: "photos"
  });

  const onSubmit = async (data) => {
     
    const formatted = {
      ...data,
      photos: data.photos.map(p => p.url),
     
    };

    
       await axios.post('https://roommatefinder-server-site.vercel.app/admin/add-listing', formatted);
    
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-2xl font-bold">Add Rental Listing</h2>

        <Input placeholder="Title*" {...register("title", { required: true })} />
        <Input placeholder="Subtitle" {...register("subtitle")} />
        <Textarea placeholder="Description*" {...register("description", { required: true })} />

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Street" {...register("location.street", { required: true })} />
          <Input placeholder="City" {...register("location.city", { required: true })} />
          <Input placeholder="State" {...register("location.state", { required: true })} />
          <Input placeholder="Zip" {...register("location.zip", { required: true })} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select {...register("category")} className="border p-2 rounded">
            <option value="Private Room">Private Room</option>
            <option value="Shared Room">Shared Room</option>
            <option value="Entire Apartment">Entire Apartment</option>
          </select>

          <select {...register("roomType")} className="border p-2 rounded">
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>

          <Input placeholder="Lifestyle" {...register("lifestyle")} />
          <Input type="number" placeholder="Rent" {...register("rent", { required: true })} />
        </div>

        <div>
          <label className="block font-semibold mb-1">Amenities</label>
          <div className="grid grid-cols-2 gap-2">
            {amenitiesList.map(amenity => (
              <label key={amenity} className="flex gap-2 items-center">
                <Checkbox {...register("amenities")} value={amenity} />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select {...register("availability.status")} className="border p-2 rounded">
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>
          <Input type="date" {...register("availability.fromDate", { required: true })} />
        </div>

        <div>
          <h3 className="font-semibold">Photos</h3>
          {fields.map((field, index) => (
            <Input key={field.id} placeholder="Photo URL" {...register(`photos.${index}.url`)} />
          ))}
          <Button type="button" onClick={() => append({ url: '' })} className="mt-2">
            Add Photo
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Name" {...register("postedBy.name", { required: true })} />
          <Input placeholder="Email" type="email" {...register("postedBy.email", { required: true })} />
          <Input placeholder="Phone" type="tel" {...register("postedBy.phone", { required: true })} />
        </div>

        <label className="flex items-center gap-2">
          <Checkbox {...register("isFeatured")} />
          Feature this listing?
        </label>

        <Button type="submit" className="w-full bg-[#f48c00] hover:bg-[#e07f00] text-white">
          Submit Listing
        </Button>
      </form>
    </Card>
  );
};

export default AddListingForm;
