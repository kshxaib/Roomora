import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

const PLATFORM_FEE_PERCENTAGE = 10;

// ye controllers user ke liye hai
export const createBooking = async (req, res) => {
    const { hotelId, checkIn, checkOut, guests } = req.body
    try {
        const userId = req.user.id

        const hotel = await db.hotel.findUnique({
            where: { id: hotelId },
            include: { owner: true }
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
        const adminAmount = totalAmount * (PLATFORM_FEE_PERCENTAGE / 100);
        const partnerAmount = totalAmount - adminAmount;

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
                partnerAmount,
                adminAmount,
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
        const userId = req.user.id;
        const body = `${razorpay_order_id}|${razorpay_payment_id}`;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: "Invalid signature"
            });
        }

        
        const result = await db.$transaction(async (prisma) => {
            const booking = await prisma.booking.update({
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
                },
                include: {
                    hotel: {
                        include: {
                            owner: true
                        }
                    }
                }
            });

          
            if (booking.partnerAmount && booking.adminAmount) {
                await prisma.earnings.create({
                    data: {
                        userId: booking.hotel.ownerId,
                        bookingId: booking.id,
                        amount: booking.partnerAmount,
                        type: "PARTNER_EARNINGS"
                    }
                });

                const adminUser = await prisma.user.findFirst({
                    where: { role: "ADMIN" }
                });

                if (adminUser) {
                    await prisma.earnings.create({
                        data: {
                            userId: adminUser.id,
                            bookingId: booking.id,
                            amount: booking.adminAmount,
                            type: "ADMIN_EARNINGS"
                        }
                    });
                }

                await prisma.user.update({
                    where: { id: booking.hotel.ownerId },
                    data: {
                        totalEarnings: { increment: booking.partnerAmount },
                        walletBalance: { increment: booking.partnerAmount }
                    }
                });

                if (adminUser) {
                    await prisma.user.update({
                        where: { id: adminUser.id },
                        data: {
                            totalEarnings: { increment: booking.adminAmount },
                            walletBalance: { increment: booking.adminAmount }
                        }
                    });
                }
            }

            return booking;
        });

        return res.status(200).json({
            success: true,
            message: "Payment verified and booking confirmed",
            booking: result
        });
        
    } catch (error) {
        console.error("Error verifying payment:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const userRole = req.user.role;

        const booking = await db.booking.findUnique({
            where: { id },
            include: {
                hotel: true,
                earnings: true
            }
        });

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        if (booking.status !== "BOOKED") {
            return res.status(400).json({
                success: false,
                message: "Only booked bookings can be cancelled"
            });
        }

        const isCustomer = booking.userId === userId;
        const isPartner = booking.hotel.ownerId === userId;
        const isAdmin = userRole === "ADMIN";

        if (!isCustomer && !isPartner && !isAdmin) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to cancel this booking"
            });
        }

        // Start transaction for cancellation
        await db.$transaction(async (prisma) => {
            await prisma.booking.update({
                where: { id },
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
            });

            // If booking was paid, reverse the earnings
            if (booking.isPaid && booking.partnerAmount && booking.adminAmount) {
                // Reverse partner earnings
                if (isPartner || isAdmin) {
                    await prisma.user.update({
                        where: { id: booking.hotel.ownerId },
                        data: {
                            totalEarnings: { decrement: booking.partnerAmount },
                            walletBalance: { decrement: booking.partnerAmount }
                        }
                    });
                }

                // Reverse admin earnings 
                const adminUser = await prisma.user.findFirst({
                    where: { role: "ADMIN" }
                });

                if (adminUser && (isAdmin || isPartner)) {
                    await prisma.user.update({
                        where: { id: adminUser.id },
                        data: {
                            totalEarnings: { decrement: booking.adminAmount },
                            walletBalance: { decrement: booking.adminAmount }
                        }
                    });
                }

                // Mark earnings as reversed
                await prisma.earnings.updateMany({
                    where: { bookingId: booking.id },
                    data: {
                        isWithdrawn: false,
                        withdrawnAt: null
                    }
                });
            }
        });

        return res.status(200).json({
            success: true,
            message: "Booking cancelled successfully"
        });
    } catch (error) {
        console.error("Error cancelling booking:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getUserBookingHistory = async (req, res) => {
    try {
        const userId = req.user.id;

        const bookings = await db.booking.findMany({
            where: { userId },
            include: {
                hotel: {
                    select: {
                        id: true,
                        name: true,
                        city: true,
                        address: true,
                        images: true,
                        price: true
                    }
                }
            },
            orderBy: {
                checkIn: 'asc'
            }
        });

        // Filter upcoming and past bookings
        const now = new Date();
        const upcomingBookings = bookings.filter(booking => 
            new Date(booking.checkIn) > now && booking.status === "BOOKED"
        );
        const pastBookings = bookings.filter(booking => 
            new Date(booking.checkIn) <= now || 
            booking.status === "COMPLETED" || 
            booking.status === "CANCELLED"
        );

        return res.status(200).json({
            success: true,
            message: "Booking history fetched successfully",
            data: {
                upcomingBookings: upcomingBookings.map(booking => ({
                    id: booking.id,
                    hotel: booking.hotel,
                    checkIn: booking.checkIn,
                    checkOut: booking.checkOut,
                    guests: booking.guests,
                    totalAmount: booking.totalAmount,
                    status: booking.status
                })),
                pastBookings: pastBookings.map(booking => ({
                    id: booking.id,
                    hotel: booking.hotel,
                    checkIn: booking.checkIn,
                    checkOut: booking.checkOut,
                    guests: booking.guests,
                    totalAmount: booking.totalAmount,
                    status: booking.status
                }))
            }
        });
    } catch (error) {
        console.error("Error fetching booking history:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};