import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import { toast } from "sonner";

export const useHotelStore = create((set) => ({
  myHotels: [],
  isAddingNewHotel: false,
  isFetchingHotelsByOwner: false,
  allHotels: [],
  selectedHotel: null,
  isLoading: false,
  featuredHotels: [],

  addNewHotel: async (formData) => {
    set({ isAddingNewHotel: true });
    try {
      const res = await axiosInstance.post("/hotels", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(res.data.message);
      get().getHotelsByOwner();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add hotel");
    } finally {
      set({ isAddingNewHotel: false });
    }
  },

  getHotelsByOwner: async () => {
    set({ isFetchingHotelsByOwner: true });
    try {
      const res = await axiosInstance.get("/hotels/me");
      set({ myHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
    } finally {
      set({ isFetchingHotelsByOwner: false });
    }
  },

  deleteHotel: async (hotelId) => {
    try {
      const res = await axiosInstance.delete(`/hotels/${hotelId}`);
      toast.success(res.data.message);
      get().getHotelsByOwner();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete hotel");
    }
  },

  getAllHotels: async () => {   //for normal users
    try {
      const res = await axiosInstance.get("/hotels");
      set({ allHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
      set({ allHotels: [] });
    }
  },

  getHotelById: async (hotelId) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post(`/hotels/${hotelId}`);
      set({ selectedHotel: res.data.hotel });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotel");
    } finally {
      set({ isLoading: false });
    }
  },

  getHotelsByCity: async (city) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get(`/hotels/${city}`);
      set({ allHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
      set({ allHotels: [] });
    }
    finally {
      set({ isLoading: false });
    }
  },

  getHotelsPriceLowToHigh: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/hotels/sort/price-low-to-high");
      set({ allHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
      set({ allHotels: [] });
    } finally {
      set({ isLoading: false });
    }
  },

  getHotelsPriceHighToLow: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/hotels/sort/price-high-to-low");
      set({ allHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch hotels");
      set({ allHotels: [] });
    } finally {
      set({ isLoading: false });
    }
  },

  getFeaturedHotels: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/hotels/featured");
      set({ featuredHotels: res.data.hotels });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch featured hotels");
      set({ featuredHotels: [] });
    } finally {
      set({ isLoading: false });
    }
  }
}));