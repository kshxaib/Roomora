import express from 'express';
import { authMiddleware, isPartner } from '../middleware/auth.middleware.js';
import { addNewHotel, deleteHotel, getAllHotels, getHotelById, getHotelsByRating, getHotelsPriceHighToLow, getHotelsPriceLowToHigh, updateHotel } from '../controllers/hotel.controllers.js';

const hotelRoutes = express.Router()

hotelRoutes.post("/", authMiddleware, isPartner, addNewHotel)
hotelRoutes.get("/", authMiddleware, getAllHotels)
hotelRoutes.get("/:id", authMiddleware, getHotelById)
hotelRoutes.put("/:id", authMiddleware, isPartner, updateHotel)
hotelRoutes.delete("/:id", authMiddleware, deleteHotel)
hotelRoutes.get("/sort/price-low-to-high", authMiddleware, getHotelsPriceLowToHigh);
hotelRoutes.get("/sort/price-high-to-low", authMiddleware, getHotelsPriceHighToLow);
hotelRoutes.get("/sort/rating", authMiddleware, getHotelsByRating);
export default hotelRoutes;