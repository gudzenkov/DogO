import { Request, Response, NextFunction } from 'express';
import { RegisterRequest, LoginRequest } from '../types/auth';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateRegistration = (req: Request<{}, {}, RegisterRequest>, res: Response, next: NextFunction) => {
  const { email, password, firstName, lastName } = req.body;
  const errors: string[] = [];

  // Validate required fields
  if (!email) {
    errors.push('Email is required');
  } else if (!validateEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  if (!password) {
    errors.push('Password is required');
  } else {
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      errors.push(...passwordValidation.errors);
    }
  }

  // Validate optional fields
  if (firstName && firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters long');
  }

  if (lastName && lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters long');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      message: 'Please correct the following errors',
      details: errors
    });
  }

  next();
};

export const validateLogin = (req: Request<{}, {}, LoginRequest>, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const errors: string[] = [];

  if (!email) {
    errors.push('Email is required');
  } else if (!validateEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  if (!password) {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      message: 'Please correct the following errors',
      details: errors
    });
  }

  next();
};