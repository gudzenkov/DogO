import { Router } from 'express';
import { authenticate, authorize, AuthenticatedRequest } from '../middleware/auth';
import { Response } from 'express';

const router = Router();

// Protected route - requires authentication
router.get('/profile', authenticate, (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Profile accessed successfully',
    user: req.user
  });
});

// Owner-only route
router.get('/owner-dashboard', authenticate, authorize(['OWNER']), (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Owner dashboard accessed',
    user: req.user
  });
});

// Trainer-only route
router.get('/trainer-dashboard', authenticate, authorize(['TRAINER']), (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Trainer dashboard accessed',
    user: req.user
  });
});

// Admin-only route
router.get('/admin-panel', authenticate, authorize(['ADMIN']), (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Admin panel accessed',
    user: req.user
  });
});

// Multi-role route (Trainer or Admin)
router.get('/content-management', authenticate, authorize(['TRAINER', 'ADMIN']), (req: AuthenticatedRequest, res: Response) => {
  res.json({
    message: 'Content management accessed',
    user: req.user,
    allowedRoles: ['TRAINER', 'ADMIN']
  });
});

export default router;