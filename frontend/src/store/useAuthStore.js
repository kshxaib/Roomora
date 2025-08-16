import {create} from "zustand"
import {axiosInstance} from "../libs/axios"


export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLogginIn: false,
  isCheckingAuth: false,

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
}))