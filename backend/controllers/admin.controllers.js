import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

const PLATFORM_FEE_PERCENTAGE = 10;

export const processWithdrawal = async (req, res) => {
    try {
        const adminId = req.user.id;
        const { action, remarks } = req.body;
        const withdrawalId = req.params.id; // ✅ take id from route params

        // ✅ Check if admin exists
        const admin = await db.user.findFirst({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can process withdrawals"
            });
        }

        // ✅ Fetch withdrawal
        const withdrawal = await db.withdrawal.findUnique({
            where: { id: withdrawalId },
            include: {
                user: true,
                paymentMethod: true
            }
        });

        if (!withdrawal) {
            return res.status(404).json({
                success: false,
                message: "Withdrawal not found"
            });
        }

        if (withdrawal.status !== "PENDING") {
            return res.status(400).json({
                success: false,
                message: "Withdrawal already processed"
            });
        }

        if (action === "APPROVE") {
            // ✅ Approve withdrawal
            await db.withdrawal.update({
                where: { id: withdrawalId },
                data: {
                    status: "APPROVED",
                    remarks: remarks || null,
                    processedBy: adminId,
                    processedAt: new Date()
                }
            });

            // ✅ Mark associated earnings as withdrawn
            await db.earnings.updateMany({
                where: {
                    userId: withdrawal.userId,
                    isWithdrawn: false
                },
                data: {
                    isWithdrawn: true,
                    withdrawnAt: new Date()
                }
            });

        } else if (action === "REJECT") {
            // ✅ Reject & return funds
            await db.$transaction([
                db.withdrawal.update({
                    where: { id: withdrawalId },
                    data: {
                        status: "REJECTED",
                        remarks: remarks || null,
                        processedBy: adminId,
                        processedAt: new Date()
                    }
                }),
                db.user.update({
                    where: { id: withdrawal.userId },
                    data: {
                        walletBalance: { increment: withdrawal.amount }
                    }
                })
            ]);

        } else {
            return res.status(400).json({
                success: false,
                message: "Invalid action"
            });
        }

        return res.status(200).json({
            success: true,
            message: `Withdrawal ${action === "APPROVE" ? "approved" : "rejected"} successfully`
        });

    } catch (error) {
        console.error("Error processing withdrawal:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getAllWithdrawals = async (req, res) => {
    console.log("🔔 Withdrawal API request received");

    try {
        if (!req.user || !req.user.id) {
            console.log("❌ No user info in request");
            return res.status(401).json({
                success: false,
                message: "Unauthorized request"
            });
        }

        const adminId = req.user.id;
        console.log("👤 Requested by userId:", adminId);

        const admin = await db.user.findUnique({
            where: { id: adminId }
        });

        if (!admin) {
            console.log("❌ User not found in DB");
            return res.status(403).json({
                success: false,
                message: "Only admin can view all withdrawals"
            });
        }

        // Optional: check role (if you have role column in User model)
        if (admin.role !== "ADMIN") {
            console.log("❌ User is not admin:", admin.role);
            return res.status(403).json({
                success: false,
                message: "Only admin can view all withdrawals"
            });
        }

        console.log("✅ Admin verified, fetching withdrawals...");

        const withdrawals = await db.withdrawal.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                paymentMethod: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });

        console.log(`📦 Total withdrawals found: ${withdrawals.length}`);

        return res.status(200).json({
            success: true,
            message: "Withdrawals fetched successfully",
            data: withdrawals.map((withdrawal) => ({
                id: withdrawal.id,
                partner: {
                    id: withdrawal.user.id,
                    name: withdrawal.user.name,
                    email: withdrawal.user.email
                },
                amount: withdrawal.amount,
                status: withdrawal.status,
                paymentMethod: withdrawal.paymentMethod
                    ? {
                          type: withdrawal.paymentMethod.type,
                          details:
                              withdrawal.paymentMethod.type === "BANK_ACCOUNT"
                                  ? `${withdrawal.paymentMethod.bankName || "Unknown Bank"} (${withdrawal.paymentMethod.accountNumber?.slice(-4) || "XXXX"})`
                                  : withdrawal.paymentMethod.upiId || "N/A"
                      }
                    : { type: "N/A", details: "No payment method linked" },
                createdAt: withdrawal.createdAt,
                updatedAt: withdrawal.updatedAt,
                remarks: withdrawal.remarks
            }))
        });
    } catch (error) {
        console.error("💥 Error fetching withdrawals:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getDashboardStats = async (req, res) => {
    try {
        const adminId = req.user.id;

        const admin = await db.user.findFirst({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can access dashboard stats"
            });
        }

        const [
            totalUsers,
            totalPartners,
            totalHotels,
            totalBookings,
            totalRevenue,
            pendingWithdrawals,
            pendingHotels,
            recentBookings
        ] = await Promise.all([
            db.user.count(),
            db.user.count({ where: { role: "PARTNER" } }),
            db.hotel.count(),
            db.booking.count(),
            db.booking.aggregate({
                _sum: { totalAmount: true },
                where: { isPaid: true }
            }),
            db.withdrawal.count({ where: { status: "PENDING" } }),
            db.hotel.count({ where: { isActive: false } }),
            db.booking.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: { select: { name: true } },
                    hotel: { select: { name: true } }
                }
            })
        ]);

        // ✅ Admin earning calculation (example: 10% commission)
        const adminCommissionRate = 0.1; 
        const totalRevenueValue = totalRevenue._sum.totalAmount || 0;
        const adminEarnings = totalRevenueValue * adminCommissionRate;

        // Example growth rate (static for now)
        const growthRate = 25;

        return res.status(200).json({
            success: true,
            message: "Dashboard stats fetched successfully",
            data: {
                totalUsers,
                totalPartners,
                totalHotels,
                totalBookings,
                totalRevenue: totalRevenueValue,
                adminEarnings,  // ✅ NEW FIELD
                pendingWithdrawals,
                pendingHotels,
                growthRate,
                recentBookings: recentBookings.map(booking => ({
                    id: booking.id,
                    userName: booking.user.name,
                    hotelName: booking.hotel.name,
                    totalAmount: booking.totalAmount,
                    status: booking.status,
                    createdAt: booking.createdAt
                }))
            }
        });
    } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const adminId = req.user.id;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can view all users"
            });
        }

        const { page = 1, limit = 10, search = '', role = '' } = req.query;
        const skip = (page - 1) * limit;

        const whereClause = {
            AND: [
                search ? {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } }
                    ]
                } : {},
                role ? { role } : {}
            ]
        };

        const [users, total] = await Promise.all([
            db.user.findMany({
                where: whereClause,
                skip,
                take: parseInt(limit),
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    isActive: true,
                    createdAt: true,
                    totalEarnings: true,
                    walletBalance: true,
                    _count: {
                        select: {
                            bookings: true,
                            hotels: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            }),
            db.user.count({ where: whereClause })
        ]);

        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: {
                users: users.map(user => ({
                    ...user,
                    totalBookings: user._count.bookings,
                    totalHotels: user._count.hotels
                })),
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getAllBookings = async (req, res) => {
    try {
        const adminId = req.user.id;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can view all bookings"
            });
        }

        const { page = 1, limit = 10, status = '', search = '' } = req.query;
        const skip = (page - 1) * limit;

        const whereClause = {
            AND: [
                status ? { status } : {},
                search ? {
                    OR: [
                        { user: { name: { contains: search, mode: 'insensitive' } } },
                        { hotel: { name: { contains: search, mode: 'insensitive' } } }
                    ]
                } : {}
            ]
        };

        const [bookings, total] = await Promise.all([
            db.booking.findMany({
                where: whereClause,
                skip,
                take: parseInt(limit),
                include: {
                    user: { select: { name: true, email: true } },
                    hotel: { select: { name: true, city: true } }
                },
                orderBy: { createdAt: 'desc' }
            }),
            db.booking.count({ where: whereClause })
        ]);

        return res.status(200).json({
            success: true,
            message: "Bookings fetched successfully",
            data: {
                bookings: bookings.map(booking => ({
                    id: booking.id,
                    userName: booking.user.name,
                    userEmail: booking.user.email,
                    hotelName: booking.hotel.name,
                    hotelCity: booking.hotel.city,
                    checkIn: booking.checkIn,
                    checkOut: booking.checkOut,
                    guests: booking.guests,
                    totalAmount: booking.totalAmount,
                    status: booking.status,
                    isPaid: booking.isPaid,
                    partnerAmount: booking.partnerAmount,
                    adminAmount: booking.adminAmount,
                    createdAt: booking.createdAt
                })),
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getAllHotels = async (req, res) => {
    try {
        const adminId = req.user.id;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can view all hotels"
            });
        }

        const { page = 1, limit = 10, status = 'all', search = '' } = req.query;
        const skip = (page - 1) * limit;

        const whereClause = {
            AND: [
                status === 'active' ? { isActive: true } : 
                status === 'inactive' ? { isActive: false } : {},
                search ? {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { city: { contains: search, mode: 'insensitive' } },
                        { owner: { name: { contains: search, mode: 'insensitive' } } }
                    ]
                } : {}
            ]
        };

        const [hotels, total] = await Promise.all([
            db.hotel.findMany({
                where: whereClause,
                skip,
                take: parseInt(limit),
                include: {
                    owner: { select: { name: true, email: true } },
                    _count: {
                        select: {
                            bookings: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            }),
            db.hotel.count({ where: whereClause })
        ]);

        return res.status(200).json({
            success: true,
            message: "Hotels fetched successfully",
            data: {
                hotels: hotels.map(hotel => ({
                    id: hotel.id,
                    name: hotel.name,
                    city: hotel.city,
                    address: hotel.address,
                    price: hotel.price,
                    rating: hotel.rating,
                    totalRooms: hotel.totalRooms,
                    availableRooms: hotel.availableRooms,
                    isActive: hotel.isActive,
                    ownerName: hotel.owner.name,
                    ownerEmail: hotel.owner.email,
                    totalBookings: hotel._count.bookings,
                    createdAt: hotel.createdAt,
                    images: hotel.images
                })),
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        });
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const updateUserStatus = async (req, res) => {
    try {
        const adminId = req.user.id;
        const { id } = req.params;
        const { isActive } = req.body;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can update user status"
            });
        }

        const user = await db.user.findUnique({
            where: { id }
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const updatedUser = await db.user.update({
            where: { id },
            data: { isActive }
        });

        return res.status(200).json({
            success: true,
            message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
            data: updatedUser
        });
    } catch (error) {
        console.error("Error updating user status:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};
;