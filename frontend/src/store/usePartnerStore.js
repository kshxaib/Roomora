import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import { toast } from "sonner";

export const usePartnerStore = create((set, get) => ({
  dashboardData: null,
  withdrawals: [],
  paymentMethods: [],
  bookings: [],
  selectedBooking: null,
  isLoading: false,

  clearSelectedBooking: () => set({ selectedBooking: null }),

  fetchDashboardData: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/partners/dashboard");
      set({ dashboardData: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch dashboard data");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchBookingDetails: async (id) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get(`/partners/booking/${id}`);
      set({ selectedBooking: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch booking details");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchBookings: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/partners/bookings");
      set({ bookings: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch bookings");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchWithdrawals: async () => {
    try {
      const res = await axiosInstance.get("/partners/withdrawals");
      set({ withdrawals: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch withdrawals");
    }
  },

  requestWithdrawal: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/partners/withdrawals", data);
      toast.success(res.data.message);
      get().fetchWithdrawals();
      get().fetchDashboardData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to request withdrawal");
    } finally {
      set({ isLoading: false });
    }
  },

  fetchPaymentMethods: async () => {
    try {
      const res = await axiosInstance.get("/payments/methods");
      set({ paymentMethods: res.data.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch payment methods");
    }
  },

  addPaymentMethod: async (data) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/payments/methods", data);
      toast.success(res.data.message);
      get().fetchPaymentMethods();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add payment method");
    } finally {
      set({ isLoading: false });
    }
  },

  setDefaultPaymentMethod: async (paymentMethodId) => {
    try {
      const res = await axiosInstance.put("/payments/methods/default", { paymentMethodId });
      toast.success(res.data.message);
      get().fetchPaymentMethods();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to set default payment method");
    }
  },

  deletePaymentMethod: async (paymentMethodId) => {
    try {
      const res = await axiosInstance.delete(`/payments/methods/${paymentMethodId}`);
      toast.success(res.data.message);
      get().fetchPaymentMethods();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete payment method");
    }
  }
}));
