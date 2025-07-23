import express from "express"
import {authMiddleware} from "../middleware/auth.middleware.js"
import { getUserBookingHistory, cancelBooking, createBooking, verifyBookingPayment } from "../controllers/booking.controllers.js";

const bookingRoutes = express.Router();

bookingRoutes.post("/", authMiddleware, createBooking);
bookingRoutes.post("/verify", authMiddleware, verifyBookingPayment);
bookingRoutes.delete("/:id", authMiddleware, cancelBooking);
bookingRoutes.get("/history", authMiddleware, getUserBookingHistory);

export default bookingRoutes;