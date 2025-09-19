import express from "express"
import {authMiddleware} from "../middleware/auth.middleware.js"
import { getUserBooking, cancelBooking, createBooking, verifyBookingPayment } from "../controllers/booking.controllers.js";

const bookingRoutes = express.Router();

bookingRoutes.post("/", authMiddleware, createBooking);
bookingRoutes.post("/verify", authMiddleware, verifyBookingPayment);
bookingRoutes.get("/", authMiddleware, getUserBooking);
bookingRoutes.delete("/:id", authMiddleware, cancelBooking);

export default bookingRoutes;