import rateLimit from 'express-rate-limit';

// Rate limiting for registration - 3 attempts per hour
export const registrationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // Limit each IP to 3 registration attempts per hour
  message: {
    error: 'Too many registration attempts',
    message: 'Please try again after 1 hour',
    retryAfter: 60 * 60 * 1000
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// General API rate limiting - 100 requests per 15 minutes
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Please try again later',
    retryAfter: 15 * 60 * 1000
  },
  standardHeaders: true,
  legacyHeaders: false,
});