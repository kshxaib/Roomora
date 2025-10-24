import express from "express"
import {authMiddleware, isPartner} from "../middleware/auth.middleware.js"
import { getBookingDetails, getPartnerDashboard, getPartnerHotelBookings, getPartnerWithdrawals, requestWithdrawal } from "../controllers/partner.controllers.js";

const partnerRoutes = express.Router();

partnerRoutes.get("/dashboard", authMiddleware, isPartner, getPartnerDashboard);
partnerRoutes.get("/booking/:id", authMiddleware, getBookingDetails);
partnerRoutes.get("/hotels/:hotelId/bookings", authMiddleware, isPartner, getPartnerHotelBookings);  // Get bookings for a specific hotel

// Partner withdrawal routes
partnerRoutes.get("/withdrawals", authMiddleware, isPartner, getPartnerWithdrawals);
partnerRoutes.post("/withdrawals", authMiddleware, isPartner, requestWithdrawal);

export default partnerRoutes;