import { db } from "../utils/db.js"
import { razorpayInstance } from "../utils/razorpay.js"
import crypto from "crypto";

const PLATFORM_FEE_PERCENTAGE = 10;

export const addPaymentMethod = async (req, res) => {
    try {
        const userId = req.user.id;
        const { type, upiId, bankName, accountNumber, ifscCode, accountHolderName } = req.body;

        // Validate input based on type
        if (type === "UPI" && !upiId) {
            return res.status(400).json({
                success: false,
                message: "UPI ID is required for UPI payment method"
            });
        }

        if (type === "BANK_ACCOUNT" && (!bankName || !accountNumber || !ifscCode || !accountHolderName)) {
            return res.status(400).json({
                success: false,
                message: "All bank details are required for bank account payment method"
            });
        }

        // Check if this is the first payment method - set as default
        const existingMethods = await db.paymentMethod.count({
            where: { userId }
        });

        const isDefault = existingMethods === 0;

        const paymentMethod = await db.paymentMethod.create({
            data: {
                userId,
                type,
                upiId: type === "UPI" ? upiId : null,
                bankName: type === "BANK_ACCOUNT" ? bankName : null,
                accountNumber: type === "BANK_ACCOUNT" ? accountNumber : null,
                ifscCode: type === "BANK_ACCOUNT" ? ifscCode : null,
                accountHolderName: type === "BANK_ACCOUNT" ? accountHolderName : null,
                isDefault
            }
        });

        return res.status(201).json({
            success: true,
            message: "Payment method added successfully",
            data: paymentMethod
        });
    } catch (error) {
        console.error("Error adding payment method:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const getPaymentMethods = async (req, res) => {
    try {
        const userId = req.user.id;

        const paymentMethods = await db.paymentMethod.findMany({
            where: { userId },
            orderBy: {
                isDefault: 'desc'
            }
        });

        return res.status(200).json({
            success: true,
            message: "Payment methods fetched successfully",
            data: paymentMethods
        });
    } catch (error) {
        console.error("Error fetching payment methods:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const setDefaultPaymentMethod = async (req, res) => {
    try {
        const userId = req.user.id;
        const { paymentMethodId } = req.body;

        // First reset all payment methods to not default
        await db.paymentMethod.updateMany({
            where: { userId },
            data: { isDefault: false }
        });

        // Then set the selected one as default
        const paymentMethod = await db.paymentMethod.update({
            where: {
                id: paymentMethodId,
                userId
            },
            data: { isDefault: true }
        });

        if (!paymentMethod) {
            return res.status(404).json({
                success: false,
                message: "Payment method not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Default payment method updated successfully",
            data: paymentMethod
        });
    } catch (error) {
        console.error("Error setting default payment method:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};

export const deletePaymentMethod = async (req, res) => {
    try {
        const userId = req.user.id;
        const { paymentMethodId } = req.params;

        // Check if this is the default payment method
        const paymentMethod = await db.paymentMethod.findUnique({
            where: { id: paymentMethodId }
        });

        if (!paymentMethod) {
            return res.status(404).json({
                success: false,
                message: "Payment method not found"
            });
        }

        if (paymentMethod.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: "You don't have permission to delete this payment method"
            });
        }

        // If it's the default, we need to set another one as default
        if (paymentMethod.isDefault) {
            const otherMethods = await db.paymentMethod.findMany({
                where: {
                    userId,
                    NOT: { id: paymentMethodId }
                },
                take: 1
            });

            if (otherMethods.length > 0) {
                await db.paymentMethod.update({
                    where: { id: otherMethods[0].id },
                    data: { isDefault: true }
                });
            }
        }

        await db.paymentMethod.delete({
            where: { id: paymentMethodId }
        });

        return res.status(200).json({
            success: true,
            message: "Payment method deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting payment method:", error);
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal server error"
        });
    }
};