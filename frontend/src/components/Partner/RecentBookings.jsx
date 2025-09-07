import React from 'react';
import { Calendar, User, DollarSign, Building } from 'lucide-react';

const RecentBookings = ({ bookings }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Bookings</h2>
    <div className="space-y-3">
      {bookings.map(booking => (
        <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">{booking.userName}</p>
              <p className="text-sm text-gray-600">{booking.hotelName}</p>
              <p className="text-xs text-gray-500">
                {new Date(booking.checkIn).toLocaleDateString()} - {new Date(booking.checkOut).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600">₹{booking.totalAmount}</p>
          </div>
        </div>
      ))}
      {bookings.length === 0 && (
        <p className="text-gray-500 text-center py-4">No recent bookings</p>
      )}
    </div>
  </div>
);

export default RecentBookings;