import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { Toaster } from "sonner";
import ForgotPasswordPage from "./components/Auth/ForgotPasswordPage.jsx";
import PartnerDashboard from "./components/Partner/PartnerDashboard.jsx";
import HotelDetails from "./components/HotelBooking/HotelDetails.jsx";
import MyBookingPage from "./components/HotelBooking/MyBookingPage.jsx";

function App() {
  const { getCurrentUser, authUser } = useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      await getCurrentUser();
    };
    fetchUser();
  }, [getCurrentUser]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="forgot-password"
          element={authUser ? <Navigate to="/" /> : <ForgotPasswordPage />}
        />
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="partner-dashboard"
          element={authUser ? <PartnerDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="hotel/:id"
          element={authUser ? <HotelDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="my-bookings"
          element={authUser ? <MyBookingPage /> : <Navigate to="/login" />}
        />
      </Route>
      
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
