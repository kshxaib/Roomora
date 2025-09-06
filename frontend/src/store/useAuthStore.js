import {create} from "zustand"
import {axiosInstance} from "../libs/axios"
import { toast } from "sonner";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLogginIn: false,
  isCheckingAuth: false,
  isLoggingOut: false,
  isSendingOtp: false,
  isVerifyingOtp: false,
  isChangingPassword: false,

  googleAuth: async (token, isRegister) => {
    const loadingKey = isRegister ? 'isSigninUp' : 'isLogginIn';
    set({ [loadingKey]: true });
    
    try {
      const endpoint = isRegister ? '/auth/google/register' : '/auth/google/login';
      const { data } = await axiosInstance.post(endpoint, { token });
      
      set({ 
        authUser: data.user,
        isSigninUp: false,
        isLogginIn: false 
      });
      
      return data;
    } catch (error) {
      set({ 
        isSigninUp: false,
        isLogginIn: false 
      });
      throw error;
    }
  },  

  getCurrentUser: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.post('/auth/profile');
      set({ authUser: res.data.user});
    } catch (error) {
      console.error("Error fetching current user:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  
  register: async ({ name, email, password, role }) => {
    try {
      set({ isSigninUp: true });
      const res = await axiosInstance.post('/auth/register', {name, email, password, role});
      set({ authUser: res.data.user });
      toast(res.data.message);
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      set({ isSigninUp: false });
    }
  },

  login: async ({email, password}) => {
    try {
      set({ isLogginIn: true });
      const res = await axiosInstance.post('/auth/login', { email, password });
      set({ authUser: res.data.user });
      toast(res.data.message);
    } catch (error) {
      console.error("Error logging in user:", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      set({ isLogginIn: false });
    }
  },
  
  logout: async () => {
    try {
      set({ isLoggingOut: true });
      const res = await axiosInstance.post('/auth/logout');
      set({ authUser: null });

    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    } finally {
      set({ isLoggingOut: false });
    }
  },

  SendOtpForgotPassword: async (email) => {
    try {
      set({ isSendingOtp: true });
      const res = await axiosInstance.post('/auth/forgot-password', { email });
      toast.success(res.data.message);
      return true;
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(error.response?.data?.message || "Failed to send OTP");
      return false;
    } finally {
      set({ isSendingOtp: false });
    }
  },

  verifyOtp: async (email, otp) => {
    try {
      set({ isVerifyingOtp: true });
      const res = await axiosInstance.post('/auth/verify-otp', { email, code: otp });
      toast.success(res.data.message);
      return true;
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error.response?.data?.message || "Failed to verify OTP");
      return false;
    } finally {
      set({ isVerifyingOtp: false });
    }
  },

  changePassword: async ({newPassword, confirmPassword, email}) => {
    try {
      set({ isChangingPassword: true });
      const res = await axiosInstance.post('/auth/change-password', { newPassword, confirmPassword, email });
      toast.success(res.data.message);
      return true;
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response?.data?.message || "Failed to change password");
      return false;
    } finally {
      set({ isChangingPassword: false });
    }
  }
}))