import React, { useState } from "react";
import { useHotelStore } from "../../store/useHotelStore";
import { toast } from "sonner";
import {X, Upload, Plus, MapPin, Building, DollarSign, Bed, FileText, Wifi, Tv, Coffee, Shield, Phone, Thermometer, Refrigerator, Armchair, Shirt, ClipboardCheck} from "lucide-react";

const roomAmenities = [
  { name: "Air Conditioning", icon: Thermometer },
  { name: "Heater", icon: Thermometer },
  { name: "Television", icon: Tv },
  { name: "Free Wi-Fi", icon: Wifi },
  { name: "Mini Fridge", icon: Refrigerator },
  { name: "Tea Maker", icon: Coffee },
  { name: "Room Service", icon: ClipboardCheck },
  { name: "Work Desk & Chair", icon: Armchair },
  { name: "Wardrobe", icon: Shirt },
  { name: "Safety Locker", icon: Shield },
  { name: "Telephone", icon: Phone },
];

const cities = [
  "Mumbai", "Delhi", "Bengalore", "Hyderabad", "Ahmedabad",
  "Chennai", "Kolkata", "Pune", "Jaipur", "Lucknow",
  "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
  "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
];

const AddNewHotel = () => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    city: "",
    address: "",
    price: "",
    totalRooms: "",
    amenities: [],
    images: [],
  });

  const { addNewHotel, isAddingNewHotel } = useHotelStore();

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => {
      const updatedAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: updatedAmenities };
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    for (let file of files) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error(`${file.name} is larger than 10MB`);
        return;
      }
    }

    if (files.length + formData.images.length > 10) {
      toast.error("You can upload a maximum of 10 images.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data with images
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData.images.forEach((img) => data.append("images", img));
      } else if (key === "amenities") {
        formData.amenities.forEach((a) => data.append("amenities", a));
      } else {
        data.append(key, formData[key]);
      }
    });

    await addNewHotel(data);
    setOpenDetailsModal(false);
  };

  return (
    <div>
      <button
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg ml-4 mt-4 cursor-pointer transition-colors shadow-md"
        onClick={() => setOpenDetailsModal(true)}
      >
        <Plus className="h-5 w-5" />
        Add New Hotel
      </button>

      {openDetailsModal && (
        <div className="fixed inset-0 bg-gray-200/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-red-600 p-4 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold">Add New Hotel</h2>
              <button 
                onClick={() => setOpenDetailsModal(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Form Content */}
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Hotel Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Hotel Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Enter hotel name"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        required
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Enter full address"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                    <textarea
                      placeholder="Describe your hotel facilities and services"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[100px]"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Price */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Price per Night (₹)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        min="0"
                        required
                      />
                    </div>
                  </div>

                  {/* Total Rooms */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Total Rooms
                    </label>
                    <div className="relative">
                      <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        placeholder="Enter number of rooms"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={formData.totalRooms}
                        onChange={(e) =>
                          setFormData({ ...formData, totalRooms: e.target.value })
                        }
                        min="1"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Room Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-3 border border-gray-200 rounded-lg">
                    {roomAmenities.map((amenity) => {
                      const IconComponent = amenity.icon;
                      return (
                        <label key={amenity.name} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.amenities.includes(amenity.name)}
                            onChange={() => handleAmenityChange(amenity.name)}
                          />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.amenities.includes(amenity.name) ? 'bg-red-600 border-red-600' : 'border-gray-300'}`}>
                            {formData.amenities.includes(amenity.name) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <IconComponent className="h-4 w-4 text-gray-600" />
                          <span className="text-sm">{amenity.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Images (max 10)
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, JPEG (MAX. 10MB each)
                      </p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  
                  {/* Image Previews */}
                  {formData.images.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Selected Images ({formData.images.length}/10)
                      </p>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                        {formData.images.map((img, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(img)}
                              alt="Preview"
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                    onClick={() => setOpenDetailsModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isAddingNewHotel}
                    className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
                  >
                    {isAddingNewHotel ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding Hotel...
                      </>
                    ) : (
                      "Add Hotel"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewHotel;