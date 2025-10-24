import express from "express"
import {authMiddleware, isAdmin} from "../middleware/auth.middleware.js"
import { processWithdrawal, getAllWithdrawals, getDashboardStats, getAllUsers, getAllBookings, getAllHotels, updateUserStatus } from "../controllers/admin.controllers.js";

const adminRoutes = express.Router();

adminRoutes.post("/withdrawals/:id/process", authMiddleware, isAdmin, processWithdrawal);
adminRoutes.get("/withdrawals", authMiddleware, isAdmin, getAllWithdrawals);
adminRoutes.get("/dashboard/stats", authMiddleware, isAdmin, getDashboardStats);
adminRoutes.get("/users", authMiddleware, isAdmin, getAllUsers);
adminRoutes.get("/bookings", authMiddleware, isAdmin, getAllBookings);
adminRoutes.get("/hotels", authMiddleware, isAdmin, getAllHotels);
adminRoutes.patch("/users/:id/status", authMiddleware, isAdmin, updateUserStatus);

export default adminRoutes;