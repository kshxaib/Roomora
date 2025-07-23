import express from "express"
import {authMiddleware, isPartner} from "../middleware/auth.middleware.js"
import { addPaymentMethod, deletePaymentMethod, getPaymentMethods, setDefaultPaymentMethod } from "../controllers/payment.controllers.js";

const paymentRoutes = express.Router();

paymentRoutes.post("/methods", authMiddleware, isPartner, addPaymentMethod);
paymentRoutes.get("/methods", authMiddleware, isPartner, getPaymentMethods);
paymentRoutes.put("/methods/default", authMiddleware, isPartner, setDefaultPaymentMethod);
paymentRoutes.delete("/methods/:paymentMethodId", authMiddleware, isPartner, deletePaymentMethod);

export default paymentRoutes;