import React from 'react';
import { MapPin, Users, Calendar, Star, Eye } from 'lucide-react';

export const HotelCard = ({ hotel }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
    <div className="h-40 bg-gray-200 relative">
      {hotel.images?.[0] ? (
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-flex mb-2">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-600 font-medium">No image available</p>
          </div>
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
        <span className="text-xs font-semibold">{hotel.rating || '4.2'}</span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 truncate">{hotel.name}</h3>
      <div className="flex items-center text-gray-600 mb-3">
        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
        <span className="text-sm truncate">{hotel.city}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm mb-4">
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{hotel.totalBookings || 0} bookings</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
          <span>{hotel.activeBookings || 0} active</span>
        </div>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <div>
          <span className="text-gray-600 text-sm">Available rooms:</span>
          <span className="font-semibold ml-2">{hotel.availableRooms || 0}</span>
        </div>
      </div>
    </div>
  </div>
);

const HotelList = ({ hotels }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800">Your Hotels : {hotels.length}</h2>
      
    </div>
    <div className="grid grid-cols-1 gap-4">
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
      
      {hotels.length === 0 && (
        <div className="text-center py-8">
          <div className="bg-gray-100 p-4 rounded-full inline-flex mb-3">
            <MapPin className="h-6 w-6 text-gray-400" />
          </div>
          <p className="text-gray-500">No hotels added yet</p>
          <p className="text-sm text-gray-400 mt-1">Add your first hotel to get started</p>
        </div>
      )}
    </div>
  </div>
);

export default HotelList;