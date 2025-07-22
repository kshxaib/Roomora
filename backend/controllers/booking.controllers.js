import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

export const createBooking = async (req, res) => {
    const { hotelId, checkIn, checkOut, guests } = req.body
    try {
        const userId = req.user.id

        const hotel = await db.hotel.findUnique({
            where: { id: hotelId }
        })

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found"
            })
        }

        if (hotel.availableRooms <= 0) {
            return res.status(400).json({
                success: false,
                message: "No rooms available"
            })
        }

        const totalDays = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
        const totalAmount = totalDays * hotel.price

        const receipt = `htl_${hotelId.slice(0, 6)}_usr_${userId.slice(0, 6)}`;
        const order = await razorpayInstance.orders.create({
            amount: totalAmount * 100,
            currency: "INR",
            receipt,
            notes: { hotelId, userId }
        })

        const booking = await db.booking.create({
            data: {
                userId,
                hotelId,
                checkIn: new Date(checkIn),
                checkOut: new Date(checkOut),
                guests,
                totalAmount,
                paymentOrderId: order.id,
                status: "PENDING"
            }
        })

        return res.status(201).json({
            success: true,
            message: "Booking created. Complete payment to confirm.",
            order,
            bookingId: booking.id,
            razorpayKey: process.env.RAZORPAY_KEY_ID,
        });

    } catch (error) {
        console.error("Error creating booking:", error)
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        })

    }
} 

export const verifyBookingPayment = async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, bookingId } = req.body;
    
    try {
        const userId = req.user.id
        const body = `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto.
            createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex")

        if(expectedSignature !== razorpay_signature){
            return res.status(400).json({
                success: false,
                message: "Invalid signature"
            });
        }

        const booking = await db.booking.update({
            where: { id: bookingId },
            data: {
                paymentId: razorpay_payment_id,
                paymentOrderId: razorpay_order_id,
                  paymentSignature: razorpay_signature,
                status: "BOOKED",
                isPaid: true,
                hotel: {
                    update: {
                        availableRooms: {
                            decrement: 1
                        }
                    }
                }
            }
        })

        return res.status(200).json({
            success: true,
            message: "Payment verified and booking confirmed",
            booking
        });
        
    } catch (error) {
        console.error("Error verifying payment:", error)
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        })
    }
}

export const getMyBookings = async (req, res) => {
    try {
        const userId = req.user.id

        const bookings = await db.booking.findMany({
            where: {userId},
            include: {
                hotel: true,
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            bookings
        })
    } catch (error) {
        console.error("Error fetching bookings:", error)
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        })
    }
}

export const cancelBooking = async (req, res) => {
    try {
        const {id} = req.params
        const userId = req.user.id

        const booking = await db.booking.findUnique({
            where: {id, userId}
        })

        if(!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            })
        }

        if(booking.status !== "BOOKED") {
            return res.status(400).json({
                success: false,
                message: "Only booked bookings can be cancelled"
            })
        }

        const isCustomer = booking.userId === userId

        const hotel = await db.hotel.findUnique({
            where: {id: booking.hotelId}
        })

        const isPartner = hotel?.userId === userId

        if (!isCustomer && !isPartner) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to cancel this booking"
            })
        }

        await db.booking.update({
            where: {id},
            data: {
                status: "CANCELLED",
                hotel: {
                    update: {
                        availableRooms: {
                            increment: 1
                        }
                    }
                }
            }
        })

        return res.status(200).json({
            success: true,
            message: "Booking cancelled successfully"
        })
    } catch (error) {
        
    }
}