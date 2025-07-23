import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

const PLATFORM_FEE_PERCENTAGE = 10;

export const getPartnerDashboard = async (req, res) => {
    try {
        const userId = req.user.id;
        const userRole = req.user.role;

        if (userRole !== "PARTNER") {
            return res.status(403).json({
                success: false,
                message: "Only partners can access this dashboard"
            });
        }

        // Get partner's hotels with booking counts
        const hotels = await db.hotel.findMany({
            where: { ownerId: userId },
            include: {
                _count: {
                    select: { bookings: true }
                },
                bookings: {
                    where: {
                        status: "BOOKED",
                        checkOut: { gte: new Date() }
                    },
                    select: { id: true }
                }
            }
        });

        // Get earnings summary
        const earnings = await db.earnings.aggregate({
            where: { 
                userId,
                type: "PARTNER_EARNINGS"
            },
            _sum: {
                amount: true
            }
        });

        // Get recent bookings
        const recentBookings = await db.booking.findMany({
            where: {
                hotel: { ownerId: userId },
                status: "BOOKED"
            },
            take: 5,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                hotel: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            message: "Partner dashboard data fetched successfully",
            data: {
                totalHotels: hotels.length,
                totalBookings: hotels.reduce((sum, hotel) => sum + hotel._count.bookings, 0),
                activeBookings: hotels.reduce((sum, hotel) => sum + hotel.bookings.length, 0),
                totalEarnings: earnings._sum.amount || 0,
                walletBalance: req.user.walletBalance,
                hotels: hotels.map(hotel => ({
                    id: hotel.id,
                    name: hotel.name,
                    city: hotel.city,
                    totalBookings: hotel._count.bookings,
                    activeBookings: hotel.bookings.length,
                    availableRooms: hotel.availableRooms
                })),
                recentBookings: recentBookings.map(booking => ({
                    id: booking.id,
                    userName: booking.user.name,
                    userEmail: booking.user.email,
                    hotelName: booking.hotel.name,
                    checkIn: booking.checkIn,
                    checkOut: booking.checkOut,
                    totalAmount: booking.totalAmount
                }))
            }
        });
    } catch (error) {
        console.error("Error fetching partner dashboard:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getPartnerHotelBookings = async (req, res) => {
    try {
        const userId = req.user.id;
        const { hotelId } = req.params;

        // Verify the hotel belongs to the partner
        const hotel = await db.hotel.findFirst({
            where: {
                id: hotelId,
                ownerId: userId
            }
        });

        if (!hotel) {
            return res.status(404).json({
                success: false,
                message: "Hotel not found or you don't have permission"
            });
        }

        const bookings = await db.booking.findMany({
            where: { hotelId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                earnings: {
                    where: { type: "PARTNER_EARNINGS" }
                }
            },
            orderBy: {
                checkIn: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            message: "Hotel bookings fetched successfully",
            data: bookings.map(booking => ({
                id: booking.id,
                user: booking.user,
                checkIn: booking.checkIn,
                checkOut: booking.checkOut,
                guests: booking.guests,
                totalAmount: booking.totalAmount,
                partnerEarnings: booking.earnings[0]?.amount || 0,
                status: booking.status,
                createdAt: booking.createdAt
            }))
        });
    } catch (error) {
        console.error("Error fetching hotel bookings:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const requestWithdrawal = async (req, res) => {
    try {
        const userId = req.user.id;
        const userRole = req.user.role;
        const { amount, paymentMethodId } = req.body;

        if (userRole !== "PARTNER") {
            return res.status(403).json({
                success: false,
                message: "Only partners can request withdrawals"
            });
        }

        // Verify payment method belongs to user
        const paymentMethod = await db.paymentMethod.findFirst({
            where: {
                id: paymentMethodId,
                userId
            }
        });

        if (!paymentMethod) {
            return res.status(404).json({
                success: false,
                message: "Payment method not found"
            });
        }

        const user = await db.user.findUnique({
            where: { id: userId }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (amount > user.walletBalance) {
            return res.status(400).json({
                success: false,
                message: "Insufficient balance for withdrawal"
            });
        }

        if (amount < 100) { // Minimum withdrawal amount
            return res.status(400).json({
                success: false,
                message: "Minimum withdrawal amount is ₹100"
            });
        }

        const withdrawal = await db.withdrawal.create({
            data: {
                userId,
                amount,
                paymentMethodId,
                status: "PENDING"
            }
        });

        // Lock the amount by deducting from wallet balance
        await db.user.update({
            where: { id: userId },
            data: {
                walletBalance: { decrement: amount }
            }
        });

        return res.status(201).json({
            success: true,
            message: "Withdrawal request submitted",
            data: withdrawal
        });
    } catch (error) {
        console.error("Error creating withdrawal request:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getPartnerWithdrawals = async (req, res) => {
    try {
        const userId = req.user.id;

        const withdrawals = await db.withdrawal.findMany({
            where: { userId },
            include: {
                paymentMethod: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            message: "Withdrawals fetched successfully",
            data: withdrawals.map(withdrawal => ({
                id: withdrawal.id,
                amount: withdrawal.amount,
                status: withdrawal.status,
                paymentMethod: {
                    type: withdrawal.paymentMethod.type,
                    lastFour: withdrawal.paymentMethod.type === "BANK_ACCOUNT" 
                        ? withdrawal.paymentMethod.accountNumber.slice(-4)
                        : withdrawal.paymentMethod.upiId.split('@')[0]
                },
                createdAt: withdrawal.createdAt,
                updatedAt: withdrawal.updatedAt
            }))
        });
    } catch (error) {
        console.error("Error fetching withdrawals:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};