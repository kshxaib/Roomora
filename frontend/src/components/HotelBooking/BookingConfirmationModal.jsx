import React from "react";
import { CreditCard, X, CheckCircle, Calendar, Users } from "lucide-react";

const BookingConfirmationModal = ({
  hotel,
  checkInDate,
  checkOutDate,
  guests,
  totalAmount,
  nights,
  onClose,
  onConfirm,
  isLoading,
  bookingName={bookingName}
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Confirm Booking
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              disabled={isLoading}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Hotel Info */}
          <div className="mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Booking Name</p>
              <p className="font-semibold text-sm">{bookingName}</p>
            </div>
            <div className="flex items-center space-x-3 mb-3 p-3 bg-gray-50 rounded-lg">
              <img
                src={hotel.images?.[0] || "/default-hotel.jpg"}
                alt={hotel.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
                <p className="text-sm text-gray-600">{hotel.city}</p>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Check-in
                </p>
                <p className="font-semibold text-sm">
                  {new Date(checkInDate).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Check-out
                </p>
                <p className="font-semibold text-sm">
                  {new Date(checkOutDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Nights</p>
                <p className="font-semibold text-sm">{nights}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  Guests
                </p>
                <p className="font-semibold text-sm">{guests}</p>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Room price</span>
                <span className="font-semibold">
                  ₹{hotel.price?.toLocaleString()}/night
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nights</span>
                <span className="font-semibold">{nights}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Guests</span>
                <span className="font-semibold">{guests}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-red-600 pt-3 border-t border-gray-200">
                <span>Total Amount</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-sm text-green-700">
                Secure payment with Razorpay • SSL encrypted
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              ) : (
                <CreditCard className="h-4 w-4 mr-2" />
              )}
              {isLoading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;
