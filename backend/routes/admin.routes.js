import express from "express"
import {authMiddleware, isAdmin} from "../middleware/auth.middleware.js"
import { processWithdrawal, getAllWithdrawals } from "../controllers/admin.controllers.js";

const adminRoutes = express.Router();

adminRoutes.post("/withdrawals/:id/process", authMiddleware, isAdmin, processWithdrawal);
adminRoutes.get("/withdrawals", authMiddleware, isAdmin, getAllWithdrawals);

export default adminRoutes;