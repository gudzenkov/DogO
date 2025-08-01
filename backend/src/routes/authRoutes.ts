import { Router } from 'express';
import { register } from '../controllers/authController';
import { validateRegistration } from '../middleware/validation';
import { registrationLimiter } from '../middleware/rateLimiting';

const router = Router();

// POST /api/auth/register - User registration
router.post('/register', registrationLimiter, validateRegistration, register);

export default router;