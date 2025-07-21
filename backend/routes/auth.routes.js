import express from 'express';
import { getCurrentUser, login, logout, register } from '../controllers/auth.controllers.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)
authRoutes.post('/logout', logout)
authRoutes.post('/profile', authMiddleware, getCurrentUser)

export default authRoutes;