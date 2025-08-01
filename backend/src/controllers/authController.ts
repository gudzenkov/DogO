import { Request, Response } from 'express';
import { hashPassword, generateTokens } from '../utils/auth';
import { RegisterRequest, AuthResponse } from '../types/auth';
import db from '../utils/db';
import logger from '../utils/logger';

export const register = async (req: Request<{}, AuthResponse, RegisterRequest>, res: Response<AuthResponse>) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(409).json({
        error: 'User already exists',
        message: 'An account with this email already exists'
      } as any);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Create user
    const user = await db.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        role: 'OWNER' // Default role
      }
    });

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens({
      id: user.id,
      email: user.email,
      role: user.role
    });

    logger.info(`User registered: ${email}`);

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName ?? undefined,
        lastName: user.lastName ?? undefined
      },
      accessToken,
      refreshToken
    });

  } catch (error) {
    logger.error('Registration error:', error);
    res.status(500).json({
      error: 'Registration failed',
      message: 'Internal server error'
    } as any);
  }
};