import { db } from "../utils/db.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from 'fs';

export const addNewHotel = async (req, res) => {
  try {
    const { name, description, city, address, price, amenities, totalRooms } = req.body;
    const userId = req.user.id;

    if (!name || !description || !city || !address || !price || !amenities || !totalRooms) {
      return res.status(400).json({
        success: false,
        message: "All fields except images are required",
      });
    }

    // Check if files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required",
      });
    }

    const existingHotel = await db.hotel.findFirst({
      where: {
        name,
        city,
        ownerId: userId,
      },
    });

    if (existingHotel) {
      // Clean up uploaded files if hotel already exists
      req.files.forEach(file => {
        fs.unlinkSync(file.path);
      });
      return res.status(400).json({
        success: false,
        message: "Hotel with this name already exists in this city",
      });
    }

    // Upload images to Cloudinary
    const imageUploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
    const uploadedImages = await Promise.all(imageUploadPromises);
    
    // Filter out any failed uploads
    const successfulUploads = uploadedImages.filter(img => img !== null);
    const imageUrls = successfulUploads.map(img => img.secure_url);

    if (imageUrls.length === 0) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload hotel images",
      });
    }

    const newHotel = await db.hotel.create({
      data: {
        name,
        description,
        city,
        address,
        price: parseFloat(price),
        images: imageUrls,
        amenities: Array.isArray(amenities) ? amenities : [amenities],
        totalRooms: parseInt(totalRooms),
        availableRooms: parseInt(totalRooms),
        ownerId: userId,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Hotel added successfully",
      hotel: newHotel,
    });
  } catch (error) {
    // Clean up any uploaded files on error
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
    
    console.error("Error adding new hotel:", error.message);
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal server error",
    });
  }
};

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
    const { name, description, city, address, price, amenities, totalRooms } = req.body;

    if (!name || !description || !city || !address || !price || !amenities || !totalRooms) {
      // Clean up uploaded files if validation fails
      if (req.files) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(400).json({
        success: false,
        message: "All fields except images are required",
      });
    }

    const hotel = await db.hotel.findUnique({ where: { id: hotelId } });

    if (!hotel) {
      if (req.files) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    if (hotel.ownerId !== userId) {
      if (req.files) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this hotel",
      });
    }

    // Check for duplicate name in same city (excluding current hotel)
    const duplicate = await db.hotel.findFirst({
      where: {
        name,
        city,
        ownerId: userId,
        NOT: { id: hotelId },
      },
    });

    if (duplicate) {
      if (req.files) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return res.status(400).json({
        success: false,
        message: "Hotel with this name already exists in this city",
      });
    }

    let imageUrls = hotel.images;
    
    // If new images were uploaded
    if (req.files && req.files.length > 0) {
      // Upload new images to Cloudinary
      const imageUploadPromises = req.files.map(file => uploadOnCloudinary(file.path));
      const uploadedImages = await Promise.all(imageUploadPromises);
      
      // Filter out any failed uploads
      const successfulUploads = uploadedImages.filter(img => img !== null);
      const newImageUrls = successfulUploads.map(img => img.secure_url);

      if (newImageUrls.length > 0) {
        imageUrls = [...hotel.images, ...newImageUrls]; // Combine old and new images
        // Or replace all images: imageUrls = newImageUrls;
      }
    }

    const updatedHotel = await db.hotel.update({
      where: { id: hotelId },
      data: {
        name,
        description,
        city,
        address,
        price: parseFloat(price),
        images: imageUrls,
        amenities: Array.isArray(amenities) ? amenities : [amenities],
        totalRooms: parseInt(totalRooms),
        availableRooms:
          parseInt(totalRooms) < hotel.totalRooms
            ? Math.max(0, hotel.availableRooms - (hotel.totalRooms - parseInt(totalRooms)))
            : hotel.availableRooms + (parseInt(totalRooms) - hotel.totalRooms),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Hotel updated successfully",
      hotel: updatedHotel,
    });
  } catch (error) {
    // Clean up any uploaded files on error
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }
    
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

        const hotel = await db.hotel.findUnique({
            where: { id: hotelId },
        });

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found",
            });
        }

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
