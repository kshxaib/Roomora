import { db } from "../utils/db";

export const addNewHotel = async (req, res) => {
    try {
        const {name, description, location, price, images, amenities} = req.body;
        const userId = req.user.id;

        const existingHotel = await db.hotel.findFirst({
            where: {name: name, ownerId: userId}
        })

        if(existingHotel){
            return res.status(400).json({
                success: false,
                message: "Hotel with this name already exists"
            })
        }

        const newHotel = await db.hotel.create({
            data: {
                name,
                description,
                location,
                price: parseFloat(price),
                images,
                amenities,
                ownerId: userId
            }
        })

        return res.status(201).json({
            success: true,
            message: "Hotel added successfully",
            hotel: newHotel
        });

    } catch (error) {
        console.error("Error adding new hotel:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
}

export const getAllHotels = async (req, res) => {
    try {
        const hotels = await db.hotel.findMany({
            orderBy: {createdAt: 'desc'}
        })

        if(!hotels || hotels.length === 0) {
            return res.status(200).json({
                success: false,
                hotels: [],
                message: "No hotels found"
            });
        }

        return res.status(200).json({
            success: true,
            hotels
        })

    } catch (error) {
        console.error("Error fetching hotels:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
}

export const getHotelById = async (req, res) => {
    try {
        const hotelId = req.params.id
        const hotel = await db.hotel.findUnique({
            where: { id: hotelId }
        })

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found"
            });
        }

        return res.status(200).json({
            success: true,
            hotel
        })
        
    } catch (error) {
        console.error("Error fetching hotel:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
}

export const updateHotel = async (req, res) => {
    try {
        const hotelId = req.params.id;
        const userId = req.user.id;

        const { name, description, location, price, images, amenities } = req.body;

        if (!name || !description || !location || !price || !images || !amenities) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Fetch hotel
        const hotel = await db.hotel.findUnique({
            where: { id: hotelId },
        });

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found",
            });
        }

        // Check if logged-in user is the owner
        if (hotel.ownerId !== userId) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this hotel",
            });
        }

        const updatedHotel = await db.hotel.update({
            where: { id: hotelId },
            data: {
                name,
                description,
                location,
                price: parseFloat(price),
                images,
                amenities,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Hotel updated successfully",
            hotel: updatedHotel,
        });
    } catch (error) {
        console.error("Error updating hotel:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error",
        });
    }
};

export const deleteHotel = async (req, res) => {
    try {
        const hotelId = req.params.id;
        const userId = req.user.id;
        const userRole = req.user.role;

        // Fetch hotel
        const hotel = await db.hotel.findUnique({
            where: { id: hotelId },
        });

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found",
            });
        }

        // Allow only if user is the owner OR an admin
        if (hotel.ownerId !== userId && userRole !== "ADMIN") {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this hotel",
            });
        }

        await db.hotel.delete({
            where: { id: hotelId },
        });

        return res.status(200).json({
            success: true,
            message: "Hotel deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting hotel:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error",
        });
    }
};

export const getHotelsPriceLowToHigh = async (req, res) => {
    try {
        const hotels = await db.hotel.findMany({
            orderBy: { price: 'asc' }
        });

        if (!hotels || hotels.length === 0) {
            return res.status(200).json({
                success: false,
                hotels: [],
                message: "No hotels found"
            });
        }

        return res.status(200).json({
            success: true,
            hotels
        });
    } catch (error) {
        console.error("Error fetching hotels (low to high):", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getHotelsPriceHighToLow = async (req, res) => {
    try {
        const hotels = await db.hotel.findMany({
            orderBy: { price: 'desc' }
        });

        if (!hotels || hotels.length === 0) {
            return res.status(200).json({
                success: false,
                hotels: [],
                message: "No hotels found"
            });
        }

        return res.status(200).json({
            success: true,
            hotels
        });
    } catch (error) {
        console.error("Error fetching hotels (high to low):", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getHotelsByRating = async (req, res) => {
    try {
        const hotels = await db.hotel.findMany({
            orderBy: { rating: 'desc' }
        });

        if (!hotels || hotels.length === 0) {
            return res.status(200).json({
                success: false,
                hotels: [],
                message: "No hotels found"
            });
        }

        return res.status(200).json({
            success: true,
            hotels
        });
    } catch (error) {
        console.error("Error fetching hotels by rating:", error.message);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};
