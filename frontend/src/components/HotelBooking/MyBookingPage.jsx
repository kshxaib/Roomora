import React, { useState, useEffect } from "react";
import { useBookingStore } from "../../store/useBookingStore";
import {
  Calendar,
  MapPin,
  Users,
  CreditCard,
} from "lucide-react";
import { toast } from "sonner";
import CancelBookingModal from "./CancelBookingModal";

const MyBookingPage = () => {
  const { bookings, getUserBookings, cancelBooking, isLoading } = useBookingStore();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    getUserBookings();
  }, [getUserBookings]);

  const handleCancelBooking = (booking) => {
    setSelectedBooking(booking);
    setShowCancelModal(true);
  };

  const confirmCancelBooking = async () => {
    try {
      await cancelBooking(selectedBooking.id); 
      // Backend should handle: deduct partner + admin balances here
      setShowCancelModal(false);
      setSelectedBooking(null);
      toast.success("Booking cancelled successfully. Refund processed.");
    } catch (error) {
      toast.error("Failed to cancel booking. Please try again.");
    }
  };

  const canCancelBooking = (booking) => {
    const checkInDate = new Date(booking.checkIn);
    const now = new Date();
    const hoursUntilCheckIn = (checkInDate - now) / (1000 * 60 * 60);

    return hoursUntilCheckIn > 24 && booking.status === "BOOKED";
  };

  const getBookingStatus = (booking) => {
    const now = new Date();
    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);

    if (booking.status === "CANCELLED") {
      return { status: "Cancelled", color: "text-red-600", bg: "bg-red-100" };
    }

    if (now > checkOut) {
      return { status: "Completed", color: "text-green-600", bg: "bg-green-100" };
    }

    if (now >= checkIn && now <= checkOut) {
      return { status: "Active", color: "text-blue-600", bg: "bg-blue-100" };
    }

    return { status: "Upcoming", color: "text-amber-600", bg: "bg-amber-100" };
  };

  const filteredBookings = bookings.filter((booking) => {
    const status = getBookingStatus(booking);
    if (activeTab === "upcoming") return status.status === "Upcoming";
    if (activeTab === "active") return status.status === "Active";
    if (activeTab === "completed") return status.status === "Completed";
    if (activeTab === "cancelled") return status.status === "Cancelled";
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-800">My Bookings</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="flex overflow-x-auto">
            {[
              {
                id: "upcoming",
                label: "Upcoming",
                count: bookings.filter((b) => getBookingStatus(b).status === "Upcoming").length,
              },
              {
                id: "active",
                label: "Active",
                count: bookings.filter((b) => getBookingStatus(b).status === "Active").length,
              },
              {
                id: "completed",
                label: "Completed",
                count: bookings.filter((b) => getBookingStatus(b).status === "Completed").length,
              },
              {
                id: "cancelled",
                label: "Cancelled",
                count: bookings.filter((b) => getBookingStatus(b).status === "Cancelled").length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-red-500 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No {activeTab} bookings
              </h3>
              <p className="text-gray-500">
                You don't have any {activeTab} bookings yet.
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => {
              const status = getBookingStatus(booking);
              const cancellable = canCancelBooking(booking);

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  {/* Booking Header */}
                  <div className="border-b border-gray-200 p-4 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${status.bg} ${status.color}`}
                        >
                          {status.status}
                        </div>
                        <span className="text-sm text-gray-600">
                          Booking ID: {booking.id.slice(-8).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Hotel Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4">
                          <img
                            src={booking.hotel?.images?.[0] || "/default-hotel.jpg"}
                            alt={booking.hotel?.name}
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">
                              {booking.hotel?.name}
                            </h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span className="text-sm">{booking.hotel?.city}</span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {booking.hotel?.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Booking Details */}
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Check-in</p>
                            <p className="font-semibold text-sm">
                              {formatDate(booking.checkIn)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Check-out</p>
                            <p className="font-semibold text-sm">
                              {formatDate(booking.checkOut)}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Guests</p>
                            <p className="font-semibold text-sm">{booking.guests}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                            <p className="font-semibold text-sm text-red-600">
                              ₹{booking.totalAmount?.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <CreditCard className="h-4 w-4" />
                        <span>Paid via Razorpay</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        {cancellable && (
                          <button
                            onClick={() => handleCancelBooking(booking)}
                            className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                          >
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Cancel Booking Modal */}
      {showCancelModal && selectedBooking && (
        <CancelBookingModal
          booking={selectedBooking}
          onClose={() => setShowCancelModal(false)}
          onConfirm={confirmCancelBooking}
        />
      )}
    </div>
  );
};

export default MyBookingPage;
