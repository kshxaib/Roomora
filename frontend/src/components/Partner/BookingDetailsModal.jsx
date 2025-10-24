import React from "react";
import { usePartnerStore } from "../../store/usePartnerStore";
import { X, Calendar, User, CreditCard, Building, MapPin, DollarSign } from "lucide-react";

const BookingDetailsModal = () => {
  const { selectedBooking, clearSelectedBooking } = usePartnerStore();

  if (!selectedBooking) return null;

  return (
    <div className="fixed inset-0 bg-gray-800/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">
            Booking Details
          </h2>
          <button
            onClick={clearSelectedBooking}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Hotel Information */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{selectedBooking.hotelName}</h3>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {selectedBooking.hotelCity}
              </p>
            </div>
          </div>

          {/* Guest Information */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{selectedBooking.guestName}</h3>
              <p className="text-sm text-gray-600">{selectedBooking.guestEmail}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Dates */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Dates</h4>
              <div className="flex items-center space-x-2 text-gray-800">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{new Date(selectedBooking.checkIn).toLocaleDateString()}</span>
                <span className="text-gray-400">-</span>
                <span>{new Date(selectedBooking.checkOut).toLocaleDateString()}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.ceil((new Date(selectedBooking.checkOut) - new Date(selectedBooking.checkIn)) / (1000 * 60 * 60 * 24))} nights
              </p>
            </div>

            {/* Guests */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Guests</h4>
              <p className="text-gray-800">{selectedBooking.guests} {selectedBooking.guests > 1 ? 'guests' : 'guest'}</p>
            </div>
          </div>

          {/* Financial Information */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">Payment Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">₹{selectedBooking.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Your Earnings:</span>
                <span className="font-medium text-green-600">₹{selectedBooking.partnerAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Platform Fee:</span>
                <span className="font-medium">₹{selectedBooking.adminAmount}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-600">Payment Status:</span>
                <span className={`font-medium ${selectedBooking.isPaid ? 'text-green-600' : 'text-yellow-600'}`}>
                  {selectedBooking.isPaid ? "Paid" : "Unpaid"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Booking Status:</span>
                <span className={`font-medium capitalize ${
                  selectedBooking.status === 'confirmed' ? 'text-green-600' : 
                  selectedBooking.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {selectedBooking.status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Booking Date</h4>
            <p className="text-gray-800">{new Date(selectedBooking.bookingDate).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsModal;