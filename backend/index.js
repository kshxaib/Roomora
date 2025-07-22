import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.routes.js';
import hotelRoutes from './routes/hotel.routes.js';
import bookingRoutes from './routes/hotel.route.js';


dotenv.config();
const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello from Roomora backend!");
});

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/hotels", hotelRoutes);
app.use("/api/v1/bookings", bookingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});