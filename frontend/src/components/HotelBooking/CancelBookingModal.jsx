import React from "react";
import { X, AlertCircle, Calendar, Users, CreditCard } from "lucide-react";

const CancelBookingModal = ({ booking, onClose, onConfirm }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateRefund = () => {
    // 100% refund if cancelled more than 24 hours before check-in
    const checkInDate = new Date(booking.checkIn);
    const now = new Date();
    const hoursUntilCheckIn = (checkInDate - now) / (1000 * 60 * 60);
    
    if (hoursUntilCheckIn > 24) {
      return { percentage: 100, amount: booking.totalAmount };
    }
    
    // 50% refund if cancelled within 24 hours
    return { percentage: 50, amount: booking.totalAmount * 0.5 };
  };

  const refund = calculateRefund();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Cancel Booking</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Warning Alert */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800 font-medium">Are you sure you want to cancel this booking?</span>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Hotel</span>
              <span className="font-semibold">{booking.hotel?.name}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Check-in
                </p>
                <p className="font-semibold text-sm">{formatDate(booking.checkIn)}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Check-out
                </p>
                <p className="font-semibold text-sm">{formatDate(booking.checkOut)}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  Guests
                </p>
                <p className="font-semibold text-sm">{booking.guests}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1 flex items-center">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Total Paid
                </p>
                <p className="font-semibold text-sm">₹{booking.totalAmount?.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Refund Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Refund Information</h4>
            <p className="text-sm text-blue-700">
              You will receive a {refund.percentage}% refund of ₹{refund.amount.toLocaleString()}. 
              The refund will be processed to your original payment method within 5-7 business days.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              Keep Booking
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
            >
              Confirm Cancellation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;