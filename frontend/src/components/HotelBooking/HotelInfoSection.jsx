import React from "react";
import { MapPin, Star, Wifi, Car, Utensils, Snowflake, Tv, Dumbbell, Shield } from "lucide-react";

const amenitiesIcons = {
  'Free Wi-Fi': Wifi,
  'Parking': Car,
  'Restaurant': Utensils,
  'Air Conditioning': Snowflake,
  'TV': Tv,
  'Gym': Dumbbell,
  'Swimming Pool': Snowflake, 
  '24/7 Security': Shield
};

const HotelInfoSection = ({ hotel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
      
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
        <span className="text-sm md:text-base">{hotel.address}, {hotel.city}</span>
      </div>

      <div className="flex items-center mb-6">
        <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full mr-4">
          <Star className="h-4 w-4 fill-current mr-1" />
          <span className="font-semibold text-sm">{hotel.rating || 4.5}</span>
        </div>
        <span className="text-sm text-gray-600">120 reviews</span>
      </div>

      <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
        {hotel.description || "Experience luxury and comfort at this beautiful hotel. Perfect for business trips, family vacations, and romantic getaways."}
      </p>

      {/* Amenities */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hotel.amenities?.map((amenity, index) => {
            const IconComponent = amenitiesIcons[amenity] || Shield;
            return (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors">
                <IconComponent className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{amenity}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Room Availability */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-100">
        <h4 className="font-semibold text-gray-800 mb-3">Room Availability</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-600 mb-1">Total Rooms</span>
            <span className="font-semibold text-lg text-gray-800">{hotel.totalRooms}</span>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-sm">
            <span className="block text-sm text-gray-600 mb-1">Available</span>
            <span className="font-semibold text-lg text-green-600">{hotel.availableRooms}</span>
          </div>
        </div>
        {hotel.availableRooms === 0 && (
          <p className="text-red-600 text-sm mt-3 text-center">
            Currently no rooms available. Please check back later.
          </p>
        )}
      </div>
    </div>
  );
};

export default HotelInfoSection;