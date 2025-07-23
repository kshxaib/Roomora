import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

const PLATFORM_FEE_PERCENTAGE = 10;

export const processWithdrawal = async (req, res) => {
    try {
        const adminId = req.user.id;
        const { withdrawalId, action, remarks } = req.body;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can process withdrawals"
            });
        }

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
            // In a real app, here you would initiate the actual payment to partner
            // For now, we'll just mark it as approved
            
            await db.withdrawal.update({
                where: { id: withdrawalId },
                data: {
                    status: "APPROVED",
                    remarks: remarks || null
                }
            });

            // Mark associated earnings as withdrawn
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
            // Return funds to partner's wallet
            await db.$transaction([
                db.withdrawal.update({
                    where: { id: withdrawalId },
                    data: {
                        status: "REJECTED",
                        remarks: remarks || null
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
    try {
        const adminId = req.user.id;

        const admin = await db.user.findUnique({
            where: { id: adminId, role: "ADMIN" }
        });

        if (!admin) {
            return res.status(403).json({
                success: false,
                message: "Only admin can view all withdrawals"
            });
        }

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
                createdAt: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            message: "Withdrawals fetched successfully",
            data: withdrawals.map(withdrawal => ({
                id: withdrawal.id,
                partner: {
                    id: withdrawal.user.id,
                    name: withdrawal.user.name,
                    email: withdrawal.user.email
                },
                amount: withdrawal.amount,
                status: withdrawal.status,
                paymentMethod: {
                    type: withdrawal.paymentMethod.type,
                    details: withdrawal.paymentMethod.type === "BANK_ACCOUNT"
                        ? `${withdrawal.paymentMethod.bankName} (${withdrawal.paymentMethod.accountNumber.slice(-4)})`
                        : withdrawal.paymentMethod.upiId
                },
                createdAt: withdrawal.createdAt,
                updatedAt: withdrawal.updatedAt,
                remarks: withdrawal.remarks
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