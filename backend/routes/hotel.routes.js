import express from 'express';
import { authMiddleware, isPartner } from '../middleware/auth.middleware.js';
import { addNewHotel, deleteHotel, getAllHotels, getFeaturedHotels, getHotelByCity, getHotelById, getHotelsByOwner, getHotelsByRating, getHotelsPriceHighToLow, getHotelsPriceLowToHigh } from '../controllers/hotel.controllers.js';
import { uploadHotelImages } from '../middleware/multer.middleware.js';

const hotelRoutes = express.Router()

hotelRoutes.post("/", authMiddleware, isPartner, uploadHotelImages, addNewHotel)
hotelRoutes.get("/", authMiddleware, getAllHotels)
hotelRoutes.get("/featured", getFeaturedHotels);
hotelRoutes.get("/me", authMiddleware, getHotelsByOwner)
hotelRoutes.get("/:city", authMiddleware, getHotelByCity)
hotelRoutes.post("/:id", authMiddleware, getHotelById)
hotelRoutes.delete("/:id", authMiddleware, deleteHotel)
hotelRoutes.get("/sort/price-low-to-high", authMiddleware, getHotelsPriceLowToHigh);
hotelRoutes.get("/sort/price-high-to-low", authMiddleware, getHotelsPriceHighToLow);
hotelRoutes.get("/sort/rating", authMiddleware, getHotelsByRating);

export default hotelRoutes;