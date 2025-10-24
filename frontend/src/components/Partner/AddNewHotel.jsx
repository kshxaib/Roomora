import React, { useState } from "react";
import { useHotelStore } from "../../store/useHotelStore";
import { toast } from "sonner";
import { X, Upload, Plus, MapPin, Building, DollarSign, Bed, FileText, Wifi, Tv, Coffee, Shield, Phone, Thermometer, Refrigerator, Armchair, Shirt, ClipboardCheck, Star } from "lucide-react";

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
    <>
      <button
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer w-full h-full"
        onClick={() => setOpenDetailsModal(true)}
      >
        <div className="bg-white/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Plus className="h-6 w-6" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-lg">Add New Hotel</p>
          <p className="text-sm opacity-90">Expand your business</p>
        </div>
      </button>

      {openDetailsModal && (
        <div className="fixed inset-0 bg-gray-800/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Add New Hotel</h2>
                  <p className="text-sm opacity-90">Fill in the details to list your property</p>
                </div>
              </div>
              <button 
                onClick={() => setOpenDetailsModal(false)}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Form Content */}
            <div className="p-6 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Hotel Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Hotel Name *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Enter hotel name"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                      City *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none transition-colors"
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
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
                    Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Enter full address"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                    Description *
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-gray-400 h-4 w-4" />
                    <textarea
                      placeholder="Describe your hotel facilities and services..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[120px] transition-colors"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Price */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Price per Night (₹) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                      Total Rooms *
                    </label>
                    <div className="relative">
                      <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        placeholder="Enter number of rooms"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Room Amenities
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
                    {roomAmenities.map((amenity) => {
                      const IconComponent = amenity.icon;
                      return (
                        <label key={amenity.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer border border-gray-200 bg-white">
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.amenities.includes(amenity.name)}
                            onChange={() => handleAmenityChange(amenity.name)}
                          />
                          <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            formData.amenities.includes(amenity.name) 
                              ? 'bg-indigo-600 border-indigo-600' 
                              : 'border-gray-300 hover:border-indigo-400'
                          }`}>
                            {formData.amenities.includes(amenity.name) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <IconComponent className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-700">{amenity.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Images (max 10)
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-400 transition-colors bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-1 text-sm font-medium text-gray-600">
                        Click to upload or drag and drop
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
                      <p className="text-sm font-medium text-gray-700 mb-3">
                        Selected Images ({formData.images.length}/10)
                      </p>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {formData.images.map((img, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(img)}
                              alt="Preview"
                              className="w-full h-24 object-cover rounded-lg shadow-sm group-hover:opacity-75 transition-opacity"
                            />
                            <button
                              type="button"
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
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
                <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium"
                    onClick={() => setOpenDetailsModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isAddingNewHotel}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                  >
                    {isAddingNewHotel ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding Hotel...
                      </>
                    ) : (
                      <>
                        <Plus className="h-5 w-5" />
                        Add Hotel
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewHotel;