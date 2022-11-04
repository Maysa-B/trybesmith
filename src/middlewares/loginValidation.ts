import { NextFunction, Request, Response } from 'express';
import ILogin from '../interfaces/login';

export default (req: Request<unknown, unknown, ILogin>, res: Response, next: NextFunction) => {
  if (!req.body.username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!req.body.password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};