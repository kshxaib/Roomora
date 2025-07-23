import jwt from 'jsonwebtoken';
import { db } from "../utils/db.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized access" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await db.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                avatarUrl: true,
                walletBalance: true
            }
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "Unauthorized access" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error.message);
        return res.status(500).json({ success: false, message: error?.message || "Internal server error" });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const user = await db.user.findUnique({
            where: { id: userId },
            select: { role: true }
        });

        if (!user || user.role !== "ADMIN") {
            return res.status(403).json({ success:false,message:error?.message || "Forbidden access" });
        }

        next();
    } catch (error) {
        console.error("isAdmin middleware error:", error.message);
        return res.status(500).json({ success: false, message: error?.message ||"Internal server error" });
    }
};

export const isPartner = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const user = await db.user.findUnique({
            where: { id: userId },
            select: { role: true }
        });

        if (!user || user.role !== "PARTNER") {
            return res.status(403).json({ success:false,message:error?.message || "Forbidden access" });
        }

        next();
    } catch (error) {
        console.error("isAdmin middleware error:", error.message);
        return res.status(500).json({ success: false, message: error?.message ||"Internal server error" });
    }
};
