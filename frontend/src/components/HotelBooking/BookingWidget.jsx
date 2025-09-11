import React from "react";
import { Calendar, Users } from "lucide-react";

const BookingWidget = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  guests,
  setGuests,
  selectedHotel,
  calculateNights,
  calculateTotal,
  handleBookNow,
  isCreatingBooking
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Your Stay</h3>
      
      {/* Date Selection */}
      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
              min={checkInDate}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none transition-colors"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      {selectedHotel && (
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Room price</span>
              <span className="font-semibold">₹{selectedHotel.price?.toLocaleString()}/night</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Nights</span>
              <span className="font-semibold">{calculateNights()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Guests</span>
              <span className="font-semibold">{guests}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold text-red-600 pt-3 border-t border-gray-200">
              <span>Total</span>
              <span>₹{calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleBookNow}
        disabled={isCreatingBooking || selectedHotel.availableRooms === 0}
        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg disabled:shadow-none transform hover:scale-[1.02] disabled:scale-100"
      >
        {isCreatingBooking ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Processing...
          </div>
        ) : selectedHotel.availableRooms === 0 ? (
          "No Rooms Available"
        ) : (
          "Book Now"
        )}
      </button>

      {/* Security Badge */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center">
          <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Secure payment • Free cancellation
        </p>
      </div>
    </div>
  );
};

export default BookingWidget;