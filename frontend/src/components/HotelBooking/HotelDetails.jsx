import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHotelStore } from "../../store/useHotelStore";
import { useAuthStore } from "../../store/useAuthStore";
import { useBookingStore } from "../../store/useBookingStore";
import { ArrowLeft } from "lucide-react";
import HotelImageGallery from "./HotelImageGallery";
import HotelInfoSection from "./HotelInfoSection";
import BookingWidget from "./BookingWidget";
import BookingConfirmationModal from "./BookingConfirmationModal";
import { toast } from "sonner";

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedHotel, getHotelById, isLoading } = useHotelStore();
  const { authUser } = useAuthStore();
  const {
    createBooking,
    verifyBookingPayment,
    isCreatingBooking,
    isCheckingStatus,
  } = useBookingStore();

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [bookingName, setBookingName] = useState(authUser?.name || "");

  useEffect(() => {
    if (id) {
      getHotelById(id);
    }
  }, [id, getHotelById]);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    setCheckInDate(today.toISOString().split("T")[0]);
    setCheckOutDate(tomorrow.toISOString().split("T")[0]);
  }, []);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    if (selectedHotel) {
      return selectedHotel.price * nights * guests;
    }
    return 0;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBookNow = async () => {
    if (!authUser) {
      toast.error("Please login to book a hotel");
      navigate("/login");
      return;
    }

    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates");
      return;
    }

    const bookingPayload = {
      hotelId: selectedHotel.id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      totalAmount: calculateTotal(),
      name: bookingName,
    };

    setBookingData(bookingPayload);
    setShowBookingModal(true);
  };

  const initiatePayment = async () => {
    try {
      const bookingResponse = await createBooking(bookingData);

      if (bookingResponse && bookingResponse.order) {
        await openRazorpayCheckout(
          bookingResponse.order,
          bookingResponse.bookingId
        );
      }
    } catch (error) {
      toast.error("Failed to initiate payment");
    }
  };

  const openRazorpayCheckout = async (order, bookingId) => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error("Payment system failed to load. Please try again.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Roomora Hotels",
      description: `Booking for ${selectedHotel.name}`,
      image: selectedHotel.images?.[0] || "/logo.png",
      order_id: order.id,
      handler: async function (response) {
        try {
          await verifyBookingPayment({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            bookingId: bookingId,
          });

          toast.success("Booking confirmed successfully!");
          setShowBookingModal(false);
          navigate("/my-bookings");
        } catch (error) {
          toast.error("Payment verification failed");
        }
      },
      prefill: {
        name: authUser.name,
        email: authUser.email,
        contact: authUser.phone || "",
      },
      theme: {
        color: "#ef4444",
      },
      modal: {
        ondismiss: function () {
          toast.info("Payment cancelled");
        },
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      toast.error(`Payment failed: ${response.error.description}`);
    });

    rzp.open();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!selectedHotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hotel not found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Hotel Details</h1>
            <div className="w-6"></div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <HotelImageGallery
          images={selectedHotel.images}
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          hotelName={selectedHotel.name}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2">
            <HotelInfoSection hotel={selectedHotel} />
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
              guests={guests}
              setGuests={setGuests}
              selectedHotel={selectedHotel}
              calculateNights={calculateNights}
              calculateTotal={calculateTotal}
              handleBookNow={handleBookNow}
              isCreatingBooking={isCreatingBooking}
              bookingName={bookingName}
              setBookingName={setBookingName}
            />
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal */}
      {showBookingModal && (
        <BookingConfirmationModal
          hotel={selectedHotel}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          guests={guests}
          totalAmount={calculateTotal()}
          nights={calculateNights()}
          onClose={() => setShowBookingModal(false)}
          onConfirm={initiatePayment}
          isLoading={isCreatingBooking || isCheckingStatus}
          bookingName={bookingName}
        />
      )}
    </div>
  );
};

export default HotelDetails;
