import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import hotelRoutes from './routes/hotel.routes.js';
import bookingRoutes from './routes/booking.route.js';
import partnerRoutes from './routes/partner.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import adminRoutes from './routes/admin.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Roomora server is running🔥");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/hotels", hotelRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/partners", partnerRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/admin", adminRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
