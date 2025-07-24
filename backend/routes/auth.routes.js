import express from 'express';
import { getCurrentUser, login, logout, register,  verifyOtp, googleRegister, googleLogin, SendOtpForgotPassword, changePassword } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)
authRoutes.post('/forgot-password', SendOtpForgotPassword)
authRoutes.post('/verify-otp/:email', verifyOtp)
authRoutes.post('/change-password', changePassword)
authRoutes.post('/profile', authMiddleware, getCurrentUser)
authRoutes.post('/google/register', googleRegister)
authRoutes.post('/google/login', googleLogin)

export default authRoutes;