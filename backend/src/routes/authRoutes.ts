import { Router } from 'express';
import { register, login, refreshToken } from '../controllers/authController';
import { validateRegistration, validateLogin } from '../middleware/validation';
import { loginLimiter, registrationLimiter } from '../middleware/rateLimiting';

const router = Router();

// POST /api/auth/register - User registration
router.post('/register', registrationLimiter, validateRegistration, register);

// POST /api/auth/login - User login
router.post('/login', loginLimiter, validateLogin, login);

// POST /api/auth/refresh - Refresh access token
router.post('/refresh', refreshToken);

export default router;