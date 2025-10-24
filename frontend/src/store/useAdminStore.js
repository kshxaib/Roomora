import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import { toast } from "sonner";

export const useAdminStore = create((set, get) => ({
  withdrawals: [],
  isLoading: false,
  dashboardStats: null,
  users: [],
  bookings: [],
  hotels: [],
  isLoadingWithdrawals: false,
  isLoadingData: false, 

  fetchDashboardStats: async () => {
    try {
      set({ isLoadingData: true });
      const response = await axiosInstance.get("/admin/dashboard/stats");
      set({ dashboardStats: response.data.data });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch dashboard stats");
      throw error;
    } finally {
      set({ isLoadingData: false });
    }
  },

  fetchAllWithdrawals: async () => { 
    try {
      set({ isLoadingWithdrawals: true });
      console.log("request send")
      const response = await axiosInstance.get("/admin/withdrawals");
      console.log("response revied", response.data.data)
      set({ withdrawals: response.data.data });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch withdrawals");
      throw error;
    } finally {
      set({ isLoadingWithdrawals: false });
    }
  },

  processWithdrawal: async (withdrawalId, action, remarks = "") => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.post(
        `/admin/withdrawals/${withdrawalId}/process`,
        { action, remarks }
      );
      
      const updatedWithdrawals = get().withdrawals.map(withdrawal =>
        withdrawal.id === withdrawalId
          ? { ...withdrawal, status: action === "APPROVE" ? "APPROVED" : "REJECTED", remarks }
          : withdrawal
      );
      
      set({ withdrawals: updatedWithdrawals });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to process withdrawal");
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAllUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/admin/users");
      set({ users: response.data.data?.users || [] });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch users");
      set({users: []})
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAllBookings: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/admin/bookings");
      set({ bookings: response.data.data?.bookings || [] });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch bookings");
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAllHotels: async () => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.get("/admin/hotels");
      set({ hotels: response.data.data?.hotels || [] });
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  updateUserStatus: async (userId, isActive) => {
    try {
      set({ isLoading: true });
      const response = await axiosInstance.patch(
        `/admin/users/${userId}/status`,
        { isActive }
      );
      
      const updatedUsers = get().users.map(user =>
        user.id === userId ? { ...user, isActive } : user
      );
      
      set({ users: updatedUsers });
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update user status");
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));