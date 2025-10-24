import React from "react";
import { Calendar, ArrowRight, Eye } from "lucide-react";
import { usePartnerStore } from "../../store/usePartnerStore";

const BookingsList = ({ bookings }) => {
  const { fetchBookingDetails } = usePartnerStore();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Bookings
        </h2>
      </div>
      <div className="space-y-3">
        {bookings.map((booking) => (
          <button
            key={booking.id}
            onClick={() => fetchBookingDetails(booking.id)}
            className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-red-200 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">{booking.userName}</p>
                <p className="text-sm text-gray-600">{booking.hotelName}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span>{new Date(booking.checkIn).toLocaleDateString()}</span>
                  <ArrowRight className="h-3 w-3 mx-1" />
                  <span>{new Date(booking.checkOut).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">
                ₹{booking.totalAmount}
              </p>
              <div className="flex items-center justify-end mt-1 text-xs text-gray-500">
                <Eye className="h-3 w-3 mr-1" />
                View details
              </div>
            </div>
          </button>
        ))}
        {bookings.length === 0 && (
          <div className="text-center py-8">
            <div className="bg-gray-100 p-4 rounded-full inline-flex mb-3">
              <Calendar className="h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-500">No recent bookings</p>
            <p className="text-sm text-gray-400 mt-1">New bookings will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsList;