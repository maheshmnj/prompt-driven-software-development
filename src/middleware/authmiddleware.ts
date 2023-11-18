import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'your-default-secret-key';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    // Optionally, you can set decoded information directly on req.locals or req.session
    // req.locals.user = decoded;
    // req.session.user = decoded;
    next();
  } catch (error) {
    console.error('Error during token verification:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
