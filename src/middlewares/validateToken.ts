import { NextFunction, Request, Response } from 'express';
import decodeToken from '../jwt/decodeToken';

export default async (req: Request, res: Response, next: NextFunction) => {
  if (!req.header('Authorization')) return res.status(401).json({ message: 'Token not found' });

  const decoded = decodeToken(req.header('Authorization') as string);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.body = {
    body: req.body,
    token: decoded,
  };

  next(); 
};