import React from 'react';
import { MapPin, Users, Calendar, DollarSign } from 'lucide-react';

export const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="h-32 bg-gray-200 relative">
      {hotel.images?.[0] && (
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      )}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">{hotel.name}</h3>
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="h-4 w-4 mr-1" />
        <span className="text-sm">{hotel.city}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-1" />
          <span>{hotel.totalBookings} bookings</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{hotel.activeBookings} active</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Available rooms:</span>
          <span className="font-semibold">{hotel.availableRooms}</span>
        </div>
      </div>
    </div>
  </div>
);

const HotelList = ({ hotels }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Hotels</h2>
    <div className="space-y-4">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  </div>
);

export default HotelList;