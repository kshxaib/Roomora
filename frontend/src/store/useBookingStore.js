import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { toast } from "sonner";

export const useBookingStore = create((set, get) => ({
  bookings: [],
  isCreatingBooking: false,
  isLoading: false,
  isCheckingStatus: false,

  createBooking: async (bookingData) => {
    set({ isCreatingBooking: true });
    try {
      const res = await axiosInstance.post("/bookings", bookingData);
      toast.success(res.data.message);
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create booking");
      throw error;
    } finally {
      set({ isCreatingBooking: false });
    }
  },

  verifyBookingPayment: async (paymentData) => {
    set({ isCheckingStatus: true });
    try {
      const res = await axiosInstance.post("/bookings/verify", paymentData);
      toast.success(res.data.message);
      return res.data.booking;
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Payment verification failed");
      throw error;
    } finally {
      set({ isCheckingStatus: false });
    }
  },

  getUserBookings: async () => {
  set({ isLoading: true });
  try {
    const res = await axiosInstance.get("/bookings");
    const { upcoming, active, completed, cancelled } = res.data.data || {};

    // Flatten into one array with status
    const allBookings = [
      ...(upcoming || []).map(b => ({ ...b, computedStatus: "Upcoming" })),
      ...(active || []).map(b => ({ ...b, computedStatus: "Active" })),
      ...(completed || []).map(b => ({ ...b, computedStatus: "Completed" })),
      ...(cancelled || []).map(b => ({ ...b, computedStatus: "Cancelled" })),
    ];

    set({ bookings: allBookings });
    console.log("Flattened Bookings:", allBookings);
  } catch (error) {
    toast.error(error.response?.data?.message || "Failed to fetch bookings");
    set({ bookings: [] });
  } finally {
    set({ isLoading: false });
  }
  },

  cancelBooking: async (bookingId) => {
    try {
      const res = await axiosInstance.delete(`/bookings/${bookingId}`);
      toast.success(res.data.message);
      get().getUserBookings();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to cancel booking");
      throw error;
    }
  }
}));