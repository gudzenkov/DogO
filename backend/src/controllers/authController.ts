import { Request, Response } from 'express';
import { hashPassword, verifyPassword, generateTokens, verifyRefreshToken } from '../utils/auth';
import { RegisterRequest, LoginRequest, RefreshTokenRequest, AuthResponse } from '../types/auth';
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

export const login = async (req: Request<{}, AuthResponse, LoginRequest>, res: Response<AuthResponse>) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await db.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Email or password is incorrect'
      } as any);
    }

    // Verify password
    const isValidPassword = await verifyPassword(password, user.passwordHash);

    if (!isValidPassword) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Email or password is incorrect'
      } as any);
    }

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens({
      id: user.id,
      email: user.email,
      role: user.role
    });

    logger.info(`User logged in: ${email}`);

    res.status(200).json({
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
    logger.error('Login error:', error);
    res.status(500).json({
      error: 'Login failed',
      message: 'Internal server error'
    } as any);
  }
};

export const refreshToken = async (req: Request<{}, AuthResponse, RefreshTokenRequest>, res: Response<AuthResponse>) => {
  try {
    const { refreshToken: token } = req.body;

    if (!token) {
      return res.status(401).json({
        error: 'Refresh token required',
        message: 'No refresh token provided'
      } as any);
    }

    // Verify refresh token
    const payload = verifyRefreshToken(token);

    if (!payload) {
      return res.status(401).json({
        error: 'Invalid refresh token',
        message: 'Refresh token is invalid or expired'
      } as any);
    }

    // Find user to ensure they still exist
    const user = await db.user.findUnique({
      where: { id: payload.userId }
    });

    if (!user) {
      return res.status(401).json({
        error: 'User not found',
        message: 'User associated with token no longer exists'
      } as any);
    }

    // Generate new tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      id: user.id,
      email: user.email,
      role: user.role
    });

    res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        firstName: user.firstName ?? undefined,
        lastName: user.lastName ?? undefined
      },
      accessToken,
      refreshToken: newRefreshToken
    });

  } catch (error) {
    logger.error('Refresh token error:', error);
    res.status(500).json({
      error: 'Token refresh failed',
      message: 'Internal server error'
    } as any);
  }
};