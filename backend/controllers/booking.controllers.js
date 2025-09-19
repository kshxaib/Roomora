import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";
import { sendEmail } from '../utils/mail.js'

const PLATFORM_FEE_PERCENTAGE = 10;

// ye controllers user ke liye hai
export const createBooking = async (req, res) => {
    const { hotelId, checkIn, checkOut, guests, name } = req.body
    console.log("Booking Request Body:", req.body);
    try {
        const userId = req.user.id

        const user = await db.user.findUnique({ where: { id: userId } })

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

        console.log("📧 Booking Email Data:", {
            email: user.email,
            name,
            hotelName: hotel.name,
            checkIn,
            checkOut,
            guests,
            totalAmount
        });

        const emailSubject = "Booking Created";

        await sendEmail({
            subject: emailSubject,
            email: user.email,
            name,
            hotelName: hotel.name,
            checkIn,
            checkOut,
            guests,
            totalAmount
        });

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

        // Transaction: cancel booking + deduct balances
        await db.$transaction(async (prisma) => {
            // Cancel booking and release room
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

            // Reverse earnings if payment was done
            if (booking.isPaid && booking.partnerAmount && booking.adminAmount) {
                // Deduct from Partner (hotel owner)
                await prisma.user.update({
                    where: { id: booking.hotel.ownerId },
                    data: {
                        totalEarnings: { decrement: booking.partnerAmount },
                        walletBalance: { decrement: booking.partnerAmount }
                    }
                });

                // Deduct from Admin
                const adminUser = await prisma.user.findFirst({
                    where: { role: "ADMIN" }
                });

                if (adminUser) {
                    await prisma.user.update({
                        where: { id: adminUser.id },
                        data: {
                            totalEarnings: { decrement: booking.adminAmount },
                            walletBalance: { decrement: booking.adminAmount }
                        }
                    });
                }

                // Reset earnings record
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
            message: "Booking cancelled successfully. Partner and Admin balances adjusted."
        });
    } catch (error) {
        console.error("Error cancelling booking:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getUserBooking = async (req, res) => {
    try {
        const userId = req.user.id;
        const now = new Date();

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
                        price: true,
                    },
                },
            },
            orderBy: { checkIn: "asc" },
        });

        const upcoming = [];
        const active = [];
        const completed = [];
        const cancelled = [];

        bookings.forEach((b) => {
            const checkIn = new Date(b.checkIn);
            const checkOut = new Date(b.checkOut);

            if (b.status === "CANCELLED") {
                cancelled.push(b);
            } else if (now >= checkIn && now <= checkOut && b.status === "BOOKED") {
                active.push(b);
            } else if (now < checkIn && b.status === "BOOKED") {
                upcoming.push(b);
            } else if (now > checkOut || b.status === "COMPLETED") {
                completed.push(b);
            }
        });

        return res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            data: { upcoming, active, completed, cancelled },
        });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error",
        });
    }
};
