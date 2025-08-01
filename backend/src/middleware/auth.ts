import { Request, Response, NextFunction } from 'express';
import { Role } from '../generated/prisma';
import { verifyAccessToken, extractTokenFromHeader, JWTPayload } from '../utils/auth';

export interface AuthenticatedRequest extends Request {
  user?: JWTPayload;
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = extractTokenFromHeader(req.headers.authorization);
  
  if (!token) {
    return res.status(401).json({ 
      error: 'Authentication required',
      message: 'Access token is missing' 
    });
  }

  const payload = verifyAccessToken(token);
  
  if (!payload) {
    return res.status(401).json({ 
      error: 'Invalid token',
      message: 'Access token is invalid or expired' 
    });
  }

  req.user = payload;
  next();
};

export const authorize = (allowedRoles: Role[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ 
        error: 'Authentication required',
        message: 'User not authenticated' 
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: 'Access denied',
        message: `Required role: ${allowedRoles.join(' or ')}` 
      });
    }

    next();
  };
};